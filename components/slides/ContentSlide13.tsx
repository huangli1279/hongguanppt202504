import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseBarChart } from '../base/BaseBarChart';
import { seriesColors } from '../../utils/chartColors';

// 左图：社零累计同比 vs 除汽车外社零累计同比（%）
const retailDualData = [
  { period: '2025-09', totalRetail: 4.5, exAutoRetail: 4.8 },
  { period: '2025-12', totalRetail: 3.69, exAutoRetail: 4.0 },
  { period: '2026-02', totalRetail: 2.8, exAutoRetail: 3.3 },
  { period: '2026-03', totalRetail: 2.4, exAutoRetail: 2.8 },
  { period: '2026-04', totalRetail: 1.9, exAutoRetail: 3.1 },
  { period: '2026-05', totalRetail: 1.4, exAutoRetail: 2.9 },
  { period: '2026-06', totalRetail: 1.3, exAutoRetail: 2.8 },
  { period: '2026-07', totalRetail: 1.2, exAutoRetail: 3.0 },
  { period: '2026-08', totalRetail: 1.15, exAutoRetail: 3.5 },
  { period: '2026-09', totalRetail: 1.1, exAutoRetail: 3.9 },
];

// 中图：分地区社零累计同比（%）
const cityRetailSepData = [
  { period: '北京', value: -0.7, fill: '#16a34a' },
  { period: '上海', value: -1.1, fill: '#16a34a' },
  { period: '广州', value: 2.7, fill: '#dc2626' },
  { period: '深圳', value: 2.3, fill: '#dc2626' },
];

// 右图：国庆期间出游人次与人均消费
const nationalDayData = [
  { period: '2024年', trips: 7.65, perCapita: 916 },
  { period: '2025年', trips: 7.77, perCapita: 911 },
  { period: '2026年', trips: 8.26, perCapita: 894 },
];

export const ContentSlide13: React.FC = () => {
  return (
    <BaseContentSlide
      title="消费总览：社零9月回升至1.1%"
      cardColumns={3}
      chartColumns={3}
      cards={
        <>
          <BaseCard title="社零总量：9月回升" delay="0ms" variant="accent">
            <p>
              1—9月社零累计<span className="font-bold">37.0万亿元</span>，9月单月<span className="font-bold">4.24万亿元</span>，当月同比<span className="font-bold text-red-500">+1.1%</span>，较7月（0.6%）和8月（0.4%）有所回升。剔除汽车后的社零9月<span className="font-bold text-red-500">+3.9%</span>，为去年11月以来最高。前三季度服务零售额<span className="font-bold text-red-500">+5.0%</span>、商品零售额<span className="font-bold text-green-600">+1.0%</span>，网上零售<span className="font-bold text-red-500">+4.4%</span>，服务增速继续快于商品。
            </p>
          </BaseCard>

          <BaseCard title="分地区：一线城市分化" delay="120ms">
            <p>
              北京前三季度社零<span className="font-bold text-green-600">-0.7%</span>、上海<span className="font-bold text-green-600">-1.1%</span>均为负增长；广州（1—8月）增长<span className="font-bold text-red-500">2.7%</span>；深圳受AI快速发展影响，1—9月社零增长<span className="font-bold text-red-500">2.3%</span>。
            </p>
          </BaseCard>

          <BaseCard title="国庆数据：入境游亮点" delay="240ms">
            <p>
              2026年国庆节假期7天，全国国内出游<span className="font-bold">8.26亿人次</span>，出游总花费<span className="font-bold">7383.75亿元</span>，日均同比分别增长<span className="font-bold text-red-500">6.3%</span>、<span className="font-bold text-red-500">4.3%</span>（25年较24年同比人次+1.6%、消费+1.0%）。入境游成亮点，三季度免签入境外国人增速<span className="font-bold text-red-500">+48.3%</span>，中信测算1位外国游客在华花费约为16人次国内出游，政策效果初现。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms" ariaLabel="社零累计同比与除汽车外社零双线图">
            <BaseLineChart
              data={retailDualData}
              title="社零累计同比与除汽车外社零"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'totalRetail', name: '社零累计同比', color: seriesColors[0], strokeWidth: 2.5, pointOffsets: { '2026-09': -12 } },
                { dataKey: 'exAutoRetail', name: '除汽车外社零累计同比', color: seriesColors[1], strokeWidth: 2.5, pointOffsets: { '2026-09': 12 } },
              ]}
              legendOrder={['社零累计同比', '除汽车外社零累计同比']}
              yAxisDomain={[0, 6]}
              showYAxis
              showReferenceLine
              referenceLineY={0}
              highlightPeriods={['2026-09']}
            />
          </ChartContainer>

          <ChartContainer delay="720ms" ariaLabel="分地区社零累计同比柱状图">
            <BaseBarChart
              data={cityRetailSepData}
              title="分地区社零累计同比"
              subtitle="数据来源：各地统计局 | 单位：%"
              xAxisKey="period"
              bars={[{ dataKey: 'value', name: '累计同比' }]}
              yAxisDomain={[-2, 4]}
              showYAxis
              showReferenceLine
              referenceLineY={0}
              showLabels
              labelFormatter={(v: any) => `${Number(v).toFixed(1)}%`}
              barSize={40}
            />
          </ChartContainer>

          <ChartContainer delay="840ms" ariaLabel="国庆期间出游人次与人均消费图">
            <BaseBarChart
              data={nationalDayData}
              title="国庆期间出游人次与人均消费"
              subtitle="数据来源：文化和旅游部 | 出游人次：亿人 | 人均消费：元"
              xAxisKey="period"
              bars={[{ dataKey: 'trips', name: '出游人次', color: '#64748b' }]}
              lines={[{ dataKey: 'perCapita', name: '人均消费', color: '#f97316', yAxisId: 'right', strokeWidth: 2.5 }]}
              yAxisDomain={[0, 10]}
              showYAxis
              showLineYAxis
              lineAxisDomain={[850, 950]}
              barSize={40}
              showLabels
              labelFormatter={(v: any) => Number(v).toFixed(2)}
              unit="亿人"
              lineUnit="元"
              lineShowDot
              lineLabelFormatter={(v: any) => `${Math.round(v)}`}
              legendOrder={['出游人次', '人均消费']}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
