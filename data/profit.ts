// 工业企业利润数据
// 数据来源：用户提供 (单月值)

export interface IndustrialProfitDataPoint {
  time: string;
  revenue: number;        // 营业收入_单月值_亿元
  cost: number;           // 营业成本_单月值_亿元
  operatingProfit: number; // 营业利润_单月值_亿元
  totalProfit: number;    // 利润总额_单月值_亿元
  investmentIncome: number; // 投资收益_单月值_亿元
}

export const industrialProfitData: IndustrialProfitDataPoint[] = [
  { time: '2025-03', revenue: 120450.70, cost: 103369.90, operatingProfit: 5854.10, totalProfit: 5983.70, investmentIncome: 589.70 },
  { time: '2025-04', revenue: 113023.40, cost: 97227.90, operatingProfit: 5909.10, totalProfit: 6096.60, investmentIncome: 635.40 },
  { time: '2025-05', revenue: 113176.90, cost: 97197.50, operatingProfit: 5971.10, totalProfit: 6033.70, investmentIncome: 1019.30 },
  { time: '2025-06', revenue: 120195.70, cost: 102399.10, operatingProfit: 7043.30, totalProfit: 7160.70, investmentIncome: 1838.60 },
  { time: '2025-07', revenue: 112911.40, cost: 96518.70, operatingProfit: 5716.50, totalProfit: 5674.20, investmentIncome: 743.30 },
  { time: '2025-08', revenue: 115528.60, cost: 98918.70, operatingProfit: 6608.00, totalProfit: 6726.20, investmentIncome: 1255.30 },
  { time: '2025-09', revenue: 124614.80, cost: 106466.20, operatingProfit: 6690.40, totalProfit: 6770.90, investmentIncome: 930.30 },
  { time: '2025-10', revenue: 112845.90, cost: 96594.30, operatingProfit: 5635.90, totalProfit: 5770.90, investmentIncome: 753.90 },
  { time: '2025-11', revenue: 119702.50, cost: 101652.10, operatingProfit: 6666.80, totalProfit: 6765.70, investmentIncome: 574.80 },
  { time: '2025-12', revenue: 139585.50, cost: 114452.00, operatingProfit: 7515.60, totalProfit: 7713.50, investmentIncome: 2587.10 },
];
