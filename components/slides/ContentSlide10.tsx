import React from 'react';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { industrialCumulativeData, industrialCategoryData } from '../../data';
import { seriesColors } from '../../utils/chartColors';

export const ContentSlide10: React.FC = () => {
  return (
    <BaseContentSlide
      cardColumns={2}
      title={
        <>
          1-6月工业增加值增长5.4%，
          <span className="text-webank-accent">外需链条仍为核心支撑</span>
        </>
      }
      cards={
        <>
          <BaseCard title="总量稳中有升" delay="0ms" variant="accent">
            <p>
              6月规上工业增加值同比增长 <span className="font-bold">5.3%</span>，较5月(<span className="font-bold">4.5%</span>) 加快 <span className="font-bold">0.8</span> 个百分点。外需延续强劲态势，上半年规模以上工业企业实现出口交货值同比增长 <span className="font-bold">9.7%</span>（6月 <span className="font-bold">14.8%</span>）。
            </p>
          </BaseCard>

          <BaseCard title="能源供给冲击持续" delay="120ms">
            <p>
              受7月新一轮冲突升级和霍尔木兹海峡封锁风险刺激，布伦特原油在5-6月一度回落至 <span className="font-bold">70</span> 美元后，7月再度应声反弹，近日甚至冲破 <span className="font-bold">90</span> 美元关口，同时有色金属的价格震荡对应采矿业6月同比转负（<span className="font-bold">-2.2%</span>）。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={industrialCumulativeData}
              title="规模以上工业增加值累计同比、出口交货值累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'industrialOutput', name: '规上工业增加值:累计同比', strokeWidth: 2.5 },
                { dataKey: 'exportDelivery', name: '出口交货值:累计同比', strokeWidth: 2.5 },
              ]}
              yAxisDomain={[0, 12]}
              showYAxis={true}
              legendOrder={['规上工业增加值:累计同比', '出口交货值:累计同比']}
              highlightPeriods={['2026-06']}
              xAxisTicks={['2024-03', '2024-06', '2024-09', '2024-12', '2025-03', '2025-06', '2025-09', '2025-12', '2026-03', '2026-06']}
            />
          </ChartContainer>

          <ChartContainer delay="720ms">
            <BaseLineChart
              data={industrialCategoryData}
              title="分行业规模以上工业增加值当月同比（2月累计填充）"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'industrial', name: '规上工业', color: seriesColors[0], strokeWidth: 2.4 },
                { dataKey: 'manufacturing', name: '制造业', color: seriesColors[1], strokeWidth: 2.4 },
                { dataKey: 'mining', name: '采矿业', color: seriesColors[2] },
                { dataKey: 'utilities', name: '电热燃水', color: seriesColors[3] },
              ]}
              yAxisDomain={[-4, 12]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['规上工业', '制造业', '采矿业', '电热燃水']}
              highlightPeriods={['2026-06']}
              xAxisTicks={['2024-03', '2024-06', '2024-09', '2024-12', '2025-03', '2025-06', '2025-09', '2025-12', '2026-03', '2026-06']}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
