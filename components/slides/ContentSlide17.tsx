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
    { dataKey: 'otherExpenses', name: '其他费用', color: seriesColors[2], strokeWidth: 2, pointCallouts: { '2026-09': { dx: 14, dy: -18 } } },
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
      title="投资：Q3累计同比-7.2%，单月环比转正但基础不牢——10月环比转负、降幅走阔"
      cardColumns={4}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 - 四列，与下方四张图逐一对应 */}
        <div className="grid grid-cols-4 gap-4 mb-4 flex-shrink-0">
          <BaseCard title="固投累计同比仍负增，9月环比转正、10月再转弱" delay="0ms" variant="accent">
            <p>
              前三季度固投33.41万亿元、累计同比<span className="text-green-600 font-semibold">-7.2%</span>，降幅较上半年扩大1.5pp；9月环比转正（2月以来首次），主因季末财政支出与专项债拨付提速。但10月累计降幅扩至<span className="text-green-600 font-semibold">-8.1%</span>、单月环比<span className="text-green-600 font-semibold">-2.93%</span>，企稳未能延续。
            </p>
          </BaseCard>
          <BaseCard title="10月三大类同步走弱，地产仍是最大拖累" delay="120ms">
            <p>
              9月制造业投资累计同比<span className="text-green-600 font-semibold">-2.1%</span>（降幅收窄0.2pp）、基建<span className="text-green-600 font-semibold">-4.2%</span>、地产<span className="text-green-600 font-semibold">-20.6%</span>，制造业降幅明显小于整体、地产拖累最深，10月三大类同步走弱。
            </p>
          </BaseCard>
          <BaseCard title="国有控股降幅收窄，民间投资持续走弱" delay="240ms">
            <p>
              国有控股投资降幅收窄0.4pct至<span className="text-black">-3.2%</span>，政策托底增强；民间投资降幅扩大0.3pct至<span className="text-green-600 font-semibold">-10.4%</span>，民营资本扩投意愿偏弱。10月两类主体降幅均走阔，分别至<span className="text-green-600 font-semibold">-4.0%</span>和<span className="text-green-600 font-semibold">-11.4%</span>。
            </p>
          </BaseCard>
          <BaseCard title="建安与其他费用降幅走阔，设备购置维持正增" delay="360ms">
            <p>
              建筑安装工程累计同比<span className="text-green-600 font-semibold">-10.0%</span>、其他费用<span className="text-green-600 font-semibold">-12.1%</span>，降幅持续走阔；受两新政策影响，仅设备工器具购置维持正增<span className="text-red-500 font-semibold">+9.7%</span>，但增势较年初边际回落。10月建安<span className="text-green-600 font-semibold">-11.0%</span>、其他费用<span className="text-green-600 font-semibold">-13.2%</span>。
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
