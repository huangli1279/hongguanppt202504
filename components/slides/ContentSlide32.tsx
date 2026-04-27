import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart, BarConfig } from '../base/BaseBarChart';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { fiscalExpenditureGrowthData, fiscalFundsComparisonData } from '@/data/fiscalRevenue';

const formatNumber = (val: number) =>
  val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const renderDelta = (value: any) => {
  if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
  const num = Number(value);
  if (isNaN(num)) return value;
  const formatted = (num > 0 ? '+' : '') + formatNumber(num);
  if (num > 0) return <span className="text-red-500 font-semibold">{formatted}</span>;
  if (num < 0) return <span className="text-green-600 font-semibold">{formatted}</span>;
  return <span className="text-slate-600">{formatted}</span>;
};

const renderAmount = (value: any) => {
  if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
  const num = Number(value);
  if (isNaN(num)) return value;
  return <span className="text-slate-700">{formatNumber(num)}</span>;
};

const fundsColumns: ColumnConfig[] = [
  { key: 'ledger', title: '账本', align: 'left', width: '28%' },
  { key: 'item', title: '项目', align: 'left', width: '36%' },
  { key: 'y2025', title: '2025', align: 'right', width: '10%', render: renderAmount },
  { key: 'y2026', title: '2026', align: 'right', width: '10%', render: renderAmount, highlight: true },
  { key: 'delta', title: '同比增量', align: 'right', width: '16%', render: renderDelta },
];

export const ContentSlide32: React.FC = () => {
  const bars: BarConfig[] = [
    { dataKey: 'growth', name: '同比增速' },
  ];

  return (
    <BaseContentSlide
      title={<>全年实施积极财政政策，一般公共预算财政支出同比增长2.6%，精准倾斜民生</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="积极财政持续加力" delay="0ms" variant="accent">
            <p>
              两会定调，全年继续实施更加积极的财政政策，赤字规模 <span className="text-red-500 font-semibold">5.89万亿</span>，较上年增加 <span className="text-red-500 font-semibold">2,300亿</span>。一般公共预算支出规模将首次达到 <span className="text-red-500 font-semibold">30万亿元</span>，比上年增加约 <span className="text-red-500 font-semibold">1.27万亿元</span>。拟发行超长期特别国债 <span className="text-red-500 font-semibold">1.3万亿元</span>，持续支持"两重"建设、"两新"工作等，更加注重提振消费、投资于人、保障民生。
            </p>
          </BaseCard>
          <BaseCard title="保民生成绝对主力" delay="120ms">
            <p>
              一季度，一般公共预算支出 <span className="text-red-500 font-semibold">7.47万亿</span>，支出规模为年初预算的 <span className="text-red-500 font-semibold">24.9%</span>，进度为近5年最快。民生等重点领域支出增幅领跑，其中，卫生健康<span className="text-red-500 font-semibold">同比增12.1%</span>、社会保障和就业<span className="text-red-500 font-semibold">同比增9.0%</span>。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-6">
          <ChartContainer delay="600ms">
            <BaseTable
              data={fiscalFundsComparisonData}
              columns={fundsColumns}
              title="2025-2026年财政资金规模对比（按账本口径）"
              subtitle="数据来源：财政部 | 单位：万亿"
              colorizeNumbers={false}
              rowHeight="auto"
            />
          </ChartContainer>

          <ChartContainer delay="600ms">
            <BaseBarChart
              data={fiscalExpenditureGrowthData}
              title="财政支出各领域同比增速"
              subtitle="数据来源：财政部 | 单位：%"
              bars={bars}
              xAxisKey="category"
              yAxisDomain={[-10, 15]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              showLabels={true}
              barSize={22}
              xAxisAngle={-45}
              xAxisHeight={50}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
