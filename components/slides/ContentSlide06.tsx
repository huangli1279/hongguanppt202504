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
          <BaseCard title="机构预测共识" delay="0ms" variant="accent" className="!gap-1.5 !p-3 w-full">
            <ul className="list-disc pl-5 space-y-1 text-[13px] leading-snug">
              <li>
                IMF：
                <span className="font-bold text-red-500">4.5%</span>
              </li>
              <li>
                OECD：
                <span className="font-bold text-red-500">4.5%</span>
              </li>
              <li>
                花旗：
                <span className="font-bold text-red-500">4.6%</span>
              </li>
              <li>
                一财一致预期：
                <span className="font-bold text-red-500">4.6%</span>
                （10 月最新）——第一财经首席经济学家调研（2026 年 10 月）显示，受访首席经济学家对 2026 年全年 GDP 增速的预测均值为
                <span className="font-bold text-red-500">4.6%</span>
                。
              </li>
            </ul>
            <div className="mt-2 text-[13px] leading-snug">
              <span className="font-bold text-webank-blue">代表机构预测：</span>
              券商的"最新观点"已从点位转向定性：10 月下旬招商（张静静）的表述是"出口再提速、消费改善、基建回暖，增长目标完成基本无虞"。
            </div>
          </BaseCard>

          <ChartContainer delay="600ms" className="flex-1 min-h-0" ariaLabel="国内外机构对中国2026年GDP增速预测与政府目标区间图">
            <GdpForecastRangeChart />
          </ChartContainer>
        </div>
      }
    />
  );
};
