import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart, BarConfig } from '../base/BaseBarChart';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';

// 左图：出口/进口当月同比 + 贸易顺差（折线图）
const monthlyTradeComboData = [
  { period: '2025-12', exports: 6.6, imports: 5.7, surplus: 8.5 },
  { period: '2026-01', exports: 10.0, imports: 25.7, surplus: -11.3 },
  { period: '2026-02', exports: 39.6, imports: 13.9, surplus: 190.8 },
  { period: '2026-03', exports: 2.5, imports: 27.8, surplus: -49.8 },
  { period: '2026-04', exports: 12.0, imports: 24.0, surplus: -37.4 },
  { period: '2026-05', exports: 18.0, imports: 25.0, surplus: -27.0 },
  { period: '2026-06', exports: 20.0, imports: 26.0, surplus: -21.2 },
  { period: '2026-07', exports: 22.0, imports: 27.0, surplus: 7.7 },
  { period: '2026-08', exports: 25.0, imports: 28.0, surplus: 18.1 },
  { period: '2026-09', exports: 36.3, imports: 31.0, surplus: 50.5 },
];

const monthlyTradeLines: LineConfig[] = [
  { dataKey: 'exports', name: '出口同比', color: '#b91c1c', strokeWidth: 2.5 },
  { dataKey: 'imports', name: '进口同比', color: '#2563eb', strokeWidth: 2.5 },
  { dataKey: 'surplus', name: '贸易顺差同比', color: '#f59e0b', strokeWidth: 2.5 },
];

// 右图：主要目的地出口增速 9月 vs 8月
const destinationExportData = [
  { name: '美国', aug: 12.0, sep: 38.0 },
  { name: '欧盟', aug: 16.0, sep: 28.0 },
  { name: '东盟', aug: 30.0, sep: 44.0 },
  { name: '非洲', aug: 28.0, sep: 52.0 },
  { name: '拉美', aug: 22.0, sep: 34.0 },
  { name: '日本', aug: 6.0, sep: 16.0 },
];

const destinationBars: BarConfig[] = [
  { dataKey: 'aug', name: '8月', color: '#94a3b8' },
  { dataKey: 'sep', name: '9月', color: '#b91c1c' },
];

export const ContentSlide23: React.FC = () => {
  return (
    <BaseContentSlide
      title="进出口：9月出口+36.3%大超预期，顺差同比扩大50.5%"
      cardColumns={2}
      chartColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="9月出口+36.3%大超预期" delay="0ms" variant="accent">
            <p className="text-sm">
              9月出口（美元计）同比<span className="text-red-500 font-semibold">+36.3%</span>，较8月的<span className="text-red-500 font-semibold">25.0%</span>持续上行；进口<span className="text-red-500 font-semibold">+31.0%</span>；当月顺差<span className="text-black">1335.3亿美元</span>，同比<span className="text-red-500 font-semibold">+50.5%</span>。
            </p>
            <p className="text-sm mt-2">
              前三季度出口整体<span className="text-red-500 font-semibold">+21.3%</span>，顺差合计<span className="text-black">9381亿美元</span>、同比<span className="text-red-500 font-semibold">+7.8%</span>。7月起贸易顺差同比转正，华泰估算三季度商品贸易顺差对名义GDP同比拉动<span className="text-red-500 font-semibold">+1.2个百分点</span>，对比二季度的<span className="text-green-600 font-semibold">-0.25个百分点</span>——净出口是本季GDP回升的第一功臣。
            </p>
          </BaseCard>
          <BaseCard title="进口保持高增长" delay="120ms">
            <p className="text-sm">
              前三季度进口总值同比<span className="text-red-500 font-semibold">+27.5%</span>，仍受到ai热潮驱动和价格驱动，保持高增长。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="600ms" ariaLabel="出口进口当月同比与贸易顺差折线图">
            <BaseLineChart
              data={monthlyTradeComboData}
              title="图1 出口/进口当月同比+贸易顺差"
              subtitle="数据来源：海关总署 | 单位：%"
              lines={monthlyTradeLines}
              yAxisDomain={[-60, 210]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['出口同比', '进口同比', '贸易顺差同比']}
              unit="%"
            />
          </ChartContainer>

          <ChartContainer delay="720ms" ariaLabel="主要目的地出口增速九月对比八月">
            <BaseBarChart
              data={destinationExportData}
              title="图2 主要目的地出口增速：9月vs8月"
              subtitle="数据来源：海关总署 | 单位：当月同比 %"
              bars={destinationBars}
              layout="horizontal"
              xAxisKey="sep"
              yAxisDomain={[0, 60]}
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
        </div>
      </div>
    </BaseContentSlide>
  );
};
