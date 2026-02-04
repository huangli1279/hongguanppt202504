import React from 'react';
import { BaseLineChart } from './BaseLineChart';
import { BaseStackedBarChart } from './BaseStackedBarChart';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { gdpTrendData, deflatorData, gdpIndustryValueData } from '@/data/gdp';

export const ContentSlide04: React.FC = () => {
  // 平减指数数据：过滤只保留24年和25年
  const filteredDeflatorData = deflatorData.filter(item => !item.period.startsWith('2023'));

  return (
    <BaseContentSlide
      title={
        <>
          2025年GDP实现5.0%增长，
          <span className="text-webank-accent">四季度增速回落至4.5%</span>
        </>
      }
      cards={
        <>
          <BaseCard title="总量定调" delay="200ms" variant="accent">
            <p>
              全年GDP达 <span className="font-bold">140.2万亿元</span>，同比增长 <span className="font-bold">5.0%</span>，成功实现全年预期目标。
            </p>
          </BaseCard>

          <BaseCard title="季度走势'前高后低'" delay="400ms">
            <p>
              受基数及内需影响逐季回落：<br/>Q1 5.4% <span className="text-slate-400">→</span> Q4 4.5%。<br/>
              四季度环比增长 <span className="font-bold">1.2%</span>，动能仍具韧性。
            </p>
          </BaseCard>

          <BaseCard title="平减指数回升" delay="600ms">
            <p>
              <span className="text-red-600 font-semibold">Q4GDP平减指数-0.7%</span>，较Q3(-1.1%)收窄但仍连续11季为负。三产+0.43%（率先转正）。Q4鲜菜等食品价格回升（CPI食品分项同比+1.1%）带动第一产业平减指数相较上一季度有较大提升。依赖"反内卷"限产政策及财政发力，PPI持续修复，拉动第二产业平减指数收窄至-2.02%。
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
              title="2024Q1-2025Q4季度GDP当季同比增速走势图"
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
              title="三产业GDP平减指数同比增速 (2024-2025)"
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
              title="2024-2025年三大产业GDP当季值"
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
