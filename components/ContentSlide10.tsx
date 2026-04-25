import React from 'react';
import { BaseLineChart } from './BaseLineChart';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { pmiTrendData, pmiByEnterpriseSizeData } from '@/data/pmi';

// 转换PMI趋势数据为图表格式
const pmiChartData = pmiTrendData.map(d => ({
  period: d.period,
  pmi: d.pmi,
  production: d.production,
  newOrders: d.newOrders,
}));

// 转换企业规模PMI数据为图表格式
const enterpriseSizeChartData = pmiByEnterpriseSizeData.map(d => ({
  period: d.period,
  small: d.small,
  medium: d.medium,
  large: d.large,
}));

export const ContentSlide10: React.FC = () => {
  return (
    <BaseContentSlide
      title="1月制造业PMI49.3%，重回收缩区间"
      cardColumns={2}
      cards={
        <>
          <BaseCard title="春节效应前置" delay="200ms" variant="accent">
            <p>
              12月PMI因"抢出口"及春节错位赶工影响出现超季节性反弹（达50.1%），1月PMI受春节劳动密集型行业工人返乡和上月基数影响回落幅度较大。
            </p>
          </BaseCard>

          <BaseCard title="结构明显分化" delay="400ms">
            <p>
              大型企业 (<span className="font-bold">50.3%</span>) 受益于"两重"政策仍保持在扩张区间，中小型企业均位于收缩区间且低于临界值，但高技术制造业 (<span className="font-bold">52%</span>) 连续两个月持续高景气。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="800ms">
            <BaseLineChart
              data={pmiChartData}
              title="制造业PMI及分项指数"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'pmi', name: '制造业PMI', strokeWidth: 2.5, pointOffsets: { '2025-12': 18 } },
                { dataKey: 'production', name: '生产'},
                { dataKey: 'newOrders', name: '新订单', labelDY: 12, pointOffsets: { '2025-12': -10 } },
              ]}
              yAxisDomain={[46, 56]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={50}
              legendOrder={['制造业PMI', '生产', '新订单']}
              highlightPeriods={['2025-12']}
            />
          </ChartContainer>
          <ChartContainer delay="1000ms">
            <BaseLineChart
              data={enterpriseSizeChartData}
              title="不同规模企业PMI"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'large', name: '大型企业', strokeWidth: 2.5 },
                { dataKey: 'medium', name: '中型企业'},
                { dataKey: 'small', name: '小型企业'},
              ]}
              yAxisDomain={[44, 54]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={50}
              legendOrder={['大型企业', '中型企业', '小型企业']}
              highlightPeriods={['2025-12']}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
