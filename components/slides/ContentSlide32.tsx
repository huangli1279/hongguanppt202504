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
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 flex-shrink-0 grid grid-cols-2 gap-6">
          <BaseCard delay="0ms" variant="accent" title="M1 与 M2 双双回落，原因各异">
            <p>
              <strong>M1同比回落：</strong>主要受去年同期化债加速落地形成的高基数扰动。
            </p>
            <p className="mt-2">
              <strong>M2同比回落：</strong>信贷派生放缓、政府债发行节奏偏慢等现实因素，共同压制了 M2 总量的扩张。
            </p>
          </BaseCard>
          <BaseCard delay="200ms" variant="accent" title="M1-M2 剪刀差边际收窄">
            <p>
              剔除 2025 年高基数扰动后，M1-M2 剪刀差有所收窄，资金活化趋势方向未变，但改善速率已明显放缓。
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
              subtitle="数据来源：中国人民银行｜单位：%｜虚线为剔除高基数｜备注：2025年6月M1增加5.03万亿，历史正常增量估约3.25万亿（取2020-2023年区间中值参考，24年偏低不纳入参考），参考正常增量计算增速及剪刀差"
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
