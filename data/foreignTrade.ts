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
