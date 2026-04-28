import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart, BarConfig } from '../base/BaseBarChart';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { loanIncrementData } from '@/data/loanData';
import { chartColors } from '@/utils/chartColors';

export const ContentSlide35: React.FC = () => {
  const periods = [
    "2025-01", "2025-02", "2025-03", "2025-04", "2025-05", "2025-06",
    "2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12",
    "2026-01", "2026-02", "2026-03"
  ];

  const consumerLoan = [
    58.90, 58.52, 58.91, 58.71, 58.73, 58.91,
    58.68, 58.65, 58.73, 58.58, 58.41, 58.16,
    58.24, 57.64, 57.68
  ];

  const shortTermConsumer = [
    10.11, 9.86, 9.99, 9.87, 9.87, 9.93,
    9.79, 9.83, 9.82, 9.73, 9.60, 9.48,
    9.42, 9.04, 9.01
  ];

  const longTermConsumer = [
    48.79, 48.67, 48.91, 48.84, 48.86, 48.97,
    48.89, 48.83, 48.90, 48.85, 48.80, 48.68,
    48.82, 48.60, 48.67
  ];

  const housingLoan = [
    null, null, 37.90, null, null, 37.74,
    null, null, 37.44, null, null, 37.01,
    null, null, null
  ];

  const businessLoan = [
    24.37, 24.36, 24.97, 24.64, 24.67, 25.09,
    24.83, 24.89, 25.21, 24.99, 24.96, 25.11,
    25.49, 25.44, 25.89
  ];

  const totalLoan = [
    83.27, 82.88, 83.87, 83.35, 83.40, 84.00,
    83.51, 83.54, 83.93, 83.57, 83.36, 83.27,
    83.73, 83.08, 83.57
  ];

  const loanStockData = periods.map((period, index) => ({
    period,
    consumerLoan: consumerLoan[index],
    shortTermConsumer: shortTermConsumer[index],
    longTermConsumer: longTermConsumer[index],
    housingLoan: housingLoan[index],
    businessLoan: businessLoan[index],
    totalLoan: totalLoan[index],
  }));

  const highlightRows = loanStockData.reduce<number[]>((acc, item, index) => {
    if (['2026-01', '2026-02', '2026-03'].includes(item.period)) {
      acc.push(index);
    }
    return acc;
  }, []);

  const formatTrillion = (val: any) =>
    val === null ? '-' : typeof val === 'number' ? val.toFixed(2) : val;

  const loanColumns: ColumnConfig[] = [
    { key: 'period', title: '月份', align: 'center' },
    { key: 'consumerLoan', title: '消费贷款', align: 'right', render: formatTrillion },
    { key: 'shortTermConsumer', title: '短期消费贷', align: 'right', render: formatTrillion },
    { key: 'longTermConsumer', title: '中长期消费贷', align: 'right', render: formatTrillion },
    { key: 'housingLoan', title: '其中:房贷', align: 'right', render: formatTrillion },
    { key: 'businessLoan', title: '经营贷款', align: 'right', render: formatTrillion },
    { key: 'totalLoan', title: '居民贷款合计', align: 'right', render: formatTrillion },
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
    {
      type: '对公贷款季度增量',
      q2024: 91700,
      q2025: 90900,
      q2026: 95500,
    },
    {
      type: '居民贷款季度增量',
      q2024: 13318,
      q2025: 10435,
      q2026: 2967,
    },
  ];

  const consumerBusinessLoanData = [
    {
      type: '消费贷',
      q2024: 420,
      q2025: 2216,
      q2026: -4887,
    },
    {
      type: '短期贷款:消费',
      q2024: -2711,
      q2025: -1956,
      q2026: -4736,
    },
    {
      type: '中长期贷款:消费',
      q2024: 3131,
      q2025: 4171,
      q2026: -151,
    },
    {
      type: '经营贷',
      q2024: 13030,
      q2025: 8220,
      q2026: 7854,
    },
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
        <div className="grid grid-cols-2 gap-4 mb-4 flex-shrink-0">
          <BaseCard title="居民信贷疲软" delay="0ms" variant="accent">
            <p>
              居民贷款季度新增2967亿，同比少增7,468亿，延续偏弱态势。对公贷款持续扩张，季度贷款新增9.55万亿，同比多增4600亿。
            </p>
          </BaseCard>
          <BaseCard title="消费信贷结构分析" delay="120ms" variant="accent">
            <p>
              居民信贷中经营贷季度增长7854亿，同比少增366亿;消费贷本季度下降4887亿，同比少增7103亿(居民信贷少增主因)，其中短期消费贷同比多降2780亿，中长期消费贷同比少增4222亿。短期消费贷下降主要因为居民主动降负债有效信贷需求不足，中长期消费贷少增主要与实体经济中房地产销售低迷，居民购房加杠杆意愿尚未实质性恢复。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="grid grid-cols-3 gap-4 flex-1 min-h-0">
          <ChartContainer delay="120ms" className="min-h-0" style={{ flex: '0.7' }}>
            <BaseBarChart
              data={chartData}
              title="对公及居民贷款季度增量数据"
              subtitle="数据来源：中国人民银行｜单位：亿元"
              bars={incrementBars}
              xAxisKey="type"
              showYAxis
              yAxisDomain={[0, 100000]}
              yAxisTickFormatter={(v) => `${(v / 10000).toFixed(0)}万`}
              showReferenceLine
              referenceLineY={0}
              barSize={28}
              showLabels={true}
              unit="亿元"
              xAxisInterval={0}
            />
          </ChartContainer>

          <ChartContainer delay="360ms" className="min-h-0" style={{ flex: '1.3' }}>
            <BaseBarChart
              data={consumerBusinessLoanData}
              title="消费及经营贷款季度增量数据"
              subtitle="数据来源：中国人民银行｜单位：亿元"
              bars={incrementBars}
              xAxisKey="type"
              showYAxis
              yAxisDomain={[-6000, 15000]}
              yAxisTickFormatter={(v) => `${v.toFixed(0)}`}
              showReferenceLine
              referenceLineY={0}
              barSize={12}
              showLabels={true}
              unit="亿元"
              xAxisInterval={0}
            />
          </ChartContainer>

          <ChartContainer delay="600ms" className="min-h-0">
            <BaseTable
              data={loanStockData}
              columns={loanColumns}
              title="居民贷款存量数据"
              subtitle="数据来源：中国人民银行｜单位：万亿元"
              colorizeNumbers={false}
              dateColumn="period"
              highlightRows={highlightRows}
              rowHeight="auto"
            />
            <p className="text-xs text-gray-500 mt-2">备注：消费信贷含房贷</p>
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
