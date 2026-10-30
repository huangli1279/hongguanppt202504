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

export const ContentSlide15: React.FC = () => {
  const filteredCpiCategoryData = cpiCategoryData;
  const filteredHighlight2026Rows = filteredCpiCategoryData.reduce<number[]>((acc, row, index) => {
    if (row.period.startsWith('2026')) acc.push(index);
    return acc;
  }, []);

  return (
    <BaseContentSlide
      title="CPI：前三季度CPI+0.9%、核心+1.1%，仍处于温和通胀区间"
      cardColumns={2}
      chartColumns={2}
      cards={
        <>
          <BaseCard title="9月结构：能源涨、食品跌、AI终端涨" delay="0ms" variant="accent">
            <p>
              三季度CPI逐步回升，9月CPI同比<span className="font-bold text-red-500">+0.9%</span>，核心CPI<span className="font-bold text-red-500">+1.0%</span>。
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                交通通信同比<span className="font-bold text-red-500">+4.3%</span>，其中燃料<span className="font-bold text-red-500">+14.9%</span>（8月<span className="text-webank-blue">+8.3%</span>）；医疗保健<span className="font-bold text-red-500">+2.7%</span>；存储设备<span className="font-bold text-red-500">+46.7%</span>、平板电脑<span className="font-bold text-red-500">+23.6%</span>。
              </li>
              <li>
                猪肉<span className="text-green-600 font-bold">-10.0%</span>、鲜菜<span className="text-green-600 font-bold">-8.1%</span>；食品烟酒9月<span className="text-green-600 font-bold">-0.9%</span>，三季度维持负增长；居住类7-9月均同比<span className="text-green-600 font-bold">-0.3%</span>。
              </li>
            </ul>
          </BaseCard>
          <BaseCard title="温和但来源高度输入性与结构性" delay="120ms">
            <p>
              通胀读数温和，但来源高度输入性与结构性；居民端的"涨价感"主要来自油价和黄金饰品（<span className="font-bold text-red-500">+22.5%</span>），核心商品与服务价格仍稳。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms" className="min-h-0">
            <BaseLineChart
              data={cpiTrendData}
              title="CPI当月同比、剔除食品能源CPI当月同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={cpiLines}
              yAxisDomain={[-1, 2]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['CPI:当月同比', '剔除食品能源CPI:当月同比']}
              xAxisTickCount={7}
              highlightPeriods={['2026-09']}
            />
          </ChartContainer>
          <ChartContainer delay="720ms" className="min-h-0 pb-8">
            <BaseTable
              data={filteredCpiCategoryData}
              columns={categoryColumns}
              title="CPI八大类当月同比"
              subtitle="数据来源：国家统计局 | 单位：% "
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
