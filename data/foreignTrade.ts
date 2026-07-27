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

// Q1出口月度同比对比数据
export interface Q1ExportCompareDataPoint {
  month: string;
  y2024: number;
  y2025: number;
}

export const q1ExportCompareData: Q1ExportCompareDataPoint[] = [
  { month: '1月', y2024: 7.67, y2025: 5.9 },
  { month: '2月', y2024: 6.24, y2025: -3.1 },
  { month: '3月', y2024: -7.71, y2025: 12.2 },
];

export interface ForeignTradeMonthlyUsdDataPoint {
  period: string;
  imports: number;
  exports: number;
  surplus?: number;
}

// 进出口及其差额：累计同比走势（美元计价）
export const foreignTradeCumulativeYoyData: ForeignTradeMonthlyUsdDataPoint[] = [
  { period: '2022-01', imports: 20.79, exports: 22.74, surplus: 29.15 },
  { period: '2022-02', imports: 16.49, exports: 15.03, surplus: 9.40 },
  { period: '2022-03', imports: 10.37, exports: 14.49, surplus: 37.39 },
  { period: '2022-04', imports: 7.57, exports: 11.17, surplus: 31.12 },
  { period: '2022-05', imports: 6.68, exports: 12.08, surplus: 41.54 },
  { period: '2022-06', imports: 5.41, exports: 12.69, surplus: 51.24 },
  { period: '2022-07', imports: 4.78, exports: 13.28, surplus: 56.41 },
  { period: '2022-08', imports: 4.06, exports: 12.24, surplus: 52.34 },
  { period: '2022-09', imports: 3.51, exports: 11.25, surplus: 47.42 },
  { period: '2022-10', imports: 3.04, exports: 9.79, surplus: 38.98 },
  { period: '2022-11', imports: 1.57, exports: 7.62, surplus: 33.21 },
  { period: '2022-12', imports: 0.74, exports: 5.58, surplus: 24.99 },
  { period: '2023-01', imports: -21.08, exports: -12.02, surplus: 15.83 },
  { period: '2023-02', imports: -10.04, exports: -8.37, surplus: -1.52 },
  { period: '2023-03', imports: -7.25, exports: -1.90, surplus: 21.99 },
  { period: '2023-04', imports: -7.65, exports: 0.34, surplus: 36.67 },
  { period: '2023-05', imports: -7.16, exports: -1.40, surplus: 22.32 },
  { period: '2023-06', imports: -7.15, exports: -3.48, surplus: 10.07 },
  { period: '2023-07', imports: -7.88, exports: -5.21, surplus: 3.86 },
  { period: '2023-08', imports: -7.79, exports: -5.65, surplus: 1.49 },
  { period: '2023-09', imports: -7.61, exports: -5.80, surplus: 0.16 },
  { period: '2023-10', imports: -6.61, exports: -5.88, surplus: -3.53 },
  { period: '2023-11', imports: -6.06, exports: -5.29, surplus: -2.80 },
  { period: '2023-12', imports: -5.53, exports: -4.67, surplus: -1.89 },
  { period: '2024-01', imports: 15.57, exports: 7.67, surplus: -8.89 },
  { period: '2024-02', imports: 3.61, exports: 7.06, surplus: 20.02 },
  { period: '2024-03', imports: 1.50, exports: 1.45, surplus: 1.27 },
  { period: '2024-04', imports: 3.18, exports: 1.40, surplus: -4.09 },
  { period: '2024-05', imports: 2.95, exports: 2.63, surplus: 1.62 },
  { period: '2024-06', imports: 1.99, exports: 3.62, surplus: 8.70 },
  { period: '2024-07', imports: 2.64, exports: 4.10, surplus: 8.53 },
  { period: '2024-08', imports: 2.30, exports: 4.68, surplus: 11.93 },
  { period: '2024-09', imports: 2.04, exports: 4.40, surplus: 11.55 },
  { period: '2024-10', imports: 1.59, exports: 5.21, surplus: 16.48 },
  { period: '2024-11', imports: 1.05, exports: 5.34, surplus: 18.74 },
  { period: '2024-12', imports: 1.03, exports: 5.82, surplus: 20.74 },
  { period: '2025-01', imports: -16.25, exports: 5.89, surplus: 64.76 },
  { period: '2025-02', imports: -8.25, exports: 2.11, surplus: 35.61 },
  { period: '2025-03', imports: -6.84, exports: 5.58, surplus: 47.87 },
  { period: '2025-04', imports: -5.13, exports: 6.23, surplus: 43.78 },
  { period: '2025-05', imports: -4.75, exports: 5.89, surplus: 39.51 },
  { period: '2025-06', imports: -3.76, exports: 5.85, surplus: 33.91 },
  { period: '2025-07', imports: -2.61, exports: 6.02, surplus: 30.63 },
  { period: '2025-08', imports: -2.06, exports: 5.78, surplus: 27.60 },
  { period: '2025-09', imports: -0.90, exports: 6.06, surplus: 25.35 },
  { period: '2025-10', imports: -0.63, exports: 5.28, surplus: 21.30 },
  { period: '2025-11', imports: -0.34, exports: 5.33, surplus: 20.38 },
  { period: '2025-12', imports: 0.27, exports: 5.44, surplus: 18.90 },
  { period: '2026-01', imports: 26.60, exports: 10.00, surplus: -12.54 },
  { period: '2026-02', imports: 20.50, exports: 21.80, surplus: 24.49 },
  { period: '2026-03', imports: 23.40, exports: 14.70, surplus: -3.85 },
  { period: '2026-04', imports: 23.90, exports: 14.50, surplus: -5.92 },
  { period: '2026-05', imports: 24.60, exports: 15.50, surplus: -4.08 },
  { period: '2026-06', imports: 26.60, exports: 17.60, surplus: -1.25 },
];

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
  { period: '2026-01', imports: 25.7, exports: 10.0 },
  { period: '2026-02', imports: 13.9, exports: 39.6 },
  { period: '2026-03', imports: 27.8, exports: 2.5 },
];

