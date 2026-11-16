const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-gpu'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 810, deviceScaleFactor: 2 });
  page.on('pageerror', (e) => console.log('PAGEERROR:', String(e).slice(0, 200)));
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
  await new Promise((r) => setTimeout(r, 2500));
  console.log('steps:', steps, '|', heading.replace(/\n/g, ' ').slice(0, 60));
  const info = await page.evaluate(() => {
    const all = Array.from(document.querySelectorAll('span, div'));
    const labels = all.filter((el) => /^\d+(\.\d+)?%$/.test((el.textContent || '').trim()) && el.children.length === 0);
    return labels.map((el) => {
      const r = el.getBoundingClientRect();
      return { t: el.textContent.trim(), x: Math.round(r.x), y: Math.round(r.y), h: Math.round(r.height) };
    });
  });
  console.log(JSON.stringify(info));
  await page.screenshot({ path: '_slide42.png' });
  const box = await page.evaluate(() => {
    const el = Array.from(document.querySelectorAll('div')).find((d) => (d.textContent || '').includes('2026Q2 居民实际消费调整'));
    if (!el) return null;
    let p = el;
    for (let i = 0; i < 2 && p.parentElement; i += 1) p = p.parentElement;
    const r = p.getBoundingClientRect();
    return { x: r.x, y: r.y, width: r.width, height: r.height };
  });
  if (box) await page.screenshot({ path: '_slide42_fig2.png', clip: box });
  await browser.close();
})();
