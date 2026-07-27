/** AI净增长贡献 J 曲线与兑现周期数据（来源：Nicholas Crafts(2004)、MGI、华泰研究） */

export const aiNetGrowthFormula =
  'AI净增长贡献 = 投资拉动 + 资本深化 + 经济传导 + 创新增长 + 总需求扩张 − 转型摩擦成本 − 宏观摩擦成本';

export const realizationPeriodData = [
  { tech: '蒸汽技术', years: 70, highlight: false },
  { tech: '电力', years: 40, highlight: false },
  { tech: 'ICT', years: 15, highlight: false },
  { tech: '本轮', years: 10, highlight: true, label: '预计10年' },
] as const;

export const jCurveStages = [
  {
    id: 1,
    title: '①Capex先行',
    items: [
      '算力、数据中心建设形成资本开支',
      '模型验证和产品试用',
      '资本、电力、人才挤出效应',
    ],
  },
  {
    id: 2,
    title: '②应用渗透',
    items: [
      '互补性无形资本投入积累',
      '试点扩展，流程再造深化',
      '应用扩散加快，技术红利开启',
    ],
  },
  {
    id: 3,
    title: '③企业效率重构',
    items: [
      '技术渗透广泛化，创新应用持续涌现',
      '企业ROI转正',
      '行业与部门间协同增强',
    ],
  },
  {
    id: 4,
    title: '④TFP提升',
    items: ['新产业形成', '生产率加速提升', '总需求随生产率提升扩张'],
  },
] as const;

export const frictionItems = [
  '资本投入下的成本主导',
  '组织改造和调整成本',
  '技术快速迭代带来折旧',
] as const;

export const singularityItems = ['知识生产', '物理AI'] as const;

export const fourCycleForecast = [
  {
    title: '开支竞赛期',
    observe: '资本开支增速、融资结构、算力利用率',
    width: '28%',
  },
  {
    title: '技术突破与市场集中期',
    observe: '前沿模型能力差距、训练与推理成本',
    width: '38%',
  },
  {
    title: '渗透扩散与商业化成熟期',
    observe: '用户留存、付费率、企业ROI',
    width: '48%',
  },
  {
    title: '潜在增长提升的长期效应期',
    observe: 'TFP、研发周期、专利产出',
    width: '62%',
  },
] as const;

export const cycleNote =
  '四个阶段并非线性递进，而是嵌套交织。瓶颈依次从芯片与电力 → 数据与接口 → 组织改造与有效需求转移。瓶颈突破 → 增长加速 → 新瓶颈出现 → 边际回报下降。';
