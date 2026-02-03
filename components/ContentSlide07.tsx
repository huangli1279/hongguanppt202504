import React from 'react';
import { BaseCard } from './BaseCard';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseTable, ColumnConfig } from './BaseTable';
import { provinceGdpDataTop15, provinceGdpDataRest } from '@/data/provinceGdp';

const extractGrowthNumber = (value: unknown): number | null => {
  if (value === null || value === undefined) return null;
  if (typeof value === 'number' && !Number.isNaN(value)) return value;
  const parsed = parseFloat(String(value).replace('%', ''));
  return Number.isNaN(parsed) ? null : parsed;
};

const getGrowthThresholds = (rows: Array<{ growth?: unknown }>) => {
  const values = rows
    .map(row => extractGrowthNumber(row.growth))
    .filter((num): num is number => num !== null);

  if (values.length === 0) {
    return { p20: 0, p80: 0, count: 0 };
  }

  values.sort((a, b) => a - b);
  const p20Index = Math.floor(values.length * 0.2);
  const p80Index = Math.floor(values.length * 0.8);

  return {
    p20: values[p20Index],
    p80: values[p80Index],
    count: values.length
  };
};

const growthThresholds = getGrowthThresholds([
  ...provinceGdpDataTop15,
  ...provinceGdpDataRest
]);

const renderGrowthValue = (value: unknown): React.ReactNode => {
  const num = extractGrowthNumber(value);
  if (num === null) {
    return <span className="text-slate-400">-</span>;
  }

  const formatted = `${num.toFixed(1)}%`;
  if (growthThresholds.count === 0) {
    return <span className="text-slate-600">{formatted}</span>;
  }
  if (num >= growthThresholds.p80) {
    return <span className="text-red-500">{formatted}</span>;
  }
  if (num <= growthThresholds.p20) {
    return <span className="text-green-600">{formatted}</span>;
  }
  return <span className="text-slate-600">{formatted}</span>;
};

const tableColumns: ColumnConfig[] = [
  {
    key: 'province',
    title: '省份',
    align: 'left'
  },
  {
    key: 'gdp',
    title: 'GDP',
    align: 'right',
  },
  {
    key: 'growth',
    title: '增速',
    align: 'right',
    render: value => renderGrowthValue(value)
  },
];

export const ContentSlide07: React.FC = () => {
  return (
    <BaseContentSlide
      title="2025年各省市GDP：新兴产业与高技术制造双轮驱动"
      cardColumns={2}
      chartColumns={2}
      cards={
        <>
          <BaseCard title="传统产业拖累" delay="200ms" variant="accent">
            <div className="space-y-2">
              <p>
                <span className="font-bold">广东省</span>2025年GDP增速<span className="text-webank-accent font-bold">3.9%</span>，主要受传统支柱产业（房地产、传统制造业）深度调整影响。
              </p>
              <p>
                <span className="font-bold">海南省</span>高度依赖旅游业和免税消费，工业基础薄弱，受消费下行影响GDP增速低于全国（<span className="text-webank-accent font-bold">4%</span>）。
              </p>
              <p>
                <span className="font-bold">天津市</span>GDP增速<span className="text-webank-accent font-bold">4.9%</span>，主要因石化产业比重高，新兴产业占比低。
              </p>
            </div>
          </BaseCard>

          <BaseCard title="高新产业带动经济" delay="400ms">
            <div className="space-y-2">
              <p>
                <span className="font-bold">山东省</span>GDP总量首次突破<span className="text-green-600 font-bold">10万亿元</span>，新能源汽车产业链带动整体GDP增长，2025年产量突破150万辆，占全国比重提升至12%以上，位列第二。
              </p>
              <p>
                <span className="font-bold">江苏省</span>高新技术产业产值占规上工业比重达<span className="text-green-600 font-bold">52.1%</span>，规上高技术制造业增加值大增<span className="text-green-600 font-bold">11.9%</span>，拉动全部规上工业增长2.8个百分点，新能源、集成电路等产业规模位居全国首位。
              </p>
            </div>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <BaseTable
              data={provinceGdpDataTop15}
              columns={tableColumns}
              title="2025年各省份GDP及增速（前15）"
              subtitle="单位: GDP-万亿, 增速-%"
              colorizeNumbers={false}
            />
          </ChartContainer>
          <ChartContainer delay="800ms">
            <BaseTable
              data={provinceGdpDataRest}
              columns={tableColumns}
              title="2025年31省份GDP及增速（续）"
              subtitle="单位: GDP-万亿, 增速-%"
              colorizeNumbers={false}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
