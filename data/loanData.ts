/**
 * 人民币贷款分项数据
 */

export interface LoanStockPoint {
  period: string;
  householdLoan: number;     // 居民贷款（万亿）
  consumerLoan: number;      // 消费贷款（万亿）
  housingLoan: number | null;  // 消费贷款-房贷（万亿）
  businessLoan: number;      // 经营贷款（万亿）
  enterpriseLoan: number;    // 企业贷款（万亿）
  billFinancing: number;     // 票据融资（万亿）
  nonBankLoan: number;       // 非银金融机构贷款（万亿）
}

export const loanStockData: LoanStockPoint[] = [
  { period: '2025-01', householdLoan: 83.27, consumerLoan: 58.90, housingLoan: null, businessLoan: 24.37, enterpriseLoan: 156.86, billFinancing: 14.20, nonBankLoan: 0.86 },
  { period: '2025-02', householdLoan: 82.88, consumerLoan: 58.52, housingLoan: null, businessLoan: 24.36, enterpriseLoan: 157.73, billFinancing: 14.37, nonBankLoan: 1.15 },
  { period: '2025-03', householdLoan: 83.87, consumerLoan: 58.91, housingLoan: 37.90, businessLoan: 24.97, enterpriseLoan: 160.75, billFinancing: 14.18, nonBankLoan: 0.97 },
  { period: '2025-04', householdLoan: 83.35, consumerLoan: 58.71, housingLoan: null, businessLoan: 24.64, enterpriseLoan: 160.52, billFinancing: 15.01, nonBankLoan: 1.14 },
  { period: '2025-05', householdLoan: 83.40, consumerLoan: 58.73, housingLoan: null, businessLoan: 24.67, enterpriseLoan: 160.97, billFinancing: 15.08, nonBankLoan: 1.20 },
  { period: '2025-06', householdLoan: 84.00, consumerLoan: 58.91, housingLoan: 37.74, businessLoan: 25.09, enterpriseLoan: 163.13, billFinancing: 14.67, nonBankLoan: 1.09 },
  { period: '2025-07', householdLoan: 83.51, consumerLoan: 58.68, housingLoan: null, businessLoan: 24.83, enterpriseLoan: 162.33, billFinancing: 15.54, nonBankLoan: 1.30 },
  { period: '2025-08', householdLoan: 83.54, consumerLoan: 58.65, housingLoan: null, businessLoan: 24.89, enterpriseLoan: 162.86, billFinancing: 15.60, nonBankLoan: 1.18 },
  { period: '2025-09', householdLoan: 83.93, consumerLoan: 58.73, housingLoan: 37.44, businessLoan: 25.21, enterpriseLoan: 164.48, billFinancing: 15.19, nonBankLoan: 0.95 },
  { period: '2025-10', householdLoan: 83.57, consumerLoan: 58.58, housingLoan: null, businessLoan: 24.99, enterpriseLoan: 164.32, billFinancing: 15.70, nonBankLoan: 1.04 },
  { period: '2025-11', householdLoan: 83.36, consumerLoan: 58.41, housingLoan: null, businessLoan: 24.96, enterpriseLoan: 164.59, billFinancing: 16.03, nonBankLoan: 1.03 },
  { period: '2025-12', householdLoan: 83.27, consumerLoan: 58.16, housingLoan: 37.01, businessLoan: 25.11, enterpriseLoan: 165.30, billFinancing: 16.38, nonBankLoan: 0.95 },
  { period: '2026-01', householdLoan: 83.73, consumerLoan: 58.24, housingLoan: null, businessLoan: 25.49, enterpriseLoan: 170.52, billFinancing: 15.51, nonBankLoan: 0.76 },
  { period: '2026-02', householdLoan: 83.08, consumerLoan: 57.64, housingLoan: null, businessLoan: 25.44, enterpriseLoan: 172.01, billFinancing: 15.47, nonBankLoan: 0.75 },
  { period: '2026-03', householdLoan: 83.57, consumerLoan: 57.68, housingLoan: null, businessLoan: 25.89, enterpriseLoan: 174.84, billFinancing: 15.28, nonBankLoan: 0.58 },
];

export interface LoanIncrementByType {
  type: string;
  q2024: number;
  q2025: number;
  q2026: number;
}

// 季度贷款增量数据（一季度），单位：亿元
export const loanIncrementData: LoanIncrementByType[] = [
  { type: '居民贷款',   q2024: 13449,  q2025: 10435,  q2026: 2967 },
  { type: '消费贷-房贷',   q2024: -1700, q2025: -900,  q2026: -6800 },
  { type: '消费贷-非房贷', q2024: 2120,  q2025: 3116,  q2026: 1913 },
  { type: '经营贷',         q2024: 13030, q2025: 8220,  q2026: 7854 },
  { type: '企业贷款',   q2024: 91700,  q2025: 90900,  q2026: 95500 },
  { type: '票据融资',   q2024: -15000, q2025: -5442,  q2026: -11000 },
];

