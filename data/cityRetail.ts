/**
 * 多城市社零及城乡消费数据
 */

export interface CityRetailDataPoint {
  period: string;
  shenzhen: number | null;
  shanghai: number | null;
  beijing: number | null;
  guangzhou: number | null;
  hangzhou: number | null;
  changsha: number | null;
}

export interface UrbanRuralRetailDataPoint {
  period: string;
  rural: number;    // 乡村
  urban: number;    // 城镇
}

// 多城市社会消费品零售总额累计同比
export const cityRetailData: CityRetailDataPoint[] = [
  { period: '2024-02', shenzhen: 5.63, shanghai: 1.90, beijing: 2.60, guangzhou: 6.50, hangzhou: 2.20, changsha: 9.40 },
  { period: '2024-03', shenzhen: 4.30, shanghai: 0.10, beijing: -0.10, guangzhou: 3.50, hangzhou: -0.20, changsha: 7.20 },
  { period: '2024-04', shenzhen: 2.30, shanghai: -1.30, beijing: -0.20, guangzhou: 2.50, hangzhou: -1.00, changsha: 6.30 },
  { period: '2024-05', shenzhen: 1.78, shanghai: -0.70, beijing: 1.00, guangzhou: 2.00, hangzhou: 0.80, changsha: 5.60 },
  { period: '2024-06', shenzhen: 1.00, shanghai: -2.30, beijing: -0.30, guangzhou: 0.00, hangzhou: 0.00, changsha: 5.20 },
  { period: '2024-07', shenzhen: 1.17, shanghai: -2.80, beijing: -0.80, guangzhou: -0.30, hangzhou: 0.60, changsha: 4.90 },
  { period: '2024-08', shenzhen: 1.07, shanghai: -3.30, beijing: -0.93, guangzhou: -0.50, hangzhou: 1.00, changsha: 4.60 },
  { period: '2024-09', shenzhen: 0.67, shanghai: -3.40, beijing: -1.60, guangzhou: 0.10, hangzhou: 2.00, changsha: 4.70 },
  { period: '2024-10', shenzhen: 0.96, shanghai: -2.00, beijing: -1.30, guangzhou: 0.50, hangzhou: 3.00, changsha: 4.70 },
  { period: '2024-11', shenzhen: 1.51, shanghai: -3.10, beijing: -2.80, guangzhou: 0.30, hangzhou: 2.60, changsha: 4.50 },
  { period: '2024-12', shenzhen: 1.08, shanghai: -3.10, beijing: -2.70, guangzhou: 0.00, hangzhou: 2.80, changsha: 4.20 },
  { period: '2025-02', shenzhen: 1.66, shanghai: -1.00, beijing: -0.10, guangzhou: 1.20, hangzhou: 6.80, changsha: 1.80 },
  { period: '2025-03', shenzhen: 3.05, shanghai: -1.10, beijing: -3.30, guangzhou: 3.50, hangzhou: 6.30, changsha: 3.50 },
  { period: '2025-04', shenzhen: 3.66, shanghai: -0.30, beijing: -3.70, guangzhou: 4.00, hangzhou: 6.40, changsha: 4.10 },
  { period: '2025-05', shenzhen: 4.66, shanghai: 1.40, beijing: -3.10, guangzhou: 5.10, hangzhou: 7.40, changsha: 4.80 },
  { period: '2025-06', shenzhen: 3.47, shanghai: 1.70, beijing: -3.80, guangzhou: 5.90, hangzhou: 6.00, changsha: 5.60 },
  { period: '2025-07', shenzhen: 3.60, shanghai: 2.50, beijing: -4.20, guangzhou: 5.40, hangzhou: 5.10, changsha: 5.90 },
  { period: '2025-08', shenzhen: 3.83, shanghai: 3.70, beijing: -5.10, guangzhou: 4.90, hangzhou: 5.20, changsha: 5.70 },
  { period: '2025-09', shenzhen: 3.63, shanghai: 4.30, beijing: -5.10, guangzhou: 4.10, hangzhou: 5.10, changsha: 5.50 },
  { period: '2025-10', shenzhen: 4.02, shanghai: 4.80, beijing: -3.20, guangzhou: 3.80, hangzhou: 4.80, changsha: 5.10 },
  { period: '2025-11', shenzhen: 2.77, shanghai: 5.00, beijing: -3.10, guangzhou: 4.20, hangzhou: 4.30, changsha: 4.70 },
  { period: '2025-12', shenzhen: 2.34, shanghai: 4.60, beijing: -2.90, guangzhou: 5.50, hangzhou: 3.80, changsha: 3.90 },
  { period: '2026-02', shenzhen: 2.60, shanghai: 7.20, beijing: -0.30, guangzhou: 10.70, hangzhou: 4.10, changsha: 2.90 },
  { period: '2026-03', shenzhen: 0.47, shanghai: 5.50, beijing: -0.60, guangzhou: 6.60, hangzhou: 3.90, changsha: 2.30 },
  { period: '2026-04', shenzhen: -0.58, shanghai: 3.90, beijing: -1.50, guangzhou: 4.40, hangzhou: 3.50, changsha: 1.70 },
  { period: '2026-05', shenzhen: 0.27, shanghai: 2.00, beijing: -2.50, guangzhou: 2.40, hangzhou: 1.30, changsha: 1.20 },
  { period: '2026-06', shenzhen: 1.20, shanghai: 0.70, beijing: -2.20, guangzhou: null, hangzhou: 1.80, changsha: 0.90 },
];

// 2024-2025年城镇与乡村社会消费品零售总额累计同比
export const urbanRuralRetailData: UrbanRuralRetailDataPoint[] = [
  { period: '2024-02', rural: 5.80, urban: 5.50 },
  { period: '2024-03', rural: 5.20, urban: 4.60 },
  { period: '2024-04', rural: 4.80, urban: 4.00 },
  { period: '2024-05', rural: 4.70, urban: 4.00 },
  { period: '2024-06', rural: 4.50, urban: 3.60 },
  { period: '2024-07', rural: 4.50, urban: 3.40 },
  { period: '2024-08', rural: 4.40, urban: 3.20 },
  { period: '2024-09', rural: 4.40, urban: 3.20 },
  { period: '2024-10', rural: 4.40, urban: 3.40 },
  { period: '2024-11', rural: 4.30, urban: 3.30 },
  { period: '2024-12', rural: 4.30, urban: 3.40 },
  { period: '2025-02', rural: 4.60, urban: 3.80 },
  { period: '2025-03', rural: 4.90, urban: 4.50 },
  { period: '2025-04', rural: 4.80, urban: 4.70 },
  { period: '2025-05', rural: 4.90, urban: 5.10 },
  { period: '2025-06', rural: 4.90, urban: 5.00 },
  { period: '2025-07', rural: 4.70, urban: 4.80 },
  { period: '2025-08', rural: 4.70, urban: 4.60 },
  { period: '2025-09', rural: 4.60, urban: 4.40 },
  { period: '2025-10', rural: 4.57, urban: 4.24 },
  { period: '2025-11', rural: 4.40, urban: 3.90 },
  { period: '2025-12', rural: 4.12, urban: 3.63 },
];
