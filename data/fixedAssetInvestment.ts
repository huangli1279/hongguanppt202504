// 2024-2026年固定资产投资数据

export interface FixedAssetInvestmentDataPoint {
  period: string;
  fixedAsset: number;        // 固定资产投资
  manufacturing: number;     // 制造业投资
  realEstate: number;        // 房地产开发投资
  infrastructure: number;    // 基础设施建设投资
}

export interface PrivateInvestmentDataPoint {
  period: string;
  privateInvestment: number;     // 民间固定资产投资
  stateOwned: number;            // 国有及国有控股资产投资
}

// 固定资产投资关键分项累计同比数据
export const fixedAssetInvestmentData: FixedAssetInvestmentDataPoint[] = [
  { period: '2024-06', fixedAsset: 3.90, manufacturing: 9.50, realEstate: -10.10, infrastructure: 7.70 },
  { period: '2024-07', fixedAsset: 3.60, manufacturing: 9.30, realEstate: -10.20, infrastructure: 8.14 },
  { period: '2024-08', fixedAsset: 3.40, manufacturing: 9.10, realEstate: -10.20, infrastructure: 7.87 },
  { period: '2024-09', fixedAsset: 3.40, manufacturing: 9.20, realEstate: -10.10, infrastructure: 9.26 },
  { period: '2024-10', fixedAsset: 3.40, manufacturing: 9.30, realEstate: -10.30, infrastructure: 9.35 },
  { period: '2024-11', fixedAsset: 3.30, manufacturing: 9.30, realEstate: -10.40, infrastructure: 9.39 },
  { period: '2024-12', fixedAsset: 3.20, manufacturing: 9.20, realEstate: -10.60, infrastructure: 9.19 },
  { period: '2025-02', fixedAsset: 4.10, manufacturing: 9.00, realEstate: -9.80, infrastructure: 9.94 },
  { period: '2025-03', fixedAsset: 4.20, manufacturing: 9.10, realEstate: -9.90, infrastructure: 11.50 },
  { period: '2025-04', fixedAsset: 4.00, manufacturing: 8.80, realEstate: -10.30, infrastructure: 10.85 },
  { period: '2025-05', fixedAsset: 3.70, manufacturing: 8.50, realEstate: -10.70, infrastructure: 10.42 },
  { period: '2025-06', fixedAsset: 2.80, manufacturing: 7.50, realEstate: -11.20, infrastructure: 8.90 },
  { period: '2025-07', fixedAsset: 1.60, manufacturing: 6.20, realEstate: -12.00, infrastructure: 7.29 },
  { period: '2025-08', fixedAsset: 0.50, manufacturing: 5.10, realEstate: -12.90, infrastructure: 5.42 },
  { period: '2025-09', fixedAsset: -0.50, manufacturing: 4.00, realEstate: -13.90, infrastructure: 3.34 },
  { period: '2025-10', fixedAsset: -1.70, manufacturing: 2.70, realEstate: -14.70, infrastructure: 1.51 },
  { period: '2025-11', fixedAsset: -2.60, manufacturing: 1.90, realEstate: -15.90, infrastructure: 0.13 },
  { period: '2025-12', fixedAsset: -3.80, manufacturing: 0.60, realEstate: -17.20, infrastructure: -1.48 },
  { period: '2026-02', fixedAsset: 1.80, manufacturing: 3.10, realEstate: -11.10, infrastructure: 11.40 },
  { period: '2026-03', fixedAsset: 1.70, manufacturing: 4.10, realEstate: -11.20, infrastructure: 8.90 },
];

// 民间投资与国有控股投资累计同比数据
export const privateInvestmentData: PrivateInvestmentDataPoint[] = [
  { period: '2025-02', privateInvestment: 0.00, stateOwned: 7.00 },
  { period: '2025-03', privateInvestment: 0.40, stateOwned: 6.50 },
  { period: '2025-04', privateInvestment: 0.20, stateOwned: 6.20 },
  { period: '2025-05', privateInvestment: 0.00, stateOwned: 5.90 },
  { period: '2025-06', privateInvestment: -0.60, stateOwned: 5.00 },
  { period: '2025-07', privateInvestment: -1.50, stateOwned: 3.50 },
  { period: '2025-08', privateInvestment: -2.30, stateOwned: 2.30 },
  { period: '2025-09', privateInvestment: -3.10, stateOwned: 1.00 },
  { period: '2025-10', privateInvestment: -4.50, stateOwned: 0.10 },
  { period: '2025-11', privateInvestment: -5.30, stateOwned: -1.10 },
  { period: '2025-12', privateInvestment: -6.40, stateOwned: -2.50 },
  { period: '2026-02', privateInvestment: -2.60, stateOwned: 7.70 },
  { period: '2026-03', privateInvestment: -2.20, stateOwned: 7.10 },
];
