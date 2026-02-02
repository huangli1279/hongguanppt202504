import React from 'react';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseLineChart, LineConfig } from './BaseLineChart';
import { BaseTable, ColumnConfig } from './BaseTable';
import { ppiYoyData, commodityPriceData, ppiMonthlyDetailData } from '@/data/ppi';
import { chartColors } from '@/utils/chartColors';

// PPI 折线图配置
const ppiLines: LineConfig[] = [
  { dataKey: 'ppiYoy', name: 'PPI同比', color: chartColors.primary, strokeWidth: 2.5 },
];

// 大宗商品折线图配置
const commodityLines: LineConfig[] = [
  { dataKey: 'energy', name: '能源类', color: chartColors.primary, strokeWidth: 2 },
  { dataKey: 'nonFerrous', name: '有色类', color: chartColors.negative, strokeWidth: 2 },
  { dataKey: 'mineral', name: '矿产类', color: chartColors.tertiary, strokeWidth: 2 },
  { dataKey: 'steel', name: '钢铁类', color: chartColors.secondary, strokeWidth: 2 },
];

// PPI 月度明细表格列配置
const ppiDetailColumns: ColumnConfig[] = [
  { key: 'period', title: '月份', width: 62, align: 'center' },
  { key: 'ppiYoy', title: 'PPI', width: 46, align: 'center' },
  {
    title: '生产资料',
    key: 'productionMaterials_group',
    children: [
      { key: 'productionMaterials', title: '合计', width: 46, align: 'center' },
      { key: 'mining', title: '采掘', width: 50, align: 'center' },
      { key: 'rawMaterials', title: '原料', width: 46, align: 'center' },
      { key: 'processing', title: '加工', width: 46, align: 'center' },
    ],
  },
  {
    title: '生活资料',
    key: 'livingGoods_group',
    children: [
      { key: 'livingGoods', title: '合计', width: 46, align: 'center' },
      { key: 'food', title: '食品', width: 46, align: 'center' },
      { key: 'clothing', title: '衣着', width: 46, align: 'center' },
      { key: 'dailyUse', title: '日用', width: 46, align: 'center' },
      { key: 'durableGoods', title: '耐用', width: 46, align: 'center' },
    ],
  },
];

export const ContentSlide14: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          PPI：全年降幅显著收窄，四季度环比连续上涨，
          <span className="text-webank-accent">大宗商品价格分化</span>
        </>
      }
    >
      <div className="flex flex-col h-full">
        {/* Cards Section */}
        <section className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="四季度价格信号触底回升，全年跌幅持续收窄" delay="200ms" variant="accent">
            <p>
              2025年全年PPI同比下降<span className="font-bold">2.6%</span>，10月至12月PPI环比连续三个月保持正增长（12月扩大至<span className="font-bold">+0.2%</span>），带动12月同比降幅收窄至<span className="font-bold">-1.9%</span>，PPI的回升主要依赖"外生性拉动"（金、铜等国际大宗商品）与"政策性提振"（反内卷、产能治理）。
            </p>
            <p className="mt-1">
              生产资料和生活资料PPI均继续同比下降，但生产资料的修复速度显著快于生活资料，成为PPI环比回升的主要拉动力量。
            </p>
          </BaseCard>

          <BaseCard title="大宗商品：宏观割裂下的两极分化" delay="400ms">
            <p>
              <span className="font-bold text-webank-accent">避险与供需错配推升金属：</span>地缘博弈激发的强避险情绪，叠加AI算力与电网升级带来的结构性短缺，推动贵金属和有色金属（金、银、铜）创下历史新高。<br />
              <span className="font-bold text-webank-accent">供应过剩压制能源：</span>传统的化石能源因产能释放过快及全球制造业需求复苏不均，价格中枢显著下移。
            </p>
          </BaseCard>
        </section>

        {/* Charts + Table area */}
        <div className="flex gap-4 flex-1 min-h-0">
        {/* Left: two charts stacked vertically */}
        <div className="flex flex-col gap-3 w-[45%] flex-shrink-0">
          <ChartContainer delay="600ms" className="flex-1 min-h-0">
            <BaseLineChart
              data={ppiYoyData}
              title="PPI 同比走势"
              subtitle="单位：%"
              lines={ppiLines}
              yAxisDomain={[-4, 0]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              xAxisTickCount={6}
            />
          </ChartContainer>

          <ChartContainer delay="700ms" className="flex-1 min-h-0">
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
            />
          </ChartContainer>
        </div>

        {/* Right: PPI monthly detail table */}
        <ChartContainer delay="800ms" className="flex-1 min-h-0">
          <BaseTable
            data={ppiMonthlyDetailData}
            columns={ppiDetailColumns}
            title="2025年PPI月度同比"
            subtitle="单位：%"
            rowHeight="auto"
            stickyHeader={true}
            dateColumn="period"
            colorizeNumbers={true}
            bordered={true}
          />
        </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
