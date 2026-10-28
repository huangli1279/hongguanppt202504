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

// 固定资产投资及相关分项累计同比数据
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
  { period: '2026-04', fixedAsset: -1.60, manufacturing: 1.20, realEstate: -13.70, infrastructure: 4.30 },
  { period: '2026-05', fixedAsset: -4.10, manufacturing: -0.40, realEstate: -16.20, infrastructure: 0.60 },
  { period: '2026-06', fixedAsset: -5.70, manufacturing: -1.20, realEstate: -18.00, infrastructure: -2.40 },
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
  { period: '2026-04', privateInvestment: -5.20, stateOwned: 2.50 },
  { period: '2026-05', privateInvestment: -7.10, stateOwned: -0.40 },
  { period: '2026-06', privateInvestment: -8.50, stateOwned: -2.30 },
];

// 投资拆分：建筑安装工程、设备购置、其他费用累计同比数据
export interface InvestmentBreakdownDataPoint {
  period: string;
  construction: number;      // 建筑安装工程
  equipment: number;          // 设备工器具购置
  otherExpenses: number;     // 其他费用
}

export const investmentBreakdownData: InvestmentBreakdownDataPoint[] = [
  { period: '2025-02', construction: 1.10, equipment: 18.00, otherExpenses: 3.60 },
  { period: '2025-03', construction: 1.50, equipment: 19.00, otherExpenses: 2.40 },
  { period: '2025-04', construction: 1.40, equipment: 18.20, otherExpenses: 2.30 },
  { period: '2025-05', construction: 1.20, equipment: 17.30, otherExpenses: 2.40 },
  { period: '2025-06', construction: 0.10, equipment: 17.30, otherExpenses: 1.30 },
  { period: '2025-07', construction: -0.80, equipment: 15.20, otherExpenses: -0.20 },
  { period: '2025-08', construction: -2.20, equipment: 14.40, otherExpenses: -0.90 },
  { period: '2025-09', construction: -4.10, equipment: 14.00, otherExpenses: -0.20 },
  { period: '2025-10', construction: -5.40, equipment: 13.00, otherExpenses: -1.50 },
  { period: '2025-11', construction: -6.40, equipment: 12.20, otherExpenses: -2.50 },
  { period: '2025-12', construction: -8.40, equipment: 11.80, otherExpenses: -2.30 },
  { period: '2026-02', construction: 0.60, equipment: 11.50, otherExpenses: -1.90 },
  { period: '2026-03', construction: -0.40, equipment: 13.90, otherExpenses: -1.70 },
  { period: '2026-04', construction: -4.40, equipment: 11.50, otherExpenses: -3.40 },
  { period: '2026-05', construction: -6.60, equipment: 9.30, otherExpenses: -6.40 },
  { period: '2026-06', construction: -8.00, equipment: 8.10, otherExpenses: -8.90 },
];

// 新开工项目计划总投资累计同比
export interface NewProjectInvestmentDataPoint {
  period: string;
  newProjectTotal: number;
}

export const newProjectInvestmentData: NewProjectInvestmentDataPoint[] = [
  { period: '2024-11', newProjectTotal: -7.7 },
  { period: '2024-12', newProjectTotal: -2.9 },
  { period: '2025-02', newProjectTotal: -25.2 },
  { period: '2025-03', newProjectTotal: -11.3 },
  { period: '2025-04', newProjectTotal: -6.7 },
  { period: '2025-05', newProjectTotal: -10.1 },
  { period: '2025-06', newProjectTotal: 0.6 },
  { period: '2025-07', newProjectTotal: -1.9 },
  { period: '2025-08', newProjectTotal: -3.0 },
  { period: '2025-09', newProjectTotal: -3.9 },
  { period: '2025-10', newProjectTotal: -5.8 },
  { period: '2025-11', newProjectTotal: -6.7 },
  { period: '2025-12', newProjectTotal: -7.3 },
  { period: '2026-02', newProjectTotal: -14.7 },
  { period: '2026-03', newProjectTotal: -7.4 },
  { period: '2026-04', newProjectTotal: -18.3 },
  { period: '2026-05', newProjectTotal: -21.0 },
  { period: '2026-06', newProjectTotal: -29.4 },
];

