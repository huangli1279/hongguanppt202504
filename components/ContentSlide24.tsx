import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseLineChart, LineConfig } from './BaseLineChart';

const investmentData = [
  { period: '2024-05', realEstateInvestment: -10.1, salesArea: -20.3, newConstruction: -24.2, personalMortgage: -40.2 },
  { period: '2024-06', realEstateInvestment: -10.1, salesArea: -19.0, newConstruction: -23.7, personalMortgage: -37.7 },
  { period: '2024-07', realEstateInvestment: -10.2, salesArea: -18.6, newConstruction: -23.2, personalMortgage: -37.3 },
  { period: '2024-08', realEstateInvestment: -10.2, salesArea: -18.0, newConstruction: -22.5, personalMortgage: -35.8 },
  { period: '2024-09', realEstateInvestment: -10.1, salesArea: -17.1, newConstruction: -22.2, personalMortgage: -34.9 },
  { period: '2024-10', realEstateInvestment: -10.3, salesArea: -15.8, newConstruction: -22.6, personalMortgage: -32.8 },
  { period: '2024-11', realEstateInvestment: -10.4, salesArea: -14.3, newConstruction: -23.0, personalMortgage: -30.4 },
  { period: '2024-12', realEstateInvestment: -10.6, salesArea: -12.9, newConstruction: -23.0, personalMortgage: -27.9 },
  { period: '2025-02', realEstateInvestment: -9.8, salesArea: -5.1, newConstruction: -29.6, personalMortgage: -11.7 },
  { period: '2025-03', realEstateInvestment: -9.9, salesArea: -3.0, newConstruction: -24.4, personalMortgage: -7.0 },
  { period: '2025-04', realEstateInvestment: -10.3, salesArea: -2.8, newConstruction: -23.8, personalMortgage: -8.5 },
  { period: '2025-05', realEstateInvestment: -10.7, salesArea: -2.9, newConstruction: -22.8, personalMortgage: -8.5 },
  { period: '2025-06', realEstateInvestment: -11.2, salesArea: -3.5, newConstruction: -20.0, personalMortgage: -11.4 },
  { period: '2025-07', realEstateInvestment: -12.0, salesArea: -4.0, newConstruction: -19.4, personalMortgage: -9.3 },
  { period: '2025-08', realEstateInvestment: -12.9, salesArea: -4.7, newConstruction: -19.5, personalMortgage: -10.5 },
  { period: '2025-09', realEstateInvestment: -13.9, salesArea: -5.5, newConstruction: -18.9, personalMortgage: -10.6 },
  { period: '2025-10', realEstateInvestment: -14.7, salesArea: -6.8, newConstruction: -19.8, personalMortgage: -12.8 },
  { period: '2025-11', realEstateInvestment: -15.9, salesArea: -7.8, newConstruction: -20.5, personalMortgage: -15.1 },
  { period: '2025-12', realEstateInvestment: -17.2, salesArea: -8.7, newConstruction: -20.4, personalMortgage: -17.8 },
  { period: '2026-02', realEstateInvestment: -11.1, salesArea: -13.5, newConstruction: -23.1, personalMortgage: -41.9 },
  { period: '2026-03', realEstateInvestment: -11.2, salesArea: -10.4, newConstruction: -20.3, personalMortgage: -34.6 },
];

