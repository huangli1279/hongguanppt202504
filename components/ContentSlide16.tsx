import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseLineChart } from './BaseLineChart';
import { BaseBarChart } from './BaseBarChart';
import { BaseCard } from './BaseCard';

const retailMonthlyCategoryData = [
  { period: '2023-02', totalRetail: 3.5, cateringRevenue: 9.2, goodsRetail: 2.9 },
  { period: '2023-03', totalRetail: 10.6, cateringRevenue: 26.3, goodsRetail: 9.1 },
  { period: '2023-04', totalRetail: 18.4, cateringRevenue: 43.8, goodsRetail: 15.9 },
  { period: '2023-05', totalRetail: 12.7, cateringRevenue: 35.1, goodsRetail: 10.5 },
  { period: '2023-06', totalRetail: 3.1, cateringRevenue: 16.1, goodsRetail: 1.7 },
  { period: '2023-07', totalRetail: 2.5, cateringRevenue: 15.8, goodsRetail: 1.0 },
  { period: '2023-08', totalRetail: 4.6, cateringRevenue: 12.4, goodsRetail: 3.7 },
  { period: '2023-09', totalRetail: 5.5, cateringRevenue: 13.8, goodsRetail: 4.6 },
  { period: '2023-10', totalRetail: 7.6, cateringRevenue: 17.1, goodsRetail: 6.5 },
  { period: '2023-11', totalRetail: 10.1, cateringRevenue: 25.8, goodsRetail: 8.0 },
  { period: '2023-12', totalRetail: 7.4, cateringRevenue: 30.0, goodsRetail: 4.8 },
  { period: '2024-02', totalRetail: 5.5, cateringRevenue: 12.5, goodsRetail: 4.6 },
  { period: '2024-03', totalRetail: 3.1, cateringRevenue: 6.9, goodsRetail: 2.7 },
  { period: '2024-04', totalRetail: 2.3, cateringRevenue: 4.4, goodsRetail: 2.0 },
  { period: '2024-05', totalRetail: 3.7, cateringRevenue: 5.0, goodsRetail: 3.6 },
  { period: '2024-06', totalRetail: 2.0, cateringRevenue: 5.4, goodsRetail: 1.5 },
  { period: '2024-07', totalRetail: 2.7, cateringRevenue: 3.0, goodsRetail: 2.7 },
  { period: '2024-08', totalRetail: 2.1, cateringRevenue: 3.3, goodsRetail: 1.9 },
  { period: '2024-09', totalRetail: 3.2, cateringRevenue: 3.1, goodsRetail: 3.3 },
  { period: '2024-10', totalRetail: 4.8, cateringRevenue: 3.2, goodsRetail: 5.0 },
  { period: '2024-11', totalRetail: 3.0, cateringRevenue: 4.0, goodsRetail: 2.8 },
  { period: '2024-12', totalRetail: 3.7, cateringRevenue: 2.7, goodsRetail: 3.9 },
  { period: '2025-02', totalRetail: 4.0, cateringRevenue: 4.3, goodsRetail: 3.9 },
  { period: '2025-03', totalRetail: 5.9, cateringRevenue: 5.6, goodsRetail: 5.9 },
  { period: '2025-04', totalRetail: 5.1, cateringRevenue: 5.2, goodsRetail: 5.1 },
  { period: '2025-05', totalRetail: 6.4, cateringRevenue: 5.9, goodsRetail: 6.5 },
  { period: '2025-06', totalRetail: 4.8, cateringRevenue: 0.9, goodsRetail: 5.3 },
  { period: '2025-07', totalRetail: 3.7, cateringRevenue: 1.1, goodsRetail: 4.0 },
  { period: '2025-08', totalRetail: 3.4, cateringRevenue: 2.1, goodsRetail: 3.6 },
  { period: '2025-09', totalRetail: 3.05, cateringRevenue: 0.86, goodsRetail: 3.32 },
  { period: '2025-10', totalRetail: 2.93, cateringRevenue: 3.76, goodsRetail: 2.83 },
  { period: '2025-11', totalRetail: 1.3, cateringRevenue: 3.2, goodsRetail: 1.0 },
  { period: '2025-12', totalRetail: 0.9, cateringRevenue: 2.2, goodsRetail: 0.7 },
  { period: '2026-02', totalRetail: 2.8, cateringRevenue: 4.8, goodsRetail: 2.5 },
  { period: '2026-03', totalRetail: 1.7, cateringRevenue: 2.9, goodsRetail: 1.5 },
];

