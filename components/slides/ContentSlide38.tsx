import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseBarChart, BarConfig } from '../base/BaseBarChart';

// 三大长假：出游人数（亿人次）与总花费（亿元），按 2024 / 2025 / 2026 年排列
const YEARS = ['2024', '2025', '2026'] as const;
const festivalOrder = ['春节', '五一', '十一'] as const;
const festivalColor: Record<string, string> = {
  春节: '#1B4F72', // 深蓝
  五一: '#DC2626', // 红
  十一: '#C09A4A', // 琥珀
};

const festivalRaw: Record<string, { visitors: number[]; spending: number[] }> = {
  春节: { visitors: [4.74, 5.01, 5.96], spending: [6326.87, 6770, 8034.83] },
  五一: { visitors: [2.95, 3.14, 3.25], spending: [1668.9, 1802.69, 1854.92] },
  十一: { visitors: [7.65, 8.88, 8.26], spending: [7008.17, 8090.06, 7383.75] },
};

const perCapita = (spending: number, visitors: number) => Math.round(spending / visitors);

// 左图：按节日拆分为“访客组 + 花费组”两段，每段内按 2024/2025/2026 排列，
// 使同一节日内蓝色柱子（出游人数）集中在左、黄色柱子（总花费）集中在右，方便同节对比
const travelBarData = festivalOrder.flatMap((festival) => [
  ...YEARS.map((year, i) => ({
    period: `${festival}${year.slice(2)}访客`,
    visitors: festivalRaw[festival].visitors[i],
    spending: null,
  })),
  ...YEARS.map((year, i) => ({
    period: `${festival}${year.slice(2)}花费`,
    visitors: null,
    spending: festivalRaw[festival].spending[i],
  })),
]);

const categoryGroups = festivalOrder.map((festival) => ({
  label: festival,
  x1: `${festival}${YEARS[0].slice(2)}访客`,
  x2: `${festival}${YEARS[2].slice(2)}花费`,
  stroke: festivalColor[festival],
  fill: festivalColor[festival],
  fillOpacity: 0.06,
}));

const travelBars: BarConfig[] = [
  { dataKey: 'visitors', name: '出游人数（亿人次）', color: '#1B4F72', yAxisId: 'left' },
  { dataKey: 'spending', name: '总花费（亿元）', color: '#C09A4A', yAxisId: 'right' },
];

// 右图：三大长假人均花费（总花费 ÷ 出游人数）
const perCapitaBadge = festivalOrder
  .map((festival) => `${festival} ¥${perCapita(festivalRaw[festival].spending[2], festivalRaw[festival].visitors[2]).toLocaleString()}`)
  .join(' · ');

