import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { pmiTrendData } from '../../data';

const formatPmiValue = (value: any) => {
  if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
  const num = typeof value === 'number' ? value : parseFloat(value);
  if (isNaN(num)) return value;
  const formatted = num.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  return <span className="text-black">{formatted}</span>;
};

const priceColumns: ColumnConfig[] = [
  { key: 'period', title: '月份', width: '52px', align: 'center' },
  {
    key: 'outputPrice',
    title: '出厂价格',
    align: 'right',
    render: formatPmiValue,
  },
  {
    key: 'rawMaterialPurchasePrice',
    title: '原材料购进价格',
    align: 'right',
    render: formatPmiValue,
  },
];

const pmiPriceTableData = [...pmiTrendData]
  .filter((d) => d.period >= '2025-01')
  .reverse();

export const ContentSlide11: React.FC = () => {
  return (
    <BaseContentSlide
      title="PMI超过荣枯线，大型企业与中小型企业体感背离"
      cardColumns={2}
      chartColumns={1}
      cards={
        <>
          <BaseCard title="景气度波动企稳" delay="0ms" variant="accent">
            <p>
              二季度制造业PMI重返扩张区间，6月为
              <span className="font-bold">50.3%</span>
              （5月<span className="font-bold">50.0%</span>），显示生产经营活动有所加快。
            </p>
          </BaseCard>

          <BaseCard title='"K型"分化特征显著' delay="120ms">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-bold">规模分化：</span>
                大型企业PMI持续位于50%以上（6月
                <span className="font-bold">50.7%</span>
                ），表现稳健；中型企业6月虽回升至
                <span className="font-bold">50.5%</span>
                ，但小型企业（
                <span className="font-bold">48.2%</span>
                ）仍处于收缩区间。
              </li>
              <li>
                <span className="font-bold">产需错配：</span>
                二季度生产PMI持续高于新订单，显示生产端扩张快于需求端，原材料购进价格降低显示涨价行情可能在下半年缓解，但出厂价格同步下降，企业生存空间可能进一步被挤压。
              </li>
            </ul>
          </BaseCard>
        </>
      }
      charts={
        <div className="flex gap-4 sm:gap-6 h-full min-h-0">
          <div className="w-[62%] min-w-0 flex-shrink-0">
            <ChartContainer delay="600ms">
              <BaseLineChart
                data={pmiTrendData}
                title="制造业PMI及分项指标月度数据"
                subtitle="数据来源：国家统计局 | 单位：%"
                lines={[
                  { dataKey: 'pmi', name: '制造业PMI', strokeWidth: 2.5 },
                  { dataKey: 'production', name: '生产', strokeWidth: 2.5 },
                  { dataKey: 'newOrders', name: '新订单', strokeWidth: 2.5 },
                ]}
                yAxisDomain={[48, 54]}
                showYAxis
                showReferenceLine
                referenceLineY={50}
                legendOrder={['制造业PMI', '生产', '新订单']}
                highlightPeriods={['2026-06']}
                xAxisTickCount={7}
                unit=""
                yAxisTickFormatter={(val) => `${val}`}
              />
            </ChartContainer>
          </div>

          <div className="w-[38%] min-w-0 flex-1">
            <ChartContainer delay="660ms">
              <BaseTable
                data={pmiPriceTableData}
                title="制造业PMI出厂价格、主要原材料购进价格月度同比"
                subtitle="数据来源：国家统计局、中国物流与采购联合会 | 单位：%"
                columns={priceColumns}
                dateColumn="period"
                rowHeight="auto"
                headerCellClassName="px-1.5 py-1 text-caption leading-[1.15] whitespace-normal break-words"
                cellClassName="px-1.5 text-caption leading-tight"
                subtitleClassName="text-caption"
              />
            </ChartContainer>
          </div>
        </div>
      }
    />
  );
};
