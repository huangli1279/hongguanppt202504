import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseCard } from '../base/BaseCard';
import { moneySupplyData, moneySupplyScissorData } from '@/data/moneySupply';

export const ContentSlide36: React.FC = () => {
  return (
    <BaseContentSlide
      title={'高基数拖累3月M1增速回落至5.1%，剪刀差小幅走扩至3.4%'}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-1 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="" delay="0ms" variant="accent">
            <p>
              3月M1同比增速回落至 <span className="font-bold text-webank-blue">5.1%</span>，主要受去年同期高基数与实体融资同比少增影响。M2同比增速落至 <span className="font-bold text-webank-blue">8.5%</span>，M1-M2剪刀差录得 <span className="font-bold text-red-500">-3.4%</span>，资金活化进程在1-2月反弹后小幅走扩。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={moneySupplyData}
              title="2022-2026Q1中国货币供应量(M1/M2)当月同比"
              subtitle="数据来源：中国人民银行 | 单位：%"
              lines={[
                { dataKey: 'm1', name: 'M1(货币)', strokeWidth: 2 },
                { dataKey: 'm2', name: 'M2(货币和准货币)', strokeWidth: 2 },
              ]}
              yAxisDomain={[-5, 15]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['M1(货币)', 'M2(货币和准货币)']}
              xAxisTickCount={8}
            />
          </ChartContainer>
          <ChartContainer delay="720ms">
            <BaseLineChart
              data={moneySupplyScissorData}
              title="2022-2026Q1中国货币供应量剪刀差走势"
              subtitle="数据来源：中国人民银行 | 单位：%"
              lines={[
                { dataKey: 'scissor', name: 'M1-M2剪刀差', strokeWidth: 2 },
              ]}
              yAxisDomain={[-12, 0]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              xAxisTickCount={8}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
