import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { BaseCard } from '../base/BaseCard';
import { chartColors } from '@/utils/chartColors';
import { unemploymentRateData, flexibleEmploymentData } from '@/data/employment';

export const ContentSlide34: React.FC = () => {
  const unemploymentLines: LineConfig[] = [
    { dataKey: 'overall', name: '全国城镇调查失业率', strokeWidth: 2.5 },
    { dataKey: 'age16_24', name: '16-24岁(不含在校生)', strokeWidth: 2 },
    { dataKey: 'age25_29', name: '25-29岁(不含在校生)', strokeWidth: 2 },
    { dataKey: 'age30_59', name: '30-59岁(不含在校生)', strokeWidth: 2 },
  ];

  const flexibleEmploymentLines: LineConfig[] = [
    {
      dataKey: 'actual',
      name: '灵活就业人员',
      color: chartColors.primary,
      strokeWidth: 2.5,
    },
    {
      dataKey: 'forecast',
      name: '预测(E)',
      color: chartColors.primary,
      strokeWidth: 2.5,
      strokeDasharray: '6 4',
    },
  ];

  return (
    <BaseContentSlide
      title={<>就业变化：失业率维持在5%-5.2%，灵活就业人数24年以来快速上升</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="就业" delay="0ms" variant="accent">
            <p>
              二季度失业率维持在<span className="text-red-500 font-semibold">5.0%-5.2%</span>，全年龄段失业率均较1季度呈现季节性回落，2026年毕业生预计<span className="text-red-500 font-semibold">1270万</span>，创历史新高，下半年就业情况仍有待观察。灵活就业人数从21年的<span className="text-red-500 font-semibold">2亿</span>拓展到25年的约<span className="text-red-500 font-semibold">2.8亿</span>，26年预计将到<span className="text-red-500 font-semibold">3.2亿</span>人，增长态势迅猛。
            </p>
          </BaseCard>
          <BaseCard title="城市偏好变化" delay="120ms">
            <p>
              智联招聘发布的《2026中国城市人才吸引力报告》：一线城市人才净流入率从2019年的<span className="text-red-500 font-semibold">5.8%</span>降至2025年的<span className="text-red-500 font-semibold">2.1%</span>，新一线城市从<span className="text-red-500 font-semibold">1.9%</span>升至<span className="text-red-500 font-semibold">3.7%</span>。青年人才向新一线集中的趋势仍在加速。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={unemploymentRateData}
              title="城镇调查失业率（分年龄段）"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={unemploymentLines}
              yAxisDomain={[0, 20]}
              showYAxis={true}
              xAxisTickCount={8}
              legendOrder={[
                '全国城镇调查失业率',
                '16-24岁(不含在校生)',
                '25-29岁(不含在校生)',
                '30-59岁(不含在校生)',
              ]}
              unit="%"
            />
          </ChartContainer>
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={flexibleEmploymentData}
              title="中国灵活就业人员规模变化"
              subtitle="数据来源：公开资料整理 | 单位：亿人；虚线为预测值"
              lines={flexibleEmploymentLines}
              yAxisDomain={[1, 3.5]}
              showYAxis={true}
              yAxisTickFormatter={(val) => `${val}`}
              xAxisTicks={[
                '2015年',
                '2017',
                '2019',
                '2020',
                '2021',
                '2022',
                '2023',
                '2024',
                '2025',
                '2026(E)',
              ]}
              highlightPeriods={[
                '2015年',
                '2017',
                '2019',
                '2020',
                '2021',
                '2022',
                '2023',
                '2024',
              ]}
              legendOrder={['灵活就业人员', '预测(E)']}
              unit="亿人"
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
