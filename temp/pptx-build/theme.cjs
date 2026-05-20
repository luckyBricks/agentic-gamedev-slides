// Theme primitives for the JetBrains GameDev pptx build.
// Mirrors DESIGN.md — flat near-black canvas, chapter-tinted mandala,
// Rider-red kicker underline, magenta Tip chip, Qodana-green status chip,
// corner badge top-right, italic-serif page number bottom-right.

const path = require('path');
const fs = require('fs');
const sharp = require('sharp');

const BRAND = path.resolve(__dirname, '..', '..', 'docs', 'brand-assets');

const COLORS = {
  bg: '050510',
  bg2: '0b0616',
  ink: 'FFFFFF',
  inkDim: 'B7B7C2',     // approx 72% white on bg
  inkMuted: '7F7F87',   // approx 50% white on bg
  riderRed: 'FF0A67',
  riderBlue: '007DFE',
  riderAmber: 'FFB700',
  junieViolet: '7256FF',
  juniePink: 'FF2D90',
  junieOrange: 'FF8200',
  aiOrange: 'FF9419',
  aiRed: 'FF021D',
  aiMagenta: 'E600FF',
  qodanaGreen: '48E054',
  jbViolet: '955AE0',
  jbBlue: '4D67F0',
  highlight: 'FFE55E',
  cyan: '3AD9FF',
  teal: '22B8C0',
  violet: '9A4BFF',
  magenta: 'E73CFF',
  pink: 'FF3AA8',
  orange: 'FF7A3C',
  indigo: '6C3BFF',
};

const FONT_SANS = 'Inter';
const FONT_MONO = 'JetBrains Mono';
const FONT_SERIF = 'Crimson Pro';

// Chapter palettes — three-stop gradients for mandala
const CHAPTERS = {
  violet:  ['6C3BFF', '9A4BFF', 'E73CFF'],
  cyan:    ['2D6EF0', '22B8C0', '3AD9FF'],
  amber:   ['FFB700', 'FF9419', 'FF0A67'],
  green:   ['22B8C0', '48E054', 'A6F25C'],
  magenta: ['7256FF', 'FF2D90', 'FF8200'],
};

// Layout: 13.333" x 7.5" (LAYOUT_WIDE) = 16:9, matches 1280x720 scale
const W = 13.333;
const H = 7.5;
const MARGIN = 0.55;

// ---------- Asset cache ----------

const _logoCache = new Map();
async function rasterizeSvg(filePath, opts = {}) {
  const cacheKey = `${filePath}|${opts.height || ''}|${opts.tint || ''}`;
  if (_logoCache.has(cacheKey)) return _logoCache.get(cacheKey);
  let svg = fs.readFileSync(filePath, 'utf8');
  if (opts.tint) {
    // crude tint: replace fill="..." with white if requested (used for icons rendered on dark bg)
    // skip if no tint
  }
  let pipeline = sharp(Buffer.from(svg), { density: opts.density || 300 });
  if (opts.height) {
    pipeline = pipeline.resize({ height: opts.height });
  }
  const buf = await pipeline.png().toBuffer();
  const data = 'image/png;base64,' + buf.toString('base64');
  _logoCache.set(cacheKey, data);
  return data;
}

async function logo(rel, height = 96) {
  const p = path.join(BRAND, rel);
  if (!fs.existsSync(p)) throw new Error('Missing logo: ' + p);
  return rasterizeSvg(p, { height });
}

// ---------- Mandala generator ----------

