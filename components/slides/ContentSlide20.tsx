import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { BaseBarChart, BarConfig, BarLineConfig } from '../base/BaseBarChart';
import { investmentData, unsoldAreaData, housePriceMomData, nationalHousePriceMomData } from '@/data/realEstateExtra';

// 房地产销售面积 vs 开发投资 vs 新开工折线图配置
const investmentLineConfigs: LineConfig[] = [
  { dataKey: 'salesArea', name: '商品房销售面积', strokeWidth: 2.5 },
  { dataKey: 'realEstateInvestment', name: '房地产开发投资', strokeWidth: 2 },
  { dataKey: 'newConstruction', name: '新开工施工面积', strokeWidth: 2 },
];

// 商品房待售面积折线图配置
const unsoldAreaLineConfigs: LineConfig[] = [
  { dataKey: 'unsoldArea', name: '商品房待售面积', strokeWidth: 2.5 },
];

// 房价环比折线图配置
const priceMomLineConfigs: LineConfig[] = [
  { dataKey: 'firstTierNew', name: '一线新建', strokeWidth: 2 },
  { dataKey: 'secondTierNew', name: '二线新建', strokeWidth: 2 },
  { dataKey: 'firstTierUsed', name: '一线二手', strokeWidth: 1.5, labelDY: 10 },
  { dataKey: 'secondTierUsed', name: '二线二手', strokeWidth: 1.5, labelDY: 10 },
];

// 70城房价环比折线图配置
const nationalPriceMomLineConfigs: LineConfig[] = [
  { dataKey: 'nationalNew', name: '全国新建', strokeWidth: 2 },
  { dataKey: 'nationalUsed', name: '全国二手', strokeWidth: 2 },
];

export const ContentSlide20: React.FC = () => {
  return (
    <BaseContentSlide
      title="地产投资开发端跌幅扩大至18%，商品待售面积连续4个月同比下降，一线城市价格端出现企稳信号"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-3 mb-3 flex-shrink-0">
          <BaseCard title="① 开发投资延续惯性下探" delay="0ms" variant="accent">
            <p>
              上半年房地产开发投资同比跌幅扩大至<span className="text-green-600 font-bold">18%</span>（1-2月为<span className="text-green-600 font-bold">10.4%</span>），新开工面积降幅约<span className="text-green-600 font-bold">23%</span>，拖累固投整体表现（图1）。
            </p>
          </BaseCard>
          <BaseCard title="② 库存去化与价格端出现积极信号" delay="120ms">
            <p>
              商品房待售面积累计同比从2025年中的<span>+4%以上</span>降至2026年6月的<span>-0.9%</span>，进入负增长区间，为近年来首次，主因供应收缩（图2）。
            </p>
            <p className="mt-2">
              整体新房二手房环比仍下降，一线城市新建和二手住宅价格环比已连续4个月正增长。（图3、图4）
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 - 4列：图1左、图2、图3中、图4右 */}
        <div className="flex-1 grid grid-cols-4 gap-3 min-h-0">
          {/* 左列：图1 - 房地产销售面积 vs 开发投资 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={investmentData}
              title="图1 房地产销售面积 vs 开发投资 vs 新开工施工面积"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={investmentLineConfigs}
              yAxisDomain={[-35, 5]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['商品房销售面积', '房地产开发投资', '新开工施工面积']}
              xAxisTicks={['2025-03', '2025-06', '2025-09', '2025-12', '2026-03', '2026-06']}
            />
          </ChartContainer>

          {/* 中列：图2 - 商品房待售面积 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={unsoldAreaData}
              title="图2 商品房待售面积累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={unsoldAreaLineConfigs}
              yAxisDomain={[-5, 10]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['商品房待售面积']}
              xAxisTicks={['2025-06', '2025-09', '2025-12', '2026-03', '2026-06']}
            />
          </ChartContainer>

          {/* 图3 - 70城房价环比 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={nationalHousePriceMomData}
              title="图3 70城房价环比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={nationalPriceMomLineConfigs}
              yAxisDomain={[-1.5, 0.5]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['全国新建', '全国二手']}
              xAxisTicks={['2024-05', '2024-09', '2024-12', '2025-03', '2025-06', '2025-09', '2025-12', '2026-03', '2026-06']}
            />
          </ChartContainer>

          {/* 右列：图4 - 房价环比 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={housePriceMomData}
              title="图4 一二线城市房价环比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={priceMomLineConfigs}
              yAxisDomain={[-1.5, 1]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['一线新建', '二线新建', '一线二手', '二线二手']}
              xAxisTicks={['2024-06', '2024-09', '2024-12', '2025-03', '2025-06', '2025-09', '2025-12', '2026-03', '2026-06']}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
