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

// 工业生产数据 - 规模以上工业增加值与出口交货值
export interface IndustrialProductionDataPoint {
  period: string;
  industrialOutput: number | null;  // 规模以上工业增加值:当月同比 (%)
  exportDelivery: number | null;    // 出口交货值:当月同比 (%)
}

export const industrialProductionData: IndustrialProductionDataPoint[] = [
  { period: '2024-01', industrialOutput: 26.30, exportDelivery: null },
  { period: '2024-02', industrialOutput: -12.70, exportDelivery: null },
  { period: '2024-03', industrialOutput: 4.50, exportDelivery: 1.40 },
  { period: '2024-04', industrialOutput: 6.70, exportDelivery: 7.30 },
  { period: '2024-05', industrialOutput: 5.60, exportDelivery: 4.60 },
  { period: '2024-06', industrialOutput: 5.30, exportDelivery: 3.80 },
  { period: '2024-07', industrialOutput: 5.10, exportDelivery: 6.40 },
  { period: '2024-08', industrialOutput: 4.50, exportDelivery: 6.40 },
  { period: '2024-09', industrialOutput: 5.40, exportDelivery: 3.40 },
  { period: '2024-10', industrialOutput: 5.30, exportDelivery: 3.70 },
  { period: '2024-11', industrialOutput: 5.40, exportDelivery: 7.40 },
  { period: '2024-12', industrialOutput: 6.20, exportDelivery: 8.80 },
  { period: '2025-02', industrialOutput: 31.02, exportDelivery: null },
  { period: '2025-03', industrialOutput: 7.70, exportDelivery: 7.70 },
  { period: '2025-04', industrialOutput: 6.10, exportDelivery: 0.90 },
  { period: '2025-05', industrialOutput: 5.80, exportDelivery: 0.60 },
  { period: '2025-06', industrialOutput: 6.80, exportDelivery: 4.00 },
  { period: '2025-07', industrialOutput: 5.70, exportDelivery: 0.80 },
  { period: '2025-08', industrialOutput: 5.20, exportDelivery: -0.40 },
  { period: '2025-09', industrialOutput: 6.50, exportDelivery: 3.80 },
  { period: '2025-10', industrialOutput: 4.90, exportDelivery: -2.10 },
  { period: '2025-11', industrialOutput: 4.80, exportDelivery: -0.10 },
  { period: '2025-12', industrialOutput: 5.20, exportDelivery: 3.20 },
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
