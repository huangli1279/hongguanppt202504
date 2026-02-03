import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';
import { depositData } from '@/data/depositData';

export const ContentSlide39: React.FC = () => {
  const depositTableData = depositData;

  const renderIncrease = (val: any, row: any) => {
    if (typeof val !== 'number') return val;
    const isTargetMonth = ['2025-10', '2025-11', '2025-12'].includes(row.period);
    if (!isTargetMonth) return val.toFixed(1);

    if (val > 0) return <span className="text-red-500 font-medium">{val.toFixed(1)}</span>;
    if (val < 0) return <span className="text-green-600 font-medium">{val.toFixed(1)}</span>;
    return val.toFixed(1);
  };

  const depositColumns: ColumnConfig[] = [
    { key: 'period', title: '月份', align: 'center' },
    {
      key: 'group-balance',
      title: '人民币存款余额',
      children: [
        { key: 'balanceTotal', title: '总额', align: 'right' },
        { key: 'balanceHousehold', title: '住户', align: 'right' },
        { key: 'balanceNonFinancial', title: '非金融企业', align: 'right' },
        { key: 'balanceFiscal', title: '财政', align: 'right' },
      ],
    },
    {
      key: 'group-increase',
      title: '当月增加',
      children: [
        { key: 'increaseTotal', title: '总额', align: 'right', render: renderIncrease },
        { key: 'increaseHousehold', title: '住户', align: 'right', render: renderIncrease },
        { key: 'increaseNonFinancial', title: '非金融企业', align: 'right', render: renderIncrease },
        { key: 'increaseFiscal', title: '财政', align: 'right', render: renderIncrease },
      ],
    },
  ];

  return (
    <BaseContentSlide
      title="存款总额增速回升，住户存款同比多增，企业存款增长乏力"
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-1 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="住户存款为增长主力" delay="400ms">
            12月末，人民币存款余额同比增速为8.7%，较11月末提升1个百分点，12月当月新增人民币存款1.68万亿元，同比多增3.08万亿；
            12月住户存款新增2.58万亿，同比多增3900亿，非金融企业存款同比少增5857亿，企业资金活化程度不足
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <div className="flex gap-4 flex-1 min-h-0">
          <ChartContainer delay="700ms" className="w-full min-h-0">
            <BaseTable
              data={depositTableData}
              columns={depositColumns}
              title="人民币存款余额及增加额统计 2025"
              subtitle="单位：亿元"
              rowHeight="auto"
              stickyHeader={true}
              colorizeNumbers={false}
              dateColumn="period"
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
