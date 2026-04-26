import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseBarChart } from '../base/BaseBarChart';
import { chartColors } from '@/utils/chartColors';
import { industryGrowthByIndustryRecentData as industryGrowthData } from '../../data';

export const ContentSlide07: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          高技术制造（+12.5%）、装备制造（+8.9%）显著快于整体，新旧动能分化
        </>
      }
      cardColumns={3}
      chartColumns={1}
      cards={
        <>
          <BaseCard title="新动能·高端制造领跑" delay="0ms" variant="accent">
            <p>
              工业内部新动能持续突破：<span className="font-bold text-green-600">高技术制造</span>一季度同比增长<span className="text-green-600">12.5%</span>，<span className="font-bold text-green-600">装备制造</span>增长<span className="text-green-600">8.9%</span>，均显著快于<span className="font-bold">工业</span>整体的<span className="font-bold">6.1%</span>和<span className="font-bold">制造业</span>的<span className="font-bold">6.3%</span>。
            </p>
          </BaseCard>

          <BaseCard title="新动能·现代服务高景气" delay="120ms">
            <p>
              第三产业中代表新质生产力的现代服务业延续两位数增长：<span className="font-bold text-green-600">信息服务业</span>一季度同比增长<span className="text-green-600">10.6%</span>，<span className="font-bold text-green-600">租赁商务</span>增长<span className="text-green-600">12.2%</span>，构成服务业增长的核心引擎。
            </p>
          </BaseCard>

          <BaseCard title="旧动能·地产建筑筑底" delay="600ms">
            <p>
              传统动能仍在周期底部运行：<span className="font-bold text-red-600">建筑业</span>增加值同比下降<span className="text-red-600">3.8%</span>，降幅较去年四季度继续扩大；<span className="font-bold text-red-600">房地产业</span>同比下降<span className="text-red-600">0.1%</span>，全国房地产开发投资同比下降<span className="font-bold text-red-600">11.2%</span>，仍是经济的主要拖累项。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="600ms">
          <BaseBarChart
            data={industryGrowthData}
            title="分行业增加值同比增速"
            subtitle="单位: %；数据来源：国家统计局"
            xAxisKey="industry"
            bars={[
              { dataKey: '2025-06', name: '2025-06', color: chartColors.quaternary },
              { dataKey: '2025-09', name: '2025-09', color: chartColors.tertiary },
              { dataKey: '2025-12', name: '2025-12', color: chartColors.secondary },
              { dataKey: '2026-03', name: '2026-03', color: chartColors.primary },
            ]}
            legendOrder={['2025-06', '2025-09', '2025-12', '2026-03']}
            barSize={10}
            showYAxis
            yAxisDomain={[-5, 14]}
            showReferenceLine
            referenceLineY={0}
          />
        </ChartContainer>
      }
    />
  );
};
