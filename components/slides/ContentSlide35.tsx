import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart, BarConfig } from '../base/BaseBarChart';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { loanStockData, loanIncrementData } from '@/data/loanData';
import { chartColors } from '@/utils/chartColors';

export const ContentSlide35: React.FC = () => {
  const highlightRows = loanStockData.reduce<number[]>((acc, item, index) => {
    if (['2026-01', '2026-02', '2026-03'].includes(item.period)) {
      acc.push(index);
    }
    return acc;
  }, []);

  const formatTrillion = (val: any) =>
    typeof val === 'number' ? val.toFixed(2) : val;

  const loanColumns: ColumnConfig[] = [
    { key: 'period', title: '时间', align: 'center' },
    { key: 'householdLoan', title: '居民贷款', align: 'right', render: formatTrillion },
    { key: 'consumerLoan', title: '其中：消费贷款', align: 'right', render: formatTrillion },
    { key: 'businessLoan', title: '其中：经营贷款', align: 'right', render: formatTrillion },
    { key: 'enterpriseLoan', title: '企业贷款', align: 'right', render: formatTrillion },
    { key: 'billFinancing', title: '票据融资', align: 'right', render: formatTrillion },
    { key: 'nonBankLoan', title: '非银金融机构贷款', align: 'right', render: formatTrillion },
  ];

  const incrementBars: BarConfig[] = [
    { dataKey: 'q2024', name: '2024Q1', color: chartColors.quaternary },
    { dataKey: 'q2025', name: '2025Q1', color: chartColors.tertiary },
    { dataKey: 'q2026', name: '2026Q1', color: chartColors.primary },
  ];

  return (
    <BaseContentSlide
      title="企业贷款规模持续扩张，居民贷款中经营贷款增长好于消费贷款"
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-1 gap-4 mb-4 flex-shrink-0">
          <BaseCard title="居民信贷疲软" delay="0ms" variant="accent">
            <p>
              居民贷款同比少增<span className="font-bold text-webank-blue">7,468亿</span>，延续偏弱态势，消费贷增长弱于经营贷。居民贷款少增，与实体经济中房地产销售的低迷严密对应，居民购房加杠杆意愿尚未实质性恢复。
            </p>
          </BaseCard>
        </div>

        {/* 图表+表格区域 */}
        <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
          <ChartContainer delay="120ms" className="min-h-0">
            <BaseBarChart
              data={loanIncrementData}
              title="季度贷款增量数据"
              subtitle="数据来源：中国人民银行｜单位：亿元"
              bars={incrementBars}
              xAxisKey="type"
              showYAxis
              yAxisDomain={[-20000, 100000]}
              yAxisTickFormatter={(v) => `${(v / 10000).toFixed(0)}万`}
              showReferenceLine
              referenceLineY={0}
              barSize={14}
              showLabels={false}
              unit="亿元"
              xAxisInterval={0}
            />
          </ChartContainer>

          <ChartContainer delay="600ms" className="min-h-0">
            <BaseTable
              data={loanStockData}
              columns={loanColumns}
              title="人民币贷款分项数据"
              subtitle="数据来源：中国人民银行｜单位：万亿"
              colorizeNumbers={false}
              dateColumn="period"
              highlightRows={highlightRows}
              rowHeight="auto"
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
