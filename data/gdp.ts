// GDP 数据

import { GdpDataPoint, DeflatorDataPoint } from '../types';

export const gdpTrendData: GdpDataPoint[] = [
  { period: '2024-03', value: 5.3, nominal: 4.16 },
  { period: '2024-06', value: 4.7, nominal: 3.9 },
  { period: '2024-09', value: 4.6, nominal: 3.96 },
  { period: '2024-12', value: 5.4, nominal: 4.56 },
  { period: '2025-03', value: 5.4, nominal: 4.58 },
  { period: '2025-06', value: 5.2, nominal: 3.9 },
  { period: '2025-09', value: 4.8, nominal: 3.71 },
  { period: '2025-12', value: 4.5, nominal: 3.85 },
  { period: '2026-03', value: 5.0, nominal: 4.94 },
];

// GDP贡献率数据（三大需求）
export const gdpContributionData = [
  { period: '2024-06', consumption: 50.50, investment: 38.40, netExport: 11.10 },
  { period: '2024-09', consumption: 32.60, investment: 22.80, netExport: 44.50 },
  { period: '2024-12', consumption: 32.10, investment: 22.10, netExport: 45.80 },
  { period: '2025-03', consumption: 50.10, investment: 4.70, netExport: 45.20 },
  { period: '2025-06', consumption: 51.00, investment: 24.20, netExport: 24.80 },
  { period: '2025-09', consumption: 54.10, investment: 15.90, netExport: 30.00 },
  { period: '2025-12', consumption: 52.90, investment: 16.00, netExport: 31.10 },
  { period: '2026-03', consumption: 48.00, investment: 38.00, netExport: 16.00 },
  { period: '2026-06', consumption: 45.20, investment: 34.00, netExport: 20.80 },
];

// 三大产业GDP占比数据
export const gdpIndustryShareData = [
  { period: '2024-03', primary: 3.77, secondary: 35.44, tertiary: 60.79 },
  { period: '2024-06', primary: 4.82, secondary: 36.71, tertiary: 58.47 },
  { period: '2024-09', primary: 5.90, secondary: 36.45, tertiary: 57.65 },
  { period: '2024-12', primary: 6.80, secondary: 36.37, tertiary: 56.83 },
  { period: '2025-03', primary: 3.68, secondary: 35.03, tertiary: 61.29 },
  { period: '2025-06', primary: 4.73, secondary: 36.11, tertiary: 59.16 },
  { period: '2025-09', primary: 5.74, secondary: 35.79, tertiary: 58.48 },
  { period: '2025-12', primary: 6.66, secondary: 35.64, tertiary: 57.70 },
];

// 三大产业GDP当季值数据
export const gdpIndustryValueData = [
  { period: '2024-03', primary: 1.1538, secondary: 10.9846, tertiary: 17.4915 },
  { period: '2024-06', primary: 1.9122, secondary: 12.6684, tertiary: 17.4731 },
  { period: '2024-09', primary: 2.7073, secondary: 12.4832, tertiary: 18.1005 },
  { period: '2024-12', primary: 3.4050, secondary: 13.5595, tertiary: 20.4081 },
  { period: '2025-03', primary: 1.1713, secondary: 11.1903, tertiary: 19.5142 },
  { period: '2025-06', primary: 1.9459, secondary: 12.7147, tertiary: 19.5172 },
  { period: '2025-09', primary: 2.6889, secondary: 12.4970, tertiary: 20.2641 },
  { period: '2025-12', primary: 3.5160, secondary: 13.6803, tertiary: 21.5948 },
  { period: '2026-03', primary: 1.19, secondary: 11.61, tertiary: 20.61 },
];

// Slide05 专用：近 8 期 GDP 不变价/现价同比增速（2024Q3—2026Q2）
export const gdpGrowthRecentData = [
  { period: '2024-09', real: 4.6, nominal: 3.96 },
  { period: '2024-12', real: 5.4, nominal: 4.56 },
  { period: '2025-03', real: 5.4, nominal: 4.58 },
  { period: '2025-06', real: 5.2, nominal: 3.9 },
  { period: '2025-09', real: 4.8, nominal: 3.71 },
  { period: '2025-12', real: 4.5, nominal: 3.85 },
  { period: '2026-03', real: 5.0, nominal: 4.94 },
  { period: '2026-06', real: 4.3, nominal: 5.89 },
];

