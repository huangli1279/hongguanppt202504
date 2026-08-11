import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseBarChart } from '../base/BaseBarChart';
import { retailTrendData, cityRetailData } from '../../data';

// 五一假期出游数据（官方来源：文化和旅游部）
const laborDayData = [
  { period: '2024年', trips: 2.95, spending: 1668.9 },
  { period: '2025年', trips: 3.14, spending: 1802.69 },
  { period: '2026年', trips: 3.25, spending: 1854.92 },
];

const retailChartData = retailTrendData.filter((d) => d.period >= '2024-06');
const cityChartData = cityRetailData.filter((d) => d.period >= '2024-06');
const juneCityRetail = cityRetailData.find((d) => d.period === '2026-06')!;
const fmtPct = (v: number | null) => (v == null ? '—' : `${v.toFixed(1)}%`);

export const ContentSlide13: React.FC = () => {
  return (
    <BaseContentSlide
      title="上半年社零回落，分化特征明显"
      cardColumns={3}
      chartColumns={3}
      cards={
        <>
          <BaseCard title="社零总量承压" delay="0ms" variant="accent">
            <p>
              上半年社零累计仅增长<span className="font-bold text-webank-blue">1.3%</span>，二季度社零同比增长<span className="font-bold text-webank-blue">0.2%</span>，较一季度（<span className="font-bold text-webank-blue">2.4%</span>）明显放缓。5月社会消费品零售总额同比<span className="font-bold text-webank-blue">-0.6%</span>，系2023年以来首次单月增速转负，其中餐饮收入<span className="font-bold text-webank-blue">0.6%</span>，商品零售<span className="font-bold text-webank-blue">-0.7%</span>，主要由高基数叠加内需不足导致。
            </p>
          </BaseCard>
          <BaseCard title="一线城市分化" delay="120ms">
            <p>
              上半年，北上深拖累全国社零增长——北京累计同比<span className="font-bold text-webank-blue">{fmtPct(juneCityRetail.beijing)}</span>、上海<span className="font-bold text-webank-blue">{fmtPct(juneCityRetail.shanghai)}</span>、深圳<span className="font-bold text-webank-blue">{fmtPct(juneCityRetail.shenzhen)}</span>，广州上半年社零累计同比<span className="font-bold text-webank-blue">{fmtPct(juneCityRetail.guangzhou)}</span>，在一线城市中一枝独秀，上半年广州餐饮收入增长<span className="font-bold text-webank-blue">5.8%</span>、汽车消费增长<span className="font-bold text-webank-blue">8.2%</span>，其中新能源车增长<span className="font-bold text-webank-blue">29.2%</span>。
            </p>
          </BaseCard>
          <BaseCard title="节日对消费促进微弱" delay="240ms">
            <div className="space-y-2">
              <p>
                五一假期出行人次<span className="font-bold text-webank-blue">3.25亿</span>，增长<span className="font-bold text-webank-blue">3.6%</span>，出行总花费<span className="font-bold text-webank-blue">1855亿元</span>，同比增长<span className="font-bold text-webank-blue">2.9%</span>，人均支出约<span className="font-bold text-webank-blue">571元</span>，终结23年以来人均花费连续上行（540→566→574元）的走势。
              </p>
              <p>
                618综合电商销售额<span className="font-bold text-webank-blue">8636亿元</span>，同比增长<span className="font-bold text-webank-blue">0.9%</span>，花旗集团称<span className="font-bold text-webank-blue">72.7%</span>的消费者今年618的消费心态比往年更理性或谨慎。
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
                { dataKey: 'totalRetail', name: '社零总额:累计同比', strokeWidth: 2.5 },
                { dataKey: 'goodsRetail', name: '商品零售:累计同比', labelDY: 12 },
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
                { dataKey: 'shenzhen', name: '深圳', strokeWidth: 2 },
                { dataKey: 'shanghai', name: '上海', strokeWidth: 2 },
                { dataKey: 'beijing', name: '北京', strokeWidth: 2 },
                { dataKey: 'guangzhou', name: '广州', strokeWidth: 2 },
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
              subtitle="数据来源：文化和旅游部数据中心 | 出游人次：亿人次；旅游花费：亿元"
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
              unit="亿人次"
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
