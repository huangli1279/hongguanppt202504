/**
 * 乘联会（CPCA）乘用车零售销量累计同比数据
 */

export interface CpcaRetailYoyDataPoint {
  period: string;
  fuelRetailYoy: number | null;          // 乘用车:零售销量:燃油:累计同比
  nevRetailYoy: number;                  // 新能源乘用车:零售销量:累计同比
  narrowPassengerCarYoy: number;         // 乘用车:零售销量:狭义乘用车:累计同比
}

// 2025-03 至 2026-10 乘用车零售累计同比走势（来源：乘联会）
export const cpcaRetailYoyData: CpcaRetailYoyDataPoint[] = [
  { period: '2025-03', fuelRetailYoy: -11.77, nevRetailYoy: 36.36, narrowPassengerCarYoy: 5.79 },
  { period: '2025-04', fuelRetailYoy: -9.50, nevRetailYoy: 35.97, narrowPassengerCarYoy: 7.99 },
  { period: '2025-05', fuelRetailYoy: -7.66, nevRetailYoy: 34.23, narrowPassengerCarYoy: 9.19 },
  { period: '2025-06', fuelRetailYoy: -5.29, nevRetailYoy: 33.33, narrowPassengerCarYoy: 10.80 },
  { period: '2025-07', fuelRetailYoy: -4.32, nevRetailYoy: 29.98, narrowPassengerCarYoy: 10.47 },
  { period: '2025-08', fuelRetailYoy: -3.59, nevRetailYoy: 26.41, narrowPassengerCarYoy: 9.80 },
  { period: '2025-09', fuelRetailYoy: -3.65, nevRetailYoy: 24.78, narrowPassengerCarYoy: 9.37 },
  { period: '2025-10', fuelRetailYoy: -4.22, nevRetailYoy: 22.31, narrowPassengerCarYoy: 8.13 },
  { period: '2025-11', fuelRetailYoy: -6.11, nevRetailYoy: 19.60, narrowPassengerCarYoy: 6.06 },
  { period: '2025-12', fuelRetailYoy: -8.79, nevRetailYoy: 17.57, narrowPassengerCarYoy: 3.76 },
  { period: '2026-01', fuelRetailYoy: -9.65, nevRetailYoy: -19.89, narrowPassengerCarYoy: -13.93 },
  { period: '2026-02', fuelRetailYoy: -13.34, nevRetailYoy: -25.77, narrowPassengerCarYoy: -18.93 },
  { period: '2026-03', fuelRetailYoy: -14.26, nevRetailYoy: -21.12, narrowPassengerCarYoy: -17.41 },
  { period: '2026-04', fuelRetailYoy: -19.78, nevRetailYoy: -17.18, narrowPassengerCarYoy: -18.53 },
  { period: '2026-05', fuelRetailYoy: -23.73, nevRetailYoy: -15.15, narrowPassengerCarYoy: -19.49 },
  { period: '2026-06', fuelRetailYoy: -26.45, nevRetailYoy: -13.99, narrowPassengerCarYoy: -20.19 },
  { period: '2026-07', fuelRetailYoy: -28.39, nevRetailYoy: -12.49, narrowPassengerCarYoy: -20.32 },
  { period: '2026-08', fuelRetailYoy: -29.87, nevRetailYoy: -12.13, narrowPassengerCarYoy: -20.75 },
  { period: '2026-09', fuelRetailYoy: -31.46, nevRetailYoy: -12.80, narrowPassengerCarYoy: -21.71 },
  { period: '2026-10', fuelRetailYoy: null, nevRetailYoy: -12.90, narrowPassengerCarYoy: -22.33 },
];
