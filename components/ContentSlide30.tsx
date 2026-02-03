import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';
import { importProductTrendData, importStatisticsData } from '@/data/importProducts';
import { cn } from '../utils/cn';

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
          '干鲜瓜果及坚果',
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
    { key: 'decAmount', title: '12月金额', align: 'right' },
    { key: 'yearTotalAmount', title: '1-12月累计金额', align: 'right' },
    { key: 'yearQtyYoY', title: '1-12月数量累计同比', align: 'right' },
    { key: 'yearAmountYoY', title: '1-12月金额累计同比', align: 'right' },
  ];

  return (
    <BaseContentSlide
      title={<>进口端结构性分化——硬科技补库但传统内需疲软</>}
      cardColumns={2}
      className="p-8"
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-3 mb-1 flex-shrink-0">
          <BaseCard title="机电与高新技术产品进口韧性显著" delay="200ms" variant="accent" className="p-2 gap-1">
            <p className="text-[11px] leading-normal">
              机电与高新技术产品全年累计金额同比增长<span className="text-red-500 font-semibold">5.2%</span>和<span className="text-red-500 font-semibold">9.3%</span>。 其中自动数据处理设备（18.2%）与集成电路（10.1%）增势强劲，稳中有升，凸显国内电子制造与AI算力产业对核心零部件的刚性需求与战略补库。
            </p>
          </BaseCard>
          <BaseCard title="大宗商品进口呈现显著的“价格红利”与“品类分化”特征" delay="400ms" className="p-2 gap-1">
            <p className="text-[11px] leading-normal">
              受全球大宗价格回落影响，原油（数量+4.4%，金额-8.8%）、铁矿砂（数量+1.8%，金额-7.1%）及大豆（数量+6.5%，金额-4.6%）均呈“量增价跌”态势，有效降低了国内原材料输入成本；煤炭与天然气呈现量价双降。汽车产业进口替代效应加速兑现，整车（-39.7%）与零部件（-21.4%）大幅回落，反映国产新能源车企统治力增强。
            </p>
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <div className="flex-1 min-h-0 overflow-hidden">
          <ChartContainer delay="600ms" className="h-full">
            <BaseTable
              data={importStatisticsData}
              columns={columns}
              title="主要进口商品统计"
              subtitle="单位：百万美元，同比：%"
              rowHeight="dense"
              striped={true}
              bordered={true}
              colorizeNumbers={true}
              stickyHeader={true}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
