import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';

const retailCategoryData = [
  {
    period: '2025-02',
    total: 4.4,
    food: 8.7,
    daily: 5.7,
    medicine: 2.5,
    apparel: 3.3,
    jewelry: 5.4,
    appliances: 10.9,
    sports: 25.0,
    cultureOffice: 21.8,
    communication: 26.2,
    automobile: -4.4,
    furniture: 11.7,
    buildingMaterials: 0.1,
  },
  {
    period: '2025-03',
    total: 8.6,
    food: 11.8,
    daily: 8.8,
    medicine: 1.4,
    apparel: 3.6,
    jewelry: 10.6,
    appliances: 35.1,
    sports: 26.2,
    cultureOffice: 21.5,
    communication: 28.6,
    automobile: 5.5,
    furniture: 29.5,
    buildingMaterials: -0.1,
  },
  {
    period: '2025-04',
    total: 6.6,
    food: 10.9,
    daily: 7.6,
    medicine: 2.6,
    apparel: 2.2,
    jewelry: 25.3,
    appliances: 38.8,
    sports: 23.3,
    cultureOffice: 33.5,
    communication: 19.9,
    automobile: 0.7,
    furniture: 26.9,
    buildingMaterials: 9.7,
  },
  {
    period: '2025-05',
    total: 8.2,
    food: 12.4,
    daily: 8.0,
    medicine: 0.3,
    apparel: 4.0,
    jewelry: 21.8,
    appliances: 53.0,
    sports: 28.3,
    cultureOffice: 30.5,
    communication: 33.0,
    automobile: 1.1,
    furniture: 25.6,
    buildingMaterials: 5.8,
  },
  {
    period: '2025-06',
    total: 5.5,
    food: 5.4,
    daily: 7.8,
    medicine: -0.7,
    apparel: 1.9,
    jewelry: 6.1,
    appliances: 32.4,
    sports: 9.5,
    cultureOffice: 24.4,
    communication: 13.9,
    automobile: 4.6,
    furniture: 28.7,
    buildingMaterials: 1.0,
  },
  {
    period: '2025-07',
    total: 3.1,
    food: 6.9,
    daily: 8.2,
    medicine: 0.1,
    apparel: 1.8,
    jewelry: 8.2,
    appliances: 28.7,
    sports: 13.7,
    cultureOffice: 13.8,
    communication: 14.9,
    automobile: -1.5,
    furniture: 20.6,
    buildingMaterials: -0.5,
  },
  {
    period: '2025-08',
    total: 2.6,
    food: 4.0,
    daily: 7.7,
    medicine: 0.9,
    apparel: 3.1,
    jewelry: 16.8,
    appliances: 14.3,
    sports: 16.9,
    cultureOffice: 14.2,
    communication: 7.3,
    automobile: 0.8,
    furniture: 18.6,
    buildingMaterials: -0.7,
  },
  {
    period: '2025-09',
    total: 2.7,
    food: 4.6,
    daily: 6.8,
    medicine: 1.9,
    apparel: 4.7,
    jewelry: 9.7,
    appliances: 3.3,
    sports: 11.9,
    cultureOffice: 6.2,
    communication: 16.2,
    automobile: 1.6,
    furniture: 16.2,
    buildingMaterials: -0.1,
  },
  {
    period: '2025-10',
    total: 1.4,
    food: 8.0,
    daily: 7.4,
    medicine: 3.6,
    apparel: 6.3,
    jewelry: 37.6,
    appliances: -14.6,
    sports: 10.1,
    cultureOffice: 13.5,
    communication: 23.2,
    automobile: -6.6,
    furniture: 9.6,
    buildingMaterials: -8.3,
  },
  {
    period: '2025-11',
    total: -2.2,
    food: 4.0,
    daily: -0.8,
    medicine: 4.9,
    apparel: 3.5,
    jewelry: 8.5,
    appliances: -19.4,
    sports: 0.4,
    cultureOffice: 11.7,
    communication: 20.6,
    automobile: -8.3,
    furniture: -3.8,
    buildingMaterials: -17.0,
  },
  {
    period: '2025-12',
    total: -2.01,
    food: 2.4,
    daily: 3.7,
    medicine: 1.2,
    apparel: 0.6,
    jewelry: 5.9,
    appliances: -18.7,
    sports: 9.0,
    cultureOffice: 9.2,
    communication: 20.9,
    automobile: -5.0,
    furniture: -2.2,
    buildingMaterials: -11.8,
  },
  {
    period: '2026-02',
    total: 2.5,
    food: 11.8,
    daily: 6.6,
    medicine: 0.7,
    apparel: 10.4,
    jewelry: 13.0,
    appliances: 3.3,
    sports: 4.1,
    cultureOffice: 5.8,
    communication: 17.8,
    automobile: -7.3,
    furniture: 8.8,
    buildingMaterials: -2.2,
  },
  {
    period: '2026-03',
    total: 1.2,
    food: 9.0,
    daily: 4.6,
    medicine: 5.7,
    apparel: 7.0,
    jewelry: 11.7,
    appliances: -5.0,
    sports: -2.0,
    cultureOffice: 15.0,
    communication: 27.3,
    automobile: -11.8,
    furniture: -8.7,
    buildingMaterials: -9.0,
  },
];

