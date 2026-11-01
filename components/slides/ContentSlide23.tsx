import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';

// 图1：出口/进口当月同比（折线图，美元计价，当月同比 %）
const monthlyTradeExportsImportsData = [
  { period: '2024-01', exports: 7.7, imports: 15.6 },
  { period: '2024-02', exports: 6.2, imports: -8.1 },
  { period: '2024-03', exports: -7.7, imports: -2.1 },
  { period: '2024-04', exports: 1.3, imports: 8.3 },
  { period: '2024-05', exports: 7.4, imports: 2.1 },
  { period: '2024-06', exports: 8.4, imports: -2.6 },
  { period: '2024-07', exports: 6.9, imports: 6.6 },
  { period: '2024-08', exports: 8.6, imports: 0.0 },
  { period: '2024-09', exports: 2.3, imports: 0.1 },
  { period: '2024-10', exports: 12.6, imports: -2.4 },
  { period: '2024-11', exports: 6.6, imports: -4.0 },
  { period: '2024-12', exports: 10.7, imports: 0.8 },
  { period: '2025-01', exports: 5.9, imports: -16.3 },
  { period: '2025-02', exports: -3.1, imports: 1.6 },
  { period: '2025-03', exports: 12.2, imports: -4.3 },
  { period: '2025-04', exports: 8.0, imports: -0.3 },
  { period: '2025-05', exports: 4.6, imports: -3.3 },
  { period: '2025-06', exports: 5.8, imports: 1.2 },
  { period: '2025-07', exports: 7.1, imports: 4.2 },
  { period: '2025-08', exports: 4.3, imports: 1.4 },
  { period: '2025-09', exports: 8.2, imports: 7.4 },
  { period: '2025-10', exports: -1.2, imports: 0.9 },
  { period: '2025-11', exports: 5.9, imports: 1.9 },
  { period: '2025-12', exports: 6.6, imports: 5.7 },
  { period: '2026-01', exports: 10.0, imports: 25.7 },
  { period: '2026-02', exports: 39.6, imports: 13.9 },
  { period: '2026-03', exports: 2.5, imports: 27.8 },
  { period: '2026-04', exports: 12.0, imports: 24.0 },
  { period: '2026-05', exports: 18.0, imports: 25.0 },
  { period: '2026-06', exports: 20.0, imports: 26.0 },
  { period: '2026-07', exports: 22.0, imports: 27.0 },
  { period: '2026-08', exports: 25.0, imports: 28.0 },
  { period: '2026-09', exports: 36.3, imports: 31.0 },
];

const monthlyTradeExportsImportsLines: LineConfig[] = [
  { dataKey: 'exports', name: '出口同比', color: '#b91c1c', strokeWidth: 2.5 },
  { dataKey: 'imports', name: '进口同比', color: '#2563eb', strokeWidth: 2.5 },
];

// 图2：贸易顺差当月同比（折线图，美元计价，当月同比 %）
const monthlyTradeSurplusData = [
  { period: '2024-01', surplus: -8.9 },
  { period: '2024-02', surplus: 241.0 },
  { period: '2024-03', surplus: -24.0 },
  { period: '2024-04', surplus: -15.5 },
  { period: '2024-05', surplus: 24.9 },
  { period: '2024-06', surplus: 42.4 },
  { period: '2024-07', surplus: 7.7 },
  { period: '2024-08', surplus: 36.2 },
  { period: '2024-09', surplus: 8.8 },
  { period: '2024-10', surplus: 71.3 },
  { period: '2024-11', surplus: 40.9 },
  { period: '2024-12', surplus: 40.7 },
  { period: '2025-01', surplus: 64.9 },
  { period: '2025-02', surplus: -23.8 },
  { period: '2025-03', surplus: 74.0 },
  { period: '2025-04', surplus: 33.4 },
  { period: '2025-05', surplus: 26.2 },
  { period: '2025-06', surplus: 15.3 },
  { period: '2025-07', surplus: 14.1 },
  { period: '2025-08', surplus: 11.0 },
  { period: '2025-09', surplus: 10.4 },
  { period: '2025-10', surplus: -6.1 },
  { period: '2025-11', surplus: 14.6 },
  { period: '2025-12', surplus: 8.5 },
  { period: '2026-01', surplus: -11.3 },
  { period: '2026-02', surplus: 190.8 },
  { period: '2026-03', surplus: -49.8 },
  { period: '2026-04', surplus: -37.4 },
  { period: '2026-05', surplus: -27.0 },
  { period: '2026-06', surplus: -21.2 },
  { period: '2026-07', surplus: 7.7 },
  { period: '2026-08', surplus: 18.1 },
  { period: '2026-09', surplus: 50.5 },
];

const monthlyTradeSurplusLines: LineConfig[] = [
  { dataKey: 'surplus', name: '贸易顺差同比', color: '#f59e0b', strokeWidth: 2.5 },
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
          <ChartContainer delay="600ms" ariaLabel="出口进口当月同比折线图">
            <BaseLineChart
              data={monthlyTradeExportsImportsData}
              title="图1 出口/进口当月同比"
              subtitle="数据来源：海关总署 | 单位：%"
              lines={monthlyTradeExportsImportsLines}
              yAxisDomain={[-10, 45]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['出口同比', '进口同比']}
              unit="%"
            />
          </ChartContainer>

          <ChartContainer delay="720ms" ariaLabel="贸易顺差当月同比折线图">
            <BaseLineChart
              data={monthlyTradeSurplusData}
              title="图2 贸易顺差当月同比"
              subtitle="数据来源：海关总署 | 单位：%"
              lines={monthlyTradeSurplusLines}
              yAxisDomain={[-60, 260]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['贸易顺差同比']}
              unit="%"
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
