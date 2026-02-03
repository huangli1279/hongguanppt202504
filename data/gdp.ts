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
];

// GDP贡献率数据（三大需求）
export const gdpContributionData = [
  { period: '2024-03', consumption: 76.50, investment: 9.20, netExport: 14.30 },
  { period: '2024-06', consumption: 50.50, investment: 38.40, netExport: 11.10 },
  { period: '2024-09', consumption: 32.60, investment: 22.80, netExport: 44.50 },
  { period: '2024-12', consumption: 32.10, investment: 22.10, netExport: 45.80 },
  { period: '2025-03', consumption: 50.10, investment: 4.70, netExport: 45.20 },
  { period: '2025-06', consumption: 51.00, investment: 24.20, netExport: 24.80 },
  { period: '2025-09', consumption: 54.10, investment: 15.90, netExport: 30.00 },
  { period: '2025-12', consumption: 52.90, investment: 16.00, netExport: 31.10 },
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
];
