import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import {
  aiPolicyCategoryStyles,
  aiPolicyDynamicsData,
  aiPolicyTrendNote,
  AiPolicyCategory,
} from '@/data/aiPolicyDynamics';

const policyColumns: ColumnConfig[] = [
  {
    key: 'category',
    title: '分类',
    align: 'center',
    width: '88px',
    render: (value: AiPolicyCategory) => {
      const style = aiPolicyCategoryStyles[value];
      return (
        <span
          className="inline-block rounded px-1.5 py-0.5 text-[10px] font-semibold leading-none whitespace-nowrap"
          style={{ color: style.text, backgroundColor: style.bg }}
        >
          {value}
        </span>
      );
    },
  },
  {
    key: 'date',
    title: '发布时间',
    align: 'center',
    width: '92px',
  },
  {
    key: 'title',
    title: '文件名',
    align: 'left',
  },
];

const horizonStages = [
  {
    phase: '短期',
    effect: '跟踪外部资本开支与兑现指标',
    netImpact: '云厂商Capex与AI变现效率',
    detail:
      '云厂商资本支出增速、AI收入/资本支出比、推理需求、数据中心利用率与租金、头部FCF覆盖率、债务融资占比及信用利差。',
    tone: 'negative' as const,
  },
  {
    phase: '中期',
    effect: '畅通生产率向宏观扩散的四渠道',
    netImpact: '硅基供给扩张、碳基收入约束',
    detail:
      '价格、工资、投资与就业、财政四渠道需打通；核心矛盾是"硅基供给扩张、碳基收入约束"。',
    tone: 'neutral' as const,
  },
  {
    phase: '长期',
    effect: '知识生产与物理生产双路径',
    netImpact: '两条路径均面临落地约束',
    detail:
      '知识生产（辅助→自主发现）与物理生产（机器人/自动驾驶/智能制造）两条路径并行推进，均面临落地约束。',
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

export const ContentSlide47: React.FC = () => {
  return (
    <BaseContentSlide
      title="后续需关注外部指标与国内政策"
      cardColumns={1}
      headerClassName="!mb-2"
      className="!p-8 sm:!p-10"
    >
      <div className="flex flex-col h-full min-h-0 pb-4">
        {/* 左右两栏布局：国外政策总结 + 国内政策总结 */}
        <div className="flex items-stretch gap-2 mb-2 flex-shrink-0 min-h-[120px]">
          {/* 左侧：国外政策总结 */}
          <div className="flex-1 flex flex-col">
            <BaseCard
              title="多维观察框架"
              delay="0ms"
              variant="default"
              className="!p-2.5 !gap-1 flex-1"
            >
              <div className="flex items-stretch gap-0 flex-1">
                {horizonStages.map((stage, i) => {
                  const style = toneStyles[stage.tone];
                  return (
                    <React.Fragment key={stage.phase}>
                      <div
                        className={`flex-1 rounded-lg border px-2 py-1.5 flex flex-col
                          animate-fade-in-up fill-mode-forwards opacity-0 ${style.card}`}
                        style={{ animationDelay: `${120 + i * 80}ms` }}
                      >
                        <span
                          className={`inline-flex self-start rounded px-1.5 py-0.5 text-[10px] font-bold ${style.badge}`}
                        >
                          {stage.phase}
                        </span>
                        <p className={`mt-1 text-[11px] font-bold leading-tight ${style.effect}`}>
                          {stage.effect}
                        </p>
                        <p className={`mt-0.5 text-[10px] font-semibold ${style.impact}`}>
                          {stage.netImpact}
                        </p>
                        <p className="mt-0.5 text-[9px] leading-snug text-slate-600">
                          {stage.detail}
                        </p>
                      </div>
                      {i < horizonStages.length - 1 && <StageArrow />}
                    </React.Fragment>
                  );
                })}
              </div>
            </BaseCard>
          </div>

          {/* 右侧：国内政策总结 */}
          <div className="flex-1 flex flex-col">
            <BaseCard
              title="国内政策总结：贯通上中下游全链条，全面落地 AI+ 战略"
              delay="60ms"
              variant="accent"
              className="!p-2.5 !gap-1 flex-1"
            >
              <div className="flex flex-col gap-1.5 flex-1">
                <p className="text-[12px] leading-relaxed">
                  国家持续支持、扶持人工智能
                  <span className="font-bold text-webank-blue">全链条发展</span>
                  ，统筹推动 AI 贯通
                  <span className="font-semibold text-webank-blue">上游基础技术攻关</span>
                  、
                  <span className="font-semibold text-webank-accent">中游产业新旧升级</span>
                  、
                  <span className="font-semibold text-webank-accent">下游民生消费就业应用</span>
                  全链条。
                </p>
                <p className="text-[12px] leading-relaxed">
                  多措并举促进
                  <span className="font-semibold text-webank-blue">技术迭代</span>
                  、
                  <span className="font-semibold text-webank-blue">产业融合</span>
                  与
                  <span className="font-semibold text-webank-blue">场景普惠落地</span>
                  ，全面落地
                  <span className="font-bold text-webank-blue">"AI+"</span>
                  战略，使其成为我国
                  <span className="font-semibold text-webank-accent">新旧动能转换</span>
                  、培育
                  <span className="font-semibold text-webank-accent">新质生产力</span>
                  的核心支撑。
                </p>
              </div>
            </BaseCard>
          </div>
        </div>

        <div className="flex-1 min-h-0 flex flex-col">
          <ChartContainer delay="360ms" ariaLabel="国内AI政策动态汇总表" className="flex-1 min-h-0">
            <div className="flex h-full w-full flex-col min-h-0">
              <div className="flex-1 min-h-0">
                <BaseTable
                  data={aiPolicyDynamicsData}
                  columns={policyColumns}
                  title="国内AI政策动态汇总 (2025—2026)"
                  colorizeNumbers={false}
                  striped
                  rowHeight="auto"
                  cellClassName="!px-2 !py-0 text-[10px] leading-tight"
                  headerCellClassName="!px-2 !py-1 whitespace-nowrap text-[11px] leading-tight"
                />
              </div>
              <p className="mt-1 flex-shrink-0 text-[10px] leading-snug text-slate-500">
                {aiPolicyTrendNote}
              </p>
            </div>
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
