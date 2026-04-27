import React from 'react';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseBarChart } from '../base/BaseBarChart';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { industrialCumulativeData } from '../../data';
import { seriesColors } from '../../utils/chartColors';

const capacityUtilizationData = [
  { period: '2024Q1', utilization: 73.6 },
  { period: '2024Q2', utilization: 74.9 },
  { period: '2024Q3', utilization: 75.1 },
  { period: '2024Q4', utilization: 76.2 },
  { period: '2025Q1', utilization: 74.0 },
  { period: '2025Q2', utilization: 74.0 },
  { period: '2025Q3', utilization: 74.6 },
  { period: '2025Q4', utilization: 76.5 },
  { period: '2026Q1', utilization: 73.6 },
];

export const ContentSlide10: React.FC = () => {
  return (
    <BaseContentSlide
      cardColumns={2}
      title={
        <>
          一季度规上工增升至6.1%，
          <span className="text-webank-accent">外需稳步增强，“反内卷”政策发力</span>
        </>
      }
      cards={
        <>
          <BaseCard title="总量稳健增长" delay="0ms" variant="accent">
            <p>
              2026年一季度，全国规模以上工业增加值同比增长 <span className="font-bold">6.1%</span>，3月同比增长 <span className="font-bold">5.7%</span>，生产端实现稳健开局。
            </p>
            <p>
              房地产和"以旧换新"后的产能过剩带动一季度规模以上工业产能利用率降至 <span className="font-bold">73.6%</span>，较2025年一季度下降0.4个百分点。
            </p>
          </BaseCard>

          <BaseCard title="外需推动持续增强" delay="120ms">
            <p>
              一季度规上工业企业出口累计交货值 <span className="font-bold">3.9万亿元</span>，同比增长 <span className="font-bold">7.1%</span>。装备制造业占比达 <span className="font-bold">75.0%</span>，汽车、铁路船舶航空航天、电气机械、电子行业合计贡献出口交货值增长的 <span className="font-bold">76.6%</span>。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={capacityUtilizationData}
              title="规上工业产能利用率（季度）"
              subtitle="数据来源：国家统计局 | 单位：%"
              bars={[
                { dataKey: 'utilization', name: '产能利用率', color: seriesColors[1] },
              ]}
              xAxisKey="period"
              yAxisDomain={[70, 78]}
              showYAxis={true}
              showLabels={true}
              labelPosition="top"
              unit="%"
            />
          </ChartContainer>

          <ChartContainer delay="720ms">
            <BaseLineChart
              data={industrialCumulativeData}
              title="规上工业企业出口交货值累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'exportDelivery', name: '出口交货值:累计同比', strokeWidth: 2.5 },
              ]}
              yAxisDomain={[0, 8]}
              showYAxis={true}
              legendOrder={['出口交货值:累计同比']}
              highlightPeriods={['2026-03']}
              xAxisTicks={['2024-03', '2024-06', '2024-09', '2024-12', '2025-03', '2025-06', '2025-09', '2025-12', '2026-03']}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
