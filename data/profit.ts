// 工业企业利润分项当月同比增加值
// 数据来源：用户提供
// 利润 = 营收 - 成本 - 费用 + 投资收益 + 其它收益

export interface IndustrialProfitDataPoint {
  time: string;           // 日期 (格式 "2502" 代表 "2025年2月")
  totalProfit: number;    // 利润_亿元
  revenue: number;        // 营收_亿元
  cost: number;           // 成本_亿元
  revenueMinusCost: number; // 营收 - 成本_亿元
  expenses: number;       // 费用(不含研发费用)_亿元
  investmentIncome: number; // 投资收益_亿元
}

export const industrialProfitData: IndustrialProfitDataPoint[] = [
  { time: '2502', totalProfit: -27, revenue: 5417.8, cost: 4830.4, revenueMinusCost: 587.4, expenses: 22.8, investmentIncome: -154.8 },
  { time: '2503', totalProfit: 146.4, revenue: 5009.9, cost: 4605.1, revenueMinusCost: 404.8, expenses: -80.5, investmentIncome: -237.8 },
  { time: '2504', totalProfit: 176.4, revenue: 2945.8, cost: 2820.2, revenueMinusCost: 125.6, expenses: -233.1, investmentIncome: 66.8 },
  { time: '2505', totalProfit: -602.9, revenue: 1235.8, cost: 1532.6, revenueMinusCost: -296.8, expenses: 76.5, investmentIncome: -91.2 },
  { time: '2506', totalProfit: -318.9, revenue: 1456.6, cost: 1652.3, revenueMinusCost: -195.7, expenses: 46.7, investmentIncome: 229.7 },
  { time: '2507', totalProfit: -86, revenue: 1212.2, cost: 1161.6, revenueMinusCost: 50.6, expenses: -1, investmentIncome: -51.9 },
  { time: '2508', totalProfit: 1151.2, revenue: 2481.1, cost: 1929.8, revenueMinusCost: 551.3, expenses: -87.7, investmentIncome: 502.1 },
  { time: '2509', totalProfit: 1209.4, revenue: 3850.9, cost: 3417.3, revenueMinusCost: 433.6, expenses: -619.7, investmentIncome: 264 },
  { time: '2510', totalProfit: -557.9, revenue: -3774.7, cost: -3078.9, revenueMinusCost: -695.8, expenses: 99.9, investmentIncome: 277.1 },
  { time: '2511', totalProfit: -1011.7, revenue: -11.6, cost: 294.3, revenueMinusCost: -305.9, expenses: 262.1, investmentIncome: -341.8 },
  { time: '2512', totalProfit: 391.5, revenue: -4067.7, cost: -3460.8, revenueMinusCost: -606.9, expenses: 151.6, investmentIncome: 542.3 },
];
