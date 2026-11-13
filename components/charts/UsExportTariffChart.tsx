import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceArea,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { uiColors } from '@/utils/chartColors';

const LINE_COLOR = '#005c8f';
const UP_COLOR = '#b91c1c';
const DOWN_COLOR = '#15803d';
const EVENT_COLOR = '#b45309';

/** 中国对美出口同比（近似美国自华进口同比），单位：% */
const usExportData: { period: string; us: number }[] = [
  { period: '2025-01', us: 3.15 },
  { period: '2025-02', us: -14.68 },
  { period: '2025-03', us: 23.46 },
  { period: '2025-04', us: 17.26 },
  { period: '2025-05', us: -21.03 },
  { period: '2025-06', us: -16.13 },
  { period: '2025-07', us: -21.67 },
  { period: '2025-08', us: -33.12 },
  { period: '2025-09', us: -27.03 },
  { period: '2025-10', us: -25.17 },
  { period: '2025-11', us: -28.58 },
  { period: '2025-12', us: -30.01 },
  { period: '2026-01', us: -23.02 },
  { period: '2026-02', us: 9.68 },
  { period: '2026-03', us: -26.49 },
  { period: '2026-04', us: 11.31 },
  { period: '2026-05', us: 35.41 },
  { period: '2026-06', us: 13.87 },
  { period: '2026-07', us: 17.05 },
  { period: '2026-08', us: 34.4 },
  { period: '2026-09', us: 39.56 },
];

const KEY_LABEL_PERIODS = new Set(['2025-02', '2025-05', '2025-12', '2026-02', '2026-09']);

type ImpactTone = 'up' | 'down' | 'flat';

interface TariffEvent {
  no: number;
  period: string;
  date: string;
  title: string;
  desc: string;
  impact: string;
  tone: ImpactTone;
}

const tariffEvents: TariffEvent[] = [
  {
    no: 1,
    period: '2025-02',
    date: '2025-02',
    title: '首轮10%关税落地',
    desc: '美方以芬太尼为由加征10%，中方对等反制',
    impact: '同比由 +3.2% 降至 -14.7%（-17.8pct）',
    tone: 'down',
  },
  {
    no: 2,
    period: '2025-04',
    date: '2025-04',
    title: '“对等关税”加码至145%',
    desc: '4月宣布34%后连续上调至125%对等税率',
    impact: '4月抢出口 +17.3%，5月骤降至 -21.0%（-38.3pct）',
    tone: 'down',
  },
  {
    no: 3,
    period: '2025-05',
    date: '2025-05',
    title: '日内瓦声明：暂停24%关税90天',
    desc: '美方保留10%对等关税，中方同步暂停反制',
    impact: '6月降幅收窄至 -16.1%（+4.9pct），仍处深度负区间',
    tone: 'flat',
  },
  {
    no: 4,
    period: '2025-08',
    date: '2025-08',
    title: '斯德哥尔摩会谈再延90天',
    desc: '24%暂停期延长，高关税状态延续至年底',
    impact: '8—12月均值 -28.8%，12月 -30.0% 触底',
    tone: 'down',
  },
  {
    no: 5,
    period: '2025-11',
    date: '2025-11',
    title: '元首会晤后关税下调',
    desc: '芬太尼关税20%→10%，24%暂停一年，中方暂停稀土管制',
    impact: '2026-02转正 +9.7%，二季度均值 +20.2%',
    tone: 'up',
  },
  {
    no: 6,
    period: '2026-07',
    date: '2026-07',
    title: '再暂停24%关税90天',
    desc: '同步暂停部分非关税反制，磋商取得阶段性进展',
    impact: '26Q3均值 +30.3%，9月 +39.6% 创阶段新高',
    tone: 'up',
  },
];

const toneClass: Record<ImpactTone, string> = {
  up: 'text-red-600',
  down: 'text-green-600',
  flat: 'text-amber-600',
};

const formatPct = (value: number) => `${value > 0 ? '+' : ''}${value.toFixed(1)}%`;

const UsTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload || !payload.length) return null;
  const value = Number(payload[0].value);
  return (
    <div
      className="bg-white px-2 py-1 shadow-lg text-[10px]"
      style={{ border: `1px solid ${uiColors.tooltipBorder}` }}
    >
      <p className="font-bold text-webank-blue mb-0.5">{label}</p>
      <p className={value >= 0 ? 'text-red-600' : 'text-green-600'}>
        对美出口同比：{formatPct(value)}
      </p>
    </div>
  );
};

