import React from 'react';

interface ChannelRow {
  no: string;
  label: string;
  left: number;
  leftDiff: number;
  right: number;
  rightDiff: number;
}

const rows: ChannelRow[] = [
  { no: '1', label: '直播间/抖音、快手等视频网站', left: 61, leftDiff: 7, right: 57, rightDiff: 7 },
  { no: '2', label: '小红书等内容分享平台', left: 59, leftDiff: 7, right: 53, rightDiff: 12 },
  { no: '3', label: '询问AI工具', left: 59, leftDiff: 2, right: 45, rightDiff: 8 },
  { no: '4', label: '淘宝/京东等电商网站', left: 45, leftDiff: -5, right: 56, rightDiff: -4 },
  { no: '5', label: '搜索引擎', left: 35, leftDiff: 0, right: 29, rightDiff: 0 },
  { no: '6', label: '询问家人朋友', left: 35, leftDiff: 0, right: 25, rightDiff: -1 },
  { no: '7', label: '商场/门店体验', left: 33, leftDiff: -2, right: 35, rightDiff: -3 },
];

const FULL_COLOR = '#3978b9';
const ZGEN_COLOR = '#8ecae6';

// 将数值映射到 [10%, 84%] 的柱长区间，放大不同数据之间的长度差距，并给右侧数值文字留出空间
const ALL_VALUES = rows.flatMap((r) => [r.left, r.left + r.leftDiff, r.right, r.right + r.rightDiff]);
const MIN_VALUE = Math.min(...ALL_VALUES);
const MAX_VALUE = Math.max(...ALL_VALUES);
const FLOOR = 10;
const CEIL = 84;
const barWidth = (value: number) =>
  FLOOR + ((CEIL - FLOOR) * (value - MIN_VALUE)) / (MAX_VALUE - MIN_VALUE);

const Legend: React.FC<{ color: string; children: React.ReactNode }> = ({ color, children }) => (
  <span className="inline-flex items-center gap-1 whitespace-nowrap text-[9px] text-slate-600">
    <span className="inline-block h-2.5 w-2.5 rounded-[2px]" style={{ backgroundColor: color }} />
    {children}
  </span>
);

const Bars: React.FC<{ full: number; zgen: number }> = ({ full, zgen }) => (
  <div className="flex w-full flex-col gap-1">
    <div className="flex items-center gap-1">
      <div
        className="h-2.5 min-w-[4px] rounded-r"
        style={{ width: `${barWidth(full)}%`, backgroundColor: FULL_COLOR }}
      />
      <span className="shrink-0 text-[10px] leading-none tabular-nums text-slate-600">{full}%</span>
    </div>
    <div className="flex items-center gap-1">
      <div
        className="h-2.5 min-w-[4px] rounded-r"
        style={{ width: `${barWidth(zgen)}%`, backgroundColor: ZGEN_COLOR }}
      />
      <span className="shrink-0 text-[10px] leading-none tabular-nums text-slate-600">{zgen}%</span>
    </div>
  </div>
);

/** 图2：Z 世代消费决策信息来源（横向柱状图） */
export const ZGenInfoChannelChart: React.FC = () => (
  <div className="flex h-full w-full flex-col">
    <div className="shrink-0 text-center">
      <h3 className="text-[13px] font-bold leading-tight text-webank-blue">
        消费决策高度依赖视频、内容平台以及 AI 工具
      </h3>
      <div className="mt-1 flex justify-center gap-3">
        <Legend color={FULL_COLOR}>全年龄样本</Legend>
        <Legend color={ZGEN_COLOR}>Z 世代</Legend>
      </div>
    </div>

    <div className="mt-2 grid shrink-0 grid-cols-[1.45fr_1fr_1fr] gap-x-2 text-center text-[10px] font-semibold leading-tight text-slate-700">
      <span />
      <span>探索新方案</span>
      <span>有购买需求后</span>
    </div>

    <div className="mt-1 flex min-h-0 flex-1 flex-col justify-around">
      {rows.map((row) => {
        const highlighted = row.no === '3';
        return (
          <div
            key={row.label}
            className={`grid grid-cols-[1.45fr_1fr_1fr] items-center gap-x-2 ${
              highlighted ? 'rounded border border-[#c81e1e] px-1 py-0.5' : ''
            }`}
          >
            <span
              className={`text-[10px] leading-tight ${
                highlighted ? 'font-semibold text-[#c81e1e]' : 'text-slate-700'
              }`}
            >
              {row.no && `${row.no} `}
              {row.label}
            </span>
            <Bars full={row.left} zgen={row.left + row.leftDiff} />
            <Bars full={row.right} zgen={row.right + row.rightDiff} />
          </div>
        );
      })}
    </div>

    <div className="mt-1 shrink-0 space-y-0.5 text-[9px] leading-snug text-slate-500">
      <p>注：百分比为各渠道信息来源占比；深蓝色为全年龄样本，浅蓝色为 Z 世代</p>
      <p>数据来源：埃森哲 2025 年中国消费者调研（全年龄样本 N=5000，18-29 岁 N=986，占比 20%）</p>
    </div>
  </div>
);
