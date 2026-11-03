import React from 'react';
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  ReferenceArea,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { uiColors } from '@/utils/chartColors';

const UP = '#c0392b';
const DOWN = '#1e8449';
const FLAT = '#64748b';
const DIAG = '#94a3b8';
const THRESHOLD = '#cbd5e1';

/** 轴范围贴合数据，去掉 0-20 与 90-100 的空白，缓解点位拥挤 */
const AXIS_MIN = 20;
const AXIS_MAX = 95;
const AXIS_TICKS = [20, 30, 40, 50, 60, 70, 80, 90];

type Direction = 'up' | 'down' | 'flat';

interface IndustryPoint {
  label: string;
  full: string;
  jun: number;
  sep: number;
  /** 标签水平偏移 */
  dx: number;
  /** 标签垂直偏移 */
  dy: number;
  anchor: 'start' | 'middle' | 'end';
}

/** 分行业景气分（2026-06 → 2026-09），含标签摆放配置 */
const points: IndustryPoint[] = [
  { label: '油气开采', full: '石油天然气开采', jun: 62.2, sep: 88.5, dx: 6, dy: -2, anchor: 'start' },
  { label: '计算机电子', full: '计算机通信电子', jun: 85.0, sep: 82.7, dx: 6, dy: -2, anchor: 'start' },
  { label: '仪器仪表', full: '仪器仪表', jun: 57.4, sep: 72.4, dx: 6, dy: -2, anchor: 'start' },
  { label: '煤矿开采', full: '煤炭开采', jun: 53.5, sep: 71.5, dx: -6, dy: -4, anchor: 'end' },
  { label: '电气机械', full: '电气机械', jun: 68.9, sep: 66.3, dx: 8, dy: -4, anchor: 'start' },
  { label: '化学原料', full: '化学原料', jun: 51.3, sep: 62.8, dx: 6, dy: -14, anchor: 'start' },
  { label: '造纸', full: '造纸', jun: 63.2, sep: 62.5, dx: 6, dy: -2, anchor: 'start' },
  { label: '燃气供应', full: '燃气生产供应', jun: 48.5, sep: 61.8, dx: -8, dy: -12, anchor: 'end' },
  { label: '医药制造', full: '医药制造', jun: 73.0, sep: 61.3, dx: 14, dy: -2, anchor: 'start' },
  { label: '燃料加工', full: '石油煤炭燃料加工', jun: 45.1, sep: 61.2, dx: -6, dy: 11, anchor: 'end' },
  { label: '通用设备', full: '通用设备', jun: 68.4, sep: 61.0, dx: 8, dy: -6, anchor: 'start' },
  { label: '纺织服装', full: '纺织服装', jun: 44.7, sep: 60.7, dx: -6, dy: -10, anchor: 'end' },
  { label: '专用设备', full: '专用设备', jun: 74.8, sep: 59.8, dx: 6, dy: 8, anchor: 'start' },
  { label: '纺织', full: '纺织', jun: 65.3, sep: 59.5, dx: 10, dy: -2, anchor: 'start' },
  { label: '有色矿采', full: '有色金属矿采选', jun: 55.9, sep: 59.2, dx: 6, dy: -6, anchor: 'start' },
  { label: '化学纤维', full: '化学纤维', jun: 34.2, sep: 57.6, dx: -6, dy: 0, anchor: 'end' },
  { label: '烟草', full: '烟草制品', jun: 45.4, sep: 56.2, dx: 0, dy: 6, anchor: 'middle' },
  { label: '食品制造', full: '食品制造', jun: 65.1, sep: 55.9, dx: 8, dy: -2, anchor: 'start' },
  { label: '黑色冶炼', full: '黑色金属冶炼', jun: 49.3, sep: 54.9, dx: 8, dy: -4, anchor: 'start' },
  { label: '金属制品', full: '金属制品', jun: 62.1, sep: 53.6, dx: 6, dy: 10, anchor: 'start' },
  { label: '印刷', full: '印刷', jun: 40.9, sep: 52.0, dx: -6, dy: 4, anchor: 'end' },
  { label: '农副食品', full: '农副食品', jun: 51.8, sep: 50.7, dx: 6, dy: 14, anchor: 'start' },
  { label: '有色冶炼', full: '有色金属冶炼', jun: 47.9, sep: 50.0, dx: -8, dy: -2, anchor: 'end' },
  { label: '皮革制鞋', full: '皮革制鞋', jun: 33.1, sep: 46.8, dx: -6, dy: 0, anchor: 'end' },
  { label: '文教用品', full: '文教工美体育用品', jun: 47.0, sep: 45.7, dx: -6, dy: 6, anchor: 'end' },
  { label: '橡胶塑料', full: '橡胶塑料', jun: 47.6, sep: 45.7, dx: 6, dy: 8, anchor: 'start' },
  { label: '家具制造', full: '家具制造', jun: 37.7, sep: 42.1, dx: -6, dy: -2, anchor: 'end' },
  { label: '废弃资源', full: '废弃资源综合利用', jun: 31.8, sep: 38.8, dx: -6, dy: -6, anchor: 'end' },
  { label: '金属修理', full: '金属制品机械修理', jun: 40.6, sep: 38.7, dx: -6, dy: 8, anchor: 'end' },
  { label: '铁路船舶', full: '铁路船舶航空航天', jun: 65.0, sep: 38.2, dx: 6, dy: 6, anchor: 'start' },
  { label: '汽车制造', full: '汽车制造', jun: 49.3, sep: 37.1, dx: -6, dy: -2, anchor: 'end' },
  { label: '酒饮料', full: '酒饮料精制茶', jun: 30.4, sep: 35.3, dx: -10, dy: 8, anchor: 'end' },
  { label: '电力热力', full: '电力热力生产供应', jun: 26.9, sep: 34.0, dx: -6, dy: -8, anchor: 'end' },
  { label: '木材加工', full: '木材加工', jun: 27.1, sep: 33.9, dx: 8, dy: -10, anchor: 'start' },
  { label: '黑色矿采', full: '黑色金属矿采选', jun: 35.5, sep: 32.9, dx: -6, dy: 6, anchor: 'end' },
  { label: '水的生产', full: '水的生产供应', jun: 32.2, sep: 32.0, dx: 6, dy: 12, anchor: 'start' },
  { label: '非金属矿', full: '非金属矿采选', jun: 28.6, sep: 28.7, dx: 6, dy: 16, anchor: 'start' },
];

