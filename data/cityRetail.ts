/**
 * 一线城市社零及城乡消费数据
 */

export interface CityRetailDataPoint {
  period: string;
  guangzhou: number | null;  // 广州
  shenzhen: number | null;   // 深圳
  beijing: number | null;    // 北京
  shanghai: number | null;   // 上海
}

export interface UrbanRuralRetailDataPoint {
  period: string;
  rural: number;    // 乡村
  urban: number;    // 城镇
}

// 2024-2025年一线城市社会消费品零售总额累计同比变化
export const cityRetailData: CityRetailDataPoint[] = [
  { period: '2024-02', guangzhou: 6.50, shenzhen: 5.63, beijing: 2.60, shanghai: 1.90 },
  { period: '2024-03', guangzhou: 3.50, shenzhen: 4.30, beijing: -0.10, shanghai: 0.10 },
  { period: '2024-04', guangzhou: 2.50, shenzhen: 2.30, beijing: -0.20, shanghai: -1.30 },
  { period: '2024-05', guangzhou: 2.00, shenzhen: 1.78, beijing: 1.00, shanghai: -0.70 },
  { period: '2024-06', guangzhou: 0.00, shenzhen: 1.00, beijing: -0.30, shanghai: -2.30 },
  { period: '2024-07', guangzhou: -0.30, shenzhen: 1.17, beijing: -0.80, shanghai: -2.80 },
  { period: '2024-08', guangzhou: -0.50, shenzhen: 1.07, beijing: -0.93, shanghai: -3.30 },
  { period: '2024-09', guangzhou: 0.10, shenzhen: 0.67, beijing: -1.60, shanghai: -3.40 },
  { period: '2024-10', guangzhou: 0.50, shenzhen: 0.96, beijing: -1.30, shanghai: -2.00 },
  { period: '2024-11', guangzhou: 0.30, shenzhen: 1.51, beijing: -2.80, shanghai: -3.10 },
  { period: '2024-12', guangzhou: 0.00, shenzhen: 1.08, beijing: -2.70, shanghai: -3.10 },
  { period: '2025-02', guangzhou: 1.20, shenzhen: 1.66, beijing: -0.10, shanghai: -1.00 },
  { period: '2025-03', guangzhou: 3.50, shenzhen: 3.05, beijing: -3.30, shanghai: -1.10 },
  { period: '2025-04', guangzhou: 4.00, shenzhen: 3.66, beijing: -3.70, shanghai: -0.30 },
  { period: '2025-05', guangzhou: 5.10, shenzhen: 4.66, beijing: -3.10, shanghai: 1.40 },
  { period: '2025-06', guangzhou: 5.90, shenzhen: 3.47, beijing: -3.80, shanghai: 1.70 },
  { period: '2025-07', guangzhou: 5.40, shenzhen: 3.60, beijing: -4.20, shanghai: 2.50 },
  { period: '2025-08', guangzhou: 4.90, shenzhen: 3.83, beijing: -5.10, shanghai: 3.70 },
  { period: '2025-09', guangzhou: 4.10, shenzhen: 3.63, beijing: -5.10, shanghai: 4.30 },
  { period: '2025-10', guangzhou: 3.80, shenzhen: 4.02, beijing: -3.20, shanghai: 4.80 },
  { period: '2025-11', guangzhou: 4.20, shenzhen: 2.77, beijing: -3.10, shanghai: 5.00 },
  { period: '2025-12', guangzhou: null, shenzhen: null, beijing: -2.90, shanghai: 4.60 },
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
