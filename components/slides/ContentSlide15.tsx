import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { cpiTrendData, cpiCategoryData } from '@/data/cpi';

const cpiLines: LineConfig[] = [
  { dataKey: 'cpi', name: 'CPI:当月同比', strokeWidth: 2.5 },
  { dataKey: 'coreCpi', name: '剔除食品能源CPI:当月同比', strokeWidth: 2 },
];

const formatNumber = (val: number) =>
  val.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });

/** 2026 年分项：正红负绿；其余年份保持中性色 */
const renderSigned2026 = (value: any, row: { period: string }) => {
  if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
  const num = Number(value);
  if (isNaN(num)) return value;

  const formatted = formatNumber(num);
  if (!row.period.startsWith('2026')) {
    return <span className="text-slate-600">{formatted}</span>;
  }
  if (num > 0) return <span className="text-red-500 font-medium">{formatted}</span>;
  if (num < 0) return <span className="text-green-600 font-medium">{formatted}</span>;
  return <span className="text-slate-600">{formatted}</span>;
};

const categoryColumns: ColumnConfig[] = [
  { key: 'period', title: '日期', align: 'left' },
  { key: 'foodTobaccoAlcohol', title: '食品烟酒', align: 'right', render: renderSigned2026 },
  { key: 'transportation', title: '交通通信', align: 'right', render: renderSigned2026 },
  { key: 'housing', title: '居住', align: 'right', render: renderSigned2026 },
  { key: 'education', title: '教育文娱', align: 'right', render: renderSigned2026 },
  { key: 'clothing', title: '衣着', align: 'right', render: renderSigned2026 },
  { key: 'healthcare', title: '医疗保健', align: 'right', render: renderSigned2026 },
  { key: 'householdServices', title: '生活用品', align: 'right', render: renderSigned2026 },
  { key: 'otherGoodsServices', title: '其他', align: 'right', render: renderSigned2026 },
];

const tableData = cpiCategoryData;
const highlight2026Rows = tableData.reduce<number[]>((acc, row, index) => {
  if (row.period.startsWith('2026')) acc.push(index);
  return acc;
}, []);

export const ContentSlide15: React.FC = () => {
  const filteredCpiTrendData = cpiTrendData.filter(d => d.period !== '2026-07');
  const filteredCpiCategoryData = cpiCategoryData.filter(d => d.period !== '2026-07');
  const filteredHighlight2026Rows = filteredCpiCategoryData.reduce<number[]>((acc, row, index) => {
    if (row.period.startsWith('2026')) acc.push(index);
    return acc;
  }, []);

  return (
    <BaseContentSlide
      title="核心CPI回落印证内生动能不足"
      cardColumns={2}
      chartColumns={2}
      cards={
        <>
          <BaseCard title="物价温差显著" delay="0ms" variant="accent">
            <p>
              上半年CPI同比上涨<span className="font-bold text-red-500">1.0%</span>（7月<span className="font-bold text-red-500">0.5%</span>），剔除食品能源的核心CPI上涨<span className="font-bold text-red-500">1.2%</span>（7月<span className="font-bold text-red-500">0.9%</span>），仍处于温和通胀区间，印证内生增长动能及居民购买力仍待修复。
            </p>
          </BaseCard>
          <BaseCard title="二季度分项分化" delay="120ms">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                交通通信由一季度末<span className="font-bold text-webank-blue">0.9%</span>跃升至5月<span className="font-bold text-red-500">5.4%</span>（6月<span className="font-bold text-webank-blue">4.1%</span>），因国际油价波动（7月已回落至<span className="font-bold text-webank-blue">0.4%</span>）。
              </li>
              <li>
                食品烟酒自4月起连续负增长，猪肉等畜肉价格拖累明显。
              </li>
              <li>
                受国际金价冲高回落影响，金饰品价格二季度下滑，影响"其他用品和服务"CPI的增长。
              </li>
            </ul>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms" className="min-h-0">
            <BaseLineChart
              data={filteredCpiTrendData}
              title="CPI当月同比、剔除食品能源CPI当月同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={cpiLines}
              yAxisDomain={[-1, 2]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['CPI:当月同比', '剔除食品能源CPI:当月同比']}
              xAxisTickCount={7}
              highlightPeriods={['2026-06']}
            />
          </ChartContainer>
          <ChartContainer delay="720ms" className="min-h-0 pb-8">
            <BaseTable
              data={filteredCpiCategoryData}
              columns={categoryColumns}
              title="CPI八大类当月同比"
              subtitle="数据来源：国家统计局 | 单位：% | 2026年：正红负绿"
              dateColumn="period"
              colorizeNumbers={false}
              highlightRows={filteredHighlight2026Rows}
              titleBlockClassName="mb-1"
              headerCellClassName="!px-1 !py-1 text-[11px] leading-tight whitespace-nowrap"
              cellClassName="!px-1 text-[11px] leading-none tabular-nums"
              getRowClassName={() => 'min-h-0'}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