export interface ForeignTradeMonthlyValueDataPoint {
  period: string;
  imports: number;
  exports: number;
  total: number;
  surplus: number;
}

export const foreignTradeMonthlyValuesData: ForeignTradeMonthlyValueDataPoint[] = [
  { period: '2021-01', imports: 2019.75, exports: 2633.82, total: 4653.57, surplus: 614.07 },
  { period: '2021-02', imports: 1693.78, exports: 2043.85, total: 3737.63, surplus: 350.07 },
  { period: '2021-03', imports: 2289.92, exports: 2405.43, total: 4695.35, surplus: 115.52 },
  { period: '2021-04', imports: 2226.19, exports: 2630.91, total: 4857.1, surplus: 404.73 },
  { period: '2021-05', imports: 2203.94, exports: 2632.29, total: 4836.23, surplus: 428.35 },
  { period: '2021-06', imports: 2308.65, exports: 2803.04, total: 5111.7, surplus: 494.39 },
  { period: '2021-07', imports: 2264.39, exports: 2812.78, total: 5077.17, surplus: 548.4 },
  { period: '2021-08', imports: 2347.26, exports: 2931.71, total: 5278.98, surplus: 584.45 },
  { period: '2021-09', imports: 2371.62, exports: 3046.99, total: 5418.61, surplus: 675.37 },
  { period: '2021-10', imports: 2147.14, exports: 2991.2, total: 5138.34, surplus: 844.06 },
  { period: '2021-11', imports: 2530.12, exports: 3242.77, total: 5772.9, surplus: 712.65 },
  { period: '2021-12', imports: 2464.54, exports: 3396.62, total: 5861.16, surplus: 932.08 },
  { period: '2022-01', imports: 2439.72, exports: 3232.77, total: 5672.49, surplus: 793.06 },
  { period: '2022-02', imports: 1886.2, exports: 2147.96, total: 4034.16, surplus: 261.76 },
  { period: '2022-03', imports: 2300.17, exports: 2728.69, total: 5028.86, surplus: 428.53 },
  { period: '2022-04', imports: 2226.74, exports: 2689.65, total: 4916.39, surplus: 462.91 },
  { period: '2022-05', imports: 2277.87, exports: 3038.99, total: 5316.86, surplus: 761.11 },
  { period: '2022-06', imports: 2301.0, exports: 3234.07, total: 5535.07, surplus: 933.07 },
  { period: '2022-07', imports: 2292.23, exports: 3274.63, total: 5566.87, surplus: 982.4 },
  { period: '2022-08', imports: 2333.92, exports: 3103.86, total: 5437.78, surplus: 769.95 },
  { period: '2022-09', imports: 2360.92, exports: 3182.43, total: 5543.35, surplus: 821.51 },
  { period: '2022-10', imports: 2119.06, exports: 2936.14, total: 5055.2, surplus: 817.07 },
  { period: '2022-11', imports: 2248.31, exports: 2906.15, total: 5154.46, surplus: 657.85 },
  { period: '2022-12', imports: 2278.93, exports: 2969.0, total: 5247.93, surplus: 690.07 },
  { period: '2023-01', imports: 1925.47, exports: 2844.09, total: 4769.55, surplus: 918.62 },
  { period: '2023-02', imports: 1966.21, exports: 2086.41, total: 4052.62, surplus: 120.2 },
  { period: '2023-03', imports: 2253.75, exports: 3024.48, total: 5278.23, surplus: 770.73 },
  { period: '2023-04', imports: 2030.29, exports: 2880.77, total: 4911.06, surplus: 850.48 },
  { period: '2023-05', imports: 2157.67, exports: 2809.19, total: 4966.85, surplus: 651.52 },
  { period: '2023-06', imports: 2138.19, exports: 2833.77, total: 4971.95, surplus: 695.58 },
  { period: '2023-07', imports: 2013.83, exports: 2807.79, total: 4821.61, surplus: 793.96 },
  { period: '2023-08', imports: 2166.2, exports: 2838.39, total: 5004.59, surplus: 672.19 },
  { period: '2023-09', imports: 2213.33, exports: 2964.53, total: 5177.86, surplus: 751.2 },
  { period: '2023-10', imports: 2183.36, exports: 2741.98, total: 4925.35, surplus: 558.62 },
  { period: '2023-11', imports: 2235.64, exports: 2926.29, total: 5161.92, surplus: 690.65 },
  { period: '2023-12', imports: 2285.49, exports: 3032.76, total: 5318.25, surplus: 747.27 },
  { period: '2024-01', imports: 2225.29, exports: 3062.24, total: 5287.53, surplus: 836.95 },
  { period: '2024-02', imports: 1806.75, exports: 2216.59, total: 4023.34, surplus: 409.84 },
  { period: '2024-03', imports: 2205.6, exports: 2791.38, total: 4996.99, surplus: 585.78 },
  { period: '2024-04', imports: 2198.38, exports: 2917.17, total: 5115.56, surplus: 718.79 },
  { period: '2024-05', imports: 2202.07, exports: 3016.03, total: 5218.1, surplus: 813.96 },
  { period: '2024-06', imports: 2081.98, exports: 3072.36, total: 5154.34, surplus: 990.37 },
  { period: '2024-07', imports: 2147.44, exports: 3002.24, total: 5149.68, surplus: 854.79 },
  { period: '2024-08', imports: 2166.9, exports: 3082.42, total: 5249.32, surplus: 915.53 },
  { period: '2024-09', imports: 2216.15, exports: 3033.72, total: 5249.88, surplus: 817.57 },
  { period: '2024-10', imports: 2131.39, exports: 3088.55, total: 5219.94, surplus: 957.17 },
  { period: '2024-11', imports: 2145.51, exports: 3118.77, total: 5264.29, surplus: 973.26 },
  { period: '2024-12', imports: 2304.7, exports: 3356.46, total: 5661.16, surplus: 1051.76 },
  { period: '2025-01', imports: 1862.9, exports: 3242.82, total: 5105.72, surplus: 1379.92 },
  { period: '2025-02', imports: 1835.61, exports: 2147.77, total: 3983.39, surplus: 312.16 },
  { period: '2025-03', imports: 2111.39, exports: 3130.86, total: 5242.25, surplus: 1019.47 },
  { period: '2025-04', imports: 2192.53, exports: 3151.04, total: 5343.58, surplus: 958.51 },
  { period: '2025-05', imports: 2128.57, exports: 3156.03, total: 5284.6, surplus: 1027.46 },
  { period: '2025-06', imports: 2107.55, exports: 3249.43, total: 5356.97, surplus: 1141.88 },
  { period: '2025-07', imports: 2238.59, exports: 3213.95, total: 5452.54, surplus: 975.36 },
  { period: '2025-08', imports: 2198.09, exports: 3214.44, total: 5412.53, surplus: 1016.35 },
  { period: '2025-09', imports: 2380.02, exports: 3282.51, total: 5662.54, surplus: 902.49 },
  { period: '2025-10', imports: 2151.28, exports: 3050.46, total: 5201.73, surplus: 899.18 },
  { period: '2025-11', imports: 2186.04, exports: 3301.63, total: 5487.67, surplus: 1115.6 },
  { period: '2025-12', imports: 2436.4, exports: 3577.47, total: 6013.87, surplus: 1141.07 },
  { period: '2026-01', imports: 2342.34, exports: 3566.54, total: 5908.88, surplus: 1224.19 },
  { period: '2026-02', imports: 2090.23, exports: 2998.08, total: 5088.31, surplus: 907.85 },
  { period: '2026-03', imports: 2699.04, exports: 3210.33, total: 5909.37, surplus: 511.29 },
];

