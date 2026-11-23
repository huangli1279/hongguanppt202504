const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-gpu'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 810, deviceScaleFactor: 1 });
  page.on('pageerror', (e) => console.log('PAGEERROR:', String(e).slice(0, 200)));
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise((r) => setTimeout(r, 2000));
  let text = await page.evaluate(() => document.body.innerText.slice(0, 400));
  let steps = 0;
  while (!text.includes('行业景气变化追踪') && steps < 40) {
    await page.keyboard.press('ArrowRight');
    await new Promise((r) => setTimeout(r, 300));
    text = await page.evaluate(() => document.body.innerText.slice(0, 400));
    steps += 1;
  }
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: '_slide26.png' });
  console.log('STEPS', steps, 'MATCH', text.includes('行业景气变化追踪'));
  await browser.close();
})();
