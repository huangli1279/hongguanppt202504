const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-gpu'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 810, deviceScaleFactor: 3 });
  await page.goto('http://localhost:3001/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise((r) => setTimeout(r, 2500));
  let heading = await page.evaluate(() => document.body.innerText.slice(0, 200));
  let steps = 0;
  while (!heading.includes('健康支出保持刚性') && steps < 80) {
    await page.keyboard.press('ArrowRight');
    await new Promise((r) => setTimeout(r, 250));
    heading = await page.evaluate(() => document.body.innerText.slice(0, 200));
    steps += 1;
  }
  await new Promise((r) => setTimeout(r, 2000));
  const box = await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('div')).find(
      (d) => d.children.length <= 3 && (d.textContent || '').startsWith('图2')
    );
    const r = el.getBoundingClientRect();
    return { x: r.x - 4, y: r.y - 4, width: r.width + 8, height: r.height + 8 };
  });
  console.log('steps:', steps, 'box:', JSON.stringify(box));
  await page.screenshot({ path: '_fig2.png', clip: box });
  await browser.close();
})();
