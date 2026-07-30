import React from 'react';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { industrialCumulativeData, miningSubsectorMonthlyData } from '../../data';
import { seriesColors } from '../../utils/chartColors';

export const ContentSlide10: React.FC = () => {
  return (
    <BaseContentSlide
      cardColumns={2}
      title="上半年外需支撑工业增长，煤炭拖累致采矿业6月转负"
      cards={
        <>
          <BaseCard title="工业增加值总量平稳" delay="0ms" variant="accent">
            <p>
              1-6月规模以上工业增加值同比增长 <span className="font-bold">5.4%</span>，外需延续强劲态势，上半年规模以上工业企业实现出口交货值同比增长 <span className="font-bold">9.7%</span>（6月单月同比 <span className="font-bold">14.8%</span>）。
            </p>
          </BaseCard>

          <BaseCard title="采矿业6月增速转负受煤炭拖累" delay="120ms">
            <p>
              采矿业6月同比转负至 <span className="font-bold">-2.2%</span>（5月仍为 <span className="font-bold">+2.3%</span>）。主因是山西矿难导致监管停产，煤炭开采由5月 <span className="font-bold">+3.5%</span> 骤降至 <span className="font-bold">-5.9%</span>；石油和天然气开采业受战争影响小幅回落仍增长 <span className="font-bold">1.0%</span>，有色受AI驱动，二季度增速均在 <span className="font-bold">3%</span> 以上。
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
              data={miningSubsectorMonthlyData}
              title="采矿业及主要分项增加值当月同比（2月累计填充）"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                {
                  dataKey: 'mining',
                  name: '采矿业',
                  color: seriesColors[0],
                  strokeWidth: 3,
                  labelDY: -12,
                  pointOffsets: { '2026-06': -14 },
                },
                {
                  dataKey: 'coal',
                  name: '煤炭开采和洗选业',
                  color: seriesColors[1],
                  strokeWidth: 3,
                  labelDY: 16,
                  pointOffsets: { '2026-06': 18 },
                },
                {
                  dataKey: 'oilGas',
                  name: '石油和天然气开采业',
                  color: seriesColors[2],
                  strokeWidth: 1.8,
                  strokeDasharray: '5 4',
                  labelDY: -12,
                  pointOffsets: { '2026-06': -16 },
                },
                {
                  dataKey: 'nonFerrous',
                  name: '有色金属矿采选业',
                  color: seriesColors[3],
                  strokeWidth: 1.8,
                  strokeDasharray: '5 4',
                  labelDY: 14,
                  pointOffsets: { '2026-06': 14 },
                },
              ]}
              yAxisDomain={[-8, 16]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['采矿业', '煤炭开采和洗选业', '石油和天然气开采业', '有色金属矿采选业']}
              highlightPeriods={['2026-06']}
              xAxisTicks={['2025-03', '2025-06', '2025-09', '2025-12', '2026-03', '2026-06']}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
