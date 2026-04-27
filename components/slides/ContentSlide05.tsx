import React from 'react';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { chartColors } from '@/utils/chartColors';
import { gdpGrowthRecentData as gdpGrowthData, deflatorRecentData as deflatorData } from '../../data';

export const ContentSlide05: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          一季度GDP稳增5.0%实现良好开局，
          <span className="text-webank-accent">名义增速与实际增速差距收窄</span>
        </>
      }
      cardColumns={2}
      cards={
        <>
          <BaseCard title="总量定调" delay="0ms" variant="accent">
            <p>
              2026年一季度GDP达 <span className="font-bold">33.4万亿元</span>，按不变价格计算同比增长 <span className="font-bold">5.0%</span>，环比增长 <span className="font-bold">1.3%</span>，实现“十五五”开局之年平稳起步。
              实际GDP增速较去年四季度回升 <span className="font-bold">0.5个百分点</span>，达到全年“4.5%-5.0%”增长目标的上限区域。
            </p>
          </BaseCard>

          <BaseCard title="名义与实际差距收窄" delay="120ms">
            <p>
              一季度名义GDP增速大幅修复至 <span className="text-red-600 font-semibold">4.9%</span>，较去年四季度 <span className="font-bold">3.9%</span> 明显回升；GDP平减指数回升至 <span className="font-bold">-0.06%</span>，整体已基本回到零值附近，经济逐步摆脱通缩、向温和通胀区间靠拢，企业盈利与微观体感的“温差”正在改善。
            </p>
          </BaseCard>
        </>
      }
      chartColumns={2}
      charts={
        <>
          <ChartContainer delay="720ms">
            <BaseLineChart
              data={gdpGrowthData}
              title="GDP不变价与现价当季同比增速"
              subtitle="数据来源：国家统计局 | 单位：%"
              yAxisDomain={[0, 8]}
              showYAxis={true}
              xAxisTickCount={gdpGrowthData.length}
              legendOrder={['GDP不变价', 'GDP现价']}
              lines={[
                { dataKey: 'real', name: 'GDP不变价', strokeWidth: 2, labelPosition: 'top', labelDY: -8 },
                { dataKey: 'nominal', name: 'GDP现价', strokeWidth: 2, labelPosition: 'bottom', labelDY: 14 }
              ]}
            />
          </ChartContainer>
          <ChartContainer delay="840ms">
            <BaseLineChart
              data={deflatorData}
              title="GDP平减指数"
              subtitle="数据来源：国家统计局 | 单位：%"
              yAxisDomain={[-5, 2]}
              showYAxis={true}
              xAxisTickCount={deflatorData.length}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['整体']}
              lines={[
                { dataKey: 'overall', name: '整体', color: chartColors.senary, strokeWidth: 3, labelPosition: 'top' }
              ]}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
