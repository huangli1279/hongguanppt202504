const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-gpu'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 810, deviceScaleFactor: 1 });
  page.on('pageerror', (e) => console.log('PAGEERROR:', String(e).slice(0, 200)));
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise((r) => setTimeout(r, 2500));
  let heading = await page.evaluate(() => document.body.innerText.slice(0, 300));
  let steps = 0;
  while (!heading.includes('居民存款大增') && steps < 60) {
    await page.keyboard.press('ArrowRight');
    await new Promise((r) => setTimeout(r, 300));
    heading = await page.evaluate(() => document.body.innerText.slice(0, 300));
    steps += 1;
  }
  console.log('STEPS', steps, heading.replace(/\n/g, ' | ').slice(0, 160));
  await new Promise((r) => setTimeout(r, 3500));
  await page.screenshot({ path: 'slide35.png' });
  const overflow = await page.evaluate(() => {
    const out = [];
    document.querySelectorAll('text').forEach((t) => {
      const r = t.getBoundingClientRect();
      if (r.bottom > window.innerHeight || r.right > window.innerWidth) out.push([t.textContent, Math.round(r.right), Math.round(r.bottom)]);
    });
    return out.slice(0, 10);
  });
  console.log('OVERFLOW', JSON.stringify(overflow));
  await browser.close();
})();
