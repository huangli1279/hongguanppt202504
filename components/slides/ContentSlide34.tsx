import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart } from '../base/BaseBarChart';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { chartColors } from '@/utils/chartColors';
import { corporateCreditStructureQ3Data, householdLoanChangeData } from '@/data/loanData';

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
    if (['2026-07', '2026-08', '2026-09'].includes(item.period)) {
      acc.push(index);
    }
    return acc;
  }, []);

  return (
    <BaseContentSlide
      title={<>贷款：企业强、居民弱，居民端缩表未缓解</>}
      cardColumns={2}
    >
      <div className="grid grid-cols-2 grid-rows-[auto_1fr] gap-3 h-full pb-6">
          <BaseCard title="Q3企业贷款：政策工具落地支撑" delay="0ms" variant="accent" className="!p-3 gap-1 text-[11px] leading-snug [&>div]:leading-snug">
            <p className="mb-1">
              Q3企业贷款增长<span className="text-webank-blue font-semibold">1.45万亿</span>，中长期贷款增长
              <span className="text-webank-blue font-semibold">9800亿</span>，同比少增
              <span className="text-webank-blue font-semibold">1400亿</span>。
            </p>
            <p className="mb-1">
              其中9月企业贷款新增<span className="text-webank-blue font-semibold">1.29万亿</span>，主因9月新型政策性金融工具开始投放，补充重大项目资本金的同时带动银行配套贷款跟进。
            </p>
            <p>
              企业中长贷同比少增额已明显收窄，预计10月对公中长贷继续改善（主要看政策工具落地情况）。
            </p>
          </BaseCard>
          <BaseCard title="居民信贷持续收缩" delay="120ms" className="!p-3 gap-1 text-[11px] leading-snug [&>div]:leading-snug">
            <p className="mb-1">
              Q3居民贷款下降<span className="text-green-600 font-semibold">6669亿</span>，同比多降
              <span className="text-green-600 font-semibold">5968亿</span>，9月单月居民贷款
              <span className="text-green-600 font-semibold">0增长</span>；前三季度居民贷款累计下降
              <span className="text-green-600 font-semibold">1.03万亿</span>，居民信心偏弱，加杠杆意愿不强。
            </p>
            <p className="mb-1 font-semibold">从贷款分类看，各类贷款延续Q2趋势：</p>
            <ul className="list-disc pl-4 space-y-0.5">
              <li>
                住房贷款：Q3下降<span className="text-green-600 font-semibold">3800亿</span>，同比多降
                <span className="text-green-600 font-semibold">800亿</span>，对比上季度下降金额（Q2：下降4300亿）有缓解。前三季度累计下降
                <span className="text-green-600 font-semibold">1.1万亿</span>，为居民贷款下降的主要原因。后续贴息政策有望带动居民按揭信贷小幅增长，但持续性取决于收入房价预期等。
              </li>
              <li>
                消费贷款（不含房贷）：Q3下降<span className="text-green-600 font-semibold">1370亿</span>，同比多降
                <span className="text-green-600 font-semibold">2557亿</span>，消费需求修复仍显疲弱。
              </li>
              <li>
                经营贷款：Q3下降<span className="text-green-600 font-semibold">1505亿</span>，同比多降
                <span className="text-green-600 font-semibold">2648亿</span>，以短期经营贷为主，反映个体工商户和小微企业经营活力不足。
              </li>
            </ul>
          </BaseCard>
          <ChartContainer delay="600ms" className="min-h-0">
            <BaseBarChart
              data={corporateCreditStructureQ3Data}
              title="Q3新增人民币贷款结构"
              subtitle="数据来源：中国人民银行 | 单位：万亿元"
              xAxisKey="category"
              bars={[
                { dataKey: 'y2025', name: '2025年Q3', color: '#6b7280' },
                { dataKey: 'y2026', name: '2026年Q3', color: chartColors.primary },
              ]}
              yAxisDomain={[-2, 2]}
              showYAxis={true}
              yAxisWidth={40}
              yAxisTickFormatter={(val) => Number(val).toFixed(1)}
              showReferenceLine={true}
              referenceLineY={0}
              barSize={14}
              showLabels={true}
              labelFormatter={(val) => Number(val).toFixed(2)}
              labelFilter={(p) => Number(p.value) >= 0}
              xAxisAngle={-18}
              xAxisHeight={52}
              xAxisTickFontSize={9}
              legendOrder={['2025年Q3', '2026年Q3']}
              unit="万亿元"
            />
          </ChartContainer>
          <ChartContainer delay="750ms" className="min-h-0">
            <BaseTable
              data={householdLoanChangeData}
              columns={loanColumns}
              title="居民贷款变化情况"
              subtitle="数据来源：中国人民银行｜单位：万亿元"
              colorizeNumbers={false}
              dateColumn="period"
              highlightRows={highlightRows}
              rowHeight="auto"
              cellClassName="!px-1 whitespace-nowrap tabular-nums text-[10px] leading-none"
              headerCellClassName="!px-1 !py-1 whitespace-nowrap text-[10px] leading-none"
            />
          </ChartContainer>
      </div>
    </BaseContentSlide>
  );
};
