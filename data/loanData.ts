/**
 * 人民币贷款分项数据
 */

export interface LoanStockPoint {
  period: string;
  householdLoan: number;     // 居民贷款（万亿）
  consumerLoan: number;      // 消费贷款（万亿）
  businessLoan: number;      // 经营贷款（万亿）
  enterpriseLoan: number;    // 企业贷款（万亿）
  billFinancing: number;     // 票据融资（万亿）
  nonBankLoan: number;       // 非银金融机构贷款（万亿）
}

export const loanStockData: LoanStockPoint[] = [
  { period: '2025-01', householdLoan: 83.27, consumerLoan: 58.90, businessLoan: 24.37, enterpriseLoan: 156.86, billFinancing: 14.20, nonBankLoan: 0.86 },
  { period: '2025-02', householdLoan: 82.88, consumerLoan: 58.52, businessLoan: 24.36, enterpriseLoan: 157.73, billFinancing: 14.37, nonBankLoan: 1.15 },
  { period: '2025-03', householdLoan: 83.87, consumerLoan: 58.91, businessLoan: 24.97, enterpriseLoan: 160.75, billFinancing: 14.18, nonBankLoan: 0.97 },
  { period: '2025-04', householdLoan: 83.35, consumerLoan: 58.71, businessLoan: 24.64, enterpriseLoan: 160.52, billFinancing: 15.01, nonBankLoan: 1.14 },
  { period: '2025-05', householdLoan: 83.40, consumerLoan: 58.73, businessLoan: 24.67, enterpriseLoan: 160.97, billFinancing: 15.08, nonBankLoan: 1.20 },
  { period: '2025-06', householdLoan: 84.00, consumerLoan: 58.91, businessLoan: 25.09, enterpriseLoan: 163.13, billFinancing: 14.67, nonBankLoan: 1.09 },
  { period: '2025-07', householdLoan: 83.51, consumerLoan: 58.68, businessLoan: 24.83, enterpriseLoan: 162.33, billFinancing: 15.54, nonBankLoan: 1.30 },
  { period: '2025-08', householdLoan: 83.54, consumerLoan: 58.65, businessLoan: 24.89, enterpriseLoan: 162.86, billFinancing: 15.60, nonBankLoan: 1.18 },
  { period: '2025-09', householdLoan: 83.93, consumerLoan: 58.73, businessLoan: 25.21, enterpriseLoan: 164.48, billFinancing: 15.19, nonBankLoan: 0.95 },
  { period: '2025-10', householdLoan: 83.57, consumerLoan: 58.58, businessLoan: 24.99, enterpriseLoan: 164.32, billFinancing: 15.70, nonBankLoan: 1.04 },
  { period: '2025-11', householdLoan: 83.36, consumerLoan: 58.41, businessLoan: 24.96, enterpriseLoan: 164.59, billFinancing: 16.03, nonBankLoan: 1.03 },
  { period: '2025-12', householdLoan: 83.27, consumerLoan: 58.16, businessLoan: 25.11, enterpriseLoan: 165.30, billFinancing: 16.38, nonBankLoan: 0.95 },
  { period: '2026-01', householdLoan: 83.73, consumerLoan: 58.24, businessLoan: 25.49, enterpriseLoan: 170.52, billFinancing: 15.51, nonBankLoan: 0.76 },
  { period: '2026-02', householdLoan: 83.08, consumerLoan: 57.64, businessLoan: 25.44, enterpriseLoan: 172.01, billFinancing: 15.47, nonBankLoan: 0.75 },
  { period: '2026-03', householdLoan: 83.57, consumerLoan: 57.68, businessLoan: 25.89, enterpriseLoan: 174.84, billFinancing: 15.28, nonBankLoan: 0.58 },
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
