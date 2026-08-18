import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { fixedAssetInvestmentData, privateInvestmentData, investmentBreakdownData } from '@/data/fixedAssetInvestment';

export const ContentSlide18: React.FC = () => {
  // 固定资产投资关键分项折线图配置
  const investmentLineConfigs: LineConfig[] = [
    { dataKey: 'fixedAsset', name: '固定资产投资', strokeWidth: 2.5 },
    { dataKey: 'manufacturing', name: '制造业投资', strokeWidth: 2, pointOffsets: { '2026-06': -5 } },
    { dataKey: 'realEstate', name: '房地产开发投资', strokeWidth: 2 },
    { dataKey: 'infrastructure', name: '基础设施建设投资', strokeWidth: 2, pointOffsets: { '2026-06': 5} },
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
    { dataKey: 'otherExpenses', name: '其他费用', strokeWidth: 2, pointOffsets: { '2026-06': 10 } },
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
              上半年全国固定资产投资（不含农户）<span className="text-black">22.64万亿</span>，同比下降<span className="text-green-600 font-semibold">5.7%</span>，一季度为<span className="text-black">+1.7%</span>，增速大幅回落<span className="text-black">7.4个百分点</span>。此前承担托底作用的基建投资同比下降<span className="text-green-600 font-semibold">2.4%</span>，托底力度明显减弱；房地产投资降幅进一步扩大，仍是固投最主要拖累。
            </p>
            <p className="mt-2 text-black">
              地产呈现明显结构性分化：商品待售面积连续<span className="text-black">4个月</span>同比下降，一线城市房价连续<span className="text-black">4个月</span>环比上行；但房企拿地、新开工修复不足，房地产开发投资依旧维持深度负增长。
            </p>
          </BaseCard>
          <BaseCard title="分类投资全面走弱" delay="120ms">
            <p>
              从投资主体看：国有控股、民间投资同步走弱，民间投资降幅（<span className="text-green-600 font-semibold">‑8.5%</span>）显著高于国有控股（<span className="text-green-600 font-semibold">‑2.3%</span>），民营资本扩投意愿偏弱。
            </p>
            <p className="mt-2 text-black">
              从投资构成看：建筑安装工程、其他费用降幅进一步扩大；仅设备工器具购置维持<span className="text-black">8.1%</span>正增长，但增势边际回落，企业更倾向于存量设备更新改造。
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
