import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseBarChart } from '../base/BaseBarChart';
import { industryColors } from '@/utils/chartColors';
import {
  industryGdpValueRecentData as industryGdpValueData,
  industryGrowthByQuarterRecentData as industryGrowthData,
  industryContributionRecentData as industryChartData,
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
          产业结构：三产贡献率
          <span className="text-webank-accent">66.5%维持高位，高端制造及现代服务保持高增</span>
        </>
      }
      cardColumns={2}
      chartColumns={1}
      cards={
        <>
          <BaseCard title="二产增速回升，三产维持稳定" delay="0ms">
            <p>
              三季度一、二、三产业增加值分别增长
              <span className="font-bold text-red-500">3.6%</span>、
              <span className="font-bold text-red-500">3.4%</span>、
              <span className="font-bold text-red-500">5.2%</span>
              ，第二产业同比增长
              <span className="font-bold text-red-500">3.4%</span>
              ，较二季度回升
              <span className="font-bold text-red-500">0.4个百分点</span>
              ，为季度GDP增速回升的主要拉动，主因制造业增速回升。第三产业维持稳定增速，对GDP当季同比增长贡献率达
              <span className="font-bold text-red-500">66.5%</span>
              ，贡献率较去年同期增长
              <span className="font-bold text-red-500">4.7个百分点</span>
              。
            </p>
          </BaseCard>

          <BaseCard title="行业分化" delay="120ms">
            <p>
              信息传输软件和信息技术服务业（
              <span className="font-bold text-red-500">+9.8%</span>
              ）、租赁商务服务业（
              <span className="font-bold text-red-500">+12.9%</span>
              ）维持高增，两者增加值合计占GDP比重
              <span className="font-bold text-red-500">10.1%</span>
              、同比提高
              <span className="font-bold text-red-500">0.5个百分点</span>
              ，AI算力需求和商务活动是两大增长引擎；批发零售、交运仓储、住宿餐饮三季度分别增长
              <span className="font-bold text-red-500">5.6%</span>、
              <span className="font-bold text-red-500">5.9%</span>、
              <span className="font-bold text-red-500">6.3%</span>
              ，合计再拉动
              <span className="font-bold text-red-500">1.0个百分点</span>
              ，较二季度增幅明显提升，与外需及出行需求增长有关；建筑、房地产仍处于负增长；
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
                subtitle="数据来源: 国家统计局｜单位: %"
                xAxisKey="industry"
                bars={[
                  { dataKey: '2025-09', name: '25-09', color: '#cbd5e1' },
                  { dataKey: '2025-12', name: '25-12', color: '#94a3b8' },
                  { dataKey: '2026-03', name: '26-03', color: '#64748b' },
                  { dataKey: '2026-06', name: '26-06', color: '#475569' },
                  { dataKey: '2026-09', name: '26-09', color: '#334155' },
                ]}
                legendOrder={['25-09', '25-12', '26-03', '26-06', '26-09']}
                yAxisDomain={[0, 7]}
                barSize={8}
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
                xAxisKey="period"
                title="三大产业对GDP增长贡献率"
                subtitle="数据来源: 国家统计局｜单位: %"
                bars={stackedIndustryBars}
                legendOrder={industryLegendOrder}
                yAxisDomain={[0, 100]}
                barSize={22}
                showYAxis
                showLabels
                labelPosition="center"
                labelFormatter={(v: any) => Number(v).toFixed(1)}
                unit="%"
                yAxisTickFormatter={(v) => `${Math.round(v)}`}
                xAxisInterval={0}
              />
            </ChartContainer>
          </div>
          <div className="flex-1 min-w-0">
            <ChartContainer delay="720ms">
              <BaseBarChart
                data={industryChartData}
                title="不同行业GDP增速对比"
                subtitle="数据来源: 国家统计局｜单位: %"
                xAxisKey="industry"
                bars={[
                  { dataKey: '2025-09', name: '25-09', color: '#cbd5e1' },
                  { dataKey: '2025-12', name: '25-12', color: '#94a3b8' },
                  { dataKey: '2026-03', name: '26-03', color: '#64748b' },
                  { dataKey: '2026-06', name: '26-06', color: '#475569' },
                  { dataKey: '2026-09', name: '26-09', color: '#334155' },
                ]}
                legendOrder={['25-09', '25-12', '26-03', '26-06', '26-09']}
                yAxisDomain={[-5, 14]}
                barSize={8}
                showYAxis
                yAxisTickFormatter={(v) => `${v}%`}
                showLabels
                labelFilter={({ value, dataKey }) =>
                  dataKey === '2026-09' && (Number(value) === 12.9 || Number(value) === 9.8)
                }
                labelFormatter={(v: any) => `${Number(v).toFixed(1)}%`}
                labelPositiveOffset={10}
                unit="%"
                showReferenceLine
                referenceLineY={0}
                xAxisAngle={-35}
                xAxisHeight={82}
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
