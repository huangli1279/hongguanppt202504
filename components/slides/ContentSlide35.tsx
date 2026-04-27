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

  const mergedLoanIncrementData = loanIncrementData
    .filter(item => item.type !== '票据融资')
    .map(item => {
      if (item.type === '消费贷-房贷' || item.type === '消费贷-非房贷') {
        return null;
      }
      return {
        type: item.type,
        q2024: Number((item.q2024 / 10000).toFixed(2)),
        q2025: Number((item.q2025 / 10000).toFixed(2)),
        q2026: Number((item.q2026 / 10000).toFixed(2)),
      };
    })
    .filter(Boolean);

  const consumerLoanMerged = loanIncrementData
    .filter(item => item.type === '消费贷-房贷' || item.type === '消费贷-非房贷')
    .reduce(
      (acc, item) => ({
        q2024: acc.q2024 + item.q2024,
        q2025: acc.q2025 + item.q2025,
        q2026: acc.q2026 + item.q2026,
      }),
      { q2024: 0, q2025: 0, q2026: 0 }
    );

  const chartData = [
    ...mergedLoanIncrementData.filter(item => item.type === '居民贷款').map(item => ({ ...item, type: '居民贷款' })),
    {
      type: '其中：消费贷',
      q2024: Number((consumerLoanMerged.q2024 / 10000).toFixed(2)),
      q2025: Number((consumerLoanMerged.q2025 / 10000).toFixed(2)),
      q2026: Number((consumerLoanMerged.q2026 / 10000).toFixed(2)),
    },
    ...mergedLoanIncrementData.filter(item => item.type === '经营贷').map(item => ({ ...item, type: '其中：经营贷' })),
    ...mergedLoanIncrementData.filter(item => item.type === '企业贷款'),
  ].map(item => ({
    ...item,
    q2024: Number(item.q2024.toFixed(2)),
    q2025: Number(item.q2025.toFixed(2)),
    q2026: Number(item.q2026.toFixed(2)),
  }));

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
              居民贷款同比少增7,468亿，延续偏弱态势，消费贷增长弱于经营贷。居民贷款少增，主要与实体经济中房地产销售低迷，居民购房加杠杆意愿尚未实质性恢复。
            </p>
          </BaseCard>
        </div>

        {/* 图表+表格区域 */}
        <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
          <ChartContainer delay="120ms" className="min-h-0">
            <BaseBarChart
              data={chartData}
              title="季度贷款增量数据"
              subtitle="数据来源：中国人民银行｜单位：万亿"
              bars={incrementBars}
              xAxisKey="type"
              showYAxis
              yAxisDomain={[-2, 10]}
              yAxisTickFormatter={(v) => `${v.toFixed(0)}万`}
              showReferenceLine
              referenceLineY={0}
              barSize={14}
              showLabels={true}
              unit="万亿"
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
            <p className="text-xs text-gray-500 mt-2">备注：消费信贷含个人住房房贷，截至25年末个人住房贷款规模37.01万亿；</p>
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
