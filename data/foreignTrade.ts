// 外贸进出口数据

export interface ForeignTradeTrendDataPoint {
  period: string;
  totalTrade: number;    // 进出口总值累计同比
  imports: number;       // 进口总值累计同比
  exports: number;       // 出口总值累计同比
}

export const foreignTradeTrendData: ForeignTradeTrendDataPoint[] = [
  { period: '2024-01', totalTrade: 12.71, imports: 17.41, exports: 9.53 },
  { period: '2024-02', totalTrade: 8.75, imports: 6.82, exports: 10.26 },
  { period: '2024-03', totalTrade: 4.91, imports: 4.96, exports: 4.88 },
  { period: '2024-04', totalTrade: 5.65, imports: 6.72, exports: 4.85 },
  { period: '2024-05', totalTrade: 6.25, imports: 6.45, exports: 6.10 },
  { period: '2024-06', totalTrade: 6.13, imports: 5.17, exports: 6.85 },
  { period: '2024-07', totalTrade: 6.14, imports: 5.29, exports: 6.78 },
  { period: '2024-08', totalTrade: 5.92, imports: 4.52, exports: 6.97 },
  { period: '2024-09', totalTrade: 5.27, imports: 3.89, exports: 6.30 },
  { period: '2024-10', totalTrade: 5.19, imports: 3.08, exports: 6.79 },
  { period: '2024-11', totalTrade: 4.79, imports: 2.30, exports: 6.68 },
  { period: '2024-12', totalTrade: 4.96, imports: 2.19, exports: 7.06 },
  { period: '2025-01', totalTrade: -2.20, imports: -15.10, exports: 7.20 },
  { period: '2025-02', totalTrade: -1.20, imports: -7.20, exports: 3.30 },
  { period: '2025-03', totalTrade: 1.30, imports: -5.80, exports: 6.70 },
  { period: '2025-04', totalTrade: 2.40, imports: -4.10, exports: 7.40 },
  { period: '2025-05', totalTrade: 2.40, imports: -3.70, exports: 7.10 },
  { period: '2025-06', totalTrade: 2.90, imports: -2.70, exports: 7.10 },
  { period: '2025-07', totalTrade: 3.50, imports: -1.60, exports: 7.20 },
  { period: '2025-08', totalTrade: 3.50, imports: -1.10, exports: 6.90 },
  { period: '2025-09', totalTrade: 4.00, imports: -0.10, exports: 7.00 },
  { period: '2025-10', totalTrade: 3.60, imports: 0.00, exports: 6.20 },
  { period: '2025-11', totalTrade: 3.60, imports: 0.20, exports: 6.20 },
  { period: '2025-12', totalTrade: 3.80, imports: 0.50, exports: 6.10 },
];

// Q4出口月度同比对比数据
export interface Q4ExportCompareDataPoint {
  month: string;
  y2024: number;
  y2025: number;
}

export const q4ExportCompareData: Q4ExportCompareDataPoint[] = [
  { month: '10月', y2024: 12.7, y2025: -1.1 },
  { month: '11月', y2024: 6.7, y2025: 5.9 },
  { month: '12月', y2024: 2.3, y2025: 6.6 },
];

export interface ForeignTradeMonthlyUsdDataPoint {
  period: string;
  imports: number;
  exports: number;
}

export const foreignTradeMonthlyUsdData: ForeignTradeMonthlyUsdDataPoint[] = [
  { period: '2024-01', imports: 15.57, exports: 7.67 },
  { period: '2024-02', imports: -8.11, exports: 6.24 },
  { period: '2024-03', imports: -2.14, exports: -7.71 },
  { period: '2024-04', imports: 8.28, exports: 1.26 },
  { period: '2024-05', imports: 2.06, exports: 7.36 },
  { period: '2024-06', imports: -2.63, exports: 8.42 },
  { period: '2024-07', imports: 6.64, exports: 6.93 },
  { period: '2024-08', imports: 0.03, exports: 8.6 },
  { period: '2024-09', imports: 0.13, exports: 2.33 },
  { period: '2024-10', imports: -2.38, exports: 12.64 },
  { period: '2024-11', imports: -4.03, exports: 6.58 },
  { period: '2024-12', imports: 0.84, exports: 10.67 },
  { period: '2025-01', imports: -16.3, exports: 5.9 },
  { period: '2025-02', imports: 1.6, exports: -3.1 },
  { period: '2025-03', imports: -4.3, exports: 12.2 },
  { period: '2025-04', imports: -0.3, exports: 8.0 },
  { period: '2025-05', imports: -3.3, exports: 4.6 },
  { period: '2025-06', imports: 1.2, exports: 5.8 },
  { period: '2025-07', imports: 4.2, exports: 7.1 },
  { period: '2025-08', imports: 1.4, exports: 4.3 },
  { period: '2025-09', imports: 7.4, exports: 8.2 },
  { period: '2025-10', imports: 0.9, exports: -1.2 },
  { period: '2025-11', imports: 1.9, exports: 5.9 },
  { period: '2025-12', imports: 5.7, exports: 6.6 },
];

export interface ForeignTradeMonthlyValueDataPoint {
  period: string;
  imports: number;
  exports: number;
  total: number;
}

