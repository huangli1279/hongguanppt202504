import React from 'react';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseBarChart } from './BaseBarChart';
import { industryColors } from '@/utils/chartColors';

const industryGdpValueData = [
  { period: '2024-09', primary: 2.70, secondary: 12.28, tertiary: 19.17 },
  { period: '2024-12', primary: 3.41, secondary: 13.51, tertiary: 20.43 },
  { period: '2025-03', primary: 1.17, secondary: 11.15, tertiary: 19.52 },
  { period: '2025-06', primary: 1.95, secondary: 12.67, tertiary: 19.52 },
  { period: '2025-09', primary: 2.70, secondary: 12.46, tertiary: 20.26 },
  { period: '2025-12', primary: 3.52, secondary: 13.68, tertiary: 21.59 },
  { period: '2026-03', primary: 1.19, secondary: 11.61, tertiary: 20.61 },
];


const industryGrowthData = [
  { industry: '第一产业', '2025-06': 3.80, '2025-09': 4.00, '2025-12': 4.20, '2026-03': 3.80 },
  { industry: '第二产业', '2025-06': 4.80, '2025-09': 4.20, '2025-12': 3.40, '2026-03': 4.90 },
  { industry: '第三产业', '2025-06': 5.70, '2025-09': 5.40, '2025-12': 5.20, '2026-03': 5.20 },
];

const industryContributionData = [
  { period: '2024-09', primary: 0.29, secondary: 1.57, tertiary: 2.74 },
  { period: '2024-12', primary: 0.39, secondary: 1.81, tertiary: 3.20 },
  { period: '2025-03', primary: 0.14, secondary: 2.06, tertiary: 3.20 },
  { period: '2025-06', primary: 0.24, secondary: 1.78, tertiary: 3.18 },
  { period: '2025-09', primary: 0.34, secondary: 1.50, tertiary: 2.97 },
  { period: '2025-12', primary: 0.41, secondary: 1.24, tertiary: 2.84 },
  { period: '2026-03', primary: 0.13, secondary: 1.71, tertiary: 3.16 },
];

const stackedIndustryBars = [
  { dataKey: 'primary', name: '第一产业', color: industryColors.primary, stackId: 'stack' },
  { dataKey: 'secondary', name: '第二产业', color: industryColors.secondary, stackId: 'stack' },
  { dataKey: 'tertiary', name: '第三产业', color: industryColors.tertiary, stackId: 'stack' },
];

const industryLegendOrder = ['第一产业', '第二产业', '第三产业'];

export const ContentSlide06: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          分产业来看：
          <span className="text-webank-accent">产业拉动呈现极致分化，服务业与新质生产力挑大梁，地产仍在寻底</span>
        </>
      }
      cardColumns={2}
      chartColumns={3}
      cards={
        <>
          <BaseCard title="第三产业发挥压舱石作用" delay="200ms" variant="accent">
            <p>
              一季度第三产业同比增长<span className="font-bold text-webank-accent">5.2%</span>，
              对GDP当季同比拉动<span className="font-bold text-webank-accent">3.16个百分点</span>，
              贡献率达<span className="font-bold">63.2%</span>，走势平稳托底大盘。
            </p>
          </BaseCard>

          <BaseCard title="第二产业强势回升" delay="400ms">
            <p>
              第一、二、三产业分别同比增长
              <span className="font-bold">3.8%</span>、
              <span className="font-bold text-webank-accent">4.9%</span>、
              <span className="font-bold">5.2%</span>。第二产业贡献率达
              <span className="font-bold text-webank-accent">34.1%</span>，是推动一季度经济改善的主要力量。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={industryGdpValueData}
              title="三大产业GDP值"
              subtitle="数据来源: 国家统计局；单位: 万亿"
              bars={stackedIndustryBars}
              legendOrder={industryLegendOrder}
              yAxisDomain={[0, 40]}
              barSize={16}
              showYAxis
              showLabels
              labelPosition="center"
              labelFormatter={(v: any) => Number(v).toFixed(1)}
              unit="万亿"
              yAxisTickFormatter={(v) => `${v}`}
              xAxisInterval={0}
            />
          </ChartContainer>
          <ChartContainer delay="800ms">
            <BaseBarChart
              data={industryGrowthData}
              title="三大产业增加值当季同比增速"
              subtitle="数据来源: 国家统计局；单位: %"
              xAxisKey="industry"
              bars={[
                { dataKey: '2025-06', name: '2025-06', color: industryColors.primary },
                { dataKey: '2025-09', name: '2025-09', color: industryColors.secondary },
                { dataKey: '2025-12', name: '2025-12', color: industryColors.tertiary },
                { dataKey: '2026-03', name: '2026-03', color: '#10b981' },
              ]}
              legendOrder={['2025-06', '2025-09', '2025-12', '2026-03']}
              yAxisDomain={[0, 7]}
              barSize={16}
              showYAxis
              showLabels
              unit="%"
            />
          </ChartContainer>
          <ChartContainer delay="1000ms">
            <BaseBarChart
              data={industryContributionData}
              title="三产业GDP当季同比拉动数据"
              subtitle="数据来源: 国家统计局；单位: 百分点"
              bars={stackedIndustryBars}
              legendOrder={industryLegendOrder}
              yAxisDomain={[0, 6]}
              barSize={16}
              showYAxis
              showLabels
              labelPosition="center"
              labelFormatter={(v: any) => Number(v).toFixed(1)}
              unit="百分点"
              yAxisTickFormatter={(v) => `${v}`}
              xAxisInterval={0}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
