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
