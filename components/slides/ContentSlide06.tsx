import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseBarChart } from '../base/BaseBarChart';
import { industryColors, chartColors } from '@/utils/chartColors';
import {
  industryGdpValueRecentData as industryGdpValueData,
  industryGrowthByQuarterRecentData as industryGrowthData,
  industryContributionRecentData as industryContributionData,
} from '../../data';

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
          <span className="text-webank-accent">第三产业平稳拖底，第二产业增速边际回升</span>
        </>
      }
      cardColumns={2}
      chartColumns={3}
      cards={
        <>
          <BaseCard title="第三产业发挥压舱石作用" delay="0ms">
            <p>
              一季度第三产业同比增长<span className="font-bold">5.2%</span>，
              对GDP当季同比拉动<span className="font-bold">3.2个百分点</span>，
              贡献率达<span className="font-bold">63.2%</span>，走势平稳托底大盘。
            </p>
          </BaseCard>

          <BaseCard title="第二产业增速边际回升最为显著" delay="120ms">
            <p>
              第一、二、三产业分别同比增长
              <span className="font-bold">3.8%</span>、
              <span className="font-bold">4.9%</span>、
              <span className="font-bold">5.2%</span>。二产增速较去年四季度的<span className="font-bold">3.4%</span>回升<span className="font-bold">1.5个百分点</span>，是本季GDP增速边际改善（25Q4:4.5%→26Q1:5%）的主要拉动来源。
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
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={industryGrowthData}
              title="三大产业增加值当季同比增速"
              subtitle="数据来源: 国家统计局；单位: %"
              xAxisKey="industry"
              bars={[
                { dataKey: '2025-06', name: '2025-06', color: chartColors.quaternary },
                { dataKey: '2025-09', name: '2025-09', color: chartColors.tertiary },
                { dataKey: '2025-12', name: '2025-12', color: chartColors.secondary },
                { dataKey: '2026-03', name: '2026-03', color: chartColors.primary },
              ]}
              legendOrder={['2025-06', '2025-09', '2025-12', '2026-03']}
              yAxisDomain={[0, 7]}
              barSize={16}
              showYAxis
              showLabels
              unit="%"
            />
          </ChartContainer>
          <ChartContainer delay="720ms">
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
