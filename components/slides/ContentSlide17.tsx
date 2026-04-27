import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { retailCategoryDetailData as retailCategoryData } from '../../data';
import { BaseTable, ColumnConfig } from '../base/BaseTable';

export const ContentSlide17: React.FC = () => {
  const columns: ColumnConfig[] = [
    { key: 'period', title: '时间', align: 'center' },
    { key: 'total', title: '限额以上零售总额', align: 'right' },
    {
      key: 'group-necessities',
      title: '必选消费',
      highlight: true,
      children: [
        { key: 'food', title: '粮油食品饮料烟酒', align: 'right', highlight: true },
        { key: 'daily', title: '日用品', align: 'right', highlight: true },
        { key: 'medicine', title: '中西药品', align: 'right', highlight: true },
      ],
    },
    {
      key: 'group-discretionary',
      title: '可选消费',
      highlight: true,
      children: [
        { key: 'apparel', title: '服装鞋帽纺织', align: 'right', highlight: true },
        { key: 'jewelry', title: '金银珠宝', align: 'right', highlight: true },
        { key: 'sports', title: '体育娱乐', align: 'right', highlight: true },
        { key: 'cultureOffice', title: '文化办公', align: 'right', highlight: true },
      ],
    },
    {
      key: 'group-trade-in',
      title: '以旧换新及地产链',
      children: [
        { key: 'communication', title: '通讯器材', align: 'right' },
        { key: 'appliances', title: '家电音像', align: 'right' },
        { key: 'automobile', title: '汽车', align: 'right' },
        { key: 'furniture', title: '家具', align: 'right' },
        { key: 'buildingMaterials', title: '建筑装潢', align: 'right' },
      ],
    },
  ];

  return (
    <BaseContentSlide
      title="必选品类稳定增长，“以旧换新”政策转型升级"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-2 gap-4 mb-4 flex-shrink-0">
          <BaseCard title="必选消费延续稳定增长" delay="0ms" variant="accent">
            <p>
              一季度限额以上零售总额累计增长 2.2%。内需扩大带动必选品类稳定修复，3 月粮油食品类增长 9.0%，日用品增长 4.6%，中西药品增长 5.7%；可选消费中，金银珠宝增长 11.7%，文化办公用品增长 15.0%。
            </p>
          </BaseCard>
          <BaseCard title="补贴扩容转向数智终端" delay="120ms">
            <p>
              2026 年消费品“以旧换新”补贴范围由传统家电、汽车扩容至 AI 手机、智能眼镜、智能无人机等数智终端，通讯器材类延续高增，3 月增长 27.3%；汽车、家具受高基数影响分别回落至 -11.8%、-8.7%，汽车一季度销量下降5.6%，其中新能源下降3.7%。
            </p>
          </BaseCard>
        </div>

        <ChartContainer delay="600ms" className="flex-1 min-h-0">
          <BaseTable
            title="限额以上批发零售贸易业零售类值当月同比"
            subtitle="数据来源：国家统计局 | 单位：%"
            data={retailCategoryData}
            columns={columns}
            dateColumn="period"
            colorizeNumbers={true}
            rowHeight="auto"
            cellClassName="px-1.5 text-caption leading-tight"
            headerCellClassName="px-1.5 text-caption leading-tight"
          />
        </ChartContainer>
      </div>
    </BaseContentSlide>
  );
};
