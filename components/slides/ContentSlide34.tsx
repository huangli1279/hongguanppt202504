import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { incomeExpenditureData, incomeSentimentData } from '@/data/consumerConfidence';
import { seriesColors } from '@/utils/chartColors';

export const ContentSlide34: React.FC = () => {
  const incomeLines: LineConfig[] = [
    { dataKey: 'incomeReal', name: '可支配收入实际', color: seriesColors[0], strokeWidth: 2.5, labelDY: -14 },
    { dataKey: 'wageIncome', name: '工资性收入', color: seriesColors[1], strokeWidth: 2, labelDY: 4 },
    { dataKey: 'operatingIncome', name: '经营净收入', color: seriesColors[2], strokeWidth: 2, labelDY: -4 },
    { dataKey: 'propertyIncome', name: '财产净收入', color: seriesColors[3], strokeWidth: 2, labelDY: 16 },
    { dataKey: 'transferIncome', name: '转移净收入', color: seriesColors[4], strokeWidth: 2, labelDY: 28 },
    { dataKey: 'consumptionReal', name: '消费支出实际', color: seriesColors[5], strokeWidth: 2.5, labelDY: 40 },
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
          <BaseCard title="人均收入与支出" delay="0ms" variant="accent">
            <p>
              上半年居民人均可支配收入 <span className="text-red-500 font-semibold">2.3万元</span>，实际增长 <span className="text-red-500 font-semibold">4.2%</span>，其中经营性净收入增长 <span className="text-red-500 font-semibold">6.4%</span>，工资性净收入 <span className="text-red-500 font-semibold">5.3%</span>。人均消费支出为 <span className="text-red-500 font-semibold">1.48万元</span>，实际增长 <span className="text-red-500 font-semibold">2.7%</span>，根据调查2025年人均边际消费倾向为 <span className="text-red-500 font-semibold">0.61</span>，同比下滑 <span className="text-red-500 font-semibold">0.08</span>，新增收入转化为消费的比例较低。
            </p>
          </BaseCard>
          <BaseCard title="收入满意度和预期" delay="120ms">
            <p>
              根据人行调查，居民收入感受和信心指数自23年以来低于50，表明居民现在收入的满意度和未来收入预期处于变差阶段。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-6">
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
              legendOrder={[
                '可支配收入实际',
                '工资性收入',
                '经营净收入',
                '财产净收入',
                '转移净收入',
                '消费支出实际',
              ]}
              unit="%"
            />
          </ChartContainer>

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
        </div>
      </div>
    </BaseContentSlide>
  );
};
