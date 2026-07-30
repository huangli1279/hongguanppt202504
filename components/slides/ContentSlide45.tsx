import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseBarChart } from '../base/BaseBarChart';
import { jobDemandYoyData } from '@/data/employment';

const employmentStages = [
  {
    phase: '未来5年',
    effect: '替代效应占主导',
    netImpact: '净就业影响为负',
    detail: '尤其是标准化认知岗位承压明显，招聘端初级、重复性岗位需求率先收缩。',
    tone: 'negative' as const,
  },
  {
    phase: '5—10年',
    effect: '互补效应逐步显现',
    netImpact: '净就业影响转正',
    detail: 'AI作为工具提升劳动者生产率，人机协作成为主流工作形态，岗位价值向高附加环节迁移。',
    tone: 'neutral' as const,
  },
  {
    phase: '10年以上',
    effect: '创造效应占主导',
    netImpact: '结构性错配并存',
    detail: '新岗位技能要求与被替代岗位存在错配，“有岗位、缺技能”与“有技能、缺岗位”可能并存。',
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
  <div className="flex items-center justify-center flex-shrink-0 w-5 self-center">
    <svg viewBox="0 0 20 12" className="w-5 h-3" fill="none">
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

export const ContentSlide45: React.FC = () => {
  return (
    <BaseContentSlide
      title="风险判断：对就业的影响是阶段式，主要体现为替代、互补和创造三种效应，三者权重将随时间推移而变化"
      cardColumns={1}
      headerClassName="!mb-2"
      className="!p-8 sm:!p-10"
    >
      <div className="flex flex-col h-full min-h-0 pb-4">
        <BaseCard
          title="对就业影响是阶段式"
          delay="0ms"
          variant="accent"
          className="!p-2.5 !gap-1 mb-2 flex-shrink-0"
        >
          <p className="text-[12px] leading-snug">
            AI对就业并非单向冲击，而是
            <span className="font-semibold text-webank-blue">替代、互补、创造</span>
            三种效应随时间权重切换：近端替代主导、中端互补抬升、远端创造接力，但技能结构错配将贯穿全过程。
          </p>
        </BaseCard>

        <div className="flex items-stretch gap-0 mb-2 flex-shrink-0">
          {employmentStages.map((stage, i) => {
            const style = toneStyles[stage.tone];
            return (
              <React.Fragment key={stage.phase}>
                <div
                  className={`flex-1 rounded-lg border px-2.5 py-2 flex flex-col
                    animate-fade-in-up fill-mode-forwards opacity-0 ${style.card}`}
                  style={{ animationDelay: `${120 + i * 80}ms` }}
                >
                  <span
                    className={`inline-flex self-start rounded px-1.5 py-0.5 text-[10px] font-bold ${style.badge}`}
                  >
                    {stage.phase}
                  </span>
                  <p className={`mt-1.5 text-[13px] font-bold leading-tight ${style.effect}`}>
                    {stage.effect}
                  </p>
                  <p className={`mt-0.5 text-[11px] font-semibold ${style.impact}`}>
                    {stage.netImpact}
                  </p>
                  <p className="mt-1 text-[10px] leading-snug text-slate-600">
                    {stage.detail}
                  </p>
                </div>
                {i < employmentStages.length - 1 && <StageArrow />}
              </React.Fragment>
            );
          })}
        </div>

        <div className="flex-1 min-h-0">
          <ChartContainer delay="400ms" ariaLabel="国内招聘网站岗位需求同比变化">
            <BaseBarChart
              data={jobDemandYoyData}
              title="国内招聘网站：初级/重复岗位需求下降，AI相关岗位大幅上升"
              subtitle="数据来源：BOSS直聘、猎聘 | 单位：%"
              xAxisKey="category"
              bars={[{ dataKey: 'yoy', name: '同比变化', color: '#1B4F72' }]}
              yAxisDomain={[-100, 750]}
              showYAxis
              showReferenceLine
              referenceLineY={0}
              showLabels={false}
              showLegend
              barSize={14}
              xAxisAngle={-55}
              xAxisHeight={88}
              xAxisInterval={0}
              legendItems={[
                { value: 'AI/增长岗位', color: '#1B4F72' },
                { value: '初级/重复岗位', color: '#E07A5F' },
              ]}
            />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
