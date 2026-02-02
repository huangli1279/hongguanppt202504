export interface DepositDataPoint {
  period: string;
  balanceTotal: number;
  balanceHousehold: number;
  balanceNonFinancial: number;
  balanceFiscal: number;
  increaseTotal: number;
  increaseHousehold: number;
  increaseNonFinancial: number;
  increaseFiscal: number;
}

const periods = [
  '2025-01',
  '2025-02',
  '2025-03',
  '2025-04',
  '2025-05',
  '2025-06',
  '2025-07',
  '2025-08',
  '2025-09',
  '2025-10',
  '2025-11',
  '2025-12'
];

const balanceTotal = [
  3065512.47,
  3109697.9,
  3152232.44,
  3147793.38,
  3169624.01,
  3201739.92,
  3206702.75,
  3227265.78,
  3249387.56,
  3255492.03,
  3269626.94,
  3286428.75
];

const balanceHousehold = [
  1567675.44,
  1573761.53,
  1604706.8,
  1590795.67,
  1595494.14,
  1620254.78,
  1609117.49,
  1610211.68,
  1639847.95,
  1626359.04,
  1633084.44,
  1658934.64
];

const balanceNonFinancial = [
  780426.68,
  771491.53,
  799857.08,
  786590.2,
  782413.73,
  800190.99,
  785596.5,
  788817.72,
  797743.11,
  786934.07,
  793387.29,
  805593.99
];

const balanceFiscal = [
  59562.94,
  72116.15,
  64428.49,
  68100.96,
  76942.86,
  68776.6,
  76452.86,
  78348.39,
  69906.51,
  77128.52,
  76662.5,
  62817.62
];

const increaseTotal = [
  43200,
  44200,
  42500,
  -4400,
  21800,
  32100,
  5000,
  20600,
  22100,
  6100,
  14100,
  16800
];

const increaseHousehold = [
  55200,
  6100,
  30900,
  -13900,
  4700,
  24700,
  -11100,
  1100,
  29600,
  -13400,
  6700,
  25800
];

const increaseNonFinancial = [
  -2060,
  -8940,
  28400,
  -13297,
  -4176,
  17773,
  -14591,
  2997,
  9194,
  -10853,
  6453,
  12200
];

const increaseFiscal = [
  3324,
  12576,
  -7710,
  3710,
  8800,
  -8200,
  7700,
  1900,
  -8400,
  7200,
  -500,
  -13821
];

export const depositData: DepositDataPoint[] = periods.map((period, index) => ({
  period,
  balanceTotal: balanceTotal[index],
  balanceHousehold: balanceHousehold[index],
  balanceNonFinancial: balanceNonFinancial[index],
  balanceFiscal: balanceFiscal[index],
  increaseTotal: increaseTotal[index],
  increaseHousehold: increaseHousehold[index],
  increaseNonFinancial: increaseNonFinancial[index],
  increaseFiscal: increaseFiscal[index]
}));
