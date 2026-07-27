import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseStackedBarChart } from '../base/BaseStackedBarChart';
import { seriesColors } from '@/utils/chartColors';
import { gdpContributionData } from '@/data/gdp';

export const ContentSlide07: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          三驾马车贡献——出口增速冲高至
          <span className="text-webank-accent">17.6%</span>
          ，投资与消费受政策节奏及基数扰动阶段性承压
        </>
      }
      cardColumns={1}
      chartColumns={1}
      cards={
        <>
          <BaseCard title="三驾马车贡献" delay="0ms" variant="accent">
            <p>
              消费支出平稳增长，最终消费支出拉动GDP增长
              <span className="font-bold">1.9个百分点</span>
              ，贡献增长的<span className="font-bold">45.2%</span>
              ；资本形成总额拉动GDP增长
              <span className="font-bold">1.5个百分点</span>
              ，贡献增长的<span className="font-bold">34%</span>
              ；出口保持韧性，二季度货物和服务净出口拉动GDP增长
              <span className="font-bold">0.9个百分点</span>
              ，贡献增长的<span className="font-bold">20.8%</span>。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="600ms">
          <BaseStackedBarChart
            data={gdpContributionData}
            title="三驾马车对GDP增长的贡献率"
            subtitle="数据来源：国家统计局｜单位：%"
            bars={[
              { dataKey: 'consumption', name: '消费支出', color: seriesColors[1] },
              { dataKey: 'investment', name: '资本形成总额', color: seriesColors[2] },
              { dataKey: 'netExport', name: '货物和服务净出口', color: seriesColors[3] },
            ]}
            legendOrder={['消费支出', '资本形成总额', '货物和服务净出口']}
            barSize={28}
            xAxisInterval={1}
            yAxisDomain={[0, 100]}
            showYAxis
            showLabels
          />
        </ChartContainer>
      }
    />
  );
};
