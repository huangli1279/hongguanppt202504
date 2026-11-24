const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-gpu'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 810, deviceScaleFactor: 1 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise((r) => setTimeout(r, 2500));
  let heading = '';
  let steps = 0;
  while (steps < 60) {
    heading = await page.evaluate(() => document.body.innerText.slice(0, 200));
    if (heading.includes('特点三：健康支出保持刚性')) break;
    await page.keyboard.press('ArrowRight');
    await new Promise((r) => setTimeout(r, 300));
    steps += 1;
  }
  await new Promise((r) => setTimeout(r, 3000));

  const report = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('.grid.grid-cols-4 > div'));
    return cards.map((card) => {
      const body = card.querySelector('.flex-1.min-h-0.p-2');
      const fonts = Array.from(new Set(Array.from(card.querySelectorAll('span,div')).map((e) => getComputedStyle(e).fontSize)))
        .filter((f) => parseFloat(f) < 12);
      const truncated = Array.from(card.querySelectorAll('.truncate')).filter((e) => e.scrollWidth > e.clientWidth + 1)
        .map((e) => (e.textContent || '').trim().slice(0, 16));
      return {
        card: (card.textContent || '').trim().slice(0, 12),
        bodySH: body ? body.scrollHeight : null,
        bodyCH: body ? body.clientHeight : null,
        canScroll: body ? body.scrollHeight > body.clientHeight + 1 : null,
        fonts,
        truncated,
      };
    });
  });
  console.log(JSON.stringify(report, null, 1));
  await browser.close();
})();
