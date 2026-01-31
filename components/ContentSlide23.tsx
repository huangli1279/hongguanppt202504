import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseCard } from './BaseCard';
import { BaseLineChart, LineConfig } from './BaseLineChart';
import { realEstateInvestmentData, housePriceIndexData } from '@/data/realEstate';
import { chartColors, seriesColors } from '@/utils/chartColors';

export const ContentSlide23: React.FC = () => {
  // 房地产开发投资折线图配置
  const investmentLineConfigs: LineConfig[] = [
    { dataKey: 'realEstateInvestment', name: '房地产开发投资', color: chartColors.primary, strokeWidth: 2.5 },
    { dataKey: 'newConstruction', name: '房屋新开工面积', color: '#ef4444', strokeWidth: 2 },
    { dataKey: 'completion', name: '房地产竣工面积', color: seriesColors[1], strokeWidth: 2 },
  ];

  // 房价指数折线图配置
  const priceLineConfigs: LineConfig[] = [
    { dataKey: 'newHousePrice', name: '新建商品住宅价格指数同比', color: chartColors.primary, strokeWidth: 2.5 },
    { dataKey: 'secondHandPrice', name: '二手住宅价格指数同比', color: '#ef4444', strokeWidth: 2 },
  ];

  return (
    <BaseContentSlide
      title="房地产开发投资重挫17.2%，新开工面积腰斩式下跌制约后续实物量"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="投资端深度出清" delay="200ms" variant="accent">
            <p>
              全年开发投资下降<span className="text-red-500 font-semibold">17.2%</span>。房屋新开工面积下降<span className="text-red-500 font-semibold">20.4%</span>，竣工面积下降<span className="text-red-500 font-semibold">18.1%</span>。先行指标剧烈收缩，意味着未来1-2年建安投资仍面临巨大压力。
            </p>
          </BaseCard>
          <BaseCard title="房价指数：持续调整" delay="400ms">
            <p>
              70个大中城市房价指数维持下行态势。12月新建商品住宅价格同比下降<span className="text-red-500 font-semibold">3.05%</span>，二手住宅价格同比下降<span className="text-red-500 font-semibold">6.07%</span>。市场筑底过程仍在延续，价格修复斜率依然偏平。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          {/* 房地产开发投资折线图 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={realEstateInvestmentData}
              title="2024-2025年房屋新开工面积与竣工面积累计同比变化"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={investmentLineConfigs}
              yAxisDomain={[-35, 0]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['房地产开发投资', '房屋新开工面积', '房地产竣工面积']}
              xAxisTickCount={6}
            />
          </ChartContainer>

          {/* 房价指数折线图 */}
          <ChartContainer delay="800ms">
            <BaseLineChart
              data={housePriceIndexData}
              title="2024年1月-2025年12月70个大中城市房价指数同比变化"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={priceLineConfigs}
              yAxisDomain={[-10, 0]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['新建商品住宅价格指数同比', '二手住宅价格指数同比']}
              xAxisTickCount={6}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
