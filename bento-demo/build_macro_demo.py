#!/usr/bin/env python3
"""Build a refined Q2 2026 macro bento deck (editorial midnight-ledger look)."""

from __future__ import annotations

import json
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parent
OUTPUT = ROOT / "macro-q2-2026-deck.json"

W, H = 1280, 720

# Midnight ledger palette
MIDNIGHT = "#071428"
INK = "#0C2340"
DEEP = "#132E54"
PAPER = "#F4F0E8"
WARM = "#EBE4D6"
ACCENT = "#C4A46B"  # soft gold
SIGNAL = "#3D8BFF"  # cool signal blue
MIST = "#8B93A7"
WHITE = "#FFFFFF"
LINE = "rgba(196,164,107,0.35)"

DISPLAY = "'Songti SC', 'Noto Serif SC', 'Source Han Serif SC', 'STSong', Georgia, serif"
SANS = "ui-sans-serif, -apple-system, BlinkMacSystemFont, 'PingFang SC', 'Noto Sans SC', sans-serif"


def text(
    element_id: str,
    x: float,
    y: float,
    w: float,
    h: float,
    html: str,
    font_size: float,
    color: str,
    *,
    weight: int = 500,
    align: str = "left",
    valign: str = "top",
    line_height: float = 1.15,
    opacity: float = 1,
    letter_spacing: float | None = None,
    font: str | None = None,
    fx: dict[str, Any] | None = None,
    role: str | None = None,
) -> dict[str, Any]:
    element: dict[str, Any] = {
        "id": element_id,
        "type": "text",
        "x": x,
        "y": y,
        "w": w,
        "h": h,
        "rotation": 0,
        "opacity": opacity,
        "html": html,
        "fontSize": max(font_size, 18),
        "fontFamily": font or SANS,
        "fontWeight": weight,
        "color": color,
        "align": align,
        "valign": valign,
        "lineHeight": line_height,
    }
    if letter_spacing is not None:
        element["letterSpacing"] = letter_spacing
    if fx:
        element["fx"] = fx
    if role:
        element["role"] = role
    return element


def shape(
    element_id: str,
    kind: str,
    x: float,
    y: float,
    w: float,
    h: float,
    fill: str,
    *,
    stroke: str = "transparent",
    stroke_width: float = 0,
    radius: float = 0,
    opacity: float = 1,
    rotation: float = 0,
    shadow: dict[str, Any] | None = None,
    gradient: dict[str, Any] | None = None,
    fx: dict[str, Any] | None = None,
    d: str | None = None,
    path_box: list[float] | None = None,
) -> dict[str, Any]:
    element: dict[str, Any] = {
        "id": element_id,
        "type": "shape",
        "shape": kind,
        "x": x,
        "y": y,
        "w": w,
        "h": h,
        "rotation": rotation,
        "opacity": opacity,
        "fill": fill,
        "stroke": stroke,
        "strokeWidth": stroke_width,
        "radius": radius,
    }
    if shadow:
        element["shadow"] = shadow
    if gradient:
        element["fillGradient"] = gradient
    if fx:
        element["fx"] = fx
    if d is not None:
        element["d"] = d
    if path_box is not None:
        element["pathBox"] = path_box
    return element


def hairline(element_id: str, x: float, y: float, w: float, color: str = LINE) -> dict[str, Any]:
    return shape(element_id, "rect", x, y, w, 1, color)


def footer(slide_no: str, *, light: bool = False) -> list[dict[str, Any]]:
    color = MIST if light else "rgba(244,240,232,0.45)"
    return [
        text("brand-mark", 96, 668, 420, 24, "个金管理部 · 数据管理室", 14, color, weight=500, letter_spacing=1.4),
        text("page-chip", 1080, 668, 104, 24, slide_no, 14, color, weight=600, align="right", letter_spacing=2),
    ]


def slide(
    slide_id: str,
    background: str,
    elements: list[dict[str, Any]],
    notes: str,
    *,
    transition: str = "morph",
    name: str | None = None,
) -> dict[str, Any]:
    result: dict[str, Any] = {
        "id": slide_id,
        "background": background,
        "transition": transition,
        "elements": elements,
        "notes": notes,
    }
    if name:
        result["name"] = name
    return result


