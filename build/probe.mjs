import { chromium } from 'playwright-chromium';
const b = await chromium.launch({ headless: true });
const p = await b.newPage();
p.on('console', msg => console.log('[browser]', msg.type(), msg.text().slice(0,200)));
p.on('pageerror', e => console.log('[pageerror]', e.message));
p.on('requestfailed', r => console.log('[reqfail]', r.url(), r.failure()?.errorText));
console.log('navigating...');
try {
  await p.goto('http://localhost:3033/1?clicks=999', { waitUntil: 'load', timeout: 15000 });
  console.log('OK url=', p.url());
} catch(e) { console.log('NAV FAILED:', e.message); }
await b.close();
