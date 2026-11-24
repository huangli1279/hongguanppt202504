import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart, BarConfig } from '../base/BaseBarChart';
import { emotionMarketTrend, performanceTrend, tourismTrend } from '@/data/emotionEconomyTrends';

const spendingBars: BarConfig[] = [
  { dataKey: 'spending', name: '出游总花费', color: '#4A79AA', unit: '万亿' },
];
const tripsBars: BarConfig[] = [
  { dataKey: 'trips', name: '出游人次', color: '#C09A4A', unit: '亿人次' },
];
const performanceBars: BarConfig[] = [
  { dataKey: 'revenue', name: '市场总收入', color: '#C09A4A' },
];
const emotionBars: BarConfig[] = [
  { dataKey: 'size', name: '市场规模', color: '#5C9A8A' },
];

/** 出游花费/人次单图标签：柱顶标数值，两两柱子之间用虚线连线，中间放增速框 */
const tourismLabel = (dataKey: 'spending' | 'trips', color: string) => {
  const barPositions: Record<number, { cx: number; topY: number }> = {};
  return ({ x, y, width, value, index }: any) => {
    const cx = x + width / 2;
    const curr = Number(value);
    const prev = index > 0 ? Number(tourismTrend[index - 1][dataKey]) : null;
    const growth = prev != null ? ((curr - prev) / prev) * 100 : null;
    barPositions[index] = { cx, topY: y };

    return (
      <g>
        {/* 柱顶数值 */}
        <text
          x={cx}
          y={y - 11}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#334155"
          fontSize={8.5}
          fontWeight={800}
        >
          {curr.toFixed(2)}
        </text>

        {/* 两两柱子之间：从柱顶引出细线，横向连接成方框，增速标在横线中央 */}
        {growth != null && barPositions[index - 1] && (() => {
          const previousBar = barPositions[index - 1];
          const bracketY = Math.min(previousBar.topY, y) - 24;
          const labelX = (previousBar.cx + cx) / 2;
          return (
            <g>
              <path
                d={`M ${previousBar.cx} ${previousBar.topY - 5} V ${bracketY} H ${cx} V ${y - 5}`}
                fill="none"
                stroke={color}
                strokeWidth={1.2}
              />
              <rect
                x={labelX - 22}
                y={bracketY - 7}
                width={44}
                height={14}
                fill="white"
                stroke={color}
                strokeWidth={1}
                rx={2}
              />
              <text
                x={labelX}
                y={bracketY}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={color}
                fontSize={8}
                fontWeight={800}
              >
                {growth > 0 ? '+' : ''}{growth.toFixed(1)}%
              </text>
            </g>
          );
        })()}
      </g>
    );
  };
};

export const ContentSlide37: React.FC = () => {
  return (
    <BaseContentSlide
      title={<>特点一：体验和情绪付费，Z世代成为主力</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="情绪经济持续提速" delay="120ms">
            <div className="space-y-2">
              <p>
                近年旅游、演出票房及情绪相关消费增长较好。国内出游人次 2025 年同比增长约 <span className="font-semibold text-red-500">16.1%</span>（高于花费增速），文旅消费持续升温，呈现高频化、平价化。
              </p>
              <p>
                演出市场同步回暖：演出市场保持 <span className="font-semibold text-red-500">5%-7%</span> 增速。
              </p>
              <p>
                据艾媒咨询预计，2029 年情绪经济市场规模将增长至 <span className="font-semibold text-red-500">4.5 万亿元</span>。
              </p>
              <p className="text-[10px] text-gray-500 leading-snug">
                数据来源：文旅部、国家统计局公报；中国演出行业协会《全国演出市场年度报告》；艾媒咨询
              </p>
            </div>
          </BaseCard>
          <BaseCard title="Z世代：成为情绪消费主力" delay="0ms" variant="accent">
            <div className="space-y-2">
              <ul className="list-disc pl-4 space-y-1 text-[14px] leading-relaxed">
                <li>超九成青年认可情绪价值的重要性；近六成青年愿意为情绪价值买单（较 2024 年 <span className="font-semibold text-red-500">+16.2pct</span>）；</li>
                <li>近九成有过为情绪价值买单的经历，近四成为高频消费者；</li>
                <li>青年情绪消费月均支出949 元；Z 世代连买实物都在买情绪。</li>
              </ul>
              <p className="text-[12px] text-gray-500 leading-relaxed">
                数据来源：上海市青少年研究中心联合 Soul App《2025 Z世代情绪消费报告》，2025 年 9 月 5 日发布
              </p>
            </div>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 min-h-0">
          <ChartContainer delay="600ms">
            <div className="flex flex-col h-full">
              <div className="flex-1 min-h-0 grid grid-cols-4 gap-3">
              <BaseBarChart
                data={tourismTrend}
                title="国内出游总花费"
                subtitle="单位：万亿元"
                xAxisKey="year"
                bars={spendingBars}
                yAxisDomain={[0, 8.5]}
                showYAxis={true}
                yAxisWidth={22}
                yAxisTickFormatter={(value) => `${value}`}
                showLegend={false}
                barSize={14}
                barCategoryGap="28%"
                showLabels={true}
                labelContent={tourismLabel('spending', '#4A79AA')}
                xAxisTickFontSize={8}
                xAxisHeight={20}
                xAxisInterval={0}
                unit="万亿"
              />
              <BaseBarChart
                data={tourismTrend}
                title="出游人次"
                subtitle="单位：亿人次"
                xAxisKey="year"
                bars={tripsBars}
                yAxisDomain={[0, 88]}
                showYAxis={true}
                yAxisWidth={27}
                yAxisTickFormatter={(value) => `${value}`}
                showLegend={false}
                barSize={14}
                barCategoryGap="28%"
                showLabels={true}
                labelContent={tourismLabel('trips', '#C09A4A')}
                xAxisTickFontSize={8}
                xAxisHeight={20}
                xAxisInterval={0}
                unit="亿人次"
              />
              <BaseBarChart
                data={performanceTrend}
                title="演出市场总收入"
                subtitle="单位：亿元"
                xAxisKey="year"
                bars={performanceBars}
                yAxisDomain={[0, 900]}
                showYAxis={true}
                yAxisWidth={27}
                yAxisTickFormatter={(value) => `${value}`}
                showLegend={false}
                barSize={18}
                barCategoryGap="20%"
                showLabels={true}
                labelFormatter={(value) => Number(value).toFixed(0)}
                labelPositiveOffset={6}
                xAxisTickFontSize={8}
                xAxisHeight={20}
                xAxisInterval={0}
                unit="亿元"
              />
              <BaseBarChart
                data={emotionMarketTrend}
                title="情绪经济市场规模"
                subtitle="单位：万亿元"
                xAxisKey="year"
                bars={emotionBars}
                yAxisDomain={[0, 4]}
                showYAxis={true}
                yAxisWidth={25}
                yAxisTickFormatter={(value) => `${value}`}
                showLegend={false}
                barSize={18}
                barCategoryGap="16%"
                showLabels={true}
                labelFormatter={(value) => Number(value).toFixed(2)}
                labelPositiveOffset={6}
                xAxisTickFontSize={8}
                xAxisHeight={20}
                xAxisInterval={0}
                unit="万亿"
              />
            </div>
          </div>
          </ChartContainer>
        </div>

        {/* 备注 */}
        <div className="mt-4 text-xs text-gray-500 border-t border-gray-200 pt-3 text-left">
          注：出游总花费与出游人次分图展示，各年数值上方标注与上一年的两两同比增速；情绪经济 2026E 为预测值。
        </div>
      </div>
    </BaseContentSlide>
  );
};
