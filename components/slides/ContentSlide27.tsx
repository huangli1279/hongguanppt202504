import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { IndustryProsperityScatterChart } from '../charts/IndustryProsperityScatterChart';

const methodWeights: Array<{ indicator: string; role: string; weight: string }> = [
  { indicator: '固定资产投资增速', role: '先行', weight: '18.75%' },
  { indicator: '工业增加值增速', role: '同步', weight: '18.75%' },
  { indicator: '利润总额增速', role: '同步', weight: '18.75%' },
  { indicator: 'PPI同比', role: '同步', weight: '12.5%' },
  { indicator: '出口交货值↔营业收入增速', role: '验证', weight: '合计 31.25%' },
];

export const ContentSlide27: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          <span className="text-webank-blue font-bold">行业景气变化追踪：</span>
            <span className="text-webank-blue">分化加剧，上游资源与AI链景气延续，消费轻工持续低迷</span>
        </>
      }
      headerClassName="!mb-4"
    >
      <div className="h-full min-h-0 grid grid-cols-[1.6fr_1fr] gap-3">
          <ChartContainer delay="400ms" className="min-h-0">
            <IndustryProsperityScatterChart />
          </ChartContainer>

          <div className="flex flex-col gap-2 min-h-0 pt-8">
          <div className="flex-shrink-0">
            <BaseCard title="行业总结" delay="0ms" variant="accent" className="!p-2.5 gap-0.5">
              <p className="text-xs leading-snug">
                6→9月景气分化延续：新经济端电子、仪器仪表、电气机械受出口与算力需求支撑，叠加油气、煤炭量价齐升，景气领跑；旧经济端地产链（家具、木材、非金属矿）与黑色冶炼持续低迷，中下游普遍“量增利薄”。
              </p>
            </BaseCard>
          </div>
          <div className="flex-shrink-0">
          <ChartContainer delay="600ms" className="min-h-0">
            <div className="flex flex-col rounded-lg border border-slate-200 bg-white overflow-hidden">
              <div className="px-3 py-1.5 border-b border-slate-200 bg-slate-50 flex-shrink-0">
                <h3 className="text-webank-blue leading-snug">
                  <span className="text-sm font-bold">景气分计算</span>
                  <span className="text-[11px] font-normal">（参考申万宏源行业中观景气跟踪（量价利分位法）、中金五维打分卡，采用多指标加权方法对细分行业进行景气评估）</span>
                </h3>
              </div>

              <div className="flex flex-col px-3 py-2 gap-1.5">
                <p className="text-[11px] leading-relaxed text-slate-500 flex-shrink-0">
                  注：投资、利润、营收为累计同比；工增、出口、PPI为当月同比。
                </p>

                <div className="overflow-hidden rounded border border-slate-200 flex flex-col">
                  <div className="grid grid-cols-[1.7fr_0.55fr_0.9fr] bg-sky-50 text-slate-700 text-[11px] font-semibold border-b border-slate-200 flex-shrink-0">
                    <div className="px-2 py-1">指标</div>
                    <div className="px-2 py-1 text-center">角色</div>
                    <div className="px-2 py-1 text-center">权重</div>
                  </div>
                  <div className="flex flex-col">
                    {methodWeights.map((row, index) => (
                      <div
                        key={row.indicator}
                        className={`grid grid-cols-[1.7fr_0.55fr_0.9fr] items-center text-[11px] border-b border-slate-100 last:border-b-0 ${
                          index % 2 === 1 ? 'bg-slate-50' : 'bg-white'
                        }`}
                      >
                        <div className="px-2 py-1 text-slate-700">{row.indicator}</div>
                        <div className="px-2 py-1 text-center text-slate-600">{row.role}</div>
                        <div className="px-2 py-1 text-center font-semibold text-webank-blue">{row.weight}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex-shrink-0 space-y-1 text-[11px] leading-relaxed text-slate-600 border-t border-dashed border-slate-200 pt-1.5">
                  <p className="font-semibold text-slate-800">单指标得分</p>
                  <p>
                    = 当前值在自身历史序列（近3年）中的百分位 × 100
                  </p>
                  <p className="text-slate-500">
                    （得分X = 本月数值超越自身历史X%的月份；平局取中间位置）
                  </p>
                  <p className="pt-0.5">
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
