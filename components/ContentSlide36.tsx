import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';
import { loanData } from '@/data/loanData';

export const ContentSlide36: React.FC = () => {
  // 表格数据
  const tableData = loanData.map(item => ({
    period: item.period,
    householdLoan: item.householdLoan,
    enterpriseLoan: item.enterpriseLoan,
    billFinancing: item.billFinancing,
    nonBankLoan: item.nonBankLoan,
  }));

  const columns: ColumnConfig[] = [
    { key: 'period', title: '时间', align: 'center' },
    { key: 'householdLoan', title: '住户贷款', align: 'right', render: (v) => v.toLocaleString() },
    { key: 'enterpriseLoan', title: '企业贷款', align: 'right', render: (v) => v.toLocaleString() },
    { key: 'billFinancing', title: '票据融资', align: 'right', render: (v) => v.toLocaleString() },
    { key: 'nonBankLoan', title: '非银金融机构贷款', align: 'right', render: (v) => v.toLocaleString() },
  ];

  return (
    <BaseContentSlide
      title="12月居民贷款罕见净偿还916亿元，避险情绪驱动存款回流银行体系"
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-4 flex-shrink-0">
          <BaseCard title="企业扩表 居民缩表" delay="200ms">
            企业贷款稳步增长，由年初<span className="font-bold text-webank-blue">156.9万亿元</span>扩张至年末<span className="font-bold text-webank-blue">167.5万亿元</span>。住户贷款全年"原地踏步"，四季度出现逐月萎缩态势（10月：83.6万亿到12月：83.3万亿），主要受房地产销售持续低迷及"提前还贷潮"拖累，导致居民端实质性缩表。
          </BaseCard>
          <BaseCard title="信用收缩" delay="400ms">
            企业端微弱的回升难掩整体需求枯竭，总增量断崖式下跌 <span className="font-bold text-red-500">80%</span> 表明金融体系已从"宽货币"陷入"信用收缩"的冰点，反映出实体经济内生性融资意愿极度低迷。
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <div className="flex-1 min-h-0">
          <ChartContainer delay="600ms">
            <BaseTable
              data={tableData}
              columns={columns}
              title="2024-2025年人民币贷款分项数据序列"
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
