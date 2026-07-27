import React from 'react';
import { BaseLineChart } from '../base/BaseLineChart';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { chartColors, industryColors } from '@/utils/chartColors';
import { gdpGrowthRecentData as gdpGrowthData, deflatorRecentData as deflatorData } from '../../data';

export const ContentSlide05: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          二季度GDP实际增速回落至4.3%，上半年GDP增速4.7%，
          <span className="text-webank-accent">平减指数回正</span>
        </>
      }
      cardColumns={2}
      cards={
        <>
          <BaseCard title="总量及增速" delay="0ms" variant="accent">
            <p>
              2026年二季度GDP <span className="font-bold">36.15万亿</span>，同比增长 <span className="font-bold text-red-600">4.3%</span>，GDP增速较一季度 <span className="font-bold">5%</span> 放缓。
              上半年GDP增速达 <span className="font-bold text-red-600">4.7%</span>，在全年"4.5%-5.0%"增长目标的区域。
            </p>
          </BaseCard>

          <BaseCard title="名义与实际的“温差”" delay="120ms">
            <p>
              二季度 GDP 名义增速 <span className="text-red-600 font-semibold">5.89%</span>、实际增速 <span className="font-bold">4.3%</span>，总量与第二产业平减指数同步由负转正，核心由 AI 产业链景气扩张、能源价格上行拉动，但向终端消费及资本投资的传导有限，微观层面类通缩压力有所缓解但尚未根本出清。
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
              title="GDP平减指数分项贡献拆解"
              subtitle="数据来源：国家统计局 | 单位：%"
              yAxisDomain={[-5, 4]}
              showYAxis={true}
              xAxisTickCount={deflatorData.length}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['整体', '第一产业', '第二产业', '第三产业']}
              lines={[
                { dataKey: 'overall', name: '整体', color: chartColors.senary, strokeWidth: 3, labelPosition: 'top', labelDY: -8 },
                { dataKey: 'primary', name: '第一产业', color: industryColors.primary, strokeWidth: 2, labelPosition: 'bottom', labelDY: 12 },
                { dataKey: 'secondary', name: '第二产业', color: industryColors.secondary, strokeWidth: 2, labelPosition: 'top', labelDY: -8 },
                { dataKey: 'tertiary', name: '第三产业', color: industryColors.tertiary, strokeWidth: 2, labelPosition: 'top', labelDY: -8 }
              ]}
            />
          </ChartContainer>
        </>
      }
    />
  );
};
