import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { BaseBarChart, BarConfig, BarLineConfig } from '../base/BaseBarChart';
import { investmentData, housePriceYoyData, housePriceMomData } from '@/data/realEstateExtra';

// 房地产开发投资累计同比折线图配置
const investmentLineConfigs: LineConfig[] = [
  { dataKey: 'realEstateInvestment', name: '房地产开发投资', strokeWidth: 2.5 },
  { dataKey: 'newConstruction', name: '新开工面积', strokeWidth: 2 },
  { dataKey: 'salesArea', name: '销售面积', strokeWidth: 2, labelDY: 12 },
  { dataKey: 'personalMortgage', name: '个人按揭贷款', strokeWidth: 1.5, labelDY: 12 },
];

// 房价同比折线图配置
const priceYoyLineConfigs: LineConfig[] = [
  { dataKey: 'newHousePrice', name: '新建商品住宅价格指数', strokeWidth: 2.5 },
  { dataKey: 'secondHandPrice', name: '二手住宅价格指数', strokeWidth: 2 },
];

// 房价环比折线图配置
const priceMomLineConfigs: LineConfig[] = [
  { dataKey: 'firstTierNew', name: '一线城市新建', strokeWidth: 2 },
  { dataKey: 'secondTierNew', name: '二线城市新建', strokeWidth: 2 },
  { dataKey: 'firstTierUsed', name: '一线城市二手', strokeWidth: 1.5, labelDY: 10 },
  { dataKey: 'secondTierUsed', name: '二线城市二手', strokeWidth: 1.5, labelDY: 10 },
];

export const ContentSlide20: React.FC = () => {
  return (
    <BaseContentSlide
      title="二季度房地产：投资降幅扩大至-18%，新开工与销售面积跌幅加深拖累开发投资"
      cardColumns={3}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-3 mb-3 flex-shrink-0">
          <BaseCard title="① 开发投资降幅持续扩大" delay="0ms" variant="accent">
            <p>
              二季度房地产开发投资累计同比降幅扩大至<span className="text-red-500 font-semibold">-18.0%</span>（Q1为-11.2%），拖累固定资产投资整体表现。
            </p>
            <p className="mt-2">
              6月当月投资同比下降约22%，绝对量处于近年同期低位。新开工面积、销售面积、个人按揭贷款降幅均超20%，资金来源持续收缩。（图1）
            </p>
          </BaseCard>
          <BaseCard title="② 房价同比跌幅小幅收窄" delay="120ms">
            <p>
              6月70城新建商品住宅价格指数同比<span className="text-green-600 font-semibold">-3.54%</span>，较Q1（-3.59%）略有收窄；二手住宅同比<span className="text-green-600 font-semibold">-6.25%</span>，同样边际改善。
            </p>
            <p className="mt-2">
              但环比看，4-5月一线城市新房价格环比转负，6月略有企稳。房价整体仍处于负区间，以价换量态势延续。（图2）
            </p>
          </BaseCard>
          <BaseCard title="③ 以价换量难持续" delay="240ms">
            <p>
              销售面积累计同比降至<span className="text-red-500 font-semibold">-20.1%</span>，降幅较Q1扩大近10个百分点。居民购房意愿偏弱，按揭贷款降幅扩大至-45.8%。
            </p>
            <p className="mt-2">
              政策端"白名单"贷款、收储等举措仍在推进，但传导至投资端仍需时日，短期投资压力不减。（图3）
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 - 3列：图1左、图2中、图3右 */}
        <div className="flex-1 grid grid-cols-3 gap-3 min-h-0">
          {/* 左列：图1 - 房地产投资 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={investmentData}
              title="图1 房地产投资及分项累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={investmentLineConfigs}
              yAxisDomain={[-50, 5]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['房地产开发投资', '新开工面积', '销售面积', '个人按揭贷款']}
              xAxisTicks={['2025-02', '2025-06', '2025-12', '2026-02', '2026-04', '2026-06']}
            />
          </ChartContainer>

          {/* 中列：图2 - 房价同比 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={housePriceYoyData.slice(-18)}
              title="图2 70城住宅价格指数同比变化"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={priceYoyLineConfigs}
              yAxisDomain={[-10, 2]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['新建商品住宅价格指数', '二手住宅价格指数']}
              xAxisTicks={['2025-01', '2025-04', '2025-07', '2025-10', '2026-01', '2026-04', '2026-06']}
            />
          </ChartContainer>

          {/* 右列：图3 - 房价环比 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={housePriceMomData.slice(-12)}
              title="图3 70城住宅价格指数环比变化"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={priceMomLineConfigs}
              yAxisDomain={[-1.5, 1]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['一线城市新建', '二线城市新建', '一线城市二手', '二线城市二手']}
              xAxisTicks={['2025-07', '2025-10', '2026-01', '2026-04', '2026-06']}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