def build() -> dict[str, Any]:
    soft = {"x": 0, "y": 20, "blur": 40, "color": "rgba(7,20,40,0.16)"}
    glow = {"x": 0, "y": 0, "blur": 80, "color": "rgba(61,139,255,0.28)"}

    # —— 01 Cover ——
    s1 = slide(
        "s1-cover",
        MIDNIGHT,
        [
            shape(
                "bg-wash",
                "ellipse",
                720,
                -80,
                720,
                720,
                SIGNAL,
                opacity=0.12,
                shadow=glow,
            ),
            shape("bg-arc", "ellipse", 860, 120, 420, 420, "transparent", stroke="rgba(196,164,107,0.25)", stroke_width=1),
            shape(
                "orbit-dot",
                "ellipse",
                1040,
                280,
                14,
                14,
                ACCENT,
                fx={"loop": {"type": "motion-path", "path": "M0 0 C90 -110 200 -110 280 0 C200 110 90 110 0 0", "duration": 10}},
            ),
            shape("accent-rule", "rect", 96, 118, 48, 3, ACCENT),
            text(
                "hero-kicker",
                96,
                140,
                520,
                28,
                "MACRO BRIEF  ·  2026 Q2",
                15,
                ACCENT,
                weight=700,
                letter_spacing=3.2,
                fx={"enter": "fade-up", "order": 0},
            ),
            text(
                "hero-word",
                96,
                200,
                780,
                260,
                "中国宏观经济<br><b>运行分析</b>",
                72,
                PAPER,
                weight=400,
                font=DISPLAY,
                line_height=1.05,
                fx={"enter": "fade-up", "order": 1},
                role="title",
            ),
            text(
                "hero-year",
                96,
                470,
                640,
                40,
                "第二季度  ·  个金管理部内部报告",
                22,
                MIST,
                weight=450,
                letter_spacing=1.2,
                fx={"enter": "fade-up", "order": 2},
            ),
            hairline("cover-line", 96, 540, 420),
            text("cover-date", 96, 560, 280, 28, "2026 年 7 月", 18, "rgba(244,240,232,0.65)", weight=500),
            text("cover-folio", 1120, 48, 80, 28, "01", 18, ACCENT, weight=600, align="right", letter_spacing=2),
        ],
        "封面用大标题建立调性：克制、可汇报、偏编辑感。不要急着念数字。",
        transition="none",
        name="封面",
    )

    # —— 02 KPI —— one dominant number
    s2 = slide(
        "s2-kpi",
        PAPER,
        [
            text("folio", 1120, 48, 80, 28, "02", 18, ACCENT, weight=600, align="right", letter_spacing=2),
            text("hero-kicker", 96, 72, 400, 28, "总量定调", 15, ACCENT, weight=700, letter_spacing=3),
            text(
                "hero-word",
                96,
                110,
                700,
                56,
                "增速回落，价格回正",
                40,
                INK,
                weight=500,
                font=DISPLAY,
                role="title",
            ),
            # Dominant figure
            shape("hero-panel", "rect", 96, 200, 620, 420, MIDNIGHT, radius=4, shadow=soft),
            text("hero-label", 140, 250, 400, 28, "二季度实际 GDP 增速", 16, ACCENT, weight=600, letter_spacing=1.5),
            text(
                "hero-num",
                140,
                300,
                520,
                160,
                "4.3%",
                120,
                PAPER,
                weight=400,
                font=DISPLAY,
                fx={"countUp": True, "enter": "fade-up", "order": 0},
            ),
            text("hero-sub", 140, 480, 480, 60, "较一季度 5.0% 放缓  ·  上半年累计 4.7%", 20, MIST, weight=450, line_height=1.4),
            # Side stack
            shape("side-a", "rect", 748, 200, 436, 196, WHITE, radius=4, shadow=soft),
            text("side-a-l", 780, 236, 360, 24, "上半年累计", 15, MIST, weight=600, letter_spacing=1),
            text("side-a-n", 780, 280, 360, 70, "4.7%", 56, INK, weight=400, font=DISPLAY, fx={"countUp": True}),
            text("side-a-s", 780, 350, 360, 28, "落在全年 4.5%–5.0% 目标区间", 16, MIST, weight=450),
            shape("side-b", "rect", 748, 424, 436, 196, DEEP, radius=4, shadow=soft),
            text("side-b-l", 780, 460, 360, 24, "平减指数", 15, ACCENT, weight=600, letter_spacing=1),
            text("side-b-n", 780, 504, 360, 56, "回正", 48, PAPER, weight=500, font=DISPLAY),
            text("side-b-s", 780, 566, 360, 28, "名义 5.89%  ·  实际 4.3%", 16, MIST, weight=450),
            *footer("02 / 07", light=True),
        ],
        "先让 4.3% 成为视觉主语，再补上半年与平减。强调：温差改善是信号，不等于微观通缩出清。",
        name="总量定调",
    )

    # —— 03 Events —— horizontal timeline, not 4-card grid
    s3_elements: list[dict[str, Any]] = [
        text("folio", 1120, 48, 80, 28, "03", 18, ACCENT, weight=600, align="right", letter_spacing=2),
        text("hero-kicker", 96, 72, 400, 28, "政策与事件", 15, ACCENT, weight=700, letter_spacing=3),
        text(
            "hero-word",
            96,
            110,
            900,
            50,
            "四条并行主线",
            40,
            INK,
            weight=500,
            font=DISPLAY,
            role="title",
        ),
        shape(
            "timeline",
            "path",
            120,
            280,
            1040,
            40,
            "transparent",
            stroke="rgba(12,35,64,0.18)",
            stroke_width=2,
            d="M0 20 L1040 20",
            path_box=[0, 0, 1040, 40],
            fx={"loop": {"type": "dash-march", "distance": 18, "duration": 2.2}},
        ),
    ]
    events = [
        ("01", "政治局", "积极财政、稳住制造\n化解地产与地方债"),
        ("02", "地缘", "冲突反复扰动\n能源航运承压"),
        ("03", "十五五", "能源教育消费规划\n两重项目下达"),
        ("04", "灾害", "汛期提前冲击\n财政托底重建"),
    ]
    for i, (num, title_label, body) in enumerate(events):
        x = 110 + i * 280
        s3_elements.extend(
            [
                shape(f"node-{i}", "ellipse", x + 86, 286, 28, 28, MIDNIGHT if i == 0 else WHITE, stroke=ACCENT if i else "transparent", stroke_width=2),
                shape(f"node-core-{i}", "ellipse", x + 94, 294, 12, 12, ACCENT if i == 0 else DEEP),
                text(f"num-{i}", x, 340, 200, 28, num, 14, ACCENT, weight=700, letter_spacing=2),
                text(f"title-{i}", x, 372, 220, 36, title_label, 26, INK, weight=600, font=DISPLAY),
                text(f"body-{i}", x, 420, 230, 80, body.replace("\n", "<br>"), 16, MIST, weight=450, line_height=1.45),
            ]
        )
    s3_elements.extend(footer("03 / 07", light=True))
    s3 = slide("s3-events", PAPER, s3_elements, "按时间轴讲四条主线，避免四宫格平均用力。政治局是叙事起点。", name="政策主线")

    # —— 04 GDP ——
    gdp_chart = {
        "id": "gdp-chart",
        "type": "chart",
        "x": 560,
        "y": 160,
        "w": 620,
        "h": 460,
        "rotation": 0,
        "opacity": 1,
        "preset": "line",
        "option": {
            "color": [SIGNAL, ACCENT],
            "backgroundColor": "transparent",
            "grid": {"left": 52, "right": 20, "top": 56, "bottom": 52},
            "legend": {"top": 10, "right": 8, "textStyle": {"color": MIST, "fontSize": 13}},
            "tooltip": {"trigger": "axis"},
            "xAxis": {
                "type": "category",
                "data": ["24Q3", "24Q4", "25Q1", "25Q2", "25Q3", "25Q4", "26Q1", "26Q2"],
                "axisLabel": {"color": MIST, "fontSize": 12},
                "axisLine": {"lineStyle": {"color": "rgba(12,35,64,0.12)"}},
            },
            "yAxis": {
                "type": "value",
                "min": 0,
                "max": 8,
                "axisLabel": {"formatter": "{value}%", "color": MIST, "fontSize": 12},
                "splitLine": {"lineStyle": {"color": "rgba(12,35,64,0.08)"}},
            },
            "series": [
                {
                    "name": "不变价",
                    "type": "line",
                    "smooth": True,
                    "symbolSize": 7,
                    "lineStyle": {"width": 3},
                    "data": [4.6, 5.4, 5.4, 5.2, 4.8, 4.5, 5.0, 4.3],
                },
                {
                    "name": "现价",
                    "type": "line",
                    "smooth": True,
                    "symbolSize": 7,
                    "lineStyle": {"width": 3},
                    "data": [3.96, 4.56, 4.58, 3.9, 3.71, 3.85, 4.94, 5.89],
                },
            ],
        },
    }
    s4 = slide(
        "s4-gdp",
        PAPER,
        [
            text("folio", 1120, 48, 80, 28, "04", 18, ACCENT, weight=600, align="right", letter_spacing=2),
            text("hero-kicker", 96, 72, 300, 28, "GDP", 15, ACCENT, weight=700, letter_spacing=3),
            text(
                "hero-word",
                96,
                110,
                420,
                120,
                "名义抬升<br>实际回落",
                44,
                INK,
                weight=500,
                font=DISPLAY,
                line_height=1.08,
                role="title",
            ),
            hairline("gdp-rule", 96, 260, 120),
            text(
                "gdp-copy",
                96,
                290,
                400,
                160,
                "二季度 GDP 36.15 万亿。<br>名义 5.89%，实际 4.3%。<br><br>AI 与能源拉动平减回正，<br>向消费与投资传导仍有限。",
                18,
                MIST,
                weight=450,
                line_height=1.55,
            ),
            shape("insight", "rect", 96, 500, 400, 100, MIDNIGHT, radius=4),
            text("insight-t", 124, 530, 344, 48, "温差改善 ≠ 微观通缩出清", 20, PAPER, weight=600, align="center", valign="middle"),
            gdp_chart,
            *footer("04 / 07", light=True),
        ],
        "图表看 26Q2：名义跃升、实际下行。这是本页唯一视觉主语。",
        name="GDP走势",
    )

    # —— 05 Structure ——
    structure_table = {
        "id": "structure-table",
        "type": "table",
        "x": 560,
        "y": 180,
        "w": 620,
        "h": 420,
        "rotation": 0,
        "opacity": 1,
        "header": True,
        "columns": [{"w": 1.3}, {"w": 0.9}, {"w": 1.6}],
        "rows": [
            {"cells": [{"html": "板块"}, {"html": "读数"}, {"html": "含义"}]},
            {"cells": [{"html": "第二产业"}, {"html": "3.0%"}, {"html": "主拖累"}]},
            {"cells": [{"html": "第三产业"}, {"html": "贡献69.4%"}, {"html": "主支撑"}]},
            {"cells": [{"html": "高技术制造"}, {"html": "13.3%"}, {"html": "新动能"}]},
            {"cells": [{"html": "信息软件"}, {"html": "11.3%"}, {"html": "数字景气"}]},
            {"cells": [{"html": "建筑 / 地产"}, {"html": "拖累"}, {"html": "旧动能承压"}]},
        ],
        "style": {
            "headerBg": MIDNIGHT,
            "headerColor": PAPER,
            "zebra": "rgba(12,35,64,0.03)",
            "borderColor": "rgba(12,35,64,0.08)",
            "borderWidth": 1,
            "cellPadX": 20,
            "cellPadY": 16,
            "fontSize": 17,
            "fontFamily": SANS,
            "color": INK,
            "radius": 4,
        },
    }
    s5 = slide(
        "s5-structure",
        PAPER,
        [
            text("folio", 1120, 48, 80, 28, "05", 18, ACCENT, weight=600, align="right", letter_spacing=2),
            text("hero-kicker", 96, 72, 300, 28, "结构", 15, ACCENT, weight=700, letter_spacing=3),
            text(
                "hero-word",
                96,
                110,
                420,
                120,
                "产业内部<br>K 型分化",
                44,
                INK,
                weight=500,
                font=DISPLAY,
                line_height=1.08,
                role="title",
            ),
            hairline("struct-rule", 96, 260, 120),
            text(
                "struct-copy",
                96,
                290,
                400,
                140,
                "二产回落 1.9 个百分点，是季度放缓主因；三产稳住贡献。高技术与信息软件高增，建筑地产持续拖累。",
                18,
                MIST,
                weight=450,
                line_height=1.55,
            ),
            shape("k-chip", "rect", 96, 480, 400, 88, ACCENT, radius=4),
            text("k-chip-t", 120, 504, 352, 40, "新旧动能极致分化", 22, MIDNIGHT, weight=650, align="center", valign="middle", font=DISPLAY),
            structure_table,
            *footer("05 / 07", light=True),
        ],
        "不要平均讲三产。谁在拉、谁在拖——表格只服务这个判断。",
        name="产业结构",
    )

    # —— 06 Industry ——
    s6 = slide(
        "s6-industry",
        MIDNIGHT,
        [
            text("folio", 1120, 48, 80, 28, "06", 18, ACCENT, weight=600, align="right", letter_spacing=2),
            shape("wash", "ellipse", 900, -100, 560, 560, SIGNAL, opacity=0.1),
            text("hero-kicker", 96, 72, 400, 28, "工业与外需", 15, ACCENT, weight=700, letter_spacing=3),
            text(
                "hero-word",
                96,
                110,
                980,
                56,
                "外需链条仍是核心支撑",
                40,
                PAPER,
                weight=500,
                font=DISPLAY,
                role="title",
            ),
            shape("ind-a", "rect", 96, 220, 500, 340, "rgba(244,240,232,0.04)", radius=4, stroke="rgba(244,240,232,0.08)", stroke_width=1),
            text("ind-a-l", 140, 260, 400, 24, "1–6 月工业增加值", 15, ACCENT, weight=600, letter_spacing=1),
            text("ind-a-n", 140, 310, 400, 120, "5.4%", 96, PAPER, weight=400, font=DISPLAY, fx={"countUp": True}),
            text("ind-a-s", 140, 460, 400, 40, "6 月同比 5.3%，较 5 月加快 0.8pp", 18, MIST, weight=450),
            shape("ind-b", "rect", 628, 220, 556, 160, "rgba(244,240,232,0.04)", radius=4, stroke="rgba(244,240,232,0.08)", stroke_width=1),
            text("ind-b-l", 668, 248, 480, 24, "出口交货值累计同比", 15, ACCENT, weight=600, letter_spacing=1),
            text("ind-b-n", 668, 290, 480, 60, "9.7%", 48, PAPER, weight=400, font=DISPLAY, fx={"countUp": True}),
            text("ind-b-s", 668, 348, 480, 24, "6 月单月 14.8%", 16, MIST, weight=450),
            shape("ind-c", "rect", 628, 400, 556, 160, ACCENT, radius=4),
            text("ind-c-l", 668, 428, 480, 24, "风险", 15, MIDNIGHT, weight=700, letter_spacing=2),
            text(
                "ind-c-b",
                668,
                464,
                480,
                70,
                "能源价格再度冲高；采矿业 6 月同比转负 −2.2%。",
                18,
                MIDNIGHT,
                weight=550,
                line_height=1.45,
            ),
            *footer("06 / 07"),
        ],
        "工业页强调外需韧性；风险条只留一句，避免稀释主信息。",
        name="工业外需",
    )

    # —— 07 Close ——
    s7 = slide(
        "s7-close",
        PAPER,
        [
            text("folio", 1120, 48, 80, 28, "07", 18, ACCENT, weight=600, align="right", letter_spacing=2),
            shape("accent-rule", "rect", 96, 160, 48, 3, ACCENT),
            text("hero-kicker", 96, 180, 400, 28, "结语", 15, ACCENT, weight=700, letter_spacing=3),
            text(
                "hero-word",
                96,
                230,
                980,
                140,
                "可编辑的单文件 deck<br>足以承载宏观叙事。",
                48,
                INK,
                weight=450,
                font=DISPLAY,
                line_height=1.15,
                role="title",
            ),
            hairline("close-line", 96, 420, 280),
            text(
                "close-sub",
                96,
                450,
                700,
                80,
                "本文件为 7 页试看，非完整 44 页替代。<br>双击即可编辑、演示、保存。",
                20,
                MIST,
                weight=450,
                line_height=1.5,
            ),
            shape("close-mark", "ellipse", 1080, 560, 64, 64, MIDNIGHT),
            text("close-mark-t", 1080, 560, 64, 64, "Q2", 18, ACCENT, weight=700, align="center", valign="middle"),
            *footer("07 / 07", light=True),
        ],
        "收尾点明边界：形态已验证。认可后再扩展章节。",
        transition="fade",
        name="结语",
    )

    return {
        "format": "bento/slides",
        "version": 1,
        "title": "2026年第二季度中国宏观经济运行分析报告（bento试看）",
        "meta": {
            "author": "个金管理部-数据管理室",
            "company": "WeBank",
            "subject": "2026 Q2 China macro brief bento demo",
            "keywords": "macro, GDP, bento, editorial",
        },
        "size": {"width": W, "height": H},
        "theme": {
            "background": PAPER,
            "color": INK,
            "accent": ACCENT,
            "fontFamily": SANS,
            "chartPalette": [SIGNAL, ACCENT, "#5B7C99", MIDNIGHT],
        },
        "present": {"slideNumber": False, "controls": False, "progress": False},
        "slides": [s1, s2, s3, s4, s5, s6, s7],
    }


def main() -> None:
    doc = build()
    OUTPUT.write_text(json.dumps(doc, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {OUTPUT}")


if __name__ == "__main__":
    main()
