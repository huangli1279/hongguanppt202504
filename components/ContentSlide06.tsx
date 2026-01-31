import React from 'react';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseBarChart } from './BaseBarChart';
import { detailedIndustryGrowthData } from '@/data/industry';
import { quarterColors } from '@/utils/chartColors';

export const ContentSlide06: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          装备制造业（+9.2%）和高技术制造业（+9.4%）全年增速显著快于整体
        </>
      }
      cardColumns={3}
      chartColumns={1}
      cards={
        <>
          <BaseCard title="信息与租赁服务业双位数高增" delay="200ms" variant="accent">
            <p>
              在新质生产力核心动能带动下，<span className="font-bold text-green-600">信息服务业</span>全年维持高增速（Q4:<span className="text-green-600">10.7%</span>）；<span className="font-bold text-green-600">租赁和商务服务业</span>四季度增长<span className="text-green-600">12.7%</span>，主要得益于服务消费回暖和以金融、科技为代表的高端商务活动的强劲需求拉动。
            </p>
          </BaseCard>

          <BaseCard title="制造业稳健支撑" delay="400ms">
            <p>
              <span className="font-bold">制造业</span> (Q4: 5.1%) 和 <span className="font-bold">工业</span> (Q4: 5.0%) 增速虽放缓但仍高于GDP整体 (4.5%)，体现工业生产韧性。
            </p>
          </BaseCard>

          <BaseCard title="房地产建筑拖累" delay="600ms">
            <p>
              <span className="font-bold text-red-600">建筑业</span> (Q4: <span className="text-red-600">-2.5%</span>) 和 <span className="font-bold text-red-600">房地产业</span> (Q4: <span className="text-red-600">-1.0%</span>) 增速为负，受房地产投资深度调整影响，对整体经济形成拖累。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="800ms">
          <BaseBarChart
            data={detailedIndustryGrowthData}
            title="2025年一二三产业细分行业GDP当季同比数据"
            subtitle="单位: %"
            xAxisKey="industry"
            bars={[
              { dataKey: '2025-03', name: '2025-03', color: quarterColors.Q1 },
              { dataKey: '2025-06', name: '2025-06', color: quarterColors.Q2 },
              { dataKey: '2025-09', name: '2025-09', color: quarterColors.Q3 },
              { dataKey: '2025-12', name: '2025-12', color: quarterColors.Q4 },
            ]}
            legendOrder={['2025-03', '2025-06', '2025-09', '2025-12']}
            barSize={12}
            showYAxis
            yAxisDomain={[-5, 15]}
            showReferenceLine
            referenceLineY={0}
          />
        </ChartContainer>
      }
    />
  );
};
