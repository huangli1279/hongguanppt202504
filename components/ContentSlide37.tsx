import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';
import { loanData } from '@/data/loanData';
import { depositData } from '@/data/depositData';

export const ContentSlide37: React.FC = () => {
  const loanTableData = loanData.map(item => ({
    period: item.period,
    householdLoan: item.householdLoan,
    enterpriseLoan: item.enterpriseLoan,
    billFinancing: item.billFinancing,
    nonBankLoan: item.nonBankLoan,
  }));

  const loanColumns: ColumnConfig[] = [
    { key: 'period', title: '时间', align: 'center' },
    { key: 'householdLoan', title: '住户贷款', align: 'right', render: (v) => v.toLocaleString() },
    { key: 'enterpriseLoan', title: '企业贷款', align: 'right', render: (v) => v.toLocaleString() },
    { key: 'billFinancing', title: '票据融资', align: 'right', render: (v) => v.toLocaleString() },
    { key: 'nonBankLoan', title: '非银金融机构贷款', align: 'right', render: (v) => v.toLocaleString() },
  ];

  const depositTableData = depositData;

  const formatBalance = (value: number) =>
    value.toLocaleString(undefined, { maximumFractionDigits: 0 });

  const formatIncrease = (value: number) => value.toLocaleString();

  const depositColumns: ColumnConfig[] = [
    { key: 'period', title: '月份', align: 'center' },
    {
      key: 'group-balance',
      title: '人民币存款余额',
      children: [
        { key: 'balanceTotal', title: '总额', align: 'right', render: formatBalance },
        { key: 'balanceHousehold', title: '住户', align: 'right', render: formatBalance },
        { key: 'balanceNonFinancial', title: '非金融企业', align: 'right', render: formatBalance },
        { key: 'balanceFiscal', title: '财政', align: 'right', render: formatBalance },
      ],
    },
    {
      key: 'group-increase',
      title: '当月增加',
      children: [
        { key: 'increaseTotal', title: '总额', align: 'right', render: formatIncrease },
        { key: 'increaseHousehold', title: '住户', align: 'right', render: formatIncrease },
        { key: 'increaseNonFinancial', title: '非金融企业', align: 'right', render: formatIncrease },
        { key: 'increaseFiscal', title: '财政', align: 'right', render: formatIncrease },
      ],
    },
  ];

  return (
    <BaseContentSlide
      title="12月居民贷款罕见净偿还916亿元，避险情绪驱动存款回流银行体系"
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="企业扩表 居民缩表" delay="200ms" variant="accent">
            企业贷款稳步增长，由年初<span className="font-bold text-webank-blue">156.9万亿元</span>扩张至年末<span className="font-bold text-webank-blue">167.5万亿元</span>。住户贷款全年"原地踏步"，四季度出现逐月萎缩态势（10月：83.6万亿到12月：83.3万亿），主要受房地产销售持续低迷及"提前还贷潮"拖累，导致居民端实质性缩表。
          </BaseCard>
          <BaseCard title="人民币存款余额新增26.4万亿，住户存款为增长主力" delay="400ms">
            2025年人民币存款余额同比增长8.7%。住户存款全年新增14.64万亿元 ，占比54.6%。10月住户存款减少1.1万亿，大规模定存到期后主要选择提前还房贷，或选择安全性等同于存款且收益率略高的国债。
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <div className="flex gap-4 flex-1 min-h-0 -ml-6">
          <ChartContainer delay="600ms" className="w-[42%] min-h-0 flex-shrink-0">
            <BaseTable
              data={loanTableData}
              columns={loanColumns}
              title="2024-2025年人民币贷款分项数据序列"
              subtitle="单位：亿元"
              rowHeight="auto"
              stickyHeader={true}
              colorizeNumbers={false}
              dateColumn="period"
            />
          </ChartContainer>
          <ChartContainer delay="700ms" className="flex-1 min-h-0">
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