/** Q2新增人民币贷款结构（按类别分组），单位：亿元 */
export const corporateCreditStructureData = [
  { category: '新增人民币贷款', y2024: 30369, y2025: 31597, y2026: 18122 },
  { category: '对公：中长期', y2024: 18800, y2025: 15900, y2026: 1300 },
  { category: '对公：短期', y2024: 1400, y2025: 7900, y2026: 4600 },
  { category: '对公：票据融资', y2024: 11560, y2025: 4978, y2026: 19143 },
  { category: '居民户：中长期', y2024: 2050, y2025: 2868, y2026: -2395 },
  { category: '居民户：短期', y2024: -804, y2025: -1606, y2026: -4241 },
];

export interface HouseholdLoanChangePoint {
  period: string;
  consumerLoan: number;
  shortTermConsumer: number;
  longTermConsumer: number;
  housingLoan: number | null;
  businessLoan: number;
  totalLoan: number;
}

/** 居民贷款变化情况（存量），单位：万亿元；已合并重复的2026-03行 */
export const householdLoanChangeData: HouseholdLoanChangePoint[] = [
  { period: '2025-01', consumerLoan: 58.90, shortTermConsumer: 10.11, longTermConsumer: 48.79, housingLoan: null, businessLoan: 24.37, totalLoan: 83.27 },
  { period: '2025-02', consumerLoan: 58.52, shortTermConsumer: 9.86, longTermConsumer: 48.67, housingLoan: null, businessLoan: 24.36, totalLoan: 82.88 },
  { period: '2025-03', consumerLoan: 58.91, shortTermConsumer: 9.99, longTermConsumer: 48.91, housingLoan: 37.90, businessLoan: 24.97, totalLoan: 83.87 },
  { period: '2025-04', consumerLoan: 58.71, shortTermConsumer: 9.87, longTermConsumer: 48.84, housingLoan: null, businessLoan: 24.64, totalLoan: 83.35 },
  { period: '2025-05', consumerLoan: 58.73, shortTermConsumer: 9.87, longTermConsumer: 48.86, housingLoan: null, businessLoan: 24.67, totalLoan: 83.40 },
  { period: '2025-06', consumerLoan: 58.91, shortTermConsumer: 9.93, longTermConsumer: 48.97, housingLoan: 37.74, businessLoan: 25.09, totalLoan: 84.00 },
  { period: '2025-07', consumerLoan: 58.68, shortTermConsumer: 9.79, longTermConsumer: 48.89, housingLoan: null, businessLoan: 24.83, totalLoan: 83.51 },
  { period: '2025-08', consumerLoan: 58.65, shortTermConsumer: 9.83, longTermConsumer: 48.83, housingLoan: null, businessLoan: 24.89, totalLoan: 83.54 },
  { period: '2025-09', consumerLoan: 58.73, shortTermConsumer: 9.82, longTermConsumer: 48.90, housingLoan: 37.44, businessLoan: 25.21, totalLoan: 83.93 },
  { period: '2025-10', consumerLoan: 58.58, shortTermConsumer: 9.73, longTermConsumer: 48.85, housingLoan: null, businessLoan: 24.99, totalLoan: 83.57 },
  { period: '2025-11', consumerLoan: 58.41, shortTermConsumer: 9.60, longTermConsumer: 48.80, housingLoan: null, businessLoan: 24.96, totalLoan: 83.36 },
  { period: '2025-12', consumerLoan: 58.16, shortTermConsumer: 9.48, longTermConsumer: 48.68, housingLoan: 37.01, businessLoan: 25.11, totalLoan: 83.27 },
  { period: '2026-01', consumerLoan: 58.24, shortTermConsumer: 9.42, longTermConsumer: 48.82, housingLoan: null, businessLoan: 25.49, totalLoan: 83.73 },
  { period: '2026-02', consumerLoan: 57.64, shortTermConsumer: 9.04, longTermConsumer: 48.60, housingLoan: null, businessLoan: 25.44, totalLoan: 83.08 },
  { period: '2026-03', consumerLoan: 57.68, shortTermConsumer: 9.01, longTermConsumer: 48.67, housingLoan: 36.72, businessLoan: 25.89, totalLoan: 83.57 },
  { period: '2026-04', consumerLoan: 57.17, shortTermConsumer: 8.80, longTermConsumer: 48.37, housingLoan: null, businessLoan: 25.61, totalLoan: 82.78 },
  { period: '2026-05', consumerLoan: 57.04, shortTermConsumer: 8.78, longTermConsumer: 48.26, housingLoan: null, businessLoan: 25.60, totalLoan: 82.64 },
  { period: '2026-06', consumerLoan: 57.11, shortTermConsumer: 8.82, longTermConsumer: 48.29, housingLoan: null, businessLoan: 25.79, totalLoan: 82.90 },
];
