import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { exportTableData, ExportTableItem } from '@/data';
import { cn } from '@/utils/cn';

export const ContentSlide27: React.FC = () => {
  const columns: ColumnConfig[] = [
    {
      key: 'name',
      title: '商品名称',
      width: '28%',
      align: 'left',
      render: (value, row: ExportTableItem) => {
        const padding = row.level === 0 ? 'pl-0' : row.level === 1 ? 'pl-4' : 'pl-8';
        return (
          <div className={cn(padding, row.isCategory && 'font-bold text-webank-blue')}>
            {value}
          </div>
        );
      }
    },
    {
      key: 'decAmount',
      title: '3月金额',
      align: 'right',
      render: (val: any) => {
        if (typeof val !== 'number') return <span className="text-slate-400">-</span>;
        return <span className="text-black">{val.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</span>;
      }
    },
    {
      key: 'totalAmount',
      title: '1-3月累计金额',
      align: 'right',
      includeInStats: true,
      render: (val: any) => {
        if (typeof val !== 'number') return <span className="text-slate-400">-</span>;
        return <span className="text-black">{val.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</span>;
      }
    },
    { key: 'yoy12Qty', title: '1-3月数量累计同比', align: 'right', redThreshold: 10, includeInStats: true, render: (val: any, row: ExportTableItem, index: number, defaultRender?: (value: any) => React.ReactNode) => {
      if (row.name === '成品油') {
        if (typeof val !== 'number') return <span className="text-slate-400">-</span>;
        return <span className="text-black">{val.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</span>;
      }
      return defaultRender?.(val);
    }},
    { key: 'yoy12Amt', title: '1-3月金额累计同比', align: 'right', redThreshold: 10, includeInStats: true, render: (val: any, row: ExportTableItem, index: number, defaultRender?: (value: any) => React.ReactNode) => {
      if (row.name === '成品油') {
        if (typeof val !== 'number') return <span className="text-slate-400">-</span>;
        return <span className="text-black">{val.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</span>;
      }
      return defaultRender?.(val);
    }}
  ];

  return (
    <BaseContentSlide
      title="出口延续攀升：AI产业链“量价齐升”，高端装备制造高增长"
      cardColumns={1}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="mb-6 flex-shrink-0">
          <BaseCard delay="0ms" variant="accent" title="一季度高附加值与科技产品强势领跑">
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <span className="font-semibold">AI产业链：</span>集成电路出口同比飙升<span className="text-red-500 font-semibold">77.5%</span>，呈现“量价齐升”（数量<span className="text-red-500 font-semibold">+13.4%</span>）。
              </li>
              <li>
                <span className="font-semibold">高端装备制造：</span>汽车<span className="text-red-500 font-semibold">+58.5%</span>、船舶<span className="text-red-500 font-semibold">+48.7%</span>维持超高增速；新能源汽车出口数量增长<span className="text-red-500 font-semibold">120%</span>。
              </li>
            </ul>
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <ChartContainer delay="600ms" className="flex-1 min-h-0">
          <BaseTable
            data={exportTableData}
            columns={columns}
            title="2026年3月全国出口重点商品量值表"
            subtitle="数据来源：海关总署 | 金额单位：百万美元"
            rowHeight="auto"
            titleBlockClassName="mb-[clamp(1px,0.3vh,4px)]"
            subtitleClassName="mt-0 text-[clamp(7px,0.9vh,9px)]"
            headerCellClassName="py-1 text-[clamp(12px,1.5vh,16px)]"
            cellClassName="py-0 text-[clamp(11px,1.3vh,15px)] leading-tight"
          />
        </ChartContainer>
      </div>
    </BaseContentSlide>
  );
};
