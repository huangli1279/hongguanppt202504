import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';
import { depositData } from '@/data/depositData';

export const ContentSlide39: React.FC = () => {
  const depositTableData = depositData;

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
        { key: 'increaseTotal', title: '总额', align: 'right' },
        { key: 'increaseHousehold', title: '住户', align: 'right' },
        { key: 'increaseNonFinancial', title: '非金融企业', align: 'right' },
        { key: 'increaseFiscal', title: '财政', align: 'right' },
      ],
    },
  ];

  return (
    <BaseContentSlide
      title="12月居民贷款罕见净偿还916亿元，避险情绪驱动存款回流银行体系"
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-1 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="人民币存款余额新增26.4万亿，住户存款为增长主力" delay="400ms">
            2025年人民币存款余额同比增长8.7%。住户存款全年新增14.64万亿元 ，占比54.6%。10月住户存款减少1.1万亿，大规模定存到期后主要选择提前还房贷，或选择安全性等同于存款且收益率略高的国债。
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
              colorizeNumbers={true}
              dateColumn="period"
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
