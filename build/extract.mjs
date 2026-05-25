// Slidev → JSON extractor.
// For each slide, navigates to the dev server, waits for fonts/images,
// walks the rendered DOM, and writes one JSON file per slide describing
// every text node, image, and decorative box in 1280x720 slide-space.
//
// Usage:  node build/extract.mjs [--port 3033] [--out build/extract] [--total 26]

import { chromium } from 'playwright-chromium';
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import path from 'node:path';

const args = Object.fromEntries(
  process.argv.slice(2).reduce((acc, a, i, arr) => {
    if (a.startsWith('--')) acc.push([a.slice(2), arr[i + 1]]);
    return acc;
  }, []),
);

const PORT = +(args.port || 3033);
const OUT = args.out || 'build/extract';
const TOTAL = +(args.total || 26);
const BASE = `http://localhost:${PORT}`;
const SLIDE_W = 1280;
const SLIDE_H = 720;

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

// Runs inside the browser. Walks the rendered slide and returns
// arrays of texts/images/boxes in slide-local pixel coords.
const PAGE_FN = () => {
  // Locate the actual slide container so coordinates ignore navbar/chrome.
  const root =
    document.querySelector('#slide-content') ||
    document.querySelector('.slidev-page') ||
    document.querySelector('.slidev-slide') ||
    document.querySelector('[id^="slide-"]') ||
    document.body;
  const rootRect = root.getBoundingClientRect();

  // Account for Slidev's transform: scale to slide-space.
  const scaleX = root.offsetWidth / rootRect.width;
  const scaleY = root.offsetHeight / rootRect.height;
  const toSlide = (r) => ({
    x: (r.left - rootRect.left) * scaleX,
    y: (r.top - rootRect.top) * scaleY,
    w: r.width * scaleX,
    h: r.height * scaleY,
  });

  const texts = [];
  const images = [];
  const boxes = [];
  const seenText = new Set();

  // Recursively walk; collect text from elements whose direct children
  // include text nodes, plus all <img>, plus decorative boxes (have bg or shadow).
  const walk = (el) => {
    if (!el || el.nodeType !== 1) return;
    const cs = window.getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || +cs.opacity === 0) return;

    const tag = el.tagName.toLowerCase();
    const rect = el.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) {
      // Still recurse — children may overflow.
      for (const c of el.children) walk(c);
      return;
    }
    const r = toSlide(rect);
    // Skip nodes outside the slide canvas.
    if (r.x + r.w < -2 || r.y + r.h < -2 || r.x > 1284 || r.y > 724) {
      for (const c of el.children) walk(c);
      return;
    }

    if (tag === 'img') {
      images.push({
        src: el.currentSrc || el.src,
        alt: el.alt || '',
        filter: cs.filter && cs.filter !== 'none' ? cs.filter : null,
        opacity: parseFloat(cs.opacity),
        ...r,
      });
      return;
    }
    if (tag === 'svg') {
      // Inline SVGs use fill="currentColor" — when serialized into a data: URL they
      // lose the cascading color context and default to black. Bake the inherited
      // color onto the SVG root so currentColor resolves correctly off-DOM.
      const clone = el.cloneNode(true);
      clone.setAttribute('style', `${clone.getAttribute('style') || ''};color:${cs.color}`);
      // Ensure preserveAspectRatio + viewBox so the SVG scales cleanly in the
      // rasterizer wrapper.
      if (!clone.getAttribute('xmlns'))
        clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      const serialized = new XMLSerializer().serializeToString(clone);
      images.push({
        src: 'data:image/svg+xml;utf8,' + encodeURIComponent(serialized),
        alt: 'inline-svg',
        filter: cs.filter && cs.filter !== 'none' ? cs.filter : null,
        opacity: parseFloat(cs.opacity),
        ...r,
      });
      return;
    }

    // Decide if this is a block-like container; if so, capture *all* its inline
    // text (own + inline descendants) as one text segment. Block descendants
    // are not captured here — they'll be picked up by their own recursion.
    // "inline" / "contents" merge into parent text flow.
    // "inline-block" / "inline-flex" / "inline-grid" are atomic — their own visual box,
    // captured separately (so chips, kickers, badges keep their own styling).
    const isInlineLike = (n) => {
      if (!n || n.nodeType !== 1) return false;
      if (n.tagName === 'BR') return true;
      const ds = window.getComputedStyle(n).display;
      return ds === 'inline' || ds === 'contents';
    };
    const collectInline = (root) => {
      let s = '';
      for (const c of root.childNodes) {
        if (c.nodeType === 3) {
          s += c.nodeValue || '';
        } else if (c.nodeType === 1) {
          if (c.tagName === 'BR') {
            s += '\n';
          } else if (isInlineLike(c)) {
            s += collectInline(c);
          }
          // block descendants are intentionally skipped here
        }
      }
      return s;
    };

    let directText = '';
    if (!isInlineLike(el)) {
      // Block: own full inline content.
      directText = collectInline(el);
    } else {
      // Inline: skip — captured by nearest block ancestor. Still recurse into children
      // so block descendants of an oddly-displayed inline get picked up.
    }
    directText = directText.replace(/[ \t]+/g, ' ').replace(/\s*\n\s*/g, '\n').trim();

    if (directText) {
      const key = `${Math.round(r.x)}:${Math.round(r.y)}:${directText}`;
      if (!seenText.has(key)) {
        seenText.add(key);
        texts.push({
          text: directText,
          ...r,
          fontFamily: cs.fontFamily,
          fontSize: parseFloat(cs.fontSize),
          fontWeight: cs.fontWeight,
          fontStyle: cs.fontStyle,
          letterSpacing: cs.letterSpacing,
          lineHeight: cs.lineHeight,
          color: cs.color,
          textAlign: cs.textAlign,
          textTransform: cs.textTransform,
          writingMode: cs.writingMode,
          opacity: parseFloat(cs.opacity),
          tag,
        });
      }
    }

    // Decorative box if non-transparent background, ring, gradient, or border.
    const bg = cs.backgroundColor;
    const bgImage = cs.backgroundImage;
    const bw = parseFloat(cs.borderTopWidth) || 0;
    const isOpaqueBg = bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent';
    const isGradient = bgImage && bgImage !== 'none' && bgImage.includes('gradient');
    const hasShadow = cs.boxShadow && cs.boxShadow !== 'none';
    const hasBorder = bw > 0 && cs.borderTopColor && cs.borderTopColor !== 'rgba(0, 0, 0, 0)';
    if (
      (isOpaqueBg || isGradient || hasBorder || hasShadow) &&
      tag !== 'body' &&
      tag !== 'html'
    ) {
      boxes.push({
        ...r,
        bg: isOpaqueBg ? bg : null,
        gradient: isGradient ? bgImage : null,
        borderRadius: cs.borderRadius,
        borderWidth: bw,
        borderColor: hasBorder ? cs.borderTopColor : null,
        shadow: hasShadow ? cs.boxShadow : null,
        opacity: parseFloat(cs.opacity),
        zIndex: cs.zIndex === 'auto' ? 0 : +cs.zIndex || 0,
        tag,
      });
    }

    for (const c of el.children) walk(c);
  };

  walk(root);

  // Page background (look up to body to capture chapter accent).
  const bodyCs = window.getComputedStyle(document.body);
  const rootElCs = window.getComputedStyle(root);

  return {
    width: root.offsetWidth || 1280,
    height: root.offsetHeight || 720,
    background: rootElCs.backgroundColor,
    bodyBackground: bodyCs.backgroundColor,
    texts,
    images,
    boxes,
  };
};

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext({
  viewport: { width: SLIDE_W, height: SLIDE_H },
  deviceScaleFactor: 1,
});
const page = await ctx.newPage();

