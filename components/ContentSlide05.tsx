import React from 'react';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseBarChart } from './BaseBarChart';
import { BaseStackedBarChart } from './BaseStackedBarChart';
import { industryGrowthByIndustryData, industryContributionData2024 } from '@/data';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { quarterColors, industryColors } from '@/utils/chartColors';

export const ContentSlide05: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          结构性分析：产业分化
          <span className="text-webank-accent">第三产业Q4增长5.2%支撑稳健，工业受建筑业拖累放缓</span>
        </>
      }
      cardColumns={2}
      cards={
        <>
          <BaseCard title="三产拉动分化" icon={TrendingUp} delay="100ms">
            <p>
              <span className="font-bold text-webank-accent">第三产业 (5.2%)</span>: 核心支撑。信息技术 (<span className="text-green-600">+11.1%</span>) 与租赁商务服务 (<span className="text-green-600">+10.3%</span>) 领跑，现代服务业增势强劲。
            </p>
          </BaseCard>

          <BaseCard title="第二产业明显回落" icon={TrendingDown} delay="200ms">
            <p>
              <span className="font-bold">第二产业 (3.4%)</span>: 虽然12月工业回升，但受房地产投资深跌 (<span className="text-red-600">-17.2%</span>) 影响，建筑业及上游原材料严重拖累整体表现。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="400ms">
            <BaseBarChart
              data={industryGrowthByIndustryData}
              title="2025年三产业GDP增加值当季同比增速"
              subtitle="单位: %"
              xAxisKey="industry"
              bars={[
                { dataKey: '2025-03', name: '2025-03', color: quarterColors.Q1 },
                { dataKey: '2025-06', name: '2025-06', color: quarterColors.Q2 },
                { dataKey: '2025-09', name: '2025-09', color: quarterColors.Q3 },
                { dataKey: '2025-12', name: '2025-12', color: quarterColors.Q4 },
              ]}
              legendOrder={['2025-03', '2025-06', '2025-09', '2025-12']}
              barSize={16}
              showYAxis
              showLabels
            />
          </ChartContainer>
          <ChartContainer delay="600ms">
            <BaseStackedBarChart
              data={industryContributionData2024}
              title="2024-2025年三产业GDP当季同比拉动数据"
              subtitle="单位: 百分点"
              bars={[
                { dataKey: 'primaryContrib', name: '第一产业拉动', color: industryColors.primary },
                { dataKey: 'secondaryContrib', name: '第二产业拉动', color: industryColors.secondary },
                { dataKey: 'tertiaryContrib', name: '第三产业拉动', color: industryColors.tertiary },
              ]}
              legendOrder={['第一产业拉动', '第二产业拉动', '第三产业拉动']}
              barSize={20}
              showYAxis
              showLabels
            />
          </ChartContainer>
        </>
      }
    />
  );
};
