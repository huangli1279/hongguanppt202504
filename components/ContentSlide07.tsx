import React from 'react';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseBarChart } from './BaseBarChart';
import { chartColors } from '@/utils/chartColors';

const industryGrowthData = [
  { industry: '农林牧渔业', '2025-06': 4.0, '2025-09': 4.1, '2025-12': 4.3, '2026-03': 4.0 },
  { industry: '工业', '2025-06': 6.2, '2025-09': 5.8, '2025-12': 5.0, '2026-03': 6.1 },
  { industry: '建筑业', '2025-06': -0.6, '2025-09': -2.3, '2025-12': -2.5, '2026-03': -3.8 },
  { industry: '批发零售业', '2025-06': 6.0, '2025-09': 4.9, '2025-12': 3.7, '2026-03': 4.1 },
  { industry: '交运仓储邮政', '2025-06': 5.6, '2025-09': 4.8, '2025-12': 3.4, '2026-03': 4.3 },
  { industry: '住宿餐饮业', '2025-06': 5.2, '2025-09': 3.6, '2025-12': 5.6, '2026-03': 4.3 },
  { industry: '金融业', '2025-06': 5.8, '2025-09': 5.2, '2025-12': 3.3, '2026-03': 6.5 },
  { industry: '房地产业', '2025-06': 1.0, '2025-09': -0.2, '2025-12': -1.0, '2026-03': -0.1 },
  { industry: '信息服务业', '2025-06': 11.8, '2025-09': 11.7, '2025-12': 10.7, '2026-03': 10.6 },
  { industry: '租赁商务', '2025-06': 9.0, '2025-09': 8.6, '2025-12': 12.7, '2026-03': 12.2 },
  { industry: '制造业', '2025-06': 6.5, '2025-09': 6.3, '2025-12': 5.1, '2026-03': 6.3 },
  { industry: '高技术制造', '2025-06': null, '2025-09': null, '2025-12': 9.0, '2026-03': 12.5 },
  { industry: '装备制造', '2025-06': null, '2025-09': null, '2025-12': 7.9, '2026-03': 8.9 },
  { industry: '数字产品制造', '2025-06': null, '2025-09': null, '2025-12': 7.9, '2026-03': 11.2 },
];

export const ContentSlide07: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          装备制造业（+8.9%）和高技术制造业（+12.5%）同比增速保持显著快于整体，新旧动能分化
        </>
      }
      cardColumns={3}
      chartColumns={1}
      cards={
        <>
          <BaseCard title="新质生产力强劲" delay="200ms" variant="accent">
            <p>
              第三产业中，<span className="font-bold text-green-600">信息传输、软件和信息技术服务业</span>一季度同比增长<span className="text-green-600">10.6%</span>，<span className="font-bold text-green-600">租赁和商务服务业</span>增长<span className="text-green-600">12.2%</span>，保持接近或超过两位数增长。
            </p>
          </BaseCard>

          <BaseCard title="高端制造领跑" delay="400ms">
            <p>
              一季度第二产业增加值同比增长<span className="font-bold">4.9%</span>，规上工业增加值增长<span className="font-bold">6.1%</span>；AI产业链和高端装备延续强势，3月电子设备制造业增长<span className="text-green-600">12.5%</span>，运输设备制造业增长<span className="text-green-600">13.3%</span>。
            </p>
          </BaseCard>

          <BaseCard title="房地产建筑拖累" delay="600ms">
            <p>
              房地产仍在周期底部运行，一季度全国房地产开发投资同比下降<span className="font-bold text-red-600">11.2%</span>，降幅较1-2月扩大0.1个百分点；供给端持续收缩，<span className="font-bold text-red-600">建筑业</span>增加值同比下降<span className="text-red-600">3.8%</span>。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="800ms">
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
