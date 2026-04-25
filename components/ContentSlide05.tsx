import React from 'react';
import { BaseLineChart } from './BaseLineChart';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';

export const ContentSlide05: React.FC = () => {
  const gdpGrowthData = [
    { period: '2024-09', real: 4.6, nominal: 3.96 },
    { period: '2024-12', real: 5.4, nominal: 4.56 },
    { period: '2025-03', real: 5.4, nominal: 4.58 },
    { period: '2025-06', real: 5.2, nominal: 3.9 },
    { period: '2025-09', real: 4.8, nominal: 3.71 },
    { period: '2025-12', real: 4.5, nominal: 3.85 },
    { period: '2026-03', real: 5.0, nominal: 4.94 },
  ];

  const deflatorData = [
    { period: '2024-09', primary: 1.25, secondary: -1.66, tertiary: -0.13, overall: -0.61 },
    { period: '2024-12', primary: -1.05, secondary: -2.28, tertiary: 0.31, overall: -0.8 },
    { period: '2025-03', primary: -1.24, secondary: -2.35, tertiary: 0.12, overall: -0.78 },
    { period: '2025-06', primary: -1.41, secondary: -2.93, tertiary: -0.15, overall: -1.24 },
    { period: '2025-09', primary: -3.85, secondary: -2.67, tertiary: 0.31, overall: -1.04 },
    { period: '2025-12', primary: -1.12, secondary: -2.02, tertiary: 0.43, overall: -0.62 },
    { period: '2026-03', primary: -1.97, secondary: -0.75, tertiary: 0.38, overall: -0.06 },
  ];

  return (
    <BaseContentSlide
      title={
        <>
          一季度GDP稳增5.0%实现良好开局，
          <span className="text-webank-accent">名义增速与实际增速差距收窄</span>
        </>
      }
      cardColumns={2}
      cards={
        <>
          <BaseCard title="总量定调" delay="200ms" variant="accent">
            <p>
              2026年一季度GDP达 <span className="font-bold">33.4万亿元</span>，按不变价格计算同比增长 <span className="font-bold">5.0%</span>，环比增长 <span className="font-bold">1.3%</span>，实现“十五五”开局之年平稳起步。
              实际GDP增速较去年四季度回升 <span className="font-bold">0.5个百分点</span>，达到全年“4.5%-5.0%”增长目标的上限区域。
            </p>
          </BaseCard>

          <BaseCard title="名义与实际差距收窄" delay="400ms">
            <p>
              一季度名义GDP增速大幅修复至 <span className="text-red-600 font-semibold">4.9%</span>，较去年四季度 <span className="font-bold">3.9%</span> 明显回升；GDP平减指数回升至 <span className="font-bold">-0.6%</span>，整体已接近零值，企业盈利与微观体感的“温差”正在改善。
            </p>
          </BaseCard>
        </>
      }
      chartColumns={2}
      charts={
        <>
          <ChartContainer delay="1000ms">
            <BaseLineChart
              data={gdpGrowthData}
              title="GDP不变价与现价当季同比增速"
              subtitle="数据来源：国家统计局 | 单位：%"
              yAxisDomain={[0, 8]}
              showYAxis={true}
              legendOrder={['GDP不变价', 'GDP现价']}
              lines={[
                { dataKey: 'real', name: 'GDP不变价', strokeWidth: 2, labelPosition: 'top' },
                { dataKey: 'nominal', name: 'GDP现价', strokeWidth: 2, labelPosition: 'bottom' }
              ]}
            />
          </ChartContainer>
          <ChartContainer delay="1200ms">
            <BaseLineChart
              data={deflatorData}
              title="GDP平减指数"
              subtitle="数据来源：国家统计局 | 单位：%"
              yAxisDomain={[-5, 2]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['第一产业', '第二产业', '第三产业', '整体']}
              lines={[
                { dataKey: 'primary', name: '第一产业', strokeWidth: 2, labelPosition: 'top' },
                { dataKey: 'secondary', name: '第二产业', strokeWidth: 2, labelPosition: 'bottom' },
                { dataKey: 'tertiary', name: '第三产业', strokeWidth: 2, labelPosition: 'top' },
                { dataKey: 'overall', name: '整体', strokeWidth: 3, labelPosition: 'top' }
              ]}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
