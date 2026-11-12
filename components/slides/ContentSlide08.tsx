import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart } from '../base/BaseLineChart';
import { industrialCategoryCumulativeData } from '../../data/industrialOutput';
import { seriesColors } from '../../utils/chartColors';

// 数据来源：国家统计局（工业产能利用率当季值，%）
const capacityUtilizationData = [
  { period: '2023-03', auto: 72.0, manufacturing: 74.5, industrial: 74.3, mining: 75.2, utilities: 71.9, electronics: 73.7, specialEquipment: 77.0, electrical: 75.8 },
  { period: '2023-06', auto: 73.3, manufacturing: 74.8, industrial: 74.5, mining: 74.8, utilities: 71.4, electronics: 74.6, specialEquipment: 78.1, electrical: 77.1 },
  { period: '2023-09', auto: 75.6, manufacturing: 75.8, industrial: 75.6, mining: 75.4, utilities: 74.2, electronics: 76.5, specialEquipment: 77.5, electrical: 77.8 },
  { period: '2023-12', auto: 76.9, manufacturing: 76.0, industrial: 75.9, mining: 77.07, utilities: 74.37, electronics: 77.63, specialEquipment: 77.52, electrical: 77.12 },
  { period: '2024-03', auto: 64.87, manufacturing: 73.76, industrial: 73.6, mining: 75.01, utilities: 71.17, electronics: 74.72, specialEquipment: 77.01, electrical: 72.74 },
  { period: '2024-06', auto: 73.0, manufacturing: 75.2, industrial: 74.9, mining: 76.0, utilities: 71.4, electronics: 76.2, specialEquipment: 76.5, electrical: 74.7 },
  { period: '2024-09', auto: 73.2, manufacturing: 75.2, industrial: 75.1, mining: 74.6, utilities: 74.3, electronics: 77.9, specialEquipment: 75.8, electrical: 75.6 },
  { period: '2024-12', auto: 77.2, manufacturing: 76.4, industrial: 76.2, mining: 75.6, utilities: 74.8, electronics: 79.4, specialEquipment: 76.7, electrical: 76.8 },
  { period: '2025-03', auto: 71.9, manufacturing: 74.08, industrial: 74.06, mining: 74.62, utilities: 73.61, electronics: 74.74, specialEquipment: 75.55, electrical: 71.68 },
  { period: '2025-06', auto: 71.3, manufacturing: 74.3, industrial: 74.0, mining: 72.7, utilities: 71.5, electronics: 77.3, specialEquipment: 76.5, electrical: 73.5 },
  { period: '2025-09', auto: 73.3, manufacturing: 74.8, industrial: 74.6, mining: 72.5, utilities: 74.3, electronics: 79.0, specialEquipment: 75.5, electrical: 74.9 },
  { period: '2025-12', auto: 75.98, manufacturing: 75.17, industrial: 74.92, mining: 71.65, utilities: 74.02, electronics: 79.73, specialEquipment: 76.43, electrical: 74.98 },
  { period: '2026-03', auto: 70.29, manufacturing: 73.86, industrial: 73.6, mining: 72.14, utilities: 71.92, electronics: 75.44, specialEquipment: 76.62, electrical: 71.61 },
  { period: '2026-06', auto: 70.8, manufacturing: 73.48, industrial: 73.0, mining: 69.15, utilities: 70.41, electronics: 78.7, specialEquipment: 76.7, electrical: 70.3 },
  { period: '2026-09', auto: 66.23, manufacturing: 73.29, industrial: 73.06, mining: 69.48, utilities: 72.57, electronics: 80.25, specialEquipment: 77.75, electrical: 72.93 },
];

