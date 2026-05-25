import { chromium } from 'playwright-chromium';
const TOTAL = 26;
const b = await chromium.launch({ headless: true });
const ctx = await b.newContext({ viewport: { width: 1280, height: 720 }, deviceScaleFactor: 1 });
const p = await ctx.newPage();
await ctx.addInitScript(() => {
  const s = document.createElement('style');
  s.textContent = '.slidev-nav,.slidev-controls,.slidev-page-info,[class*="nav-controls"],nav{opacity:0!important;visibility:hidden!important;pointer-events:none!important}';
  document.documentElement.appendChild(s);
});
for (let i = 1; i <= TOTAL; i++) {
  await p.goto(`http://localhost:3033/${i}?clicks=999`, { waitUntil: 'commit', timeout: 30000 });
  await p.waitForSelector('#slide-content,.slidev-page,.slidev-slide', { timeout: 15000 }).catch(()=>{});
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `build/qa/slidev-png/s-${String(i).padStart(2,'0')}.png`, fullPage: false, clip: { x:0, y:0, width:1280, height:720 } });
  process.stdout.write(`${i} `);
}
await b.close();
console.log('done');
