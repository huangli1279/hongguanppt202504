import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseTable, ColumnConfig } from './BaseTable';
import { BaseBarChart, BarConfig } from './BaseBarChart';
import { exportRegionTrendData, exportCompositionData } from '@/data/exportRegion';

export const ContentSlide29: React.FC = () => {
  // 表格列配置
  const columns: ColumnConfig[] = [
    { key: 'period', title: '月份', align: 'center' },
    { key: 'totalExport', title: '出口总值', align: 'right' },
    { key: 'toUS', title: '美国', align: 'right' },
    { key: 'toASEAN', title: '东盟', align: 'right' },
    { key: 'toAfrica', title: '非洲', align: 'right' },
    { key: 'toEU', title: '欧盟', align: 'right' },
    { key: 'toLatinAmerica', title: '拉美', align: 'right' },
  ];

  // 柱状图配置
  const bars: BarConfig[] = [
    { dataKey: 'y2024', name: '2024年'},
    { dataKey: 'y2025', name: '2025年'},
  ];

  return (
    <BaseContentSlide
      title={<>12月对美出口降幅扩大至30%，非美市场表现依旧强劲</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="关税与高基数双重承压，对美出口显著下滑" delay="200ms" variant="accent">
            <p>
              25年受前期关税政策滞后及高基数影响，对美出口当月同比持续下跌，12月降至<span className="text-green-600 font-semibold"> 30.0%</span>，拖累当月整体出口约<span className="text-green-600 font-semibold"> 4.4%</span>。全年对美出口同比<span className="text-green-600 font-semibold"> -20.0%</span>，全年占比由 14.7% 降至 <span className="text-green-600 font-semibold">11.1%</span>，下降 3.6%。
            </p>
          </BaseCard>
          <BaseCard title="非美市场表现强劲，“一带一路”出口占比过半" delay="400ms">
            <p>
              25年对非美区域出口整体增长<span className="text-red-500 font-semibold"> 10%</span>，其中东盟增长<span className="text-red-500 font-semibold"> 13.4%</span>，非洲高增<span className="text-red-500 font-semibold"> 25.8%</span>。共建“一带一路”国家全年累计增速<span className="text-red-500 font-semibold"> 10.6%</span>，出口总值占比达<span className="text-red-500 font-semibold"> 50.7%</span>。新兴市场工业化进程提速，对我国中间品（集成电路、零部件等）和生产资料需求旺盛。产业链将中间品出口到“跳板国”，进行简单组装再转出口到欧美，以此规避关税壁垒，对冲欧美市场波动。
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
              title="2025年出口区域当月同比走势"
              subtitle="数据来源：海关总署 | 单位：%"
              striped={true}
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
