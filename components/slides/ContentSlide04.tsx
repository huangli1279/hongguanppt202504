import React from 'react';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { chartColors, industryColors } from '@/utils/chartColors';
import {
  gdpGrowthRecentData as gdpGrowthData,
  gdpCumulativeYoyData as gdpCumulativeData,
  deflatorRecentData as deflatorData,
} from '../../data';

export const ContentSlide04: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          三季度GDP实际增速回升至4.5%，前三季度累计增长4.6%，
          <span className="text-webank-accent">平减指数连续两季回正</span>
        </>
      }
    >
      <div className="flex flex-col h-full min-h-0 gap-3">
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-shrink-0">
          <BaseCard title="GDP增速回升" delay="0ms" variant="accent">
            <p>
              在中东冲突推高油价、国际机构普遍下调主要经济体三季度增速的背景下，2026年三季度GDP <span>37.54万亿</span>，同比增长 <span className="font-bold text-red-600">4.5%</span>，较二季度 <span className="font-bold">4.3%</span> 回升
，主要受出口高增及工业增加值增长带动。
              前三季度GDP增速达 <span className="font-bold text-red-600">4.6%</span>，处于全年"4.5%-5.0%"目标区间。
            </p>
          </BaseCard>

          <BaseCard title="平减指数回正" delay="120ms">
            <p>
              三季度 GDP 名义增速 <span className="text-red-600 font-semibold">6%</span>、实际增速 <span className="font-bold text-red-600">4.5%</span>，平减指数 <span className="font-bold text-red-600">1.44%</span> 连续两个季度维持回正。
              核心由 AI 产业链景气扩张、能源价格上行拉动，延续二季度行业集中、局部产业景气的态势。
              本轮为2015年以来第三轮回正，与前两轮不同，地产链全程缺位。
            </p>
          </BaseCard>
        </section>

        <section className="flex-1 min-h-0 grid grid-cols-3 gap-3 sm:gap-4">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={gdpGrowthData}
              title="GDP当季同比：不变价与现价"
              subtitle="数据来源：国家统计局 | 单位：%"
              yAxisDomain={[0, 8]}
              showYAxis
              xAxisTickCount={gdpGrowthData.length}
              legendOrder={['GDP不变价', 'GDP现价']}
              highlightPeriods={['2026-06', '2026-09']}
              categoryGroups={[
                {
                  label: '回升↑',
                  x1: '2026-06',
                  x2: '2026-09',
                  stroke: 'transparent',
                  fill: 'transparent',
                  fillOpacity: 0,
                  labelFill: '#ef4444',
                  labelPosition: 'insideTop',
                  labelDy: 16,
                },
              ]}
              lines={[
                {
                  dataKey: 'real',
                  name: 'GDP不变价',
                  strokeWidth: 2.5,
                  labelPosition: 'top',
                  labelDY: -8,
                  pointOffsets: { '2026-06': 18 },
                },
                { dataKey: 'nominal', name: 'GDP现价', strokeWidth: 2, labelPosition: 'bottom', labelDY: 14, hiddenLabelPeriods: ['2026-06'] },
              ]}
            />
          </ChartContainer>

          <ChartContainer delay="720ms">
            <BaseLineChart
              data={gdpCumulativeData}
              title="GDP累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              yAxisDomain={[4, 6]}
              showYAxis
              xAxisTickCount={gdpCumulativeData.length}
              legendOrder={['GDP累计同比']}
              highlightPeriods={['2026-03', '2026-06', '2026-09']}
              lines={[
                {
                  dataKey: 'value',
                  name: 'GDP累计同比',
                  color: chartColors.primary,
                  strokeWidth: 2.5,
                  labelPosition: 'top',
                  labelDY: -8,
                  pointOffsets: { '2026-03': -14, '2026-06': 18 },
                },
              ]}
            />
          </ChartContainer>

          <ChartContainer delay="840ms">
            <BaseLineChart
              data={deflatorData}
              title="GDP平减指数：整体与三大产业"
              subtitle="数据来源：国家统计局 | 单位：%"
              yAxisDomain={[-5, 4]}
              showYAxis
              xAxisTickCount={deflatorData.length}
              showReferenceLine
              referenceLineY={0}
              legendOrder={['整体', '第一产业', '第二产业', '第三产业']}
              lines={[
                { dataKey: 'overall', name: '整体', color: chartColors.senary, strokeWidth: 3, labelPosition: 'top', labelDY: -8 },
                { dataKey: 'primary', name: '第一产业', color: industryColors.primary, strokeWidth: 2, labelPosition: 'bottom', labelDY: 12 },
                { dataKey: 'secondary', name: '第二产业', color: industryColors.secondary, strokeWidth: 2, labelPosition: 'top', labelDY: -8 },
                { dataKey: 'tertiary', name: '第三产业', color: industryColors.tertiary, strokeWidth: 2, labelPosition: 'top', labelDY: -8 },
              ]}
            />
          </ChartContainer>
        </section>
      </div>
    </BaseContentSlide>
  );
};
