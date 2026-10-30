import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart, BarConfig } from '../base/BaseBarChart';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';

// 主要地区出口增速：9月 vs 8月
const regionExportData = [
  { name: '东盟', aug: 30.2, sep: 52.3 },
  { name: '韩国', aug: 49.3, sep: 68.2 },
  { name: '台湾', aug: 43.8, sep: 68.9 },
  { name: '俄罗斯', aug: 38.9, sep: 51.3 },
  { name: '拉美', aug: 17.7, sep: 24.9 },
];

const regionExportBars: BarConfig[] = [
  { dataKey: 'aug', name: '8月', color: '#94a3b8' },
  { dataKey: 'sep', name: '9月', color: '#b91c1c' },
];

// 7—9月三地月度出口增速
const threeRegionMonthlyData = [
  { period: '2026-07', asean: 30.4, korea: 46.9, taiwan: null },
  { period: '2026-08', asean: 30.2, korea: 49.3, taiwan: null },
  { period: '2026-09', asean: 52.3, korea: 68.2, taiwan: 68.9 },
];

const threeRegionLineConfigs: LineConfig[] = [
  { dataKey: 'asean', name: '东盟', color: '#b91c1c', strokeWidth: 2.5 },
  { dataKey: 'korea', name: '韩国', color: '#2563eb', strokeWidth: 2.5 },
  { dataKey: 'taiwan', name: '台湾', color: '#f59e0b', strokeWidth: 2.5 },
];

export const ContentSlide26: React.FC = () => {
  return (
    <BaseContentSlide
      title="出口地区结构：AI链区域内分工加速，新兴市场同步回升"
      cardColumns={3}
      chartColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-3 mb-4 flex-shrink-0">
          <BaseCard title="AI链区域内分工加速" delay="0ms" variant="accent">
            <p className="text-sm leading-snug">
              9月对东盟<span className="text-red-500 font-semibold">+52.3%</span>（较8月+22.1pct）、对韩国<span className="text-red-500 font-semibold">+68.2%</span>（+18.9pct）、对台湾<span className="text-red-500 font-semibold">+68.9%</span>（+25.1pct），三地增速均创年内新高；集成电路<span className="text-red-500 font-semibold">+136.0%</span>、自动数据处理设备<span className="text-red-500 font-semibold">+92.9%</span>直接对应这三条航线——AI产业链的区域内分工（存储-封装-组装）在加速，低基数也有贡献（去年9月对东盟出口增速较前值低7pct左右）。
            </p>
          </BaseCard>
          <BaseCard title="新兴市场同步回升" delay="120ms">
            <p className="text-sm leading-snug">
              俄罗斯<span className="text-red-500 font-semibold">+51.3%</span>（+12.4pct）、拉美<span className="text-red-500 font-semibold">+24.9%</span>（+7.2pct）同步回升。
            </p>
          </BaseCard>
          <BaseCard title="7—9月三地增速逐月抬升" delay="240ms">
            <p className="text-sm leading-snug">
              东盟：<span className="text-red-500 font-semibold">30.4%→52.3%</span>，韩国：<span className="text-red-500 font-semibold">46.9%→68.2%</span>，台湾未披露7/8月读数；AI链景气在加速段。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="600ms" ariaLabel="主要地区出口增速九月对比八月">
            <BaseBarChart
              data={regionExportData}
              title="图1 主要地区出口增速：9月vs8月"
              subtitle="数据来源：海关总署 | 单位：当月同比 %"
              bars={regionExportBars}
              layout="horizontal"
              xAxisKey="sep"
              yAxisDomain={[0, 80]}
              showYAxis={true}
              yAxisWidth={60}
              yAxisTickFormatter={(val) => `${val}%`}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['8月', '9月']}
              barSize={10}
              showLabels={true}
            />
          </ChartContainer>

          <ChartContainer delay="720ms" ariaLabel="七至九月三地出口增速走势">
            <BaseLineChart
              data={threeRegionMonthlyData}
              title="图2 7—9月三地月度出口增速"
              subtitle="数据来源：海关总署 | 单位：%"
              lines={threeRegionLineConfigs}
              yAxisDomain={[20, 80]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['东盟', '韩国', '台湾']}
              xAxisTicks={['2026-07', '2026-08', '2026-09']}
              xAxisAngle={0}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
