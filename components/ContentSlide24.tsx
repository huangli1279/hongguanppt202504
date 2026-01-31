import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';
import { infrastructureInvestmentData } from '@/data/infrastructureInvestment';

export const ContentSlide24: React.FC = () => {
  // 表格列配置
  const columns: ColumnConfig[] = [
    { key: 'period', title: '日期', align: 'center' },
    { key: 'electricityGasWater', title: '电热气水', align: 'center' },
    { key: 'transportation', title: '交通仓储', align: 'center' },
    { key: 'infoTech', title: '信息技术', align: 'center' },
    { key: 'waterEnvironment', title: '水利环境', align: 'center' },
    { key: 'ferrousMetal', title: '黑色金属', align: 'center' },
    { key: 'nonFerrousMetal', title: '有色金属', align: 'center' },
    { key: 'nonMetalMineral', title: '非金属矿', align: 'center' },
    { key: 'generalEquipment', title: '通用设备', align: 'center' },
    { key: 'electricalMachinery', title: '电气机械', align: 'center' },
  ];

  return (
    <BaseContentSlide
      title="基建投资全年下降1.48%，债务化解与项目断档导致实物工作量落地受阻"
      cardColumns={3}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-4 mb-4 flex-shrink-0">
          <BaseCard title="化债约束与挤出效应" delay="200ms" variant="accent">
            <p>
              受地方政府化债提速影响，财政资金优先用于偿还存量债务，对新增投资形成明显"挤出"。12月单月基建投资估算同比下降约<span className="text-red-500 font-semibold">12.2%-16%</span>，资金到位率偏低制约施工进度。
            </p>
          </BaseCard>
          <BaseCard title="结构分化：能源托底" delay="400ms">
            <p>
              电热气水投资全年增长<span className="text-green-600 font-semibold">9.1%</span>，受益于能源保供与绿色转型强力支持。相比之下，水利环境公用设施投资全年下降<span className="text-red-500 font-semibold">8.4%</span>，12月单月更是深跌<span className="text-red-500 font-semibold">26.6%</span>，成为主要拖累。
            </p>
          </BaseCard>
          <BaseCard title="政策时滞" delay="600ms">
            <p>
              尽管10月投放了5000亿新型政策性金融工具，但受北方冬季施工受限及项目前期准备周期影响，四季度实物工作量尚未充分释放，政策效果存在滞后性。
            </p>
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <ChartContainer delay="800ms" className="flex-1 min-h-0">
          <BaseTable
            data={infrastructureInvestmentData}
            columns={columns}
            title="2025年固定资产投资分行业累计同比变化"
            subtitle="数据来源：国家统计局 | 单位：%"
            dateColumn="period"
            rowHeight="auto"
            stickyHeader={true}
          />
        </ChartContainer>
      </div>
    </BaseContentSlide>
  );
};
