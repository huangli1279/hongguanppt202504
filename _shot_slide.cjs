const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-gpu'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 810, deviceScaleFactor: 1 });
  page.on('pageerror', (e) => console.log('PAGEERROR:', String(e).slice(0, 200)));
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise((r) => setTimeout(r, 2500));
  let heading = await page.evaluate(() => document.body.innerText.slice(0, 200));
  let steps = 0;
  while (!heading.includes('社融增速回落至7.1') && steps < 45) {
    await page.keyboard.press('ArrowRight');
    await new Promise((r) => setTimeout(r, 350));
    heading = await page.evaluate(() => document.body.innerText.slice(0, 200));
    steps += 1;
  }
  await new Promise((r) => setTimeout(r, 4000));
  const info = await page.evaluate(() => {
    const texts = Array.from(document.querySelectorAll('text'));
    const list = texts.map((t) => { const r = t.getBoundingClientRect(); return { text: (t.textContent || '').trim(), x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width) }; }).filter((t) => t.x > window.innerWidth / 2 && t.text);
    const nums = list.filter((t) => /^-?\d{1,3}(,\d{3})*$/.test(t.text));
    const overlaps = [];
    for (let i = 0; i < nums.length; i += 1) for (let j = i + 1; j < nums.length; j += 1) {
      const a = nums[i], b = nums[j];
      if (a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + 15 && b.y < a.y + 15) overlaps.push([a.text + '@' + a.x + ',' + a.y, b.text + '@' + b.x + ',' + b.y]);
    }
    return { heading: document.body.innerText.slice(0, 120), nums, overlaps };
  });
  console.log(JSON.stringify(info, null, 1));
  await browser.close();
})();
