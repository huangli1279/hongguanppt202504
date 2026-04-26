import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { BaseBarChart, BarConfig } from '../base/BaseBarChart';
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
    { dataKey: 'y2024', name: '25Q1'},
    { dataKey: 'y2025', name: '26Q1'},
  ];

  return (
    <BaseContentSlide
      title={<>对美出口继续下降，欧盟非洲支撑增长</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="对美出口持续下降，份额显著收缩" delay="0ms" variant="accent">
            <p>
              一季度对美出口降幅持续，因去年一季度基数影响，1月同比下降<span className="text-green-600 font-semibold"> 23.0%</span>，3月同比下降<span className="text-green-600 font-semibold"> 26.5%</span>，降幅较去年底的<span className="text-green-600 font-semibold"> -30.0%</span>虽收窄，但一季度出口份额已由去年的 13.5% 降至约<span className="text-green-600 font-semibold"> 9.9%</span>，收缩十分显著。
            </p>
          </BaseCard>
          <BaseCard title="“南方国家”工业化红利加速释放" delay="120ms">
            <p>
              一季度我国对新兴市场保持强劲出口态势。2月对非增长<span className="text-red-500 font-semibold"> 97.5%</span>、东盟<span className="text-red-500 font-semibold"> 38.8%</span>、拉美<span className="text-red-500 font-semibold"> 44.2%</span>出口维持高速增长。一季度对东盟、非洲、拉美出口的合并占比提升<span className="text-red-500 font-semibold"> 1.3%</span>，有效对冲了对美出口下降。高油价将加速海外绿色转型，进一步拉动中国新能源汽车、锂电及电力设备相关产品的出口增量空间。
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
              title="出口区域当月同比走势"
              subtitle="数据来源：海关总署 | 单位：%"
              striped={true}
              dateColumn="period"
              highlightRows={[14]}
            />
          </ChartContainer>

          {/* 柱状图 */}
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={exportCompositionData}
              title="主要国家/地区累计出口占比"
              subtitle="数据来源：海关总署 | 单位：%"
              bars={bars}
              xAxisKey="region"
              yAxisDomain={[0, 20]}
              showYAxis={false}
              legendOrder={['25Q1', '26Q1']}
              barSize={16}
              showLabels={true}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
