const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-gpu'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 810, deviceScaleFactor: 1 });
  page.on('pageerror', (e) => console.log('PAGEERROR:', String(e).slice(0, 300)));
  await page.goto('http://localhost:5199/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise((r) => setTimeout(r, 2000));
  let text = await page.evaluate(() => document.body.innerText.slice(0, 300));
  let steps = 0;
  while (!text.includes('AI参与消费决策') && steps < 45) {
    await page.keyboard.press('ArrowRight');
    await new Promise((r) => setTimeout(r, 350));
    text = await page.evaluate(() => document.body.innerText.slice(0, 300));
    steps += 1;
  }
  await new Promise((r) => setTimeout(r, 1500));
  console.log('matched:', text.slice(0, 60));
  await page.screenshot({ path: '/tmp/slide40.png' });
  await browser.close();
})();
