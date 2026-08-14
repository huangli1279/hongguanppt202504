import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { BaseBarChart, BarConfig } from '../base/BaseBarChart';
import { BaseCard } from '../base/BaseCard';
import { chartColors, seriesColors } from '@/utils/chartColors';
import { unemploymentRateData, flexibleEmploymentData, workTypeExpenditureData } from '@/data/employment';

export const ContentSlide38: React.FC = () => {
  const unemploymentLines: LineConfig[] = [
    { dataKey: 'overall', name: '全国城镇调查失业率', strokeWidth: 2.5 },
    { dataKey: 'age16_24', name: '16-24岁(不含在校生)', strokeWidth: 2 },
    { dataKey: 'age25_29', name: '25-29岁(不含在校生)', strokeWidth: 2 },
    { dataKey: 'age30_59', name: '30-59岁(不含在校生)', strokeWidth: 2 },
  ];

  const flexibleEmploymentLines: LineConfig[] = [
    {
      dataKey: 'actual',
      name: '灵活就业人员',
      color: chartColors.primary,
      strokeWidth: 2.5,
    },
    {
      dataKey: 'forecast',
      name: '预测(E)',
      color: chartColors.primary,
      strokeWidth: 2.5,
      strokeDasharray: '6 4',
    },
  ];

  const unemploymentInsuranceBars: BarConfig[] = [
    {
      dataKey: 'unemploymentInsurance',
      name: '领取失业金人数',
      color: seriesColors[0],
    },
  ];

  const workTypeExpenditureBars: BarConfig[] = [
    {
      dataKey: 'totalExpenditure',
      name: '总支出',
      color: seriesColors[1],
    },
  ];

  return (
    <BaseContentSlide
      title={<>就业变化：灵活就业快速增加，失业拉低居民消费</>}
      cardColumns={3}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-4 mb-6 flex-shrink-0">
          <BaseCard title="失业率" delay="0ms" variant="accent">
            <p>
              二季度失业率维持在<span className="text-red-500 font-semibold">5.0%-5.2%</span>，全年龄段失业率均较一季度呈现季节性回落，但16-24岁失业率长期维持在<span className="text-red-500 font-semibold">15%</span>的高位。2026年毕业生预计<span className="text-red-500 font-semibold">1270万</span>，继续创历史新高。
            </p>
          </BaseCard>
          <BaseCard title="灵活就业与失业保险" delay="120ms">
            <p>
              灵活就业人数从21年的<span className="text-red-500 font-semibold">2亿</span>拓展到25年的约<span className="text-red-500 font-semibold">2.8亿</span>，26年预计将到<span className="text-red-500 font-semibold">3.2亿</span>人，增长态势迅猛；与此同时，领取失业保险金人数由21年的<span className="text-red-500 font-semibold">259万</span>升至25年的<span className="text-red-500 font-semibold">557万</span>，就业稳定性承压、保障需求同步抬升。
            </p>
          </BaseCard>
          <BaseCard title="失业对支出的影响" delay="240ms">
            <p>
              调查显示，全职工作群体月均总支出<span className="text-red-500 font-semibold">3521</span>元，失业3个月以内、3个月以上分别降低<span className="text-red-500 font-semibold">14.0%</span>、<span className="text-red-500 font-semibold">16.9%</span>，失业时间越长压制越明显。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-3 gap-4 min-h-0">
          <ChartContainer delay="600ms">
            <BaseLineChart
              data={unemploymentRateData}
              title="城镇调查失业率（分年龄段）"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={unemploymentLines}
              yAxisDomain={[0, 20]}
              showYAxis={true}
              xAxisTickCount={8}
              legendOrder={[
                '全国城镇调查失业率',
                '16-24岁(不含在校生)',
                '25-29岁(不含在校生)',
                '30-59岁(不含在校生)',
              ]}
              unit="%"
            />
          </ChartContainer>

          <div className="flex flex-col gap-3 min-h-0">
            <ChartContainer delay="600ms" className="flex-1 min-h-0">
              <BaseLineChart
                data={flexibleEmploymentData}
                title="中国灵活就业人员规模变化"
                subtitle="数据来源：公开资料整理 | 单位：亿人；虚线为预测值"
                lines={flexibleEmploymentLines}
                yAxisDomain={[1, 3.5]}
                showYAxis={true}
                yAxisTickFormatter={(val) => `${val}`}
                xAxisTicks={[
                  '2015年',
                  '2017',
                  '2019',
                  '2020',
                  '2021',
                  '2022',
                  '2023',
                  '2024',
                  '2025',
                  '2026(E)',
                ]}
                highlightPeriods={[
                  '2015年',
                  '2017',
                  '2019',
                  '2020',
                  '2021',
                  '2022',
                  '2023',
                  '2024',
                ]}
                showLegend={false}
                unit="亿人"
              />
            </ChartContainer>
            <ChartContainer delay="720ms" className="flex-1 min-h-0">
              <BaseBarChart
                data={flexibleEmploymentData.filter((d) => d.unemploymentInsurance != null)}
                title="领取失业保险金人数"
                subtitle="数据来源：Wind | 单位：万人"
                bars={unemploymentInsuranceBars}
                xAxisKey="period"
                showYAxis={true}
                yAxisDomain={[0, 650]}
                yAxisTickFormatter={(val) => `${val}`}
                unit="万人"
                showLabels={false}
                showLegend={false}
                barSize={16}
                xAxisAngle={-35}
                xAxisHeight={40}
                xAxisInterval={0}
              />
            </ChartContainer>
          </div>

          <ChartContainer delay="840ms">
            <div className="flex flex-col h-full min-h-0">
              <div className="flex-1 min-h-0">
                <BaseBarChart
                  data={workTypeExpenditureData}
                  title="不同工作类型总支出"
                  subtitle="数据来源：调查数据 | 单位：元"
                  bars={workTypeExpenditureBars}
                  xAxisKey="category"
                  showYAxis={true}
                  yAxisDomain={[0, 4000]}
                  yAxisTickFormatter={(val) => `${val}`}
                  unit="元"
                  showLabels={true}
                  labelFormatter={(val) => `${val}`}
                  legendOrder={['总支出']}
                  barSize={28}
                  xAxisAngle={-30}
                  xAxisHeight={55}
                  xAxisInterval={0}
                />
              </div>
              <p className="mt-1 flex-shrink-0 text-[10px] leading-snug text-slate-500">
                注：报告出自《2026年一季度中国家庭财富与消费报告》厦门大学×蚂蚁集团研究院
              </p>
            </div>
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
