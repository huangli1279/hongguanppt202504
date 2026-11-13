import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { fixedAssetInvestmentData, privateInvestmentData, investmentBreakdownData } from '@/data/fixedAssetInvestment';
import { seriesColors } from '../../utils/chartColors';

export const ContentSlide17: React.FC = () => {
  // 固定资产投资三大支柱折线图配置
  const investmentLineConfigs: LineConfig[] = [
    { dataKey: 'manufacturing', name: '制造业投资', color: seriesColors[1], strokeWidth: 2.5, pointOffsets: { '2026-09': -8 } },
    { dataKey: 'infrastructure', name: '基础设施建设投资', color: seriesColors[0], strokeWidth: 2, pointOffsets: { '2026-09': 8 } },
    { dataKey: 'realEstate', name: '房地产开发投资', color: seriesColors[2], strokeWidth: 2, pointOffsets: { '2026-09': -12 } },
  ];

  // 民间投资与国有控股投资折线图配置
  const privateLineConfigs: LineConfig[] = [
    { dataKey: 'stateOwned', name: '国有控股投资', color: seriesColors[0], strokeWidth: 2.5, pointOffsets: { '2026-09': -10 } },
    { dataKey: 'privateInvestment', name: '民间投资', color: seriesColors[1], strokeWidth: 2, pointOffsets: { '2026-09': -10 } },
  ];

  // 投资拆分：建筑安装工程、设备购置、其他费用折线图配置
  // 建筑安装工程与其他费用末值相近，用引线标注错开避免重叠
  const breakdownLineConfigs: LineConfig[] = [
    { dataKey: 'construction', name: '建筑安装工程', color: seriesColors[0], strokeWidth: 2.5, pointCallouts: { '2026-09': { dx: 14, dy: -20 } } },
    { dataKey: 'equipment', name: '设备工器具购置', color: seriesColors[1], strokeWidth: 2, pointOffsets: { '2026-09': -8 } },
    { dataKey: 'otherExpenses', name: '其他费用', color: seriesColors[2], strokeWidth: 2, pointCallouts: { '2026-09': { dx: 14, dy: -4 } } },
  ];

  // 左图：固投累计同比 + 单月环比（单月环比为季调数据）
  const cumulativeMomData = [
    { period: '2025-02', cumulative: 4.10, mom: 0.27 },
    { period: '2025-03', cumulative: 4.20, mom: -1.90 },
    { period: '2025-04', cumulative: 4.00, mom: 1.67 },
    { period: '2025-05', cumulative: 3.70, mom: -0.33 },
    { period: '2025-06', cumulative: 2.80, mom: -1.41 },
    { period: '2025-07', cumulative: 1.60, mom: -0.38 },
    { period: '2025-08', cumulative: 0.50, mom: -1.52 },
    { period: '2025-09', cumulative: -0.50, mom: -1.34 },
    { period: '2025-10', cumulative: -1.70, mom: -0.69 },
    { period: '2025-11', cumulative: -2.60, mom: -0.69 },
    { period: '2025-12', cumulative: -3.80, mom: -1.52 },
    { period: '2026-02', cumulative: 1.80, mom: 0.47 },
    { period: '2026-03', cumulative: 1.70, mom: -0.68 },
    { period: '2026-04', cumulative: -1.60, mom: -2.83 },
    { period: '2026-05', cumulative: -4.10, mom: -0.99 },
    { period: '2026-06', cumulative: -5.70, mom: -0.04 },
    { period: '2026-07', cumulative: -6.70, mom: -1.25 },
    { period: '2026-08', cumulative: -7.20, mom: -0.55 },
    { period: '2026-09', cumulative: -7.20, mom: 0.07 },
  ];

  const cumulativeMomConfigs: LineConfig[] = [
    { dataKey: 'cumulative', name: '固投累计同比', color: seriesColors[0], strokeWidth: 2.5, pointOffsets: { '2026-09': -8 } },
    { dataKey: 'mom', name: '固投单月环比', color: seriesColors[1], strokeWidth: 2, pointOffsets: { '2026-09': 8 } },
  ];

  return (
    <BaseContentSlide
      title="投资：1-9月累计同比-7.2%，9月单月降幅收窄，环比自2月以来首次转正"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-4 flex-shrink-0">
          <BaseCard title="投资累计同比仍负增，9月单月降幅已收窄" delay="0ms" variant="accent">
            <p>
              前三季度固投33.41万亿元、同比<span className="text-green-600 font-semibold">-7.2%</span>，降幅较上半年扩大1.5pp，但9月环比转正（2月以来首次）、累计降幅未继续走阔，投资端边际企稳，主因季末财政支出与专项债拨付提速；结构上是"制造业改善、地产拖累"——制造业累计降幅收窄为最大贡献（8月:-2.3%vs 9月:-2.1%），房地产降幅继续扩大仍是首要拖累
            </p>
          </BaseCard>
          <BaseCard title="分类投资仍偏弱" delay="120ms">
            <p>
              从投资主体看：国有控股投资降幅收窄0.4pct至<span className="text-black">-3.2%</span>，政策托底增强；民间投资降幅扩大0.3pct至<span className="text-green-600 font-semibold">-10.4%</span>，民营资本扩投意愿偏弱。
            </p>
            <p className="mt-2 text-black">
              从投资构成看：建筑安装工程、其他费用降幅小幅走阔；受两新政策影响，仅设备工器具购置维持正增，但增势边际回落。设备工器具购置同比<span className="text-red-600 font-semibold">+9.7%</span>、增速较1-8月加快0.4个百分点是三大构成中唯一正增项
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 - 四列横向排列 */}
        <div className="flex-1 grid grid-cols-4 gap-4 min-h-0">
          {/* 图1：固投累计同比 + 单月环比 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={cumulativeMomData}
              title="固投累计同比与单月环比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={cumulativeMomConfigs}
              yAxisDomain={[-8, 5]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['固投累计同比', '固投单月环比']}
              highlightPeriods={['2026-09']}
              xAxisTicks={['2025-03', '2025-09', '2026-03', '2026-09']}
              compact
            />
          </ChartContainer>

          {/* 图2：三大支柱累计同比 */}
          <ChartContainer delay="700ms">
            <BaseLineChart
              data={fixedAssetInvestmentData}
              title="制造业/基建/地产投资累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={investmentLineConfigs}
              yAxisDomain={[-25, 15]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['制造业投资', '基础设施建设投资', '房地产开发投资']}
              highlightPeriods={['2026-09']}
              xAxisTicks={['2025-03', '2025-09', '2026-03', '2026-09']}
              compact
            />
          </ChartContainer>

          {/* 图3：国有控股与民间投资累计同比 */}
          <ChartContainer delay="800ms">
            <BaseLineChart
              data={privateInvestmentData}
              title="国有控股与民间投资累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={privateLineConfigs}
              yAxisDomain={[-11, 8]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['国有控股投资', '民间投资']}
              highlightPeriods={['2026-09']}
              xAxisTicks={['2025-03', '2025-09', '2026-03', '2026-09']}
              compact
            />
          </ChartContainer>

          {/* 图4：投资构成累计同比 */}
          <ChartContainer delay="900ms">
            <BaseLineChart
              data={investmentBreakdownData}
              title="建筑安装/设备购置/其他费用累计同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={breakdownLineConfigs}
              yAxisDomain={[-13, 20]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['建筑安装工程', '设备工器具购置', '其他费用']}
              highlightPeriods={['2026-09']}
              xAxisTicks={['2025-03', '2025-09', '2026-03', '2026-09']}
              compact
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
