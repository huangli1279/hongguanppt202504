import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { seriesColors } from '../../utils/chartColors';
import { industrialCategoryData, industryDetailMonthlyData as industryData } from '../../data';

const industryColumns: ColumnConfig[] = [
  { key: 'period', title: '月份', width: '46px', align: 'center' },
  {
    key: 'advanced',
    title: '制造业',
    children: [
      {
        key: 'highTech',
        title: '高技术制造',
        align: 'right',
        render: (value: any) => {
          if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
          const num = typeof value === 'number' ? value : parseFloat(value);
          if (isNaN(num)) return value;
          const formatted = num.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
          return <span className="text-red-500">{formatted}</span>;
        },
      },
      {
        key: 'electronics',
        title: '电子设备',
        align: 'right',
        render: (value: any) => {
          if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
          const num = typeof value === 'number' ? value : parseFloat(value);
          if (isNaN(num)) return value;
          const formatted = num.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
          return <span className="text-red-500">{formatted}</span>;
        },
      },
      {
        key: 'railway',
        title: '铁路航空航天',
        align: 'right',
        render: (value: any) => {
          if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
          const num = typeof value === 'number' ? value : parseFloat(value);
          if (isNaN(num)) return value;
          const formatted = num.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
          return <span className="text-red-500">{formatted}</span>;
        },
      },
      {
        key: 'auto',
        title: '汽车制造',
        align: 'right',
        render: (value: any) => {
          if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
          const num = typeof value === 'number' ? value : parseFloat(value);
          if (isNaN(num)) return value;
          const formatted = num.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
          return <span className="text-slate-600">{formatted}</span>;
        },
      },
    ],
  },
  {
    key: 'resource',
    title: '采矿业',
    children: [
      {
        key: 'oilGas',
        title: '油气开采',
        align: 'right',
        render: (value: any, row: any) => {
          if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
          const num = typeof value === 'number' ? value : parseFloat(value);
          if (isNaN(num)) return value;
          const formatted = num.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
          if (row.period === '2026-02' || row.period === '2026-03') {
            return <span className="text-red-500">{formatted}</span>;
          }
          return <span className="text-slate-600">{formatted}</span>;
        },
      },
      {
        key: 'chemical',
        title: '化学原料',
        align: 'right',
        render: (value: any) => {
          if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
          const num = typeof value === 'number' ? value : parseFloat(value);
          if (isNaN(num)) return value;
          const formatted = num.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
          return <span className="text-slate-600">{formatted}</span>;
        },
      },
      {
        key: 'nonferrousMining',
        title: '有色矿采选',
        align: 'right',
        render: (value: any) => {
          if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
          const num = typeof value === 'number' ? value : parseFloat(value);
          if (isNaN(num)) return value;
          const formatted = num.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
          return <span className="text-slate-600">{formatted}</span>;
        },
      },
    ],
  },
  {
    key: 'utilities',
    title: '电热燃水',
    children: [
      {
        key: 'power',
        title: '电力热力',
        align: 'right',
        render: (value: any, row: any) => {
          if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
          const num = typeof value === 'number' ? value : parseFloat(value);
          if (isNaN(num)) return value;
          const formatted = num.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
          if (row.period === '2026-02' || row.period === '2026-03') {
            return <span className="text-red-500">{formatted}</span>;
          }
          return <span className="text-slate-600">{formatted}</span>;
        },
      },
      {
        key: 'gas',
        title: '燃气供应',
        align: 'right',
        render: (value: any) => {
          if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
          const num = typeof value === 'number' ? value : parseFloat(value);
          if (isNaN(num)) return value;
          const formatted = num.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
          return <span className="text-slate-600">{formatted}</span>;
        },
      },
      {
        key: 'water',
        title: '水供应',
        align: 'right',
        render: (value: any) => {
          if (value === null || value === undefined) return <span className="text-slate-400">-</span>;
          const num = typeof value === 'number' ? value : parseFloat(value);
          if (isNaN(num)) return value;
          const formatted = num.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
          return <span className="text-slate-600">{formatted}</span>;
        },
      },
    ],
  },
];

export const ContentSlide11: React.FC = () => {
  return (
    <BaseContentSlide
      title="制造业稳定支撑增长，政策带动能源生产增长"
      cards={
        <>
          <BaseCard title="三大门类：制造业是主支撑" delay="0ms" variant="accent">
            <p>
              3月规上工业增加<span className="font-bold">5.7%</span>，其中制造业增长<span className="font-bold">6%</span>为主要支撑，采矿业同比<span className="font-bold">5.7%</span>，受"人工智能+"等政策对能源的需求带动，3月电力、热力、燃气及水生产和供应业同比升至<span className="font-bold">4.2%</span>（去年为<span className="font-bold">3.3%</span>）。
            </p>
          </BaseCard>

          <BaseCard title="新质生产力挑大梁" delay="120ms">
            <p>
              在全球AI算力产业链景气拉动及"大规模设备更新"政策的发力下，高技术制造业一季度实现两位数增长，计算机、通信和其他电子设备制造业持续高增（1-2月
              <span className="font-bold">14.2%</span>，3月
              <span className="font-bold">12.5%</span>）。
            </p>
          </BaseCard>

          <BaseCard title="地缘冲突驱动生产加速" delay="600ms">
            <p>
              中东地缘局势导致国际原油价格上行，带动国内相关开采与加工提速，3月石油和天然气开采业同比升至
              <span className="font-bold">9.4%</span>，化学原料及化学制品制造业<span className="font-bold">9.0%</span>。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={industrialCategoryData}
              title="规模以上工业增加值及分项当月同比数据"
              subtitle="单位：%"
              yAxisDomain={[0, 11]}
              showYAxis
              xAxisTickCount={7}
              highlightPeriods={['2026-03']}
              legendOrder={['规上工业', '制造业', '采矿业', '电热燃水']}
              lines={[
                { dataKey: 'industrial', name: '规上工业', color: seriesColors[0], strokeWidth: 2.4 },
                { dataKey: 'manufacturing', name: '制造业', color: seriesColors[1], strokeWidth: 2.4, labelDY: -8 },
                { dataKey: 'mining', name: '采矿业', color: seriesColors[2], labelDY: 12 },
                { dataKey: 'utilities', name: '电热燃水', color: seriesColors[3], labelDY: -8 },
              ]}
            />
          </ChartContainer>

          <ChartContainer delay="660ms">
            <BaseTable
              data={industryData}
              title="各行业增加值当月同比数据"
              subtitle="单位：%"
              columns={industryColumns}
              dateColumn="period"
              rowHeight="auto"
              headerCellClassName="px-1 py-1 text-caption leading-[1.15] whitespace-normal break-words line-clamp-2"
              cellClassName="px-1 text-caption leading-tight"
              subtitleClassName="text-caption"
            />
          </ChartContainer>
        </>
      }
    />
  );
};
