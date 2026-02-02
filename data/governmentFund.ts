// 政府性基金预算收入与土地出让收入数据

export interface GovernmentFundRevenueDataPoint {
  period: string;
  national: number;
  central: number;
  local: number;
}

export interface LandSaleRevenueShareDataPoint {
  period: string;
  landSaleRevenue: number;
  landShare: number;
}

export const governmentFundRevenueData: GovernmentFundRevenueDataPoint[] = [
  { period: '2017-12', national: 61462.0, central: 3825.0, local: 57637.0 },
  { period: '2018-12', national: 75405.0, central: 4033.0, local: 71372.0 },
  { period: '2019-12', national: 84516.0, central: 4040.0, local: 80476.0 },
  { period: '2020-12', national: 93489.0, central: 3562.0, local: 89927.0 },
  { period: '2021-12', national: 98024.0, central: 4088.0, local: 93936.0 },
  { period: '2022-12', national: 77879.0, central: 4124.0, local: 73755.0 },
  { period: '2023-12', national: 70705.0, central: 4418.0, local: 66287.0 },
  { period: '2024-12', national: 62090.0, central: 4734.0, local: 57356.0 },
  { period: '2025-12', national: 57704.0, central: 5056.0, local: 52648.0 },
];

export const landSaleRevenueShareData: LandSaleRevenueShareDataPoint[] = [
  { period: '2017-12', landSaleRevenue: 52059.0, landShare: 90.32 },
  { period: '2018-12', landSaleRevenue: 65096.0, landShare: 91.21 },
  { period: '2019-12', landSaleRevenue: 72516.94, landShare: 90.11 },
  { period: '2020-12', landSaleRevenue: 84142.0, landShare: 93.57 },
  { period: '2021-12', landSaleRevenue: 87051.0, landShare: 92.67 },
  { period: '2022-12', landSaleRevenue: 66854.0, landShare: 90.64 },
  { period: '2023-12', landSaleRevenue: 57996.0, landShare: 87.49 },
  { period: '2024-12', landSaleRevenue: 48699.0, landShare: 84.91 },
  { period: '2025-12', landSaleRevenue: 41518.0, landShare: 78.86 },
];
