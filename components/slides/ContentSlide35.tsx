import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart } from '../base/BaseBarChart';
import { chartColors } from '@/utils/chartColors';
import { depositIncrementQ2CompareData } from '@/data/depositData';

export const ContentSlide35: React.FC = () => {
  // 住户存款数据
  const householdDepositData = [
    { category: '2504', value: -1.39 },
    { category: '2505', value: 0.47 },
    { category: '2506', value: 2.48 },
    { category: '2604', value: -1.94 },
    { category: '2605', value: -0.11 },
    { category: '2606', value: 1.94 },
  ];

  // 非银存款数据
  const nonBankDepositData = [
    { category: '2504', value: 1.57 },
    { category: '2505', value: 1.18 },
    { category: '2506', value: -0.52 },
    { category: '2604', value: 2.46 },
    { category: '2605', value: 1.14 },
    { category: '2606', value: -0.99 },
  ];

  return (
    <BaseContentSlide
      title={<>二季度居民存款净减少1049亿元，为2018年以来首次下降；非银机构存款则增加2.62万亿元</>}
      chartColumns={2}
    >
      <div className="flex flex-col h-full">
        <div className="mb-6 flex-shrink-0">
          <BaseCard title="存款搬家延续" delay="0ms" variant="accent">
            <p>
              二季度居民存款净减少<span className="text-webank-blue font-semibold">1049亿元</span>（同比少增<span className="text-webank-blue font-semibold">1.66万亿元</span>），非银存款增加<span className="text-webank-blue font-semibold">2.62万亿元</span>（同比多增<span className="text-webank-blue font-semibold">3915亿元</span>），存款搬家趋势延续。
            </p>
            <p>
              分月节奏上，4-5月居民及企业存款连续下降，非银存款加速增长；6月受银行季末冲存款的短期扰动，居民存款阶段性回升、非银存款回落。
            </p>
          </BaseCard>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-2 gap-6">
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={depositIncrementQ2CompareData}
              title="存款增量对比"
              subtitle="数据来源：中国人民银行 | 单位：万亿"
              xAxisKey="category"
              bars={[
                { dataKey: 'q2024', name: '2024Q2', color: '#6b7280' },
                { dataKey: 'q2025', name: '2025Q2', color: chartColors.tertiary },
                { dataKey: 'q2026', name: '2026Q2', color: chartColors.primary },
              ]}
              yAxisDomain={[-1, 3]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              yAxisTickFormatter={(val) => `${val}`}
              barSize={28}
              showLabels={true}
              labelOffset={8}
              labelNegativeOffset={-20}
              labelNegativeOffsets={{ q2024: -10 }}
              legendOrder={['2024Q2', '2025Q2', '2026Q2']}
              unit="万亿"
            />
          </ChartContainer>

          <div className="grid grid-cols-2 gap-2">
            <BaseBarChart
              data={householdDepositData}
              title="居民存款月度变化"
              subtitle="单位：万亿"
              xAxisKey="category"
              bars={[
                { dataKey: 'value', name: '居民存款', color: chartColors.primary },
              ]}
              yAxisDomain={[-3, 3]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              yAxisTickFormatter={(val) => `${val}`}
              barSize={32}
              showLabels={true}
              labelNegativeOffsetsByIndex={{ 0: 0, 3: -70 }}
              unit="万亿"
            />
            <BaseBarChart
              data={nonBankDepositData}
              title="非银存款月度变化"
              subtitle="单位：万亿"
              xAxisKey="category"
              bars={[
                { dataKey: 'value', name: '非银存款', color: chartColors.secondary },
              ]}
              yAxisDomain={[-3, 3]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              yAxisTickFormatter={(val) => `${val}`}
              barSize={32}
              showLabels={true}
              labelOffset={6}
              labelNegativeOffset={-18}
              unit="万亿"
            />
          </div>
        </div>
      </div>
    </BaseContentSlide>
  );
};
