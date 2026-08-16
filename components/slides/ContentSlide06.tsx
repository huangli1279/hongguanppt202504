import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { provinceGdpDataTop15, provinceGdpDataRest } from '@/data';
import { cn } from '@/utils/cn';

/** 全国上半年 GDP 增速约 4.7%：≥5.0% 标红，≤3.5% 标绿，其余黑色 */
const GROWTH_RED = 5.0;
const GROWTH_GREEN = 3.5;

const parseGrowth = (val: string | number) => {
  if (typeof val === 'number') return val;
  return parseFloat(String(val).replace('%', ''));
};

const renderGrowth = (val: string) => {
  const num = parseGrowth(val);
  const colorClass = Number.isNaN(num)
    ? 'text-slate-400'
    : num >= GROWTH_RED
      ? 'text-red-500'
      : num <= GROWTH_GREEN
        ? 'text-green-600'
        : 'text-black';

  return <span className={cn('tabular-nums font-semibold', colorClass)}>{val}</span>;
};

const provinceColumns: ColumnConfig[] = [
  {
    key: 'province',
    title: '省份',
    align: 'center',
    width: '30%',
    render: (val: string) => <span className="text-black font-medium">{val}</span>,
  },
  {
    key: 'gdp',
    title: 'GDP',
    align: 'center',
    width: '35%',
    render: (val: number) =>
      typeof val === 'number' ? (
        <span className="tabular-nums text-black">
          {val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </span>
      ) : (
        <span className="text-slate-400">-</span>
      ),
  },
  {
    key: 'growth',
    title: '增速',
    align: 'center',
    width: '35%',
    render: renderGrowth,
  },
];

const tableSharedProps = {
  columns: provinceColumns,
  colorizeNumbers: false as const,
  striped: true,
  bordered: true,
  rowHeight: 'auto' as const,
  headerBgColor: '#f1f5f9',
  headerTextColor: '#0f172a',
  cellClassName: '!px-2 !py-0 !text-[9.5px] leading-none tabular-nums',
  headerCellClassName: '!px-2 !py-0.5 !text-[10px] leading-none whitespace-nowrap font-semibold',
  titleBlockClassName: 'mb-0.5',
  subtitleClassName: '!text-[9.5px] !mt-0.5',
};

export const ContentSlide06: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          2026年上半年各省市GDP<span className="text-webank-accent">总量及增速</span>：
          <span className="text-webank-accent">新旧动能转换分化显著</span>
        </>
      }
      className="!p-6 sm:!px-10 sm:!py-7"
      headerClassName="mb-2.5"
    >
      <div className="flex flex-col h-full min-h-0 gap-2 pb-4">
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-2 flex-shrink-0">
          <BaseCard title="高新产业带动经济" delay="0ms" variant="accent" className="!p-2 gap-0.5">
            <ul className="list-disc pl-3.5 space-y-0 text-[13px] leading-snug">
              <li>
                <span className="font-bold">浙江</span>增速
                <span className="font-bold text-red-500">5.7%</span>
                ，高技术制造<span className="font-bold text-red-500">+16.2%</span>
                ，数字经济核心产业制造业
                <span className="font-bold text-red-500">+15.5%</span>
                。
              </li>
              <li>
                <span className="font-bold">安徽</span>增速
                <span className="font-bold text-red-500">5.6%</span>
                升至第10，高技制造<span className="font-bold text-red-500">+44.6%</span>
                ，汽车产量全国第一。
              </li>
              <li>
                <span className="font-bold">山东</span>总量破
                <span className="font-bold text-red-500">5.3万亿</span>
                ，增速<span className="font-bold text-red-500">5.6%</span>
                ，服务业营收<span className="font-bold text-red-500">+6.7%</span>。
              </li>
              <li>
                <span className="font-bold">江苏</span>总量破
                <span className="font-bold text-red-500">7万亿</span>
                ，增速<span className="font-bold text-red-500">5.2%</span>
                ，高技术制造<span className="font-bold text-red-500">+14.8%</span>
                ，外贸<span className="font-bold text-red-500">+20%</span>以上。
              </li>
              <li>
                <span className="font-bold">河南</span>增速
                <span className="font-bold text-red-500">5.0%</span>
                ，高技术制造<span className="font-bold text-red-500">+26.1%</span>
                ，居中部之首。
              </li>
            </ul>
          </BaseCard>

          <BaseCard title="传统产业拖累" delay="120ms" className="!p-2 gap-0.5">
            <ul className="list-disc pl-3.5 space-y-0 text-[13px] leading-snug">
              <li>
                <span className="font-bold">湖南</span>增速
                <span className="font-bold text-green-600">2.7%</span>
                ，二产仅<span className="font-bold text-green-600">1.1%</span>
                ，工程机械等传统支柱触底。
              </li>
              <li>
                <span className="font-bold">山西</span>增速
                <span className="font-bold text-green-600">2.1%</span>
                ，6月原煤产量骤降<span className="font-bold text-green-600">31.5%</span>
                ，被贵州反超至第22位。
              </li>
              <li>
                <span className="font-bold">海南</span>增速
                <span className="font-bold text-green-600">2.0%</span>
                全国垫底，石化检修叠加体量偏小。
              </li>
              <li>
                <span className="font-bold">东北三省</span>辽吉黑
                <span className="font-bold text-green-600">2.5%</span>/
                <span className="font-bold text-green-600">2.4%</span>/
                <span className="font-bold text-green-600">3.5%</span>
                ，资源型与重化工持续萎缩。
              </li>
            </ul>
          </BaseCard>
        </section>

        <section className="flex-1 min-h-0 grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-hidden">
          <ChartContainer delay="600ms" className="min-h-0 overflow-hidden">
            <BaseTable
              {...tableSharedProps}
              data={provinceGdpDataTop15}
              title={<span className="text-[11px]">2026年上半年各省份GDP及增速（前15）</span>}
              subtitle="单位：GDP-万亿，增速-%"
            />
          </ChartContainer>
          <ChartContainer delay="720ms" className="min-h-0 overflow-hidden">
            <BaseTable
              {...tableSharedProps}
              data={provinceGdpDataRest}
              title={<span className="text-[11px]">2026年上半年各省份GDP及增速（续）</span>}
              subtitle="数据来源：各省统计局 | GDP-万亿，增速-% | 增速为实际同比"
            />
          </ChartContainer>
        </section>
      </div>
    </BaseContentSlide>
  );
};
