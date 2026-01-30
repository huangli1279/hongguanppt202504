// 三产业数据

export interface IndustryGrowthDataPoint {
  period: string;
  primary: number;    // 第一产业
  secondary: number;  // 第二产业
  tertiary: number;   // 第三产业
}

export interface IndustryContributionDataPoint {
  period: string;
  primaryContrib: number;    // 第一产业拉动
  secondaryContrib: number;  // 第二产业拉动
  tertiaryContrib: number;   // 第三产业拉动
}

// 2025年三产业GDP增加值当季同比增速 (%)
export const industryGrowthData: IndustryGrowthDataPoint[] = [
  { period: '2025-03', primary: 3.5, secondary: 5.9, tertiary: 5.3 },
  { period: '2025-06', primary: 3.8, secondary: 4.8, tertiary: 5.7 },
  { period: '2025-09', primary: 4.0, secondary: 4.2, tertiary: 5.4 },
  { period: '2025-12', primary: 4.2, secondary: 3.4, tertiary: 5.2 },
];

// 按产业分组的数据（横坐标为产业）
export interface IndustryByQuarterDataPoint {
  industry: string;
  '2025-03': number;
  '2025-06': number;
  '2025-09': number;
  '2025-12': number;
}

export const industryGrowthByIndustryData: IndustryByQuarterDataPoint[] = [
  { industry: '第一产业', '2025-03': 3.5, '2025-06': 3.8, '2025-09': 4.0, '2025-12': 4.2 },
  { industry: '第二产业', '2025-03': 5.9, '2025-06': 4.8, '2025-09': 4.2, '2025-12': 3.4 },
  { industry: '第三产业', '2025-03': 5.3, '2025-06': 5.7, '2025-09': 5.4, '2025-12': 5.2 },
];

// 2023-2025年三产业GDP当季同比拉动数据 (百分点)
export const industryContributionData: IndustryContributionDataPoint[] = [
  { period: '2023-03', primaryContrib: 0.15, secondaryContrib: 1.02, tertiaryContrib: 3.52 },
  { period: '2023-06', primaryContrib: 0.24, secondaryContrib: 1.83, tertiaryContrib: 4.43 },
  { period: '2023-09', primaryContrib: 0.36, secondaryContrib: 1.54, tertiaryContrib: 3.10 },
  { period: '2023-12', primaryContrib: 0.42, secondaryContrib: 1.87, tertiaryContrib: 3.02 },
  { period: '2024-03', primaryContrib: 0.14, secondaryContrib: 2.04, tertiaryContrib: 3.12 },
  { period: '2024-06', primaryContrib: 0.24, secondaryContrib: 1.98, tertiaryContrib: 2.48 },
  { period: '2024-09', primaryContrib: 0.29, secondaryContrib: 1.57, tertiaryContrib: 2.74 },
  { period: '2024-12', primaryContrib: 0.39, secondaryContrib: 1.81, tertiaryContrib: 3.20 },
  { period: '2025-03', primaryContrib: 0.14, secondaryContrib: 2.06, tertiaryContrib: 3.20 },
  { period: '2025-06', primaryContrib: 0.24, secondaryContrib: 1.78, tertiaryContrib: 3.18 },
  { period: '2025-09', primaryContrib: 0.34, secondaryContrib: 1.50, tertiaryContrib: 2.97 },
  { period: '2025-12', primaryContrib: 0.41, secondaryContrib: 1.24, tertiaryContrib: 2.84 },
];

// 2024-2025年三产业GDP当季同比拉动数据 (百分点)
export const industryContributionData2024: IndustryContributionDataPoint[] = [
  { period: '2024-03', primaryContrib: 0.14, secondaryContrib: 2.04, tertiaryContrib: 3.12 },
  { period: '2024-06', primaryContrib: 0.24, secondaryContrib: 1.98, tertiaryContrib: 2.48 },
  { period: '2024-09', primaryContrib: 0.29, secondaryContrib: 1.57, tertiaryContrib: 2.74 },
  { period: '2024-12', primaryContrib: 0.39, secondaryContrib: 1.81, tertiaryContrib: 3.20 },
  { period: '2025-03', primaryContrib: 0.14, secondaryContrib: 2.06, tertiaryContrib: 3.20 },
  { period: '2025-06', primaryContrib: 0.24, secondaryContrib: 1.78, tertiaryContrib: 3.18 },
  { period: '2025-09', primaryContrib: 0.34, secondaryContrib: 1.50, tertiaryContrib: 2.97 },
  { period: '2025-12', primaryContrib: 0.41, secondaryContrib: 1.24, tertiaryContrib: 2.84 },
];

// 2025年一二三产业细分行业GDP当季同比数据 (%)
export interface DetailedIndustryDataPoint {
  industry: string;
  '2025-03': number;
  '2025-06': number;
  '2025-09': number;
  '2025-12': number;
}

export const detailedIndustryGrowthData: DetailedIndustryDataPoint[] = [
  { industry: '农林牧渔业', '2025-03': 3.7, '2025-06': 4.0, '2025-09': 4.1, '2025-12': 4.3 },
  { industry: '工业', '2025-03': 6.3, '2025-06': 6.2, '2025-09': 5.8, '2025-12': 5.0 },
  { industry: '建筑业', '2025-03': 3.1, '2025-06': -0.6, '2025-09': -2.3, '2025-12': -2.5 },
  { industry: '制造业', '2025-03': 6.8, '2025-06': 6.5, '2025-09': 6.3, '2025-12': 5.1 },
  { industry: '批发和零售业', '2025-03': 5.8, '2025-06': 6.0, '2025-09': 4.9, '2025-12': 3.7 },
  { industry: '交通运输仓储邮政', '2025-03': 7.2, '2025-06': 5.6, '2025-09': 4.8, '2025-12': 3.4 },
  { industry: '住宿和餐饮业', '2025-03': 5.1, '2025-06': 5.2, '2025-09': 3.6, '2025-12': 5.6 },
  { industry: '金融业', '2025-03': 3.8, '2025-06': 5.8, '2025-09': 5.2, '2025-12': 3.3 },
  { industry: '房地产业', '2025-03': 1.0, '2025-06': 1.0, '2025-09': -0.2, '2025-12': -1.0 },
  { industry: '信息技术服务业', '2025-03': 10.3, '2025-06': 11.8, '2025-09': 11.7, '2025-12': 10.7 },
  { industry: '租赁和商务服务业', '2025-03': 10.2, '2025-06': 9.0, '2025-09': 8.6, '2025-12': 12.7 },
  { industry: '其他行业', '2025-03': 4.1, '2025-06': 4.4, '2025-09': 5.5, '2025-12': 5.9 },
];
