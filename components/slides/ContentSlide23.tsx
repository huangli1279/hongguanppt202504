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
  { period: '2025-06', exports: 5.7, imports: 1.3 },
  { period: '2025-07', exports: 7.0, imports: 4.2 },
  { period: '2025-08', exports: 4.2, imports: 1.7 },
  { period: '2025-09', exports: 8.2, imports: 8.0 },
  { period: '2025-10', exports: -1.3, imports: 1.8 },
  { period: '2025-11', exports: 5.8, imports: 2.6 },
  { period: '2025-12', exports: 6.4, imports: 6.4 },
  { period: '2026-01', exports: 10.0, imports: 26.9 },
  { period: '2026-02', exports: 39.6, imports: 14.7 },
  { period: '2026-03', exports: 2.5, imports: 28.5 },
  { period: '2026-04', exports: 13.9, imports: 25.3 },
  { period: '2026-05', exports: 19.2, imports: 27.4 },
  { period: '2026-06', exports: 26.8, imports: 35.8},
  { period: '2026-07', exports: 23.9, imports: 27.6 },
  { period: '2026-08', exports: 24.9, imports: 28.3 },
  { period: '2026-09', exports: 36.3, imports: 31.0 },
];

const monthlyTradeExportsImportsLines: LineConfig[] = [
  { dataKey: 'exports', name: '出口同比', color: '#b91c1c', strokeWidth: 2.5 },
  { dataKey: 'imports', name: '进口同比', color: '#1e3a8a', strokeWidth: 2.5 },
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
  { period: '2025-01', surplus: 64.8 },
  { period: '2025-02', surplus: -23.9 },
  { period: '2025-03', surplus: 74.0 },
  { period: '2025-04', surplus: 33.4 },
  { period: '2025-05', surplus: 26.1 },
  { period: '2025-06', surplus: 14.9 },
  { period: '2025-07', surplus: 13.9 },
  { period: '2025-08', surplus: 10.3 },
  { period: '2025-09', surplus: 8.5 },
  { period: '2025-10', surplus: -8.1 },
  { period: '2025-11', surplus: 12.9 },
  { period: '2025-12', surplus: 6.4 },
  { period: '2026-01', surplus: -13.0 },
  { period: '2026-02', surplus: 186.1 },
  { period: '2026-03', surplus: -51.2 },
  { period: '2026-04', surplus: -12.1 },
  { period: '2026-05', surplus: 2.2 },
  { period: '2026-06', surplus: 10.3 },
  { period: '2026-07', surplus: 15.3 },
  { period: '2026-08', surplus: 17.6 },
  { period: '2026-09', surplus: 50.5 },
];

const monthlyTradeSurplusLines: LineConfig[] = [
  { dataKey: 'surplus', name: '贸易顺差同比', color: '#1e3a8a', strokeWidth: 2.5 },
];

export const ContentSlide23: React.FC = () => {
  return (
    <BaseContentSlide
      title="1-9月出口总值同比增长21.3%，贸易顺差增长7.2%"
      cardColumns={2}
      chartColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="出口、进口保持高增长" delay="0ms" variant="accent">
            <p className="text-sm">
              9月出口（美元计）同比<span className="text-red-500 font-semibold">+36.3%</span>，较8月的25.0%持续上行；进口同比<span className="text-red-500 font-semibold">+31.0%</span>。
            </p>
            <p className="text-sm mt-2">
              前三季度出口整体同比<span className="text-red-500 font-semibold">+21.3%</span>；进口总值同比<span className="text-red-500 font-semibold">+27.5%</span>，仍受到AI热潮和价格驱动，保持高增长。
            </p>
          </BaseCard>
          <BaseCard title="三季度贸易顺差大超预期，9月顺差+50.5%" delay="120ms">
            <p className="text-sm">
              9月当月顺差<span className="text-black">1,335.3亿美元</span>，同比<span className="text-red-500 font-semibold">+50.5%</span>；前三季度顺差<span className="text-black">9,381亿美元</span>，同比<span className="text-red-500 font-semibold">+7.2%</span>。
            </p>
            <p className="text-sm mt-2">
              华泰估算三季度商品贸易顺差对名义GDP同比拉动<span className="text-red-500 font-semibold">+1.2个百分点</span>，对比二季度的<span className="text-green-600 font-semibold">-0.25%</span>，贸易顺差对GDP增长的贡献显著抬升。
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
