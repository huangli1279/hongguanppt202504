import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseTable, ColumnConfig } from '../base/BaseTable';

const newIndustryData = [
  { rank: 1, industry: '计算机通信电子', prosperityLevel: '高景气', score: 96.8, valueAdded: 15.7, profitGrowth: 80.6, ppiYoy: 3.3, investmentGrowth: 13.9, exportGrowth: 12.9, pmi: 53.5 },
  { rank: 2, industry: '专用设备', prosperityLevel: '高景气', score: 86.6, valueAdded: 10.0, profitGrowth: 10.3, ppiYoy: -0.6, investmentGrowth: -9.5, exportGrowth: 21.1, pmi: 52.5 },
  { rank: 3, industry: '通用设备', prosperityLevel: '高景气', score: 81.9, valueAdded: 9.9, profitGrowth: 11.2, ppiYoy: -0.7, investmentGrowth: -13.1, exportGrowth: 11.9, pmi: 52.5 },
  { rank: 4, industry: '电气机械', prosperityLevel: '高景气', score: 81.1, valueAdded: 7.0, profitGrowth: 7.9, ppiYoy: 5.1, investmentGrowth: 3.6, exportGrowth: 10.1, pmi: 52.5 },
  { rank: 5, industry: '铁路船舶航空航天', prosperityLevel: '高景气', score: 74.5, valueAdded: 18.2, profitGrowth: 46.8, ppiYoy: -0.2, investmentGrowth: -2.3, exportGrowth: 26.5, pmi: 52.5 },
  { rank: 6, industry: '纺织', prosperityLevel: '中景气', score: 69.8, valueAdded: 3.4, profitGrowth: 16.4, ppiYoy: 1.5, investmentGrowth: -8.2, exportGrowth: 4.0, pmi: 50.2 },
  { rank: 7, industry: '汽车制造', prosperityLevel: '中景气', score: 64.1, valueAdded: 8.7, profitGrowth: -22.5, ppiYoy: -2.1, investmentGrowth: -24.0, exportGrowth: 42.5, pmi: 52.5 },
  { rank: 8, industry: '有色金属', prosperityLevel: '中景气', score: 62.2, valueAdded: 5.1, profitGrowth: 36.7, ppiYoy: 23.4, investmentGrowth: 4.6, exportGrowth: 71.6, pmi: 47.1 },
  { rank: 9, industry: '化学原料', prosperityLevel: '中景气', score: 57.4, valueAdded: -0.1, profitGrowth: 37.0, ppiYoy: 11.3, investmentGrowth: -1.0, exportGrowth: 25.2, pmi: 47.1 },
  { rank: 10, industry: '农副食品', prosperityLevel: '中景气', score: 55.0, valueAdded: 3.1, profitGrowth: -16.1, ppiYoy: -1.2, investmentGrowth: -29.4, exportGrowth: 2.8, pmi: 50.2 },
  { rank: 11, industry: '煤炭开采', prosperityLevel: '低景气', score: 51.3, valueAdded: -5.9, profitGrowth: 83.5, ppiYoy: 20.6, investmentGrowth: 28.0, exportGrowth: 0.0, pmi: 47.1 },
  { rank: 12, industry: '黑色金属', prosperityLevel: '低景气', score: 47.4, valueAdded: 3.3, profitGrowth: -6.8, ppiYoy: 3.1, investmentGrowth: -24.7, exportGrowth: 5.4, pmi: 47.1 },
  { rank: 13, industry: '石油天然气', prosperityLevel: '低景气', score: 46.9, valueAdded: 1.0, profitGrowth: 13.4, ppiYoy: 16.8, investmentGrowth: 34.5, exportGrowth: -19.6, pmi: 47.1 },
  { rank: 14, industry: '电力热力', prosperityLevel: '低景气', score: 36.3, valueAdded: 7.8, profitGrowth: -14.9, ppiYoy: -4.4, investmentGrowth: -25.0, exportGrowth: 8.5, pmi: 47.1 },
  { rank: 15, industry: '非金属矿物', prosperityLevel: '低景气', score: 31.8, valueAdded: -2.3, profitGrowth: -62.8, ppiYoy: -4.4, investmentGrowth: -4.3, exportGrowth: -1.4, pmi: 47.1 },
];

