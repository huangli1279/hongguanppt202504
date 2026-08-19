import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart } from '../base/BaseBarChart';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { chartColors } from '@/utils/chartColors';
import { corporateCreditStructureData, householdLoanChangeData } from '@/data/loanData';

const formatTrillion = (val: any) =>
  val === null || val === undefined
    ? '-'
    : typeof val === 'number'
      ? Number(val).toFixed(2)
      : String(val);

const loanColumns: ColumnConfig[] = [
  { key: 'period', title: '月份', align: 'center', width: '0.7fr' },
  { key: 'consumerLoan', title: '消费贷款', align: 'right', width: '0.9fr', render: formatTrillion },
  { key: 'shortTermConsumer', title: '短期消费', align: 'right', width: '0.9fr', render: formatTrillion },
  { key: 'longTermConsumer', title: '中长期消费', align: 'right', width: '1fr', render: formatTrillion },
  { key: 'housingLoan', title: '其中:房贷', align: 'right', width: '0.9fr', render: formatTrillion },
  { key: 'consumerLoanExHousing', title: '消费贷(不含房贷)', align: 'right', width: '1.15fr', render: formatTrillion },
  { key: 'businessLoan', title: '经营贷款', align: 'right', width: '0.9fr', render: formatTrillion },
  { key: 'totalLoan', title: '贷款合计', align: 'right', width: '0.9fr', render: formatTrillion },
];

export const ContentSlide34: React.FC = () => {
  const highlightRows = householdLoanChangeData.reduce<number[]>((acc, item, index) => {
    if (['2026-04', '2026-05', '2026-06'].includes(item.period)) {
      acc.push(index);
    }
    return acc;
  }, []);

  return (
    <BaseContentSlide
      title={<>企业贷款"票据强、中长期弱"，居民端持续缩表</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full pb-6">
        <div className="grid grid-cols-2 gap-3 mb-3 flex-shrink-0">
          <BaseCard title="Q2企业贷款：票据强、中长期弱" delay="0ms" variant="accent" className="!p-3 gap-1 text-sm">
            <ul className="list-disc pl-4 space-y-0.5">
              <li>
                实体融资意愿低迷：Q2非金融企业贷款增长<span className="text-webank-blue">2.5万亿</span>，中长期贷款（剔票据）仅增<span className="text-webank-blue">1300亿</span>，同比少增<span className="text-webank-blue">1.46万亿</span>，为近年低点，与企业资本开支意愿偏弱、项目落地偏慢有关。
              </li>
              <li>
                票据融资独撑增量：Q2票据增长<span className="text-webank-blue">1.9万亿</span>（同比多增<span className="text-webank-blue">1.4万亿</span>），票利率约<span className="text-webank-blue">0.5%</span>，银行"以票充贷"冲量明显。
              </li>
              <li>
                新旧动能分化：高新技术企业贷款增速<span className="text-red-500 font-semibold">14.6%</span>、绿色贷款<span className="text-red-500 font-semibold">14.5%</span>，显著跑赢企业贷款整体增速<span className="text-webank-blue">5.2%</span>。
              </li>
            </ul>
          </BaseCard>
          <BaseCard title="居民信贷持续收缩" delay="120ms" className="!p-3 gap-1 text-sm">
            <p className="mb-1">Q2居民贷款下降<span className="text-green-600 font-semibold">6636亿</span>，同比多降<span className="text-green-600 font-semibold">7898亿</span>，自2025年6月高点后持续收缩。</p>
            <p className="mb-1 font-semibold">从贷款分类看：</p>
            <ul className="list-disc pl-4 space-y-0.5">
              <li>
                住房贷款：Q2下降<span className="text-green-600 font-semibold">4300亿</span>，同比多降<span className="text-green-600 font-semibold">2700亿</span>，提前还贷潮延续，新增按揭难以对冲存量压缩。
              </li>
              <li>
                消费贷款（不含房贷）：Q2下降<span className="text-green-600 font-semibold">1341亿</span>，同比多降<span className="text-green-600 font-semibold">2934亿</span>，消费需求修复仍显疲弱。
              </li>
              <li>
                经营贷款：Q2下降<span className="text-green-600 font-semibold">995亿</span>，同比多降<span className="text-green-600 font-semibold">2264亿</span>，以短期经营贷为主，反映个体工商户和小微企业经营活力不足。
              </li>
            </ul>
          </BaseCard>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4 min-h-0">
          <ChartContainer delay="600ms" className="min-h-0">
            <BaseBarChart
              data={corporateCreditStructureData}
              title="Q2新增人民币贷款结构"
              subtitle="数据来源：中国人民银行 | 单位：亿元"
              xAxisKey="category"
              bars={[
                { dataKey: 'y2024', name: '2024年', color: '#6b7280' },
                { dataKey: 'y2025', name: '2025年', color: chartColors.tertiary },
                { dataKey: 'y2026', name: '2026年', color: chartColors.primary },
              ]}
              yAxisDomain={[-6000, 35000]}
              showYAxis={true}
              yAxisWidth={50}
              yAxisTickFormatter={(val) => `${val}`}
              showReferenceLine={true}
              referenceLineY={0}
              barSize={14}
              showLabels={true}
              labelNegativeOffset={-20}
              labelNegativeOffsets={{ y2024: -20, y2025: -20, y2026: 2 }}
              labelNegativeOffsetsByIndex={{ 4: -35, 5: -55 }}
              xAxisAngle={-20}
              xAxisHeight={55}
              labelFontSize={11}
              legendOrder={['2024年', '2025年', '2026年']}
              unit="亿元"
            />
          </ChartContainer>
          <ChartContainer delay="600ms" className="min-h-0">
            <BaseTable
              data={householdLoanChangeData}
              columns={loanColumns}
              title="居民贷款变化情况"
              subtitle="数据来源：中国人民银行｜单位：万亿元"
              colorizeNumbers={false}
              dateColumn="period"
              highlightRows={highlightRows}
              rowHeight="auto"
              cellClassName="!px-1 whitespace-nowrap tabular-nums text-[13px] leading-none"
              headerCellClassName="!px-1 !py-1 whitespace-nowrap text-[13px] leading-none"
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