const deltaFor = (p: IndustryPoint) => Math.round((p.sep - p.jun) * 10) / 10;
const directionFor = (p: IndustryPoint): Direction => {
  const d = p.sep - p.jun;
  if (d >= 1) return 'up';
  if (d <= -1) return 'down';
  return 'flat';
};
const colorFor = (dir: Direction) => (dir === 'up' ? UP : dir === 'down' ? DOWN : FLAT);

const data = points.map((p) => ({ ...p, delta: deltaFor(p), dir: directionFor(p) }));

const upCount = data.filter((d) => d.dir === 'up').length;
const downCount = data.filter((d) => d.dir === 'down').length;
const flatCount = data.filter((d) => d.dir === 'flat').length;

const quadCounts = {
  lowJump: data.filter((d) => d.jun < 50 && d.sep >= 50).length,
  highStrong: data.filter((d) => d.jun >= 50 && d.sep >= 50).length,
  lowLow: data.filter((d) => d.jun < 50 && d.sep < 50).length,
  highFall: data.filter((d) => d.jun >= 50 && d.sep < 50).length,
};

const junAbove50 = data.filter((d) => d.jun >= 50).length;
const sepAbove50 = data.filter((d) => d.sep >= 50).length;

const sortedByDelta = [...data].sort((a, b) => b.delta - a.delta);
const best = sortedByDelta[0];
const worst = sortedByDelta[sortedByDelta.length - 1];

const fmt = (v: number) => (v > 0 ? `+${v.toFixed(1)}` : v.toFixed(1));

const renderDot = (props: any) => {
  const { cx, cy, payload } = props;
  if (cx == null || cy == null || !payload) return null;
  const color = colorFor(payload.dir as Direction);
  return (
    <g>
      <circle cx={cx} cy={cy} r={4} fill={color} stroke="#ffffff" strokeWidth={1.2} />
      <text
        x={cx + payload.dx}
        y={cy + payload.dy}
        textAnchor={payload.anchor}
        fontSize={9}
        fontWeight={500}
        fill="#1f2937"
        paintOrder="stroke"
        stroke="#ffffff"
        strokeWidth={2.6}
        strokeLinejoin="round"
        className="industry-dot-label"
        style={{ pointerEvents: 'none', userSelect: 'none' }}
      >
        {payload.label}
      </text>
    </g>
  );
};

const ScatterTooltip = ({ active, payload }: any) => {
  if (!active || !payload || !payload.length) return null;
  const d = payload[0].payload;
  return (
    <div
      className="bg-white p-2 shadow-lg text-[11px] font-sans rounded"
      style={{ border: `1px solid ${uiColors.tooltipBorder}` }}
    >
      <p className="font-bold text-webank-blue mb-0.5">{d.full}</p>
      <p className="text-slate-600">2026-06：{d.jun.toFixed(1)}</p>
      <p className="text-slate-600">2026-09：{d.sep.toFixed(1)}</p>
      <p style={{ color: colorFor(d.dir as Direction) }}>变化：{fmt(d.delta)}</p>
    </div>
  );
};