const housePriceYoyData = [
  { period: '2024-01', newHousePrice: -1.24, secondHandPrice: -4.45 },
  { period: '2024-02', newHousePrice: -1.90, secondHandPrice: -5.15 },
  { period: '2024-03', newHousePrice: -2.65, secondHandPrice: -5.90 },
  { period: '2024-04', newHousePrice: -3.51, secondHandPrice: -6.79 },
  { period: '2024-05', newHousePrice: -4.30, secondHandPrice: -7.49 },
  { period: '2024-06', newHousePrice: -4.88, secondHandPrice: -7.87 },
  { period: '2024-07', newHousePrice: -5.28, secondHandPrice: -8.17 },
  { period: '2024-08', newHousePrice: -5.69, secondHandPrice: -8.59 },
  { period: '2024-09', newHousePrice: -6.09, secondHandPrice: -9.02 },
  { period: '2024-10', newHousePrice: -6.22, secondHandPrice: -8.94 },
  { period: '2024-11', newHousePrice: -6.07, secondHandPrice: -8.54 },
  { period: '2024-12', newHousePrice: -5.73, secondHandPrice: -8.11 },
  { period: '2025-01', newHousePrice: -5.43, secondHandPrice: -7.80 },
  { period: '2025-02', newHousePrice: -5.22, secondHandPrice: -7.53 },
  { period: '2025-03', newHousePrice: -4.99, secondHandPrice: -7.25 },
  { period: '2025-04', newHousePrice: -4.55, secondHandPrice: -6.76 },
  { period: '2025-05', newHousePrice: -4.08, secondHandPrice: -6.30 },
  { period: '2025-06', newHousePrice: -3.69, secondHandPrice: -6.09 },
  { period: '2025-07', newHousePrice: -3.37, secondHandPrice: -5.85 },
  { period: '2025-08', newHousePrice: -2.95, secondHandPrice: -5.51 },
  { period: '2025-09', newHousePrice: -2.66, secondHandPrice: -5.24 },
  { period: '2025-10', newHousePrice: -2.60, secondHandPrice: -5.40 },
  { period: '2025-11', newHousePrice: -2.78, secondHandPrice: -5.70 },
  { period: '2025-12', newHousePrice: -3.05, secondHandPrice: -6.07 },
  { period: '2026-01', newHousePrice: -3.33, secondHandPrice: -6.24 },
  { period: '2026-02', newHousePrice: -3.46, secondHandPrice: -6.31 },
  { period: '2026-03', newHousePrice: -3.59, secondHandPrice: -6.33 },
];

const housePriceMomData = [
  { period: '2024-01', firstTierNew: -0.3, secondTierNew: -0.4, firstTierUsed: -1.0, secondTierUsed: -0.6 },
  { period: '2024-02', firstTierNew: -0.3, secondTierNew: -0.3, firstTierUsed: -0.8, secondTierUsed: -0.6 },
  { period: '2024-03', firstTierNew: -0.1, secondTierNew: -0.3, firstTierUsed: -0.7, secondTierUsed: -0.5 },
  { period: '2024-04', firstTierNew: -0.6, secondTierNew: -0.5, firstTierUsed: -1.1, secondTierUsed: -0.9 },
  { period: '2024-05', firstTierNew: -0.7, secondTierNew: -0.7, firstTierUsed: -1.2, secondTierUsed: -1.0 },
  { period: '2024-06', firstTierNew: -0.5, secondTierNew: -0.7, firstTierUsed: -0.4, secondTierUsed: -0.9 },
  { period: '2024-07', firstTierNew: -0.5, secondTierNew: -0.6, firstTierUsed: -0.5, secondTierUsed: -0.8 },
  { period: '2024-08', firstTierNew: -0.3, secondTierNew: -0.7, firstTierUsed: -0.9, secondTierUsed: -1.0 },
  { period: '2024-09', firstTierNew: -0.5, secondTierNew: -0.7, firstTierUsed: -1.2, secondTierUsed: -0.9 },
  { period: '2024-10', firstTierNew: -0.2, secondTierNew: -0.5, firstTierUsed: 0.4, secondTierUsed: -0.4 },
  { period: '2024-11', firstTierNew: 0.0, secondTierNew: -0.1, firstTierUsed: 0.4, secondTierUsed: -0.2 },
  { period: '2024-12', firstTierNew: 0.2, secondTierNew: 0.0, firstTierUsed: 0.3, secondTierUsed: -0.3 },
  { period: '2025-01', firstTierNew: 0.1, secondTierNew: 0.1, firstTierUsed: 0.1, secondTierUsed: -0.3 },
  { period: '2025-02', firstTierNew: 0.1, secondTierNew: 0.0, firstTierUsed: -0.1, secondTierUsed: -0.4 },
  { period: '2025-03', firstTierNew: 0.1, secondTierNew: 0.0, firstTierUsed: 0.2, secondTierUsed: -0.2 },
  { period: '2025-04', firstTierNew: 0.0, secondTierNew: 0.0, firstTierUsed: -0.2, secondTierUsed: -0.4 },
  { period: '2025-05', firstTierNew: -0.2, secondTierNew: -0.2, firstTierUsed: -0.7, secondTierUsed: -0.5 },
  { period: '2025-06', firstTierNew: -0.3, secondTierNew: -0.2, firstTierUsed: -0.7, secondTierUsed: -0.6 },
  { period: '2025-07', firstTierNew: -0.2, secondTierNew: -0.4, firstTierUsed: -1.0, secondTierUsed: -0.5 },
  { period: '2025-08', firstTierNew: -0.1, secondTierNew: -0.3, firstTierUsed: -1.0, secondTierUsed: -0.6 },
  { period: '2025-09', firstTierNew: -0.3, secondTierNew: -0.4, firstTierUsed: -1.0, secondTierUsed: -0.7 },
  { period: '2025-10', firstTierNew: -0.3, secondTierNew: -0.4, firstTierUsed: -0.9, secondTierUsed: -0.6 },
  { period: '2025-11', firstTierNew: -0.4, secondTierNew: -0.3, firstTierUsed: -1.1, secondTierUsed: -0.6 },
  { period: '2025-12', firstTierNew: -0.3, secondTierNew: -0.4, firstTierUsed: -0.9, secondTierUsed: -0.7 },
  { period: '2026-01', firstTierNew: -0.3, secondTierNew: -0.3, firstTierUsed: -0.5, secondTierUsed: -0.5 },
  { period: '2026-02', firstTierNew: 0.0, secondTierNew: -0.2, firstTierUsed: -0.1, secondTierUsed: -0.4 },
  { period: '2026-03', firstTierNew: 0.2, secondTierNew: -0.2, firstTierUsed: 0.4, secondTierUsed: -0.2 },
];

