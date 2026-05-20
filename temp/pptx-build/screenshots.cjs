// screenshots.cjs — drive Playwright/Chromium against the running Slidev
// dev server and capture every slide as a high-res PNG. We render at 2x
// scale to keep text crisp when the PNGs are embedded full-bleed into a
// 13.333" x 7.5" PPTX slide downstream.

const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright-chromium');

const BASE = process.env.SLIDEV_URL || 'http://localhost:3030';
const OUT_DIR = path.resolve(__dirname, 'shots');
const SLIDE_COUNT = 29;
const VIEWPORT = { width: 1280, height: 720 };
const DEVICE_SCALE = 2;

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });
  const browser = await chromium.launch({ headless: true });
  const ctx = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: DEVICE_SCALE,
  });
  const page = await ctx.newPage();

  for (let i = 1; i <= SLIDE_COUNT; i++) {
    const url = `${BASE}/${i}?print`;
    process.stdout.write(`[${String(i).padStart(2, '0')}/${SLIDE_COUNT}] ${url}\n`);
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    // Slidev needs a tick for fonts + slide enter animations to settle
    await page.waitForFunction(() => document.fonts && document.fonts.status === 'loaded', null, { timeout: 15000 }).catch(() => {});
    await page.waitForTimeout(800);
    // Find the actual slide element
    const slide = await page.$('#slide-content, .slidev-page, .slidev-slide-loading, .slidev-layout');
    const target = slide || page;
    const outPath = path.join(OUT_DIR, `slide-${String(i).padStart(2, '0')}.png`);
    if (slide) {
      await slide.screenshot({ path: outPath, type: 'png' });
    } else {
      await page.screenshot({ path: outPath, type: 'png', fullPage: false });
    }
  }
  await browser.close();
  console.log('done');
}

main().catch(e => { console.error(e); process.exit(1); });
