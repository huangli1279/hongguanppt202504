import React from 'react';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseStackedBarChart } from './BaseStackedBarChart';
import { gdpContributionData } from '@/data/gdp';

export const ContentSlide08: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          消费需求平稳增长，投资结构持续优化，净出口韧性彰显
        </>
      }
      cardColumns={3}
      chartColumns={1}
      cards={
        <>
          <BaseCard title="消费需求平稳增长" delay="200ms" variant="accent">
            <p>
              春节假期和消费品以旧换新等政策带动消费活力释放。一季度最终消费支出拉动GDP增长
              <span className="font-bold text-webank-accent">2.4个百分点</span>，贡献GDP增长
              <span className="font-bold text-webank-accent">48%</span>。
            </p>
          </BaseCard>

          <BaseCard title="投资结构持续优化" delay="400ms">
            <p>
              “两重”建设加快推进，“两新”政策优化实施。一季度资本形成总额拉动GDP增长
              <span className="font-bold text-webank-accent">1.9个百分点</span>，贡献率达
              <span className="font-bold text-webank-accent">38%</span>。
            </p>
          </BaseCard>

          <BaseCard title="净出口韧性彰显" delay="600ms">
            <p>
              外贸承压前行但结构继续优化。一季度货物和服务净出口拉动GDP增长
              <span className="font-bold text-webank-accent">0.8个百分点</span>，贡献GDP增长
              <span className="font-bold text-webank-accent">16%</span>，出口总额同比增长
              <span className="text-green-600">14.7%</span>。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="800ms">
          <BaseStackedBarChart
            data={gdpContributionData}
            title="三大需求对GDP增长的贡献率"
            subtitle="数据来源：国家统计局｜单位：%"
            bars={[
              { dataKey: 'consumption', name: '最终消费支出'},
              { dataKey: 'investment', name: '资本形成总额'},
              { dataKey: 'netExport', name: '货物和服务净出口'},
            ]}
            legendOrder={['最终消费支出', '资本形成总额', '货物和服务净出口']}
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