const UsDot = (props: any) => {
  const { cx, cy, payload } = props;
  if (cx == null || cy == null || !payload) return null;
  const value = Number(payload.us);
  const showLabel = KEY_LABEL_PERIODS.has(payload.period);
  const color = value >= 0 ? UP_COLOR : DOWN_COLOR;
  return (
    <g>
      <circle
        cx={cx}
        cy={cy}
        r={showLabel ? 3.2 : 1.9}
        fill={color}
        stroke="#ffffff"
        strokeWidth={showLabel ? 1.2 : 0.8}
      />
      {showLabel && (
        <text
          x={cx}
          y={cy}
          dy={value >= 0 ? -8 : 12}
          textAnchor="middle"
          fontSize={9}
          fontWeight={700}
          fill={color}
          stroke="#ffffff"
          strokeWidth={2.4}
          paintOrder="stroke"
          strokeLinejoin="round"
          style={{ pointerEvents: 'none' }}
        >
          {formatPct(value)}
        </text>
      )}
    </g>
  );
};

const EventBadge = ({ viewBox, no }: any) => {
  if (!viewBox) return null;
  const cx = viewBox.x;
  const cy = (viewBox.y ?? 0) + (no % 2 === 0 ? 30 : 11); // 奇数编号上，偶数下，避免相邻节点标签重叠
  return (
    <g style={{ pointerEvents: 'none' }}>
      <line
        x1={cx}
        y1={cy + 8}
        x2={cx}
        y2={(viewBox.y ?? 0) + (no % 2 === 0 ? 60 : 30)}
        stroke={EVENT_COLOR}
        strokeWidth={1}
        strokeDasharray="2 2"
        opacity={0.6}
      />
      <circle cx={cx} cy={cy} r={7.5} fill="#ffffff" stroke={EVENT_COLOR} strokeWidth={1.5} />
      <text
        x={cx}
        y={cy}
        dy={3.4}
        textAnchor="middle"
        fontSize={9}
        fontWeight={700}
        fill={EVENT_COLOR}
      >
        {no}
      </text>
    </g>
  );
};

const AreaLabel = ({ viewBox, text, color }: any) => {
  if (!viewBox || viewBox.x == null || viewBox.width == null) return null;
  return (
    <text
      x={viewBox.x + viewBox.width / 2}
      y={(viewBox.y ?? 0) + (viewBox.height ?? 0) - 6}
      textAnchor="middle"
      fontSize={9}
      fontWeight={600}
      fill={color}
      stroke="#ffffff"
      strokeWidth={3}
      paintOrder="stroke"
      strokeLinejoin="round"
      style={{ pointerEvents: 'none' }}
    >
      {text}
    </text>
  );
};

