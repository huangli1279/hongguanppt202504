// 工业企业利润分项当月同比增加值
// 数据来源：用户提供
// 利润 = 营收 - 成本 - 费用 + 投资收益 + 其它收益

export interface IndustrialProfitDataPoint {
  time: string;           // 日期 (格式 "2502" 代表 "2025年2月")
  totalProfit: number;    // 利润_亿元
  revenue: number;        // 营收_亿元
  cost: number;           // 成本_亿元
  revenueMinusCost: number; // 营收 - 成本_亿元
  expenses: number | null;       // 费用(不含研发费用)_亿元
  investmentIncome: number | null; // 投资收益_亿元
}

export const industrialProfitData: IndustrialProfitDataPoint[] = [
  { time: '2504', totalProfit: 176.4, revenue: 2945.8, cost: 2820.2, revenueMinusCost: 125.6, expenses: -233.1, investmentIncome: 66.8 },
  { time: '2505', totalProfit: -602.9, revenue: 1235.8, cost: 1532.6, revenueMinusCost: -296.8, expenses: 76.5, investmentIncome: -91.2 },
  { time: '2506', totalProfit: -318.9, revenue: 1456.6, cost: 1652.3, revenueMinusCost: -195.7, expenses: 46.7, investmentIncome: 229.7 },
  { time: '2507', totalProfit: -86.0, revenue: 1212.2, cost: 1161.6, revenueMinusCost: 50.6, expenses: -1.0, investmentIncome: -51.9 },
  { time: '2508', totalProfit: 1151.2, revenue: 2481.1, cost: 1929.8, revenueMinusCost: 551.3, expenses: -87.7, investmentIncome: 502.1 },
  { time: '2509', totalProfit: 1209.4, revenue: 3850.9, cost: 3417.3, revenueMinusCost: 433.6, expenses: -619.7, investmentIncome: 264.0 },
  { time: '2510', totalProfit: -557.9, revenue: -3774.7, cost: -3078.9, revenueMinusCost: -695.8, expenses: 99.9, investmentIncome: 277.1 },
  { time: '2511', totalProfit: -1011.7, revenue: -11.6, cost: 294.3, revenueMinusCost: -305.9, expenses: 262.1, investmentIncome: -341.8 },
  { time: '2512', totalProfit: 391.5, revenue: -4067.7, cost: -3460.8, revenueMinusCost: -606.9, expenses: 151.6, investmentIncome: 542.3 },
  { time: '2602', totalProfit: 1354.8, revenue: 10404.8, cost: 8361.0, revenueMinusCost: 2043.8, expenses: 678.4, investmentIncome: 185.5 },
  { time: '2603', totalProfit: 921.3, revenue: 5400.6, cost: 3777.6, revenueMinusCost: 1623.0, expenses: 269.3, investmentIncome: -8.4 },
  { time: '2604', totalProfit: 1474.5, revenue: 6383.6, cost: 4281.0, revenueMinusCost: 2102.6, expenses: 491.3, investmentIncome: 197.0 },
  { time: '2605', totalProfit: 1224.7, revenue: 7292.1, cost: 5145.6, revenueMinusCost: 2146.5, expenses: 201.3, investmentIncome: -37.3 },
  { time: '2606', totalProfit: 1244.4, revenue: 12790.3, cost: 11194.0, revenueMinusCost: 1596.3, expenses: null, investmentIncome: null },
];

export interface IndustryProfitGrowthDataPoint {
  industry: string;
  growth: number;
}

export const industryProfitGrowthData: IndustryProfitGrowthDataPoint[] = [
  { industry: '计算机通信制造和其他电子设备制造业', growth: 124.5 },
  { industry: '光纤制造业', growth: 336.8 },
  { industry: '原材料制造业', growth: 77.9 },
  { industry: '有色冶炼加工业', growth: 116.7 },
  { industry: '有色采矿业', growth: 95.6 }
];