// 投资增速与资金来源分项累计同比
export interface InvestmentFundingDataPoint {
  period: string;
  fixedAsset: number;      // 固定资产投资完成额
  totalFunding: number;    // 资金来源累计
  selfRaised: number;      // 自筹资金
  domesticLoan: number;    // 国内贷款
  stateBudget: number;     // 国家预算内资金
}

export const investmentFundingData: InvestmentFundingDataPoint[] = [
  { period: '2024-02', fixedAsset: 4.20, totalFunding: -6.20, selfRaised: 3.30, domesticLoan: 8.00, stateBudget: 3.40 },
  { period: '2024-03', fixedAsset: 4.50, totalFunding: -5.80, selfRaised: 4.30, domesticLoan: 5.20, stateBudget: 3.50 },
  { period: '2024-04', fixedAsset: 4.20, totalFunding: -5.40, selfRaised: 6.00, domesticLoan: 2.40, stateBudget: 2.00 },
  { period: '2024-05', fixedAsset: 4.00, totalFunding: -5.60, selfRaised: 4.20, domesticLoan: 2.30, stateBudget: 1.30 },
  { period: '2024-06', fixedAsset: 3.90, totalFunding: -4.70, selfRaised: 3.90, domesticLoan: 3.70, stateBudget: 2.80 },
  { period: '2024-07', fixedAsset: 3.60, totalFunding: -4.70, selfRaised: 2.60, domesticLoan: 3.90, stateBudget: 3.10 },
  { period: '2024-08', fixedAsset: 3.40, totalFunding: -4.40, selfRaised: 2.40, domesticLoan: 3.20, stateBudget: 2.40 },
  { period: '2024-09', fixedAsset: 3.40, totalFunding: -4.20, selfRaised: 2.40, domesticLoan: 3.20, stateBudget: 1.80 },
  { period: '2024-10', fixedAsset: 3.40, totalFunding: -3.70, selfRaised: 1.90, domesticLoan: 2.50, stateBudget: 6.30 },
  { period: '2024-11', fixedAsset: 3.30, totalFunding: -3.30, selfRaised: 1.40, domesticLoan: 1.60, stateBudget: 8.10 },
  { period: '2024-12', fixedAsset: 3.20, totalFunding: -2.30, selfRaised: 1.60, domesticLoan: 2.80, stateBudget: 8.50 },
  { period: '2025-02', fixedAsset: 4.10, totalFunding: 3.50, selfRaised: 5.40, domesticLoan: -5.40, stateBudget: 18.90 },
  { period: '2025-03', fixedAsset: 4.20, totalFunding: 3.70, selfRaised: 4.70, domesticLoan: -0.90, stateBudget: 15.60 },
  { period: '2025-04', fixedAsset: 4.00, totalFunding: 3.70, selfRaised: 3.90, domesticLoan: 2.80, stateBudget: 16.70 },
  { period: '2025-05', fixedAsset: 3.70, totalFunding: 3.50, selfRaised: 3.80, domesticLoan: 4.10, stateBudget: 16.60 },
  { period: '2025-06', fixedAsset: 2.80, totalFunding: 2.80, selfRaised: 3.10, domesticLoan: 4.40, stateBudget: 14.80 },
  { period: '2025-07', fixedAsset: 1.60, totalFunding: 1.00, selfRaised: 1.50, domesticLoan: 2.90, stateBudget: 9.40 },
  { period: '2025-08', fixedAsset: 0.50, totalFunding: -0.10, selfRaised: 1.00, domesticLoan: 2.30, stateBudget: 4.30 },
  { period: '2025-09', fixedAsset: -0.50, totalFunding: -1.20, selfRaised: 0.20, domesticLoan: 1.80, stateBudget: -1.70 },
  { period: '2025-10', fixedAsset: -1.70, totalFunding: -2.30, selfRaised: -0.80, domesticLoan: 1.20, stateBudget: -0.20 },
  { period: '2025-11', fixedAsset: -2.60, totalFunding: -3.70, selfRaised: -1.60, domesticLoan: 1.30, stateBudget: -4.90 },
  { period: '2025-12', fixedAsset: -3.80, totalFunding: -5.30, selfRaised: -2.70, domesticLoan: -2.30, stateBudget: -5.30 },
  { period: '2026-02', fixedAsset: 1.80, totalFunding: -4.40, selfRaised: 0.90, domesticLoan: -2.20, stateBudget: 1.40 },
  { period: '2026-03', fixedAsset: 1.70, totalFunding: -3.10, selfRaised: 1.30, domesticLoan: -4.00, stateBudget: 2.50 },
  { period: '2026-04', fixedAsset: -1.60, totalFunding: -6.40, selfRaised: -2.40, domesticLoan: -10.10, stateBudget: -3.10 },
  { period: '2026-05', fixedAsset: -4.10, totalFunding: -8.80, selfRaised: -5.20, domesticLoan: -13.50, stateBudget: -6.60 },
  { period: '2026-06', fixedAsset: -5.70, totalFunding: -10.00, selfRaised: -6.60, domesticLoan: -15.80, stateBudget: -8.80 },
];

