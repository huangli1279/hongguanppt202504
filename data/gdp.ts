// GDP 和产业结构数据 (Slide 1-3)

import {
  GdpDataPoint,
  DeflatorDataPoint,
  IndustryGrowthData,
  ContributionDataPoint,
  BreakdownDataPoint,
  DemandStructureData,
  ThreeCarriagesContributionDataPoint,
  GrowthIndicatorData,
  IndustryGdpQuarterlyDataPoint,
} from '../types';

// Slide 1 Data

export const gdpTrendData: GdpDataPoint[] = [
  { period: '24Q1', value: 5.3, nominal: 4.16 },
  { period: '24Q2', value: 4.7, nominal: 3.9 },
  { period: '24Q3', value: 4.6, nominal: 3.96 },
  { period: '24Q4', value: 5.4, nominal: 4.56 },
  { period: '25Q1', value: 5.4, nominal: 4.58 },
  { period: '25Q2', value: 5.2, nominal: 3.9 },
  { period: '25Q3', value: 4.8, nominal: 3.71 },
  { period: '25Q4', value: 4.5, nominal: 3.85 },
];

export const deflatorData: DeflatorDataPoint[] = [
  { period: '23Q1', primary: 2.1, secondary: -1.5, tertiary: 1.8 },
  { period: '23Q2', primary: 1.5, secondary: -2.2, tertiary: 1.2 },
  { period: '23Q3', primary: 1.2, secondary: -2.8, tertiary: 0.9 },
  { period: '23Q4', primary: 0.8, secondary: -3.1, tertiary: 0.5 },
  { period: '24Q1', primary: -3.58, secondary: -2.38, tertiary: -0.08 },
  { period: '24Q2', primary: -1.78, secondary: -1.43, tertiary: -0.13 },
  { period: '24Q3', primary: 1.25, secondary: -1.66, tertiary: -0.13 },
  { period: '24Q4', primary: -1.05, secondary: -2.28, tertiary: 0.31 },
  { period: '25Q1', primary: -1.24, secondary: -2.35, tertiary: 0.12 },
  { period: '25Q2', primary: -1.41, secondary: -2.93, tertiary: -0.15 },
  { period: '25Q3', primary: -3.85, secondary: -2.67, tertiary: 0.31 },
  { period: '25Q4', primary: -1.12, secondary: -2.02, tertiary: 0.43 },
];

// Slide 2 Data

export const industryGrowthData: IndustryGrowthData[] = [
  { name: '第一产业', '2025-03': 3.5, '2025-06': 3.8, '2025-09': 4.0, '2025-12': 4.2 },
  { name: '第二产业', '2025-03': 5.9, '2025-06': 4.8, '2025-09': 4.2, '2025-12': 3.4 },
  { name: '第三产业', '2025-03': 5.3, '2025-06': 5.7, '2025-09': 5.4, '2025-12': 5.2 },
];

export const contributionData: ContributionDataPoint[] = [
  { period: '2024-03', primary: 0.14, secondary: 2.04, tertiary: 0.94 },
  { period: '2024-06', primary: 0.24, secondary: 1.98, tertiary: 0.26 },
  { period: '2024-09', primary: 0.29, secondary: 1.57, tertiary: 0.88 },
  { period: '2024-12', primary: 0.39, secondary: 1.81, tertiary: 1.00 },
  { period: '2025-03', primary: 0.14, secondary: 2.06, tertiary: 1.00 },
  { period: '2025-06', primary: 0.24, secondary: 1.78, tertiary: 1.16 },
  { period: '2025-09', primary: 0.34, secondary: 1.50, tertiary: 1.13 },
  { period: '2025-12', primary: 0.41, secondary: 1.24, tertiary: 1.19 },
];


// 2023-2025 Three-Year GDP Contribution Data (三产业GDP当季同比拉动数据)
export const threeYearContributionData: ContributionDataPoint[] = [
  { period: '2023-03', primary: 0.15, secondary: 1.02, tertiary: 3.52 },
  { period: '2023-06', primary: 0.24, secondary: 1.83, tertiary: 4.43 },
  { period: '2023-09', primary: 0.36, secondary: 1.54, tertiary: 3.10 },
  { period: '2023-12', primary: 0.42, secondary: 1.87, tertiary: 3.02 },
  { period: '2024-03', primary: 0.14, secondary: 2.04, tertiary: 3.12 },
  { period: '2024-06', primary: 0.24, secondary: 1.98, tertiary: 2.48 },
  { period: '2024-09', primary: 0.29, secondary: 1.57, tertiary: 2.74 },
  { period: '2024-12', primary: 0.39, secondary: 1.81, tertiary: 3.20 },
  { period: '2025-03', primary: 0.14, secondary: 2.06, tertiary: 3.20 },
  { period: '2025-06', primary: 0.24, secondary: 1.78, tertiary: 3.18 },
  { period: '2025-09', primary: 0.34, secondary: 1.50, tertiary: 2.97 },
  { period: '2025-12', primary: 0.41, secondary: 1.24, tertiary: 2.84 },
];

