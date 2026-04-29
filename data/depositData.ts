export interface DepositDataPoint {
  period: string;
  balanceTotal: number;
  balanceHousehold: number;
  balanceNonFinancial: number;
  balanceFiscal: number;
  balanceFin: number;
  increaseTotal: number;
  increaseHousehold: number;
  increaseNonFinancial: number;
  increaseFiscal: number;
  increaseFin: number;
}

const periods = [
  '2024-12',
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
  3022537.95,
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
  1512509.36,
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
  783649.1,
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
  55812.16,
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

const balanceFin = [
  281865,
  270772,
  299058,
  284994,
  300704,
  312604,
  307404,
  328804,
  340604,
  330004,
  348504,
  349304,
  346004
];

const increaseTotal = [
  -14000,
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
  21900,
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
  18057,
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
  -16725,
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

const increaseFin = [
  -31700,
  -11100,
  28300,
  -14110,
  15710,
  11900,
  -5200,
  21400,
  11800,
  -10600,
  18500,
  800,
  -3300
];



export interface QuarterlyDepositPoint {
  period: string;
  household: number;
  householdDemand: number;
  householdTime: number;
  nonBankFin: number;
}

export const quarterlyDepositData: QuarterlyDepositPoint[] = [
  { period: '2024Q1', household: 8.56, householdDemand: 1.36, householdTime: 7.19, nonBankFin: 1.63 },
  { period: '2024Q2', household: 0.72, householdDemand: -0.31, householdTime: 1.02, nonBankFin: 0.65 },
  { period: '2024Q3', household: 2.58, householdDemand: -0.21, householdTime: 2.79, nonBankFin: 2.28 },
  { period: '2024Q4', household: 2.41, householdDemand: 1.49, householdTime: 0.92, nonBankFin: -1.90 },
  { period: '2025Q1', household: 9.22, householdDemand: 1.27, householdTime: 7.95, nonBankFin: 0.31 },
  { period: '2025Q2', household: 1.55, householdDemand: 0.26, householdTime: 1.30, nonBankFin: 2.24 },
  { period: '2025Q3', household: 1.96, householdDemand: 0.52, householdTime: 1.44, nonBankFin: 2.26 },
  { period: '2025Q4', household: 1.91, householdDemand: 0.69, householdTime: 1.22, nonBankFin: 1.60 },
  { period: '2026Q1', household: 7.70, householdDemand: 1.16, householdTime: 6.53, nonBankFin: 2.32 },
];

export const nonBankFinQuarterlyData = [
  { period: '2025Q1', value: 0.31 },
  { period: '2025Q2', value: 2.24 },
  { period: '2025Q3', value: 2.26 },
  { period: '2025Q4', value: 1.60 },
  { period: '2026Q1', value: 2.32 },
];

export const householdDepositAnnualData = [
  { period: '2015', demand: 2.02, timeAndOther: 2.34 },
  { period: '2016', demand: 2.88, timeAndOther: 2.29 },
  { period: '2017', demand: 1.66, timeAndOther: 2.94 },
  { period: '2018', demand: 1.90, timeAndOther: 5.33 },
  { period: '2019', demand: 2.75, timeAndOther: 6.95 },
  { period: '2020', demand: 3.21, timeAndOther: 8.09 },
  { period: '2021', demand: 1.61, timeAndOther: 8.29 },
  { period: '2022', demand: 4.10, timeAndOther: 13.74 },
  { period: '2023', demand: 0.64, timeAndOther: 16.01 },
  { period: '2024', demand: 2.34, timeAndOther: 11.92 },
  { period: '2025', demand: 2.73, timeAndOther: 11.91 },
];

export const maturityDepositData = [
  { period: '2022年', value: 57.49 },
  { period: '2023年', value: 63.24 },
  { period: '2024年', value: 72.85 },
  { period: '2025年', value: 81.48 },
];

export const depositData: DepositDataPoint[] = periods.map((period, index) => ({
  period,
  balanceTotal: balanceTotal[index],
  balanceHousehold: balanceHousehold[index],
  balanceNonFinancial: balanceNonFinancial[index],
  balanceFiscal: balanceFiscal[index],
  balanceFin: balanceFin[index],
  increaseTotal: increaseTotal[index],
  increaseHousehold: increaseHousehold[index],
  increaseNonFinancial: increaseNonFinancial[index],
  increaseFiscal: increaseFiscal[index],
  increaseFin: increaseFin[index],
}));
