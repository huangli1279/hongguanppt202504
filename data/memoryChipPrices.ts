// DRAM、NAND Flash 合约月度平均价格（全球半导体观察）

export interface MemoryChipPriceDataPoint {
  period: string;
  dram: number; // 合约平均价:DRAM:DDR5 16GB SO-DIMM
  nand: number; // 合约平均价:NAND Flash:128Gb 16Gx8 MLC
}

// 自 2023-01 起
export const memoryChipPriceData: MemoryChipPriceDataPoint[] = [
  { period: '2023-01', dram: 36.80, nand: 4.14 },
  { period: '2023-02', dram: 36.80, nand: 4.14 },
  { period: '2023-03', dram: 36.80, nand: 3.93 },
  { period: '2023-04', dram: 30.13, nand: 3.82 },
  { period: '2023-05', dram: 29.21, nand: 3.82 },
  { period: '2023-06', dram: 28.52, nand: 3.82 },
  { period: '2023-07', dram: 29.60, nand: 3.82 },
  { period: '2023-08', dram: 29.60, nand: 3.82 },
  { period: '2023-09', dram: 29.60, nand: 3.82 },
  { period: '2023-10', dram: 33.00, nand: 3.88 },
  { period: '2023-11', dram: 34.00, nand: 4.09 },
  { period: '2023-12', dram: 34.00, nand: 4.33 },
  { period: '2024-01', dram: 38.00, nand: 4.72 },
  { period: '2024-02', dram: 38.00, nand: 4.90 },
  { period: '2024-03', dram: 38.00, nand: 4.90 },
  { period: '2024-04', dram: 44.50, nand: 4.90 },
  { period: '2024-05', dram: 44.50, nand: 4.90 },
  { period: '2024-06', dram: 44.50, nand: 4.90 },
  { period: '2024-07', dram: 49.00, nand: 4.90 },
  { period: '2024-08', dram: 49.00, nand: 4.90 },
  { period: '2024-09', dram: 49.00, nand: 4.34 },
  { period: '2024-10', dram: 49.00, nand: 3.07 },
  { period: '2024-11', dram: 46.50, nand: 2.16 },
  { period: '2024-12', dram: 46.50, nand: 2.08 },
  { period: '2025-01', dram: 42.50, nand: 2.18 },
  { period: '2025-02', dram: 41.50, nand: 2.29 },
  { period: '2025-03', dram: 41.50, nand: 2.51 },
  { period: '2025-04', dram: 44.00, nand: 2.79 },
  { period: '2025-05', dram: 44.00, nand: 2.92 },
  { period: '2025-06', dram: 44.00, nand: 3.12 },
  { period: '2025-07', dram: 47.00, nand: 3.39 },
  { period: '2025-08', dram: 47.00, nand: 3.42 },
  { period: '2025-09', dram: 47.00, nand: 3.79 },
  { period: '2025-10', dram: 59.00, nand: 4.35 },
  { period: '2025-11', dram: 65.50, nand: 5.19 },
  { period: '2025-12', dram: 72.00, nand: 5.74 },
  { period: '2026-01', dram: 134.00, nand: 9.46 },
  { period: '2026-02', dram: 140.00, nand: 12.67 },
  { period: '2026-03', dram: 142.00, nand: 17.73 },
  { period: '2026-04', dram: 201.00, nand: 24.16 },
  { period: '2026-05', dram: 205.00, nand: 26.51 },
];
