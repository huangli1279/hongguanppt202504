import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart } from '../base/BaseBarChart';
import { BaseStackedBarChart } from '../base/BaseStackedBarChart';
import { chartColors, seriesColors } from '@/utils/chartColors';
import {
  nonBankFinQuarterlyData,
  householdDepositAnnualData,
  maturityDepositData,
} from '@/data/depositData';

const q1ComparisonData = [
  { period: '居民存款增量', '2024Q1': 8.56, '2025Q1': 9.22, '2026Q1': 7.70 },
  { period: '居民活期存款', '2024Q1': 1.36, '2025Q1': 1.27, '2026Q1': 1.16 },
  { period: '居民定期存款', '2024Q1': 7.19, '2025Q1': 7.95, '2026Q1': 6.53 },
  { period: '非银金融机构', '2024Q1': 1.63, '2025Q1': 0.31, '2026Q1': 2.32 },
];

export const ContentSlide37: React.FC = () => {
  return (
    <BaseContentSlide
      title="一季度居民存款同比少增1.5万亿，非银金融机构存款累计同比多2万亿"
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-4 mb-4 flex-shrink-0">
          <BaseCard title="“存款搬家”加速" delay="0ms" variant="accent">
            <p>
              一季度居民存款累计同比少增约 <span className="font-bold text-webank-blue">1.5万亿</span>（其中定期存款少增1.4万亿），而非银金融机构存款累计同比多增 <span className="font-bold text-webank-blue">2万亿</span>。非银金融机构存款增量25年以来逐季度增长，资金正加速从银行表内定期储蓄，向理财、基金、保险等非银产品迁移。
            </p>
          </BaseCard>
          <BaseCard title="一年内到期定期存款量增加" delay="120ms" variant="accent">
            <p>
              2022—2023年高位利率时期的定期存款集中到期，使得 <span className="font-bold text-webank-blue">2025—2026年</span>短期到期定存规模显著增加。在当前存款利率持续走低的背景下，大量高息存量资金到期后将减少被动续存，逐步向理财、基金、保险等多元资产分流。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-4 gap-4 min-h-0">
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={q1ComparisonData}
              title="居民存款及非银金融机构存款季度增量"
              subtitle="数据来源：中国人民银行 | 单位：万亿"
              bars={[
                { dataKey: '2024Q1', name: '2024Q1', color: chartColors.quaternary },
                { dataKey: '2025Q1', name: '2025Q1', color: chartColors.tertiary },
                { dataKey: '2026Q1', name: '2026Q1', color: chartColors.primary },
              ]}
              showYAxis={true}
              yAxisDomain={[0, 10]}
              unit="万亿"
              barSize={10}
              yAxisTickFormatter={(v) => `${v}`}
              xAxisAngle={-45}
              xAxisHeight={60}
            />
          </ChartContainer>
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={nonBankFinQuarterlyData}
              title="非银金融机构存款季度增量"
              subtitle="数据来源：中国人民银行 | 单位：万亿"
              bars={[{ dataKey: 'value', name: '非银金融机构存款增量' }]}
              showYAxis={true}
              yAxisDomain={[0, 3]}
              unit="万亿"
              barSize={28}
              yAxisTickFormatter={(v) => `${v}`}
            />
          </ChartContainer>
          <ChartContainer delay="720ms">
            <BaseStackedBarChart
              data={householdDepositAnnualData}
              title="住户存款年度增量（活期+定期及其他）"
              subtitle="数据来源：中国人民银行 | 单位：万亿"
              bars={[
                { dataKey: 'demand', name: '住户存款:活期存款', color: seriesColors[1] },
                { dataKey: 'timeAndOther', name: '住户存款:定期及其他存款', color: seriesColors[2] },
              ]}
              showYAxis={true}
              yAxisDomain={[0, 22]}
              unit="万亿"
              barSize={18}
              xAxisInterval={2}
              valueFormatter={(v) => v.toFixed(2)}
              xAxisAngle={-45}
              xAxisHeight={60}
            />
          </ChartContainer>
          <ChartContainer delay="840ms">
            <BaseBarChart
              data={maturityDepositData}
              title="一年内到期存款规模"
              subtitle="数据来源：wind，银行年报（39家样本，存款占市场83%-85%）| 单位：万亿"
              bars={[{ dataKey: 'value', name: '一年内到期存款' }]}
              showYAxis={true}
              yAxisDomain={[50, 90]}
              unit="万亿"
              barSize={32}
              yAxisTickFormatter={(v) => `${v}`}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
