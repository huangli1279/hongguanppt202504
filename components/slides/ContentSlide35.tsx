import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart } from '../base/BaseBarChart';
import { chartColors } from '@/utils/chartColors';
import {
  depositIncrementQ3CompareData,
  householdDepositMonthlyQ3Data,
  nonBankDepositMonthlyQ3Data,
} from '@/data/depositData';

/** 柱顶/柱底标签：正值放柱子上方，负值放柱子下方 */
const barValueLabel = ({ x, y, width, value }: any) => {
  if (value == null) return null;
  const v = Number(value);
  const isNegative = v < 0;
  return (
    <text
      x={Number(x) + Number(width) / 2}
      y={isNegative ? Number(y) + 11 : Number(y) - 7}
      textAnchor="middle"
      dominantBaseline="middle"
      fill="#475569"
      fontSize={9}
      fontWeight={700}
    >
      {v}
    </text>
  );
};

export const ContentSlide35: React.FC = () => {
  return (
    <BaseContentSlide
      title={<>居民存款大增1.8万亿，非银机构存款6个季度以来首次下降</>}
      chartColumns={2}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 flex-shrink-0 grid grid-cols-2 gap-4">
          <BaseCard title="存款搬家放缓" delay="0ms" variant="accent">
            <p className="text-sm">
              三季度居民存款增长<span className="text-webank-blue font-semibold">1.81万亿</span>，同比少增
              <span className="text-webank-blue font-semibold">1453亿</span>；非银机构存款
              <span className="text-red-600 font-semibold">6个季度以来首次下降</span>（-0.24万亿）。存款搬家放缓，或源于三季度资本市场波动加大。
            </p>
          </BaseCard>
          <BaseCard title="季末资金回流银行" delay="120ms">
            <p className="text-sm">
              存款结构呈现季末资金回流银行的特征。9月居民存款增加
              <span className="text-webank-blue font-semibold whitespace-nowrap">2.4万亿</span>，非银存款减少
              <span className="text-red-600 font-semibold whitespace-nowrap">1.91万亿</span>、同比多减
              <span className="text-webank-blue font-semibold whitespace-nowrap">8500亿</span>。普益标准统计的9月理财规模环比下降
              <span className="text-webank-blue font-semibold whitespace-nowrap">0.85%</span>，与季末回表方向一致。
            </p>
            <p className="text-sm mt-2">
              不过9月居民存款仍同比少增<span className="text-webank-blue font-semibold whitespace-nowrap">5600亿</span>，理财规模降幅也远小于非银存款收缩，可能源于季末再配置；10月季节性因素消退后，部分资金仍可能重新流向理财和基金。
            </p>
          </BaseCard>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-2 gap-6">
          <ChartContainer delay="600ms" ariaLabel="三季度存款增量对比柱状图">
            <BaseBarChart
              data={depositIncrementQ3CompareData}
              title="存款增量对比"
              subtitle="数据来源：中国人民银行 | 单位：万亿"
              xAxisKey="category"
              bars={[
                { dataKey: 'q2024', name: '2024Q3', color: '#6b7280' },
                { dataKey: 'q2025', name: '2025Q3', color: chartColors.tertiary },
                { dataKey: 'q2026', name: '2026Q3', color: chartColors.primary },
              ]}
              yAxisDomain={[-1, 3]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              yAxisTickFormatter={(val) => `${val}`}
              barSize={20}
              showLabels={true}
              labelContent={barValueLabel}
              xAxisTickFontSize={9}
              legendOrder={['2024Q3', '2025Q3', '2026Q3']}
              unit="万亿"
            />
          </ChartContainer>

          <div className="grid grid-cols-2 gap-4 min-h-0">
            <ChartContainer delay="640ms" ariaLabel="居民存款月度变化柱状图">
              <BaseBarChart
                data={householdDepositMonthlyQ3Data}
                title="居民存款月度变化"
                subtitle="单位：万亿"
                xAxisKey="period"
                bars={[
                  { dataKey: 'value', name: '居民存款', color: chartColors.primary },
                ]}
                yAxisDomain={[-2, 4]}
                showYAxis={true}
                showReferenceLine={true}
                referenceLineY={0}
                yAxisTickFormatter={(val) => `${val}`}
                showLegend={false}
                barSize={18}
                showLabels={true}
                labelContent={barValueLabel}
                xAxisTickFontSize={8}
                unit="万亿"
              />
            </ChartContainer>
            <ChartContainer delay="680ms" ariaLabel="非银机构存款月度变化柱状图">
              <BaseBarChart
                data={nonBankDepositMonthlyQ3Data}
                title="非银机构存款月度变化"
                subtitle="单位：万亿"
                xAxisKey="period"
                bars={[
                  { dataKey: 'value', name: '非银存款', color: chartColors.secondary },
                ]}
                yAxisDomain={[-2, 4]}
                showYAxis={true}
                showReferenceLine={true}
                referenceLineY={0}
                yAxisTickFormatter={(val) => `${val}`}
                showLegend={false}
                barSize={18}
                showLabels={true}
                labelContent={barValueLabel}
                xAxisTickFontSize={8}
                unit="万亿"
              />
            </ChartContainer>
          </div>
        </div>
      </div>
    </BaseContentSlide>
  );
};
