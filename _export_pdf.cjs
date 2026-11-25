const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

const ROOT = '/Users/bruce_xbx_cmx/Desktop/hongguanppt202504';
const SOURCE = `file://${ROOT}/2026年Q3宏观经济报告.html`;
const OUTPUT = `${ROOT}/2026年Q3宏观经济报告.pdf`;
const TMP_PNG = `${ROOT}/.tmp_slide_current.png`;
const TOTAL_SLIDES = 42;
const SLIDE_W = 1280;
const SLIDE_H = 720;
const PAD = 32; // App.tsx 舞台四周留白 stagePadding
const SETTLE_MS = 2200; // 图表挂载动画不受 prefers-reduced-motion 控制，需固定沉降等待

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: [
      '--no-sandbox',
      '--disable-gpu',
      '--disable-application-cache',
      '--disk-cache-size=1',
      '--media-cache-size=1',
      '--disable-extensions',
      '--disable-background-networking',
      '--disable-component-update',
      '--no-first-run',
    ],
  });
  const page = await browser.newPage();
  // 视口 = 舞台 + 两侧留白，保证 scale 恰为 1，截图后按舞台矩形精确裁剪
  await page.setViewport({ width: SLIDE_W + PAD * 2, height: SLIDE_H + PAD * 2, deviceScaleFactor: 2 });
  // 让 CSS 入场动画在 0.01ms 内跳到终态
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  await page.goto(SOURCE, { waitUntil: 'networkidle2', timeout: 120000 });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 5000)); // 首屏：懒加载组件 + 图表初始化

  const stageRect = await page.evaluate(() => {
    const stage = document.querySelector('div.relative.bg-white.overflow-hidden.shadow-2xl');
    if (!stage) return null;
    const r = stage.getBoundingClientRect();
    return { x: r.x, y: r.y, width: r.width, height: r.height };
  });
  if (!stageRect) throw new Error('找不到舞台元素');
  if (Math.round(stageRect.width) !== SLIDE_W || Math.round(stageRect.height) !== SLIDE_H) {
    throw new Error(`舞台尺寸异常：${stageRect.width}×${stageRect.height}（预期 ${SLIDE_W}×${SLIDE_H}）`);
  }
  const clip = { x: Math.round(stageRect.x), y: Math.round(stageRect.y), width: SLIDE_W, height: SLIDE_H };

  // 读取右下角页码指示器，确保翻页与目标页同步
  const readCounter = () =>
    page.evaluate(() => {
      const el = document.querySelector('div.absolute.right-6.bottom-4 > span');
      const text = el && el.textContent ? el.textContent.trim() : '';
      return /^\d{2}$/.test(text) ? parseInt(text, 10) : -1;
    });

  const goToSlide = async (target) => {
    for (let attempt = 0; attempt < TOTAL_SLIDES + 5; attempt += 1) {
      if ((await readCounter()) === target) return true;
      await page.keyboard.press('ArrowRight');
      await new Promise((r) => setTimeout(r, 300));
    }
    return false;
  };

  // 截图 → 嵌入 → 立即删除，磁盘峰值只占 1 张图
  const pdfDoc = await PDFDocument.create();
  for (let i = 1; i <= TOTAL_SLIDES; i += 1) {
    const synced = await goToSlide(i);
    if (!synced) throw new Error(`无法翻到第 ${i} 页（页码指示器失步）`);
    await new Promise((r) => setTimeout(r, SETTLE_MS)); // 图表动画沉降
    await page.screenshot({ path: TMP_PNG, clip });
    const png = await pdfDoc.embedPng(fs.readFileSync(TMP_PNG));
    const p = pdfDoc.addPage([SLIDE_W, SLIDE_H]);
    p.drawImage(png, { x: 0, y: 0, width: SLIDE_W, height: SLIDE_H });
    fs.rmSync(TMP_PNG, { force: true });
    console.log(`已导出 ${i}/${TOTAL_SLIDES}`);
  }
  await browser.close();

  // 每页 1280×720pt，位图 2560×1440（deviceScaleFactor 2）
  fs.writeFileSync(OUTPUT, await pdfDoc.save());
  console.log(`完成：${OUTPUT}`);
})().catch((e) => {
  console.error('FAILED:', e.message);
  process.exit(1);
});
