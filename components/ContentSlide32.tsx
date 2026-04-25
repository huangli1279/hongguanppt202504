import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseLineChart, LineConfig } from './BaseLineChart';
import { BaseBarChart, BarConfig } from './BaseBarChart';
import { fiscalRevenueTrendData, fiscalCategoryGrowthData } from '@/data/fiscalRevenue';

export const ContentSlide32: React.FC = () => {
  const lines: LineConfig[] = [
    { dataKey: 'taxRevenue', name: '税收收入', strokeWidth: 2, labelDY: 16 },
    { dataKey: 'nonTaxRevenue', name: '非税收入', strokeWidth: 2, labelDY: -8 },
    { dataKey: 'total', name: '一般公共预算收入', strokeWidth: 2.5, labelDY: 4 },
  ];

  const bars: BarConfig[] = [
    { dataKey: 'growth', name: '同比增速' },
  ];

  return (
    <BaseContentSlide
      title={<>一季度一般公共预算收入增2.4%，高于过去3年同期水平，税收及非税收入均增长</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="税收/非税收入均增" delay="200ms" variant="accent">
            <p>
              一季度，全国一般公共预算收入 6.16 万亿元，同比增长（<span className="text-red-500 font-semibold">+2.4%</span>），高于过去3年同期水平。主要宏观指标增速回升，价格出现积极变化，货物进出口快速增长，为财政收入增长提供了有力支撑。
            </p>
          </BaseCard>
          <BaseCard title="多数税种保持增长" delay="400ms">
            <p>
              全国税收收入 4.85 万亿元，同比增长（<span className="text-red-500 font-semibold">+2.2%</span>），增幅比前2个月提高2.1个百分点；国内增值税增长 <span className="text-red-500 font-semibold">+4.9%</span>，进口环节增值税、消费税增长 <span className="text-red-500 font-semibold">+12.9%</span>，证券交易印花税大幅增长 <span className="text-red-500 font-semibold">+78.1%</span>；非税收入 1.31 万亿元，同比增长 <span className="text-red-500 font-semibold">+2.9%</span>。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-6">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={fiscalRevenueTrendData}
              title="一般公共预算收入累计同比"
              subtitle="数据来源：财政部 | 单位：%"
              lines={lines}
              yAxisDomain={[-15, 30]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['一般公共预算收入', '税收收入', '非税收入']}
              xAxisTickCount={7}
            />
          </ChartContainer>

          <ChartContainer delay="800ms">
            <BaseBarChart
              data={fiscalCategoryGrowthData}
              title="一般公共预算分项目同比增速"
              subtitle="数据来源：财政部 | 单位：%"
              bars={bars}
              xAxisKey="category"
              yAxisDomain={[-10, 40]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              showLabels={true}
              barSize={22}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
