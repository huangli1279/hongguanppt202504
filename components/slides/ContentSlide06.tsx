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
          第二产业受AI与外需支撑表现强劲，
          <span className="text-webank-accent">第三产业内部服务消费与地产链持续拖累</span>
        </>
      }
      cardColumns={2}
      chartColumns={3}
      cards={
        <>
          <BaseCard title="分产业看" delay="0ms">
            <p>
              第二产业同比增长<span className="font-bold">3%</span>，较一季度回落
              <span className="font-bold">1.9个百分点</span>
              ，为季度GDP增速放缓主要拖累，主要受制造业、建筑业增速回落影响。第三产业维持稳定增速，对GDP当季同比增长贡献率达
              <span className="font-bold">69.4%</span>
              ，较去年同期增长<span className="font-bold">8.2个百分点</span>。
            </p>
          </BaseCard>

          <BaseCard title="分化" delay="120ms">
            <p>
              高技术制造业（<span className="font-bold">13.3%</span>
              ）、信息传输、软件和信息技术服务业（
              <span className="font-bold">11.3%</span>
              ）和租赁商务服务（<span className="font-bold">10.9%</span>
              ）仍然保持高增，建筑、房地产依然为主要拖累。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={industryGdpValueData}
              title="三大产业GDP增速对比"
              subtitle="数据来源: 国家统计局；单位: %"
              bars={[
                { dataKey: 'primary', name: '第一产业', color: industryColors.primary },
                { dataKey: 'secondary', name: '第二产业', color: industryColors.secondary },
                { dataKey: 'tertiary', name: '第三产业', color: industryColors.tertiary },
              ]}
              legendOrder={industryLegendOrder}
              yAxisDomain={[0, 7]}
              barSize={16}
              showYAxis
              showLabels
              labelFormatter={(v: any) => Number(v).toFixed(1)}
              unit="%"
              yAxisTickFormatter={(v) => `${v}`}
              xAxisInterval={0}
            />
          </ChartContainer>
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={industryGrowthData}
              title="三大产业对GDP增长拉动"
              subtitle="数据来源: 国家统计局；单位: %"
              bars={stackedIndustryBars}
              legendOrder={industryLegendOrder}
              yAxisDomain={[0, 6]}
              barSize={16}
              showYAxis
              showLabels
              labelPosition="center"
              labelFormatter={(v: any) => Number(v).toFixed(1)}
              unit="%"
              yAxisTickFormatter={(v) => `${v}`}
              xAxisInterval={0}
            />
          </ChartContainer>
          <ChartContainer delay="720ms">
            <BaseBarChart
              data={industryContributionData}
              title="不同行业GDP增速对比"
              subtitle="数据来源: 国家统计局；单位: %"
              xAxisKey="industry"
              bars={[
                { dataKey: '2025-06', name: '2025-06', color: chartColors.quaternary },
                { dataKey: '2025-12', name: '2025-12', color: chartColors.tertiary },
                { dataKey: '2026-03', name: '2026-03', color: chartColors.secondary },
                { dataKey: '2026-06', name: '2026-06', color: chartColors.primary },
              ]}
              legendOrder={['2025-06', '2025-12', '2026-03', '2026-06']}
              barSize={8}
              showYAxis
              yAxisDomain={[-5, 14]}
              showReferenceLine
              referenceLineY={0}
              showLabels={false}
              unit="%"
              xAxisAngle={-35}
              xAxisHeight={70}
              xAxisInterval={0}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
