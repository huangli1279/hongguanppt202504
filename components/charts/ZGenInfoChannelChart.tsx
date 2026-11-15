import React from 'react';

interface ChannelRow {
  no: string;
  label: string;
  left: number;
  leftDiff: string;
  right: number;
  rightDiff: string;
}

const rows: ChannelRow[] = [
  { no: '①', label: '直播间/抖音、快手等视频网站', left: 61, leftDiff: '+7', right: 57, rightDiff: '+7' },
  { no: '②', label: '小红书等内容分享平台', left: 59, leftDiff: '+7', right: 53, rightDiff: '+12' },
  { no: '③', label: '询问AI工具', left: 59, leftDiff: '+2', right: 45, rightDiff: '+8' },
  { no: '④', label: '淘宝/京东等电商网站', left: 45, leftDiff: '-5', right: 56, rightDiff: '-4' },
  { no: '', label: '搜索引擎', left: 35, leftDiff: '0', right: 29, rightDiff: '0' },
  { no: '', label: '询问家人朋友', left: 35, leftDiff: '0', right: 25, rightDiff: '-1' },
  { no: '', label: '商场/门店体验', left: 33, leftDiff: '-2', right: 35, rightDiff: '-3' },
];

const LEFT_COLOR = '#8b3fd1';
const RIGHT_COLOR = '#e9d7f6';
const MAX = 65;

const GRID = '24px 1fr 26px minmax(96px, 1.5fr) 26px 1fr 24px';

const Legend: React.FC<{ color: string; children: React.ReactNode }> = ({ color, children }) => (
  <span className="inline-flex items-center gap-1 whitespace-nowrap text-[9px] text-slate-600">
    <span className="inline-block h-2 w-2 rounded-[2px]" style={{ backgroundColor: color }} />
    {children}
  </span>
);

/** 图2：Z 世代消费决策信息来源（双向柱状图） */
export const ZGenInfoChannelChart: React.FC = () => (
  <div className="flex h-full w-full flex-col">
    {/* 标题 */}
    <div className="shrink-0 text-center">
      <h3 className="text-[12px] font-bold leading-tight text-webank-blue">
        Z 世代的消费决策高度依赖视频、内容平台以及 AI 工具
      </h3>
      <p className="mt-0.5 text-[10px] font-semibold text-slate-600">信息获取渠道</p>
    </div>

    {/* 表头 */}
    <div className="mt-1 grid shrink-0 items-end gap-x-1" style={{ gridTemplateColumns: GRID }}>
      <span className="col-span-3 text-right text-[8px] leading-tight text-slate-500">
        与全年龄样本差值
        <br />
        （百分点）
      </span>
      <div className="col-span-1 flex items-center justify-center gap-2">
        <Legend color={LEFT_COLOR}>探索新方案</Legend>
        <Legend color={RIGHT_COLOR}>有购买需求后</Legend>
      </div>
      <span className="col-span-3 text-left text-[8px] leading-tight text-slate-500">
        与全年龄样本差值
        <br />
        （百分点）
      </span>
    </div>

    {/* 双向前条 */}
    <div className="mt-1 flex flex-1 min-h-0 flex-col justify-around">
      {rows.map((r) => (
        <div key={r.label} className="grid items-center gap-x-1" style={{ gridTemplateColumns: GRID }}>
          <span className="text-right text-[9px] tabular-nums text-slate-500">{r.leftDiff}</span>
          <div className="flex justify-end">
            <div
              className="h-[11px] rounded-l-[2px]"
              style={{ width: `${(r.left / MAX) * 100}%`, backgroundColor: LEFT_COLOR }}
            />
          </div>
          <span className="text-right text-[10px] font-semibold tabular-nums text-slate-700">{r.left}%</span>
          <span className="truncate text-center text-[10px] text-slate-700">
            {r.no && <span className="mr-0.5 text-slate-500">{r.no}</span>}
            {r.label}
          </span>
          <span className="text-left text-[10px] font-semibold tabular-nums text-slate-700">{r.right}%</span>
          <div className="flex justify-start">
            <div
              className="h-[11px] rounded-r-[2px]"
              style={{ width: `${(r.right / MAX) * 100}%`, backgroundColor: RIGHT_COLOR }}
            />
          </div>
          <span className="text-left text-[9px] tabular-nums text-slate-500">{r.rightDiff}</span>
        </div>
      ))}
    </div>

    {/* 备注 */}
    <div className="mt-1 shrink-0 space-y-0.5 text-[8px] leading-snug text-slate-500">
      <p>注：百分比数值为回答人次后的占比</p>
      <p>数据来源：埃森哲 2025 年中国消费者调研（全年龄样本 N=5000，18-29 岁 N=986，占比 20%）</p>
      <p>问题1：为了探索新的解决方案，或者改善生活的方法，您一般从哪里获得信息？</p>
      <p>问题2：当您有明确的购买需求时，您会通过哪些方式来查找商品/服务信息？</p>
    </div>
  </div>
);
