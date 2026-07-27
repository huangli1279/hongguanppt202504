import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { moneySupplyCombinedRecentData } from '@/data/moneySupply';

const lineConfigs: LineConfig[] = [
  { dataKey: 'm1', name: 'M1(货币)', strokeWidth: 2.5 },
  { dataKey: 'm2', name: 'M2(货币和准货币)', strokeWidth: 2 },
  { dataKey: 'scissor', name: '剪刀差', strokeWidth: 2 },
];

export const ContentSlide27: React.FC = () => {
  return (
    <BaseContentSlide
      title="6月M1M2增速均回落，增速为2026年最低水平，主要为高基数引起"
      cardColumns={1}
      chartColumns={1}
    >
      <div className="flex flex-col h-full">
        <div className="mb-6 flex-shrink-0">
          <BaseCard delay="0ms" variant="accent" title="货币供应稳中有升">
            <p>
              6月M1M2增速回落主要为高基数影响（25年6月化债加速、信贷回暖导致M1增量大幅高于历史均值）。剔除高基数影响后M1M2剪刀差收窄，资金活化改善趋势未变。
            </p>
          </BaseCard>
        </div>

        <div className="flex-1 min-h-0">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={moneySupplyCombinedRecentData}
              title="M1、M2同比增速及“剪刀差”走势图"
              subtitle="数据来源：中国人民银行 | 单位：%"
              lines={lineConfigs}
              yAxisDomain={[-11, 10]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['M1(货币)', 'M2(货币和准货币)', '剪刀差']}
              xAxisTickCount={8}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
