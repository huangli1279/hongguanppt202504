const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-gpu'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise((r) => setTimeout(r, 2000));
  let heading = await page.evaluate(() => document.body.innerText.slice(0, 300));
  let steps = 0;
  while (!heading.includes('平减指数连续两季回正') && steps < 12) {
    await page.keyboard.press('ArrowRight');
    await new Promise((r) => setTimeout(r, 450));
    heading = await page.evaluate(() => document.body.innerText.slice(0, 300));
    steps += 1;
  }
  await new Promise((r) => setTimeout(r, 2500));
  const el = await page.$('#root');
  await el.screenshot({ path: '/Users/bruce_xbx_cmx/Desktop/hongguanppt202504/public/_slide04.png' });
  const rect = await page.evaluate(() => {
    const svg = document.querySelector('header svg');
    if (!svg) return null;
    const r = svg.getBoundingClientRect();
    return { x: r.x, y: r.y, w: r.width, h: r.height };
  });
  console.log(JSON.stringify(rect));
  await browser.close();
})();
