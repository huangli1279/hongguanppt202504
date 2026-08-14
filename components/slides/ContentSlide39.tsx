import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart, BarConfig } from '../base/BaseBarChart';
import { jobDemandYoyData, JobDemandYoyDataPoint } from '@/data/employment';
import { industryAvgSalaryData, IndustryAvgSalaryDataPoint } from '@/data/consumerConfidence';

// 选取代表性岗位数据，按 yoy 同比变化从大到小排序
const selectedJobDemandData: JobDemandYoyDataPoint[] = [
  jobDemandYoyData.find(d => d.category === 'AI工程师')!,
  jobDemandYoyData.find(d => d.category === 'AI产品经理')!,
  jobDemandYoyData.find(d => d.category === '提示词工程师')!,
  jobDemandYoyData.find(d => d.category === 'AI智能体开发')!,
  jobDemandYoyData.find(d => d.category === 'AI人机训练')!,
  jobDemandYoyData.find(d => d.category === '数据标注/AI训练师')!,
  jobDemandYoyData.find(d => d.category === '传统运维工程师')!,
  jobDemandYoyData.find(d => d.category === '初级软件测试')!,
  jobDemandYoyData.find(d => d.category === '初级图像算法')!,
  jobDemandYoyData.find(d => d.category === '初级机器学习')!,
  jobDemandYoyData.find(d => d.category === '客户服务')!,
  jobDemandYoyData.find(d => d.category === '编辑/编校')!,
].sort((a, b) => b.yoy - a.yoy);

// 行业平均工资数据（用于展示收入分化）
interface SalaryGrowthPoint {
  period: string;
  itSoftwareAi: number;
  finance: number;
  nationalNonPrivate: number;
  realEstate: number;
}

const salaryGrowthData: SalaryGrowthPoint[] = industryAvgSalaryData.map(d => ({
  period: d.period,
  itSoftwareAi: d.itSoftwareAi,
  finance: d.finance,
  nationalNonPrivate: d.nationalNonPrivate,
  realEstate: d.realEstate,
}));

const jobDemandBars: BarConfig[] = [
  { dataKey: 'yoy', name: '同比变化', color: '#1B4F72' },
];

const salaryBars: BarConfig[] = [
  { dataKey: 'itSoftwareAi', name: '计算机(AI相关)', color: '#1B4F72' },
  { dataKey: 'finance', name: '金融业', color: '#2E86AB' },
  { dataKey: 'nationalNonPrivate', name: '全国非私营均值', color: '#8ECAE6' },
  { dataKey: 'realEstate', name: '房地产业', color: '#E07A5F' },
];

// 三阶段就业影响时间轴
const employmentStages = [
  {
    phase: '未来5年',
    effect: '替代效应占主导',
    netImpact: '净就业影响为负',
    detail: '标准化认知岗位承压明显，初级、重复性岗位需求率先收缩。',
    tone: 'negative' as const,
  },
  {
    phase: '5—10年',
    effect: '互补效应逐步显现',
    netImpact: '净就业影响转正',
    detail: 'AI作为工具提升劳动者生产率，人机协作成为主流工作形态。',
    tone: 'neutral' as const,
  },
  {
    phase: '10年以上',
    effect: '创造效应占主导',
    netImpact: '结构性错配并存',
    detail: '"有岗位、缺技能"与"有技能、缺岗位"可能并存。',
    tone: 'positive' as const,
  },
];

const toneStyles = {
  negative: {
    card: 'bg-gradient-to-b from-red-50 to-orange-50/70 border-red-200',
    badge: 'bg-red-500 text-white',
    effect: 'text-red-600',
    impact: 'text-red-500',
  },
  neutral: {
    card: 'bg-gradient-to-b from-sky-50 to-blue-50/60 border-sky-200',
    badge: 'bg-webank-blue text-white',
    effect: 'text-webank-blue',
    impact: 'text-webank-accent',
  },
  positive: {
    card: 'bg-gradient-to-b from-emerald-50 to-teal-50/60 border-emerald-200',
    badge: 'bg-emerald-600 text-white',
    effect: 'text-emerald-700',
    impact: 'text-emerald-600',
  },
};

