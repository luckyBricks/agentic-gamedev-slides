import { chromium } from 'playwright-chromium';
const b = await chromium.launch({ headless: true });
const ctx = await b.newContext({ viewport: { width: 1280, height: 720 } });
const p = await ctx.newPage();
p.on('console', m => console.log('C['+m.type()+']', m.text().slice(0,180)));
p.on('pageerror', e => console.log('PERR', e.message));
await p.goto('http://localhost:3033/1?clicks=999', { waitUntil: 'commit' });
await p.waitForTimeout(8000);
await p.screenshot({ path: 'build/qa/_probe.png' });
const has = await p.evaluate(() => ({
  bodyHTML: document.body.innerHTML.length,
  hasSlide: !!document.querySelector('#slide-content, .slidev-page, [id^=slide-]'),
  appHTML: document.getElementById('app')?.innerHTML?.length,
}));
console.log('state', has);
await b.close();
