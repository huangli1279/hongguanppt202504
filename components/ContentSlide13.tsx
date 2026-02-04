import React from 'react';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseTable, ColumnConfig } from './BaseTable';
import { industrialProfitData, industryProfitGrowthData } from '@/data/profit';

const formatNumber = (val: number) => {
  return val.toLocaleString('en-US', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1
  });
};

const renderColoredCell = (value: any, row: any) => {
  if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
  const num = Number(value);
  if (isNaN(num)) return value;
  
  const formatted = formatNumber(num);
  // 只在特定行进行着色
  if (row.time === '2512' || row.time === '2025全年') {
    if (num > 0) return <span className="text-red-500">{formatted}</span>;
    if (num < 0) return <span className="text-green-600">{formatted}</span>;
  }
  
  return <span className="text-slate-600">{formatted}</span>;
};

const renderGrowthCell = (value: any) => {
  const num = Number(value);
  if (isNaN(num)) return value;
  const formatted = formatNumber(num);
  if (num > 0) return <span className="text-red-500">{formatted}</span>;
  if (num < 0) return <span className="text-green-600">{formatted}</span>;
  return <span className="text-slate-600">{formatted}</span>;
};

const columns: ColumnConfig[] = [
  { key: 'time', title: '日期', width: '70px', align: 'left' },
  { key: 'totalProfit', title: '利润', width: '80px', align: 'right', render: renderColoredCell },
  { key: 'revenue', title: '营收', width: '90px', align: 'right' },
  { key: 'cost', title: '成本', width: '90px', align: 'right' },
  { key: 'revenueMinusCost', title: '营收 - 成本', width: '100px', align: 'right', render: renderColoredCell },
  { key: 'expenses', title: '费用(不含研发费用)', width: '140px', align: 'right', render: renderColoredCell },
  { key: 'investmentIncome', title: '投资收益', width: '90px', align: 'right', render: renderColoredCell },
];

const growthColumns: ColumnConfig[] = [
  { key: 'industry', title: '行业', align: 'left' },
  { key: 'growth', title: '同比增长(%)', align: 'right', render: renderGrowthCell },
];

export const ContentSlide13: React.FC = () => {
  return (
    <BaseContentSlide
      title="2025年企业效益：投资收益掩盖主业亏损，行业表现呈现两极分化"
      cardColumns={2}
      cards={
        <>
          <BaseCard title="投资收益拉动全年工业企业利润同比增长" delay="200ms" variant="accent">
            <div className="space-y-2">
              <p className="text-sm leading-relaxed text-webank-text">
                2025年全年利润实现微弱正增长（<span className="font-bold text-red-500">+0.6%</span>），其中营业收入同比增长1.1%，增速放缓（去年增长2.1%），营业成本同比增长1.3%，投资收益同比增长9.5%；
              </p>
              <p className="text-sm leading-relaxed text-webank-text">
                12月工业企业利润当月同比<span className="font-bold text-red-500">+5.3%</span>，利润高增的主要驱动力来自投资收益；
              </p>
            </div>
          </BaseCard>
          <BaseCard title="高技术制造支撑大局，传统采矿与消费品制造拖累严重" delay="400ms">
            <div className="space-y-2">
              <p className="text-sm leading-relaxed text-webank-text">
                <span className="font-bold text-webank-blue">高技术制造业</span>成为利润修复的核心支撑，计算机、通信和其他电子设备制造业增长<span className="font-bold text-red-500">19.5%</span>，专用设备制造业增长<span className="font-bold text-red-500">5.7%</span>，电气机械和器材制造业增长<span className="font-bold text-red-500">4.9%</span>，通用设备制造业增长<span className="font-bold text-red-500">4.2%</span>；
              </p>
              <p className="text-sm leading-relaxed text-webank-text">
                反观<span className="font-bold text-webank-blue">采矿业</span>受价格波动影响大幅拖累整体表现，<span className="font-bold text-webank-blue">消费品制造</span>亦受制于需求疲软而复苏缓慢。
              </p>
            </div>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <BaseTable
              data={industrialProfitData}
              columns={columns}
              title="工业企业利润分项当月同比增加值"
              subtitle={
                <>
                  <span className="bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100 font-bold text-webank-blue mr-2">
                    利润 = 营收 - 成本 - 费用 + 投资收益 + 其它收益
                  </span>
                  单位：亿元
                </>
              }
              dateColumn="time"
              colorizeNumbers={false}
            />
          </ChartContainer>
          <ChartContainer delay="800ms">
            <BaseTable
              data={industryProfitGrowthData}
              columns={growthColumns}
              title="2025年部分行业利润同比增长情况"
              subtitle="单位：%"
              colorizeNumbers={false}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
