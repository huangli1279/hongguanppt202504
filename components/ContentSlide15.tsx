import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseLineChart } from './BaseLineChart';
import { BaseCard } from './BaseCard';
import { retailTrendData, retailMonthlyData } from '@/data/retail';
import { chartColors } from '@/utils/chartColors';

export const ContentSlide15: React.FC = () => {
  return (
    <BaseContentSlide
      title="2025年社零增长3.7%，服务消费韧性显著强于商品零售"
      cardColumns={2}
      chartColumns={2}
      cards={
        <>
          <BaseCard title="服务消费韧性凸显" delay="200ms" variant="accent">
            <p>
              2025 年全年社零总额增长 3.7%，规模首破 50 万亿元；服务零售额全年累计增长5.5%，始终快于商品零售，且增速在下半年持续增长
            </p>
          </BaseCard>
          <BaseCard title="「促销平移」透支内需" delay="400ms">
            <p>
              受「双十一」错位（10月透支11月）及去年同期高基数（24年Q4疫情后补偿消费及初期政策刺激）影响，四季度社零当月同比增速呈现明显的下行趋势，12 月创下近三年非极端波动期的最低值，复苏斜率明显放缓
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <BaseLineChart
              title="2024-2025年全国社零总额及服务/商品零售累计同比走势"
              subtitle="数据来源：国家统计局 | 单位：%"
              data={retailTrendData}
              lines={[
                { dataKey: 'serviceRetail', name: '服务零售额:累计同比', color: chartColors.primary, strokeWidth: 2.5 },
                { dataKey: 'totalRetail', name: '社会消费品零售总额:累计同比', color: chartColors.secondary },
                { dataKey: 'goodsRetail', name: '商品零售额:累计同比', color: chartColors.tertiary },
              ]}
              yAxisDomain={[0, 14]}
              showYAxis={true}
              legendOrder={['服务零售额:累计同比', '社会消费品零售总额:累计同比', '商品零售额:累计同比']}
              xAxisTickCount={6}
            />
          </ChartContainer>
          <ChartContainer delay="800ms">
            <BaseLineChart
              title="2024-2025年全国社会消费品零售总额当月同比走势"
              subtitle="数据来源：国家统计局 | 单位：%"
              data={retailMonthlyData}
              lines={[
                { dataKey: 'monthlyYoy', name: '社会消费品零售总额:当月同比', color: chartColors.primary, strokeWidth: 2.5 },
              ]}
              yAxisDomain={[0, 8]}
              showYAxis={true}
              xAxisTickCount={6}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