// Slide05 专用：近 8 期 GDP 平减指数分项（含整体，2024Q3—2026Q2）
export const deflatorRecentData = [
  { period: '2024-09', primary: 1.24, secondary: -1.62, tertiary: -0.16, overall: -0.61 },
  { period: '2024-12', primary: -1.07, secondary: -2.27, tertiary: 0.34, overall: -0.80 },
  { period: '2025-03', primary: -1.24, secondary: -2.39, tertiary: 0.12, overall: -0.78 },
  { period: '2025-06', primary: -1.40, secondary: -2.89, tertiary: -0.20, overall: -1.24 },
  { period: '2025-09', primary: -3.89, secondary: -2.64, tertiary: 0.27, overall: -1.04 },
  { period: '2025-12', primary: -1.16, secondary: -2.05, tertiary: 0.47, overall: -0.62 },
  { period: '2026-03', primary: -1.93, secondary: -0.75, tertiary: 0.38, overall: -0.06 },
  { period: '2026-06', primary: -3.19, secondary: 2.93, tertiary: 1.20, overall: 1.53 },
];

// Slide06 专用：三大产业 GDP 增速对比（%，按产业分组，各季度柱子并排）
export const industryGdpValueRecentData = [
  { industry: '第一产业', '2025-06': 3.80, '2025-09': 4.00, '2025-12': 4.20, '2026-03': 3.80, '2026-06': 3.70 },
  { industry: '第二产业', '2025-06': 4.80, '2025-09': 4.20, '2025-12': 3.40, '2026-03': 4.90, '2026-06': 3.00 },
  { industry: '第三产业', '2025-06': 5.70, '2025-09': 5.40, '2025-12': 5.20, '2026-03': 5.20, '2026-06': 5.10 },
];

// Slide06 专用：三大产业对 GDP 增长贡献率（%，各产业合计 100，自 2025-06 起）
export const industryGrowthByQuarterRecentData = [
  { period: '2025-06', primary: 4.6, secondary: 34.2, tertiary: 61.2 },
  { period: '2025-09', primary: 7.1, secondary: 31.2, tertiary: 61.7 },
  { period: '2025-12', primary: 9.1, secondary: 27.6, tertiary: 63.3 },
  { period: '2026-03', primary: 2.6, secondary: 34.2, tertiary: 63.2 },
  { period: '2026-06', primary: 4.9, secondary: 25.8, tertiary: 69.3 },
];

