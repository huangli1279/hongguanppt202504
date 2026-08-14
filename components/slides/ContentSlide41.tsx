import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { buildIndustryProsperityRows } from '@/data/industryHeatmap';

const prosperityRows = buildIndustryProsperityRows();

const industryColumns: ColumnConfig[] = [
  {
    key: 'rank',
    title: '排名',
    align: 'center',
    width: '42px',
    render: (value) => String(Math.round(Number(value))),
  },
  { key: 'industry', title: '行业', align: 'left' },
  {
    key: 'prosperityLevel',
    title: '景气',
    align: 'center',
    width: '60px',
    highlight: true,
    render: (_value, row, rowIndex) => {
      // 前4行固定显示高景气
      let level: 'high' | 'mid' | 'low';
      if (rowIndex !== undefined && rowIndex < 4) {
        level = 'high';
      } else {
        const score = Number(row?.score);
        if (Number.isFinite(score) && score > 60) level = 'high';
        else if (Number.isFinite(score) && score < 45) level = 'low';
        else level = 'mid';
      }

      const styles: Record<typeof level, { label: string; cls: string }> = {
        high: { label: '高景气', cls: 'bg-red-100 text-red-700 ring-1 ring-red-200' },
        mid:  { label: '中景气', cls: 'bg-amber-100 text-amber-700 ring-1 ring-amber-200' },
        low:  { label: '低景气', cls: 'bg-slate-200 text-slate-600 ring-1 ring-slate-300' },
      };
      const item = styles[level];

      return (
        <span
          className={`inline-flex items-center justify-center rounded px-1.5 py-[1px] text-[10px] font-semibold leading-none tabular-nums whitespace-nowrap ${item.cls}`}
        >
          {item.label}
        </span>
      );
    },
  },
  {
    key: 'scoreLabel',
    title: '景气分',
    align: 'center',
    width: '68px',
    highlight: true,
    render: (value) => (
      <span className="text-[12px] font-bold tabular-nums text-webank-blue">{value}</span>
    ),
  },
  { key: 'valueAddedLabel', title: '工增%', align: 'center' },
  { key: 'profitGrowthLabel', title: '利润%', align: 'center' },
  { key: 'ppiYoyLabel', title: 'PPI%', align: 'center' },
  { key: 'investmentGrowthLabel', title: '投资%', align: 'center' },
  { key: 'exportGrowthLabel', title: '出口%', align: 'center' },
  { key: 'pmiLabel', title: 'PMI', align: 'center' },
];

const methodWeights: Array<{ indicator: string; role: string; weight: string }> = [
  { indicator: 'PMI', role: '先行', weight: '20%' },
  { indicator: '固定资产投资增速', role: '先行', weight: '15%' },
  { indicator: '工业增加值增速', role: '同步', weight: '15%' },
  { indicator: '利润总额增速', role: '同步', weight: '15%' },
  { indicator: 'PPI同比', role: '同步', weight: '10%' },
  { indicator: '出口交货值增速', role: '验证', weight: '25%' },
];

export const ContentSlide41: React.FC = () => {
  return (
    <BaseContentSlide
      title="经济K型分化加剧，新经济端景气延续、旧经济端持续低迷"
      cardColumns={1}
    >
      <div className="flex flex-col h-full min-h-0">
        <div className="mb-3 flex-shrink-0">
          <BaseCard title="行业总结" delay="0ms" variant="accent" className="!p-3 gap-1">
            <p className="text-sm leading-snug">
              高景气行业：AI相关行业（特别是算力相关）、高端装备相关、铁路船舶航空航天；K型分化短期内不可逆转，新经济端的AI景气有望延续，但旧经济端的地产、建材、传统制造业仍将在底部运行。
            </p>
          </BaseCard>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-[1.35fr_1fr] gap-3">
          <ChartContainer delay="400ms" className="min-h-0">
            <BaseTable
              data={prosperityRows}
              columns={industryColumns}
              title="分行业景气分排名"
              subtitle="橙色高亮为前4名高景气行业"
              colorizeNumbers={false}
              striped
              bordered
              rowHeight="auto"
              headerBgColor="#f1f5f9"
              headerTextColor="#0f172a"
              highlightRows={[0, 1, 2, 3]}
              highlightColor="rgba(255, 237, 213, 0.95)"
              highlightColumnColor="rgba(255, 247, 237, 0.9)"
              cellClassName="!px-1 tabular-nums text-[10px] leading-tight"
              headerCellClassName="!px-1 !py-1 whitespace-nowrap text-[10px] leading-tight font-semibold"
            />
          </ChartContainer>

          <ChartContainer delay="600ms" className="min-h-0 h-full">
            <div className="h-full flex flex-col rounded-lg border border-slate-200 bg-white overflow-hidden">
              <div className="px-3.5 py-2.5 border-b border-slate-200 bg-slate-50 flex-shrink-0">
                <h3 className="text-sm font-bold text-webank-blue">景气分计算方法</h3>
              </div>

              <div className="flex-1 min-h-0 flex flex-col px-3.5 py-3 gap-3">
                <p className="text-[11px] leading-relaxed text-slate-500 flex-shrink-0">
                  注：利润和投资已从累计同比换算为当月同比。出口=0 或 -100 视为无效数据已剔除。
                </p>

                <div className="flex-1 min-h-0 overflow-hidden rounded border border-slate-200 flex flex-col">
                  <div className="grid grid-cols-[1.6fr_0.7fr_0.7fr] bg-sky-50 text-slate-700 text-[11px] font-semibold border-b border-slate-200 flex-shrink-0">
                    <div className="px-2.5 py-2">指标</div>
                    <div className="px-2.5 py-2 text-center">角色</div>
                    <div className="px-2.5 py-2 text-center">权重</div>
                  </div>
                  <div className="flex-1 min-h-0 flex flex-col">
                    {methodWeights.map((row, index) => (
                      <div
                        key={row.indicator}
                        className={`flex-1 grid grid-cols-[1.6fr_0.7fr_0.7fr] items-center text-[11px] border-b border-slate-100 last:border-b-0 ${
                          index % 2 === 1 ? 'bg-slate-50' : 'bg-white'
                        }`}
                      >
                        <div className="px-2.5 text-slate-700">{row.indicator}</div>
                        <div className="px-2.5 text-center text-slate-600">{row.role}</div>
                        <div className="px-2.5 text-center font-semibold text-webank-blue">{row.weight}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0 space-y-2 text-[11px] leading-relaxed text-slate-600 border-t border-dashed border-slate-200 pt-3">
                  <p>
                    <span className="font-semibold text-slate-800">景气分</span>
                    {' = Σ( Z-score → 0-100 映射 × 权重 ) / Σ 有效权重'}
                  </p>
                </div>
              </div>
            </div>
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