const StageArrow: React.FC = () => (
  <div className="flex items-center justify-center flex-shrink-0 w-4 self-center">
    <svg viewBox="0 0 20 12" className="w-4 h-3" fill="none">
      <path
        d="M1 6 H15 M12 2 L16 6 L12 10"
        stroke="#7EB8D8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export const ContentSlide39: React.FC = () => {
  return (
    <BaseContentSlide
      title="AI冲击与就业结构特征"
      cardColumns={3}
      headerClassName="!mb-2"
    >
      <div className="flex flex-col h-full min-h-0">
        {/* 卡片区域 - 2列布局：岗位替代 + 消费K型 */}
        <div className="grid grid-cols-2 gap-3 mb-3 flex-shrink-0">
          <BaseCard title="岗位替代" delay="0ms" variant="accent" className="!p-2.5 !gap-1">
            <p className="text-[11px] leading-snug">
              AI替代效应已在初级/重复性岗位显现，2024-2025年客服、基础文案等岗位招聘量同比降
              <span className="text-red-500 font-semibold">15%-30%</span>
              ；总体岗位供给<span className="font-semibold">持续收缩</span>，就业市场呈现
              <span className="text-webank-blue font-semibold">"此消彼长"</span>
              的结构性分化；AI相关岗位需求增长显著，提示词工程师增长4.86倍。
            </p>
          </BaseCard>
          <BaseCard title="收入分化" delay="120ms" className="!p-2.5 !gap-1">
            <p className="text-[11px] leading-snug">
              行业工资增速：
              <span className="text-webank-blue font-semibold">计算机AI相关</span>
              岗位收入增长领跑，2025年增长4.1%；金融业稳健增长；
              <span className="text-green-500 font-semibold">房地产收入增速转负</span>
              ，收入的分化预计在今年持续显现。
            </p>
          </BaseCard>
        </div>

        {/* 三阶段时间轴：替代→互补→创造 */}
        <div className="flex items-stretch gap-0 mb-3 flex-shrink-0">
          {employmentStages.map((stage, i) => {
            const style = toneStyles[stage.tone];
            return (
              <React.Fragment key={stage.phase}>
                <div
                  className={`flex-1 rounded-lg border px-2 py-1.5 flex flex-col
                    animate-fade-in-up fill-mode-forwards opacity-0 ${style.card}`}
                  style={{ animationDelay: `${240 + i * 80}ms` }}
                >
                  <span
                    className={`inline-flex self-start rounded px-1 py-0.5 text-[9px] font-bold ${style.badge}`}
                  >
                    {stage.phase}
                  </span>
                  <p className={`mt-1 text-[12px] font-bold leading-tight ${style.effect}`}>
                    {stage.effect}
                  </p>
                  <p className={`mt-0.5 text-[10px] font-semibold ${style.impact}`}>
                    {stage.netImpact}
                  </p>
                  <p className="mt-0.5 text-[9px] leading-snug text-slate-600">
                    {stage.detail}
                  </p>
                </div>
                {i < employmentStages.length - 1 && <StageArrow />}
              </React.Fragment>
            );
          })}
        </div>

        {/* 图表区域 - 2列布局 */}
        <div className="flex-1 min-h-0 grid grid-cols-2 gap-3">
          {/* 左侧：岗位需求对比柱状图 */}
          <ChartContainer delay="600ms" ariaLabel="就业市场的冰与火：岗位需求同比变化" className="h-full">
            <BaseBarChart
              data={selectedJobDemandData}
              title="就业市场的岗位需求同比变化"
              subtitle="数据来源：BOSS直聘、猎聘 | 单位：%"
              subtitleClassName="!text-[5px]"
              xAxisKey="category"
              bars={jobDemandBars}
              yAxisDomain={[-100, 400]}
              showYAxis
              showReferenceLine
              referenceLineY={0}
              showLabels
              labelPosition="top"
              labelNegativePosition="bottom"
              showLegend={false}
              barSize={8}
              xAxisAngle={-50}
              xAxisHeight={60}
              xAxisInterval={0}
              xAxisTickFontSize={7}
            />
          </ChartContainer>

          {/* 右侧：行业工资分化柱状图 */}
          <ChartContainer delay="720ms" ariaLabel="分行业城镇非私营单位就业人员年平均工资" className="h-full">
            <BaseBarChart
              data={salaryGrowthData}
              title="分行业城镇非私营单位就业人员年平均工资"
              subtitle="数据来源：国家统计局 | 单位：万元"
              subtitleClassName="!text-[5px]"
              xAxisKey="period"
              bars={salaryBars}
              legendOrder={['计算机(AI相关)', '金融业', '全国非私营均值', '房地产业']}
              legendFontSize={7}
              yAxisDomain={[0, 30]}
              showYAxis
              yAxisTickFormatter={(val) => `${val}`}
              unit="万元"
              showLabels
              labelPosition="top"
              barSize={12}
              xAxisAngle={0}
              xAxisHeight={30}
              xAxisInterval={0}
              xAxisTickFontSize={8}
            />
          </ChartContainer>
        </div>

        {/* 底部空位 */}
      </div>
    </BaseContentSlide>
  );
};
