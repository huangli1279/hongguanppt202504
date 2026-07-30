// 城镇调查失业率及分年龄段数据

export interface UnemploymentRateDataPoint {
  period: string;
  overall: number;   // 全国城镇调查失业率
  age16_24: number;  // 16-24岁（不含在校生）
  age25_29: number;  // 25-29岁（不含在校生）
  age30_59: number;  // 30-59岁（不含在校生）
}

export const unemploymentRateData: UnemploymentRateDataPoint[] = [
  { period: '2024-07', overall: 5.2, age16_24: 17.1, age25_29: 6.5, age30_59: 3.9 },
  { period: '2024-08', overall: 5.3, age16_24: 18.8, age25_29: 6.9, age30_59: 3.9 },
  { period: '2024-09', overall: 5.1, age16_24: 17.6, age25_29: 6.7, age30_59: 3.9 },
  { period: '2024-10', overall: 5.0, age16_24: 17.1, age25_29: 6.8, age30_59: 3.8 },
  { period: '2024-11', overall: 5.0, age16_24: 16.1, age25_29: 6.7, age30_59: 3.8 },
  { period: '2024-12', overall: 5.1, age16_24: 15.7, age25_29: 6.6, age30_59: 3.9 },
  { period: '2025-01', overall: 5.2, age16_24: 16.1, age25_29: 6.9, age30_59: 4.0 },
  { period: '2025-02', overall: 5.4, age16_24: 16.9, age25_29: 7.3, age30_59: 4.3 },
  { period: '2025-03', overall: 5.2, age16_24: 16.5, age25_29: 7.2, age30_59: 4.1 },
  { period: '2025-04', overall: 5.1, age16_24: 15.8, age25_29: 7.1, age30_59: 4.0 },
  { period: '2025-05', overall: 5.0, age16_24: 14.9, age25_29: 7.0, age30_59: 3.9 },
  { period: '2025-06', overall: 5.0, age16_24: 14.5, age25_29: 6.7, age30_59: 4.0 },
  { period: '2025-07', overall: 5.2, age16_24: 17.8, age25_29: 6.9, age30_59: 3.9 },
  { period: '2025-08', overall: 5.3, age16_24: 18.9, age25_29: 7.2, age30_59: 3.9 },
  { period: '2025-09', overall: 5.2, age16_24: 17.7, age25_29: 7.2, age30_59: 3.9 },
  { period: '2025-10', overall: 5.1, age16_24: 17.3, age25_29: 7.2, age30_59: 3.8 },
  { period: '2025-11', overall: 5.1, age16_24: 16.9, age25_29: 7.2, age30_59: 3.8 },
  { period: '2025-12', overall: 5.1, age16_24: 16.5, age25_29: 6.9, age30_59: 3.9 },
  { period: '2026-01', overall: 5.2, age16_24: 16.3, age25_29: 6.8, age30_59: 4.0 },
  { period: '2026-02', overall: 5.3, age16_24: 16.1, age25_29: 7.2, age30_59: 4.2 },
  { period: '2026-03', overall: 5.4, age16_24: 16.9, age25_29: 7.7, age30_59: 4.3 },
  { period: '2026-04', overall: 5.2, age16_24: 16.3, age25_29: 7.4, age30_59: 4.2 },
  { period: '2026-05', overall: 5.1, age16_24: 15.6, age25_29: 7.2, age30_59: 4.1 },
  { period: '2026-06', overall: 5.0, age16_24: 14.9, age25_29: 7.1, age30_59: 4.0 },
];

// 中国灵活就业人员规模（亿人）+ 领取失业保险金人数（万人）；2026(E) 为预测值
export interface FlexibleEmploymentDataPoint {
  period: string;
  actual?: number;
  forecast?: number;
  /** 领取失业保险金人数（万人） */
  unemploymentInsurance?: number;
}

