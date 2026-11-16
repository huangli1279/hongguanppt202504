const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-gpu'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 810, deviceScaleFactor: 1 });
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
  const geo = await page.evaluate(() => {
    const round = (n) => Math.round(n * 10) / 10;
    const card = Array.from(document.querySelectorAll('div')).find(
      (d) => d.children.length <= 3 && (d.textContent || '').startsWith('图22026Q2')
    );
    const cols = Array.from(document.querySelectorAll('div')).filter((d) => /^\d+(\.\d+)?%$/.test((d.textContent || '').trim()));
    const labels = Array.from(document.querySelectorAll('span')).filter((s) => /^\d+(\.\d+)?%$/.test((s.textContent || '').trim()));
    const boxes = Array.from(document.querySelectorAll('div')).filter((d) => d.className.includes('h-[88px]'));
    const bars = boxes.flatMap((b) => Array.from(b.querySelectorAll('div')).filter((d) => d.style.height && d.style.background));
    return {
      cardFound: !!card,
      boxes: boxes.map((b) => { const r = b.getBoundingClientRect(); return { top: round(r.top), bottom: round(r.bottom), h: round(r.height) }; }),
      bars: bars.map((b) => { const r = b.getBoundingClientRect(); return { bg: b.style.background, top: round(r.top), bottom: round(r.bottom), h: round(r.height) }; }),
      labels: labels.map((s) => { const r = s.getBoundingClientRect(); return { t: s.textContent.trim(), top: round(r.top), bottom: round(r.bottom) }; }),
      grids: boxes.flatMap((b) => Array.from(b.querySelectorAll('div')).filter((d) => d.className.includes('border-dashed')).map((d) => { const r = d.getBoundingClientRect(); return round(r.top); })),
    };
  });
  console.log(JSON.stringify(geo, null, 1));
  await browser.close();
})();
