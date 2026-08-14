import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { moneySupplyCombinedRecentData } from '@/data/moneySupply';
import { chartColors } from '@/utils/chartColors';

const m1m2LineConfigs: LineConfig[] = [
  { dataKey: 'm1', name: 'M1(货币)', strokeWidth: 2.5 },
  { dataKey: 'm2', name: 'M2(货币和准货币)', strokeWidth: 2 },
];

const scissorLineConfigs: LineConfig[] = [
  { dataKey: 'scissor', name: '剪刀差', strokeWidth: 2.5 },
  {
    dataKey: 'scissorAdj',
    name: '剔除高基数',
    color: chartColors.primary,
    strokeWidth: 2.5,
    strokeDasharray: '6 4',
    labelDY: -12,
  },
];

export const ContentSlide32: React.FC = () => {
  return (
    <BaseContentSlide
      title="6月M1M2增速均回落，增速为2026年最低水平，主要为高基数引起"
      cardColumns={1}
      chartColumns={2}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 flex-shrink-0">
          <BaseCard delay="0ms" variant="accent" title="资金活化改善趋势">
            <p>
              6月M1增速回落主要受2025年同期高基数扰动——彼时化债加速推进、相关信贷集中投放，推高M1单月增量远超历史均值；M2同步回落则受信贷派生放缓与政府债发行偏慢共同拖累。剔除基数效应后，M1-M2剪刀差延续收窄态势，资金活化改善趋势未变。
            </p>
          </BaseCard>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={moneySupplyCombinedRecentData}
              title="M1、M2同比增速走势图"
              subtitle="数据来源：中国人民银行 | 单位：%"
              lines={m1m2LineConfigs}
              yAxisDomain={[-4, 10]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['M1(货币)', 'M2(货币和准货币)']}
              xAxisTickCount={8}
            />
          </ChartContainer>
          <ChartContainer delay="700ms">
            <BaseLineChart
              data={moneySupplyCombinedRecentData}
              title="M1-M2剪刀差走势图"
              subtitle="数据来源：中国人民银行 | 单位：%；虚线为剔除高基数 | 备注：2025年6月M1增加5.03万亿，历史正常增量估约3.25万亿（取2020-2023年区间中值参考，24年偏低不纳入参考），参考正常增量计算增速及剪刀差"
              lines={scissorLineConfigs}
              yAxisDomain={[-11, 0]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['剪刀差', '剔除高基数']}
              xAxisTickCount={8}
              highlightPeriods={['2026-06']}
            />
          </ChartContainer>
        </div>

      </div>
    </BaseContentSlide>
  );
};
