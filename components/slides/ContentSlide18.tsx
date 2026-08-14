import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { fixedAssetInvestmentData, privateInvestmentData, investmentBreakdownData } from '@/data/fixedAssetInvestment';

export const ContentSlide18: React.FC = () => {
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

  // 投资拆分：建筑安装工程、设备购置、其他费用折线图配置
  const breakdownLineConfigs: LineConfig[] = [
    { dataKey: 'construction', name: '建筑安装工程', strokeWidth: 2.5 },
    { dataKey: 'equipment', name: '设备工器具购置', strokeWidth: 2 },
    { dataKey: 'otherExpenses', name: '其他费用', strokeWidth: 2 },
  ];

  return (
    <BaseContentSlide
      title="1—6月固投累计同比转负至-5.7%，总量超预期回落"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-4 flex-shrink-0">
          <BaseCard title="总量超预期回落" delay="0ms" variant="accent">
            <p>
              上半年全国固定资产投资（不含农户）<span className="text-black font-semibold">22.64万亿</span>，同比下降<span className="text-green-600 font-semibold">5.7%</span>（前值+1.7%），增速回落<span className="text-black font-semibold">7.4个百分点</span>。其中基础设施建设投资同比下降<span className="text-green-600 font-semibold">2.4%</span>，房地产投资同比降幅扩大，仍为主要拖累。
            </p>
            <p className="mt-2 text-black">
              房地产投资方面，商品待售面积连续4个月同比下降，一线城市价格端连续4个月环比上升，房地产开发投资累计同比仍然深度负增长。
            </p>
          </BaseCard>
          <BaseCard title="分类投资全面走弱" delay="120ms">
            <p>
              从分类来看：民间投资、国有控股投资<span className="text-green-600 font-semibold">均下降</span>，固定投资建筑安装工程、其他费用同比均扩大降幅，设备工器具购置同比正增但增幅下降。企业投资意愿下降，特别对于扩建意愿低。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 - 三列布局 */}
        <div className="flex-1 grid grid-cols-3 gap-4 min-h-0">
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

          {/* 投资拆分：建筑安装工程、设备购置、其他费用 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={investmentBreakdownData}
              title="建筑安装工程、设备购置、其他费用累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={breakdownLineConfigs}
              yAxisDomain={[-10, 20]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['建筑安装工程', '设备工器具购置', '其他费用']}
              xAxisTickCount={6}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
