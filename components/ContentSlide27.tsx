import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseLineChart, LineConfig } from './BaseLineChart';
import { foreignTradeTrendData, foreignTradeMonthlyUsdData, foreignTradeMonthlyValuesData } from '@/data/foreignTrade';
import { getSeriesColor } from '@/utils/chartColors';

export const ContentSlide27: React.FC = () => {
  // 折线图配置
  const lineConfigs: LineConfig[] = [
    { dataKey: 'exports', name: '出口当月同比', color: getSeriesColor(0), strokeWidth: 2.5 },
    { dataKey: 'imports', name: '进口当月同比', color: getSeriesColor(2), strokeWidth: 2 },
  ];

  // 柱状图配置 - 已替换为折线图
  const lineConfigsValues: LineConfig[] = [
    { dataKey: 'total', name: '进出口总值', color: getSeriesColor(1), strokeWidth: 2 },
    { dataKey: 'exports', name: '出口当月值', color: getSeriesColor(0), strokeWidth: 2.5 },
    { dataKey: 'imports', name: '进口当月值', color: getSeriesColor(2), strokeWidth: 2 },
  ];

  return (
    <BaseContentSlide
      title={<>2025年全年保持增长再创新高，Q4出口增速超预期回升至6.6%</>}
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="全年外贸成绩与贡献" delay="200ms" variant="accent">
            <p>
              2025年全年货物进出口总额<span className="text-webank-blue font-semibold">45.47万亿</span>，增长<span className="text-green-600 font-semibold">3.8%</span>，其中，出口26.99万亿元，增长<span className="text-green-600 font-semibold">6.1%</span>；进口18.48万亿元，增长<span className="text-green-600 font-semibold">0.5%</span>，规模再创新高。
            </p>
          </BaseCard>
          <BaseCard title="Q4出口波动解析" delay="400ms">
            <p>
              受去年同期高基数（台风后补偿性出货）等影响，10月出口同比下降<span className="text-red-500 font-semibold">1.1%</span>，为年内首次转负。12月因集成电路、自动数据处理设备等电子类产品进入补库周期和企业为对冲2026年初关税不确定性及避开春节假期，出口加速至<span className="text-green-600 font-semibold">6.6%</span>。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={foreignTradeMonthlyUsdData}
              title="进出口总值(美元计价):当月同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={lineConfigs}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['出口当月同比', '进口当月同比']}
              xAxisTickCount={10}
            />
          </ChartContainer>
          <ChartContainer delay="800ms">
            <BaseLineChart
              data={foreignTradeMonthlyValuesData}
              title="进出口总值(美元计价):当月值"
              subtitle="单位：亿美元"
              lines={lineConfigsValues}
              xAxisTickCount={10}
              yAxisDomain={['auto', 'auto']}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['进出口总值', '出口当月值', '进口当月值']}
              unit=""
              yAxisTickFormatter={(val) => `${val}`}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
