import React from 'react';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseLineChart, LineConfig } from './BaseLineChart';
import { ppiYoyData, commodityPriceData } from '../data';
import { TrendingUp, Layers } from 'lucide-react';
import { chartColors } from '@/utils/chartColors';

// PPI 折线图配置
const ppiLines: LineConfig[] = [
  { dataKey: 'ppiYoy', name: 'PPI同比', color: chartColors.primary, strokeWidth: 2.5 },
];

// 大宗商品折线图配置
const commodityLines: LineConfig[] = [
  { dataKey: 'energy', name: '能源类', color: chartColors.primary, strokeWidth: 2 },
  { dataKey: 'nonFerrous', name: '有色类', color: '#ef4444', strokeWidth: 2 },
  { dataKey: 'mineral', name: '矿产类', color: chartColors.tertiary, strokeWidth: 2 },
  { dataKey: 'steel', name: '钢铁类', color: chartColors.secondary, strokeWidth: 2 },
];

export const ContentSlide13: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          PPI环比连续三个月上涨，
          <span className="text-webank-accent">大宗商品价格走势出现结构性分化</span>
        </>
      }
      cardColumns={2}
      cards={
        <>
          <BaseCard title="PPI：价格弹性边际修复" icon={TrendingUp} delay="100ms">
            <p>
              12月PPI环比上涨<span className="font-bold">0.2%</span>，连续第3个月维持正增长，同比降幅收窄至<span className="font-bold">-1.9%</span>。工业品价格通缩压力显著缓解，中下游企业定价权逐步回归，利润空间边际改善。
            </p>
          </BaseCard>

          <BaseCard title="大宗商品：宏观割裂下的两极分化" icon={Layers} delay="200ms">
            <p>
              <span className="font-bold text-webank-accent">避险与供需错配推升金属：</span>地缘博弈激发的强避险情绪，叠加AI算力与电网升级带来的结构性短缺，推动贵金属和有色金属（金、银、铜）创下历史新高。<br />
              <span className="font-bold text-webank-accent">供应过剩压制能源：</span>传统的化石能源因产能释放过快及全球制造业需求复苏不均，价格中枢显著下移。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="300ms">
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

          <ChartContainer delay="400ms">
            <BaseLineChart
              data={commodityPriceData}
              title="大宗商品价格指数(CCPI)"
              subtitle="基期：2006年6月=100"
              lines={commodityLines}
              yAxisDomain={[80, 200]}
              showYAxis={true}
              legendOrder={['能源类', '矿产类', '有色类', '钢铁类']}
              xAxisTickCount={6}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