/** 象限角标（用透明 ReferenceArea 承载，读取 viewBox 定位） */
const quadrantLabel = (text: string, corner: 'tl' | 'tr' | 'bl' | 'br') => (props: any) => {
  const vb = props.viewBox ?? {};
  const { x, y, width, height } = vb;
  if (x == null || y == null) return null;
  const isTop = corner === 'tl' || corner === 'tr';
  const isLeft = corner === 'tl' || corner === 'bl';
  const tx = isLeft ? x + 5 : x + width - 5;
  const ty = isTop ? y + 12 : y + height - 5;
  return (
    <text
      x={tx}
      y={ty}
      textAnchor={isLeft ? 'start' : 'end'}
      fontSize={9}
      fontWeight={600}
      fill="#94a3b8"
      style={{ pointerEvents: 'none', userSelect: 'none' }}
    >
      {text}
    </text>
  );
};

const LegendItem: React.FC<{ color: string; children: React.ReactNode }> = ({ color, children }) => (
  <span className="inline-flex items-center gap-1 text-[10px] text-slate-600 whitespace-nowrap">
    <span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: color }} />
    {children}
  </span>
);

export const IndustryProsperityScatterChart: React.FC = () => (
  <div className="w-full h-full flex flex-col min-h-0">
    <div className="mb-1.5 flex-shrink-0">
      <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
        分行业景气分排名
      </h3>
      <p className="text-[10.5px] text-webank-subtext mt-0.5 leading-snug">
        横轴为2026-06景气分，纵轴为2026-09景气分；斜虚线为持平线，线上方=走强，下方=走弱，50分为景气强弱分界
      </p>
    </div>

    <div className="flex-1 min-h-0">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 10, right: 14, bottom: 26, left: 16 }}>
          <CartesianGrid stroke={uiColors.grid} strokeDasharray="3 3" />

          {/* 象限角标 */}
          <ReferenceArea x1={AXIS_MIN} x2={50} y1={50} y2={AXIS_MAX} fill="none" stroke="none" label={quadrantLabel(`低位跃升 · ${quadCounts.lowJump}家`, 'tl')} />
          <ReferenceArea x1={50} x2={AXIS_MAX} y1={50} y2={AXIS_MAX} fill="none" stroke="none" label={quadrantLabel(`高位走强 · ${quadCounts.highStrong}家`, 'tr')} />
          <ReferenceArea x1={AXIS_MIN} x2={50} y1={AXIS_MIN} y2={50} fill="none" stroke="none" label={quadrantLabel(`持续低位 · ${quadCounts.lowLow}家`, 'bl')} />
          <ReferenceArea x1={50} x2={AXIS_MAX} y1={AXIS_MIN} y2={50} fill="none" stroke="none" label={quadrantLabel(`高位回落 · ${quadCounts.highFall}家`, 'br')} />

          {/* 持平线与强弱分界 */}
          <ReferenceLine segment={[{ x: AXIS_MIN, y: AXIS_MIN }, { x: AXIS_MAX, y: AXIS_MAX }]} stroke={DIAG} strokeDasharray="4 4" strokeWidth={1} />
          <ReferenceLine x={50} stroke={THRESHOLD} strokeDasharray="3 3" strokeWidth={1} />
          <ReferenceLine y={50} stroke={THRESHOLD} strokeDasharray="3 3" strokeWidth={1} />

          <XAxis
            type="number"
            dataKey="jun"
            domain={[AXIS_MIN, AXIS_MAX]}
            ticks={AXIS_TICKS}
            tickLine={false}
            axisLine={{ stroke: uiColors.axis }}
            tick={{ fill: uiColors.tick, fontSize: 9 }}
            label={{ value: '2026-06 景气分', position: 'insideBottom', offset: -2, fontSize: 9, fill: '#64748b' }}
          />
          <YAxis
            type="number"
            dataKey="sep"
            domain={[AXIS_MIN, AXIS_MAX]}
            ticks={AXIS_TICKS}
            tickLine={false}
            axisLine={{ stroke: uiColors.axis }}
            tick={{ fill: uiColors.tick, fontSize: 9 }}
            width={30}
            tickFormatter={(v) => `${v}`}
            label={{ value: '2026-09 景气分', angle: -90, position: 'insideLeft', offset: -4, fontSize: 9, fill: '#64748b' }}
          />

          <Tooltip content={<ScatterTooltip />} cursor={{ strokeDasharray: '3 3', stroke: uiColors.cursor }} />

          <Scatter data={data} shape={renderDot} isAnimationActive={false} />
        </ScatterChart>
      </ResponsiveContainer>
    </div>

    <div className="flex-shrink-0 pt-1 flex items-center justify-center gap-4 border-t border-slate-100 mt-1">
      <LegendItem color={UP}>上升 △≥1（{upCount}家）</LegendItem>
      <LegendItem color={DOWN}>下降 △≤-1（{downCount}家）</LegendItem>
      <LegendItem color={FLAT}>基本持平（{flatCount}家）</LegendItem>
    </div>

    <p className="flex-shrink-0 text-[10px] text-slate-500 leading-snug pt-1">
      景气分≥50的行业：6月{junAbove50}家 → 9月{sepAbove50}家；最大改善 {best.full} {fmt(best.delta)}，最大下滑 {worst.full} {fmt(worst.delta)}。
    </p>
  </div>
);
