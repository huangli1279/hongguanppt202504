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
export const ContentSlide41: React.FC = () => {
  return (
    <BaseContentSlide
      title={<>特点三：从追求价格到追求性价比</>}
      subtitle="2026年三季度宏观经济报告"
      cardColumns={3}
      chartColumns={3}
      headerClassName="!mb-3"
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-3 mb-3 flex-shrink-0">
          <BaseCard title="三大长假：出游规模与总花费齐增长" delay="0ms" variant="accent">
            <p className="text-sm">
              2024→2026，三大长假的出游人数与总花费
              <span className="font-bold text-webank-blue">全线上涨</span>
              ：出游人数春节
              <span className="font-bold text-webank-blue">4.74→5.96亿（+25.7%）</span>
              、五一
              <span className="font-bold text-webank-blue">2.95→3.25亿（+10.2%）</span>
              、十一
              <span className="font-bold text-webank-blue">7.65→8.26亿（+8.0%）</span>
              ；总花费分别增长
              <span className="font-bold text-webank-blue">+27.0%、+11.1%、+5.4%</span>
              ，其中2026年春节花费
              <span className="font-bold text-webank-blue">8,035亿元</span>
              创历史新高。假日消费规模持续壮大。
            </p>
          </BaseCard>
          <BaseCard title="人均消费：从“花得多”到“花得值”" delay="120ms">
            <p className="text-sm">
              出游人数逐年攀升，人均花费却普遍小幅回落：2026年春节人均消费
              1,348元
              、五一
              571
              、十一
              894
              ，均低于2025年的1,351、574、911。规模增但人均降，说明大家更在乎出行得性价比。
            </p>
          </BaseCard>
          <BaseCard title="二手交易和快消零售快速增长" delay="240ms">
            <p className="text-sm">
              二手交易：2025年全国二手商品交易额约1.7万亿、增速约12%，2026年闲置交易市场规模预计已突破3万亿元；二手车2026H1成交971.32万辆、首超新车。
            </p>
            <p className="text-sm mt-1">
              快消零售：2025年城镇快消销量+3.6%、均价-2.6%、销售额+0.9%；2026Q1 销量+1.3%、销售额-1.3%（贝恩×纽锐拓）。 在高性价比诉求下，消费者转向用低价高频的快消替代高价低频消费，追求更多实用价值。
            </p>
            <p className="text-sm mt-1 text-webank-subtext">
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-3 gap-3 min-h-0">
          {/* 左侧：双轴柱状图（同节蓝柱集中、黄柱集中，便于对比变化） */}
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={travelBarData}
              title="三大长假出游人数与总花费（按节日分布）"
              subtitle={`数据来源：文化和旅游部·国家统计局 | 单位：亿人次 / 亿元 | 人均花费考虑到了放假时长的差异`}
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
                  三大长假人均花费变化
                </h3>
                <p className="text-[10px] text-webank-subtext mt-0.5">
                  单位：元/人次｜各长假 2024–2026 年人均花费变化
                </p>
              </div>
              <div className="flex-1 min-h-0 flex flex-col gap-1.5">
                {festivalOrder.map((festival) => {
                  const values = Array.from(YEARS, (_, i) =>
                    perCapita(festivalRaw[festival].spending[i], festivalRaw[festival].visitors[i]),
                  );
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
                          <span className="text-[9px] text-webank-subtext">人均花费（元）</span>
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
                              ¥{p.v.toLocaleString()}
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

          {/* 最右：行为数据表（来自上传图表） */}
          <ChartContainer delay="840ms">
            <div className="flex flex-col h-full">
              <div className="mb-1.5">
                <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
                  行为数据：性价比成消费显著增长点
                </h3>
                <p className="text-[10px] text-webank-subtext mt-0.5">
                  数据来源：贝恩×纽锐拓消费者调研（p15–16）
                </p>
              </div>
              <div className="flex-1 min-h-0 overflow-hidden">
                <table className="w-full h-full text-[10px] border-collapse">
                  <thead>
                    <tr className="bg-webank-blue/10 text-webank-blue">
                      <th className="border border-slate-200 px-1.5 py-1 text-left font-bold w-14">维度</th>
                      <th className="border border-slate-200 px-1.5 py-1 text-left font-bold">关键数据</th>
                      <th className="border border-slate-200 px-1.5 py-1 text-left font-bold w-16">解读</th>
                    </tr>
                  </thead>
                  <tbody className="text-webank-text">
                    <tr className="align-top">
                      <td className="border border-slate-200 px-1.5 py-1 font-semibold text-webank-accent">循环使用</td>
                      <td className="border border-slate-200 px-1.5 py-1">
                        <span className="font-bold text-webank-blue">82%</span> 更长时间使用物品再更换；
                        <span className="font-bold text-webank-blue">69%</span> 选择修理而非丢弃；
                        <span className="font-bold text-webank-blue">68%</span> 主动减少浪费
                      </td>
                      <td className="border border-slate-200 px-1.5 py-1">延长使用周期</td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-slate-200 px-1.5 py-1 font-semibold text-webank-accent">二手循环</td>
                      <td className="border border-slate-200 px-1.5 py-1">
                        <span className="font-bold text-webank-blue">30%</span> 购买二手服装、全品类超
                        <span className="font-bold text-webank-blue">20%</span>；近一半消费者"DIY化"了过去付费的服务（家政维修、理发、美容）
                      </td>
                      <td className="border border-slate-200 px-1.5 py-1">二手加速</td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-slate-200 px-1.5 py-1 font-semibold text-webank-accent">年轻人领先</td>
                      <td className="border border-slate-200 px-1.5 py-1">
                        一半 Z 世代在社交平台寻找 DIY 灵感（尤其关注省钱博主）；一半每
                        <span className="font-bold text-webank-blue">2–3</span> 个月购买二手
                      </td>
                      <td className="border border-slate-200 px-1.5 py-1">Z 世代引领</td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-slate-200 px-1.5 py-1 font-semibold text-webank-accent">二手机动载具</td>
                      <td className="border border-slate-200 px-1.5 py-1">
                        Z 世代更看重"淘乐趣""独特孤品"；婴儿潮一代更看重"比新的便宜"（Exhibit 9）
                      </td>
                      <td className="border border-slate-200 px-1.5 py-1">动机分化</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
