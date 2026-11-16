/* HTML幻灯片 → 逐页高清截图 → 后续合成PDF
 * 等待策略: 字体就绪 + 有限动画全部结束(排除装饰性无限动画) + rAF静默
 */
const puppeteer = require('/Users/bruce_xbx_cmx/Desktop/hongguanppt202504/node_modules/puppeteer');
const fs = require('fs');
const path = require('path');

const URL = 'http://127.0.0.1:8899/26Q2%E5%AE%8F%E8%A7%82%E7%BB%8F%E6%B5%8E%E6%8A%A5%E5%91%8A_20260818.html';
const OUT_DIR = '/tmp/pdf_test/pages';
const TOTAL = 43;

fs.mkdirSync(OUT_DIR, { recursive: true });

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function settle(page, maxWait = 15000) {
  const t0 = Date.now();
  try { await page.evaluate(() => document.fonts ? document.fonts.ready : null); } catch {}
  // 注入rAF计数器（只注入一次）
  await page.evaluate(() => {
    if (window.__rafCount === undefined) {
      window.__rafCount = 0;
      const orig = window.requestAnimationFrame.bind(window);
      window.requestAnimationFrame = (cb) => orig((t) => { window.__rafCount++; cb(t); });
    }
  });
  let stableRounds = 0;
  while (Date.now() - t0 < maxWait) {
    const st = await page.evaluate(() => {
      const anims = document.getAnimations ? document.getAnimations() : [];
      let finiteRunning = 0, infinite = 0;
      for (const a of anims) {
        const t = a.effect && a.effect.getComputedTiming ? a.effect.getComputedTiming() : null;
        if (t && String(t.iterations) === 'Infinity') infinite++;
        else if (a.playState === 'running') finiteRunning++;
      }
      return { finiteRunning, infinite, raf: window.__rafCount, ready: !!document.querySelector('h1,h2,.presentation-shell') };
    });
    if (st.ready && st.finiteRunning === 0) { stableRounds++; if (stableRounds >= 2) return { ok: true, ms: Date.now() - t0, ...st }; }
    else stableRounds = 0;
    await sleep(250);
  }
  return { ok: false, ms: Date.now() - t0 };
}

async function slideText(page) {
  return page.evaluate(() => document.body.innerText.replace(/\s+/g, ' ').slice(0, 300));
}

async function shoot(page, n, prevText) {
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const s = await settle(page);
      // 幻灯片容器截图
      const el = await page.$('.presentation-shell > div.relative.bg-white, .presentation-shell div[class*="shadow-2xl"]');
      if (!el) throw new Error('找不到slide容器');
      const box = await el.boundingBox();
      if (!box || box.width < 800) throw new Error('容器尺寸异常');
      const file = path.join(OUT_DIR, `slide${String(n).padStart(2, '0')}.png`);
      await el.screenshot({ path: file });
      const size = fs.statSync(file).size;
      if (size < 30000) throw new Error('截图过小，疑似空白 ' + size);
      return { ok: true, settle: s, size, box };
    } catch (e) {
      console.log(`  第${n}页 第${attempt}次失败: ${String(e).slice(0, 100)}`);
      if (attempt === 1) { await page.keyboard.press('ArrowDown').catch(()=>{}); await sleep(500); await page.keyboard.press('ArrowUp').catch(()=>{}); await sleep(800); }
      await sleep(1200);
    }
  }
  return { ok: false };
}

(async () => {
  const t0 = Date.now();
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox','--disable-gpu','--font-render-hinting=none','--hide-scrollbars'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 810, deviceScaleFactor: 2 });
  const errs = [];
  page.on('pageerror', e => { errs.push(String(e).slice(0,100)); });
  console.log('加载页面...');
  await page.goto(URL, { waitUntil: 'networkidle2', timeout: 120000 });
  await sleep(2000);

  let okCount = 0, failList = [];
  for (let n = 1; n <= TOTAL; n++) {
    const prev = n > 1 ? await slideText(page) : '';
    if (n > 1) {
      await page.keyboard.press('ArrowDown');
      // 确认页面已切换
      let changed = false;
      for (let k = 0; k < 10; k++) {
        await sleep(200);
        const t = await slideText(page);
        if (t !== prev) { changed = true; break; }
      }
      if (!changed) console.log(`  警告: 第${n}页文本未变化，可能漏翻`);
    }
    const r = await shoot(page, n);
    if (r.ok) { okCount++; console.log(`第${n}/${TOTAL}页 OK  settle=${r.settle.ms}ms  png=${(r.size/1024).toFixed(0)}KB  ${r.settle.ok ? '' : '(超时降级)'}`); }
    else { failList.push(n); console.log(`第${n}/${TOTAL}页 失败!`); }
  }
  console.log(`\n完成: ${okCount}/${TOTAL}  失败页: ${JSON.stringify(failList)}  耗时${((Date.now()-t0)/1000).toFixed(0)}s  pageerrors:${errs.length}`);
  if (errs.length) console.log('页面错误样本:', errs.slice(0,5));
  await browser.close();
  process.exit(failList.length ? 2 : 0);
})();
