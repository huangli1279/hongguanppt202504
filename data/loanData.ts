/**
 * 人民币贷款分项数据
 */

export interface LoanDataPoint {
  period: string;
  householdLoan: number;    // 住户贷款（亿元）
  enterpriseLoan: number;   // 企业贷款（亿元）
  billFinancing: number;    // 票据融资（亿元）
  nonBankLoan: number;      // 非银行业金融机构贷款（亿元）
}

export const loanData: LoanDataPoint[] = [
  { period: '2025-01', householdLoan: 832736, enterpriseLoan: 1568562, billFinancing: 142046, nonBankLoan: 8607 },
  { period: '2025-02', householdLoan: 828845, enterpriseLoan: 1578962, billFinancing: 143739, nonBankLoan: 11451 },
  { period: '2025-03', householdLoan: 838698, enterpriseLoan: 1607362, billFinancing: 141753, nonBankLoan: 9749 },
  { period: '2025-04', householdLoan: 833482, enterpriseLoan: 1613462, billFinancing: 150094, nonBankLoan: 11383 },
  { period: '2025-05', householdLoan: 834022, enterpriseLoan: 1618762, billFinancing: 150840, nonBankLoan: 10946 },
  { period: '2025-06', householdLoan: 839998, enterpriseLoan: 1636462, billFinancing: 146731, nonBankLoan: 10946 },
  { period: '2025-07', householdLoan: 835105, enterpriseLoan: 1637062, billFinancing: 155442, nonBankLoan: 12972 },
  { period: '2025-08', householdLoan: 835408, enterpriseLoan: 1642962, billFinancing: 155973, nonBankLoan: 11842 },
  { period: '2025-09', householdLoan: 839298, enterpriseLoan: 1655162, billFinancing: 151947, nonBankLoan: 9494 },
  { period: '2025-10', householdLoan: 835694, enterpriseLoan: 1658662, billFinancing: 156953, nonBankLoan: 10430 },
  { period: '2025-11', householdLoan: 833631, enterpriseLoan: 1664762, billFinancing: 160295, nonBankLoan: 10283 },
  { period: '2025-12', householdLoan: 832715, enterpriseLoan: 1675462, billFinancing: 163795, nonBankLoan: 9512 },
];

// 转换为表格展示数据（月度环比变化）
export const loanTableData = loanData.map((item, index) => {
  const prev = index > 0 ? loanData[index - 1] : null;
  return {
    period: item.period,
    householdLoan: item.householdLoan,
    householdChange: prev ? item.householdLoan - prev.householdLoan : null,
    enterpriseLoan: item.enterpriseLoan,
    enterpriseChange: prev ? item.enterpriseLoan - prev.enterpriseLoan : null,
  };
});

// 用于折线图的数据（单位转换为万亿元）
export const loanChartData = loanData.map(item => ({
  period: item.period,
  householdLoan: +(item.householdLoan / 10000).toFixed(2),  // 万亿元
  enterpriseLoan: +(item.enterpriseLoan / 10000).toFixed(2), // 万亿元
}));