const _mandalaCache = new Map();
async function mandalaPng(chapter, opacity = 0.9) {
  const cacheKey = `${chapter}|${opacity}`;
  if (_mandalaCache.has(cacheKey)) return _mandalaCache.get(cacheKey);
  const palette = CHAPTERS[chapter] || CHAPTERS.violet;
  const [a, b, c] = palette;
  const rings = 48;
  const rx = 90, ry = 28;
  let ellipses = '';
  for (let i = 0; i < rings; i++) {
    const rot = (i * 180) / rings;
    ellipses += `<ellipse cx="0" cy="0" rx="${rx}" ry="${ry}" transform="rotate(${rot})" />`;
  }
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-110 -110 220 220" width="2000" height="2000">
    <defs>
      <radialGradient id="mg" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#${c}" stop-opacity="0.95"/>
        <stop offset="45%" stop-color="#${b}" stop-opacity="0.85"/>
        <stop offset="100%" stop-color="#${a}" stop-opacity="0.08"/>
      </radialGradient>
      <radialGradient id="mc" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#050510" stop-opacity="0.95"/>
        <stop offset="55%" stop-color="#050510" stop-opacity="0.18"/>
        <stop offset="100%" stop-color="#050510" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <g stroke="url(#mg)" fill="none" stroke-width="0.55" stroke-linecap="round" opacity="${opacity}">${ellipses}</g>
    <circle cx="0" cy="0" r="105" fill="url(#mc)"/>
  </svg>`;
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  const data = 'image/png;base64,' + buf.toString('base64');
  _mandalaCache.set(cacheKey, data);
  return data;
}

// ---------- Slide chrome helpers ----------

/** Add the flat near-black canvas + chapter mandala. Position: right (default) or left. */
async function addChrome(pres, slide, opts = {}) {
  const chapter = opts.chapter || 'violet';
  const opacity = opts.mandalaOpacity ?? 0.9;
  const position = opts.mandalaPosition || 'right';
  const showCornerBadge = opts.showCornerBadge ?? true;
  const page = opts.page;

  slide.background = { color: COLORS.bg };

  // Mandala — large image bleeding off one edge
  const mandalaData = await mandalaPng(chapter, opacity);
  const mSize = 9.0; // inches
  if (position === 'right') {
    slide.addImage({ data: mandalaData, x: W - mSize * 0.55, y: (H - mSize) / 2, w: mSize, h: mSize });
  } else if (position === 'left') {
    slide.addImage({ data: mandalaData, x: -mSize * 0.45, y: (H - mSize) / 2, w: mSize, h: mSize });
  } else {
    // center / off
    slide.addImage({ data: mandalaData, x: (W - mSize) / 2, y: (H - mSize) / 2, w: mSize, h: mSize });
  }

  // Corner badge top-right: Rider icon + "JETBRAINS IDE"
  if (showCornerBadge) {
    const riderIcon = await logo('Rider/Rider_icon.svg', 96);
    slide.addImage({ data: riderIcon, x: W - 1.75, y: 0.25, w: 0.32, h: 0.32 });
    slide.addText('JETBRAINS IDE', {
      x: W - 1.38, y: 0.27, w: 1.36, h: 0.30,
      fontSize: 9, fontFace: FONT_SANS, bold: true,
      color: COLORS.ink, charSpacing: 1.5, align: 'left', valign: 'middle', margin: 0,
    });
  }

  // Italic-serif page number bottom-right
  if (page !== undefined && page !== null && page !== '') {
    slide.addText(String(page), {
      x: W - 0.85, y: H - 0.55, w: 0.6, h: 0.30,
      fontSize: 13, fontFace: FONT_SERIF, italic: true,
      color: COLORS.inkMuted, align: 'right', valign: 'middle', margin: 0,
    });
  }
}

/** Kicker: Inter 14pt bold white, Rider-red 2pt underline tail. */
function addKicker(slide, text, x, y, opts = {}) {
  const w = opts.w || 2.4;
  const h = 0.32;
  const size = opts.size || 14;
  slide.addText(text, {
    x, y, w, h,
    fontSize: size, fontFace: FONT_SANS, bold: true,
    color: COLORS.ink, align: 'left', valign: 'top', margin: 0,
  });
  // Underline drawn as a flat rect so it stays Rider-red regardless of theme
  const underY = y + (size * 0.014) + 0.21;
  const underW = Math.min(w, text.length * (size * 0.006) + 0.18);
  slide.addShape('rect', {
    x, y: underY, w: underW, h: 0.035,
    fill: { color: COLORS.riderRed }, line: { type: 'none' },
  });
}

function addH1(slide, text, x, y, opts = {}) {
  const size = opts.size || 36;
  const w = opts.w || 6.5;
  const h = opts.h || 1.5;
  slide.addText(text, {
    x, y, w, h,
    fontSize: size, fontFace: FONT_SANS, bold: true,
    color: COLORS.ink, align: 'left', valign: 'top', margin: 0,
    paraSpaceAfter: 0,
  });
}

/** Tip chip (magenta) — solid pill */
function addTipChip(slide, x, y, label = 'Tip:') {
  const w = 0.42;
  const h = 0.24;
  slide.addShape('rect', {
    x, y, w, h, fill: { color: COLORS.juniePink }, line: { type: 'none' }, rectRadius: 0.03,
  });
  slide.addText(label, {
    x, y, w, h,
    fontSize: 10, fontFace: FONT_SANS, bold: true, color: COLORS.ink,
    align: 'center', valign: 'middle', margin: 0,
  });
}

/** Beta/status chip (qodana green, black text) */
function addStatusChip(slide, x, y, label = 'New', w = 0.55) {
  const h = 0.24;
  slide.addShape('rect', {
    x, y, w, h, fill: { color: COLORS.qodanaGreen }, line: { type: 'none' }, rectRadius: 0.03,
  });
  slide.addText(label, {
    x, y, w, h,
    fontSize: 10, fontFace: FONT_SANS, bold: true, color: '000000',
    align: 'center', valign: 'middle', margin: 0,
  });
}

/** Outlined neutral tag chip (used for "Experimental" etc) */
function addTagChip(slide, x, y, label, w = 0.85) {
  const h = 0.24;
  slide.addShape('rect', {
    x, y, w, h,
    fill: { color: COLORS.bg }, line: { color: 'FFFFFF', width: 0.75 }, rectRadius: 0.03,
  });
  slide.addText(label, {
    x, y, w, h,
    fontSize: 9.5, fontFace: FONT_SANS, bold: true, color: COLORS.inkDim,
    align: 'center', valign: 'middle', margin: 0,
  });
}

/** Yellow highlighter behind a phrase */
function addHighlightedBox(slide, text, x, y, w, h, fontSize = 13) {
  slide.addShape('rect', {
    x, y, w, h, fill: { color: COLORS.highlight }, line: { type: 'none' }, rectRadius: 0.02,
  });
  slide.addText(text, {
    x, y, w, h,
    fontSize, fontFace: FONT_SANS, bold: true, color: '111111',
    align: 'center', valign: 'middle', margin: 0,
  });
}

/** Body paragraph with optional rich text runs */
function addBody(slide, runs, x, y, w, h, opts = {}) {
  const items = Array.isArray(runs) ? runs : [{ text: runs, options: {} }];
  slide.addText(items, {
    x, y, w, h,
    fontSize: opts.fontSize || 13,
    fontFace: FONT_SANS,
    color: opts.color || COLORS.inkDim,
    align: 'left', valign: 'top', margin: 0,
    paraSpaceAfter: opts.paraSpaceAfter ?? 4,
  });
}

/** Bulleted list using ❏ glyph for parity with deck */
function addBulletList(slide, items, x, y, w, h, opts = {}) {
  const runs = [];
  items.forEach((it, i) => {
    const isLast = i === items.length - 1;
    const content = typeof it === 'string' ? [{ text: it }] : it;
    runs.push({ text: '❏  ', options: { color: opts.glyphColor || COLORS.riderAmber, bold: true } });
    content.forEach((c, j) => {
      runs.push({ text: c.text, options: { ...(c.options || {}), bold: c.options?.bold ?? false } });
    });
    if (!isLast) runs[runs.length - 1].options = { ...(runs[runs.length - 1].options || {}), breakLine: true };
  });
  // Add line breaks after each run group except last
  // Rewrite: simpler — concat using breakLine on the LAST item of each line
  const out = [];
  items.forEach((it, i) => {
    const content = typeof it === 'string' ? [{ text: it }] : it;
    out.push({ text: '❏  ', options: { color: opts.glyphColor || COLORS.riderAmber, bold: true } });
    content.forEach((c, j) => {
      const isFinalOfLine = j === content.length - 1;
      const isLastLine = i === items.length - 1;
      out.push({
        text: c.text,
        options: {
          ...(c.options || {}),
          ...(isFinalOfLine && !isLastLine ? { breakLine: true } : {}),
        },
      });
    });
  });
  slide.addText(out, {
    x, y, w, h,
    fontSize: opts.fontSize || 13,
    fontFace: FONT_SANS,
    color: opts.color || COLORS.ink,
    align: 'left', valign: 'top', margin: 0,
    paraSpaceAfter: opts.paraSpaceAfter ?? 6,
  });
}

/** Card: glass surface with 1px border, 14px ≈ 0.16in radius */
function addCard(slide, x, y, w, h, opts = {}) {
  slide.addShape('roundRect', {
    x, y, w, h,
    fill: { color: opts.fill || 'FFFFFF', transparency: opts.transparency ?? 96 },
    line: { color: opts.border || 'FFFFFF', width: 0.5, transparency: 88 },
    rectRadius: 0.12,
  });
}

/** Accent card with chapter-tinted left border */
function addAccentCard(slide, x, y, w, h, accentColor, opts = {}) {
  slide.addShape('rect', {
    x, y, w, h,
    fill: { color: opts.fill || '0E0E1A' },
    line: { color: accentColor, width: 0.75 },
  });
  slide.addShape('rect', {
    x, y, w: 0.05, h,
    fill: { color: accentColor }, line: { type: 'none' },
  });
}

module.exports = {
  COLORS, CHAPTERS, FONT_SANS, FONT_MONO, FONT_SERIF, W, H, MARGIN,
  logo, mandalaPng, addChrome,
  addKicker, addH1, addTipChip, addStatusChip, addTagChip,
  addHighlightedBox, addBody, addBulletList, addCard, addAccentCard,
};
