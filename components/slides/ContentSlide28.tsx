import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { IndustryProsperityScatterChart } from '../charts/IndustryProsperityScatterChart';

const methodWeights: Array<{ indicator: string; role: string; weight: string }> = [
  { indicator: 'PMI', role: '先行', weight: '20%' },
  { indicator: '固定资产投资增速', role: '先行', weight: '15%' },
  { indicator: '工业增加值增速', role: '同步', weight: '15%' },
  { indicator: '利润总额增速', role: '同步', weight: '15%' },
  { indicator: 'PPI同比', role: '同步', weight: '10%' },
  { indicator: '出口交货值增速', role: '验证', weight: '25%' },
];

export const ContentSlide28: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          <span className="text-webank-blue font-bold">行业景气变化追踪：</span>
            <span className="text-webank-blue">分化延续，新经济端景气、旧经济端持续低迷</span>
        </>
      }
      headerClassName="!mb-4"
    >
      <div className="h-full min-h-0 grid grid-cols-[1.6fr_1fr] gap-3">
          <ChartContainer delay="400ms" className="min-h-0">
            <IndustryProsperityScatterChart />
          </ChartContainer>

          <div className="flex flex-col gap-2 min-h-0">
          <div className="flex-shrink-0">
            <BaseCard title="行业总结" delay="0ms" variant="accent" className="!p-2.5 gap-0.5">
              <p className="text-xs leading-snug">
                高景气行业：AI相关行业（特别是算力相关）、高端装备相关、电气机械、铁路船舶航空航天，主要由政策内需和出口外需双轮驱动；K型分化短期内不可逆转，新经济端的AI景气有望延续，但旧经济端的地产、建材、传统制造业仍将在底部运行。
              </p>
            </BaseCard>
          </div>
          <div className="flex-1 min-h-0">
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
      </div>
    </BaseContentSlide>
  );
};
