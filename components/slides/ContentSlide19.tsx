import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { BaseBarChart, BarConfig, BarLineConfig } from '../base/BaseBarChart';
import { newProjectInvestmentData, investmentFundingData, specialBondData } from '@/data/fixedAssetInvestment';

export const ContentSlide19: React.FC = () => {
  const newProjectLineConfigs: LineConfig[] = [
    { dataKey: 'newProjectTotal', name: '新开工项目计划总投资', strokeWidth: 2.5 },
  ];

  const fundingLineConfigs: LineConfig[] = [
    { dataKey: 'fixedAsset', name: '固定资产投资完成额', strokeWidth: 2.5, labelDY: -10 },
    { dataKey: 'totalFunding', name: '资金来源累计', strokeWidth: 2, labelDY: -10 },
    { dataKey: 'selfRaised', name: '自筹资金', strokeWidth: 2, labelDY: 16 },
    { dataKey: 'domesticLoan', name: '国内贷款', strokeWidth: 2, labelDY: 28 },
    { dataKey: 'stateBudget', name: '国家预算内资金', strokeWidth: 2, labelDY: 16 },
  ];

  const bondBarConfigs: BarConfig[] = [
    { dataKey: 'planned', name: '计划发行' },
    { dataKey: 'actual', name: '实际发行额' },
  ];
  const bondLineConfigs: BarLineConfig[] = [
    { dataKey: 'completionRate', name: '完成率', strokeWidth: 2.5, yAxisId: 'right', unit: '' },
  ];

  return (
    <BaseContentSlide
      title="投资端失速归因：项目前置透支叠加资金到位滞后，拖累二季度投资增速"
      cardColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-2 gap-3 mb-3 flex-shrink-0">
          <BaseCard title="① 年初项目前置透支" delay="0ms" variant="accent">
            <p>
              年初项目集中开工前置，对二季度投资形成透支。二季度新开工项目计划总投资累计同比<span className="text-green-600 font-semibold">下降29%</span>，同时，到位资金同比均下降。
            </p>
          </BaseCard>
          <BaseCard title="② 专项债节奏错配" delay="120ms">
            <p>
              一季度新增专项债发行进度达计划<span className="font-semibold">1.4倍</span>，二季度明显放缓（4-5月仅完成不足70%）。2月起土储、特殊新增债比例提高，对二季度投资增长形成拖累。
            </p>
          </BaseCard>
          <BaseCard title="③ 企业盈利→投资传导滞后" delay="240ms">
            <p>
              企业盈利→自筹资金传导滞后约<span className="font-semibold">1年</span>。25年规上工业企业利润同比走弱，虽四季度以来利润大增，但尚未转化为固定资产投资。
            </p>
          </BaseCard>
          <BaseCard title="④ 土地出让回落→压制购置费" delay="360ms">
            <p>
              年初土地出让收入回落，滞后<span className="font-semibold">3个月</span>压制土地购置费。固投其他费用1-6月累计负增<span className="text-green-600 font-semibold">8.9%</span>，与企业拿地支出下降对应。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 - 三列布局 */}
        <div className="flex-1 grid grid-cols-3 gap-4 min-h-0">
          {/* 新开工项目计划总投资增速 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={newProjectInvestmentData}
              title="新开工项目计划总投资增速"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={newProjectLineConfigs}
              yAxisDomain={[-35, 5]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['新开工项目计划总投资']}
              xAxisTicks={['2024-12', '2025-06', '2025-12', '2026-06']}
            />
          </ChartContainer>

          {/* 投资增速、资金到位增速、自筹资金增速 */}
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={investmentFundingData}
              title="投资增速、资金到位增速、自筹资金增速"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={fundingLineConfigs}
              yAxisDomain={[-20, 20]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['固定资产投资完成额', '资金来源累计', '自筹资金', '国内贷款', '国家预算内资金']}
              xAxisTicks={['2024-06', '2024-12', '2025-06', '2025-12', '2026-06']}
            />
          </ChartContainer>

          {/* 专项债发行情况 */}
          <ChartContainer delay="600ms">
            <BaseBarChart
              data={specialBondData}
              title="专项债情况"
              subtitle="数据来源：财政部 | 单位：亿元"
              bars={bondBarConfigs}
              lines={bondLineConfigs}
              xAxisKey="period"
              showYAxis={true}
              yAxisDomain={[0, 7000]}
              yAxisTickFormatter={(val) => String(val)}
              unit="亿元"
              showLabels={false}
              showLineYAxis={true}
              lineAxisDomain={[0, 2.5]}
              lineUnit=""
              lineYAxisTickFormatter={(val) => val.toFixed(1)}
              legendOrder={['计划发行', '实际发行额', '完成率']}
              barSize={10}
              xAxisAngle={-45}
              xAxisHeight={50}
              xAxisInterval={0}
              lineShowDot={true}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
