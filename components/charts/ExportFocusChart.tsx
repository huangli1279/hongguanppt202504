import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from 'recharts';
import {
  exportFocusData,
  exportFocusSummary,
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

const GrowthBars: React.FC = () => {
  const data = exportFocusData.map((d) => ({
    name: d.name === '自动数据处理设备及零部件' ? '计算机零部件' : d.name,
    sepYoy: d.sepYoy,
    cumYoy: d.cumYoy,
  }));

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={data}
        layout="vertical"
        margin={{ top: 4, right: 46, left: 0, bottom: 18 }}
        barCategoryGap="26%"
        barGap={2}
      >
        <CartesianGrid horizontal={false} stroke="#e5e7eb" strokeDasharray="3 3" />
        <XAxis
          type="number"
          domain={[0, 150]}
          tick={{ fontSize: 10, fill: '#94a3b8' }}
          axisLine={false}
          tickLine={false}
          tickFormatter={(v) => `${v}%`}
          tickCount={4}
        />
        <YAxis
          type="category"
          dataKey="name"
          width={92}
          tick={{ fontSize: 11, fill: '#334155' }}
          axisLine={false}
          tickLine={false}
        />
        <Bar dataKey="sepYoy" name="9月同比" fill="#b91c1c" barSize={9} radius={[0, 2, 2, 0]}>
          <LabelList dataKey="sepYoy" position="right" formatter={(v: number) => `${v}%`} style={{ fontSize: 9, fontWeight: 700, fill: '#b91c1c' }} />
        </Bar>
        <Bar dataKey="cumYoy" name="1-9月累计同比" fill="#005c8f" barSize={9} radius={[0, 2, 2, 0]}>
          <LabelList dataKey="cumYoy" position="right" formatter={(v: number) => `${v}%`} style={{ fontSize: 9, fontWeight: 700, fill: '#005c8f' }} />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};

export const ExportFocusChart: React.FC = () => (
  <div className="h-full flex flex-col min-h-0 overflow-hidden border border-webank-line/60 rounded-card bg-white p-2.5">
    <div className="mb-1.5 flex-shrink-0">
      <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
        出口量值：AI链高增，重点商品9月与累计同比
      </h3>
      <div className="flex items-center justify-between mt-1 gap-3">
        <p className="text-xs text-webank-subtext">
          9月出口<span className="text-red-500 font-semibold">+36.3%</span>，AI链贡献
          <span className="text-red-500 font-semibold">13.0</span>个百分点（集成电路7.9 + 计算机5.1）
        </p>
        <div className="flex gap-3 text-[10px] text-[#666] shrink-0">
          <span><i className="inline-block w-3 h-2 mr-1 bg-red-700 align-middle" />9月同比</span>
          <span><i className="inline-block w-3 h-2 mr-1 bg-webank-blue align-middle" />1-9月累计同比</span>
        </div>
      </div>
    </div>

    <div className="flex-1 min-h-0 grid grid-cols-[1.12fr_1fr] gap-3">
      <div className="min-h-0">
        <ChartTable />
      </div>
      <div className="min-h-0 flex flex-col border-l border-slate-200 pl-2">
        <div className="flex-1 min-h-0">
          <GrowthBars />
        </div>
        <p className="text-[9px] text-slate-400 leading-tight mt-0.5 flex-shrink-0">
          数据来源：海关总署《2026年9月出口主要商品量值表（美元值）》｜金额单位：亿美元
        </p>
      </div>
    </div>
  </div>
);