export const ContentSlide08: React.FC = () => {
  return (
    <BaseContentSlide
      title="三季度工业产量和产能利用率同步增长，新旧动能分化持续"
      cardColumns={3}
      chartColumns={3}
      cards={
        <>
          <BaseCard title="工业增长稳定，采矿业受停产拖累" delay="0ms" variant="accent">
            <p>
              前三季度工业增加值累计同比 +5.3%，制造业同比 +5.7%，采矿业 +2.0%，电力、热力、燃气及水生产供应业 +5.4%。三季度采矿业拖累总体，主要受煤炭开采监管加强和复产进度不及预期影响（7月煤炭开采和洗选业同比 <span className="text-green-600 font-bold">-10.8%</span>，8月 -5.6%，9月 -3.3%）。
            </p>
          </BaseCard>

          <BaseCard title="三季度产能利用率仍偏低但企稳" delay="120ms">
            <p>
              三季度工业产能利用率为 73.1%，在一二季度连续下行后边际企稳（环比 +0.1pct），但同比仍低 1.5pct。电热燃气水生产供应业环比上升2.2%到达72.57%，采矿业仍处于低位。
            </p>
          </BaseCard>

          <BaseCard title="新动能增长迅猛，汽车成为明显拖累" delay="240ms">
            <p>
              高技术制造业增加值 Q3 单季同比 <span className="text-red-600 font-bold">+16.2%</span>（Q1/Q2/Q3分别为 12.5%/14.0%/16.2%，逐季抬升）；电子行业同比 <span className="text-red-600 font-bold">+17.5%</span>，计算机通信产能利用率达 <span className="text-red-600 font-bold">80.3%</span>，专用设备制造业工业增加值 +12.0%，较 Q2 加快 3.5pct，产能利用率 77.8%；铁路船舶航空航天设备制造业 +12.8%。汽车产能利用率下降至 <span className="text-green-600 font-bold">66.2%</span>，同比下降 <span className="text-green-600 font-bold">7%</span>。增加值增速由8月的 8.7% 回落至9月 6.7%，但9月产量同比 <span className="text-green-600 font-bold">-5.7%</span>。
            </p>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={industrialCategoryCumulativeData}
              title="规上工业分行业增加值累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'industrial', name: '全部', color: seriesColors[0], strokeWidth: 2.5, pointOffsets: { '2026-09': -22 } },
                { dataKey: 'manufacturing', name: '制造业', color: seriesColors[1], strokeWidth: 2, pointOffsets: { '2026-09': -5 } },
                { dataKey: 'mining', name: '采矿业', color: seriesColors[2], strokeWidth: 2, pointOffsets: { '2026-09': 28 } },
                { dataKey: 'utilities', name: '电力热力燃气水', color: seriesColors[3], strokeWidth: 1.8, pointOffsets: { '2026-09': -38 } },
              ]}
              yAxisDomain={[0, 8]}
              showYAxis={true}
              legendOrder={['全部', '制造业', '采矿业', '电力热力燃气水']}
              highlightPeriods={['2026-09']}
              xAxisTicks={['2024-06', '2024-12', '2025-06', '2025-12', '2026-09']}
              xAxisAngle={0}
            />
          </ChartContainer>

          <ChartContainer delay="660ms">
            <BaseLineChart
              data={capacityUtilizationData}
              title="工业产能利用率"
              subtitle="分行业当季值 | 数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'industrial', name: '全部工业', color: seriesColors[0], strokeWidth: 2, pointOffsets: { '2026-09': 2 } },
                { dataKey: 'manufacturing', name: '制造业', color: seriesColors[1], strokeWidth: 2.5, pointOffsets: { '2026-09': -16 } },
                { dataKey: 'mining', name: '采矿业', color: seriesColors[2], strokeWidth: 2, pointOffsets: { '2026-09': 4 } },
                { dataKey: 'utilities', name: '电力热力燃气水', color: seriesColors[3], strokeWidth: 2, pointOffsets: { '2026-09': 16 } },
              ]}
              yAxisDomain={[60, 80]}
              showYAxis={true}
              legendOrder={['全部工业', '制造业', '采矿业', '电力热力燃气水']}
              highlightPeriods={['2026-09']}
              xAxisTicks={['2023-03', '2024-06', '2025-09', '2026-09']}
              xAxisAngle={0}
            />
          </ChartContainer>

          <ChartContainer delay="720ms">
            <BaseLineChart
              data={capacityUtilizationData}
              title="工业产能利用率分行业"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={[
                { dataKey: 'auto', name: '汽车', color: seriesColors[0], strokeWidth: 2.5 },
                { dataKey: 'electronics', name: '计算机通信电子', color: seriesColors[1], strokeWidth: 2 },
                { dataKey: 'specialEquipment', name: '专用设备', color: seriesColors[2], strokeWidth: 2 },
                { dataKey: 'electrical', name: '电气机械', color: seriesColors[3], strokeWidth: 2 },
              ]}
              yAxisDomain={[64, 84]}
              showYAxis={true}
              legendOrder={['汽车', '计算机通信电子', '专用设备', '电气机械']}
              highlightPeriods={['2026-09']}
              xAxisTicks={['2023-03', '2024-06', '2025-09', '2026-09']}
              xAxisAngle={0}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
