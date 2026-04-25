import React from 'react';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseLineChart, LineConfig } from './BaseLineChart';
import { ppiYoyData, commodityPriceData } from '@/data/ppi';

const ppiLines: LineConfig[] = [
  { dataKey: 'ppiYoy', name: 'PPI当月同比', strokeWidth: 2.5 },
  { dataKey: 'productionMaterialsYoy', name: '生产资料PPI当月同比', strokeWidth: 2 },
  { dataKey: 'livingGoodsYoy', name: '生活资料PPI当月同比', strokeWidth: 2 },
];

// 大宗商品折线图配置
const commodityLines: LineConfig[] = [
  { dataKey: 'energy', name: '能源类', strokeWidth: 2 },
  { dataKey: 'nonFerrous', name: '有色类', strokeWidth: 2 },
  { dataKey: 'mineral', name: '矿产类', strokeWidth: 2 },
  { dataKey: 'steel', name: '钢铁类', strokeWidth: 2 },
];


export const ContentSlide14: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          PPI：全年降幅显著收窄，一季度环比连续上涨，
          <span className="text-webank-accent">大宗商品价格分化</span>
        </>
      }
    >
      <div className="flex flex-col h-full">
        {/* Cards Section */}
        <section className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="一季度价格信号触底回升，全年跌幅持续收窄" delay="200ms" variant="accent">
            <div className="space-y-2">
              <p>
                2025年全年PPI同比下降<span className="font-bold">2.6%</span>，10月至12月PPI环比连续三个月保持正增长（12月扩大至<span className="font-bold">+0.2%</span>），带动12月同比降幅收窄至<span className="font-bold">-1.9%</span>，PPI的回升主要依赖"外生性拉动"（金、铜等国际大宗商品）与"政策性提振"（反内卷、产能治理）。
              </p>
              <p>
                生产资料和生活资料PPI均继续同比下降，但生产资料的修复速度显著快于生活资料，成为PPI环比回升的主要拉动力量。
              </p>
            </div>
          </BaseCard>

          <BaseCard title="大宗商品：宏观割裂下的两极分化" delay="400ms">
            <div className="space-y-2">
              <p>
                <span className="font-bold text-webank-accent">避险与供需错配推升金属：</span>地缘博弈激发的强避险情绪，叠加AI算力与电网升级带来的结构性短缺，推动贵金属和有色金属（金、银、铜）创下历史新高。
              </p>
              <p>
                <span className="font-bold text-webank-accent">供应过剩压制能源：</span>传统的化石能源因产能释放过快及全球制造业需求复苏不均，价格中枢显著下移。
              </p>
            </div>
          </BaseCard>
        </section>

        {/* Charts area */}
        <div className="flex gap-6 flex-1 min-h-0">
          {/* Two charts side by side */}
          <div className="grid grid-cols-2 gap-4 w-full">
            <ChartContainer delay="600ms" className="min-h-0">
              <BaseLineChart
                data={ppiYoyData}
                title="2024-2025年工业生产者出厂价格指数(PPI)月度同比数据"
                subtitle="单位：%"
                lines={ppiLines}
                yAxisDomain={[-5, 0]}
                showYAxis={true}
                showReferenceLine={true}
                referenceLineY={0}
                xAxisTickCount={6}
              />
            </ChartContainer>

            <ChartContainer delay="700ms" className="min-h-0">
              <BaseLineChart
                data={commodityPriceData}
                title="大宗商品价格指数(CCPI)"
                subtitle="基期：2006年6月=100"
                lines={commodityLines}
                yAxisDomain={[80, 200]}
                showYAxis={true}
                legendOrder={['能源类', '矿产类', '有色类', '钢铁类']}
                xAxisTickCount={6}
                unit=""
                yAxisTickFormatter={(val) => `${val}`}
              />
            </ChartContainer>
          </div>
        </div>
      </div>
    </BaseContentSlide>
  );
};
