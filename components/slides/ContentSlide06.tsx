import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { GdpForecastRangeChart } from '../charts/GdpForecastRangeChart';

export const ContentSlide06: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <span className="inline-flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-red-600 to-blue-600 text-white rounded-lg font-bold shadow-md">
            预测与展望
          </span>
          <span className="text-gray-900 font-semibold">
            三季度增长回升，全年预计增长
            <span className="font-bold text-blue-600">4.5%-4.6%</span>
            ，完成目标最低值
          </span>
        </span>
      }
      cardColumns={2}
      chartColumns={1}
      children={
        <div className="flex flex-col h-full min-h-0 gap-3">
            <div className="grid grid-cols-2 gap-3">
              <BaseCard title="机构共识" delay="0ms" variant="accent" className="!gap-1.5 !p-3 w-full">
                <ul className="list-disc pl-5 space-y-1 text-[13px] leading-snug">
                  <li>
                    全年增速大概率落在
                    <span className="font-bold text-red-500">4.5%-4.6%</span>
                    区间，处于政府目标（4.5%-5.0%）下限附近，较二季度预测区间
                    <span className="font-bold text-red-500">4.5%-4.8%</span>
                    下修
                  </li>
                </ul>
              </BaseCard>

              <BaseCard title="机构预测" delay="120ms" variant="accent" className="!gap-1.5 !p-3 w-full">
                <ul className="space-y-1 text-[11px] leading-snug">
                  <li>
                    <span className="font-bold text-webank-blue">IMF：</span>
                    10 月 13 日下修 4.6%→4.5%，理由是 Q2 表现不及预期，地产拖累下消费与投资放缓
                  </li>
                  <li>
                    <span className="font-bold text-webank-blue">花旗：</span>
                    维持 4.6%，增量政策及 9 月数据显示内需略优于预期
                  </li>
                  <li>
                    <span className="font-bold text-webank-blue">高盛：</span>
                    4.6%，Q3 好于预期，9 月经济改善
                  </li>
                  <li>
                    <span className="font-bold text-webank-blue">国内机构：</span>
                    <ul className="list-disc pl-4 space-y-0.5 text-[10.5px] mt-0.5">
                      <li>
                        <span className="font-semibold">一财一致预期：</span>
                        4.6%（10 月最新）——第一财经首席经济学家调研显示，受访首席经济学家对 2026 年全年 GDP 增速的预测均值为 4.6%
                      </li>
                      <li>
                        <span className="font-semibold">财信研究院：</span>
                        4.6%，延续前期预测，出口高韧性，投资降幅收窄，消费触底回升（双 11），财政提速
                      </li>
                      <li>
                        <span className="font-semibold">券商：</span>
                        未更新前期预测，仅招商证券定性描述“10 月下旬出口再提速、消费改善、基建回暖，增长目标完成基本无虞”
                      </li>
                    </ul>
                  </li>
                </ul>
              </BaseCard>
            </div>

            <ChartContainer delay="600ms" className="min-h-0 pb-2" ariaLabel="国内外机构对中国2026年GDP增速预测与政府目标区间图">
              <GdpForecastRangeChart />
            </ChartContainer>
        </div>
      }
    />
  );
};