// 对美出口美元计价：当月同比及当月值
export interface UsExportMonthlyDataPoint {
  period: string;
  yoy: number;      // 当月同比 (%)
  value: number;    // 当月值 (百万美元)
}

export const usExportMonthlyData: UsExportMonthlyDataPoint[] = [
  { period: '2024-01', yoy: -4.00, value: 42633.06 },
  { period: '2024-02', yoy: 13.36, value: 30786.82 },
  { period: '2024-03', yoy: -15.92, value: 36723.78 },
  { period: '2024-04', yoy: -2.80, value: 41819.62 },
  { period: '2024-05', yoy: 3.62, value: 44015.61 },
  { period: '2024-06', yoy: 6.60, value: 45512.52 },
  { period: '2024-07', yoy: 8.10, value: 45739.02 },
  { period: '2024-08', yoy: 4.94, value: 47254.29 },
  { period: '2024-09', yoy: 2.16, value: 47015.10 },
  { period: '2024-10', yoy: 8.10, value: 46663.41 },
  { period: '2024-11', yoy: 8.00, value: 47309.39 },
  { period: '2024-12', yoy: 15.59, value: 48829.73 },
  { period: '2025-01', yoy: 12.11, value: 47794.60 },
  { period: '2025-02', yoy: -9.82, value: 27763.82 },
  { period: '2025-03', yoy: 9.09, value: 40061.12 },
  { period: '2025-04', yoy: -21.03, value: 33023.95 },
  { period: '2025-05', yoy: -34.52, value: 28819.29 },
  { period: '2025-06', yoy: -16.13, value: 38169.68 },
  { period: '2025-07', yoy: -21.67, value: 35827.48 },
  { period: '2025-08', yoy: -33.12, value: 31604.04 },
  { period: '2025-09', yoy: -27.03, value: 34307.64 },
  { period: '2025-10', yoy: -25.17, value: 34920.32 },
  { period: '2025-11', yoy: -28.58, value: 33789.10 },
  { period: '2025-12', yoy: -30.01, value: 34175.40 },
  { period: '2026-01', yoy: -23.02, value: 36790.55 },
  { period: '2026-02', yoy: 9.68, value: 30450.57 },
  { period: '2026-03', yoy: -26.49, value: 29447.69 },
  { period: '2026-04', yoy: 11.31, value: 36760.55 },
  { period: '2026-05', yoy: 35.41, value: 39025.52 },
  { period: '2026-06', yoy: 13.87, value: 43463.83 },
];

