import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { fixedAssetInvestmentData, privateInvestmentData } from '@/data/fixedAssetInvestment';

export const ContentSlide21: React.FC = () => {
  // 固定资产投资关键分项折线图配置
  const investmentLineConfigs: LineConfig[] = [
    { dataKey: 'fixedAsset', name: '固定资产投资', strokeWidth: 2.5 },
    { dataKey: 'manufacturing', name: '制造业投资', strokeWidth: 2 },
    { dataKey: 'realEstate', name: '房地产开发投资', strokeWidth: 2 },
    { dataKey: 'infrastructure', name: '基础设施建设投资', strokeWidth: 2 },
  ];

  // 民间投资与国有控股投资折线图配置
  const privateLineConfigs: LineConfig[] = [
    { dataKey: 'stateOwned', name: '国有控股投资', strokeWidth: 2.5 },
    { dataKey: 'privateInvestment', name: '民间投资', strokeWidth: 2 },
  ];

  return (
    <BaseContentSlide
      title="在稳投资的明确定调下，一季度固投温和企稳至1.7%，其中基建投资增长8.9%，发挥托底作用"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="总量加速下行" delay="0ms" variant="accent">
            <p>
              2026年一季度，全国固定资产投资（不含农户）达到<span className="text-webank-accent font-semibold">10.27万亿元</span>，同比增长<span className="text-webank-accent font-semibold">1.7%</span>。其中，基础设施建设投资同比增长<span className="text-webank-accent font-semibold">8.9%</span>，发挥绝对托底作用，房地产投资仍为主要拖累。
            </p>
          </BaseCard>
          <BaseCard title="国有控股投资优于民间投资" delay="120ms">
            <p>
              一季度，国有控股投资同比增长<span className="text-webank-accent font-semibold">7.1%</span>，与“两重”建设、大规模设备更新及项目资金前置支持有关。民间投资同比下降<span className="text-red-500 font-semibold">2.2%</span>，其中基础设施民间投资增长5.2%、制造业民间投资增长2.2%，均低于行业整体增速，反映民间投资意愿依然低迷。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          {/* 固定资产投资关键分项折线图 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={fixedAssetInvestmentData}
              title="固定资产投资及分项累计同比"
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
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={privateInvestmentData}
              title="国有控股投资与民间投资累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={privateLineConfigs}
              yAxisDomain={[-10, 10]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['国有控股投资', '民间投资']}
              xAxisTickCount={6}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
