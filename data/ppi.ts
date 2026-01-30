// PPI 及大宗商品价格数据

export interface PpiDataPoint {
  period: string;
  ppiYoy: number;
}

export interface CommodityPriceDataPoint {
  period: string;
  energy: number;      // 能源类
  nonFerrous: number;  // 有色类
  mineral: number;     // 矿产类
  steel: number;       // 钢铁类
}

// PPI 同比数据
export const ppiYoyData: PpiDataPoint[] = [
  { period: '2024-01', ppiYoy: -2.50 },
  { period: '2024-02', ppiYoy: -2.70 },
  { period: '2024-03', ppiYoy: -2.80 },
  { period: '2024-04', ppiYoy: -2.50 },
  { period: '2024-05', ppiYoy: -1.40 },
  { period: '2024-06', ppiYoy: -0.80 },
  { period: '2024-07', ppiYoy: -0.80 },
  { period: '2024-08', ppiYoy: -1.80 },
  { period: '2024-09', ppiYoy: -2.80 },
  { period: '2024-10', ppiYoy: -2.90 },
  { period: '2024-11', ppiYoy: -2.50 },
  { period: '2024-12', ppiYoy: -2.30 },
  { period: '2025-01', ppiYoy: -2.30 },
  { period: '2025-02', ppiYoy: -2.20 },
  { period: '2025-03', ppiYoy: -2.50 },
  { period: '2025-04', ppiYoy: -2.70 },
  { period: '2025-05', ppiYoy: -3.30 },
  { period: '2025-06', ppiYoy: -3.60 },
  { period: '2025-07', ppiYoy: -3.60 },
  { period: '2025-08', ppiYoy: -2.90 },
  { period: '2025-09', ppiYoy: -2.30 },
  { period: '2025-10', ppiYoy: -2.10 },
  { period: '2025-11', ppiYoy: -2.20 },
  { period: '2025-12', ppiYoy: -1.90 },
];

// 大宗商品价格指数数据
export const commodityPriceData: CommodityPriceDataPoint[] = [
  { period: '2024-01', energy: 154.68, nonFerrous: 104.54, mineral: 186.53, steel: 116.82 },
  { period: '2024-02', energy: 157.75, nonFerrous: 103.82, mineral: 183.66, steel: 116.26 },
  { period: '2024-03', energy: 160.18, nonFerrous: 106.13, mineral: 174.53, steel: 112.20 },
  { period: '2024-04', energy: 163.85, nonFerrous: 112.36, mineral: 169.45, steel: 109.63 },
  { period: '2024-05', energy: 160.12, nonFerrous: 119.34, mineral: 180.04, steel: 110.88 },
  { period: '2024-06', energy: 159.34, nonFerrous: 117.94, mineral: 178.01, steel: 108.05 },
  { period: '2024-07', energy: 161.41, nonFerrous: 115.39, mineral: 181.60, steel: 105.03 },
  { period: '2024-08', energy: 154.95, nonFerrous: 110.24, mineral: 176.51, steel: 97.14 },
  { period: '2024-09', energy: 146.85, nonFerrous: 111.87, mineral: 170.44, steel: 94.59 },
  { period: '2024-10', energy: 150.51, nonFerrous: 116.46, mineral: 172.81, steel: 105.23 },
  { period: '2024-11', energy: 148.27, nonFerrous: 115.53, mineral: 174.00, steel: 101.53 },
  { period: '2024-12', energy: 145.73, nonFerrous: 114.51, mineral: 176.07, steel: 101.30 },
  { period: '2025-01', energy: 149.57, nonFerrous: 113.23, mineral: 172.04, steel: 99.59 },
  { period: '2025-02', energy: 146.25, nonFerrous: 115.19, mineral: 170.49, steel: 99.51 },
  { period: '2025-03', energy: 138.47, nonFerrous: 117.99, mineral: 169.87, steel: 98.11 },
  { period: '2025-04', energy: 130.39, nonFerrous: 114.17, mineral: 165.69, steel: 96.65 },
  { period: '2025-05', energy: 126.12, nonFerrous: 114.89, mineral: 164.12, steel: 95.73 },
  { period: '2025-06', energy: 129.68, nonFerrous: 115.69, mineral: 159.93, steel: 93.39 },
  { period: '2025-07', energy: 128.03, nonFerrous: 116.58, mineral: 158.54, steel: 95.38 },
  { period: '2025-08', energy: 129.17, nonFerrous: 116.10, mineral: 166.89, steel: 98.29 },
  { period: '2025-09', energy: 130.88, nonFerrous: 116.95, mineral: 169.37, steel: 96.58 },
  { period: '2025-10', energy: 127.25, nonFerrous: 120.98, mineral: 172.50, steel: 95.28 },
  { period: '2025-11', energy: 127.60, nonFerrous: 123.00, mineral: 174.60, steel: 94.80 },
  { period: '2025-12', energy: 124.50, nonFerrous: 127.60, mineral: 173.40, steel: 95.40 },
];
