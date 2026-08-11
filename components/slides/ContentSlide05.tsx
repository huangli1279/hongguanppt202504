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

export const ContentSlide05: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          第二产业内部K型分化加剧，
          <span>第三产业消费与地产链持续拖累</span>
        </>
      }
      cardColumns={2}
      chartColumns={1}
      cards={
        <>
          <BaseCard title="二产增速回落，三产增速稳定" delay="0ms">
            <p>
              第二产业同比增长<span className="font-bold">3%</span>，较一季度回落
              <span className="font-bold">1.9个百分点</span>
              ，为季度GDP增速放缓主要拖累，主要受制造业、建筑业增速回落影响。第三产业维持稳定增速，对GDP当季同比增长贡献率达
              <span className="font-bold text-red-500">69.4%</span>
              ，较去年同期增长<span className="font-bold text-red-500">8.2个百分点</span>。
            </p>
          </BaseCard>

          <BaseCard title="K型分化加剧" delay="120ms">
            <p>
              高技术制造业（<span className="font-bold text-red-500">13.3%</span>
              ）、信息传输、软件和信息技术服务业（
              <span className="font-bold text-red-500">10.7%</span>
              ）和租赁商务服务（<span className="font-bold text-red-500">11.9%</span>
              ）仍然保持高增，建筑、房地产依然为主要拖累。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <div className="flex gap-4 sm:gap-6 h-full min-h-0">
          <div className="w-[26%] min-w-0 flex-shrink-0">
            <ChartContainer delay="600ms">
              <BaseBarChart
                data={industryGdpValueData}
                title="三大产业GDP增速对比"
                subtitle="数据来源: 国家统计局；单位: %"
                xAxisKey="industry"
                bars={[
                  { dataKey: '2025-06', name: '25-06', color: chartColors.quinary },
                  { dataKey: '2025-09', name: '25-09', color: chartColors.quaternary },
                  { dataKey: '2025-12', name: '25-12', color: chartColors.tertiary },
                  { dataKey: '2026-03', name: '26-03', color: chartColors.secondary },
                  { dataKey: '2026-06', name: '26-06', color: chartColors.primary },
                ]}
                legendOrder={['25-06', '25-09', '25-12', '26-03', '26-06']}
                yAxisDomain={[0, 7]}
                barSize={12}
                showYAxis
                showLabels
                labelFormatter={(v: any) => Number(v).toFixed(1)}
                unit="%"
                yAxisTickFormatter={(v) => `${v}`}
                xAxisInterval={0}
              />
            </ChartContainer>
          </div>
          <div className="w-[22%] min-w-0 flex-shrink-0">
            <ChartContainer delay="600ms">
              <BaseBarChart
                data={industryGrowthData.map((d) => ({
                  ...d,
                  period: d.period.slice(2),
                }))}
                title="三大产业对GDP增长贡献率"
                subtitle="数据来源: 国家统计局；单位: %"
                bars={stackedIndustryBars}
                legendOrder={industryLegendOrder}
                yAxisDomain={[0, 100]}
                barSize={22}
                showYAxis
                showLabels
                labelPosition="center"
                labelFormatter={(v: any) => Number(v).toFixed(1)}
                unit="%"
                yAxisTickFormatter={(v) => `${v}`}
                xAxisInterval={0}
              />
            </ChartContainer>
          </div>
          <div className="flex-1 min-w-0">
            <ChartContainer delay="720ms">
              <BaseBarChart
                data={industryContributionData}
                title="不同行业GDP增速对比"
                subtitle="数据来源: 国家统计局；单位: %"
                xAxisKey="industry"
                bars={[
                  { dataKey: '2025-06', name: '25-06', color: chartColors.quaternary },
                  { dataKey: '2025-12', name: '25-12', color: chartColors.tertiary },
                  { dataKey: '2026-03', name: '26-03', color: chartColors.secondary },
                  { dataKey: '2026-06', name: '26-06', color: chartColors.primary },
                ]}
                legendOrder={['25-06', '25-12', '26-03', '26-06']}
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
                xAxisTickFontSize={8}
                categoryGroups={[
                  { label: '第二产业', x1: '工业', x2: '建筑业' },
                  { label: '第三产业', x1: '批发零售', x2: '其他行业' },
                ]}
              />
            </ChartContainer>
          </div>
        </div>
      }
    />
  );
};
