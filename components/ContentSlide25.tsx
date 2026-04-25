import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseLineChart, LineConfig } from './BaseLineChart';
import { BaseTable, ColumnConfig } from './BaseTable';
import { equipmentInvestmentData, manufacturingInvestmentData } from '@/data/equipmentInvestment';

export const ContentSlide25: React.FC = () => {
  // 折线图配置
  const lineConfigs: LineConfig[] = [
    { dataKey: 'equipmentPurchase', name: '设备工器具购置', strokeWidth: 2.5 },
    { dataKey: 'constructionInstall', name: '建筑安装工程', strokeWidth: 2.5 },
  ];

  // 表格列配置
  const columns: ColumnConfig[] = [
    { key: 'period', title: '月份', align: 'center' },
    { key: 'generalEquipment', title: '通用设备', align: 'right' },
    { key: 'specialEquipment', title: '专用设备', align: 'right' },
    { key: 'electricalMachinery', title: '电气机械', align: 'right' },
    { key: 'electronicEquipment', title: '电子设备', align: 'right' },
    { key: 'autoManufacturing', title: '汽车制造', align: 'right' },
    { key: 'railwayAerospace', title: '铁路航天', align: 'right' },
    { key: 'metalRepair', title: '金属机械修理', align: 'right' },
  ];

  return (
    <BaseContentSlide
      title={<>设备购置投资高增11.8%，企业"反内卷"导致产能扩张意愿降温</>}
      cardColumns={3}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="存量更新驱动" delay="200ms" variant="accent">
            <p>
              全年设备工器具购置投资增长<span className="text-green-600 font-semibold">11.8%</span>，拉动全部投资增长1.8pct。在"两新"政策引导下，制造业投资主要由存量设备技改驱动，而非新建产能。
            </p>
          </BaseCard>
          <BaseCard title="扩厂意愿收缩" delay="400ms">
            <p>
              建筑安装工程投资（代表厂房扩建）全年下降<span className="text-red-500 font-semibold">8.4%</span>，与设备高增形成鲜明对比。企业在"反内卷"政策下，对单纯扩大产能的资本开支变得极为谨慎。
            </p>
          </BaseCard>
          <BaseCard title="高技术引领，传统承压" delay="600ms">
            <p>
              航空航天投资<span className="text-green-600 font-semibold">+17.5%</span>领跑，新质生产力相关领域资金流入加速。电气机械投资<span className="text-red-500 font-semibold">-10.3%</span>显著负增长，行业进入深度去产能周期。
            </p>
          </BaseCard>
        </div>

        {/* 图表和表格区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="800ms">
            <BaseLineChart
              data={equipmentInvestmentData}
              title="设备投资与建筑工程投资增速对比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={lineConfigs}
              yAxisDomain={[-15, 25]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['设备工器具购置', '建筑安装工程']}
            />
          </ChartContainer>
          <ChartContainer delay="1000ms">
            <BaseTable
              data={manufacturingInvestmentData}
              columns={columns}
              title="2025年制造业分行业投资累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              dateColumn="period"
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
