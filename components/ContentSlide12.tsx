import React from 'react';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseTable, ColumnConfig } from './BaseTable';
import { industrialProfitData } from '@/data/profit';

const columns: ColumnConfig[] = [
  { key: 'time', title: '月份', width: '70px', align: 'left' },
  { key: 'revenue', title: '营业收入', width: '90px', align: 'right' },
  { key: 'cost', title: '营业成本', width: '90px', align: 'right' },
  { key: 'operatingProfit', title: '营业利润', width: '80px', align: 'right' },
  { key: 'totalProfit', title: '利润总额', width: '80px', align: 'right' },
  { key: 'investmentIncome', title: '投资收益', width: '80px', align: 'right' },
];

export const ContentSlide12: React.FC = () => {
  return (
    <BaseContentSlide
      title="2025年企业效益：投资收益掩盖主业亏损，行业表现呈现两极分化"
      cardColumns={2}
      cards={
        <>
          <BaseCard title="账面利润回正掩盖主营业务的实际下滑" delay="200ms" variant="accent">
            <p className="text-sm leading-relaxed">
              2025年工业企业利润全年实现<span className="font-bold">0.6%</span>的微幅增长，较2024年（下降2.3%）实现转正；四季度利润增速由10-11月的负增长转为12月的<span className="font-bold">5.3%</span>，增速回升主要得益于投资收益等非经营性损益的集中入账（贡献率高达<span className="font-bold">17.4个百分点</span>）。若剔除此因素，内生利润实际同比<span className="font-bold">下降12.9%</span>，且降幅较上月走阔，叠加营收与毛利的双重下滑，反映出企业主营业务盈利能力依然疲弱。
            </p>
          </BaseCard>

          <BaseCard title="高技术制造支撑大局，传统采矿与消费品制造拖累严重" delay="400ms">
            <p className="text-sm leading-relaxed">
              高技术制造业（全年增长<span className="font-bold">13.3%</span>）与装备制造业（全年增长<span className="font-bold">7.7%</span>）凭借高增长（如集成电路、航空航天）成为利润修复的核心支撑，反观采矿业受价格波动影响大幅拖累整体表现，消费品制造亦受制于需求疲软而复苏缓慢。当前企业仍处于被动库存调整阶段，周转效率提升有限，未来企业效益的实质性改善，仍需依赖从“投资收益支撑”向“主营业务修复”的逻辑切换。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="600ms" className="col-span-2">
          <BaseTable
            data={industrialProfitData}
            columns={columns}
            title="2025年工业企业主要财务指标月度数据"
            subtitle="单位：亿元"
            rowHeight="auto"
            stickyHeader={true}
            dateColumn="time"
          />
        </ChartContainer>
      }
    />
  );
};
