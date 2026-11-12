import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { unemploymentRateData } from '@/data/employment';
import { ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';
import { uiColors, chartColors } from '@/utils/chartColors';
import { consumerConfidenceData, incomeExpenditureData } from '@/data/consumerConfidence';

// 本页三张图统一色板：蓝=品牌主蓝，荧光黄 / 深绿与前面页码保持一致
const LINE_BLUE = chartColors.primary; // #005c8f
const LINE_RED = chartColors.secondary; // #b91c1c
const LINE_YELLOW = '#FFC000'; // 荧光黄，与前面页码一致
const LINE_GREEN = '#5C9A8A'; // 深绿（同 ContentSlide13 系列绿）

// 左图：居民收入 vs 消费支出实际增速（含剪刀差阴影）
const incomeVsConsumptionData = incomeExpenditureData
  .filter((d) => d.period >= '2024-03')
  .map((d) => ({
    period: d.period,
    incomeReal: d.incomeReal,
    consumptionReal: d.consumptionReal,
    gap: [d.consumptionReal, d.incomeReal] as [number, number],
  }));

// 右图：消费者信心指数及分项（消费意愿、收入、就业）
const confidenceData = consumerConfidenceData.filter((d) => d.period >= '2025-01');

const confidenceLines: LineConfig[] = [
  { dataKey: 'confidence', name: '消费者信心指数', color: LINE_RED, strokeWidth: 2.5 },
  { dataKey: 'income', name: '收入信心', color: LINE_YELLOW, strokeWidth: 2.5 },
  { dataKey: 'willingness', name: '消费意愿', color: LINE_BLUE, strokeWidth: 2.5 },
  { dataKey: 'employment', name: '就业信心', color: LINE_GREEN, strokeWidth: 2.5 },
];

const gapTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 shadow-lg text-xs font-sans" style={{ border: `1px solid ${uiColors.tooltipBorder}` }}>
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        {payload
          .filter((e: any) => e.dataKey !== 'gap')
          .map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value}%
            </p>
          ))}
      </div>
    );
  }
  return null;
};

const incomeSeptemberDot = (props: any) => {
  if (props.payload?.period !== '2026-09') return null;

  return (
    <g>
      <circle cx={props.cx} cy={props.cy} r={3} fill={LINE_RED} stroke="white" strokeWidth={1.5} />
      <text x={props.cx} y={props.cy} dx={8} dy={4} fill={LINE_RED} fontSize={10} fontWeight={600} textAnchor="start">
        {props.payload.incomeReal}
      </text>
    </g>
  );
};

const consumptionSeptemberDot = (props: any) => {
  if (props.payload?.period !== '2026-09') return null;

  return (
    <g>
      <circle cx={props.cx} cy={props.cy} r={3} fill={LINE_BLUE} stroke="white" strokeWidth={1.5} />
      <text x={props.cx} y={props.cy} dx={8} dy={4} fill={LINE_BLUE} fontSize={10} fontWeight={600} textAnchor="start">
        {props.payload.consumptionReal}
      </text>
    </g>
  );
};

