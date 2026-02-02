import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';
import { industryRetailData } from '@/data/industryRetail';

export const ContentSlide19: React.FC = () => {
  // 转换数据为表格格式
  const tableData = industryRetailData.map(item => ({
    period: item.period,
    grainOilFood: item.grainOilFood,
    dailyNecessities: item.dailyNecessities,
    medicine: item.medicine,
    clothing: item.clothing,
    jewelry: item.jewelry,
    sportsEntertainment: item.sportsEntertainment,
    cultureOffice: item.cultureOffice,
    furniture: item.furniture,
    homeAppliances: item.homeAppliances,
    buildingMaterials: item.buildingMaterials,
    automobile: item.automobile,
    communication: item.communication,
    petroleumProducts: item.petroleumProducts,
  }));

  const columns: ColumnConfig[] = [
    { key: 'period', title: '时间', align: 'center' },
    {
      key: 'group-essential',
      title: '必选类',
      children: [
        { key: 'grainOilFood', title: '粮油食品', align: 'center' },
        { key: 'dailyNecessities', title: '日用品', align: 'center' },
        { key: 'medicine', title: '中西药品', align: 'center' },
      ],
    },
    {
      key: 'group-optional',
      title: '可选类',
      children: [
        { key: 'clothing', title: '服装鞋帽', align: 'center' },
        { key: 'jewelry', title: '金银珠宝', align: 'center' },
        { key: 'sportsEntertainment', title: '体育娱乐', align: 'center' },
        { key: 'cultureOffice', title: '文化办公', align: 'center', highlight: true },
      ],
    },
    {
      key: 'group-real-estate',
      title: '房地产相关类',
      children: [
        { key: 'furniture', title: '家具', align: 'center', highlight: true },
        { key: 'homeAppliances', title: '家电音像', align: 'center', highlight: true },
        { key: 'buildingMaterials', title: '建材装潢', align: 'center' },
      ],
    },
    {
      key: 'group-other',
      title: '其他类',
      children: [
        { key: 'automobile', title: '汽车', align: 'center', highlight: true },
        { key: 'communication', title: '通讯器材', align: 'center', highlight: true },
        { key: 'petroleumProducts', title: '石油及制品', align: 'center' },
      ],
    },
  ];

  return (
    <BaseContentSlide
      title="“以旧换新”产品多数稳定增长，汽车与石油消费年底承压"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="通讯器材增速领跑，家电家具受补贴退坡放缓" delay="200ms" variant="accent">
            <p>
              2025全年通讯器材类以 <span className="text-red-500 font-semibold">20.86%</span> 的累计增速领跑大盘，这主要受益于 "以旧换新"对中高端机型的精准补贴（占总机型 72.5%）；体育娱乐用品全年正增长，12月累计达 <span className="text-emerald-600 font-semibold">15.70%</span>，折射居民对健康投资与精神消费的持续热衷；家用电器（12月跌至11.0%）、家具类（12月跌至14.62%）受四季度补贴退坡影响，下半年增速持续下降。
            </p>
          </BaseCard>
          <BaseCard title="石油建材、汽车行业负增长收尾" delay="400ms">
            <p>
              石油及制品类消费受油价下行与新能源替代双重挤压，全年增速呈现单边下行态势（年初 0.9% -&gt; 年底 -5.72%）。受房地产下行周期的影响，建筑及装潢材料类累计同比跌至 <span className="text-red-500 font-semibold">-2.67%</span>，汽车行业受补贴退坡和市场内卷影响，全年以 <span className="text-red-500 font-semibold">-1.5%</span> 的增长收尾。
            </p>
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <ChartContainer delay="600ms" className="flex-1 min-h-0">
          <BaseTable
            title="2025年全国分行业零售累计同比数据"
            subtitle="数据来源：国家统计局 | 单位：%"
            data={tableData}
            columns={columns}
            dateColumn="period"
            colorizeNumbers={false}
            rowHeight="auto"
            stickyHeader={true}
          />
        </ChartContainer>
      </div>
    </BaseContentSlide>
  );
};
