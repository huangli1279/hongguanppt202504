import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ReferenceLine,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import {
  exportFocusData,
  exportFocusSummary,
  exportPriceData,
} from '@/data/customsExportFocus';

const fmtPct = (v: number) => `${v >= 0 ? '+' : ''}${v.toFixed(1)}%`;
const fmtAmount = (v: number) => v.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

const ChartTable: React.FC = () => {
  const rows = [
    ...exportFocusData.map((d) => ({ ...d, summary: false })),
    { name: 'AI链合计', sepAmount: exportFocusSummary.aiChain.sepAmount, sepYoy: exportFocusSummary.aiChain.sepYoy, cumAmount: exportFocusSummary.aiChain.cumAmount, cumYoy: exportFocusSummary.aiChain.cumYoy, isAiChain: true, summary: true },
    { name: '出口总值', sepAmount: exportFocusSummary.total.sepAmount, sepYoy: exportFocusSummary.total.sepYoy, cumAmount: exportFocusSummary.total.cumAmount, cumYoy: exportFocusSummary.total.cumYoy, isAiChain: false, summary: true },
  ];

  const gridCols = 'grid-cols-[minmax(0,2.1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]';

  return (
    <div className="h-full flex flex-col min-h-0">
      <div className={`grid ${gridCols} bg-webank-blue text-white text-[11px] font-semibold flex-shrink-0`}>
        <div className="px-2 py-1.5 text-left">商品</div>
        <div className="px-1 py-1 text-right whitespace-nowrap leading-tight">9月金额<span className="block text-[9.5px] font-normal">亿美元</span></div>
        <div className="px-1 py-1.5 text-right whitespace-nowrap">9月同比</div>
        <div className="px-1 py-1 text-right whitespace-nowrap leading-tight">1-9月累计<span className="block text-[9.5px] font-normal">亿美元</span></div>
        <div className="px-1 py-1.5 text-right">累计同比</div>
      </div>
      <div className="flex-1 flex flex-col min-h-0">
        {rows.map((row) => {
          const isTotal = row.summary;
          const isTotalRow = row.name === '出口总值';
          return (
            <div
              key={row.name}
              className={`grid ${gridCols} flex-1 min-h-0 items-center text-[11.5px] border-b border-slate-100 ${
                isTotalRow
                  ? 'bg-slate-50 text-slate-500 font-semibold'
                  : isTotal
                    ? 'bg-red-50/70 text-webank-blue font-bold'
                    : row.isAiChain
                      ? 'bg-sky-50/50 text-slate-700'
                      : 'bg-white text-slate-700'
              }`}
            >
              <div className="px-2 flex items-center gap-1 min-w-0">
                {row.isAiChain && !isTotal && (
                  <span className="shrink-0 inline-block w-1 h-3 rounded-sm bg-webank-accent" />
                )}
                <span className="truncate">{row.name}</span>
              </div>
              <div className="px-1 text-right tabular-nums">{fmtAmount(row.sepAmount)}</div>
              <div className={`px-1 text-right tabular-nums font-semibold ${isTotalRow ? 'text-slate-500' : 'text-red-600'}`}>
                {fmtPct(row.sepYoy)}
              </div>
              <div className="px-1 text-right tabular-nums">{fmtAmount(row.cumAmount)}</div>
              <div className={`px-1 text-right tabular-nums font-semibold ${isTotalRow ? 'text-slate-500' : row.cumYoy >= 50 ? 'text-red-600' : 'text-slate-600'}`}>
                {fmtPct(row.cumYoy)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const PriceBars: React.FC = () => {
  const data = exportPriceData;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 4, right: 44, left: 0, bottom: 16 }}
        barCategoryGap="30%"
      >
        <CartesianGrid horizontal={false} stroke="#e5e7eb" strokeDasharray="3 3" />
        <ReferenceLine x={0} stroke="#94a3b8" strokeWidth={1} />
        <XAxis
          type="number"
          domain={[-30, 165]}
          ticks={[0, 50, 100, 150]}
          tick={{ fontSize: 10, fill: '#94a3b8' }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v) => `${v}%`}
        />
        <YAxis
          type="category"
          dataKey="name"
          width={92}
          tick={{ fontSize: 11, fill: '#334155' }}
          axisLine={false}
          tickLine={false}
        />
        <Bar dataKey="priceYoy" name="隐含价格同比" barSize={11} radius={[0, 2, 2, 0]}>
          {data.map((d) => (
            <Cell key={d.name} fill={d.priceYoy >= 0 ? '#b91c1c' : '#0f766e'} />
          ))}
          <LabelList
            dataKey="priceYoy"
            position="right"
            formatter={(v: number) => `${v >= 0 ? '+' : ''}${v.toFixed(1)}%`}
            style={{ fontSize: 9, fontWeight: 700, fill: '#334155' }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export const ExportFocusChart: React.FC = () => (
  <div className="h-full flex flex-col min-h-0 overflow-hidden border border-webank-line/60 rounded-card bg-white p-2.5">
    <div className="mb-1.5 flex-shrink-0">
      <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
        出口量值：AI链高增，重点商品量价与同比
      </h3>
      <div className="flex items-center justify-between mt-1 gap-3">
        <p className="text-xs text-webank-subtext">
          9月出口<span className="text-red-500 font-semibold">+36.3%</span>，AI链贡献
          <span className="text-red-500 font-semibold">13.0</span>个百分点（集成电路7.9 + 计算机5.1）
        </p>
        <div className="flex gap-3 text-[10px] text-[#666] shrink-0">
          <span><i className="inline-block w-2.5 h-2 mr-1 bg-sky-200 align-middle rounded-sm" />AI链</span>
          <span><i className="inline-block w-2.5 h-2 mr-1 bg-red-100 align-middle rounded-sm" />合计</span>
        </div>
      </div>
    </div>

    <div className="flex-1 min-h-0 grid grid-cols-[1.12fr_1fr] gap-3">
      <div className="min-h-0">
        <ChartTable />
      </div>
      <div className="min-h-0 flex flex-col border-l border-slate-200 pl-2">
        <div className="flex items-center justify-between flex-shrink-0">
          <span className="text-[11px] font-bold text-webank-blue whitespace-nowrap">9月隐含价格同比（金额同比-数量同比）</span>
          <div className="flex gap-2 text-[9px] text-[#666] shrink-0">
            <span><i className="inline-block w-2.5 h-2 mr-0.5 bg-red-700 align-middle" />涨价</span>
            <span><i className="inline-block w-2.5 h-2 mr-0.5 bg-teal-700 align-middle" />降价</span>
          </div>
        </div>
        <p className="text-[9.5px] text-slate-500 leading-tight flex-shrink-0 mb-0.5">
          涨价集中在AI链；手机、计算机设备、半导体器件量减价升，工业机器人、液晶模组价格同比下降
        </p>
        <div className="flex-1 min-h-0">
          <PriceBars />
        </div>
        <p className="text-[9px] text-slate-400 leading-tight mt-0.5 flex-shrink-0">
          数据来源：海关总署《2026年9月出口主要商品量值表（美元值）》｜金额单位：亿美元
        </p>
      </div>
    </div>
  </div>
);
