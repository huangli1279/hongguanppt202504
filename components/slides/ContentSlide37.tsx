import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart, BarConfig } from '../base/BaseBarChart';
import { emotionMarketTrend, performanceTrend, tourismTrend } from '@/data/emotionEconomyTrends';

export const ContentSlide37: React.FC = () => {
  const tourismBars: BarConfig[] = [
    { dataKey: 'spending', name: '出游总花费', color: '#4A79AA' },
    { dataKey: 'trips', name: '出游人次', color: '#C09A4A', yAxisId: 'right', unit: '亿人次' },
  ];
  const performanceBars: BarConfig[] = [
    { dataKey: 'revenue', name: '市场总收入', color: '#C09A4A' },
  ];
  const emotionBars: BarConfig[] = [
    { dataKey: 'size', name: '市场规模', color: '#5C9A8A' },
  ];

  return (
    <BaseContentSlide
      title={<>为体验和情绪付费，Z世代成为主力</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="总体：情绪经济持续提速" delay="120ms">
            <div className="space-y-2">
              <p>
                近年旅游、演出票房及情绪相关消费增长较好。国内出游人次从 2022 年的 <span className="font-semibold text-red-500">25.3 亿</span>增至 2025 年的 <span className="font-semibold text-red-500">65.22 亿</span>，三年增长近 1.6 倍；2025 年同比增长约 <span className="font-semibold text-red-500">16.1%</span>，文旅消费持续升温。
              </p>
              <p>
                演出市场同步回暖：全国演出市场总收入从 2022 年的 <span className="font-semibold text-red-500">220.31 亿元</span>增至 2025 年的 <span className="font-semibold text-red-500">837.22 亿元</span>，规模接近增长 2.8 倍。据艾媒咨询预计，2029 年情绪经济市场规模将增长至 <span className="font-semibold text-red-500">4.5 万亿元</span>。
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
              <div className="flex-1 min-h-0 grid grid-cols-3 gap-4">
                <BaseBarChart
                  data={tourismTrend}
                  title="国内出游总花费与出游人次"
                  subtitle="左轴：万亿元｜右轴：亿人次"
                  xAxisKey="year"
                  bars={tourismBars}
                  yAxisDomain={[0, 7]}
                  showYAxis={true}
                  yAxisWidth={22}
                  yAxisTickFormatter={(value) => `${value}`}
                  showLineYAxis={false}
                  lineAxisDomain={[0, 80]}
                  lineYAxisWidth={0}
                  showLegend={true}
                  legendOrder={['出游总花费', '出游人次']}
                  legendFontSize={8}
                  legendGap={8}
                  legendWrapperStyle={{ bottom: -6 }}
                  barSize={11}
                  barGap={2}
                  barCategoryGap="24%"
                  showLabels={true}
                  labelContent={({ x, y, width, value, dataKey }: any) => {
                    const cx = x + width / 2;
                    const isTrips = dataKey === 'trips';
                    const color = isTrips ? '#8A6A2F' : '#475569';
                    const labelX = isTrips ? cx + 9 : cx;
                    const labelY = isTrips ? Math.max(10, y - 34) : Math.max(10, y - 13);
                    const tipX = cx;
                    const tipY = y - 3;
                    const fromX = labelX;
                    const fromY = labelY + 6;
                    const dx = tipX - fromX;
                    const dy = tipY - fromY;
                    const len = Math.hypot(dx, dy) || 1;
                    const ux = dx / len;
                    const uy = dy / len;
                    const bx = tipX - ux * 5;
                    const by = tipY - uy * 5;
                    const nx = -uy * 2.2;
                    const ny = ux * 2.2;
                    return (
                      <g>
                        <line x1={fromX} y1={fromY} x2={tipX} y2={tipY} stroke={color} strokeWidth={0.7} />
                        <polygon
                          points={`${tipX},${tipY} ${bx + nx},${by + ny} ${bx - nx},${by - ny}`}
                          fill={color}
                        />
                        <text
                          x={labelX}
                          y={labelY}
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fill={color}
                          fontSize={7.5}
                          fontWeight={700}
                        >
                          {Number(value).toFixed(2)}
                        </text>
                      </g>
                    );
                  }}
                  xAxisTickFontSize={8}
                  xAxisHeight={20}
                  xAxisInterval={0}
                  unit="万亿"
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
          注：三张图均展示规模/收入数据；情绪经济 2026E 为预测值。
        </div>
      </div>
    </BaseContentSlide>
  );
};
