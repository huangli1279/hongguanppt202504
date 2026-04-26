import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { importStatisticsData } from '@/data/importProducts';
import { cn } from '@/utils/cn';

export const ContentSlide28: React.FC = () => {
  const columns: ColumnConfig[] = [
    {
      key: 'product',
      title: '商品',
      align: 'left',
      width: '35%',
      render: (val: string) => {
        const level1Items = ['肉类 (包括杂碎)', '铁矿砂及其精矿', '稀土', '集成电路'];
        const boldItems = ['农产品*', '矿产品*', '战略性资源*', '机电产品*', '高新技术产品*'];

        let padding = 'pl-0';
        if (level1Items.includes(val)) padding = 'pl-4';

        const isBold = boldItems.includes(val);

        return <div className={cn(padding, isBold && "font-bold text-webank-blue")}>{val}</div>;
      }
    },
    {
      key: 'decAmount',
      title: '3月金额',
      align: 'right',
      render: (val: any, row: any) => {
        const redItems = ['农产品*', '肉类 (包括杂碎)', '矿产品*', '铁矿砂及其精矿', '战略性资源*', '稀土', '机电产品*', '集成电路', '高新技术产品*'];
        const isRed = redItems.includes(row.product);

        if (typeof val !== 'number') return <span className="text-slate-400">-</span>;
        const formatted = val.toLocaleString('en-US', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        });
        return <span className={isRed ? "text-red-500" : "text-black"}>{formatted}</span>;
      }
    },
    {
      key: 'yearTotalAmount',
      title: '1-3月累计金额',
      align: 'right',
      render: (val: any, row: any) => {
        const redItems = ['农产品*', '肉类 (包括杂碎)', '矿产品*', '铁矿砂及其精矿', '战略性资源*', '稀土', '机电产品*', '集成电路', '高新技术产品*'];
        const isRed = redItems.includes(row.product);

        if (typeof val !== 'number') return <span className="text-slate-400">-</span>;

        const formatted = val.toLocaleString('en-US', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        });

        return <span className={isRed ? "text-red-500" : "text-black"}>{formatted}</span>;
      }
    },
    { key: 'yearQtyYoY', title: '1-3月数量累计同比', align: 'right' },
    { key: 'yearAmountYoY', title: '1-3月金额累计同比', align: 'right' },
  ];

  return (
    <BaseContentSlide
      title="进口结构分化凸显，输入性通胀压力升温"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="结构性需求强劲，AI产业链拉动核心零部件进口大增" delay="0ms" variant="accent">
            <p>
              一季度自动数据处理设备进口同比增长<span className="text-red-500 font-semibold">49.5%</span>，集成电路进口同比增长<span className="text-red-500 font-semibold">45.0%</span>，机电产品（<span className="text-red-500 font-semibold">+24.9%</span>）与高新技术产品（<span className="text-red-500 font-semibold">+29.2%</span>）进口金额高速增长，凸显国内电子制造与AI算力产业对核心零部件的刚性需求与战略补库特征。
            </p>
          </BaseCard>
          <BaseCard title="地缘冲突推升大宗商品价格，输入性通胀压力凸显" delay="120ms">
            <p>
              中东局势扰动推升原油、铜价，一季度整体进口金额同比增速上行；矿产品中铁矿砂（数量<span className="text-red-500 font-semibold">+10.5%</span>、金额<span className="text-red-500 font-semibold">+11.3%</span>）、战略性资源中稀土（数量<span className="text-red-500 font-semibold">+30.0%</span>、金额<span className="text-red-500 font-semibold">+167.5%</span>）等大宗商品呈现“量价齐升”特征，反映战略性资源价格上涨与补库需求并存。
            </p>
          </BaseCard>
        </div>

        <ChartContainer delay="600ms" className="flex-1 min-h-0">
          <BaseTable
            data={importStatisticsData}
            columns={columns}
            title="2026年3月全国进口重点商品量值表"
            subtitle="数据来源：海关总署 | 金额单位：百万美元，同比：%"
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
