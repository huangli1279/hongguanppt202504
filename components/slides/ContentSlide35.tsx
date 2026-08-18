import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart } from '../base/BaseBarChart';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { chartColors } from '@/utils/chartColors';
import {
  depositIncrementQ2CompareData,
  householdDepositMonthlyChangeData,
} from '@/data/depositData';

const formatValue = (val: any) =>
  val === null || val === undefined
    ? '-'
    : typeof val === 'number'
      ? Number(val).toFixed(2)
      : String(val);

const depositColumns: ColumnConfig[] = [
  { key: 'period', title: '月份', align: 'center', width: '0.9fr' },
  { key: 'household', title: '住户存款', align: 'right', width: '1fr', render: formatValue },
  { key: 'nonFinancial', title: '非金融企业存款', align: 'right', width: '1.2fr', render: formatValue },
  { key: 'nonBankFin', title: '非银行业金融机构存款', align: 'right', width: '1.4fr', render: formatValue },
];

export const ContentSlide35: React.FC = () => {
  const highlightRows = householdDepositMonthlyChangeData.reduce<number[]>((acc, item, index) => {
    if (item.period.startsWith('2026-')) {
      acc.push(index);
    }
    return acc;
  }, []);

  return (
    <BaseContentSlide
      title={<>二季度居民存款净减少1049亿元，为2018年以来首次下降；非银机构存款则增加2.62万亿元</>}
      cardColumns={1}
      chartColumns={2}
    >
      <div className="flex flex-col h-full">
        <div className="mb-6 flex-shrink-0">
          <BaseCard title="存款搬家延续" delay="0ms" variant="accent">
            <p>
              二季度居民存款净减少<span className="text-webank-blue font-semibold">1049亿元</span>（同比少增<span className="text-webank-blue font-semibold">1.66万亿元</span>），非银存款增加<span className="text-webank-blue font-semibold">2.62万亿元</span>（同比多增<span className="text-webank-blue font-semibold">3915亿元</span>），存款搬家趋势延续。
            </p>
            <p>
              分月节奏上，4-5月居民及企业存款连续下降，非银存款加速增长；6月受银行季末冲存款的短期扰动，居民存款阶段性回升、非银存款回落。
            </p>
          </BaseCard>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-2 gap-6">
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={depositIncrementQ2CompareData}
              title="存款增量对比"
              subtitle="数据来源：中国人民银行 | 单位：万亿"
              xAxisKey="category"
              bars={[
                { dataKey: 'q2024', name: '2024Q2', color: chartColors.quaternary },
                { dataKey: 'q2025', name: '2025Q2', color: chartColors.tertiary },
                { dataKey: 'q2026', name: '2026Q2', color: chartColors.primary },
              ]}
              yAxisDomain={[-1, 3]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              yAxisTickFormatter={(val) => `${val}`}
              barSize={28}
              showLabels={true}
              labelOffset={8}
              labelNegativeOffset={-20}
              labelNegativeOffsets={{ q2024: -10 }}
              legendOrder={['2024Q2', '2025Q2', '2026Q2']}
              unit="万亿"
            />
          </ChartContainer>

          <ChartContainer delay="720ms" className="min-h-0">
            <BaseTable
              data={householdDepositMonthlyChangeData}
              columns={depositColumns}
              title="居民存款变化"
              subtitle="数据来源：中国人民银行｜单位：万亿"
              colorizeNumbers={false}
              dateColumn="period"
              highlightRows={highlightRows}
              rowHeight="auto"
              cellClassName="!px-1.5 whitespace-nowrap tabular-nums text-[12px] leading-none"
              headerCellClassName="!px-1.5 !py-1.5 whitespace-nowrap text-[11px] leading-tight"
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
