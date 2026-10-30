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
            <span className="font-bold text-blue-600">4.5%</span>
            ，完成目标最低值
          </span>
        </span>
      }
      cardColumns={2}
      chartColumns={1}
      children={
        <div className="flex flex-col h-full min-h-0 gap-3">
            <div className="grid grid-cols-2 gap-3">
              <BaseCard title="机构预测" delay="0ms" variant="accent" className="!gap-1.5 !p-3 w-full">
                <div className="text-[13px] leading-snug">
                  <span className="font-bold text-webank-blue">代表机构预测：</span>
                  券商的"最新观点"已从点位转向定性：10 月下旬招商"出口再提速、消费改善、基建回暖，增长目标完成基本无虞"。
                </div>
              </BaseCard>

              <BaseCard title="机构共识" delay="120ms" variant="accent" className="!gap-1.5 !p-3 w-full">
                <ul className="list-disc pl-5 space-y-1 text-[13px] leading-snug">
                  <li>
                    全年增速大概率落在
                    <span className="font-bold text-red-500">4.5%-4.6%</span>
                    区间，处于政府目标（4.5%-5.0%）下限附近
                  </li>
                  <li>
                    关键驱动力：出口+ 高技术制造业支撑总量，8000 亿新型政策性金融工具 + 六张网 + 5500 亿结存限额支撑投资
                  </li>
                  <li>
                    K型分化延续：新经济强、旧经济弱
                  </li>
                </ul>
              </BaseCard>
            </div>

            <ChartContainer delay="600ms" className="flex-1 min-h-0" ariaLabel="国内外机构对中国2026年GDP增速预测与政府目标区间图">
              <GdpForecastRangeChart />
            </ChartContainer>
        </div>
      }
    />
  );
};