export const foreignTradeMonthlyValuesData: ForeignTradeMonthlyValueDataPoint[] = [
  { period: '2021-01', imports: 2019.75, exports: 2633.82, total: 4653.57 },
  { period: '2021-02', imports: 1693.78, exports: 2043.85, total: 3737.63 },
  { period: '2021-03', imports: 2289.92, exports: 2405.43, total: 4695.35 },
  { period: '2021-04', imports: 2226.19, exports: 2630.91, total: 4857.1 },
  { period: '2021-05', imports: 2203.94, exports: 2632.29, total: 4836.23 },
  { period: '2021-06', imports: 2308.65, exports: 2803.04, total: 5111.7 },
  { period: '2021-07', imports: 2264.39, exports: 2812.78, total: 5077.17 },
  { period: '2021-08', imports: 2347.26, exports: 2931.71, total: 5278.98 },
  { period: '2021-09', imports: 2371.62, exports: 3046.99, total: 5418.61 },
  { period: '2021-10', imports: 2147.14, exports: 2991.2, total: 5138.34 },
  { period: '2021-11', imports: 2530.12, exports: 3242.77, total: 5772.9 },
  { period: '2021-12', imports: 2464.54, exports: 3396.62, total: 5861.16 },
  { period: '2022-01', imports: 2439.72, exports: 3232.77, total: 5672.49 },
  { period: '2022-02', imports: 1886.2, exports: 2147.96, total: 4034.16 },
  { period: '2022-03', imports: 2300.17, exports: 2728.69, total: 5028.86 },
  { period: '2022-04', imports: 2226.74, exports: 2689.65, total: 4916.39 },
  { period: '2022-05', imports: 2277.87, exports: 3038.99, total: 5316.86 },
  { period: '2022-06', imports: 2301.0, exports: 3234.07, total: 5535.07 },
  { period: '2022-07', imports: 2292.23, exports: 3274.63, total: 5566.87 },
  { period: '2022-08', imports: 2333.92, exports: 3103.86, total: 5437.78 },
  { period: '2022-09', imports: 2360.92, exports: 3182.43, total: 5543.35 },
  { period: '2022-10', imports: 2119.06, exports: 2936.14, total: 5055.2 },
  { period: '2022-11', imports: 2248.31, exports: 2906.15, total: 5154.46 },
  { period: '2022-12', imports: 2278.93, exports: 2969.0, total: 5247.93 },
  { period: '2023-01', imports: 1925.47, exports: 2844.09, total: 4769.55 },
  { period: '2023-02', imports: 1966.21, exports: 2086.41, total: 4052.62 },
  { period: '2023-03', imports: 2253.75, exports: 3024.48, total: 5278.23 },
  { period: '2023-04', imports: 2030.29, exports: 2880.77, total: 4911.06 },
  { period: '2023-05', imports: 2157.67, exports: 2809.19, total: 4966.85 },
  { period: '2023-06', imports: 2138.19, exports: 2833.77, total: 4971.95 },
  { period: '2023-07', imports: 2013.83, exports: 2807.79, total: 4821.61 },
  { period: '2023-08', imports: 2166.2, exports: 2838.39, total: 5004.59 },
  { period: '2023-09', imports: 2213.33, exports: 2964.53, total: 5177.86 },
  { period: '2023-10', imports: 2183.36, exports: 2741.98, total: 4925.35 },
  { period: '2023-11', imports: 2235.64, exports: 2926.29, total: 5161.92 },
  { period: '2023-12', imports: 2285.49, exports: 3032.76, total: 5318.25 },
  { period: '2024-01', imports: 2225.29, exports: 3062.24, total: 5287.53 },
  { period: '2024-02', imports: 1806.75, exports: 2216.59, total: 4023.34 },
  { period: '2024-03', imports: 2205.6, exports: 2791.38, total: 4996.99 },
  { period: '2024-04', imports: 2198.38, exports: 2917.17, total: 5115.56 },
  { period: '2024-05', imports: 2202.07, exports: 3016.03, total: 5218.1 },
  { period: '2024-06', imports: 2081.98, exports: 3072.36, total: 5154.34 },
  { period: '2024-07', imports: 2147.44, exports: 3002.24, total: 5149.68 },
  { period: '2024-08', imports: 2166.9, exports: 3082.42, total: 5249.32 },
  { period: '2024-09', imports: 2216.15, exports: 3033.72, total: 5249.88 },
  { period: '2024-10', imports: 2131.39, exports: 3088.55, total: 5219.94 },
  { period: '2024-11', imports: 2145.51, exports: 3118.77, total: 5264.29 },
  { period: '2024-12', imports: 2304.7, exports: 3356.46, total: 5661.16 },
  { period: '2025-01', imports: 1862.9, exports: 3242.82, total: 5105.72 },
  { period: '2025-02', imports: 1835.61, exports: 2147.77, total: 3983.39 },
  { period: '2025-03', imports: 2111.39, exports: 3130.86, total: 5242.25 },
  { period: '2025-04', imports: 2192.53, exports: 3151.04, total: 5343.58 },
  { period: '2025-05', imports: 2128.57, exports: 3156.03, total: 5284.6 },
  { period: '2025-06', imports: 2107.55, exports: 3249.43, total: 5356.97 },
  { period: '2025-07', imports: 2238.59, exports: 3213.95, total: 5452.54 },
  { period: '2025-08', imports: 2198.09, exports: 3214.44, total: 5412.53 },
  { period: '2025-09', imports: 2380.02, exports: 3282.51, total: 5662.54 },
  { period: '2025-10', imports: 2151.28, exports: 3050.46, total: 5201.73 },
  { period: '2025-11', imports: 2186.04, exports: 3301.63, total: 5487.67 },
  { period: '2025-12', imports: 2436.4, exports: 3577.47, total: 6013.87 },
];
