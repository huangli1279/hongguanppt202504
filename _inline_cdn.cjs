// 将 Tailwind CDN 脚本内联进 dist-single/index.html，实现完全离线可打开
const fs = require('fs');
const path = require('path');

const htmlPath = path.join(__dirname, 'dist-single', 'index.html');
const jsPath = '/tmp/tailwindcdn.js';

let html = fs.readFileSync(htmlPath, 'utf8');
const js = fs.readFileSync(jsPath, 'utf8');

const cdnTag = '<script src="https://cdn.tailwindcss.com"></script>';
if (!html.includes(cdnTag)) {
  console.error('CDN tag not found');
  process.exit(1);
}

// 转义结尾标签防止提前闭合
const safeJs = js.replace(/<\/script>/gi, '<\\/script>');
html = html.replace(cdnTag, () => '<script>/* tailwindcss CDN inlined for offline use */\n' + safeJs + '\n</script>');

fs.writeFileSync(htmlPath, html);
console.log('Inlined. Final size:', (fs.statSync(htmlPath).size / 1024 / 1024).toFixed(2), 'MB');
