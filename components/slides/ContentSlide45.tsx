import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseBarChart } from '../base/BaseBarChart';
import { BaseTable, ColumnConfig } from '../base/BaseTable';
import { jobDemandYoyData } from '@/data/employment';
import {
  industrialRevolutionTableRows,
  irPhaseStyles,
  IRTableRow,
  IRTone,
} from '@/data/industrialRevolutionEmployment';

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

// 阶段徽章渲染
const PhaseBadge: React.FC<{ phase: string; tone: IRTone }> = ({ phase, tone }) => {
  const style = irPhaseStyles[tone];
  return (
    <span className={`inline-block rounded px-0.5 py-0.5 text-[8px] font-semibold leading-none ${style.badge}`}>
      {phase}
    </span>
  );
};

// 本次AI革命与前几次工业革命的核心差异（精简版）
const differencePoints: { num: string; title: string; content: string }[] = [
  {
    num: '1',
    title: '替代白领脑力工作',
    content: '前几次替代体力劳动；AI直接冲击法律、会计、编程等知识型岗位。',
  },
  {
    num: '2',
    title: '速度数量级差异',
    content: 'ChatGPT 2个月破亿用户，远超历史技术普及速度。',
  },
  {
    num: '3',
    title: '转型门槛抬高',
    content: '初级白领岗位收缩，晋升阶梯断裂，再培训成本高。',
  },
  {
    num: '4',
    title: '同步冲击',
    content: '跨行业、跨城市同时爆发，缺少地理与产业缓冲。',
  },
  {
    num: '5',
    title: 'K型撕裂',
    content: '受益高度集中于少数人，财富不平等显著加剧。',
  },
];

const concernsList: string[] = [
  '供需错配问题严重；白领里的"流水线岗位"塌了，中产上升路也断了',
];

// 历次工业革命表格列配置：每行 = 一次工业革命，三列展示三阶段
const irTableColumns: ColumnConfig[] = [
  {
    key: 'epoch',
    title: '工业革命',
    width: 68,
    align: 'center',
    render: (value: string, row: IRTableRow) => (
      <div className="flex flex-col items-center leading-tight">
        <span className="text-[9px] font-bold text-slate-800 whitespace-pre-line">{value}</span>
        <span className="text-[8px] text-slate-500 mt-0.5">{row.period}</span>
      </div>
    ),
  },
  {
    key: 'phase1',
    title: '替代主导',
    width: 130,
    align: 'center',
    children: [
      {
        key: 'phase1_inner',
        title: '替代主导',
        width: 130,
        align: 'center',
        render: (_: any, row: IRTableRow) => (
          <div className="flex flex-col gap-0.5 w-full">
            <PhaseBadge phase={row.phase1} tone={row.tone1} />
            <div className="text-[8px] text-slate-500 leading-tight">{row.duration1}</div>
            <div className="text-[8px] text-red-500 leading-tight mt-0.5">↓ {row.displaced1}</div>
            <div className="text-[8px] text-slate-500 leading-tight">净：<span className="text-red-600 font-medium">{row.net1}</span></div>
          </div>
        ),
      },
    ],
  },
  {
    key: 'phase2',
    title: '互补显现',
    width: 130,
    align: 'center',
    children: [
      {
        key: 'phase2_inner',
        title: '互补显现',
        width: 130,
        align: 'center',
        render: (_: any, row: IRTableRow) => (
          <div className="flex flex-col gap-0.5 w-full">
            <PhaseBadge phase={row.phase2} tone={row.tone2} />
            <div className="text-[8px] text-slate-500 leading-tight">{row.duration2}</div>
            <div className="text-[8px] text-webank-blue leading-tight">↑ {row.emerging2}</div>
            <div className="text-[8px] text-slate-500 leading-tight">净：<span className="text-webank-blue font-medium">{row.net2}</span></div>
          </div>
        ),
      },
    ],
  },
  {
    key: 'phase3',
    title: '创造主导',
    width: 130,
    align: 'center',
    children: [
      {
        key: 'phase3_inner',
        title: '创造主导',
        width: 130,
        align: 'center',
        render: (_: any, row: IRTableRow) => (
          <div className="flex flex-col gap-0.5 w-full">
            <PhaseBadge phase={row.phase3} tone={row.tone3} />
            <div className="text-[8px] text-slate-500 leading-tight">{row.duration3}</div>
            <div className="text-[8px] text-emerald-600 leading-tight">↑ {row.emerging3}</div>
            <div className="text-[8px] text-slate-500 leading-tight">净：<span className="text-emerald-700 font-medium">{row.net3}</span></div>
          </div>
        ),
      },
    ],
  },
];

