import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseStackedBarChart } from '../base/BaseStackedBarChart';
import { seriesColors } from '@/utils/chartColors';
import { housingConsumptionData } from '@/data/housingConsumption';

export const ContentSlide36: React.FC = () => {
  return (
    <BaseContentSlide title="房价下跌居民消费越低">
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-1 gap-4 mb-4 flex-shrink-0">
          <BaseCard title="房价波动对消费的影响" delay="0ms" variant="accent">
            <p>
              根据调查显示，房价跌幅越大，消费越低。大于一套房的家庭，在出现<span className="text-red-500 font-semibold">15%</span>以上的房价降幅时，消费相比房价提升时减少了<span className="text-red-500 font-semibold">25.9%</span>，这一数据在一套房的家庭中减少了<span className="text-red-500 font-semibold">11.9%</span>，出现波动较大的分项为文娱与外出餐饮支出，证明当房价波动时，人们首先会减少娱乐活动。因此，稳定房价对消费的促进作用是不可或缺的。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 min-h-0">
          <ChartContainer delay="600ms">
            <BaseStackedBarChart
              data={housingConsumptionData}
              title="房价波动与家庭月均消费（按住房套数分组）"
              subtitle="数据来源：调查数据｜单位：元（消费加权平均）"
              bars={[
                { dataKey: 'housingTransport', name: '住房与交通支出', color: seriesColors[1] },
                { dataKey: 'foodLiving', name: '居家食品与生活支出', color: seriesColors[3] },
                { dataKey: 'entertainment', name: '文娱与外出餐饮支出', color: seriesColors[5] },
                { dataKey: 'educationMedical', name: '教育与医疗支出', color: seriesColors[0] },
                { dataKey: 'durables', name: '耐用品支出', color: seriesColors[4] },
              ]}
              xAxisKey="category"
              legendOrder={[
                '住房与交通支出',
                '居家食品与生活支出',
                '文娱与外出餐饮支出',
                '教育与医疗支出',
                '耐用品支出',
              ]}
              yAxisDomain={[0, 6000]}
              showYAxis
              barSize={48}
              showLabels
              showTotalLabel
              totalLabelFormatter={(_total, item) => `${item.total}`}
              unit="元"
              xAxisInterval={1}
              xAxisAngle={-20}
              xAxisHeight={50}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
