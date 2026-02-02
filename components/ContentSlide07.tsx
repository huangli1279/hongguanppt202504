import React from 'react';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseStackedBarChart } from './BaseStackedBarChart';
import { gdpContributionData } from '@/data/gdp';
import { chartColors } from '@/utils/chartColors';

export const ContentSlide07: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          净出口Q4贡献率升至31.1%有效对冲内需缺口，
          <span className="text-webank-accent">投资贡献率仅16%</span>
        </>
      }
      cardColumns={3}
      chartColumns={1}
      cards={
        <>
          <BaseCard title="外需：强力支撑" delay="200ms" variant="accent">
            <p>
              <span className="font-bold text-green-600">31.1%</span> 贡献率，全年出口增长 <span className="text-green-600">6.1%</span>。外贸韧性极大缓解了内需不足压力，Q4净出口对增长贡献率达31.1%，呈现典型的<span className="font-bold">"外需好于内需"</span>特征。
            </p>
          </BaseCard>

          <BaseCard title="投资：明显拖累" delay="400ms">
            <p>
              <span className="font-bold text-red-600">16.0%</span> 贡献率，Q4投资总额贡献率仅16.0%。受<span className="font-bold">房地产开发投资</span> (<span className="text-red-600">-17.2%</span>) 深度调整影响，全年固投下降3.8%，制造业投资仅维持微增。
            </p>
          </BaseCard>

          <BaseCard title="消费：压舱石" delay="600ms">
            <p>
              <span className="font-bold text-webank-accent">52.9%</span> 贡献率，虽然社零增速放缓，但以旧换新及服务需求释放带动<span className="font-bold">服务消费</span> (<span className="text-green-600">+5.5%</span>) 占比提升，最终消费支出贡献率维持在50%以上，发挥基础性作用。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="800ms">
          <BaseStackedBarChart
            data={gdpContributionData}
            title="2024-2025年GDP当季同比贡献率：三大需求"
            subtitle="单位: %"
            bars={[
              { dataKey: 'consumption', name: '最终消费支出', color: chartColors.accent },
              { dataKey: 'investment', name: '资本形成总额', color: chartColors.negative },
              { dataKey: 'netExport', name: '货物和服务净出口', color: chartColors.positive },
            ]}
            legendOrder={['最终消费支出', '资本形成总额', '货物和服务净出口']}
            barSize={28}
            yAxisDomain={[0, 100]}
            showYAxis
            showLabels
          />
        </ChartContainer>
      }
    />
  );
};