export const UsExportTariffChart: React.FC = () => (
  <div className="h-full flex flex-col min-h-0 overflow-hidden border border-webank-line/60 rounded-card bg-white p-2.5">
    <div className="mb-1 flex-shrink-0">
      <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
        美国自华进口（对美出口）同比增速与关税战节点
      </h3>
      <div className="flex items-center justify-between gap-2 mt-1">
        <p className="text-[10px] text-webank-subtext leading-tight">
          2025-01—2026-09｜单位：%｜编号虚线对应右侧关税战时间轴
        </p>
        <div className="flex items-center gap-2.5 text-[9px] text-slate-500 shrink-0">
          <span className="flex items-center">
            <i className="inline-block w-3.5 h-0.5 mr-1 align-middle" style={{ background: LINE_COLOR }} />
            同比增速
          </span>
          <span className="flex items-center">
            <i className="inline-block w-3.5 border-t border-dashed mr-1 align-middle" style={{ borderColor: EVENT_COLOR }} />
            关税节点
          </span>
        </div>
      </div>
    </div>

    <div className="flex-1 min-h-0">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={usExportData}
          margin={{ top: 30, right: 16, left: -12, bottom: 2 }}
        >
          <CartesianGrid vertical={false} stroke={uiColors.grid} strokeDasharray="3 3" />

          <ReferenceArea
            x1="2025-04"
            x2="2025-12"
            fill="#dc2626"
            fillOpacity={0.055}
            stroke="none"
            ifOverflow="extendDomain"
            label={(props: any) => <AreaLabel {...props} viewBox={props.viewBox} text="高关税冲击期" color="#b91c1c" />}
          />
          <ReferenceArea
            x1="2026-04"
            x2="2026-09"
            fill={LINE_COLOR}
            fillOpacity={0.06}
            stroke="none"
            ifOverflow="extendDomain"
            label={(props: any) => <AreaLabel {...props} viewBox={props.viewBox} text="缓和修复期" color={LINE_COLOR} />}
          />

          <ReferenceLine y={0} stroke={uiColors.tick} strokeWidth={1} strokeDasharray="4 3" />

          {tariffEvents.map((event) => (
            <ReferenceLine
              key={event.no}
              x={event.period}
              stroke={EVENT_COLOR}
              strokeWidth={1}
              strokeDasharray="3 3"
              strokeOpacity={0.55}
              label={(props: any) => <EventBadge viewBox={props.viewBox} no={event.no} />}
            />
          ))}

          <XAxis
            dataKey="period"
            axisLine={{ stroke: uiColors.axis }}
            tickLine={false}
            tick={{ fill: uiColors.tick, fontSize: 9 }}
            dy={6}
            interval={0}
            ticks={['2025-01', '2025-03', '2025-06', '2025-09', '2025-12', '2026-03', '2026-06', '2026-09']}
            tickFormatter={(value: string) => value.slice(2)}
          />
          <YAxis
            domain={[-45, 50]}
            ticks={[-40, -20, 0, 20, 40]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: uiColors.tickSecondary, fontSize: 9 }}
            tickFormatter={(value: number) => `${value}%`}
          />
          <Tooltip content={<UsTooltip />} cursor={{ stroke: uiColors.cursor, strokeWidth: 1 }} />
          <Line
            type="monotone"
            dataKey="us"
            name="对美出口同比"
            stroke={LINE_COLOR}
            strokeWidth={2.4}
            dot={(props: any) => <UsDot {...props} />}
            activeDot={{ r: 4, fill: LINE_COLOR, stroke: '#ffffff', strokeWidth: 1.5 }}
            animationDuration={800}
            animationEasing="ease-out"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export const TariffEventTimeline: React.FC = () => (
  <div className="h-full flex flex-col min-h-0 overflow-hidden border border-webank-line/60 rounded-card bg-white p-2.5">
    <div className="flex-shrink-0 mb-1">
      <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
        关税战时间轴与出口变化
      </h3>
      <p className="text-[10px] text-webank-subtext mt-0.5 leading-tight">
        政策事件（编号对应左图虚线）→ 对美出口同比变化
      </p>
    </div>

    <div className="flex-1 min-h-0 flex flex-col justify-between">
      {tariffEvents.map((event) => (
        <div key={event.no} className="flex gap-1.5">
          <span className="shrink-0 mt-[1px] w-[15px] h-[15px] rounded-full border text-[9px] font-bold flex items-center justify-center leading-none"
            style={{ borderColor: EVENT_COLOR, color: EVENT_COLOR }}
          >
            {event.no}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[10px] leading-[1.2] text-slate-700">
              <span className="font-bold" style={{ color: EVENT_COLOR }}>{event.date}</span>{' '}
              <span className="font-semibold">{event.title}</span>
            </p>
            <p className="text-[9px] leading-[1.2] text-slate-500">{event.desc}</p>
            <p className={`text-[9.5px] leading-[1.25] font-semibold ${toneClass[event.tone]}`}>
              影响：{event.impact}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="flex-shrink-0 mt-1 pt-1 border-t border-slate-200 grid grid-cols-3 gap-1 text-center">
      <div>
        <p className="text-[8.5px] text-slate-500 leading-none">加征初期 25.1—4</p>
        <p className="text-[11px] font-bold text-red-600 leading-tight">+7.3%</p>
      </div>
      <div>
        <p className="text-[8.5px] text-slate-500 leading-none">高关税期 25.5—12</p>
        <p className="text-[11px] font-bold text-green-600 leading-tight">-25.3%</p>
      </div>
      <div>
        <p className="text-[8.5px] text-slate-500 leading-none">缓和修复 26Q3</p>
        <p className="text-[11px] font-bold text-red-600 leading-tight">+30.3%</p>
      </div>
    </div>
  </div>
);
