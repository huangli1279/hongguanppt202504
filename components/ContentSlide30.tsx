import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';
import { importStatisticsData } from '@/data/importProducts';
import { cn } from '@/utils/cn';

export const ContentSlide30: React.FC = () => {
  // 表格列配置
  const columns: ColumnConfig[] = [
    {
      key: 'product',
      title: '商品',
      align: 'left',
      width: '35%',
      render: (val: string) => {
        const level1Items = [
          '肉类 (包括杂碎)',
          '粮食',
          '自动数据处理设备及其零部件',
          '二极管及类似半导体器件',
          '集成电路',
          '汽车(包括底盘)',
          '汽车零配件'
        ];
        const level2Items = ['大豆'];
        const boldItems = ['农产品*', '机电产品*', '高新技术产品*'];

        let padding = 'pl-0';
        if (level1Items.includes(val)) padding = 'pl-4';
        if (level2Items.includes(val)) padding = 'pl-8';

        const isBold = boldItems.includes(val);

        return <div className={cn(padding, isBold && "font-bold text-webank-blue")}>{val}</div>;
      }
    },
    {
      key: 'decAmount',
      title: '12月金额',
      align: 'right',
      render: (val: any, row: any) => {
        const redItems = ['农产品*', '原油', '机电产品*', '高新技术产品*'];
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
      title: '1-12月累计金额',
      align: 'right',
      render: (val: any, row: any) => {
        const redItems = ['农产品*', '机电产品*', '高新技术产品*', '集成电路'];
        const isRed = redItems.includes(row.product);

        if (typeof val !== 'number') return <span className="text-slate-400">-</span>;

        const formatted = val.toLocaleString('en-US', {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1
        });

        return <span className={isRed ? "text-red-500" : "text-black"}>{formatted}</span>;
      }
    },
    { key: 'yearQtyYoY', title: '1-12月数量累计同比', align: 'right' },
    { key: 'yearAmountYoY', title: '1-12月金额累计同比', align: 'right' },
  ];

  return (
    <BaseContentSlide
      title="进口端结构性分化——硬科技补库但传统内需疲软"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="机电与高新技术产品进口韧性显著" delay="200ms" variant="accent">
            <p>
              机电与高新技术产品全年累计金额同比增长<span className="text-red-500 font-semibold">5.2%</span>和<span className="text-red-500 font-semibold">9.3%</span>。 其中自动数据处理设备（<span className="text-red-500 font-semibold">18.2%</span>）与集成电路（<span className="text-red-500 font-semibold">10.1%</span>）增势强劲，稳中有升，凸显国内电子制造与AI算力产业对核心零部件的刚性需求与战略补库。
            </p>
          </BaseCard>
          <BaseCard title="大宗商品呈现“价格红利”，汽车进口大幅下跌" delay="400ms">
            <p>
              受全球大宗价格回落影响，原油（数量<span className="text-red-500 font-semibold">+4.4%</span>，金额<span className="text-green-500 font-semibold">-8.8%</span>）、大豆（数量<span className="text-red-500 font-semibold">+6.5%</span>，金额<span className="text-green-500 font-semibold">-4.6%</span>）均呈“量增价跌”态势，降低了国内原材料输入成本；煤炭与天然气呈现量价双降。汽车产业进口替代效应加速兑现，整车（金额<span className="text-green-500 font-semibold">-39.7%</span>）与零部件（金额<span className="text-green-500 font-semibold">-21.4%</span>）大幅回落，反映国产新能源车企统治力增强。
            </p>
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <ChartContainer delay="800ms" className="flex-1 min-h-0">
          <BaseTable
            data={importStatisticsData.filter(item => !['干鲜瓜果及坚果', '铜矿砂及其精矿', '钢材'].includes(item.product))}
            columns={columns}
            title="2025年主要进口商品统计"
            subtitle="金额单位：百万美元，同比：%"
            rowHeight="auto"
            titleBlockClassName="mb-[clamp(4px,0.6vh,8px)]"
            subtitleClassName="mt-0 text-[clamp(10px,1.2vh,12px)]"
            cellClassName="py-[clamp(2px,0.4vh,4px)] text-[clamp(9px,1.2vh,11px)] leading-tight"
          />
        </ChartContainer>
      </div>
    </BaseContentSlide>
  );
};
