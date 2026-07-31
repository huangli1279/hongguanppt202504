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

export const ContentSlide05: React.FC = () => {
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
              2026年二季度GDP <span className="font-bold">36.15万亿</span>，同比增长 <span className="font-bold text-red-600">4.3%</span>，GDP增速较一季度 <span className="font-bold">5%</span> 放缓。
              上半年GDP增速达 <span className="font-bold text-red-600">4.7%</span>，在全年"4.5%-5.0%"增长目标的区域。
            </p>
          </BaseCard>

          <BaseCard title="平减指数回正" delay="120ms">
            <p>
              二季度 GDP 名义增速 <span className="text-red-600 font-semibold">5.89%</span>、实际增速 <span className="font-bold">4.3%</span>，平减指数自23年2季度以来首次回正。
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
                yAxisDomain={[-2, 6]}
                showYAxis
                showReferenceLine
                referenceLineY={0}
                showLegend={false}
                xAxisTicks={deflatorXAxisTicks}
                highlightPeriods={['2026-06']}
                categoryGroups={[
                  {
                    label: '第一次涨价',
                    x1: '2016-03',
                    x2: '2018-06',
                    stroke: '#94a3b8',
                    fill: '#94a3b8',
                    fillOpacity: 0.12,
                  },
                  {
                    label: '第二次涨价',
                    x1: '2020-06',
                    x2: '2022-06',
                    stroke: '#C09A4A',
                    fill: '#C09A4A',
                    fillOpacity: 0.12,
                  },
                  {
                    label: '',
                    x1: '2026-03',
                    x2: '2026-09',
                    stroke: '#ef4444',
                    fill: '#ef4444',
                    fillOpacity: 0.08,
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

            <div className="flex flex-col gap-1.5 flex-shrink-0">
              <div className="rounded-card border-l-4 border-[#94a3b8] bg-[#f1f5f9] px-2.5 py-1.5">
                <h4 className="font-bold text-webank-blue text-xs mb-0.5">第一次涨价（2016–2018）</h4>
                <p className="text-[11px] text-webank-text leading-snug">
                  国内供给侧去产能（钢铁、煤炭等行业产能收缩）+ 棚改货币化拉动房地产需求，两者共同推升PPI。
                </p>
              </div>
              <div className="rounded-card border-l-4 border-[#C09A4A] bg-[#f8f3e8] px-2.5 py-1.5">
                <h4 className="font-bold text-webank-blue text-xs mb-0.5">第二次涨价（2020–2022）</h4>
                <p className="text-[11px] text-webank-text leading-snug">
                  疫情后全球大宗商品涨价（原油、铁矿石、铜等输入型通胀），叠加海外QE流动性溢出，属于外部输入驱动。
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BaseContentSlide>
  );
};
