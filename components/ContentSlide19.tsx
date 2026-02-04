import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';
import { industryRetailData } from '@/data/industryRetail';

export const ContentSlide19: React.FC = () => {
  // 转换数据为表格格式
  const tableData = industryRetailData.map(item => ({
    period: item.period,
    cultureOffice: item.cultureOffice,
    furniture: item.furniture,
    homeAppliances: item.homeAppliances,
    automobile: item.automobile,
    communication: item.communication,
    jewelry: item.jewelry,
    sportsEntertainment: item.sportsEntertainment,
    petroleumProducts: item.petroleumProducts,
  }));

  const columns: ColumnConfig[] = [
    { key: 'period', title: '时间', align: 'center' },
    {
      key: 'group-trade-in',
      title: '以旧换新类',
      children: [
        { key: 'cultureOffice', title: '文化办公', align: 'right' },
        { 
          key: 'furniture', 
          title: '家具', 
          align: 'right',
          render: (val: any, row: any) => {
            const isTargetPeriod = ['2025-10', '2025-11', '2025-12'].includes(row.period);
            const formatted = typeof val === 'number' ? val.toFixed(1) : val;
            return <span className={isTargetPeriod ? "text-green-600" : ""}>{formatted}</span>;
          }
        },
        { 
          key: 'homeAppliances', 
          title: '家电音像', 
          align: 'right',
          render: (val: any, row: any) => {
            const isTargetPeriod = ['2025-10', '2025-11', '2025-12'].includes(row.period);
            const formatted = typeof val === 'number' ? val.toFixed(1) : val;
            return <span className={isTargetPeriod ? "text-green-600" : ""}>{formatted}</span>;
          }
        },
        { 
          key: 'automobile', 
          title: '汽车', 
          align: 'right',
          render: (val: any, row: any) => {
            const isTargetPeriod = ['2025-10', '2025-11', '2025-12'].includes(row.period);
            const formatted = typeof val === 'number' ? val.toFixed(1) : val;
            return <span className={isTargetPeriod ? "text-green-600" : ""}>{formatted}</span>;
          }
        },
        { 
          key: 'communication', 
          title: '通讯器材', 
          align: 'right',
          render: (val: any) => {
            const formatted = typeof val === 'number' ? val.toFixed(1) : val;
            return <span className="text-red-500">{formatted}</span>;
          }
        },
      ],
    },
    {
      key: 'group-optional',
      title: '可选类',
      children: [
        { key: 'jewelry', title: '金银珠宝', align: 'right' },
        { key: 'sportsEntertainment', title: '体育娱乐', align: 'right' },
      ],
    },
    {
      key: 'group-energy',
      title: '能源类',
      children: [
        { 
          key: 'petroleumProducts', 
          title: '石油及制品', 
          align: 'right',
          render: (val: any) => {
            const formatted = typeof val === 'number' ? val.toFixed(1) : val;
            return <span className="text-green-600">{formatted}</span>;
          }
        },
      ],
    },
  ];

  return (
    <BaseContentSlide
      title="“以旧换新”产品四季度增速回落，汽车与石油消费年底承压"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="四季度补贴退坡，体育珠宝体现居民关注" delay="200ms" variant="accent">
            <p>
              通讯器材类全年维持高增领跑大盘，四季度超20%增长，主要受益于对中高端机型的精准补贴（占总机型 72.5%）；家具、家用电器受四季度补贴退坡影响，增速持续下降。体育娱乐用品全年正增长，折射居民对健康投资与精神消费的持续热衷；金银珠宝类受金价高位运行与居民避险需求驱动，10月同比高增37.6%。
            </p>
          </BaseCard>
          <BaseCard title="石油、汽车四季度均为负增长" delay="400ms">
            <p>
              石油及制品类受油价下行与新能源替代双重挤压，全年增速为负。汽车行业前三季度增速 0.8%，但受补贴退坡和市场内卷影响，四季度转负。
            </p>
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <ChartContainer delay="600ms" className="flex-1 min-h-0">
          <BaseTable
            title="2025年全国分行业零售当月同比数据"
            subtitle="数据来源：国家统计局 | 单位：%"
            data={tableData}
            columns={columns}
            dateColumn="period"
            colorizeNumbers={false}
          />
        </ChartContainer>
      </div>
    </BaseContentSlide>
  );
};
