import React from 'react';
import { BaseLineChart } from './BaseLineChart';
import { BaseStackedBarChart } from './BaseStackedBarChart';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { gdpTrendData, deflatorData, gdpIndustryValueData } from '@/data/gdp';

export const ContentSlide05: React.FC = () => {
  // 平减指数数据：过滤只保留24年以来数据
  const filteredDeflatorData = deflatorData.filter(item => !item.period.startsWith('2023'));

  return (
    <BaseContentSlide
      title={
        <>
          2026年一季度GDP稳增5.0%，
          <span className="text-webank-accent">名义增速与实际增速差距收窄</span>
        </>
      }
      cards={
        <>
          <BaseCard title="总量定调" delay="200ms" variant="accent">
            <p>
              一季度GDP达 <span className="font-bold">33.4万亿元</span>，按不变价格计算同比增长 <span className="font-bold">5.0%</span>，环比增长 <span className="font-bold">1.3%</span>。
            </p>
          </BaseCard>

          <BaseCard title="增长动能边际回升" delay="400ms">
            <p>
              增速较去年一季度回升 <span className="font-bold">0.5个百分点</span>，达到全年“4.5%-5.0%”增长目标上沿，开局平稳。
            </p>
          </BaseCard>

          <BaseCard title="平减指数回升" delay="600ms">
            <p>
              一季度名义GDP增速修复至 <span className="text-red-600 font-semibold">4.9%</span>，GDP平减指数回升至 <span className="font-bold">-0.6%</span> 附近，名义与实际增速差距明显收窄。
            </p>
          </BaseCard>
        </>
      }
      chartColumns={3}
      charts={
        <>
          <ChartContainer delay="800ms">
            <BaseLineChart
              data={gdpTrendData}
              title="2024Q1-2026Q1季度GDP当季同比增速走势图"
              subtitle="数据来源：国家统计局 | 单位：%"
              yAxisDomain={[0, 8]}
              showYAxis={true}
              legendOrder={['GDP现价', 'GDP不变价']}
              lines={[
                { dataKey: 'value', name: 'GDP不变价', strokeWidth: 2, labelPosition: 'top' },
                { dataKey: 'nominal', name: 'GDP现价', strokeWidth: 2, labelPosition: 'bottom' }
              ]}
            />
          </ChartContainer>
          <ChartContainer delay="1000ms">
            <BaseLineChart
              data={filteredDeflatorData}
              title="三产业GDP平减指数同比增速 (2024-2026Q1)"
              subtitle="第二产业平减指数持续处于负值区间，拖累整体名义增速"
              yAxisDomain={[-6, 6]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['第一产业', '第二产业', '第三产业']}
              lines={[
                { dataKey: 'primary', name: '第一产业', strokeWidth: 2, labelPosition: 'top' },
                { dataKey: 'secondary', name: '第二产业', strokeWidth: 2, labelPosition: 'bottom' },
                { dataKey: 'tertiary', name: '第三产业', strokeWidth: 2, labelPosition: 'top' }
              ]}
            />
          </ChartContainer>
          <ChartContainer delay="1200ms">
            <BaseStackedBarChart
              data={gdpIndustryValueData}
              title="2024-2026Q1三大产业GDP当季值"
              subtitle="单位：万亿元"
              yAxisDomain={[0, 45]}
              showYAxis={true}
              unit="万亿"
              barSize={20}
              legendOrder={['第一产业', '第二产业', '第三产业']}
              valueFormatter={(val: number) => val.toFixed(2)}
              bars={[
                { dataKey: 'primary', name: '第一产业'},
                { dataKey: 'secondary', name: '第二产业'},
                { dataKey: 'tertiary', name: '第三产业'}
              ]}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
