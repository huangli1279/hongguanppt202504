import React from 'react';
import { BaseLineChart } from './BaseLineChart';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { industrialProductionData } from '@/data/industry';

// 过滤掉春节异常值，保持yyyy-mm格式
const chartData = industrialProductionData
  .filter(d => !['2024-01', '2024-02', '2025-02'].includes(d.period))
  .map(d => ({
    period: d.period,
    industrialOutput: d.industrialOutput,
  }));

export const ContentSlide12: React.FC = () => {
  return (
    <BaseContentSlide
      cardColumns={2}
      title={
        <>
          2025年规上工业增加值增长5.9%，
          <span className="text-webank-accent">结构优化升级，增速小幅回升</span>
        </>
      }
      cards={
        <>
          <BaseCard title="全年增速平稳回升" delay="200ms" variant="accent">
            <p>
              2025年全国规上工业增加值增长 <span className="font-bold">5.9%</span>，较上年加快0.1个百分点，Q1增速呈"先抑后扬"，12月反弹至 <span className="font-bold">5.2%</span>。
            </p>
          </BaseCard>

          <BaseCard title="设备更新政策支撑新质生产力" delay="400ms">
            <p>
              制造业是核心动力：设备更新政策支撑装备制造业规上工业增加值增长<span className="font-bold">9.2%</span>，占规上工业比重提升至<span className="font-bold">36.8%</span>（较上年提高2.2个百分点），其中汽车、电子行业增速分别达<span className="font-bold">11.5%</span>和<span className="font-bold">10.6%</span>。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="800ms" className="col-span-2">
          <BaseLineChart
            data={chartData}
            title="规模以上工业增加值同比增速"
            subtitle="数据来源：国家统计局 | 单位：%"
            lines={[
              { dataKey: 'industrialOutput', name: '规模以上工业增加值', strokeWidth: 2.5 },
            ]}
            yAxisDomain={[-2, 10]}
            showYAxis={true}
            legendOrder={['规模以上工业增加值']}
            xAxisTickCount={12}
          />
        </ChartContainer>
      }
    />
  );
};