export const flexibleEmploymentData: FlexibleEmploymentDataPoint[] = [
  { period: '2015年', actual: 1.2, unemploymentInsurance: 227 },
  { period: '2017', actual: 1.45, unemploymentInsurance: 220 },
  { period: '2019', actual: 1.6, unemploymentInsurance: 228.3 },
  { period: '2020', actual: 1.7, unemploymentInsurance: 270 },
  { period: '2021', actual: 2.0, unemploymentInsurance: 259 },
  { period: '2022', actual: 2.2, unemploymentInsurance: 297 },
  { period: '2023', actual: 2.3, unemploymentInsurance: 352 },
  { period: '2024', actual: 2.4, unemploymentInsurance: 463 },
  { period: '2025', actual: 2.8, forecast: 2.8, unemploymentInsurance: 557 },
  { period: '2026(E)', forecast: 3.2 },
];

// 不同工作类型总支出（元，调查数据）
export interface WorkTypeExpenditureDataPoint {
  category: string;
  totalExpenditure: number;
}

export const workTypeExpenditureData: WorkTypeExpenditureDataPoint[] = [
  { category: '全职工作', totalExpenditure: 3521 },
  { category: '临时工作', totalExpenditure: 2581 },
  { category: '失业3个月以内', totalExpenditure: 3017 },
  { category: '失业3个月以上', totalExpenditure: 2925 },
  { category: '家庭照料', totalExpenditure: 3038 },
  { category: '未退休且不找工作', totalExpenditure: 4913 },
];

// 国内招聘网站岗位需求同比变化（%）；来源：BOSS直聘、猎聘
export interface JobDemandYoyDataPoint {
  category: string;
  name: string;
  yoy: number;
  fill: string;
}

const AI_JOB_UP = '#1B4F72';
const TRADITIONAL_JOB_DOWN = '#E07A5F';

export const jobDemandYoyData: JobDemandYoyDataPoint[] = [
  { category: '销售行政/商务(AI)', name: '销售行政/商务（AI相关岗）', yoy: 682, fill: AI_JOB_UP },
  { category: '提示词工程师', name: '提示词工程师', yoy: 486.8, fill: AI_JOB_UP },
  { category: 'AI工程师', name: 'AI工程师', yoy: 317, fill: AI_JOB_UP },
  { category: 'AI智能体开发', name: 'AI智能体开发', yoy: 244, fill: AI_JOB_UP },
  { category: '人力资源', name: '人力资源', yoy: 200, fill: AI_JOB_UP },
  { category: 'AI产品经理', name: 'AI产品经理', yoy: 87.7, fill: AI_JOB_UP },
  { category: 'AI创意叙事', name: 'AI创意叙事', yoy: 84.2, fill: AI_JOB_UP },
  { category: 'AI伦理社科', name: 'AI伦理社科', yoy: 78.3, fill: AI_JOB_UP },
  { category: 'AI人机训练', name: 'AI人机训练', yoy: 67.7, fill: AI_JOB_UP },
  { category: '汽车AI工程师', name: '汽车AI工程师', yoy: 38.2, fill: AI_JOB_UP },
  { category: '数据标注/AI训练师', name: '数据标注/AI训练师', yoy: 30.3, fill: AI_JOB_UP },
  { category: '航空航天AI工程师', name: '航空航天AI工程师', yoy: 23.5, fill: AI_JOB_UP },
  { category: '销售/商务/品牌', name: '销售/商务/品牌', yoy: -10, fill: TRADITIONAL_JOB_DOWN },
  { category: '视觉交互设计', name: '视觉交互设计', yoy: -21, fill: TRADITIONAL_JOB_DOWN },
  { category: '初级开发岗', name: '初级开发岗', yoy: -21, fill: TRADITIONAL_JOB_DOWN },
  { category: '客户服务', name: '客户服务', yoy: -23, fill: TRADITIONAL_JOB_DOWN },
  { category: '编辑/编校', name: '编辑/编校', yoy: -29, fill: TRADITIONAL_JOB_DOWN },
  { category: '基础测试工程师', name: '基础测试工程师', yoy: -34, fill: TRADITIONAL_JOB_DOWN },
  { category: '初级软件测试', name: '初级软件测试', yoy: -52.9, fill: TRADITIONAL_JOB_DOWN },
  { category: '传统运维工程师', name: '传统运维工程师', yoy: -60, fill: TRADITIONAL_JOB_DOWN },
  { category: '初级图像算法', name: '初级图像算法', yoy: -66.7, fill: TRADITIONAL_JOB_DOWN },
  { category: '初级机器学习', name: '初级机器学习', yoy: -71.4, fill: TRADITIONAL_JOB_DOWN },
];