export const ContentSlide45: React.FC = () => {
  return (
    <BaseContentSlide
      title="风险判断：对就业的影响是阶段式，主要体现为替代、互补和创造三种效应，三者权重将随时间推移而变化"
      cardColumns={1}
      headerClassName="!mb-1.5"
      className="!p-6 sm:!p-8"
    >
      <div className="flex flex-col h-full min-h-0">
        {/* 左右双栏布局 */}
        <div className="flex gap-1.5 mb-1.5 flex-shrink-0">
          {/* 左侧：导语 + 三阶段时间轴（约55%） */}
          <div className="w-[55%] flex flex-col gap-1.5 min-h-0">
            {/* 导语卡片 */}
            <BaseCard
              title="对就业影响是阶段式"
              delay="0ms"
              variant="accent"
              className="!p-2 !gap-0.5"
            >
              <p className="text-[11px] leading-snug">
                AI对就业并非单向冲击，而是
                <span className="font-semibold text-webank-blue">替代、互补、创造</span>
                三种效应随时间权重切换：近端替代主导、中端互补抬升、远端创造接力，但技能结构错配将贯穿全过程。
              </p>
            </BaseCard>

            {/* 三阶段时间轴卡片 */}
            <div className="flex items-stretch gap-0">
              {employmentStages.map((stage, i) => {
                const style = toneStyles[stage.tone];
                return (
                  <React.Fragment key={stage.phase}>
                    <div
                      className={`flex-1 rounded-lg border px-2 py-1.5 flex flex-col
                        animate-fade-in-up fill-mode-forwards opacity-0 ${style.card}`}
                      style={{ animationDelay: `${120 + i * 80}ms` }}
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
          </div>

          {/* 右侧：本次与前几次不同（约45%） */}
          <div className="flex-1 flex flex-col min-h-0">
            <BaseCard
              title="本次与前几次工业革命的核心差异"
              delay="360ms"
              variant="accent"
              className="!p-2 !gap-1 h-full flex-1 min-h-0 overflow-hidden"
            >
              <div className="flex flex-col gap-1 overflow-y-auto pr-1">
                {differencePoints.map((point) => (
                  <div
                    key={point.num}
                    className="text-[9.5px] leading-snug"
                  >
                    <span className="font-bold text-webank-blue">
                      {point.num}. {point.title}
                    </span>
                    <span className="text-slate-600 ml-1">— {point.content}</span>
                  </div>
                ))}

                {/* 担忧内容 */}
                <div className="mt-1.5 pt-1.5 border-t border-red-200">
                  <p className="text-[9.5px] font-bold text-red-600 mb-1">
                    核心担忧
                  </p>
                  <ul className="text-[8.5px] text-slate-700 space-y-0.5 leading-snug">
                    {concernsList.map((item, idx) => (
                      <li key={idx} className="flex gap-1">
                        <span className="text-red-500 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>

        {/* 下方：左侧历史对照表格 + 右侧柱状图 */}
        <div className="flex-1 min-h-0 flex gap-1.5">
          {/* 左侧：历次工业革命历史对照表格 */}
          <ChartContainer
            delay="480ms"
            ariaLabel="历次工业革命就业三段式影响参照"
            className="w-[38%] min-h-0 flex flex-col"
          >
            <BaseTable
              data={industrialRevolutionTableRows}
              columns={irTableColumns}
              title="历次工业革命：就业三段式影响参照"
              rowHeight="auto"
              titleBlockClassName="!mb-0.5"
              cellClassName="!px-1 !py-1 text-[8px] leading-tight"
              headerCellClassName="!px-1 !py-1 text-[8px] leading-tight"
              headerBgColor="#1B4F72"
              stickyHeader
            />
          </ChartContainer>

          {/* 右侧：柱状图 */}
          <ChartContainer delay="400ms" ariaLabel="国内招聘网站岗位需求同比变化" className="flex-1 min-h-0">
            <BaseBarChart
              data={jobDemandYoyData}
              title="国内招聘网站：初级/重复岗位需求下降，AI相关岗位大幅上升"
              subtitle="数据来源：BOSS直聘、猎聘、IMF《一场新的工业革命？》(2025)；Frey &amp; Osborne (2013)；WEF《未来就业报告》(2023)；Goldin &amp; Katz (1998) | 单位：%"
              subtitleClassName="!text-[5px]"
              xAxisKey="category"
              bars={[{ dataKey: 'yoy', name: '同比变化', color: '#1B4F72' }]}
              yAxisDomain={[-100, 250]}
              showYAxis
              showReferenceLine
              referenceLineY={0}
              showLabels={false}
              showLegend
              barSize={8}
              xAxisAngle={-55}
              xAxisHeight={50}
              xAxisInterval={0}
              xAxisTickFontSize={7}
              legendItems={[
                { value: 'AI/增长岗位', color: '#1B4F72' },
                { value: '初级/重复岗位', color: '#E07A5F' },
              ]}
              legendFontSize={8}
              legendGap={8}
            />
          </ChartContainer>
        </div>
      </div>

      {/* 底部空位，保持布局 */}
      <div className="h-4" />
    </BaseContentSlide>
  );
};