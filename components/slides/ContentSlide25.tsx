import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { importTableData, ImportTableItem } from '@/data';
import { cn } from '@/utils/cn';

export const ContentSlide25: React.FC = () => {
  const columns: ColumnConfig[] = [
    {
      key: 'name',
      title: '商品名称',
      width: '28%',
      align: 'left',
      render: (value, row: ImportTableItem) => {
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
      title: '6月金额',
      align: 'right',
      render: (val: any) => {
        if (typeof val !== 'number') return <span className="text-slate-400">-</span>;
        return <span className="text-black">{val.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</span>;
      }
    },
    {
      key: 'totalAmount',
      title: '1-6月累计金额',
      align: 'right',
      includeInStats: true,
      render: (val: any) => {
        if (typeof val !== 'number') return <span className="text-slate-400">-</span>;
        return <span className="text-black">{val.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</span>;
      }
    },
    { key: 'yoy12Qty', title: '1-6月数量累计同比', align: 'right', redThreshold: 10, includeInStats: true },
    { key: 'yoy12Amt', title: '1-6月金额累计同比', align: 'right', redThreshold: 10, includeInStats: true },
  ];

  return (
    <BaseContentSlide
      title="进口端：AI链拉动显著，大宗商品量价分化"
      cardColumns={3}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-3 mb-4 flex-shrink-0">
          <BaseCard title="AI产业链贡献近半增量" delay="0ms" variant="accent">
            <p>
              上半年进口历史同期首次突破<span className="font-semibold">10万亿元</span>，同比增长<span className="text-red-500 font-semibold">22.1%</span>（美元计<span className="text-red-500 font-semibold">26.6%</span>），增速高于出口<span className="text-red-500 font-semibold">8.7</span>个百分点。集成电路进口额<span className="font-semibold">2980亿美元</span>、同比<span className="text-red-500 font-semibold">55.8%</span>，自动数据处理设备及零部件同比<span className="text-red-500 font-semibold">78.9%</span>；6月二者合计拉动进口约<span className="text-red-500 font-semibold">17.4</span>个百分点，贡献近一半增量。
            </p>
          </BaseCard>
          <BaseCard title="大宗商品量价分化" delay="120ms">
            <p>
              金属矿砂进口增长<span className="text-red-500 font-semibold">22.6%</span>，其中铁矿砂进口量增<span className="text-red-500 font-semibold">6.3%</span>、金额增<span className="text-red-500 font-semibold">11.4%</span>；电子元件进口增长<span className="text-red-500 font-semibold">45.6%</span>。原油进口量累计下降<span className="text-green-600 font-semibold">11.4%</span>，但价格抬升使金额仍增<span className="text-red-500 font-semibold">1.8%</span>；6月原油进口量降至近十年低位，地缘冲突扰动供给与补库节奏。
            </p>
          </BaseCard>
          <BaseCard
            title={
              <span className="px-2 py-0.5 bg-gradient-to-r from-yellow-200 to-amber-300 rounded-full text-amber-700 font-semibold shadow-sm">
                下半年展望：结构韧性仍在
              </span>
            }
            delay="240ms"
            className="[&_h4]:!bg-gradient-to-r [&_h4]:!from-yellow-200 [&_h4]:!to-amber-300 [&_h4]:!text-amber-700 [&_h4]:!shadow-sm border-l-4 !border-amber-400"
          >
            <p>
              总量增速或回落，但AI算力扩产与存储涨价周期尚未结束，集成电路、算力硬件进口有望保持韧性。若内需改善加快、能源供给逐步修复，进口结构有望优化，支撑全年外贸发展。
            </p>
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <ChartContainer delay="600ms" className="flex-1 min-h-0">
          <BaseTable
            data={importTableData}
            columns={columns}
            title="2026年6月全国进口重点商品量值表"
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
