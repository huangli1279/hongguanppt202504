import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';
import { BaseBarChart, BarConfig } from './BaseBarChart';
import { exportRegionTrendData, exportCompositionData } from '@/data/exportRegion';
import { chartColors } from '@/utils/chartColors';

export const ContentSlide30: React.FC = () => {
  // 表格列配置
  const columns: ColumnConfig[] = [
    { key: 'period', title: '月份', align: 'center' },
    { key: 'totalExport', title: '出口总值', align: 'center' },
    { key: 'toUS', title: '对美', align: 'center' },
    { key: 'toASEAN', title: '对东盟', align: 'center' },
    { key: 'toAfrica', title: '对非洲', align: 'center' },
    { key: 'toEU', title: '对欧盟', align: 'center' },
    { key: 'toLatinAmerica', title: '对拉美', align: 'center' },
  ];

  // 柱状图配置
  const bars: BarConfig[] = [
    { dataKey: 'y2024', name: '2024年', color: chartColors.secondary },
    { dataKey: 'y2025', name: '2025年', color: chartColors.primary },
  ];

  return (
    <BaseContentSlide
      title={<>对美出口降幅扩大至30%，非美市场表现依旧强劲</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="对美出口深跌，非美区域整体增长" delay="200ms" variant="accent">
            <p>
              25年全年对美出口同比持续下跌，12月对美出口同比下降<span className="text-green-600 font-semibold"> 30.0%</span>。受前期关税政策滞后及高基数影响，拖累整体出口约 4.4 个百分点；对非美区域整体增长<span className="text-red-500 font-semibold"> 12.8%</span>。其中东盟增长<span className="text-red-500 font-semibold"> 11.1%</span>，非洲高增<span className="text-red-500 font-semibold"> 21.8%</span>。
            </p>
          </BaseCard>
          <BaseCard title="中间品需求" delay="400ms">
            <p>
              新兴市场工业化进程提速，对我国中间品和生产资料需求旺盛，有效对冲美欧市场波动。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-6">
          {/* 表格 */}
          <ChartContainer delay="600ms">
            <BaseTable
              data={exportRegionTrendData}
              columns={columns}
              title="出口区域同比走势"
              subtitle="数据来源：海关总署 | 单位：%"
              rowHeight="auto"
              striped={true}
              colorizeNumbers={true}
              dateColumn="period"
              highlightRows={[11]}
            />
          </ChartContainer>

          {/* 柱状图 */}
          <ChartContainer delay="800ms">
            <BaseBarChart
              data={exportCompositionData}
              title="出口构成"
              subtitle="数据来源：海关总署 | 单位：%"
              bars={bars}
              xAxisKey="region"
              yAxisDomain={[0, 20]}
              showYAxis={false}
              legendOrder={['2024年', '2025年']}
              barSize={24}
              showLabels={true}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
