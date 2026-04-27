import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseStackedBarChart } from '../base/BaseStackedBarChart';
import { seriesColors } from '@/utils/chartColors';
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
          <BaseCard title="消费需求平稳增长" delay="0ms" variant="accent">
            <p>
              春节假期和消费品以旧换新等政策带动消费活力释放。一季度最终消费支出拉动GDP增长
              <span className="font-bold text-webank-accent">2.4个百分点</span>，贡献GDP增长
              <span className="font-bold text-webank-accent">48%</span>。
            </p>
          </BaseCard>

          <BaseCard title="投资结构持续优化" delay="120ms">
            <p>
              “两重”建设加快推进，“两新”政策优化实施。一季度资本形成总额拉动GDP增长
              <span className="font-bold text-webank-accent">1.9个百分点</span>，贡献率达
              <span className="font-bold text-webank-accent">38%</span>。
            </p>
          </BaseCard>

          <BaseCard title="净出口韧性彰显但贡献占比有限" delay="600ms">
            <p>
              一季度货物和服务净出口拉动GDP增长
              <span className="font-bold text-webank-accent">0.8个百分点</span>，出口总额同比增长
              <span className="text-green-600">14.7%</span>，对GDP增长的贡献率
              <span className="font-bold text-webank-accent">16%</span>。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="600ms">
          <BaseStackedBarChart
            data={gdpContributionData}
            title="三大需求对GDP增长的贡献率"
            subtitle="数据来源：国家统计局｜单位：%"
            bars={[
              { dataKey: 'consumption', name: '最终消费支出', color: seriesColors[1] },
              { dataKey: 'investment', name: '资本形成总额', color: seriesColors[2] },
              { dataKey: 'netExport', name: '货物和服务净出口', color: seriesColors[3] },
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
