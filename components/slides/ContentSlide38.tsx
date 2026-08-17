import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { incomeExpenditureData, incomeSentimentData } from '@/data/consumerConfidence';
import { seriesColors } from '@/utils/chartColors';

export const ContentSlide38: React.FC = () => {
  const incomeLines: LineConfig[] = [
    { dataKey: 'incomeReal', name: '可支配收入实际', color: seriesColors[0], strokeWidth: 2.5, labelDY: -14 },
    { dataKey: 'consumptionReal', name: '消费支出实际', color: seriesColors[1], strokeWidth: 2.5, labelDY: 16 },
  ];

  const sentimentLines: LineConfig[] = [
    { dataKey: 'incomeFeeling', name: '收入感受指数', color: seriesColors[0], strokeWidth: 2.5, labelDY: -14 },
    { dataKey: 'incomeExpectation', name: '收入预期指数', color: seriesColors[1], strokeWidth: 2.5, labelDY: 16 },
  ];

  return (
    <BaseContentSlide
      title={<>收入变化：满意度及预期长期走低，边际消费倾向下降</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="收入满意度和预期差" delay="0ms" variant="accent">
            <p>
              根据人行调查，居民收入感受和信心指数自23年以来低于50，表明居民现在收入的满意度和未来收入预期处于变差阶段。
            </p>
          </BaseCard>
          <BaseCard title="收入增速放缓，剪刀差扩大" delay="120ms">
            <p>
              上半年居民人均可支配收入 2.3万元，实际增长 <span className="font-semibold text-black">4.2%</span>，较2025年全年 5.0% 明显放缓；人均消费支出 1.48万元，实际仅增 <span className="font-semibold text-black">2.7%</span>，收入—支出增速剪刀差扩大至 1.5个百分点。2025年人均边际消费倾向降至 0.61，同比下滑 0.08，新增收入转化为消费的比例偏低。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-6">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={incomeSentimentData}
              title="居民收入感受与预期指数"
              subtitle="数据来源：中国人民银行储户问卷调查 | 单位：%"
              lines={sentimentLines}
              yAxisDomain={[42, 52]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={50}
              legendOrder={['收入感受指数', '收入预期指数']}
              unit="%"
              xAxisTicks={['22Q4', '23Q2', '23Q4', '24Q2', '24Q4', '25Q2', '25Q4']}
            />
          </ChartContainer>

          <ChartContainer delay="600ms">
            <BaseLineChart
              data={incomeExpenditureData}
              title="居民人均收入与消费支出累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={incomeLines}
              yAxisDomain={[-1, 8]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['可支配收入实际', '消费支出实际']}
              unit="%"
            />
          </ChartContainer>
        </div>

        {/* 备注 */}
        <div className="mt-4 text-xs text-gray-500 border-t border-gray-200 pt-3 text-right">
          ① 边际消费倾向 = 新增收入当中拿来消费的比例。数值下滑，代表多赚一块钱，更愿意存起来，而不是消费。
        </div>
      </div>
    </BaseContentSlide>
  );
};
