import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { BaseBarChart, BarConfig, BarLineConfig } from '../base/BaseBarChart';
import { fiscalRevenueTrendData, fiscalCategoryGrowthData } from '@/data/fiscalRevenue';

export const ContentSlide29: React.FC = () => {
  const lines: LineConfig[] = [
    { dataKey: 'taxRevenue', name: '税收收入', strokeWidth: 2, labelDY: -18 },
    { dataKey: 'nonTaxRevenue', name: '非税收入', strokeWidth: 2, labelDY: 22 },
    { dataKey: 'total', name: '一般公共预算收入', strokeWidth: 2.5, labelDY: 4 },
  ];

  const bars: BarConfig[] = [
    { dataKey: 'amount', name: '总额', color: '#4A79AA' },
  ];
  const growthLines: BarLineConfig[] = [
    { dataKey: 'growth', name: '增速', color: '#E8913A', strokeWidth: 0, yAxisId: 'right', unit: '%' },
  ];

  return (
    <BaseContentSlide
      title={<>上半年一般公共预算收入同比增长4.7%，高于年初预算目标，进度略快于近年同期均值</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="收入总量超出预期" delay="0ms" variant="accent">
            <p>
              上半年价格上行、股市活跃、外贸增势强劲有力支撑全国一般公共预算收入同比增长<span className="text-red-500 font-semibold">4.7%</span>，高于年初<span className="text-red-500 font-semibold">2.2%</span>的预算目标，收入进度达<span className="text-red-500 font-semibold">54.85%</span>，略快于近五年同期均值。
            </p>
          </BaseCard>
          <BaseCard title="税收增速温和，对收入增长贡献显著" delay="120ms">
            <p>
              税收收入累计增长<span className="text-red-500 font-semibold">5.3%</span>，非税收入同比增长<span className="text-red-500 font-semibold">2.3%</span>。国内增值税受PPI回升与工业生产稳健支撑，累计同比增长<span className="text-red-500 font-semibold">6%</span>（对收入增量贡献<span className="text-red-500 font-semibold">40%</span>）；受外贸进口较快增长带动，进口货物增值税、消费税增长<span className="text-red-500 font-semibold">11.8%</span>（对收入增量贡献<span className="text-red-500 font-semibold">19%</span>）；受资本市场活跃带动，上半年印花税同比增长<span className="text-red-500 font-semibold">40.9%</span>（对收入增量贡献<span className="text-red-500 font-semibold">15%</span>），其中证券交易印花税同比大增<span className="text-red-500 font-semibold">97.3%</span>，延续了Q1趋势。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-6">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={fiscalRevenueTrendData}
              title="1—6月一般公共预算收入累计同比，区分税收收入、非税收收入同比增速"
              subtitle="数据来源：财政部 | 单位：%"
              lines={lines}
              yAxisDomain={[-15, 15]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['一般公共预算收入', '税收收入', '非税收入']}
              xAxisTickCount={8}
            />
          </ChartContainer>

          <ChartContainer delay="600ms">
            <BaseBarChart
              data={fiscalCategoryGrowthData}
              title="各类税收收入总额与累计同比"
              subtitle="数据来源：财政部 | 单位：亿元，%"
              bars={bars}
              lines={growthLines}
              xAxisKey="category"
              yAxisDomain={[0, 45000]}
              yAxisTickFormatter={(val) => String(val)}
              unit="亿元"
              showYAxis={true}
              showLabels={false}
              showLineYAxis={true}
              lineAxisDomain={[-10, 45]}
              lineUnit="%"
              lineYAxisTickFormatter={(val) => `${val.toFixed(0)}%`}
              lineShowDot={true}
              lineLabelFormatter={(val) => `${Number(val).toFixed(2)}%`}
              lineLabelContent={(props) => {
                const val = props.value;
                const isNegative = Number(val) < 0;
                return (
                  <text
                    x={(props.x ?? 0) + 20}
                    y={props.y}
                    textAnchor="start"
                    dominantBaseline="middle"
                    fill={isNegative ? '#16a34a' : props.fill}
                    fontSize={9}
                    fontWeight={600}
                  >
                    {`${Number(val).toFixed(2)}%`}
                  </text>
                );
              }}
              legendOrder={['总额', '增速']}
              barSize={22}
              xAxisAngle={-45}
              xAxisHeight={70}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
