import React from 'react';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { chartColors, industryColors } from '@/utils/chartColors';
import {
  gdpGrowthRecentData as gdpGrowthData,
  deflatorRecentData as deflatorData,
  gdpDeflatorYoyLongData,
} from '../../data';

const deflatorXAxisTicks = [
  '2015-03',
  '2017-03',
  '2019-03',
  '2021-03',
  '2023-03',
  '2025-03',
  '2026-06',
];

/** 右侧留白，便于红色标注框向右拉宽，避免贴边显得突兀 */
const deflatorLongChartData = [
  ...gdpDeflatorYoyLongData,
  { period: '2026-09', value: null },
];

export const ContentSlide04: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          二季度GDP实际增速回落至4.3%，上半年GDP增速4.7%，
          <span className="text-webank-accent">平减指数回正</span>
        </>
      }
    >
      <div className="flex flex-col h-full min-h-0 gap-3">
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-shrink-0">
          <BaseCard title="GDP增速放缓" delay="0ms" variant="accent">
            <p>
              2026年二季度GDP <span>36.15万亿</span>，同比增长 <span className="font-bold text-red-600">4.3%</span>，GDP增速较一季度 <span className="font-bold">5%</span> 放缓。
              上半年GDP增速达 <span className="font-bold text-red-600">4.7%</span>，在全年"4.5%-5.0%"增长目标的区域。
            </p>
          </BaseCard>

          <BaseCard title="平减指数回正" delay="120ms">
            <p>
            二季度 GDP 名义增速 <span className="text-red-600 font-semibold">5.89%</span>、实际增速 <span className="font-bold text-red-600">4.3%</span>，平减指数 <span>12</span> 个季度以来首次回正。
            总量与第二产业平减指数同步由负转正，核心由 AI 产业链景气扩张、能源价格上行拉动。
            </p>
          </BaseCard>
        </section>

        <section className="flex-1 min-h-0 grid grid-cols-3 gap-3 sm:gap-4">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={gdpGrowthData}
              title="GDP不变价与现价当季同比增速"
              subtitle="数据来源：国家统计局 | 单位：%"
              yAxisDomain={[0, 8]}
              showYAxis
              xAxisTickCount={gdpGrowthData.length}
              legendOrder={['GDP不变价', 'GDP现价']}
              lines={[
                { dataKey: 'real', name: 'GDP不变价', strokeWidth: 2, labelPosition: 'top', labelDY: -8 },
                { dataKey: 'nominal', name: 'GDP现价', strokeWidth: 2, labelPosition: 'bottom', labelDY: 14 },
              ]}
            />
          </ChartContainer>

          <ChartContainer delay="720ms">
            <BaseLineChart
              data={deflatorData}
              title="GDP平减指数分项贡献拆解"
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

          <div className="min-h-0 flex flex-col gap-2">
            <ChartContainer delay="840ms" className="flex-1 min-h-0">
              <BaseLineChart
                data={deflatorLongChartData}
                title="GDP平减指数当季同比"
                subtitle="数据来源：国家统计局 | 单位：%"
                yAxisDomain={[-2, 7]}
                showYAxis
                showReferenceLine
                referenceLineY={0}
                showLegend={false}
                xAxisTicks={deflatorXAxisTicks}
                highlightPeriods={['2026-06']}
                categoryGroups={[
                  {
                    label: '第一次回正',
                    x1: '2016-03',
                    x2: '2018-06',
                    stroke: '#94a3b8',
                    fill: '#94a3b8',
                    fillOpacity: 0.12,
                  },
                  {
                    label: '第二次回正',
                    x1: '2020-06',
                    x2: '2022-06',
                    stroke: '#C09A4A',
                    fill: '#C09A4A',
                    fillOpacity: 0.12,
                    labelPosition: 'insideTopLeft',
                    labelDy: 12,
                  },
                  {
                    label: '本次回正',
                    x1: '2025-12',
                    x2: '2026-09',
                    stroke: '#ef4444',
                    fill: '#ef4444',
                    fillOpacity: 0.1,
                  },
                ]}
                lines={[
                  {
                    dataKey: 'value',
                    name: 'GDP平减指数',
                    color: chartColors.primary,
                    strokeWidth: 2.5,
                    labelPosition: 'top',
                    labelDY: -8,
                  },
                ]}
              />
            </ChartContainer>

            <BaseCard
              title="三轮平减指数回正差异"
              variant="accent"
              delay="960ms"
              className="!p-2.5 !gap-1 flex-shrink-0 min-w-0"
            >
              <div className="flex flex-col gap-1.5">
                <p className="text-[11px] leading-relaxed font-bold">
                  <span className="text-webank-blue">共性：</span>均为工业品驱动、消费端涨价有限，无全面通胀。
                </p>
                <ul className="list-disc pl-4 space-y-0.5 text-[10.5px] leading-snug marker:text-webank-accent">
                  <li>
                    <span className="font-bold text-webank-accent whitespace-nowrap mr-1">2016‑17：</span>
                    <span className="text-webank-text"><strong>国内供给收缩 + 地产投资上行</strong>，供给压缩叠加地产内生需求，国内周期主导。</span>
                  </li>
                  <li>
                    <span className="font-bold text-webank-accent whitespace-nowrap mr-1">2021：</span>
                    <span className="text-webank-text"><strong>海外输入通胀为主，全球流动性宽松 + 海外大宗商品涨价</strong>，国内限产放大波动，地产已走弱。</span>
                  </li>
                  <li>
                    <span className="font-bold text-red-600 whitespace-nowrap mr-1">2026Q2：</span>
                    <span className="text-webank-text"><strong>能源 + AI 高端制造拉动</strong>，地产链缺位，局部产业景气，但整体内需修复温和，缺少传统地产引擎支撑。</span>
                  </li>
                </ul>
              </div>
            </BaseCard>
          </div>
        </section>
      </div>
    </BaseContentSlide>
  );
};
