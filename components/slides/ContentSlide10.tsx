import React from 'react';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { industrialMonthlyData, industrialCumulativeData } from '../../data';

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
              2026年一季度，全国规模以上工业增加值同比增长 <span className="font-bold">6.1%</span>，3月同比增长 <span className="font-bold">5.7%</span>，生产端实现稳健开局。房地产和“以旧换新”后的产能过剩带动一季度规模以上工业产能利用率降至 <span className="font-bold">73.6%</span>，较2025年一季度下降0.4个百分点。
            </p>
          </BaseCard>

          <BaseCard title="外需推动持续增强" delay="120ms">
            <p>
              一季度规上工业企业出口累计交货值 <span className="font-bold">3.9万亿元</span>，同比增长 <span className="font-bold">7.1%</span>。装备制造业占比达 <span className="font-bold">75.0%</span>，同比提高1.3个百分点，汽车、铁路船舶航空航天、电气机械、电子行业合计贡献出口交货值增长的 <span className="font-bold">76.6%</span>。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
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

          <ChartContainer delay="720ms">
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
