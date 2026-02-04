import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';
import { exportTableData, ExportTableItem } from '@/data';
import { cn } from '@/utils/cn';

export const ContentSlide29: React.FC = () => {
  const columns: ColumnConfig[] = [
    {
      key: 'name',
      title: '商品名称',
      width: '24%',
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
    { key: 'decAmount', title: '12月金额', align: 'right' },
    {
      key: 'totalAmount',
      title: '1-12月累计金额',
      align: 'right',
      includeInStats: true,
      render: (value, row: ExportTableItem, index, defaultRender) => {
        // 特殊处理：指定行强制红色，且不加粗
        const redRows = ['农产品*', '机电产品*', '高新技术产品*'];
        if (redRows.includes(row.name)) {
          const formatted = typeof value === 'number'
            ? value.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
            : value;
          return <span className="text-red-500 font-normal">{formatted}</span>;
        }
        
        // 集成电路保留自动着色（红/绿）
        if (row.name === '集成电路' && defaultRender) {
          return defaultRender(value);
        }

        // 其他行显示为黑色
        const formatted = typeof value === 'number'
          ? value.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
          : value;
        return <span className="text-black">{formatted}</span>;
      }
    },
    { key: 'yoy12Qty', title: '1-12月数量累计同比', align: 'right', redThreshold: 10 },
    { key: 'yoy12Amt', title: '1-12月金额累计同比', align: 'right', redThreshold: 10 },
    { key: 'yoy6Qty', title: '1-6月数量累计同比', align: 'right' },
    { key: 'yoy6Amt', title: '1-6月金额累计同比', align: 'right' }
  ];

  return (
    <BaseContentSlide
      title="机电出口占比创新高，劳密产品表现疲软，高技术驱动结构升级"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-4 flex-shrink-0">
          <BaseCard delay="200ms" variant="accent" title="机电产品制造稳步领跑，全年出口占比提升至60.9%的历史高位">
            <p>
              机电产品全年累计同比增长<span className="text-webank-blue font-semibold">8.4%</span>，其中集成电路（<span className="text-red-500 font-semibold">26.8%</span>），"新三样"（电动载人汽车、锂电池、太阳能电池）（<span className="text-red-500 font-semibold">27.1%</span>）和船舶（<span className="text-red-500 font-semibold">26.7%</span>）贡献巨大；高新技术产品全年增长<span className="text-webank-blue font-semibold">7.5%</span>，充分兑现了中国制造在全球AI算力建设与新能源转型中的核心竞争力。
            </p>
          </BaseCard>
          <BaseCard delay="400ms" title="劳动密集型产业下跌明显">
            <p>
              衣服（全年<span className="text-green-600 font-semibold">-5.0%</span>），箱包（全年<span className="text-green-600 font-semibold">-13.5%</span>）和鞋靴（全年<span className="text-green-600 font-semibold">-11.3%</span>）等劳动密集型产业均下跌，体现传统支柱产业在存量博弈与产业链外迁压力下正向高端装备制造让位。
            </p>
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <ChartContainer delay="800ms" className="flex-1 min-h-0">
          <BaseTable
            data={exportTableData}
            columns={columns}
            title="2025年主要出口商品统计"
            subtitle="数据来源：海关总署 | 金额单位：百万美元"
            rowHeight="auto"
            titleBlockClassName="mb-[clamp(1px,0.3vh,4px)]"
            subtitleClassName="mt-0 text-[clamp(7px,0.9vh,9px)]"
            headerCellClassName="py-1 text-[clamp(10px,1.2vh,13px)]"
            cellClassName="py-0 text-[clamp(9px,1vh,12px)] leading-tight"
          />
        </ChartContainer>
      </div>
    </BaseContentSlide>
  );
};
