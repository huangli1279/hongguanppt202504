// 工业企业利润数据

export interface IndustrialProfitDataPoint {
  time: string;
  revenue: number;        // 营业收入_累计值_亿元
  cost: number;           // 营业成本_累计值_亿元
  operatingProfit: number; // 营业利润_累计值_亿元
  totalProfit: number;    // 利润总额_累计值_亿元
  investmentIncome: number; // 投资收益_累计值_亿元
}

export const industrialProfitData: IndustrialProfitDataPoint[] = [
  { time: '2025-02', revenue: 200945.20, cost: 171019.50, operatingProfit: 8860.10, totalProfit: 9109.90, investmentIncome: 627.60 },
  { time: '2025-03', revenue: 321395.90, cost: 274389.40, operatingProfit: 14714.20, totalProfit: 15093.60, investmentIncome: 1217.30 },
  { time: '2025-04', revenue: 434419.30, cost: 371617.50, operatingProfit: 20623.40, totalProfit: 21170.20, investmentIncome: 1852.70 },
  { time: '2025-05', revenue: 547596.20, cost: 468815.00, operatingProfit: 26594.50, totalProfit: 27204.30, investmentIncome: 2872.00 },
  { time: '2025-06', revenue: 667791.90, cost: 571214.10, operatingProfit: 33637.80, totalProfit: 34365.00, investmentIncome: 4710.60 },
  { time: '2025-07', revenue: 780703.30, cost: 668042.10, operatingProfit: 39354.30, totalProfit: 40203.50, investmentIncome: 5434.40 },
  { time: '2025-08', revenue: 896231.90, cost: 766960.80, operatingProfit: 45962.30, totalProfit: 46929.70, investmentIncome: 6689.70 },
  { time: '2025-09', revenue: 1020846.70, cost: 873426.00, operatingProfit: 52652.70, totalProfit: 53732.00, investmentIncome: 7619.70 },
  { time: '2025-10', revenue: 1133692.60, cost: 970020.30, operatingProfit: 58288.60, totalProfit: 59502.90, investmentIncome: 8373.60 },
  { time: '2025-11', revenue: 1253395.10, cost: 1071672.40, operatingProfit: 64955.40, totalProfit: 66268.60, investmentIncome: 8948.40 },
  { time: '2025-12', revenue: 1391980.60, cost: 1187524.10, operatingProfit: 72471.00, totalProfit: 73982.00, investmentIncome: 11535.50 },
];
