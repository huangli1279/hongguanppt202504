import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseBarChart } from '../base/BaseBarChart';
import { industrialCategoryCumulativeData } from '../../data/industrialOutput';
import { seriesColors } from '../../utils/chartColors';

const majorIndustrySepData = [
  { name: '计算机通信电子', value: 16.4, fill: '#dc2626' },
  { name: '专用设备制造', value: 12.1, fill: '#dc2626' },
  { name: '铁路航空航天', value: 11.7, fill: '#dc2626' },
  { name: '高技术制造业', value: 16.2, fill: '#dc2626' },
  { name: '汽车制造业', value: 6.7, fill: '#dc2626' },
  { name: '电力热力燃气水', value: 5.4, fill: '#dc2626' },
  { name: '非金属矿物制品', value: -5.3, fill: '#16a34a' },
];

export const ContentSlide09: React.FC = () => {
  return (
    <BaseContentSlide
      title="规上工业增加值维持高增，新旧动能增速差开始收敛"
      cardColumns={3}
      chartColumns={2}
      cards={
        <>
          <BaseCard title="工业增加值及分项" delay="0ms" variant="accent">
            <p>
              前三季度工业增加值累计同比 <span className="font-bold text-red-600">+5.3%</span>，制造业同比 <span className="font-bold text-red-600">+5.7%</span>，采矿业 <span className="font-bold text-green-600">+2.0%</span>，电力、热力、燃气及水生产供应业 <span className="font-bold text-red-600">+5.4%</span>。三季度采矿业拖累总体，主要受煤炭开采监管加强和复产进度不及预期影响（7月煤炭开采和洗选业同比 <span className="text-green-600 font-bold">-10.8%</span>，8月 <span className="text-green-600 font-bold">-5.6%</span>，9月 <span className="text-green-600 font-bold">-3.3%</span>）。产能利用率三季度为 <span className="font-bold">73.1%</span>，在一二季度连续下行后边际企稳（环比 <span className="font-bold">+0.1pct</span>），但同比仍低 <span className="text-green-600 font-bold">1.5pct</span>。
            </p>
          </BaseCard>

          <BaseCard title="新动能仍是主引擎" delay="120ms">
            <p>
              前三季度高技术制造业增加值 <span className="font-bold text-red-600">+14.3%</span>（Q3为 <span className="font-bold text-red-600">16.2%</span>）；9月计算机通信电子行业 <span className="font-bold text-red-600">+16.4%</span>，对全部规上工业增长贡献率连续居各大类行业首位，9月专用设备制造业 <span className="font-bold text-red-600">12.1%</span>，铁路航空航天设备制造 <span className="font-bold text-red-600">11.7%</span>，均保持高增长。新旧动能增速差开始收敛。
            </p>
          </BaseCard>

          <BaseCard title="汽车是明显拖累" delay="240ms">
            <p>
              9月汽车产量 <span className="text-green-600 font-bold">-5.7%</span>、产能利用率仅 <span className="text-green-600 font-bold">66.2%</span>，同比下降 <span className="text-green-600 font-bold">7%</span>。增加值增速由8月的 <span>8.7%</span> 回落至 <span className="text-green-600 font-bold">6.7%</span>；发电量9月 <span className="text-green-600 font-bold">-1.2%</span>，传统内需行业承压。
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
              xAxisTicks={['2024-03', '2024-06', '2024-09', '2024-12', '2025-03', '2025-06', '2025-09', '2025-12', '2026-03', '2026-06', '2026-09']}
            />
          </ChartContainer>

          <ChartContainer delay="660ms">
            <BaseBarChart
              data={majorIndustrySepData}
              title="主要行业9月增加值同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              bars={[{ dataKey: 'value', name: '9月同比' }]}
              xAxisKey="value"
              layout="horizontal"
              yAxisDomain={[-8, 20]}
              showYAxis={true}
              yAxisWidth={110}
              yAxisTickFormatter={(val) => `${val}%`}
              showReferenceLine={true}
              referenceLineY={0}
              showLegend={false}
              showLabels={true}
              labelFormatter={(val: any) => `${Number(val) > 0 ? '+' : ''}${Number(val).toFixed(1)}%`}
              unit="%"
              barSize={14}
              xAxisTickFontSize={10}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
