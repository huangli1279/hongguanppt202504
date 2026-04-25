import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';
import { depositData } from '@/data/depositData';

export const ContentSlide37: React.FC = () => {
  const depositTableData = depositData;

  const renderInteger = (val: any) => {
    if (typeof val !== 'number') return val;
    return val.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    });
  };

  const depositColumns: ColumnConfig[] = [
    { key: 'period', title: '月份', align: 'center' },
    {
      key: 'group-balance',
      title: '人民币存款余额',
      children: [
        { key: 'balanceTotal', title: '总额', align: 'right', render: renderInteger },
        { key: 'balanceHousehold', title: '住户', align: 'right', render: renderInteger },
        { key: 'balanceNonFinancial', title: '非金融企业', align: 'right', render: renderInteger },
        { key: 'balanceFiscal', title: '财政', align: 'right', render: renderInteger },
        { key: 'balanceFin', title: '非银金融机构', align: 'right', render: renderInteger },
      ],
    },
    {
      key: 'group-increase',
      title: '当月增加',
      children: [
        { key: 'increaseTotal', title: '总额', align: 'right', render: renderInteger },
        { key: 'increaseHousehold', title: '住户', align: 'right', render: renderInteger },
        { key: 'increaseNonFinancial', title: '非金融企业', align: 'right', render: renderInteger },
        { key: 'increaseFiscal', title: '财政', align: 'right', render: renderInteger },
        { key: 'increaseFin', title: '非银金融机构', align: 'right', render: renderInteger },
      ],
    },
  ];

  return (
    <BaseContentSlide
      title="全年人民币存款增加 26.4 万亿，住户存款增加 14.6 万亿"
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-1 gap-4 mb-6 flex-shrink-0">
          <BaseCard delay="400ms">
            <p>
              2025年人民币存款总额增加26.39万亿，较24年的17.99万亿增加46.7%。其中住户存款增加14.6万亿（24年14.2万亿），非银金融机构增加6.4万亿（24年约2.7万亿），非金融企业增加2.2万亿（24年-0.4万亿），财政增加0.7万亿（24年-0.2万亿）。
            </p>
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <div className="flex gap-6 flex-1 min-h-0">
          <ChartContainer delay="700ms" className="w-full min-h-0">
            <BaseTable
              data={depositTableData}
              columns={depositColumns}
              title="人民币存款余额及增加额统计"
              subtitle="数据来源：中国人民银行｜单位：亿元"
              colorizeNumbers={false}
              dateColumn="period"
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
