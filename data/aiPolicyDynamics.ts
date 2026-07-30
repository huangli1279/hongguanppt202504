export type AiPolicyCategory =
  | '顶层设计'
  | '生产端'
  | '消费端'
  | '算力基建'
  | '安全治理'
  | '就业'
  | '地方落地';

export interface AiPolicyDynamicsItem {
  category: AiPolicyCategory;
  date: string;
  title: string;
}

export const aiPolicyCategoryStyles: Record<
  AiPolicyCategory,
  { text: string; bg: string }
> = {
  顶层设计: { text: '#2563eb', bg: '#dbeafe' },
  生产端: { text: '#16a34a', bg: '#dcfce7' },
  消费端: { text: '#c2410c', bg: '#ffedd5' },
  算力基建: { text: '#dc2626', bg: '#fee2e2' },
  安全治理: { text: '#7c3aed', bg: '#ede9fe' },
  就业: { text: '#0891b2', bg: '#cffafe' },
  地方落地: { text: '#65a30d', bg: '#ecfccb' },
};

export const aiPolicyDynamicsData: AiPolicyDynamicsItem[] = [
  {
    category: '顶层设计',
    date: '2025/8/21',
    title: '《国务院关于深入实施“人工智能+”行动的意见》',
  },
  {
    category: '顶层设计',
    date: '2025/9/4',
    title: '《关于推进“人工智能+”能源高质量发展的实施意见》',
  },
  {
    category: '顶层设计',
    date: '2025/12/25',
    title: '《“人工智能+制造”专项行动实施意见》',
  },
  {
    category: '生产端',
    date: '2025/11/5',
    title: '《2025年人工智能产业及赋能新型工业化创新任务揭榜挂帅工作通知》',
  },
  {
    category: '生产端',
    date: '2025/12/30',
    title: '《工业互联网和人工智能融合赋能行动方案》',
  },
  {
    category: '消费端',
    date: '2026/4/3',
    title: '《关于“人工智能+药品监管”的实施意见》',
  },
  {
    category: '消费端',
    date: '2026/6/9',
    title: '《关于加快“人工智能+消费”发展的实施意见》',
  },
  {
    category: '算力基建',
    date: '2026/4/28',
    title: '《关于联合实施2026年“模数共振”行动的通知》',
  },
  {
    category: '算力基建',
    date: '2026/6/8',
    title: '《关于推进行业高质量数据集建设行动的实施方案》',
  },
  {
    category: '算力基建',
    date: '2026/6/10',
    title: '《“人工智能+信息通信”创新发展实施意见（2026—2028年）》',
  },
  {
    category: '安全治理',
    date: '2026/3/20',
    title: '《人工智能科技伦理审查与服务办法（试行）》',
  },
  {
    category: '就业',
    date: '2026/6',
    title: '《实施就业优先战略“十五五”规划》',
  },
  {
    category: '就业',
    date: '2026/6',
    title: '《关于加快推进“人工智能＋人社”应用发展的实施意见》',
  },
  {
    category: '地方落地',
    date: '2025/5/5',
    title: '《四川省加快推进“人工智能+”一号创新工程实施方案》',
  },
  {
    category: '地方落地',
    date: '2025/9/29',
    title: '《广东省人工智能赋能制造业高质量发展行动方案（2025—2027年）》',
  },
  {
    category: '地方落地',
    date: '2025/11/17',
    title: '《陕西省深入实施“人工智能+”行动方案（2025—2027年）》',
  },
  {
    category: '地方落地',
    date: '2025/12/22',
    title: '《重庆市推动“人工智能+”行动方案》',
  },
  {
    category: '地方落地',
    date: '2025/12/29',
    title: '《江苏省“人工智能+”行动方案》',
  },
  {
    category: '地方落地',
    date: '2025/12/31',
    title: '《安徽省“人工智能+万物”应用行动方案》',
  },
];

export const aiPolicyTrendNote =
  '政策趋势：①国家层面向“人工智能+千行百业”纵深推进；②地方层面已形成省级行动方案竞赛格局；③算力基建（数据集、信息通信、模数共振）成为2026年政策密集区。';
