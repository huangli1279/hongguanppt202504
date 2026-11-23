import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseBarChart, BarConfig } from '../base/BaseBarChart';
import { increaseConsumptionReasons } from '@/data/increaseConsumptionReasons';
import { seriesColors } from '../../utils/chartColors';
import { retailTrendData } from '@/data/retail';
import { consumerConfidenceData } from '@/data/consumerConfidence';

// 社零累计同比（现有社零月度数据）
const retailCumulativeTrend = retailTrendData
  .filter((d) => d.period >= '2025-01')
  .map((d) => ({ period: d.period, cumulativeYoy: d.totalRetail }));

// 消费者信心指数（现有景气监测数据）
const confidenceIndexTrend = consumerConfidenceData
  .filter((d) => d.period >= '2025-01')
  .map((d) => ({ period: d.period, confidence: d.confidence }));

const quarterTicks = ['2025-03', '2025-09', '2026-03', '2026-09'];

const ageConsumptionData = [
  { category: '旅游', young: 38, middle: 36, senior: 35 },
  { category: '保健养生', young: 30, middle: 33, senior: 35 },
  { category: '数码产品', young: 30, middle: 27, senior: 25 },
  { category: '教育支出', young: 29, middle: 28, senior: 25 },
  { category: '文化娱乐', young: 24, middle: 23, senior: 22 },
  { category: '家居装修', young: 22, middle: 21, senior: 20 },
  { category: '养老服务', young: 19, middle: 20, senior: 26 },
  { category: '购买住房', young: 18, middle: 18, senior: 18 },
  { category: '教育培训', young: 14, middle: 15, senior: 14 },
  { category: '购买家电', young: 14, middle: 14, senior: 13 },
  { category: '医疗服务', young: 12, middle: 13, senior: 12 },
  { category: '购买服装', young: 12, middle: 12, senior: 11 },
  { category: '餐饮', young: 9, middle: 10, senior: 10 },
  { category: '美容美发', young: 8, middle: 8, senior: 8 },
  { category: '其他', young: 6, middle: 7, senior: 7 },
];

const reasonBars: BarConfig[] = [
  { dataKey: 'all', name: '全部', color: '#4A79AA' },
  { dataKey: 'age18_35', name: '18-35岁', color: '#5C9A8A' },
  { dataKey: 'age36_59', name: '36-59岁', color: '#C09A4A' },
  { dataKey: 'age60plus', name: '60岁以上', color: '#9AA5AE' },
];

const highlightedReasons = increaseConsumptionReasons.filter(({ reason }) =>
  ['旧物更新', '情绪价值', '性价比高'].includes(reason),
);

const ageGroups = [
  { key: 'young', label: '18-35岁', color: '#5A9B8A' },
  { key: 'middle', label: '36-59岁', color: '#E0935D' },
  { key: 'senior', label: '60岁以上', color: '#9BC4D2' },
] as const;

const agePlanData = ageConsumptionData
  .filter((item) => ['旅游', '保健养生'].includes(item.category))
  .map((item) => ({
    name: item.category,
    young: item.young,
    middle: item.middle,
    senior: item.senior,
  }));

const agePlanBars: BarConfig[] = ageGroups.map((group) => ({
  dataKey: group.key,
  name: group.label,
  color: group.color,
}));

