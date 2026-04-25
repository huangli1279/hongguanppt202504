import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseLineChart, LineConfig } from './BaseLineChart';
import { BaseTable, ColumnConfig } from './BaseTable';
import { equipmentInvestmentData, manufacturingInvestmentData } from '@/data/equipmentInvestment';

export const ContentSlide23: React.FC = () => {
  const twoLineHeader = (top: string, bottom?: string) => (
    <span className="leading-tight">
      {top}
      {bottom && (
        <>
          <br />
          {bottom}
        </>
      )}
    </span>
  );

  // 折线图配置
  const lineConfigs: LineConfig[] = [
    { dataKey: 'manufacturing', name: '制造业', strokeWidth: 2.5 },
    { dataKey: 'equipmentPurchase', name: '设备工器具购置', strokeWidth: 2.5 },
    { dataKey: 'constructionInstall', name: '建筑安装工程', strokeWidth: 2.5 },
  ];

  // 表格列配置
  const columns: ColumnConfig[] = [
    { key: 'period', title: '月份', align: 'center' },
    { key: 'autoManufacturing', title: twoLineHeader('汽车', '制造'), align: 'right' },
    { key: 'chemicals', title: twoLineHeader('化学', '原料'), align: 'right' },
    { key: 'highTechManufacturing', title: twoLineHeader('高技术', '制造'), align: 'right' },
    { key: 'computerOffice', title: twoLineHeader('计算机', '办公'), align: 'right' },
    { key: 'railwayShipAerospace', title: twoLineHeader('铁路船舶', '航空航天'), align: 'right' },
    { key: 'nonferrousMetal', title: twoLineHeader('有色金属', '冶炼'), align: 'right' },
    { key: 'generalEquipment', title: twoLineHeader('通用设备', '制造'), align: 'right' },
    { key: 'specialEquipment', title: twoLineHeader('专用设备', '制造'), align: 'right' },
    { key: 'electricalMachinery', title: twoLineHeader('电气机械', '器材'), align: 'right' },
    { key: 'pharmaceutical', title: twoLineHeader('医药', '制造'), align: 'right' },
  ];

  return (
    <BaseContentSlide
      title={<>制造业投资提速至4.1%，“两新”激发新动能与“反内卷”重塑产能格局</>}
      cardColumns={3}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="出口与政策共同托底" delay="200ms" variant="accent">
            <p>
              一季度制造业投资同比增长<span className="text-red-500 font-semibold">4.1%</span>，较1-2月加快1.0pct。出口超预期与前期稳增长政策显效，共同推动投资回暖。
            </p>
          </BaseCard>
          <BaseCard title="设备更新保持高增" delay="400ms">
            <p>
              “大规模设备更新”等“两新”政策优化实施、资金接续发力，设备工器具购置投资同比增长<span className="text-red-500 font-semibold">13.9%</span>，继续维持两位数增长。
            </p>
          </BaseCard>
          <BaseCard title="新旧动能分化加剧" delay="600ms">
            <p>
              高技术制造业投资同比增长<span className="text-red-500 font-semibold">5.2%</span>，计算机及办公设备增长<span className="text-red-500 font-semibold">28.3%</span>；传统行业在“反内卷”约束下扩产意愿偏弱。
            </p>
          </BaseCard>
        </div>

        {/* 图表和表格区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="800ms">
            <BaseLineChart
              data={equipmentInvestmentData}
              title="制造业|设备|建筑安装工程投资增速累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={lineConfigs}
              yAxisDomain={[-15, 25]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['制造业', '设备工器具购置', '建筑安装工程']}
            />
          </ChartContainer>
          <ChartContainer delay="1000ms">
            <BaseTable
              data={manufacturingInvestmentData}
              columns={columns}
              title="制造业细分行业投资增速累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              dateColumn="period"
              cellClassName="px-1 text-[8.5px]"
              headerCellClassName="px-0.5 py-1 text-[8.5px]"
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
