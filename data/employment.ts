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

// 中国灵活就业人员规模（亿人）；2026(E) 为预测值
export interface FlexibleEmploymentDataPoint {
  period: string;
  actual?: number;
  forecast?: number;
}

export const flexibleEmploymentData: FlexibleEmploymentDataPoint[] = [
  { period: '2015年', actual: 1.2 },
  { period: '2017', actual: 1.45 },
  { period: '2019', actual: 1.6 },
  { period: '2020', actual: 1.7 },
  { period: '2021', actual: 2.0 },
  { period: '2022', actual: 2.2 },
  { period: '2023', actual: 2.3 },
  { period: '2024', actual: 2.4 },
  { period: '2025', actual: 2.8, forecast: 2.8 },
  { period: '2026(E)', forecast: 3.2 },
];