export const breakdownData: BreakdownDataPoint[] = [
  { name: '信息技术服务', value: 11.1, type: 'growth' },
  { name: '租赁商务服务', value: 10.3, type: 'growth' },
  { name: '高技术制造业', value: 9.4, type: 'growth' },
  { name: '装备制造业', value: 9.2, type: 'growth' },
  { name: '第三产业整体', value: 5.2, type: 'growth' },
  { name: 'GDP整体', value: 4.5, type: 'growth' },
  { name: '第二产业整体', value: 3.4, type: 'growth' },
  { name: '建筑业', value: -1.2, type: 'lag' },
  { name: '房地产开发投资', value: -17.2, type: 'lag' },
];

// Slide 2.5 Data (New Slide - Industry GDP Quarterly)

export const industryGdpQuarterlyData: IndustryGdpQuarterlyDataPoint[] = [
  { industry: '信息传输、软件和信息技术服务业', q1: 10.3, q2: 11.8, q3: 11.7, q4: 10.7, category: 'new-quality' },
  { industry: '租赁和商务服务业', q1: 10.2, q2: 9.0, q3: 8.6, q4: 12.7, category: 'new-quality' },
  { industry: '制造业', q1: 6.8, q2: 6.5, q3: 6.3, q4: 5.1, category: 'strong' },
  { industry: '工业', q1: 6.3, q2: 6.2, q3: 5.8, q4: 5.0, category: 'strong' },
  { industry: '批发和零售业', q1: 5.8, q2: 6.0, q3: 4.9, q4: 3.7, category: 'moderate' },
  { industry: '其他行业', q1: 4.1, q2: 4.4, q3: 5.5, q4: 5.9, category: 'moderate' },
  { industry: '住宿和餐饮业', q1: 5.1, q2: 5.2, q3: 3.6, q4: 5.6, category: 'moderate' },
  { industry: '农林牧渔业', q1: 3.7, q2: 4.0, q3: 4.1, q4: 4.3, category: 'moderate' },
  { industry: '交通运输、仓储和邮政业', q1: 7.2, q2: 5.6, q3: 4.8, q4: 3.4, category: 'moderate' },
  { industry: '金融业', q1: 3.8, q2: 5.8, q3: 5.2, q4: 3.3, category: 'moderate' },
  { industry: '房地产业', q1: 1.0, q2: 1.0, q3: -0.2, q4: -1.0, category: 'weak' },
  { industry: '建筑业', q1: 3.1, q2: -0.6, q3: -2.3, q4: -2.5, category: 'weak' },
];

// Slide 3 Data

export const demandStructureData: DemandStructureData[] = [
  { name: '最终消费支出', value: 52.9, fill: '#005c8f' },
  { name: '货物和服务净出口', value: 31.1, fill: '#00a9f4' },
  { name: '资本形成总额', value: 16.0, fill: '#94a3b8' },
];

export const threeCarriagesContributionData: ThreeCarriagesContributionDataPoint[] = [
  { period: '2024-03', consumption: 76.5, investment: 9.2, netExport: 14.3 },
  { period: '2024-06', consumption: 50.5, investment: 38.4, netExport: 11.1 },
  { period: '2024-09', consumption: 32.6, investment: 22.8, netExport: 44.5 },
  { period: '2024-12', consumption: 32.1, investment: 22.1, netExport: 45.8 },
  { period: '2025-03', consumption: 50.1, investment: 4.7, netExport: 45.2 },
  { period: '2025-06', consumption: 51.0, investment: 24.2, netExport: 24.8 },
  { period: '2025-09', consumption: 54.1, investment: 15.9, netExport: 30.0 },
  { period: '2025-12', consumption: 52.9, investment: 16.0, netExport: 31.1 },
];

export const threeCarriagesData: GrowthIndicatorData[] = [
  { name: '出口总额', value: 6.1, category: 'export' },
  { name: '服务消费', value: 5.5, category: 'consumption' },
  { name: '社会消费品零售', value: 3.5, category: 'consumption' },
  { name: '制造业投资', value: 0.6, category: 'investment' },
  { name: '固定资产投资', value: -3.8, category: 'investment' },
  { name: '房地产开发投资', value: -17.2, category: 'investment' },
];
