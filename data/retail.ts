/**
 * 社会消费品零售数据
 */

export interface RetailTrendDataPoint {
  period: string;
  totalRetail: number;      // 社会消费品零售总额:累计同比
  serviceRetail: number;    // 服务零售额:累计同比
  goodsRetail: number;      // 商品零售额:累计同比
}

export interface RetailMonthlyDataPoint {
  period: string;
  monthlyYoy: number;       // 社会消费品零售总额:当月同比
}

// 2024-2025年全国社零总额及服务/商品零售累计同比走势
export const retailTrendData: RetailTrendDataPoint[] = [
  { period: '2024-02', totalRetail: 5.50, serviceRetail: 12.3, goodsRetail: 4.6 },
  { period: '2024-03', totalRetail: 4.70, serviceRetail: 10.0, goodsRetail: 4.0 },
  { period: '2024-04', totalRetail: 4.10, serviceRetail: 8.4, goodsRetail: 3.5 },
  { period: '2024-05', totalRetail: 4.10, serviceRetail: 7.9, goodsRetail: 3.5 },
  { period: '2024-06', totalRetail: 3.70, serviceRetail: 7.5, goodsRetail: 3.2 },
  { period: '2024-07', totalRetail: 3.50, serviceRetail: 7.2, goodsRetail: 3.1 },
  { period: '2024-08', totalRetail: 3.40, serviceRetail: 6.9, goodsRetail: 3.0 },
  { period: '2024-09', totalRetail: 3.30, serviceRetail: 6.7, goodsRetail: 3.0 },
  { period: '2024-10', totalRetail: 3.50, serviceRetail: 6.5, goodsRetail: 3.2 },
  { period: '2024-11', totalRetail: 3.50, serviceRetail: 6.4, goodsRetail: 3.2 },
  { period: '2024-12', totalRetail: 3.50, serviceRetail: 6.2, goodsRetail: 3.2 },
  { period: '2025-02', totalRetail: 4.00, serviceRetail: 4.9, goodsRetail: 3.9 },
  { period: '2025-03', totalRetail: 4.60, serviceRetail: 5.0, goodsRetail: 4.6 },
  { period: '2025-04', totalRetail: 4.70, serviceRetail: 5.1, goodsRetail: 4.7 },
  { period: '2025-05', totalRetail: 5.00, serviceRetail: 5.2, goodsRetail: 5.1 },
  { period: '2025-06', totalRetail: 5.00, serviceRetail: 5.3, goodsRetail: 5.1 },
  { period: '2025-07', totalRetail: 4.80, serviceRetail: 5.2, goodsRetail: 4.9 },
  { period: '2025-08', totalRetail: 4.60, serviceRetail: 5.1, goodsRetail: 4.8 },
  { period: '2025-09', totalRetail: 4.50, serviceRetail: 5.2, goodsRetail: 4.6 },
  { period: '2025-10', totalRetail: 4.30, serviceRetail: 5.3, goodsRetail: 4.4 },
  { period: '2025-11', totalRetail: 4.00, serviceRetail: 5.4, goodsRetail: 4.1 },
  { period: '2025-12', totalRetail: 3.69, serviceRetail: 5.5, goodsRetail: 3.76 },
];

// 2024-2025年全国社会消费品零售总额当月同比走势
export const retailMonthlyData: RetailMonthlyDataPoint[] = [
  { period: '2024-03', monthlyYoy: 3.10 },
  { period: '2024-04', monthlyYoy: 2.30 },
  { period: '2024-05', monthlyYoy: 3.70 },
  { period: '2024-06', monthlyYoy: 2.00 },
  { period: '2024-07', monthlyYoy: 2.70 },
  { period: '2024-08', monthlyYoy: 2.10 },
  { period: '2024-09', monthlyYoy: 3.20 },
  { period: '2024-10', monthlyYoy: 4.80 },
  { period: '2024-11', monthlyYoy: 3.00 },
  { period: '2024-12', monthlyYoy: 3.70 },
  { period: '2025-03', monthlyYoy: 5.90 },
  { period: '2025-04', monthlyYoy: 5.10 },
  { period: '2025-05', monthlyYoy: 6.40 },
  { period: '2025-06', monthlyYoy: 4.80 },
  { period: '2025-07', monthlyYoy: 3.70 },
  { period: '2025-08', monthlyYoy: 3.40 },
  { period: '2025-09', monthlyYoy: 3.00 },
  { period: '2025-10', monthlyYoy: 2.90 },
  { period: '2025-11', monthlyYoy: 1.30 },
  { period: '2025-12', monthlyYoy: 0.86 },
];
