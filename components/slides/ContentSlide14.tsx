import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseBarChart } from '../base/BaseBarChart';
import { retailTrendData, cityRetailData } from '../../data';

// 五一假期出游数据（官方来源：文化和旅游部）
const laborDayData = [
  { period: '2023年', trips: 2.74, spending: 1480.56 },
  { period: '2024年', trips: 2.95, spending: 1668.9 },
  { period: '2025年', trips: 3.14, spending: 1802.69 },
  { period: '2026年', trips: 3.25, spending: 1854.92 },
];

const retailChartData = retailTrendData.filter((d) => d.period >= '2024-06');
const cityChartData = cityRetailData.filter((d) => d.period >= '2024-06');
const juneCityRetail = cityRetailData.find((d) => d.period === '2026-06')!;
const fmtPct = (v: number | null) => (v == null ? '—' : `${v.toFixed(1)}%`);

export const ContentSlide14: React.FC = () => {
  return (
    <BaseContentSlide
      title="上半年社零回落，分化特征明显"
      cardColumns={3}
      chartColumns={3}
      cards={
        <>
          <BaseCard title="社零总量承压：实物消费走弱，服务尚有韧性" delay="0ms" variant="accent">
            <p>
              上半年社零累计仅增长<span className="font-bold text-green-600">1.3%</span>，二季度社零同比增长<span className="font-bold text-green-600">0.2%</span>，较一季度（<span className="text-webank-blue">2.4%</span>）明显放缓。5月社会消费品零售总额同比<span className="font-bold text-green-600">-0.6%</span>，为2023年以来首次单月转负。
            </p>
            <p>
              结构分化：服务零售上半年累计同比<span className="font-bold text-red-500">5.3%</span>保持韧性格局，商品零售仅<span className="font-bold text-green-600">0.2%</span>，服务与商品增长分化特征显著。
            </p>
          </BaseCard>
          <BaseCard title="一线城市明显分化，广州韧性突出" delay="120ms">
            <p>
              四大一线城市消费走势分化：北京累计同比<span className="font-bold text-green-600">‑2.2%</span>、上海<span className="font-bold text-green-600">0.7%</span>、深圳<span className="font-bold text-green-600">1.2%</span>，广州达到<span className="font-bold text-red-500">2.9%</span>，表现显著优于其余一线。
            </p>
            <p>
              广州的消费拉动来自服务与汽车双轮驱动：餐饮收入增长<span className="font-bold text-webank-blue">5.8%</span>，汽车消费增长<span className="font-bold text-red-500">8.2%</span>，新能源车增速<span className="font-bold text-red-500">29.2%</span>，对本地消费形成有力支撑。
            </p>
          </BaseCard>
          <BaseCard title="节日对消费促进微弱" delay="240ms">
            <div className="space-y-2">
              <p>
                五一假期出行人次<span className="text-black">3.25亿</span>，增长<span className="text-black">3.6%</span>，出行总花费<span className="text-black">1855亿元</span>，同比增长<span className="text-black">2.9%</span>，人均支出约<span className="text-black">571元</span>，终结23年以来人均花费连续上行（540→566→574元）的走势。
              </p>
              <p>
                618综合电商销售额<span className="text-black">8636亿元</span>，同比增长<span className="text-black">0.9%</span>，调研显示<span className="text-black">72.7%</span>的消费者今年618的消费心态比往年更理性或谨慎。
              </p>
            </div>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <BaseLineChart
              title="社会消费品零售总额、商品零售及服务零售累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              data={retailChartData}
              lines={[
                { dataKey: 'totalRetail', name: '社零总额:累计同比', strokeWidth: 2.5, labelDY: -14 },
                { dataKey: 'goodsRetail', name: '商品零售:累计同比', labelDY: -10 },
                { dataKey: 'serviceRetail', name: '服务零售:累计同比', labelDY: -8 },
              ]}
              legendOrder={['社零总额:累计同比', '商品零售:累计同比', '服务零售:累计同比']}
              yAxisDomain={[2, 14]}
              showYAxis
              showReferenceLine
              referenceLineY={0}
              xAxisTickCount={8}
            />
          </ChartContainer>
          <ChartContainer delay="720ms">
            <BaseLineChart
              title="多城市社会消费品零售总额累计同比"
              subtitle="数据来源：深圳/广州统计局、国家统计局 | 单位：%"
              data={cityChartData}
              lines={[
                { dataKey: 'shenzhen', name: '深圳', strokeWidth: 2, labelDY: 14, pointOffsets: { '2026-06': 14 } },
                { dataKey: 'shanghai', name: '上海', strokeWidth: 2, labelDY: 8, pointOffsets: { '2026-06': 19} },
                { dataKey: 'beijing', name: '北京', strokeWidth: 2 },
                { dataKey: 'guangzhou', name: '广州', strokeWidth: 2, labelDY: -14, pointOffsets: { '2026-06': -14 } },
              ]}
              legendOrder={['深圳', '上海', '北京', '广州']}
              yAxisDomain={[-6, 12]}
              showYAxis
              showReferenceLine
              referenceLineY={0}
              xAxisTickCount={8}
            />
          </ChartContainer>
          <ChartContainer delay="840ms">
            <BaseBarChart
              title="五一假期出游人次与旅游消费"
              subtitle="数据来源：文化和旅游部 | 出游人次：亿人；旅游花费：亿元"
              data={laborDayData}
              xAxisKey="period"
              bars={[
                { dataKey: 'trips', name: '出游人次', color: '#64748b' },
              ]}
              lines={[
                { dataKey: 'spending', name: '旅游花费', color: '#f97316', yAxisId: 'right', strokeWidth: 2.5 },
              ]}
              yAxisDomain={[0, 4]}
              showYAxis
              showLineYAxis
              lineAxisDomain={[1400, 2000]}
              barSize={40}
              showLabels
              labelFormatter={(v: any) => v.toFixed(2)}
              unit="亿人"
              lineUnit="亿元"
              lineShowDot
              lineLabelFormatter={(v: any) => `${v}`}
              legendOrder={['出游人次', '旅游花费']}
              yAxisTickFormatter={(v) => `${v}`}
              lineYAxisTickFormatter={(v) => `${v}`}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
