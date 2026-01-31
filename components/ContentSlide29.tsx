import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';
import { importProductTrendData } from '@/data/importProducts';

export const ContentSlide29: React.FC = () => {
  // 表格列配置
  const columns: ColumnConfig[] = [
    { key: 'period', title: '时间', align: 'center' },
    { key: 'semiconductorEquipment', title: '半导体制造设备', align: 'center' },
    { key: 'integratedCircuit', title: '集成电路(IC)', align: 'center' },
    { key: 'oilAndGas', title: '原油及天然气', align: 'center' },
    { key: 'cosmetics', title: '化妆品及洗护用品', align: 'center' },
    { key: 'ironOre', title: '铁矿砂及其精矿', align: 'center' },
  ];

  return (
    <BaseContentSlide
      title={<>进口端结构性分化——硬科技补库但传统内需疲软</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-4 flex-shrink-0">
          <BaseCard title="集成电路（IC）" delay="200ms" variant="accent">
            <p>
              12月进口同比回升至<span className="text-red-500 font-semibold"> 12.6%</span>。受 AI 服务器及终端换机潮驱动，高端存储芯片补库显著。半导体设备全年维持增长，12月增长<span className="text-red-500 font-semibold">22.4%</span>，反映国内芯片厂在自主可控背景下的战略扩张。
            </p>
          </BaseCard>
          <BaseCard title="铁矿砂及其精矿" delay="400ms">
            <p>
              12月进口同比录得<span className="text-green-600 font-semibold"> -3.5%</span>。主要受国内地产开工端持续低迷影响，上游采购意愿降至冰点。
            </p>
          </BaseCard>
        </div>

        {/* 表格区域 */}
        <div className="flex-1 min-h-0">
          <ChartContainer delay="600ms">
            <BaseTable
              data={importProductTrendData}
              columns={columns}
              title="主要进口产品同比走势"
              subtitle="数据来源：海关总署 | 单位：%"
              rowHeight="auto"
              striped={true}
              colorizeNumbers={true}
              dateColumn="period"
              highlightRows={[11]}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
