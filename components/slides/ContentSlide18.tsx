import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { fixedAssetInvestmentData, privateInvestmentData, investmentBreakdownData } from '@/data/fixedAssetInvestment';
import { seriesColors } from '../../utils/chartColors';

export const ContentSlide18: React.FC = () => {
  // 固定资产投资三大支柱折线图配置
  const investmentLineConfigs: LineConfig[] = [
    { dataKey: 'manufacturing', name: '制造业投资', color: seriesColors[1], strokeWidth: 2.5, pointOffsets: { '2026-09': -8 } },
    { dataKey: 'infrastructure', name: '基础设施建设投资', color: seriesColors[0], strokeWidth: 2, pointOffsets: { '2026-09': 8 } },
    { dataKey: 'realEstate', name: '房地产开发投资', color: seriesColors[2], strokeWidth: 2, pointOffsets: { '2026-09': -12 } },
  ];

  // 民间投资与国有控股投资折线图配置
  const privateLineConfigs: LineConfig[] = [
    { dataKey: 'stateOwned', name: '国有控股投资', color: seriesColors[0], strokeWidth: 2.5 },
    { dataKey: 'privateInvestment', name: '民间投资', color: seriesColors[1], strokeWidth: 2 },
  ];

  // 投资拆分：建筑安装工程、设备购置、其他费用折线图配置
  const breakdownLineConfigs: LineConfig[] = [
    { dataKey: 'construction', name: '建筑安装工程', color: seriesColors[0], strokeWidth: 2.5 },
    { dataKey: 'equipment', name: '设备工器具购置', color: seriesColors[1], strokeWidth: 2 },
    { dataKey: 'otherExpenses', name: '其他费用', color: seriesColors[2], strokeWidth: 2 },
  ];

  // 左图：固投累计同比 + 单月环比
  const cumulativeMomData = [
    { period: '2026-02', cumulative: 1.80, mom: 2.50 },
    { period: '2026-03', cumulative: 1.70, mom: -0.50 },
    { period: '2026-04', cumulative: -1.60, mom: -1.20 },
    { period: '2026-05', cumulative: -4.10, mom: -2.00 },
    { period: '2026-06', cumulative: -5.70, mom: -1.50 },
    { period: '2026-07', cumulative: -6.70, mom: -0.80 },
    { period: '2026-08', cumulative: -7.20, mom: -1.00 },
    { period: '2026-09', cumulative: -7.20, mom: 0.60 },
  ];

  const cumulativeMomConfigs: LineConfig[] = [
    { dataKey: 'cumulative', name: '固投累计同比', color: seriesColors[0], strokeWidth: 2.5, pointOffsets: { '2026-09': -8 } },
    { dataKey: 'mom', name: '固投单月环比', color: seriesColors[1], strokeWidth: 2, pointOffsets: { '2026-09': 8 } },
  ];

  return (
    <BaseContentSlide
      title="投资：1-9月累计同比-7.2%，9月单月降幅年内最大幅度收窄"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-4 flex-shrink-0">
          <BaseCard title="投资累计同比仍负增，9月单月降幅已收窄" delay="0ms" variant="accent">
            <p>
              前三季度全国固定资产投资（不含农户）<span className="text-black">33.41万亿</span>，同比下降<span className="text-green-600 font-semibold">7.2%</span>，较二季度回落<span className="text-black">1.5个百分点</span>。分月来看，9月环比正增，为今年自2月以来首次正增，9月累计同比降幅未继续扩大，与财政支出加快有关。9月制造业投资累计同比降幅收窄，为最大改善项；房地产投资降幅进一步扩大，仍是固投最主要拖累。
            </p>
          </BaseCard>
          <BaseCard title="分类投资仍偏弱" delay="120ms">
            <p>
              从投资主体看：国有控股、民间投资同步走弱，民间投资降幅显著高于国有控股，民营资本扩投意愿偏弱。
            </p>
            <p className="mt-2 text-black">
              从投资构成看：建筑安装工程、其他费用降幅进一步扩大；仅设备工器具购置维持正增长，但增势边际回落。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 - 三列布局，右列上下两个图 */}
        <div className="flex-1 grid grid-cols-3 gap-4 min-h-0">
          {/* 左图：固投累计同比+环比双线 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={cumulativeMomData}
              title="固定资产投资累计同比与单月环比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={cumulativeMomConfigs}
              yAxisDomain={[-8, 4]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['固投累计同比', '固投单月环比']}
              highlightPeriods={['2026-09']}
              xAxisTicks={['2026-02', '2026-03', '2026-06', '2026-09']}
            />
          </ChartContainer>

          {/* 中图：三大支柱累计同比 */}
          <ChartContainer delay="600ms">
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
              xAxisTickCount={6}
            />
          </ChartContainer>

          {/* 右列：上下两个图 */}
          <div className="flex flex-col gap-4 min-h-0">
            <ChartContainer delay="600ms" className="flex-1 min-h-0">
              <BaseLineChart
                data={privateInvestmentData}
                title="国有控股投资与民间投资累计同比"
                subtitle="数据来源：国家统计局 | 单位：%"
                lines={privateLineConfigs}
                yAxisDomain={[-11, 9]}
                showYAxis={true}
                showReferenceLine={true}
                referenceLineY={0}
                legendOrder={['国有控股投资', '民间投资']}
                highlightPeriods={['2026-09']}
                xAxisTickCount={6}
              />
            </ChartContainer>
            <ChartContainer delay="600ms" className="flex-1 min-h-0">
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
                highlightPeriods={['2026-09']}
                xAxisTickCount={6}
              />
            </ChartContainer>
          </div>
        </div>
      </div>
    </BaseContentSlide>
  );
};