// Slide06 专用：不同行业 GDP 增速对比（%）
// 排序：第一产业 → 第二产业及分项 → 第三产业及分项（便于分组框）
export const industryContributionRecentData = [
  { industry: '农林牧渔', '2024-06': 3.8, '2024-09': 3.5, '2024-12': 3.9, '2025-03': 3.7, '2025-06': 4.0, '2025-09': 4.1, '2025-12': 4.3, '2026-03': 4.0, '2026-06': 4.0 },
  // 第二产业及其分项
  { industry: '工业', '2024-06': 5.9, '2024-09': 5.1, '2024-12': 5.8, '2025-03': 6.3, '2025-06': 6.2, '2025-09': 5.8, '2025-12': 5.0, '2026-03': 6.1, '2026-06': 5.4 },
  { industry: '制造业', '2024-06': 6.2, '2024-09': 5.0, '2024-12': 6.2, '2025-03': 6.8, '2025-06': 6.5, '2025-09': 6.3, '2025-12': 5.1, '2026-03': 6.3, '2026-06': 5.5 },
  { industry: '高技术制造', '2024-06': null, '2024-09': null, '2024-12': null, '2025-03': 9.7, '2025-06': null, '2025-09': null, '2025-12': 9.0, '2026-03': 12.5, '2026-06': 13.3 },
  { industry: '装备制造', '2024-06': null, '2024-09': null, '2024-12': null, '2025-03': 10.9, '2025-06': null, '2025-09': null, '2025-12': 7.9, '2026-03': 8.9, '2026-06': null },
  { industry: '数字产品制造', '2024-06': null, '2024-09': null, '2024-12': null, '2025-03': null, '2025-06': null, '2025-09': null, '2025-12': 7.9, '2026-03': 11.2, '2026-06': null },
  { industry: '建筑业', '2024-06': 4.3, '2024-09': 3.0, '2024-12': 3.4, '2025-03': 3.1, '2025-06': -0.6, '2025-09': -2.3, '2025-12': -2.5, '2026-03': -3.8, '2026-06': -4.0 },
  // 第三产业及其分项
  { industry: '批发零售', '2024-06': 5.3, '2024-09': 5.0, '2024-12': 5.7, '2025-03': 5.8, '2025-06': 6.0, '2025-09': 4.9, '2025-12': 3.7, '2026-03': 4.1, '2026-06': 3.7 },
  { industry: '交运仓储邮政', '2024-06': 6.5, '2024-09': 6.6, '2024-12': 7.9, '2025-03': 7.2, '2025-06': 5.6, '2025-09': 4.8, '2025-12': 3.4, '2026-03': 4.3, '2026-06': 4.7 },
  { industry: '住宿餐饮', '2024-06': 5.9, '2024-09': 5.9, '2024-12': 6.6, '2025-03': 5.1, '2025-06': 5.2, '2025-09': 3.6, '2025-12': 5.6, '2026-03': 4.3, '2026-06': 5.0 },
  { industry: '金融业', '2024-06': 4.3, '2024-09': 6.2, '2024-12': 6.5, '2025-03': 3.8, '2025-06': 5.8, '2025-09': 5.2, '2025-12': 3.3, '2026-03': 6.5, '2026-06': 6.7 },
  { industry: '房地产业', '2024-06': -3.8, '2024-09': -1.2, '2024-12': 2.0, '2025-03': 1.0, '2025-06': 1.0, '2025-09': -0.2, '2025-12': -1.0, '2026-03': -0.1, '2026-06': -0.2 },
  { industry: '信息服务业', '2024-06': 10.2, '2024-09': 10.0, '2024-12': 9.6, '2025-03': 10.3, '2025-06': 11.8, '2025-09': 11.7, '2025-12': 10.7, '2026-03': 10.6, '2026-06': 10.7 },
  { industry: '租赁商务', '2024-06': 8.7, '2024-09': 10.8, '2024-12': 11.0, '2025-03': 10.2, '2025-06': 9.0, '2025-09': 8.6, '2025-12': 12.7, '2026-03': 12.2, '2026-06': 11.9 },
  { industry: '其他行业', '2024-06': 3.1, '2024-09': 3.0, '2024-12': 3.8, '2025-03': 4.1, '2025-06': 4.4, '2025-09': 5.5, '2025-12': 5.9, '2026-03': 4.0, '2026-06': 3.9 },
];

export const deflatorData: DeflatorDataPoint[] = [
  { period: '2023-03', primary: 2.1, secondary: -1.5, tertiary: 1.8 },
  { period: '2023-06', primary: 1.5, secondary: -2.2, tertiary: 1.2 },
  { period: '2023-09', primary: 1.2, secondary: -2.8, tertiary: 0.9 },
  { period: '2023-12', primary: 0.8, secondary: -3.1, tertiary: 0.5 },
  { period: '2024-03', primary: -3.58, secondary: -2.38, tertiary: -0.08 },
  { period: '2024-06', primary: -1.78, secondary: -1.43, tertiary: -0.13 },
  { period: '2024-09', primary: 1.25, secondary: -1.66, tertiary: -0.13 },
  { period: '2024-12', primary: -1.05, secondary: -2.28, tertiary: 0.31 },
  { period: '2025-03', primary: -1.24, secondary: -2.35, tertiary: 0.12 },
  { period: '2025-06', primary: -1.41, secondary: -2.93, tertiary: -0.15 },
  { period: '2025-09', primary: -3.85, secondary: -2.67, tertiary: 0.31 },
  { period: '2025-12', primary: -1.12, secondary: -2.02, tertiary: 0.43 },
  { period: '2026-03', primary: -1.97, secondary: -0.75, tertiary: 0.38 },
];

// Slide08：国内外机构对中国2026年GDP增速预测对比（%）
export const gdpForecastByInstitutionData = [
  { institution: 'IMF (7月)', international: 4.6, domestic: null },
  { institution: 'OECD (6月)', international: 4.5, domestic: null },
  { institution: '中信证券 (6月)', international: null, domestic: 4.7 },
  { institution: '中金公司 (6月)', international: null, domestic: 4.7 },
  { institution: '华泰证券 (6月)', international: null, domestic: 5.0 },
  { institution: '招商证券 (6月)', international: null, domestic: 5.0 },
];
