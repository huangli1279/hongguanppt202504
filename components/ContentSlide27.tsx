import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';
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
    { key: 'decAmount', title: '3月金额', align: 'right' },
    {
      key: 'totalAmount',
      title: '1-3月累计金额',
      align: 'right',
      includeInStats: true,
      render: (value, row: ExportTableItem, index, defaultRender) => {
        const redRows = ['农产品*', '机电产品*', '高新技术产品*'];
        if (redRows.includes(row.name)) {
          const formatted = typeof value === 'number'
            ? value.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            : value;
          return <span className="text-red-500 font-normal">{formatted}</span>;
        }

        if (row.name === '集成电路' && defaultRender) {
          return defaultRender(value);
        }

        const formatted = typeof value === 'number'
          ? value.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
          : value;
        return <span className="text-black">{formatted}</span>;
      }
    },
    { key: 'yoy12Qty', title: '1-3月数量累计同比', align: 'right', redThreshold: 10 },
    { key: 'yoy12Amt', title: '1-3月金额累计同比', align: 'right', redThreshold: 10 }
  ];

  return (
    <BaseContentSlide
      title="产品结构极致分化：AI产业链现“量价齐升”，输入性通胀推高进口读数"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard delay="200ms" variant="accent" title="高附加值与科技产品强势领跑">
            <p>
              受全球AI产业爆发拉动，一季度机电产品表现极为亮眼。集成电路出口同比飙升<span className="text-red-500 font-semibold">77.5%</span>，呈现典型的“量价齐升”特征（数量同比<span className="text-red-500 font-semibold">+13.4%</span>）。汽车（<span className="text-red-500 font-semibold">+58.5%</span>）、船舶（<span className="text-red-500 font-semibold">+48.7%</span>）等高端装备制造维持超高增速；受油价影响，一季度新能源汽车出口数量增长<span className="text-red-500 font-semibold">120%</span>。
            </p>
          </BaseCard>
          <BaseCard delay="400ms" title="高附加值脱敏地缘物流摩擦">
            <p>
              尽管红海等地缘冲突推升海运集装箱运价，但当前出口结构中高附加值产品占比持续提升，运费占货值比率极低，对运价敏感度较低；尽管霍尔木兹海峡停摆严重，但其海运贸易以原油、液化天然气等化学品为主，占总货运量仅约<span className="text-webank-blue font-semibold">3%</span>。
            </p>
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <ChartContainer delay="800ms" className="flex-1 min-h-0">
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
