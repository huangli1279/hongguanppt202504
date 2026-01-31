import React from 'react';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseTable, ColumnConfig } from './BaseTable';
import { industrialProfitData } from '../data';
import { TrendingDown, Calculator } from 'lucide-react';

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
      title={
        <>
          11月工企利润因投资收益基数重挫13.1%，
          <span className="text-webank-accent">剔除后实际经营效益呈"弱修复"</span>
        </>
      }
      cardColumns={2}
      cards={
        <>
          <BaseCard title="利润读数剧烈波动" icon={TrendingDown} delay="100ms">
            <p>
              11月规上工业企业利润同比<span className="font-bold text-red-600">下降13.1%</span>，降幅较10月大幅扩大（-5.5%）。全年累计增速收窄至<span className="font-bold">0.1%</span>，主要受非经营性因素扰动。
            </p>
          </BaseCard>

          <BaseCard title="核心归因：投资收益错位" icon={Calculator} delay="200ms">
            <p>
              前期股市上涨带来的高基数导致"其他损益"贡献大幅转负。若剔除此因素，实际经营利润增速为<span className="font-bold">-6.7%</span>，较上月回升<span className="font-bold text-green-600">5.1个百分点</span>，内生获利能力边际改善。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <ChartContainer delay="400ms" className="col-span-2">
          <BaseTable
            data={industrialProfitData}
            columns={columns}
            title="规模以上工业企业主要财务指标（累计值）"
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