// 专项债发行情况
export interface SpecialBondDataPoint {
  period: string;
  planned: number;          // 计划发行（亿元）
  actual: number;            // 实际发行额（亿元）
  completionRate: number | null;  // 完成率
}

export const specialBondData: SpecialBondDataPoint[] = [
  { period: '2025-04', planned: 3293, actual: 2301, completionRate: 0.70 },
  { period: '2025-05', planned: 3598, actual: 4432, completionRate: 1.23 },
  { period: '2025-06', planned: 5147, actual: 5271, completionRate: 1.02 },
  { period: '2025-07', planned: 6440, actual: 6169, completionRate: 0.96 },
  { period: '2025-08', planned: 5122, actual: 4890, completionRate: 0.95 },
  { period: '2025-09', planned: 3412, actual: 4191, completionRate: 1.23 },
  { period: '2025-10', planned: 2755, actual: 2949, completionRate: 1.07 },
  { period: '2025-11', planned: 3222, actual: 4922, completionRate: 1.53 },
  { period: '2025-12', planned: 214, actual: 1349, completionRate: 6.2 },
  { period: '2026-01', planned: 1750, actual: 3677, completionRate: 2.10 },
  { period: '2026-02', planned: 2518, actual: 4565, completionRate: 1.81 },
  { period: '2026-03', planned: 3444, actual: 3357, completionRate: 0.97 },
  { period: '2026-04', planned: 2517, actual: 1744, completionRate: 0.69 },
  { period: '2026-05', planned: 2511, actual: 1608, completionRate: 0.64 },
  { period: '2026-06', planned: 3448, actual: 5716, completionRate: 1.65 },
];

// 规上工业企业利润总额与自筹资金累计同比
export interface ProfitSelfRaisedDataPoint {
  period: string;
  industrialProfit: number; // 利润总额:规模以上工业企业:累计同比
  selfRaised: number;       // 自筹资金:累计同比
}

