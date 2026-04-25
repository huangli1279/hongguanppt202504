import React from 'react';
import { BaseLineChart } from './BaseLineChart';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';

const industrialMonthlyData = [
  { period: '2024-02', industrialOutput: 7.0 },
  { period: '2024-03', industrialOutput: 4.5 },
  { period: '2024-04', industrialOutput: 6.7 },
  { period: '2024-05', industrialOutput: 5.6 },
  { period: '2024-06', industrialOutput: 5.3 },
  { period: '2024-07', industrialOutput: 5.1 },
  { period: '2024-08', industrialOutput: 4.5 },
  { period: '2024-09', industrialOutput: 5.4 },
  { period: '2024-10', industrialOutput: 5.3 },
  { period: '2024-11', industrialOutput: 5.4 },
  { period: '2024-12', industrialOutput: 6.2 },
  { period: '2025-02', industrialOutput: 5.9 },
  { period: '2025-03', industrialOutput: 7.7 },
  { period: '2025-04', industrialOutput: 6.1 },
  { period: '2025-05', industrialOutput: 5.8 },
  { period: '2025-06', industrialOutput: 6.8 },
  { period: '2025-07', industrialOutput: 5.7 },
  { period: '2025-08', industrialOutput: 5.2 },
  { period: '2025-09', industrialOutput: 6.5 },
  { period: '2025-10', industrialOutput: 4.9 },
  { period: '2025-11', industrialOutput: 4.8 },
  { period: '2025-12', industrialOutput: 5.2 },
  { period: '2026-02', industrialOutput: 6.3 },
  { period: '2026-03', industrialOutput: 5.7 },
];

const industrialCumulativeData = [
  { period: '2024-02', exportDelivery: 0.4, industrialOutput: 7.0 },
  { period: '2024-03', exportDelivery: 0.8, industrialOutput: 6.1 },
  { period: '2024-04', exportDelivery: 2.5, industrialOutput: 6.3 },
  { period: '2024-05', exportDelivery: 3.0, industrialOutput: 6.2 },
  { period: '2024-06', exportDelivery: 3.3, industrialOutput: 6.0 },
  { period: '2024-07', exportDelivery: 3.6, industrialOutput: 5.9 },
  { period: '2024-08', exportDelivery: 4.1, industrialOutput: 5.8 },
  { period: '2024-09', exportDelivery: 4.1, industrialOutput: 5.8 },
  { period: '2024-10', exportDelivery: 3.8, industrialOutput: 5.8 },
  { period: '2024-11', exportDelivery: 4.2, industrialOutput: 5.8 },
  { period: '2024-12', exportDelivery: 5.1, industrialOutput: 5.8 },
  { period: '2025-02', exportDelivery: 6.2, industrialOutput: 5.9 },
  { period: '2025-03', exportDelivery: 6.7, industrialOutput: 6.5 },
  { period: '2025-04', exportDelivery: 5.1, industrialOutput: 6.4 },
  { period: '2025-05', exportDelivery: 4.1, industrialOutput: 6.3 },
  { period: '2025-06', exportDelivery: 4.2, industrialOutput: 6.4 },
  { period: '2025-07', exportDelivery: 3.6, industrialOutput: 6.3 },
  { period: '2025-08', exportDelivery: 3.0, industrialOutput: 6.2 },
  { period: '2025-09', exportDelivery: 3.3, industrialOutput: 6.2 },
  { period: '2025-10', exportDelivery: 2.7, industrialOutput: 6.1 },
  { period: '2025-11', exportDelivery: 2.6, industrialOutput: 6.0 },
  { period: '2025-12', exportDelivery: 2.2, industrialOutput: 5.9 },
  { period: '2026-02', exportDelivery: 6.3, industrialOutput: 6.3 },
  { period: '2026-03', exportDelivery: 7.1, industrialOutput: 6.1 },
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
          <BaseCard title="总量稳健增长" delay="200ms" variant="accent">
            <p>
              2026年一季度，全国规模以上工业增加值同比增长 <span className="font-bold">6.1%</span>，3月同比增长 <span className="font-bold">5.7%</span>，生产端实现稳健开局。房地产和“以旧换新”后的产能过剩带动一季度规模以上工业产能利用率降至 <span className="font-bold">73.6%</span>，较2025年一季度下降0.4个百分点。
            </p>
          </BaseCard>

          <BaseCard title="外需推动持续增强" delay="400ms">
            <p>
              一季度规上工业企业出口累计交货值 <span className="font-bold">3.9万亿元</span>，同比增长 <span className="font-bold">7.1%</span>。装备制造业占比达 <span className="font-bold">75.0%</span>，同比提高1.3个百分点，汽车、铁路船舶航空航天、电气机械、电子行业合计贡献出口交货值增长的 <span className="font-bold">76.6%</span>。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="800ms">
            <BaseLineChart
              data={industrialMonthlyData}
              title="规上工业增加值当月同比走势"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'industrialOutput', name: '规模以上工业增加值:当月同比', strokeWidth: 2.5 },
              ]}
              yAxisDomain={[4, 8]}
              showYAxis={true}
              legendOrder={['规模以上工业增加值:当月同比']}
              highlightPeriods={['2026-03']}
              xAxisTicks={['2024-03', '2024-06', '2024-09', '2024-12', '2025-03', '2025-06', '2025-09', '2025-12', '2026-03']}
            />
          </ChartContainer>

          <ChartContainer delay="1000ms">
            <BaseLineChart
              data={industrialCumulativeData}
              title="出口交货值与规上工业增加值累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'exportDelivery', name: '出口交货值:累计同比', strokeWidth: 2.5 },
                { dataKey: 'industrialOutput', name: '规模以上工业增加值:累计同比', strokeWidth: 2.5 },
              ]}
              yAxisDomain={[0, 8]}
              showYAxis={true}
              legendOrder={['出口交货值:累计同比', '规模以上工业增加值:累计同比']}
              highlightPeriods={['2026-03']}
              xAxisTicks={['2024-03', '2024-06', '2024-09', '2024-12', '2025-03', '2025-06', '2025-09', '2025-12', '2026-03']}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
