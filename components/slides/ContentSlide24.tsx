import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { investmentData, housePriceYoyData, housePriceMomData } from '../../data';

export const ContentSlide24: React.FC = () => {
  const investmentLineConfigs: LineConfig[] = [
    { dataKey: 'realEstateInvestment', name: '开发投资', strokeWidth: 2.5, labelDY: -8 },
    { dataKey: 'newConstruction', name: '新开工', strokeWidth: 2, labelDY: 8 },
    { dataKey: 'salesArea', name: '销售面积', strokeWidth: 2, labelDY: -8 },
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
          <BaseCard title="核心拖累项仍在筑底阶段" delay="0ms" variant="accent">
            <p>
              一季度，全国房地产开发投资<span className="text-red-500 font-semibold">17720亿元</span>，同比<span className="text-green-500 font-semibold">下降11.2%</span>，降幅比1-2月份扩大0.1个百分点。地产投资仍深陷两位数负增长区间，是拖累固定资产投资与内需的主要短板。
            </p>
          </BaseCard>
          <BaseCard title="供需双弱，房价指数维持下行" delay="120ms">
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
              yAxisDomain={[-30, 5]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['开发投资', '新开工', '销售面积', '按揭贷款']}
              xAxisTickCount={5}
            />
          </ChartContainer>

          <ChartContainer delay="600ms">
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

          <ChartContainer delay="720ms">
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
