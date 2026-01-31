import React from 'react';
import { BaseContentSlide, ChartContainer } from './BaseContentSlide';
import { BaseLineChart } from './BaseLineChart';
import { BaseCard } from './BaseCard';
import { moneySupplyData, moneySupplyScissorData } from '@/data/moneySupply';
import { chartColors } from '@/utils/chartColors';

export const ContentSlide34: React.FC = () => {
  return (
    <BaseContentSlide
      title={'12月M1增速滑落至3.8%，剪刀差扩至4.7%警示资金"定期化"'}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="剪刀差创新高" delay="200ms" variant="accent">
            M2同比增速在12月超预期反弹至 <span className="font-bold text-webank-blue">8.5%</span>（11月为8.0%），而M1同比增速从9月的7.2%一路下滑至12月的 <span className="font-bold text-webank-blue">3.8%</span>。两者剪刀差由三季度的1.2%迅速扩大至年末的 <span className="font-bold text-red-500">4.7%</span>，创年内新高。
          </BaseCard>
          <BaseCard title="基数压制与绝对量" delay="400ms">
            2024年下半年M1统计口径修订后数据上修，叠加当时化债资金集中投放，导致2025年Q4面临极高基数压制。若剔除基数，12月M1环比增加约<span className="font-bold text-webank-blue">2.6万亿</span>，绝对量表现尚可。
          </BaseCard>
          <BaseCard title="资金定期化" delay="600ms">
            在低通胀与资产价格波动环境下，企业与居民风险偏好下降，倾向于将活期资金转为定期存款或理财以锁定收益，导致M1向M2内部的迁移。
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-2 gap-6 min-h-0">
          <ChartContainer delay="800ms">
            <BaseLineChart
              data={moneySupplyData}
              title="2022-2025年中国货币供应量(M1/M2)同比"
              subtitle="同比增速单位为%"
              lines={[
                { dataKey: 'm1', name: 'M1(货币)', color: chartColors.primary, strokeWidth: 2 },
                { dataKey: 'm2', name: 'M2(货币和准货币)', color: chartColors.negative, strokeWidth: 2 },
              ]}
              yAxisDomain={[-5, 15]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['M1(货币)', 'M2(货币和准货币)']}
              xAxisTickCount={8}
            />
          </ChartContainer>
          <ChartContainer delay="1000ms">
            <BaseLineChart
              data={moneySupplyScissorData}
              title="2022-2025年中国货币供应量剪刀差走势"
              subtitle="同比增速单位为%"
              lines={[
                { dataKey: 'scissor', name: 'M1-M2剪刀差', color: chartColors.primary, strokeWidth: 2 },
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
