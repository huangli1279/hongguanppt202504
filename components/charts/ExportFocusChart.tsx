import React from 'react';
import { exportFocusData } from '@/data/customsExportFocus';

const fmtPct = (v: number) => `${v >= 0 ? '+' : ''}${v.toFixed(1)}%`;
const fmtAmount = (v: number) => v.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

const ChartTable: React.FC = () => {
  const rows = [
    ...exportFocusData.map((d) => ({ ...d, summary: false })),
    { name: '玩具', sepAmount: 41.2, sepYoy: 40.8, cumAmount: 269.1, cumYoy: -1.3, isAiChain: true, summary: false },
    { name: '服装', sepAmount: 133.3, sepYoy: 24.1, cumAmount: 1055.7, cumYoy: 4.5, isAiChain: true, summary: false }
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
              <div className="px-1 text-right tabular-nums">{row.sepAmount == null ? '—' : fmtAmount(row.sepAmount)}</div>
              <div className={`px-1 text-right tabular-nums font-semibold ${isTotalRow ? 'text-slate-500' : 'text-red-600'}`}>
                {row.sepYoy == null ? '—' : fmtPct(row.sepYoy)}
              </div>
              <div className="px-1 text-right tabular-nums">{row.cumAmount == null ? '—' : fmtAmount(row.cumAmount)}</div>
              <div className={`px-1 text-right tabular-nums font-semibold ${isTotalRow ? 'text-slate-500' : row.cumYoy != null && row.cumYoy >= 50 ? 'text-red-600' : 'text-slate-600'}`}>
                {row.cumYoy == null ? '—' : fmtPct(row.cumYoy)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
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
        </div>
      </div>
    </div>

    <div className="flex-1 min-h-0">
      <ChartTable />
    </div>
  </div>
);