export const profitSelfRaisedData: ProfitSelfRaisedDataPoint[] = [
  { period: '2022-02', industrialProfit: 5.00, selfRaised: 13.20 },
  { period: '2022-03', industrialProfit: 8.50, selfRaised: 15.00 },
  { period: '2022-04', industrialProfit: 3.50, selfRaised: 13.50 },
  { period: '2022-05', industrialProfit: 1.00, selfRaised: 11.60 },
  { period: '2022-06', industrialProfit: 1.00, selfRaised: 10.70 },
  { period: '2022-07', industrialProfit: -1.10, selfRaised: 10.30 },
  { period: '2022-08', industrialProfit: -2.10, selfRaised: 10.20 },
  { period: '2022-09', industrialProfit: -2.30, selfRaised: 10.60 },
  { period: '2022-10', industrialProfit: -3.00, selfRaised: 10.80 },
  { period: '2022-11', industrialProfit: -3.60, selfRaised: 9.70 },
  { period: '2022-12', industrialProfit: -4.00, selfRaised: 9.00 },
  { period: '2023-02', industrialProfit: -22.90, selfRaised: 1.30 },
  { period: '2023-03', industrialProfit: -21.40, selfRaised: 0.10 },
  { period: '2023-04', industrialProfit: -20.60, selfRaised: -0.10 },
  { period: '2023-05', industrialProfit: -18.80, selfRaised: -0.90 },
  { period: '2023-06', industrialProfit: -16.80, selfRaised: -1.10 },
  { period: '2023-07', industrialProfit: -15.50, selfRaised: -0.60 },
  { period: '2023-08', industrialProfit: -11.70, selfRaised: -0.70 },
  { period: '2023-09', industrialProfit: -9.00, selfRaised: -0.10 },
  { period: '2023-10', industrialProfit: -7.80, selfRaised: 0.10 },
  { period: '2023-11', industrialProfit: -4.40, selfRaised: 0.30 },
  { period: '2023-12', industrialProfit: -2.30, selfRaised: 1.10 },
  { period: '2024-02', industrialProfit: 10.20, selfRaised: 3.30 },
  { period: '2024-03', industrialProfit: 4.30, selfRaised: 4.30 },
  { period: '2024-04', industrialProfit: 4.30, selfRaised: 6.00 },
  { period: '2024-05', industrialProfit: 3.40, selfRaised: 4.20 },
  { period: '2024-06', industrialProfit: 3.50, selfRaised: 3.90 },
  { period: '2024-07', industrialProfit: 3.60, selfRaised: 2.60 },
  { period: '2024-08', industrialProfit: 0.50, selfRaised: 2.40 },
  { period: '2024-09', industrialProfit: -3.50, selfRaised: 2.40 },
  { period: '2024-10', industrialProfit: -4.30, selfRaised: 1.90 },
  { period: '2024-11', industrialProfit: -4.70, selfRaised: 1.40 },
  { period: '2024-12', industrialProfit: -3.30, selfRaised: 1.60 },
  { period: '2025-02', industrialProfit: -0.30, selfRaised: 5.40 },
  { period: '2025-03', industrialProfit: 0.80, selfRaised: 4.70 },
  { period: '2025-04', industrialProfit: 1.40, selfRaised: 3.90 },
  { period: '2025-05', industrialProfit: -1.10, selfRaised: 3.80 },
  { period: '2025-06', industrialProfit: -1.80, selfRaised: 3.10 },
  { period: '2025-07', industrialProfit: -1.70, selfRaised: 1.50 },
  { period: '2025-08', industrialProfit: 0.90, selfRaised: 1.00 },
  { period: '2025-09', industrialProfit: 3.20, selfRaised: 0.20 },
  { period: '2025-10', industrialProfit: 1.90, selfRaised: -0.80 },
  { period: '2025-11', industrialProfit: 0.10, selfRaised: -1.60 },
  { period: '2025-12', industrialProfit: 0.60, selfRaised: -2.70 },
  { period: '2026-02', industrialProfit: 15.20, selfRaised: 0.90 },
  { period: '2026-03', industrialProfit: 15.50, selfRaised: 1.30 },
  { period: '2026-04', industrialProfit: 18.20, selfRaised: -2.40 },
  { period: '2026-05', industrialProfit: 18.80, selfRaised: -5.20 },
  { period: '2026-06', industrialProfit: 18.70, selfRaised: -6.60 },
];
