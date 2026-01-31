// 设备购置投资数据

export interface EquipmentInvestmentDataPoint {
  period: string;
  equipmentPurchase: number;      // 设备工器具购置固定资产投资额累计增长
  constructionInstall: number;    // 建筑安装工程固定资产投资额累计增长
}

export interface ManufacturingInvestmentDataPoint {
  period: string;
  generalEquipment: number;       // 通用设备
  specialEquipment: number;       // 专用设备
  electricalMachinery: number;    // 电气机械
  electronicEquipment: number;    // 电子设备
  autoManufacturing: number;      // 汽车制造
  railwayAerospace: number;       // 铁路航天设备
  metalRepair: number;            // 金属制品和机械修理
}

// 设备投资与建筑工程投资增速对比数据
export const equipmentInvestmentData: EquipmentInvestmentDataPoint[] = [
  { period: '2024-12', equipmentPurchase: 15.7, constructionInstall: 3.5 },
  { period: '2025-02', equipmentPurchase: 18.0, constructionInstall: 1.1 },
  { period: '2025-03', equipmentPurchase: 19.0, constructionInstall: 1.5 },
  { period: '2025-04', equipmentPurchase: 18.2, constructionInstall: 1.4 },
  { period: '2025-05', equipmentPurchase: 17.3, constructionInstall: 1.2 },
  { period: '2025-06', equipmentPurchase: 17.3, constructionInstall: 0.1 },
  { period: '2025-07', equipmentPurchase: 15.2, constructionInstall: -0.8 },
  { period: '2025-08', equipmentPurchase: 14.4, constructionInstall: -2.2 },
  { period: '2025-09', equipmentPurchase: 14.0, constructionInstall: -4.1 },
  { period: '2025-10', equipmentPurchase: 13.0, constructionInstall: -5.4 },
  { period: '2025-11', equipmentPurchase: 12.2, constructionInstall: -6.4 },
  { period: '2025-12', equipmentPurchase: 11.8, constructionInstall: -8.4 },
];

// 制造业分行业投资累计同比数据
export const manufacturingInvestmentData: ManufacturingInvestmentDataPoint[] = [
  { period: '2502', generalEquipment: 21.6, specialEquipment: 9.0, electricalMachinery: -8.6, electronicEquipment: 9.6, autoManufacturing: 27.0, railwayAerospace: 37.3, metalRepair: 45.5 },
  { period: '2503', generalEquipment: 17.2, specialEquipment: 8.1, electricalMachinery: -7.4, electronicEquipment: 10.5, autoManufacturing: 24.5, railwayAerospace: 37.9, metalRepair: 43.6 },
  { period: '2504', generalEquipment: 17.9, specialEquipment: 8.4, electricalMachinery: -7.5, electronicEquipment: 9.0, autoManufacturing: 23.6, railwayAerospace: 29.6, metalRepair: 44.3 },
  { period: '2505', generalEquipment: 17.5, specialEquipment: 7.9, electricalMachinery: -8.6, electronicEquipment: 7.0, autoManufacturing: 23.4, railwayAerospace: 26.1, metalRepair: 62.2 },
  { period: '2506', generalEquipment: 16.6, specialEquipment: 6.2, electricalMachinery: -7.8, electronicEquipment: 4.6, autoManufacturing: 22.2, railwayAerospace: 27.3, metalRepair: 44.2 },
  { period: '2507', generalEquipment: 14.8, specialEquipment: 4.6, electricalMachinery: -8.7, electronicEquipment: 2.2, autoManufacturing: 21.7, railwayAerospace: 29.3, metalRepair: 49.4 },
  { period: '2508', generalEquipment: 13.7, specialEquipment: 1.6, electricalMachinery: -8.8, electronicEquipment: -0.1, autoManufacturing: 20.2, railwayAerospace: 26.2, metalRepair: 49.7 },
  { period: '2509', generalEquipment: 11.8, specialEquipment: -0.7, electricalMachinery: -9.5, electronicEquipment: -2.1, autoManufacturing: 19.2, railwayAerospace: 22.3, metalRepair: 50.1 },
  { period: '2510', generalEquipment: 9.5, specialEquipment: -2.0, electricalMachinery: -9.4, electronicEquipment: -2.2, autoManufacturing: 17.5, railwayAerospace: 20.1, metalRepair: 49.2 },
  { period: '2511', generalEquipment: 8.9, specialEquipment: -4.0, electricalMachinery: -9.5, electronicEquipment: -3.2, autoManufacturing: 15.3, railwayAerospace: 22.4, metalRepair: 32.6 },
  { period: '2512', generalEquipment: 6.2, specialEquipment: -7.1, electricalMachinery: -10.3, electronicEquipment: -3.2, autoManufacturing: 11.7, railwayAerospace: 17.5, metalRepair: 37.9 },
];