// 2026年1-6月主要国别（地区）进出口（美元值，精简）
// 原始单位：百万美元 → 表内金额换算为亿美元
export interface TradeByCountryDataPoint {
  region: string;
  exportAmount: number;   // 1-6月出口（亿美元）
  exportYoy: number;      // 出口累计同比（%）
  importAmount: number;   // 1-6月进口（亿美元）
  importYoy: number;      // 进口累计同比（%）
  highlight?: boolean;
}

export const tradeByCountryH1Data: TradeByCountryDataPoint[] = [
  { region: '总值', exportAmount: 21253.6, exportYoy: 17.6, importAmount: 15493.8, importYoy: 26.6 },
  { region: '东盟', exportAmount: 3962.3, exportYoy: 22.9, importAmount: 2299.1, importYoy: 22.0 },
  { region: '欧盟', exportAmount: 3122.6, exportYoy: 16.8, importAmount: 1356.3, importYoy: 8.7 },
  { region: '美国', exportAmount: 2159.2, exportYoy: 0.2, importAmount: 732.3, importYoy: -0.8, highlight: true },
  { region: '非洲', exportAmount: 1300.1, exportYoy: 26.2, importAmount: 735.3, importYoy: 20.3 },
  { region: '共建“一带一路”', exportAmount: 10762.6, exportYoy: 17.9, importAmount: 7949.4, importYoy: 20.5, highlight: true },
];
