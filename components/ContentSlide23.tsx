import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseLineChart, LineConfig } from './BaseLineChart';
import { fixedAssetInvestmentData, privateInvestmentData } from '@/data/fixedAssetInvestment';
import { chartColors, seriesColors } from '@/utils/chartColors';

export const ContentSlide23: React.FC = () => {
  // 固定资产投资关键分项折线图配置
  const investmentLineConfigs: LineConfig[] = [
    { dataKey: 'fixedAsset', name: '固定资产投资', color: chartColors.primary, strokeWidth: 2.5 },
    { dataKey: 'manufacturing', name: '制造业投资', color: chartColors.positive, strokeWidth: 2 },
    { dataKey: 'realEstate', name: '房地产开发投资', color: chartColors.negative, strokeWidth: 2 },
    { dataKey: 'infrastructure', name: '基础设施建设投资', color: seriesColors[1], strokeWidth: 2 },
  ];

  // 民间投资与国有控股投资折线图配置
  const privateLineConfigs: LineConfig[] = [
    { dataKey: 'privateInvestment', name: '民间固定资产投资', color: chartColors.primary, strokeWidth: 2.5 },
    { dataKey: 'stateOwned', name: '国有及国有控股资产投资', color: seriesColors[1], strokeWidth: 2 },
  ];

  return (
    <BaseContentSlide
      title="2025年固投全年下降3.8%，房地产深跌与基建乏力拖累整体投资"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="总量加速下行" delay="200ms" variant="accent">
            <p>
              全年固定资产投资（不含农户）同比下降<span className="text-red-500 font-semibold">3.8%</span>。四季度下行斜率显著加大，累计增速从1-9月的-0.5%一路滑落，显示投资需求在年末急剧收缩。固定资产投资三大支柱全面降速：房地产深度下跌（<span className="text-red-500 font-semibold">-17.2%</span>）、基建转负（<span className="text-red-500 font-semibold">-1.48%</span>）、制造业增速显著回落（<span className="text-webank-accent font-semibold">0.6%</span>），整体投资动能乏力。
            </p>
          </BaseCard>
          <BaseCard title="民间投资深度负增长" delay="400ms">
            <p>
              民间投资：全年下降<span className="text-red-500 font-semibold">6.4%</span>，创历史新低，反映民营企业投资意愿极度低迷。国有控股：全年下降<span className="text-red-500 font-semibold">2.5%</span>，亦转负增长。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          {/* 固定资产投资关键分项折线图 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={fixedAssetInvestmentData}
              title="2024-2025年固定资产投资关键分项累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={investmentLineConfigs}
              yAxisDomain={[-20, 15]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['固定资产投资', '制造业投资', '房地产开发投资', '基础设施建设投资']}
              xAxisTickCount={6}
            />
          </ChartContainer>

          {/* 民间投资与国有控股投资折线图 */}
          <ChartContainer delay="800ms">
            <BaseLineChart
              data={privateInvestmentData}
              title="2024-2025年民间投资与国有控股投资累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={privateLineConfigs}
              yAxisDomain={[-10, 10]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['民间固定资产投资', '国有及国有控股资产投资']}
              xAxisTickCount={6}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
