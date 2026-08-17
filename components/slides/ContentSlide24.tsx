import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { exportTableData, ExportTableItem } from '@/data';
import { cn } from '@/utils/cn';

export const ContentSlide24: React.FC = () => {
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
    { key: 'yoy12Qty', title: '1-6月数量累计同比', align: 'right', redThreshold: 10, includeInStats: true, render: (val: any, row: ExportTableItem, index: number, defaultRender?: (value: any) => React.ReactNode) => {
      if (row.name === '成品油') {
        if (typeof val !== 'number') return <span className="text-slate-400">-</span>;
        return <span className="text-black">{val.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</span>;
      }
      return defaultRender?.(val);
    }},
    { key: 'yoy12Amt', title: '1-6月金额累计同比', align: 'right', redThreshold: 10, includeInStats: true, render: (val: any, row: ExportTableItem, index: number, defaultRender?: (value: any) => React.ReactNode) => {
      if (row.name === '成品油') {
        if (typeof val !== 'number') return <span className="text-slate-400">-</span>;
        return <span className="text-black">{val.toLocaleString('en-US', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</span>;
      }
      return defaultRender?.(val);
    }}
  ];

  return (
    <BaseContentSlide
      title="出口端：新动能产品拉动显著"
      cardColumns={3}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-3 mb-4 flex-shrink-0">
          <BaseCard title="AI投资周期拉动爆发" delay="0ms" variant="accent">
            <p>
              AI基础设施建设进入高投入期，直接拉动电子信息及高端制造贸易需求。上半年，高新技术产品拉动中国出口增长<span className="text-red-500 font-semibold">9.3</span>个百分点，拉动力度较2025年全年上升<span className="text-red-500 font-semibold">7.4</span>个百分点。1—6月集成电路出口额增长<span className="text-red-500 font-semibold">96.1%</span>，表现持续亮眼。
            </p>
          </BaseCard>
          <BaseCard title={'能源转型促进"新三样"增长'} delay="120ms">
            <p>
              中东变局引发的能源安全担忧使全球能源转型加速，上半年汽车出口<span className="text-red-500 font-semibold">509.6万辆</span>，首次突破<span>500万辆</span>大关，汽车（包括底盘）累计同比增长<span className="text-red-500 font-semibold">53%</span>，其中新能源汽车出口同比增长<span className="text-red-500 font-semibold">120%</span>，是核心拉动力量。锂电池出口额<span>486亿美元</span>（<span className="text-red-500 font-semibold">+42.7%</span>），风力发电机组同比<span className="text-red-500 font-semibold">+35.6%</span>。
            </p>
          </BaseCard>
          <BaseCard
            title="下半年展望：增速回落、结构分化"
            delay="240ms"
            className="!bg-blue-100"
          >
            <p>
              机构判断下半年出口增速中枢将回落：基准情景三、四季度分别约<span className="text-black">12.4%</span>、<span className="text-black">7.7%</span>，全年约<span className="text-black">13.7%</span>（乐观 <span className="text-black">17.6%</span> / 悲观 <span className="text-black">9.8%</span>）。
            </p>
            <p>
              结构上呈现 K 型分化：AI 链电子产品、"新三样" 仍保持韧性，传统消费品出口压力较大。
            </p>
            <p>
              风险来自去年高基数抬升、海外贸易摩擦、地缘局势扰动。
            </p>
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <ChartContainer delay="600ms" className="flex-1 min-h-0">
          <BaseTable
            data={exportTableData}
            columns={columns}
            title="2026年6月全国出口重点商品量值表"
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