const numberCell = (value: any) => {
  const formatted = typeof value === 'number' ? value.toFixed(1) : value;
  return <span>{formatted}</span>;
};

export const ContentSlide17: React.FC = () => {
  const columns: ColumnConfig[] = [
    { key: 'period', title: '时间', align: 'center' },
    { key: 'total', title: '限额以上零售总额', align: 'right', render: numberCell },
    {
      key: 'group-necessities',
      title: '必选消费',
      children: [
        { key: 'food', title: '粮油食品饮料烟酒', align: 'right', render: numberCell },
        { key: 'daily', title: '日用品', align: 'right', render: numberCell },
        { key: 'medicine', title: '中西药品', align: 'right', render: numberCell },
      ],
    },
    {
      key: 'group-discretionary',
      title: '可选消费',
      children: [
        { key: 'apparel', title: '服装鞋帽纺织', align: 'right', render: numberCell },
        { key: 'jewelry', title: '金银珠宝', align: 'right', render: numberCell },
        { key: 'sports', title: '体育娱乐', align: 'right', render: numberCell },
        { key: 'cultureOffice', title: '文化办公', align: 'right', render: numberCell },
      ],
    },
    {
      key: 'group-trade-in',
      title: '以旧换新及地产链',
      children: [
        { key: 'communication', title: '通讯器材', align: 'right', render: numberCell },
        { key: 'appliances', title: '家电音像', align: 'right', render: numberCell },
        { key: 'automobile', title: '汽车', align: 'right', render: numberCell },
        { key: 'furniture', title: '家具', align: 'right', render: numberCell },
        { key: 'buildingMaterials', title: '建筑装潢', align: 'right', render: numberCell },
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
          <BaseCard title="必选消费延续稳定增长" delay="200ms" variant="accent">
            <p>
              一季度限额以上零售总额累计增长 2.2%。内需扩大带动必选品类稳定修复，3 月粮油食品类增长 9.0%，日用品增长 4.6%，中西药品增长 5.7%；可选消费中，金银珠宝增长 11.7%，文化办公用品增长 15.0%。
            </p>
          </BaseCard>
          <BaseCard title="补贴扩容转向数智终端" delay="400ms">
            <p>
              2026 年消费品“以旧换新”补贴范围由传统家电、汽车扩容至 AI 手机、智能眼镜、智能无人机等数智终端，通讯器材类延续高增，1-2 月增长 17.8%、3 月增长 27.3%；汽车、家具受高基数影响分别回落至 -11.8%、-8.7%。
            </p>
          </BaseCard>
        </div>

        <ChartContainer delay="600ms" className="flex-1 min-h-0">
          <BaseTable
            title="限额以上批发零售贸易业零售类值当月同比（完整版）"
            subtitle="数据来源：国家统计局 | 单位：%"
            data={retailCategoryData}
            columns={columns}
            dateColumn="period"
            colorizeNumbers={false}
            rowHeight="auto"
            cellClassName="px-1.5 text-[11px] leading-tight"
            headerCellClassName="px-1.5 text-[11px] leading-tight"
          />
        </ChartContainer>
      </div>
    </BaseContentSlide>
  );
};
