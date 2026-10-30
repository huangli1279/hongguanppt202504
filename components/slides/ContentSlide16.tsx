import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart } from '../base/BaseLineChart';
import { unemploymentRateData } from '@/data/employment';
import { ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';
import { uiColors } from '@/utils/chartColors';
import { incomeExpenditureData } from '@/data/consumerConfidence';

// 左图：居民收入 vs 消费支出实际增速（含剪刀差阴影）
const incomeVsConsumptionData = incomeExpenditureData
  .filter((d) => d.period >= '2024-03')
  .map((d) => ({
    period: d.period,
    incomeReal: d.incomeReal,
    consumptionReal: d.consumptionReal,
    gap: [d.consumptionReal, d.incomeReal] as [number, number],
  }));

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

export const ContentSlide16: React.FC = () => {
  return (
    <BaseContentSlide
      title="收入与支出：收入增幅大于消费，预防性储蓄倾向未解除"
      cardColumns={2}
      chartColumns={2}
      cards={
        <>
          <BaseCard title="居民端印证与收入结构" delay="0ms" variant="accent" className="!gap-1.5 !p-3">
            <ul className="list-disc pl-5 space-y-1 text-[13px] leading-snug">
              <li>
                居民端印证：前三季度全国居民人均可支配收入34230元，实际
                <span className="font-bold text-red-500">+4.4%</span>
                ；人均消费支出22354元，实际
                <span className="font-bold text-green-600">+2.7%</span>
                。
              </li>
              <li>
                收入结构：工资性收入
                <span className="font-bold text-red-500">+5.3%</span>
                （占比57.4%）、经营净收入
                <span className="font-bold text-red-500">+6.6%</span>
                、转移净收入
                <span className="font-bold text-red-500">+5.7%</span>
                （育儿补贴等惠民政策）；财产净收入仅
                <span className="font-bold text-green-600">+1.6%</span>
                ——房价与利率下行对财产性收入的压制仍在。
              </li>
            </ul>
          </BaseCard>

          <BaseCard title="城乡与就业" delay="120ms" className="!gap-1.5 !p-3">
            <ul className="list-disc pl-5 space-y-1 text-[13px] leading-snug">
              <li>
                城乡：农村收入实际
                <span className="font-bold text-red-500">+5.6%</span>
                vs 城镇
                <span className="font-bold text-red-500">+3.6%</span>
                ，农村消费支出实际
                <span className="font-bold text-red-500">+3.5%</span>
                vs 城镇
                <span className="font-bold text-green-600">+2.1%</span>
                ，农村高于城镇的趋势不变。
              </li>
              <li>
                就业：前三季度城镇调查失业率均值
                <span className="font-bold">5.2%</span>
                ，与上年持平；7、8月受毕业季影响走高（5.2%/5.3%），9月回落至5.2%；16-24岁劳动力失业率为
                <span className="font-bold text-red-500">18%</span>
                ，较8月下降0.9个百分点。30-59岁劳动力失业率3.9%，基本稳定。
              </li>
            </ul>
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
                      stroke="#b91c1c"
                      strokeWidth={2.5}
                      dot={{ r: 3, fill: '#b91c1c', stroke: 'white', strokeWidth: 1.5 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="consumptionReal"
                      name="居民人均消费支出:实际"
                      stroke="#2563eb"
                      strokeWidth={2.5}
                      dot={{ r: 3, fill: '#2563eb', stroke: 'white', strokeWidth: 1.5 }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </ChartContainer>

          <ChartContainer delay="720ms" ariaLabel="就业情况折线图">
            <BaseLineChart
              data={unemploymentRateData.filter((d) => d.period >= '2025-01')}
              title="就业情况"
              subtitle="数据来源：国家统计局 | 单位：% | 城镇调查失业率"
              lines={[
                { dataKey: 'overall', name: '城镇调查失业率', color: '#1e3a8a', strokeWidth: 2.5 },
                { dataKey: 'age16_24', name: '16-24岁', color: '#dc2626', strokeWidth: 2 },
                { dataKey: 'age30_59', name: '30-59岁', color: '#6b7280', strokeWidth: 2 },
              ]}
              yAxisDomain={[0, 22]}
              showYAxis
              showReferenceLine
              referenceLineY={0}
              legendOrder={['城镇调查失业率', '16-24岁', '30-59岁']}
              xAxisTickCount={8}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
