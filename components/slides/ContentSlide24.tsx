import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { BaseBarChart, BarConfig } from '../base/BaseBarChart';
import { fiscalRevenueTrendData, fiscalCategoryGrowthData } from '@/data/fiscalRevenue';

export const ContentSlide24: React.FC = () => {
  const lines: LineConfig[] = [
    { dataKey: 'taxRevenue', name: '税收收入', strokeWidth: 2, labelDY: 16 },
    { dataKey: 'nonTaxRevenue', name: '非税收入', strokeWidth: 2, labelDY: -8 },
    { dataKey: 'total', name: '一般公共预算收入', strokeWidth: 2.5, labelDY: 4 },
  ];

  const bars: BarConfig[] = [
    { dataKey: 'growth', name: '同比增速', color: '#005c8f' },
  ];

  return (
    <BaseContentSlide
      title={<>上半年一般公共预算收入同比增长4.7%，高于年初预算目标，收入进度略快于近年同期均值</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="收入总量超出预期" delay="0ms" variant="accent">
            <p>
              上半年全国一般公共预算收入同比增长<span className="text-red-500 font-semibold">4.7%</span>，高于年初<span className="text-red-500 font-semibold">2.2%</span>的预算目标，收入进度达<span className="text-red-500 font-semibold">54.85%</span>，略快于近五年同期均值。
            </p>
          </BaseCard>
          <BaseCard title="结构改善，“名义增长”拉动显著" delay="120ms">
            <p>
              税收收入累计增长<span className="text-red-500 font-semibold">5.3%</span>，对收入增长贡献显著。国内增值税受PPI回升与工业生产稳健支撑，累计同比增长<span className="text-red-500 font-semibold">6%</span>；非税收入同比增长<span className="text-red-500 font-semibold">2.3%</span>。受资本市场活跃带动，上半年证券交易印花税同比大增<span className="text-red-500 font-semibold">97.3%</span>，延续了Q1趋势。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-6">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={fiscalRevenueTrendData}
              title="1—6月一般公共预算收入累计同比，区分税收收入、非税收收入同比增速"
              subtitle="数据来源：财政部 | 单位：%"
              lines={lines}
              yAxisDomain={[-15, 15]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['一般公共预算收入', '税收收入', '非税收入']}
              xAxisTickCount={8}
            />
          </ChartContainer>

          <ChartContainer delay="600ms">
            <BaseBarChart
              data={fiscalCategoryGrowthData}
              title="各类税收收入累计同比"
              subtitle="数据来源：财政部 | 单位：%"
              bars={bars}
              xAxisKey="category"
              yAxisDomain={[-5, 50]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              showLabels={true}
              barSize={28}
              xAxisAngle={-45}
              xAxisHeight={60}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
