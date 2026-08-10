// 历次工业革命对就业的三段式影响参照数据
// 数据来源：IMF《一场新的工业革命？》(2025)；Frey & Osborne (2013) Oxford Martin School；
// World Economic Forum《未来就业报告》(2023)；Goldin & Katz (1998)
// 注：数据为近似值，仅供参照

export type IRPhase = '替代主导' | '互补显现' | '创造主导';
export type IRTone = 'negative' | 'neutral' | 'positive';

export interface IRStage {
  phase: IRPhase;
  tone: IRTone;
  /** 典型持续时间 */
  typicalDuration: string;
  /** 主要被替代岗位 */
  keyDisplaced: string;
  /** 主要新兴岗位 */
  keyEmerging: string;
  /** 净就业影响 */
  employmentNet: string;
}

export interface IREpoch {
  /** 工业革命名称 */
  epoch: string;
  /** 时间段 */
  period: string;
  stages: IRStage[];
  /** 阵痛期 */
  painDuration: string;
  /** 关键就业数据 */
  keyStat: string;
}

// 扁平化表格数据：每行 = 一个 epoch（一行三次工业革命合并展示）
export interface IRTableRow {
  epoch: string;
  period: string;
  keyStat: string;
  // 三阶段各自一行
  phase1: IRPhase;
  tone1: IRTone;
  duration1: string;
  displaced1: string;
  emerging1: string;
  net1: string;
  phase2: IRPhase;
  tone2: IRTone;
  duration2: string;
  displaced2: string;
  emerging2: string;
  net2: string;
  phase3: IRPhase;
  tone3: IRTone;
  duration3: string;
  displaced3: string;
  emerging3: string;
  net3: string;
  painDuration: string;
}

export const industrialRevolutionEmploymentData: IREpoch[] = [
  {
    epoch: '第一次工业革命',
    period: '1760s — 1840s',
    painDuration: '约50年（主要在替代阶段）',
    keyStat: '英农业就业：约70%→约22%\n城市化：约20%→约52%',
    stages: [
      {
        phase: '替代主导',
        tone: 'negative',
        typicalDuration: '约30-50年',
        keyDisplaced: '手工纺织者（织布工）、家庭工匠',
        keyEmerging: '工厂操作工人（早期）',
        employmentNet: '净影响为负，阵痛剧烈',
      },
      {
        phase: '互补显现',
        tone: 'neutral',
        typicalDuration: '约30年',
        keyDisplaced: '—',
        keyEmerging: '铁路工人、工程师、工厂管理者',
        employmentNet: '净影响转正',
      },
      {
        phase: '创造主导',
        tone: 'positive',
        typicalDuration: '持续至20世纪初',
        keyDisplaced: '—',
        keyEmerging: '职员、会计、商贸岗位；城市服务业',
        employmentNet: '净影响为正',
      },
    ],
  },
  {
    epoch: '第二次工业革命',
    period: '1870s — 1945s',
    painDuration: '约20-30年',
    keyStat: '美农业就业：约40%→约15%\n美白领岗位：约15%→约40%',
    stages: [
      {
        phase: '替代主导',
        tone: 'negative',
        typicalDuration: '约20-30年',
        keyDisplaced: '手工工匠；部分农场劳动力',
        keyEmerging: '钢铁工人、机械操作工',
        employmentNet: '净影响为负，阵痛较剧烈',
      },
      {
        phase: '互补显现',
        tone: 'neutral',
        typicalDuration: '约20年',
        keyDisplaced: '—',
        keyEmerging: '电气工程师、装配线技工',
        employmentNet: '净影响转正',
      },
      {
        phase: '创造主导',
        tone: 'positive',
        typicalDuration: '持续至20世纪中叶',
        keyDisplaced: '—',
        keyEmerging: '办公室白领；石油、汽车产业链岗位',
        employmentNet: '净影响为正',
      },
    ],
  },
  {
    epoch: '第三次工业革命\n（信息技术革命）',
    period: '1970s — 2010s',
    painDuration: '约10-20年（结构性错配贯穿全程）',
    keyStat: '美制造业就业：约28%→约16%\n净减少约600万制造业岗位',
    stages: [
      {
        phase: '替代主导',
        tone: 'negative',
        typicalDuration: '约20年',
        keyDisplaced: '制造业工人；银行柜员（ATM替代）',
        keyEmerging: '计算机操作员（早期）',
        employmentNet: '净影响为负，服务业吸收部分压力',
      },
      {
        phase: '互补显现',
        tone: 'neutral',
        typicalDuration: '约15-20年',
        keyDisplaced: '—',
        keyEmerging: '程序员、数据分析师；办公自动化岗位',
        employmentNet: '净影响转正，数字技能溢价出现',
      },
      {
        phase: '创造主导',
        tone: 'positive',
        typicalDuration: '持续至今',
        keyDisplaced: '—',
        keyEmerging: '互联网平台经济（电商、零工）；AI工程岗位',
        employmentNet: '净影响为正',
      },
    ],
  },
];

// 展平为表格行数据（1行 = 1次工业革命）
export const industrialRevolutionTableRows: IRTableRow[] =
  industrialRevolutionEmploymentData.map((epoch) => ({
    epoch: epoch.epoch,
    period: epoch.period,
    keyStat: epoch.keyStat,
    painDuration: epoch.painDuration,
    // 阶段1
    phase1: epoch.stages[0].phase,
    tone1: epoch.stages[0].tone,
    duration1: epoch.stages[0].typicalDuration,
    displaced1: epoch.stages[0].keyDisplaced,
    emerging1: epoch.stages[0].keyEmerging,
    net1: epoch.stages[0].employmentNet,
    // 阶段2
    phase2: epoch.stages[1].phase,
    tone2: epoch.stages[1].tone,
    duration2: epoch.stages[1].typicalDuration,
    displaced2: epoch.stages[1].keyDisplaced,
    emerging2: epoch.stages[1].keyEmerging,
    net2: epoch.stages[1].employmentNet,
    // 阶段3
    phase3: epoch.stages[2].phase,
    tone3: epoch.stages[2].tone,
    duration3: epoch.stages[2].typicalDuration,
    displaced3: epoch.stages[2].keyDisplaced,
    emerging3: epoch.stages[2].keyEmerging,
    net3: epoch.stages[2].employmentNet,
  }));

// 阶段对应的色调
export const irPhaseStyles: Record<IRTone, { badge: string; text: string; bg: string }> = {
  negative: {
    badge: 'bg-red-500 text-white',
    text: 'text-red-600',
    bg: 'bg-red-50',
  },
  neutral: {
    badge: 'bg-webank-blue text-white',
    text: 'text-webank-blue',
    bg: 'bg-sky-50',
  },
  positive: {
    badge: 'bg-emerald-600 text-white',
    text: 'text-emerald-700',
    bg: 'bg-emerald-50',
  },
};