// Hide Slidev's navigation chrome so it doesn't show up in extraction.
await ctx.addInitScript(() => {
  const css = `
    .slidev-nav, .slidev-controls, .slidev-page-info, [class*="nav-controls"],
    nav, .slidev-vclick-target.slidev-vclick-hidden { opacity: 0 !important; visibility: hidden !important; pointer-events: none !important; }
    .slidev-vclick-hidden { opacity: 1 !important; visibility: visible !important; }
  `;
  const style = document.createElement('style');
  style.id = 'slidev-export-hide-chrome';
  style.textContent = css;
  document.documentElement.appendChild(style);
});

const results = [];

for (let n = 1; n <= TOTAL; n++) {
  // ?clicks=999 reveals all click animations.
  const url = `${BASE}/${n}?clicks=999`;
  process.stdout.write(`[${n}/${TOTAL}] ${url} ... `);

  await page.goto(url, { waitUntil: 'commit', timeout: 30000 });
  // Make sure fonts loaded and at least one slide root is present.
  await page.evaluate(async () => {
    if (document.fonts && document.fonts.ready) await document.fonts.ready;
  });
  // Slidev's slide containers carry data-slidev-no or .slidev-page; wait for one.
  await page
    .waitForSelector(
      '#slide-content, .slidev-page, .slidev-slide, [id^="slide-"]',
      { timeout: 15000 },
    )
    .catch(() => {});
  // Give Vue a beat to finalize animations + images decode.
  await page.waitForTimeout(1200);
  await page.evaluate(async () => {
    const imgs = Array.from(document.images || []);
    await Promise.all(imgs.map((i) => (i.complete ? null : i.decode().catch(() => null))));
  });

  // Reveal all click targets via Slidev's clicks store, if present.
  await page.evaluate(() => {
    // Slidev exposes its internal store on window in dev mode (legacy hack).
    try {
      const all = document.querySelectorAll('.slidev-vclick-target');
      all.forEach((el) => {
        el.classList.remove('slidev-vclick-hidden');
        el.style.opacity = '1';
        el.style.visibility = 'visible';
      });
    } catch {}
  });

  const data = await page.evaluate(PAGE_FN);
  data.slide = n;
  data.url = url;

  const outPath = path.join(OUT, `slide-${String(n).padStart(2, '0')}.json`);
  writeFileSync(outPath, JSON.stringify(data, null, 2));
  results.push({ slide: n, texts: data.texts.length, images: data.images.length, boxes: data.boxes.length });
  console.log(`texts=${data.texts.length} images=${data.images.length} boxes=${data.boxes.length}`);
}

writeFileSync(path.join(OUT, 'index.json'), JSON.stringify({ slides: results, total: TOTAL }, null, 2));

await browser.close();
console.log('Extraction complete.');
