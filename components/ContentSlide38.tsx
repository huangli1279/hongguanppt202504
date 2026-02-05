import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';
import { loanData } from '@/data/loanData';

export const ContentSlide38: React.FC = () => {
  const loanTableData = loanData.map(item => ({
    period: item.period,
    householdLoan: item.householdLoan,
    enterpriseLoan: item.enterpriseLoan,
    billFinancing: item.billFinancing,
    nonBankLoan: item.nonBankLoan,
  }));

  const highlightRows = loanTableData.reduce<number[]>((acc, item, index) => {
    if (['2025-10', '2025-11', '2025-12'].includes(item.period)) {
      acc.push(index);
    }
    return acc;
  }, []);

  const formatInteger = (val: any) => {
    if (typeof val === 'number') {
      return val.toLocaleString('en-US', { maximumFractionDigits: 0 });
    }
    return val;
  };

  const loanColumns: ColumnConfig[] = [
    { key: 'period', title: '时间', align: 'center' },
    { key: 'householdLoan', title: '住户贷款', align: 'right', render: (val) => formatInteger(val) },
    { key: 'enterpriseLoan', title: '企业贷款', align: 'right', render: (val) => formatInteger(val) },
    { key: 'billFinancing', title: '票据融资', align: 'right', render: (val) => formatInteger(val) },
    { key: 'nonBankLoan', title: '非银金融机构贷款', align: 'right', render: (val) => formatInteger(val) },
  ];


  return (
    <BaseContentSlide
      title="住户贷款全年规模无增长，四季度较三季度下降"
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-1 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="企业扩表 居民缩表" delay="200ms" variant="accent">
            <p>
              企业贷款稳步增长，由年初<span className="font-bold text-webank-blue">156.9万亿元</span>扩张至年末<span className="font-bold text-webank-blue">167.5万亿元</span>。住户贷款全年"原地踏步"，四季度出现了逐月萎缩态势（10月83.6万亿到12月83.3万亿），主要受房地产销售持续低迷及贷款系列政策影响，导致居民端实质性缩表。
            </p>
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <div className="flex flex-1 min-h-0">
          <ChartContainer delay="600ms" className="w-full min-h-0">
            <BaseTable
              data={loanTableData}
              columns={loanColumns}
              title="2024-2025年人民币贷款分项数据"
              subtitle="数据来源：中国人民银行｜单位：亿元"
              colorizeNumbers={false}
              dateColumn="period"
              highlightRows={highlightRows}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
