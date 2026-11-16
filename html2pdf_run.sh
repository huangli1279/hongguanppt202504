#!/bin/bash
# 一键: HTML幻灯片 → 逐页高清截图 → PDF
# 用法: ./html2pdf_run.sh [HTML文件名] (默认 26Q2宏观经济报告_20260818.html)
set -e
cd "$(dirname "$0")"
HTML="${1:-26Q2宏观经济报告_20260818.html}"
# 1. 启动本地服务器(若未运行)
if ! curl -s -m 3 -o /dev/null "http://127.0.0.1:8899/$(python3 -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1]))" "$HTML")"; then
  echo "启动本地服务器..."
  python3 -m http.server 8899 --bind 127.0.0.1 >/dev/null 2>&1 &
  sleep 2
fi
ENC=$(python3 -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1]))" "$HTML")
# 2. 逐页截图
sed -i '' "s|const URL = .*|const URL = 'http://127.0.0.1:8899/$ENC';|" html2pdf_convert.cjs
node html2pdf_convert.cjs
# 3. 合成PDF
python3 - <<PYEOF
import fitz, glob, os
files = sorted(glob.glob('/tmp/pdf_test/pages/slide*.png'))
doc = fitz.open()
for f in files:
    page = doc.new_page(width=1326, height=746)
    page.insert_image(fitz.Rect(0, 0, 1326, 746), filename=f)
out = "$HTML".replace('.html', '.pdf')
doc.save(out, deflate=True); doc.close()
print('PDF:', out, f'{os.path.getsize(out)/1024/1024:.1f} MB, {len(files)}页')
PYEOF
