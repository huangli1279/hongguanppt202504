import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { investmentData, unsoldAreaData, housePriceMomData, nationalHousePriceMomData } from '@/data/realEstateExtra';

// 房地产开发投资/销售面积/新开工折线图配置
const investmentLineConfigs: LineConfig[] = [
  { dataKey: 'salesArea', name: '商品房销售面积', strokeWidth: 2.5 },
  { dataKey: 'realEstateInvestment', name: '房地产开发投资', strokeWidth: 2 },
  { dataKey: 'newConstruction', name: '新开工施工面积', strokeWidth: 2 },
];

// 商品房待售面积折线图配置
const unsoldAreaLineConfigs: LineConfig[] = [
  { dataKey: 'unsoldArea', name: '商品房待售面积', strokeWidth: 2.5 },
];

// 房价环比折线图配置（一二线）
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
      title="地产（投资端）：开发投资-20.6%且降幅逐月走阔，供给收缩快于需求"
      cardColumns={3}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-3 mb-3 flex-shrink-0">
          <BaseCard title="① 开发投资降幅逐月走阔" delay="0ms" variant="accent">
            <p>
              1-9月房地产开发投资<span className="text-black">5.34万亿元</span>，同比<span className="text-green-600 font-bold">-20.6%</span>（1-7月<span className="text-green-600 font-bold">-19.2%</span>、1-8月<span className="text-green-600 font-bold">-19.9%</span>，降幅逐月扩大）；新开工<span className="text-green-600 font-bold">-24.9%</span>、竣工<span className="text-green-600 font-bold">-25.1%</span>、施工<span className="text-green-600 font-bold">-12.8%</span>。
            </p>
          </BaseCard>
          <BaseCard title="② 供给收缩快于需求" delay="120ms">
            <p>
              新开工降幅（<span className="text-green-600 font-bold">-24.9%</span>）持续大于新建商品房销售面积降幅（<span className="text-green-600 font-bold">-13.2%</span>），9月末待售面积<span className="text-black">7.48亿平方米</span>，同比<span className="text-green-600 font-bold">-1.5%</span>。
            </p>
            <p className="mt-2">
              二手房交易网签面积<span className="text-black">6.17亿平方米</span>，同比<span className="text-red-500 font-bold">+10.7%</span>（住建部数据）——"新房冷、二手房热"的存量房时代特征进一步强化。
            </p>
          </BaseCard>
          <BaseCard title="③ 政策影响与价格端" delay="240ms">
            <p>
              8月28日现房销售新政在地方细则落地过程中，政策"拉长回款周期、压低房企拿地和新开工意愿"的影响尚未充分体现；9月房企信用融资增速<span className="text-green-600 font-bold">-17.2%</span>仍低迷。9月29日贴息政策，十一正式执行，预计...
            </p>
            <p className="mt-2">
              从房价来看，整体仍然负增；一线城市新房、二手房连续8月环比上升，二线城市环比降幅下降。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 - 4列 */}
        <div className="flex-1 grid grid-cols-4 gap-3 min-h-0">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={investmentData}
              title="图1 房地产开发投资/销售面积/新开工累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={investmentLineConfigs}
              yAxisDomain={[-35, 5]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['商品房销售面积', '房地产开发投资', '新开工施工面积']}
              xAxisTicks={['2025-03', '2025-06', '2025-09', '2025-12', '2026-03', '2026-06', '2026-09']}
              highlightPeriods={['2026-09']}
            />
          </ChartContainer>

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
              xAxisTicks={['2025-06', '2025-09', '2025-12', '2026-03', '2026-06', '2026-09']}
              highlightPeriods={['2026-09']}
            />
          </ChartContainer>

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
              xAxisTicks={['2024-05', '2024-09', '2024-12', '2025-03', '2025-06', '2025-09', '2025-12', '2026-03', '2026-06', '2026-09']}
              highlightPeriods={['2026-09']}
            />
          </ChartContainer>

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
              xAxisTicks={['2024-06', '2024-09', '2024-12', '2025-03', '2025-06', '2025-09', '2025-12', '2026-03', '2026-06', '2026-09']}
              highlightPeriods={['2026-09']}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