const serviceRetailData = [
  { period: '2023-07', serviceRetail: 20.3 },
  { period: '2023-08', serviceRetail: 19.4 },
  { period: '2023-09', serviceRetail: 18.9 },
  { period: '2023-10', serviceRetail: 19.0 },
  { period: '2023-11', serviceRetail: 19.5 },
  { period: '2023-12', serviceRetail: 20.0 },
  { period: '2024-02', serviceRetail: 12.3 },
  { period: '2024-03', serviceRetail: 10.0 },
  { period: '2024-04', serviceRetail: 8.4 },
  { period: '2024-05', serviceRetail: 7.9 },
  { period: '2024-06', serviceRetail: 7.5 },
  { period: '2024-07', serviceRetail: 7.2 },
  { period: '2024-08', serviceRetail: 6.9 },
  { period: '2024-09', serviceRetail: 6.7 },
  { period: '2024-10', serviceRetail: 6.5 },
  { period: '2024-11', serviceRetail: 6.4 },
  { period: '2024-12', serviceRetail: 6.2 },
  { period: '2025-02', serviceRetail: 4.9 },
  { period: '2025-03', serviceRetail: 5.0 },
  { period: '2025-04', serviceRetail: 5.1 },
  { period: '2025-05', serviceRetail: 5.2 },
  { period: '2025-06', serviceRetail: 5.3 },
  { period: '2025-07', serviceRetail: 5.2 },
  { period: '2025-08', serviceRetail: 5.1 },
  { period: '2025-09', serviceRetail: 5.2 },
  { period: '2025-10', serviceRetail: 5.3 },
  { period: '2025-11', serviceRetail: 5.4 },
  { period: '2025-12', serviceRetail: 5.5 },
  { period: '2026-02', serviceRetail: 5.6 },
  { period: '2026-03', serviceRetail: 5.5 },
];

const springFestivalTravelData = [
  { period: '2024年', trips: 4.74, spending: 6326.87, days: '8天' },
  { period: '2025年', trips: 5.01, spending: 6770.02, days: '8天' },
  { period: '2026年', trips: 5.96, spending: 8034.83, days: '9天' },
];

export const ContentSlide16: React.FC = () => {
  return (
    <BaseContentSlide
      title="一季度社零稳步回暖至2.4%，服务增速继续快于商品"
      cardColumns={2}
      chartColumns={3}
      cards={
        <>
          <BaseCard title="总量温和修复" delay="200ms" variant="accent">
            <p>
              2026年1季度，社会消费品零售总额达到<span className="font-bold text-webank-blue">12.8万亿元</span>，同比增长<span className="font-bold text-webank-blue">2.4%</span>。其中3月单月受春节后需求季节性回落影响，增速放缓至<span className="font-bold text-webank-blue">1.7%</span>。
            </p>
          </BaseCard>
          <BaseCard title="服务消费仍是核心驱动" delay="400ms">
            <p>
              1-3月份服务零售额同比增长<span className="font-bold text-webank-blue">5.5%</span>，持续快于商品零售额（<span className="font-bold text-webank-blue">2.2%</span>），餐饮收入增长<span className="font-bold text-webank-blue">4.2%</span>；春节假期国内出游<span className="font-bold text-webank-blue">5.96亿人次</span>，总花费超<span className="font-bold text-webank-blue">8000亿元</span>，均创历史新高。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <BaseLineChart
              title="社会消费品零售总额及分类当月同比数据"
              subtitle="数据来源：国家统计局 | 单位：%"
              data={retailMonthlyCategoryData}
              lines={[
                { dataKey: 'totalRetail', name: '社零总额:当月同比', strokeWidth: 2.5 },
                { dataKey: 'cateringRevenue', name: '餐饮收入:当月同比', labelDY: -8 },
                { dataKey: 'goodsRetail', name: '商品零售:当月同比', labelDY: 12 },
              ]}
              yAxisDomain={[0, 45]}
              showYAxis={true}
              xAxisTickCount={6}
            />
          </ChartContainer>
          <ChartContainer delay="800ms">
            <BaseLineChart
              title="社会消费品零售总额:服务零售额:累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              data={serviceRetailData}
              lines={[
                { dataKey: 'serviceRetail', name: '服务零售额:累计同比', strokeWidth: 2.5 },
              ]}
              yAxisDomain={[0, 22]}
              showYAxis={true}
              xAxisTickCount={6}
            />
          </ChartContainer>
          <ChartContainer delay="1000ms">
            <BaseBarChart
              title="春节国内旅游数据对比"
              subtitle="数据来源：文旅部 | 人次单位：亿；花费单位：亿元"
              data={springFestivalTravelData}
              bars={[
                { dataKey: 'trips', name: '春节国内出游人次' },
              ]}
              lines={[
                { dataKey: 'spending', name: '国内出游总花费', unit: '亿元', strokeWidth: 2.5 },
              ]}
              yAxisDomain={[0, 7]}
              lineAxisDomain={[5000, 8500]}
              showYAxis={true}
              showLineYAxis={true}
              barSize={24}
              unit="亿"
              lineUnit="亿元"
              yAxisTickFormatter={(value) => `${value}亿`}
              lineYAxisTickFormatter={(value) => `${value}`}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
