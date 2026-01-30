import React from 'react';
import { BaseLineChart } from './BaseLineChart';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { pmiTrendData, pmiByEnterpriseSizeData } from '../data';
import { TrendingUp, BarChart3, Layers } from 'lucide-react';
import { chartColors, seriesColors } from '@/utils/chartColors';

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

export const ContentSlide09: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          12月制造业PMI录得50.1%实现景气反转，
          <span className="text-webank-accent">政策发力与"抢出口"效应驱动产需双升</span>
        </>
      }
      cards={
        <>
          <BaseCard title="景气度反转" icon={TrendingUp} delay="100ms">
            <p>
              12月PMI升至 <span className="font-bold">50.1%</span> (+0.9pct)，为4月以来首次扩张。超出市场预期 (49.2%)，显示稳增长政策效果集中显现。
            </p>
          </BaseCard>

          <BaseCard title="供需同步改善" icon={BarChart3} delay="200ms">
            <p>
              生产指数 (<span className="font-bold">51.7%</span>) 创近期新高；受海外节假日、关税预期下的"抢出口"及春节错位赶工影响，新订单指数 (<span className="font-bold">50.8%</span>) 重回荣枯线以上，外需短期韧性超预期，供需缺口收窄。
            </p>
          </BaseCard>

          <BaseCard title="结构明显分化" icon={Layers} delay="300ms">
            <p>
              大型企业 (<span className="font-bold">50.8%</span>) 受益于"两重"资金落地领跑；小型企业 (<span className="font-bold">48.6%</span>) 虽有回升但仍处收缩。高技术制造业 (<span className="font-bold">52.5%</span>) 持续高景气。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={pmiChartData}
              title="制造业PMI及分项指数"
              subtitle="单位：%"
              lines={[
                { dataKey: 'pmi', name: '制造业PMI', color: chartColors.primary, strokeWidth: 2.5 },
                { dataKey: 'production', name: '生产', color: seriesColors[1] },
                { dataKey: 'newOrders', name: '新订单', color: seriesColors[2] },
              ]}
              yAxisDomain={[46, 56]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={50}
              legendOrder={['制造业PMI', '生产', '新订单']}
            />
          </ChartContainer>
          <ChartContainer delay="800ms">
            <BaseLineChart
              data={enterpriseSizeChartData}
              title="不同规模企业PMI"
              subtitle="单位：%"
              lines={[
                { dataKey: 'large', name: '大型企业', color: chartColors.primary, strokeWidth: 2.5 },
                { dataKey: 'medium', name: '中型企业', color: seriesColors[1] },
                { dataKey: 'small', name: '小型企业', color: seriesColors[2] },
              ]}
              yAxisDomain={[44, 54]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={50}
              legendOrder={['大型企业', '中型企业', '小型企业']}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
