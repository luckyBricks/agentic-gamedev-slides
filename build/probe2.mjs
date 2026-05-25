import { chromium } from 'playwright-chromium';
const b = await chromium.launch({ headless: true });
const p = await b.newPage();
p.on('pageerror', e => console.log('[err]', e.message));
p.on('console', m => { if (m.type()==='error') console.log('[console.err]', m.text().slice(0,200)); });
await p.goto('http://localhost:3033/1?clicks=999', { waitUntil: 'commit' });
for (const ms of [500, 1500, 3000, 6000]) {
  await p.waitForTimeout(ms);
  const has = await p.evaluate(() => ({
    bodyChildren: document.body.children.length,
    appChildren: document.getElementById('app')?.children?.length || 0,
    hasSlide: !!document.querySelector('#slide-content, .slidev-page, [id^=slide-]'),
    bodyHTML: document.body.innerHTML.length,
  }));
  console.log(ms, JSON.stringify(has));
}
await b.close();
