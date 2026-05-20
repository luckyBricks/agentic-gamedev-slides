// build-screenshots.cjs — assemble the captured Slidev screenshots into a
// single PPTX. Each slide is one full-bleed PNG. We use pptxgenjs (not
// Slidev's exporter) and write the deck to temp/.

const path = require('path');
const fs = require('fs');
const pptxgen = require('pptxgenjs');

const SHOT_DIR = path.resolve(__dirname, 'shots');
const OUT_PATH = path.resolve(__dirname, '..', 'JetBrains-Rider-Agentic-GameDev-screenshots.pptx');

async function main() {
  const pres = new pptxgen();
  pres.layout = 'LAYOUT_WIDE';     // 13.333" × 7.5" — 16:9 to match 1280×720 source
  pres.title  = 'JetBrains for Agentic-Driven Game Development';
  pres.author = '孙涛 · JetBrains';
  pres.company = 'JetBrains';

  const W = 13.333, H = 7.5;

  const files = fs.readdirSync(SHOT_DIR)
    .filter(f => /^slide-\d+\.png$/.test(f))
    .sort();
  if (!files.length) throw new Error('No slide-NN.png files in ' + SHOT_DIR);

  files.forEach(f => {
    const s = pres.addSlide();
    s.background = { color: '050510' };
    s.addImage({
      path: path.join(SHOT_DIR, f),
      x: 0, y: 0, w: W, h: H,
      altText: 'Slide ' + f.replace('slide-', '').replace('.png', ''),
    });
  });

  await pres.writeFile({ fileName: OUT_PATH });
  console.log('Wrote:', OUT_PATH);
}

main().catch(e => { console.error(e); process.exit(1); });