export const ContentSlide15: React.FC = () => {
  return (
    <BaseContentSlide
      title="收入增幅大于消费，就业维持平稳，消费者信心仍不足"
      cardColumns={3}
      chartColumns={3}
      cards={
        <>
          <BaseCard title="收入增幅大于消费，预防性储蓄倾向仍在" delay="0ms" variant="accent" className="!gap-1.5 !p-3">
            <ul className="list-disc pl-5 space-y-1 text-[13px] leading-snug">
              <li>
                居民端：前三季度全国居民人均可支配收入34,230元，实际
                <span className="font-bold text-red-500">+4.4%</span>
                ；人均消费支出22,354元，实际
                <span className="font-bold text-green-600">+2.7%</span>
                ，收入预期仍低于100。
              </li>
              <li>
                农村收入实际
                <span className="font-bold text-red-500">+5.6%</span>
                vs 城镇
                +3.6%
                ，农村消费支出实际
                +3.5%
                vs 城镇
                +2.1%
                ，农村高于城镇的趋势不变。
              </li>
            </ul>
          </BaseCard>

          <BaseCard title="失业率维持稳定" delay="120ms" className="!gap-1.5 !p-3">
            <ul className="list-disc pl-5 space-y-1 text-[13px] leading-snug">
              <li>
                就业：前三季度城镇调查失业率均值5.2%
                ，与上年持平；16-24岁劳动力失业率为
                <span className="font-bold text-red-500">18%</span>
                ，较8月下降0.9个百分点。30-59岁劳动力失业率3.9%，基本稳定，就业预期也处于低位未改。
              </li>
            </ul>
          </BaseCard>
          <BaseCard title="消费者信心低位小幅回落" delay="240ms" className="!gap-1.5 !p-3">
            <p className="text-[13px] leading-snug">
              9月消费者信心指数
              <span className="font-bold text-red-500">89.0</span>
              ，较二季度均值（89.4）小幅回落，仍在100荣枯线下方低位徘徊；分项中就业信心最低（
              <span className="font-bold text-red-500">74.0</span>
              ），收入信心97.9、消费意愿95.1，同样偏弱。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms" ariaLabel="居民收入vs消费支出实际增速双线与剪刀差阴影">
            <div className="w-full h-full flex flex-col">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
                  居民收入vs消费支出实际增速
                </h3>
                <p className="text-xs text-webank-subtext mt-1">数据来源：国家统计局 | 单位：%</p>
              </div>
              <div className="flex-grow min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={incomeVsConsumptionData}
                    margin={{ top: 20, right: 50, left: -20, bottom: 5 }}
                  >
                    <CartesianGrid vertical={false} stroke={uiColors.grid} strokeDasharray="3 3" />
                    <XAxis
                      dataKey="period"
                      axisLine={{ stroke: uiColors.axis }}
                      tickLine={false}
                      tick={{ fill: uiColors.tick, fontSize: 10 }}
                      dy={10}
                      interval={0}
                      angle={-45}
                      textAnchor="end"
                      ticks={incomeVsConsumptionData
                        .map((d) => d.period)
                        .filter((p) => [3, 6, 9, 12].includes(parseInt(p.slice(5, 7), 10)))}
                    />
                    <YAxis
                      domain={[0, 8]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: uiColors.tickSecondary, fontSize: 10 }}
                      tickFormatter={(val) => `${val}%`}
                    />
                    <Tooltip content={gapTooltip} cursor={{ stroke: uiColors.cursor, strokeWidth: 1 }} />
                    <Legend
                      verticalAlign="bottom"
                      align="center"
                      wrapperStyle={{ paddingBottom: '10px', paddingTop: '20px' }}
                      content={({ payload }: any) => {
                        const order = ['居民人均可支配收入:实际', '居民人均消费支出:实际'];
                        const sorted = payload
                          ? [...payload].sort((a: any, b: any) => order.indexOf(a.value) - order.indexOf(b.value))
                          : [];
                        return (
                          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'center', gap: '24px' }}>
                            {sorted.map((entry: any, index: number) => (
                              <li key={`legend-${index}`} style={{ display: 'flex', alignItems: 'center' }}>
                                <span
                                  style={{
                                    width: '8px',
                                    height: '8px',
                                    backgroundColor: entry.color,
                                    borderRadius: '50%',
                                    marginRight: '6px',
                                    display: 'inline-block',
                                  }}
                                />
                                <span style={{ color: uiColors.tick, fontSize: '10px' }}>{entry.value}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }}
                    />
                    <ReferenceLine y={0} stroke={uiColors.tick} strokeWidth={1} />
                    <Area
                      type="monotone"
                      dataKey="gap"
                      name="剪刀差"
                      legendType="none"
                      fill="#fecaca"
                      fillOpacity={0.45}
                      stroke="none"
                      isAnimationActive={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="incomeReal"
                      name="居民人均可支配收入:实际"
                      stroke={LINE_RED}
                      strokeWidth={2.5}
                      dot={incomeSeptemberDot}
                    />
                    <Line
                      type="monotone"
                      dataKey="consumptionReal"
                      name="居民人均消费支出:实际"
                      stroke={LINE_BLUE}
                      strokeWidth={2.5}
                      dot={consumptionSeptemberDot}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </ChartContainer>

          <ChartContainer delay="720ms" ariaLabel="就业情况折线图">
            <BaseLineChart
              data={unemploymentRateData.filter((d) => d.period >= '2025-01')}
              title="失业率"
              subtitle="数据来源：国家统计局 | 单位：% | 城镇调查失业率"
              lines={[
                { dataKey: 'overall', name: '城镇调查失业率', color: LINE_BLUE, strokeWidth: 2.5 },
              ]}
              yAxisDomain={[0, 8]}
              showYAxis
              showReferenceLine
              referenceLineY={0}
              legendOrder={['城镇调查失业率']}
              xAxisTickCount={8}
            />
          </ChartContainer>

          <ChartContainer delay="840ms" ariaLabel="消费者信心指数及分项折线图">
            <BaseLineChart
              data={confidenceData}
              title="消费者信心指数及分项"
              subtitle="数据来源：国家统计局 | 信心指数（100为荣枯线）"
              lines={confidenceLines}
              yAxisDomain={[65, 105]}
              showYAxis
              showReferenceLine
              referenceLineY={100}
              unit=""
              yAxisTickFormatter={(val) => `${val}`}
              legendOrder={['消费者信心指数', '收入信心', '消费意愿', '就业信心']}
              xAxisTickCount={6}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