const formatNumber = (value: number) => {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
};

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
    render: (value) => {
      const styles: Record<string, { label: string; cls: string }> = {
        '高景气': { label: '高景气', cls: 'bg-red-100 text-red-700 ring-1 ring-red-200' },
        '中景气': { label: '中景气', cls: 'bg-amber-100 text-amber-700 ring-1 ring-amber-200' },
        '低景气': { label: '低景气', cls: 'bg-slate-200 text-slate-600 ring-1 ring-slate-300' },
      };
      const item = styles[value] || styles['中景气'];
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
    key: 'score',
    title: '景气分',
    align: 'center',
    width: '68px',
    render: (value, _row, index) => {
      const isHighlighted = index < 5;
      return (
        <span className={`text-[12px] font-bold tabular-nums text-webank-blue ${isHighlighted ? 'bg-yellow-100/80' : ''}`}>
          {formatNumber(value)}
        </span>
      );
    },
  },
  { key: 'valueAdded', title: '工增%', align: 'center' },
  { key: 'profitGrowth', title: '利润%', align: 'center' },
  { key: 'ppiYoy', title: 'PPI%', align: 'center' },
  { key: 'investmentGrowth', title: '投资%', align: 'center' },
  { key: 'exportGrowth', title: '出口%', align: 'center' },
  { key: 'pmi', title: 'PMI', align: 'center' },
];

const methodWeights: Array<{ indicator: string; role: string; weight: string }> = [
  { indicator: 'PMI', role: '先行', weight: '20%' },
  { indicator: '固定资产投资增速', role: '先行', weight: '15%' },
  { indicator: '工业增加值增速', role: '同步', weight: '15%' },
  { indicator: '利润总额增速', role: '同步', weight: '15%' },
  { indicator: 'PPI同比', role: '同步', weight: '10%' },
  { indicator: '出口交货值增速', role: '验证', weight: '25%' },
];

export const ContentSlide27: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          <span className="text-webank-blue font-bold">K型分化总结：</span>
            <span className="text-webank-blue">分化加剧，新经济端景气延续、旧经济端持续低迷</span>
        </>
      }
      headerClassName="!mb-4"
    >
      <div className="flex flex-col h-full min-h-0">
        <div className="mb-3 flex-shrink-0">
          <BaseCard title="行业总结" delay="0ms" variant="accent" className="!p-3 gap-1">
            <p className="text-sm leading-snug">
              高景气行业：AI相关行业（特别是算力相关）、高端装备相关、电气机械、铁路船舶航空航天，主要由政策内需和出口外需双轮驱动；K型分化短期内不可逆转，新经济端的AI景气有望延续，但旧经济端的地产、建材、传统制造业仍将在底部运行。
            </p>
          </BaseCard>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-[1.35fr_1fr] gap-3">
          <ChartContainer delay="400ms" className="min-h-0">
            <BaseTable
              data={newIndustryData}
              columns={industryColumns}
              title="分行业景气分排名"
              subtitle="橙色高亮为前5名高景气行业"
              colorizeNumbers={false}
              striped
              bordered
              rowHeight="auto"
              headerBgColor="#f1f5f9"
              headerTextColor="#0f172a"
              highlightRows={[0, 1, 2, 3, 4]}
              highlightColor="rgba(255, 237, 213, 0.95)"
              highlightColumnColor="rgba(255, 247, 237, 0.9)"
              cellClassName="!px-1 tabular-nums text-[10px] leading-tight"
              headerCellClassName="!px-1 !py-1 whitespace-nowrap text-[10px] leading-tight font-semibold"
            />
          </ChartContainer>

          <ChartContainer delay="600ms" className="min-h-0 h-full">
            <div className="h-full flex flex-col rounded-lg border border-slate-200 bg-white overflow-hidden">
              <div className="px-3.5 py-2.5 border-b border-slate-200 bg-slate-50 flex-shrink-0">
                <h3 className="text-webank-blue leading-snug">
                  <span className="text-sm font-bold">景气分计算</span>
                  <span className="text-[11px] font-normal">（参考申万宏源行业中观景气跟踪（量价利分位法）、中金五维打分卡，采用多指标加权方法对细分行业进行景气评估）</span>
                </h3>
              </div>

              <div className="flex-1 min-h-0 flex flex-col px-3.5 py-3 gap-3">
                <p className="text-[11px] leading-relaxed text-slate-500 flex-shrink-0">
                  注：投资已从累计同比换算为当月同比。出口=0 或 -100 视为无效数据已剔除。
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
                  <p className="font-semibold text-slate-800">单指标得分</p>
                  <p>
                    = 当前值在自身历史序列（近3年）中的百分位 × 100
                  </p>
                  <p className="text-slate-500">
                    （得分X = 本月数值超越自身历史X%的月份；平局取中间位置）
                  </p>
                  <p className="pt-1">
                    <span className="font-semibold text-slate-800">景气分</span>
                    {' = Σ( 单指标得分 × 权重 ) / Σ 有效权重'}
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
