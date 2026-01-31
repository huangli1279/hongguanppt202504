import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseLineChart, LineConfig } from './BaseLineChart';
import { BaseBarChart, BarConfig } from './BaseBarChart';
import { foreignTradeTrendData, q4ExportCompareData } from '@/data/foreignTrade';
import { getSeriesColor } from '@/utils/chartColors';

export const ContentSlide27: React.FC = () => {
  // 折线图配置
  const lineConfigs: LineConfig[] = [
    { dataKey: 'exports', name: '出口累计同比', color: getSeriesColor(0), strokeWidth: 2.5 },
    { dataKey: 'totalTrade', name: '进出口总值累计同比', color: getSeriesColor(1), strokeWidth: 2 },
    { dataKey: 'imports', name: '进口累计同比', color: getSeriesColor(2), strokeWidth: 2 },
  ];

  // 柱状图配置
  const barConfigs: BarConfig[] = [
    { dataKey: 'y2024', name: '2024年', color: getSeriesColor(1) },
    { dataKey: 'y2025', name: '2025年', color: getSeriesColor(0) },
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
              data={foreignTradeTrendData}
              title="进出口总值累计同比走势"
              subtitle="数据来源：海关总署 | 单位：%"
              lines={lineConfigs}
              yAxisDomain={[-20, 20]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['出口累计同比', '进出口总值累计同比', '进口累计同比']}
              xAxisTickCount={8}
            />
          </ChartContainer>
          <ChartContainer delay="800ms">
            <BaseBarChart
              data={q4ExportCompareData}
              title="2024-2025年Q4出口增速同比对比"
              subtitle={'2025年Q4呈现"先抑后扬"V型反转 | 单位：%'}
              bars={barConfigs}
              xAxisKey="month"
              yAxisDomain={[-5, 15]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['2024年', '2025年']}
              barSize={28}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