export const ContentSlide24: React.FC = () => {
  const investmentLineConfigs: LineConfig[] = [
    { dataKey: 'realEstateInvestment', name: '开发投资', strokeWidth: 2.5, labelDY: -8 },
    { dataKey: 'newConstruction', name: '新开工', strokeWidth: 2, labelDY: 8 },
    { dataKey: 'salesArea', name: '销售面积', strokeWidth: 2, labelDY: -8 },
    { dataKey: 'personalMortgage', name: '按揭贷款', strokeWidth: 2, labelDY: 8 },
  ];

  const priceYoyLineConfigs: LineConfig[] = [
    { dataKey: 'newHousePrice', name: '新建商品住房价格指数同比', strokeWidth: 2.5, labelDY: -8 },
    { dataKey: 'secondHandPrice', name: '二手住房价格指数同比', strokeWidth: 2, labelDY: 8 },
  ];

  const priceMomLineConfigs: LineConfig[] = [
    { dataKey: 'firstTierNew', name: '一线新房', strokeWidth: 2.5, labelDY: -8 },
    { dataKey: 'secondTierNew', name: '二线新房', strokeWidth: 2, labelDY: 8 },
    { dataKey: 'firstTierUsed', name: '一线二手房', strokeWidth: 2, labelDY: -8 },
    { dataKey: 'secondTierUsed', name: '二线二手房', strokeWidth: 2, labelDY: 8 },
  ];

  return (
    <BaseContentSlide
      title="地产投资下行11.2%仍在寻底，新开工面积累计同比降20.3%"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-2 gap-4 mb-4 flex-shrink-0">
          <BaseCard title="核心拖累项仍在筑底阶段" delay="200ms" variant="accent">
            <p>
              一季度，全国房地产开发投资<span className="text-red-500 font-semibold">17720亿元</span>，同比下降
              <span className="text-red-500 font-semibold">11.2%</span>，降幅比1-2月份扩大0.1个百分点。地产投资仍深陷两位数负增长区间，是拖累固定资产投资与内需的主要短板。
            </p>
          </BaseCard>
          <BaseCard title="供需双弱，房价指数维持下行" delay="400ms">
            <p>
              居民中长期贷款同比显著少增，与新房销售疲弱相互印证，购房加杠杆意愿尚未实质性恢复。70城房价同比延续下行；环比看一线城市转正，更多来自政策驱动与季节性因素，二线城市仍在下降。
            </p>
          </BaseCard>
        </div>

        <div className="flex-1 grid grid-cols-3 gap-5 min-h-0">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={investmentData}
              title="房地产投资累计同比数据"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={investmentLineConfigs}
              yAxisDomain={[-45, 5]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['开发投资', '新开工', '销售面积', '按揭贷款']}
              xAxisTickCount={5}
            />
          </ChartContainer>

          <ChartContainer delay="800ms">
            <BaseLineChart
              data={housePriceYoyData}
              title="70个大中城市房价指数同比变化"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={priceYoyLineConfigs}
              yAxisDomain={[-10, 1]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['新建商品住房价格指数同比', '二手住房价格指数同比']}
              xAxisTickCount={5}
            />
          </ChartContainer>

          <ChartContainer delay="1000ms">
            <BaseLineChart
              data={housePriceMomData}
              title="一线/二线城市住宅价格指数（环比）"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={priceMomLineConfigs}
              yAxisDomain={[-1.4, 0.6]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['一线新房', '二线新房', '一线二手房', '二线二手房']}
              xAxisTickCount={5}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
