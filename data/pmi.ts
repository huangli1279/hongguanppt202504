// PMI 数据

export interface PmiDataPoint {
  period: string;
  pmi: number;
  production: number;
  newOrders: number;
}

export interface PmiByEnterpriseSize {
  period: string;
  small: number;
  medium: number;
  large: number;
}

// 制造业PMI、生产、新订单数据
export const pmiTrendData: PmiDataPoint[] = [
  { period: '2024-01', pmi: 49.2, production: 51.3, newOrders: 49.0 },
  { period: '2024-02', pmi: 49.1, production: 49.8, newOrders: 49.0 },
  { period: '2024-03', pmi: 50.8, production: 52.2, newOrders: 53.0 },
  { period: '2024-04', pmi: 50.4, production: 52.9, newOrders: 51.1 },
  { period: '2024-05', pmi: 49.5, production: 50.8, newOrders: 49.6 },
  { period: '2024-06', pmi: 49.5, production: 50.6, newOrders: 49.5 },
  { period: '2024-07', pmi: 49.4, production: 50.1, newOrders: 49.3 },
  { period: '2024-08', pmi: 49.1, production: 49.8, newOrders: 48.9 },
  { period: '2024-09', pmi: 49.8, production: 51.2, newOrders: 49.9 },
  { period: '2024-10', pmi: 50.1, production: 52.0, newOrders: 50.0 },
  { period: '2024-11', pmi: 50.3, production: 52.4, newOrders: 50.8 },
  { period: '2024-12', pmi: 50.1, production: 52.1, newOrders: 51.0 },
  { period: '2025-01', pmi: 49.1, production: 49.8, newOrders: 49.2 },
  { period: '2025-02', pmi: 50.2, production: 52.5, newOrders: 51.1 },
  { period: '2025-03', pmi: 50.5, production: 52.6, newOrders: 51.8 },
  { period: '2025-04', pmi: 49.0, production: 49.8, newOrders: 49.2 },
  { period: '2025-05', pmi: 49.5, production: 50.7, newOrders: 49.8 },
  { period: '2025-06', pmi: 49.7, production: 51.0, newOrders: 50.2 },
  { period: '2025-07', pmi: 49.3, production: 50.5, newOrders: 49.4 },
  { period: '2025-08', pmi: 49.4, production: 50.8, newOrders: 49.5 },
  { period: '2025-09', pmi: 49.8, production: 51.9, newOrders: 49.7 },
  { period: '2025-10', pmi: 49.0, production: 49.7, newOrders: 48.8 },
  { period: '2025-11', pmi: 49.2, production: 50.0, newOrders: 49.2 },
  { period: '2025-12', pmi: 50.1, production: 51.7, newOrders: 50.8 },
];

// 按企业规模分类的PMI数据
export const pmiByEnterpriseSizeData: PmiByEnterpriseSize[] = [
  { period: '2024-01', small: 47.2, medium: 48.9, large: 50.4 },
  { period: '2024-02', small: 46.4, medium: 49.1, large: 50.4 },
  { period: '2024-03', small: 50.3, medium: 50.6, large: 51.1 },
  { period: '2024-04', small: 50.3, medium: 50.7, large: 50.3 },
  { period: '2024-05', small: 46.7, medium: 49.4, large: 50.7 },
  { period: '2024-06', small: 47.4, medium: 49.8, large: 50.1 },
  { period: '2024-07', small: 46.7, medium: 49.4, large: 50.5 },
  { period: '2024-08', small: 46.4, medium: 48.7, large: 50.4 },
  { period: '2024-09', small: 48.5, medium: 49.2, large: 50.6 },
  { period: '2024-10', small: 47.5, medium: 49.4, large: 51.5 },
  { period: '2024-11', small: 49.1, medium: 50.0, large: 50.9 },
  { period: '2024-12', small: 48.5, medium: 50.7, large: 50.5 },
  { period: '2025-01', small: 46.5, medium: 49.5, large: 49.9 },
  { period: '2025-02', small: 46.3, medium: 49.2, large: 52.5 },
  { period: '2025-03', small: 49.6, medium: 49.9, large: 51.2 },
  { period: '2025-04', small: 48.7, medium: 48.8, large: 49.2 },
  { period: '2025-05', small: 49.3, medium: 47.5, large: 50.7 },
  { period: '2025-06', small: 47.3, medium: 48.6, large: 51.2 },
  { period: '2025-07', small: 46.4, medium: 49.5, large: 50.3 },
  { period: '2025-08', small: 46.6, medium: 48.9, large: 50.8 },
  { period: '2025-09', small: 48.2, medium: 48.8, large: 51.0 },
  { period: '2025-10', small: 47.1, medium: 48.7, large: 49.9 },
  { period: '2025-11', small: 49.1, medium: 48.9, large: 49.3 },
  { period: '2025-12', small: 48.6, medium: 49.8, large: 50.8 },
];
