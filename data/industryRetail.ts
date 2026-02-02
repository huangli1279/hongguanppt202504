// 2025年全国分行业零售累计同比数据
// 数据来源：国家统计局
// 单位：%

export interface IndustryRetailDataPoint {
  period: string;
  grainOilFood: number;        // 粮油食品类
  dailyNecessities: number;    // 日用品类
  medicine: number;            // 中西药品类
  clothing: number;            // 服装鞋帽针纺织品类
  jewelry: number;             // 金银珠宝类
  sportsEntertainment: number; // 体育娱乐用品类
  furniture: number;           // 家具类
  homeAppliances: number;      // 家用电器和音像器材类
  buildingMaterials: number;   // 建筑及装潢材料类
  automobile: number;          // 汽车类
  communication: number;       // 通讯器材类
  petroleumProducts: number;   // 石油及制品类
  cultureOffice: number;       // 文化办公用品类
}

export const industryRetailData: IndustryRetailDataPoint[] = [
  { period: '2025-02', grainOilFood: 11.50, dailyNecessities: 5.70, medicine: 2.50, clothing: 3.30, jewelry: 5.40, sportsEntertainment: 25.00, furniture: 11.70, homeAppliances: 10.90, buildingMaterials: 0.10, automobile: -4.40, communication: 26.20, petroleumProducts: 0.90, cultureOffice: 21.80 },
  { period: '2025-03', grainOilFood: 12.20, dailyNecessities: 6.80, medicine: 2.10, clothing: 3.40, jewelry: 6.90, sportsEntertainment: 25.40, furniture: 18.10, homeAppliances: 19.30, buildingMaterials: 0.00, automobile: -0.80, communication: 26.90, petroleumProducts: -0.10, cultureOffice: 21.70 },
  { period: '2025-04', grainOilFood: 12.60, dailyNecessities: 7.00, medicine: 2.20, clothing: 3.10, jewelry: 10.40, sportsEntertainment: 24.90, furniture: 20.20, homeAppliances: 23.90, buildingMaterials: 2.30, automobile: -0.50, communication: 25.40, petroleumProducts: -1.40, cultureOffice: 24.40 },
  { period: '2025-05', grainOilFood: 13.00, dailyNecessities: 7.20, medicine: 1.80, clothing: 3.30, jewelry: 12.30, sportsEntertainment: 25.70, furniture: 21.40, homeAppliances: 30.20, buildingMaterials: 3.00, automobile: -0.10, communication: 27.10, petroleumProducts: -2.60, cultureOffice: 25.70 },
  { period: '2025-06', grainOilFood: 12.30, dailyNecessities: 7.30, medicine: 1.40, clothing: 3.10, jewelry: 11.30, sportsEntertainment: 22.20, furniture: 22.90, homeAppliances: 30.70, buildingMaterials: 2.60, automobile: 0.80, communication: 24.10, petroleumProducts: -3.40, cultureOffice: 25.40 },
  { period: '2025-07', grainOilFood: 11.80, dailyNecessities: 7.40, medicine: 1.20, clothing: 2.90, jewelry: 11.00, sportsEntertainment: 21.10, furniture: 22.60, homeAppliances: 30.40, buildingMaterials: 2.20, automobile: 0.40, communication: 22.90, petroleumProducts: -4.10, cultureOffice: 23.70 },
  { period: '2025-08', grainOilFood: 11.00, dailyNecessities: 7.40, medicine: 1.20, clothing: 2.90, jewelry: 11.70, sportsEntertainment: 20.60, furniture: 22.00, homeAppliances: 28.40, buildingMaterials: 1.80, automobile: 0.50, communication: 21.10, petroleumProducts: -4.60, cultureOffice: 22.30 },
  { period: '2025-09', grainOilFood: 10.40, dailyNecessities: 7.40, medicine: 1.30, clothing: 3.10, jewelry: 11.50, sportsEntertainment: 19.60, furniture: 21.30, homeAppliances: 25.30, buildingMaterials: 1.60, automobile: 0.60, communication: 20.50, petroleumProducts: -4.90, cultureOffice: 19.90 },
  { period: '2025-10', grainOilFood: 10.30, dailyNecessities: 7.40, medicine: 1.50, clothing: 3.50, jewelry: 14.00, sportsEntertainment: 18.40, furniture: 19.90, homeAppliances: 20.10, buildingMaterials: 0.50, automobile: -0.20, communication: 20.90, petroleumProducts: -5.00, cultureOffice: 19.10 },
  { period: '2025-11', grainOilFood: 9.90, dailyNecessities: 6.50, medicine: 1.80, clothing: 3.50, jewelry: 13.50, sportsEntertainment: 16.40, furniture: 16.90, homeAppliances: 14.80, buildingMaterials: -1.50, automobile: -1.00, communication: 20.90, petroleumProducts: -5.20, cultureOffice: 18.20 },
  { period: '2025-12', grainOilFood: 9.30, dailyNecessities: 6.28, medicine: 1.77, clothing: 3.18, jewelry: 12.78, sportsEntertainment: 15.70, furniture: 14.62, homeAppliances: 11.00, buildingMaterials: -2.67, automobile: -1.49, communication: 20.86, petroleumProducts: -5.72, cultureOffice: 17.27 },
];
