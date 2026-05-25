// Rasterize every <img> referenced by the extracted slides to PNG @ 3x.
// SVGs are loaded inside a controlled HTML wrapper, sized to their on-slide
// bbox, then screenshot at deviceScaleFactor=3. Non-SVG images are downloaded
// and re-encoded (no upscaling for raster).
//
// Output: build/png-assets/<hash>.png  +  build/extract/asset-map.json
//
// Usage: node build/rasterize.mjs

import { chromium } from 'playwright-chromium';
import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const EXTRACT = 'build/extract';
const OUT = 'build/png-assets';
const PORT = +(process.argv.includes('--port') ? process.argv[process.argv.indexOf('--port') + 1] : 3033);
const SCALE = 3;

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

// Collect unique (src, w, h).
const files = readdirSync(EXTRACT).filter((f) => f.startsWith('slide-') && f.endsWith('.json'));
const wants = new Map(); // key = src|w|h|filter
const keyOf = (src, w, h, filter) =>
  `${src}|${Math.round(w * SCALE)}|${Math.round(h * SCALE)}|${filter || ''}`;

for (const f of files) {
  const j = JSON.parse(readFileSync(path.join(EXTRACT, f), 'utf-8'));
  for (const im of j.images || []) {
    if (!im.src) continue;
    wants.set(keyOf(im.src, im.w, im.h, im.filter), {
      src: im.src,
      w: Math.round(im.w * SCALE),
      h: Math.round(im.h * SCALE),
      filter: im.filter || null,
    });
  }
}

console.log(`Unique images: ${wants.size}`);

const browser = await chromium.launch({ headless: true });
const assetMap = {}; // key -> png filename

const isSvg = (src) =>
  src.startsWith('data:image/svg+xml') || src.toLowerCase().endsWith('.svg');

let done = 0;
for (const [key, { src, w, h, filter }] of wants) {
  done++;
  const hash = crypto.createHash('sha1').update(key).digest('hex').slice(0, 14);
  const fname = `${hash}.png`;
  const fpath = path.join(OUT, fname);

  if (existsSync(fpath)) {
    assetMap[key] = fname;
    continue;
  }

  try {
    if (isSvg(src)) {
      // Render SVG in a fixed-size box to capture exact rasterization @ 3x.
      let svgUrl = src;
      if (!svgUrl.startsWith('data:') && !svgUrl.startsWith('http')) {
        svgUrl = `http://localhost:${PORT}${svgUrl.startsWith('/') ? '' : '/'}${svgUrl}`;
      } else if (svgUrl.startsWith('/')) {
        svgUrl = `http://localhost:${PORT}${svgUrl}`;
      }

      const ctx = await browser.newContext({
        viewport: { width: w, height: h },
        deviceScaleFactor: 1,
      });
      const page = await ctx.newPage();
      const filterCss = filter ? `filter:${filter};` : '';
      const html = `<!doctype html><html><head><style>
        html,body{margin:0;padding:0;background:transparent}
        img{display:block;width:${w}px;height:${h}px;object-fit:contain;${filterCss}}
      </style></head><body><img src="${svgUrl.replace(/"/g, '&quot;')}"/></body></html>`;
      await page.setContent(html, { waitUntil: 'load', timeout: 15000 });
      await page.waitForTimeout(150);
      await page.screenshot({ path: fpath, omitBackground: true, type: 'png' });
      await ctx.close();
    } else {
      // Raster path. When a CSS filter is applied (e.g. invert(1) brightness(0)),
      // route through a wrapper page so the filter is baked into the PNG.
      let url = src;
      if (url.startsWith('/')) url = `http://localhost:${PORT}${url}`;
      if (filter) {
        const ctx = await browser.newContext({
          viewport: { width: w, height: h },
          deviceScaleFactor: 1,
        });
        const page = await ctx.newPage();
        const html = `<!doctype html><html><head><style>
          html,body{margin:0;padding:0;background:transparent}
          img{display:block;width:${w}px;height:${h}px;object-fit:contain;filter:${filter}}
        </style></head><body><img src="${url.replace(/"/g, '&quot;')}"/></body></html>`;
        await page.setContent(html, { waitUntil: 'load', timeout: 15000 });
        await page.waitForTimeout(150);
        await page.screenshot({ path: fpath, omitBackground: true, type: 'png' });
        await ctx.close();
      } else {
        const ctx = await browser.newContext();
        const page = await ctx.newPage();
        const resp = await page.request.get(url, { timeout: 15000 });
        const buf = await resp.body();
        writeFileSync(fpath, buf);
        await ctx.close();
      }
    }
    assetMap[key] = fname;
    if (done % 20 === 0) console.log(`  ${done}/${wants.size}`);
  } catch (e) {
    console.warn(`!! ${src} (${w}x${h}): ${e.message}`);
  }
}

writeFileSync(path.join(EXTRACT, 'asset-map.json'), JSON.stringify(assetMap, null, 2));
await browser.close();
console.log(`Rasterized ${Object.keys(assetMap).length} assets into ${OUT}/`);