export const ContentSlide38: React.FC = () => {
  return (
    <BaseContentSlide
      title="假期出游：春节、五一、十一出游人次与花费全景"
      subtitle="假期出游分析"
      cardColumns={3}
      chartColumns={2}
      headerClassName="!mb-3"
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-3 mb-3 flex-shrink-0">
          <BaseCard title="十一：出游规模居三大长假之首" delay="0ms" variant="accent">
            <p className="text-sm">
              2024→2026：七天假期出游
              <span className="font-bold text-webank-blue">7.65→8.88→8.26亿人次</span>
              ，总花费
              <span className="font-bold text-webank-blue">7008→8090→7384亿元</span>
              。2025年为八天超长假期，花费达峰
              <span className="font-bold text-webank-blue">8,090亿元</span>
              ；2026年虽回落，仍高于2024，规模始终居三大长假之首。
            </p>
          </BaseCard>
          <BaseCard title="春节：人均花费最高，2026创历史新高" delay="120ms">
            <p className="text-sm">
              2024→2026：春节出游
              <span className="font-bold text-red-600">4.74→5.01→5.96亿人次</span>
              ，总花费
              <span className="font-bold text-red-600">6,327→6,770→8,035亿元</span>
              。2026年为九天可比口径，花费创历史新高且同比+5.5%，人均花费约
              <span className="font-bold text-red-600">¥1,348</span>
              ，显著高于五一与十一。
            </p>
          </BaseCard>
          <BaseCard title="五一：人气稳步回升，性价比突出" delay="240ms">
            <p className="text-sm">
              2024→2026：五一出游
              <span className="font-bold text-green-600">2.95→3.14→3.25亿人次</span>
              连续增长，总花费
              <span className="font-bold text-green-600">1,669→1,803→1,855亿元</span>
              稳步上扬；人均花费约
              <span className="font-bold text-green-600">¥571</span>
              ，为三大长假中最低，性价比最突出。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-3 min-h-0">
          {/* 左侧：双轴柱状图（同节蓝柱集中、黄柱集中，便于对比变化） */}
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={travelBarData}
              title="三大长假出游人数与总花费（按节日分布）"
              subtitle={`数据来源：文化和旅游部·国家统计局 | 单位：亿人次 / 亿元 | 人均花费：${perCapitaBadge}`}
              xAxisKey="period"
              bars={travelBars}
              yAxisDomain={[0, 10]}
              showYAxis={true}
              yAxisTickFormatter={(v) => `${v}亿`}
              yAxisWidth={32}
              legendOrder={['出游人数（亿人次）', '总花费（亿元）']}
              legendFontSize={9}
              barSize={16}
              barGap={2}
              barCategoryGap="30%"
              showLabels={true}
              labelContent={({ value, x, y, width, dataKey }: any) => {
                if (value == null) return null;
                const num = Number(value) || 0;
                const cx = (Number(x) || 0) + (Number(width) || 0) / 2;
                const isSpending = dataKey === 'spending';
                const text = isSpending ? Math.round(num).toLocaleString() : num.toFixed(2);
                return (
                  <text
                    x={cx}
                    y={(Number(y) || 0) - 5}
                    textAnchor="middle"
                    fill={isSpending ? '#C09A4A' : '#1B4F72'}
                    fontSize={8}
                    fontWeight={700}
                  >
                    {text}
                  </text>
                );
              }}
              xAxisTickFormatter={(v) => {
                const match = String(v).match(/(\d{2})(访客|花费)/);
                return match ? match[1] : '';
              }}
              xAxisTickFontSize={9}
              xAxisHeight={24}
              xAxisInterval={0}
              categoryGroups={categoryGroups}
              showLineYAxis={true}
              lineAxisDomain={[0, 10000]}
              lineUnit="亿元"
              lineYAxisWidth={46}
              unit="亿人次"
            />
          </ChartContainer>

          {/* 右侧：三大长假消费变化（竖排，每个节占一张） */}
          <ChartContainer delay="720ms">
            <div className="flex flex-col h-full">
              <div className="mb-1.5">
                <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
                  三大长假消费变化（总花费）
                </h3>
                <p className="text-[10px] text-webank-subtext mt-0.5">
                  单位：亿元｜各长假 2024–2026 年总花费变化
                </p>
              </div>
              <div className="flex-1 min-h-0 flex flex-col gap-1.5">
                {festivalOrder.map((festival) => {
                  const values = festivalRaw[festival].spending;
                  const change = (values[2] / values[0] - 1) * 100;
                  const color = festivalColor[festival];
                  const n = values.length;
                  const min = Math.min(...values);
                  const max = Math.max(...values);
                  const range = max - min || 1;
                  const points = values.map((v, i) => ({
                    x: 12 + (i / (n - 1)) * 76,
                    y: 20 + ((v - min) / range) * 46,
                    v,
                    year: YEARS[i],
                  }));
                  const polyline = points.map((p) => `${p.x},${100 - p.y}`).join(' ');
                  return (
                    <div
                      key={festival}
                      className="flex-1 min-h-0 flex flex-col border border-slate-100 rounded bg-white px-2.5 py-1.5"
                    >
                      {/* header */}
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-sm" style={{ backgroundColor: color }} />
                          <span className="text-xs font-bold" style={{ color }}>
                            {festival}
                          </span>
                          <span className="text-[9px] text-webank-subtext">总花费（亿元）</span>
                        </div>
                        <span className="text-[10px] font-bold text-slate-600">
                          2024→2026 {change >= 0 ? '+' : ''}{change.toFixed(1)}%
                        </span>
                      </div>
                      {/* 折线 */}
                      <div className="relative flex-1 min-h-0 mt-0.5">
                        <svg
                          className="absolute inset-0 w-full h-full overflow-visible"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                        >
                          <polyline
                            points={polyline}
                            fill="none"
                            stroke={color}
                            strokeWidth={2}
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </svg>
                        {points.map((p) => (
                          <React.Fragment key={p.year}>
                            <span
                              className="absolute rounded-full"
                              style={{
                                left: `${p.x}%`,
                                bottom: `${p.y}%`,
                                width: 6,
                                height: 6,
                                backgroundColor: color,
                                transform: 'translate(-50%, 50%)',
                              }}
                            />
                            <span
                              className="absolute text-[9px] font-bold whitespace-nowrap"
                              style={{
                                left: `${p.x}%`,
                                bottom: `${p.y}%`,
                                transform: 'translate(-50%, -150%)',
                                color,
                              }}
                            >
                              {Math.round(p.v).toLocaleString()}
                            </span>
                            <span
                              className="absolute text-[9px] text-webank-subtext"
                              style={{ left: `${p.x}%`, bottom: 0, transform: 'translate(-50%, 0)' }}
                            >
                              {p.year}
                            </span>
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
