import React from 'react';
import { BaseLineChart } from '../base/BaseLineChart';
import { ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';
import { uiColors } from '@/utils/chartColors';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { ppiYoyData } from '@/data/ppi';
import { profitSelfRaisedData } from '@/data/fixedAssetInvestment';

const ppiChartData = ppiYoyData;
const profitChartData = profitSelfRaisedData.filter((d) => d.period >= '2025-01');
const ppiHalfYearTicks = ppiChartData
  .filter((d) => /-(06|12)$/.test(d.period))
  .map((d) => d.period);

const ppiMaterialsGapData = ppiChartData.map((d) => ({
  ...d,
  materialsGap: [d.livingGoodsYoy, d.productionMaterialsYoy] as [number | null, number | null],
}));

const ppiGapTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-white p-2 shadow-lg text-xs font-sans" style={{ border: `1px solid ${uiColors.tooltipBorder}` }}>
      <p className="font-bold text-webank-blue mb-1">{label}</p>
      {payload.filter((entry: any) => entry.dataKey !== 'materialsGap').map((entry: any, index: number) => (
        <p key={index} style={{ color: entry.color }}>{entry.name}: {entry.value}%</p>
      ))}
    </div>
  );
};

export const ContentSlide09: React.FC = () => {
  return (
    <BaseContentSlide
      title="工业企业利润前三季度+15.5%，增收更增利但上下游生产价格传导不畅"
      cardColumns={3}
      chartColumns={3}
      cards={
        <>
          <BaseCard title="利润总额与营收成本" delay="0ms" variant="accent">
            <p>
              1-9月规上工业企业利润总额6.03万亿元，同比
              <span className="text-red-500 font-bold">+15.5%</span>
              ；1-9月规上工业企业营收同比增长
              6.6%，营业成本同比增长
              6.1%，增收更增利。但较二季度高点已出现回落，预计四季度持续回落。
            </p>
          </BaseCard>

          <BaseCard title="输入性通胀抬升PPI破5" delay="120ms">
            <p>
              9月同比
              <span className="text-red-500 font-bold">5.0%</span>
              ，10月升至
              <span className="text-red-500 font-bold">5.7%</span>
              ，为22年7月以来首次破5，受到外部战争等因素影响，输入性通胀为上游企业带来利润高增但持续挤压中下游企业利润。但机构普遍预测年内高点已过，随着美伊战争和谈取得进展，11-12月PPI将回落。
            </p>
          </BaseCard>

          <BaseCard title="生产生活资料剪刀差走阔，中下游企业承压严重" delay="240ms" variant="accent">
            <p>
              9月生产资料PPI同比
              <span className="text-red-500 font-bold">6.5%</span>
              ，10月升至
              <span className="text-red-500 font-bold">7.4%</span>
              ，而生活资料均为
              <span className="text-green-600 font-bold">-0.1%</span>
              ，上下游之间的剪刀差今年以来持续走扩至
              <span className="font-bold">7.5%</span>
              。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms" className="pb-8">
            <BaseLineChart
              data={profitChartData}
              title="规上工业企业利润累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'industrialProfit', name: '规上工业企业利润总额', strokeWidth: 2.5, pointOffsets: { '2026-09': 12 } },
              ]}
              yAxisDomain={[-5, 25]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['规上工业企业利润总额']}
              highlightPeriods={['2026-09']}
              unit="%"
              yAxisTickFormatter={(val) => `${val}`}
              xAxisTicks={['2025-02', '2025-06', '2025-09', '2025-12', '2026-03', '2026-06', '2026-09']}
            />
          </ChartContainer>
          <ChartContainer delay="660ms" className="pb-8">
            <BaseLineChart
              data={ppiChartData}
              title="PPI当月同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'ppiYoy', name: 'PPI当月同比', strokeWidth: 2.5, pointOffsets: { '2026-10': 14 } },
              ]}
              yAxisDomain={[-7, 11]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['PPI当月同比']}
              highlightPeriods={['2026-10']}
              xAxisTicks={ppiHalfYearTicks}
              unit="%"
              yAxisTickFormatter={(val) => `${val}`}
            />
          </ChartContainer>
          <ChartContainer delay="720ms" className="pb-8" ariaLabel="生产资料与生活资料当月同比双线与剪刀差阴影，标注 9 月与 10 月数据">
            <div className="w-full h-full flex flex-col">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
                  生产资料、生活资料当月同比
                </h3>
                <p className="text-xs text-webank-subtext mt-1">数据来源：国家统计局 | 单位：%</p>
              </div>
              <div className="flex-grow min-h-0">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={ppiMaterialsGapData}
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
                      ticks={ppiHalfYearTicks}
                    />
                    <YAxis
                      domain={[-8, 13]}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: uiColors.tickSecondary, fontSize: 10 }}
                      tickFormatter={(val) => `${val}%`}
                    />
                    <Tooltip content={ppiGapTooltip} cursor={{ stroke: uiColors.cursor, strokeWidth: 1 }} />
                    <Legend
                      verticalAlign="bottom"
                      align="center"
                      wrapperStyle={{ paddingBottom: '10px', paddingTop: '20px' }}
                      content={({ payload }: any) => {
                        const order = ['生产资料当月同比', '生活资料当月同比'];
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
                      dataKey="materialsGap"
                      name="剪刀差"
                      legendType="none"
                      fill="#fecaca"
                      fillOpacity={0.45}
                      stroke="none"
                      isAnimationActive={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="productionMaterialsYoy"
                      name="生产资料当月同比"
                      stroke="#b91c1c"
                      strokeWidth={2.5}
                      dot={(props: any) => {
                        const period = props.payload?.period;
                        if (period !== '2026-09' && period !== '2026-10') return null as any;
                        const isSep = period === '2026-09';
                        // 9 月标注放点左上，10 月放点右下，避免两条相邻月份的标注重叠
                        return (
                          <g key={`dot-production-${props.index}`}>
                            <circle cx={props.cx} cy={props.cy} r={3} fill="#b91c1c" stroke="white" strokeWidth={1.5} />
                            <text
                              x={props.cx}
                              y={props.cy}
                              dx={isSep ? -6 : 8}
                              dy={isSep ? -8 : 12}
                              fill="#b91c1c"
                              fontSize={10}
                              fontWeight={600}
                              textAnchor={isSep ? 'end' : 'start'}
                            >
                              {props.payload.productionMaterialsYoy}
                            </text>
                          </g>
                        );
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="livingGoodsYoy"
                      name="生活资料当月同比"
                      stroke="#2563eb"
                      strokeWidth={2.5}
                      dot={(props: any) => {
                        const period = props.payload?.period;
                        if (period !== '2026-09' && period !== '2026-10') return null as any;
                        const isSep = period === '2026-09';
                        return (
                          <g key={`dot-living-${props.index}`}>
                            <circle cx={props.cx} cy={props.cy} r={3} fill="#2563eb" stroke="white" strokeWidth={1.5} />
                            <text
                              x={props.cx}
                              y={props.cy}
                              dx={isSep ? -6 : 8}
                              dy={isSep ? -8 : 12}
                              fill="#2563eb"
                              fontSize={10}
                              fontWeight={600}
                              textAnchor={isSep ? 'end' : 'start'}
                            >
                              {props.payload.livingGoodsYoy}
                            </text>
                          </g>
                        );
                      }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </ChartContainer>
        </>
      }
    />
  );
};
