import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { moneySupplyCombinedRecentData } from '@/data/moneySupply';
import { chartColors } from '@/utils/chartColors';

// 左图：M1、M2同比走势
const m1m2Lines: LineConfig[] = [
  { dataKey: 'm1', name: 'M1同比', color: chartColors.primary, strokeWidth: 2.5 },
  { dataKey: 'm2', name: 'M2同比', color: chartColors.secondary, strokeWidth: 2 },
];

// 右图：M1-M2剪刀差折线
const scissorLines: LineConfig[] = [
  { dataKey: 'scissor', name: 'M1-M2剪刀差', color: chartColors.primary, strokeWidth: 2.5 },
];

export const ContentSlide34: React.FC = () => {
  return (
    <BaseContentSlide
      title="M1M2：M1回落至3.2%主要是高基数扰动，资金活化度仍低"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4 flex-shrink-0 grid grid-cols-2 gap-6">
          <BaseCard delay="0ms" variant="accent" title="M1 与 M2 双双回落，原因各异">
            <p>
              <strong>M1回落的三个原因：</strong>①去年9月M1环比大增
              <span className="text-red-600 font-bold">1.92万亿</span>、同比跳升至
              <span className="text-red-600 font-bold">7.2%</span>（55个月新高），今年同期仅增约
              <span className="text-webank-blue font-semibold">0.99万亿</span>，高基数是主要拖累；②9月股市调整（上证单月
              <span className="text-green-600 font-semibold">-3.6%</span>），资金活化放缓。
            </p>
            <p className="mt-2">
              <strong>M2同比回落：</strong>信贷派生放缓，叠加政府债发行提速后资金沉淀于财政存款、拨付偏慢，共同拖累M2增速。
            </p>
          </BaseCard>
          <BaseCard delay="200ms" variant="accent" title="剪刀差走阔 · 四季度展望">
            <p>
              M1-M2负向剪刀差重新走阔至4个百分点，资金活化程度明显减弱，微观主体经营活跃度和投资意愿待修复。
            </p>
            <p className="mt-2">
              四季度展望：政府债剩余额度与
              <span className="text-webank-blue font-semibold">5,500亿</span>
              结存限额待发、前期财政存款加快拨付、
              <span className="text-webank-blue font-semibold">8,000亿</span>
              政策性金融工具已投放完毕并进入配套融资落地期，共同推动社融增速企稳、M2增速温和回升。
            </p>
          </BaseCard>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="600ms" ariaLabel="M1、M2同比走势图">
            <BaseLineChart
              data={moneySupplyCombinedRecentData}
              title="M1、M2同比增速走势"
              subtitle="数据来源：中国人民银行 | 单位：%"
              lines={m1m2Lines}
              yAxisDomain={[-4, 10]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['M1同比', 'M2同比']}
              xAxisTickCount={8}
              highlightPeriods={['2026-09']}
            />
          </ChartContainer>
          <ChartContainer delay="700ms" ariaLabel="M1-M2剪刀差走势图">
            <BaseLineChart
              data={moneySupplyCombinedRecentData}
              title="M1-M2剪刀差走势"
              subtitle="数据来源：中国人民银行 | 单位：%"
              lines={scissorLines}
              yAxisDomain={[-11, 0]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['M1-M2剪刀差']}
              xAxisTickCount={8}
              highlightPeriods={['2026-09']}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