export const ContentSlide36: React.FC = () => {
  return (
    <BaseContentSlide title="消费持续疲弱，增量消费呈现三个新特点" cardColumns={2} chartColumns={2}>
      <div className="flex h-full flex-col gap-3 pb-2">
        <div className="grid flex-shrink-0 grid-cols-2 gap-3">
          <BaseCard title="消费疲弱归因" variant="accent" className="!p-3 gap-1.5 text-[12px] leading-snug">
            <p>
              消费疲弱延续，核心制约仍是收入预期、就业、房价三大因素。
            </p>
            <p className="mt-1">但总量之下结构并不一致：情绪价值消费、健康支出等领域依然保持较快增长。</p>
          </BaseCard>
          <BaseCard title="增量花在哪、为何花" className="!p-3 gap-1.5 text-[12px] leading-snug">
            <p>
              调研显示，居民计划增加消费的领域前三为旅游、保健养生、数码产品，增加消费的原因前三为旧物更新、情绪价值、性价比高。
            </p>
            <p className="mt-1">两张榜单构成增量消费的三个新特点：</p>
            <ul className="mt-1 list-disc space-y-0.5 pl-4">
              <li><strong>情绪与体验消费高增：</strong>演唱会、IP潮玩、治愈系旅行等“情价比”消费持续高增。</li>
              <li><strong>追求性价比：</strong>基础品类转向平替，二手交易高增。</li>
              <li><strong>健康支出刚性不减：</strong>健康、养老等防御型支出只增不减，各年龄段均居前列。</li>
            </ul>
          </BaseCard>
        </div>

        <div className="grid min-h-0 flex-1 grid-cols-2 gap-3">
          <div className="flex min-h-0 flex-col gap-3">
            <ChartContainer delay="120ms" ariaLabel="社零累计同比趋势图" className="min-h-0 flex-1">
              <BaseLineChart
                data={retailCumulativeTrend}
                title="社零累计同比"
                subtitle="数据来源：国家统计局 | 单位：累计同比，%"
                lines={[
                  { dataKey: 'cumulativeYoy', name: '社零累计同比', color: seriesColors[0], strokeWidth: 2.5 },
                ]}
                yAxisDomain={[0, 6]}
                showYAxis
                showReferenceLine
                referenceLineY={0}
                showLegend={false}
                compact
                chartMarginLeft={30}
                axisTickFontSize={9}
                xAxisAngle={0}
                xAxisHeight={28}
                chartMarginBottom={8}
                xAxisTicks={quarterTicks}
              />
            </ChartContainer>
            <ChartContainer delay="240ms" ariaLabel="消费者信心指数趋势图" className="min-h-0 flex-1">
              <BaseLineChart
                data={confidenceIndexTrend}
                title="消费者信心指数"
                subtitle="数据来源：国家统计局中国经济景气监测中心 | 100为荣枯线"
                lines={[
                  { dataKey: 'confidence', name: '消费者信心指数', color: seriesColors[2], strokeWidth: 2.5 },
                ]}
                yAxisDomain={[80, 102]}
                showYAxis
                showReferenceLine
                referenceLineY={100}
                showLegend={false}
                unit=""
                yAxisTickFormatter={(val) => `${val}`}
                compact
                chartMarginLeft={20}
                axisTickFontSize={9}
                xAxisAngle={0}
                xAxisHeight={28}
                chartMarginBottom={8}
                xAxisTicks={quarterTicks}
              />
            </ChartContainer>
          </div>
          <div className="grid min-h-0 grid-cols-2 gap-3">
            <ChartContainer delay="360ms" ariaLabel="不同年龄段消费计划对比图" className="min-h-0">
              <div className="flex h-full min-h-0 flex-col">
                <div className="mb-1 flex-shrink-0 border-b border-slate-300 pb-1">
                  <h3 className="text-xs font-bold tracking-wide text-webank-blue">2026年您打算在哪些方面增加消费？</h3>
                  <p className="mt-0.5 text-[9px] text-webank-subtext">数据来源：中央广播电视总台研究院《美好生活大调查》 | 占比，%</p>
                </div>
                <div className="min-h-0 flex-1 pl-3">
                  <BaseBarChart
                    data={agePlanData}
                    xAxisKey="name"
                    bars={agePlanBars}
                    yAxisDomain={[0, 45]}
                    showYAxis
                    yAxisWidth={36}
                    chartMarginLeft={12}
                    showLegend
                    legendOrder={ageGroups.map((group) => group.label)}
                    legendFontSize={7}
                    legendGap={5}
                    showLabels
                    labelFormatter={(value) => `${value}%`}
                    barSize={20}
                    barGap={2}
                    barCategoryGap="16%"
                    xAxisTickFontSize={8}
                    xAxisInterval={0}
                  />
                </div>
              </div>
            </ChartContainer>
            <ChartContainer delay="480ms" ariaLabel="日常增加消费的主要原因图" className="min-h-0">
              <BaseBarChart
                data={highlightedReasons}
                title="您日常增加消费的主要原因是什么？"
                subtitle="总样本及分年龄段调查占比（%）"
                xAxisKey="reason"
                bars={reasonBars}
                yAxisDomain={[0, 50]}
                showYAxis
                yAxisWidth={36}
                chartMarginLeft={12}
                legendOrder={['全部', '18-35岁', '36-59岁', '60岁以上']}
                legendFontSize={7}
                legendGap={5}
                barSize={11}
                barGap={1}
                barCategoryGap="14%"
                showLabels={false}
                xAxisAngle={-35}
                xAxisHeight={40}
                xAxisInterval={0}
                xAxisTickFontSize={7}
                unit="%"
              />
            </ChartContainer>
          </div>
        </div>
      </div>
    </BaseContentSlide>
  );
};
