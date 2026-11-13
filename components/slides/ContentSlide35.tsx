import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart } from '../base/BaseBarChart';
import { chartColors } from '@/utils/chartColors';
import {
  depositIncrementQ3CompareData,
  householdDepositMonthlyQ3Data,
  nonBankDepositMonthlyQ3Data,
  nonBankDepositQuarterlyIncrementData,
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
        <div className="mb-4 flex-shrink-0">
          <BaseCard title="三季度存款结构：居民增、非银降，季末回表特征明显" delay="0ms" variant="accent">
            <p className="text-sm">
              三季度居民存款 +1.81 万亿（同比少增约 1,450 亿）；非银机构存款 -0.24 万亿，为 6 个季度以来首次下降（9 月单月 -
              <span className="text-green-600 font-semibold whitespace-nowrap">1.91 万亿</span>）。（图1、2）
            </p>
            <p className="text-sm mt-2">非银存款下降有季节性与结构性两层原因：</p>
            <p className="text-sm mt-1">
              · 季节性——季末资金回流银行是季节性（3/6/9 月非银降、居民升）；
            </p>
            <p className="text-sm mt-1">
              · 结构性——9 月政府债发行 1.53 万亿，而银行体系购债占比为 2017 年以来次低，大量债券由非银承接，非银动用存款缴款，叠加理财等资管产品到期赎回回流。
            </p>
            <p className="text-sm mt-2">两条传导链：</p>
            <p className="text-sm mt-1">
              ① 非银存款 →（承接政府债缴款）→ 财政存款（过渡，9月净减4,300亿）→（财政支出）→ 企业/居民存款；
            </p>
            <p className="text-sm mt-1">② 非银存款 →（理财等产品到期赎回）→ 企业/居民存款。</p>
            <p className="text-sm mt-2">
              分月看，存款结构呈典型季末特征：非银存款在 3/6/9 月净减、居民存款同步回升。（图3）
            </p>
          </BaseCard>
        </div>

        <div className="flex-1 min-h-0 grid grid-cols-4 gap-4">
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
              barSize={14}
              showLabels={true}
              labelContent={barValueLabel}
              xAxisTickFontSize={7}
              legendOrder={['2024Q3', '2025Q3', '2026Q3']}
              unit="万亿"
            />
          </ChartContainer>

          <ChartContainer delay="660ms" ariaLabel="季度非银机构存款增量柱状图">
            <BaseBarChart
              data={nonBankDepositQuarterlyIncrementData}
              title="季度非银机构存款增量"
              subtitle="单位：万亿"
              xAxisKey="period"
              bars={[
                { dataKey: 'value', name: '非银机构存款', color: chartColors.secondary },
              ]}
              yAxisDomain={[-2.5, 3]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              yAxisTickFormatter={(val) => `${val}`}
              showLegend={false}
              barSize={9}
              showLabels={true}
              labelContent={barValueLabel}
              xAxisTickFontSize={6}
              unit="万亿"
            />
          </ChartContainer>

          <ChartContainer delay="700ms" ariaLabel="居民存款月度变化柱状图">
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
              barSize={14}
              showLabels={true}
              labelContent={barValueLabel}
              xAxisTickFontSize={7}
              unit="万亿"
            />
          </ChartContainer>

          <ChartContainer delay="740ms" ariaLabel="非银机构存款月度变化柱状图">
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
              barSize={14}
              showLabels={true}
              labelContent={barValueLabel}
              xAxisTickFontSize={7}
              unit="万亿"
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
