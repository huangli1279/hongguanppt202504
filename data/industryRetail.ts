// 2025年全国分行业零售当月同比数据
// 数据来源：国家统计局
// 单位：%

export interface IndustryRetailDataPoint {
  period: string;
  jewelry: number;             // 金银珠宝类
  sportsEntertainment: number; // 体育娱乐用品类
  furniture: number;           // 家具类
  homeAppliances: number;      // 家用电器和音像器材类
  automobile: number;          // 汽车类
  communication: number;       // 通讯器材类
  petroleumProducts: number;   // 石油及制品类
  cultureOffice: number;       // 文化办公用品类
}

export const industryRetailData: IndustryRetailDataPoint[] = [
  { period: '2025-03', cultureOffice: 21.5, furniture: 29.5, homeAppliances: 35.1, automobile: 5.5, communication: 28.6, jewelry: 10.6, sportsEntertainment: 26.2, petroleumProducts: -1.9 },
  { period: '2025-04', cultureOffice: 33.5, furniture: 26.9, homeAppliances: 38.8, automobile: 0.7, communication: 19.9, jewelry: 25.3, sportsEntertainment: 23.3, petroleumProducts: -5.7 },
  { period: '2025-05', cultureOffice: 30.5, furniture: 25.6, homeAppliances: 53.0, automobile: 1.1, communication: 33.0, jewelry: 21.8, sportsEntertainment: 28.3, petroleumProducts: -7.0 },
  { period: '2025-06', cultureOffice: 24.4, furniture: 28.7, homeAppliances: 32.4, automobile: 4.6, communication: 13.9, jewelry: 6.1, sportsEntertainment: 9.5, petroleumProducts: -7.3 },
  { period: '2025-07', cultureOffice: 13.8, furniture: 20.6, homeAppliances: 28.7, automobile: -1.5, communication: 14.9, jewelry: 8.2, sportsEntertainment: 13.7, petroleumProducts: -8.3 },
  { period: '2025-08', cultureOffice: 14.2, furniture: 18.6, homeAppliances: 14.3, automobile: 0.8, communication: 7.3, jewelry: 16.8, sportsEntertainment: 16.9, petroleumProducts: -8.0 },
  { period: '2025-09', cultureOffice: 6.2, furniture: 16.2, homeAppliances: 3.3, automobile: 1.6, communication: 16.2, jewelry: 9.7, sportsEntertainment: 11.9, petroleumProducts: -7.1 },
  { period: '2025-10', cultureOffice: 13.5, furniture: 9.6, homeAppliances: -14.6, automobile: -6.6, communication: 23.2, jewelry: 37.6, sportsEntertainment: 10.1, petroleumProducts: -5.9 },
  { period: '2025-11', cultureOffice: 11.7, furniture: -3.8, homeAppliances: -19.4, automobile: -8.3, communication: 20.6, jewelry: 8.5, sportsEntertainment: 0.4, petroleumProducts: -8.0 },
  { period: '2025-12', cultureOffice: 9.2, furniture: -2.2, homeAppliances: -18.7, automobile: -5.0, communication: 20.9, jewelry: 5.9, sportsEntertainment: 9.0, petroleumProducts: -11.0 },
];
