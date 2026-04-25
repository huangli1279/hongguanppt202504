// 设备购置投资数据

export interface EquipmentInvestmentDataPoint {
  period: string;
  manufacturing: number;          // 制造业固定资产投资累计增长
  equipmentPurchase: number;      // 设备工器具购置固定资产投资额累计增长
  constructionInstall: number;    // 建筑安装工程固定资产投资额累计增长
}

export interface ManufacturingInvestmentDataPoint {
  period: string;
  autoManufacturing: number;      // 汽车制造业
  chemicals: number;              // 化学原料及化学制品制造业
  highTechManufacturing: number | null; // 高技术制造业
  computerOffice: number | null;  // 计算机及办公设备制造业
  railwayShipAerospace: number;   // 铁路、船舶、航空航天和其他运输设备制造业
  nonferrousMetal: number;        // 有色金属冶炼和压延加工业
  generalEquipment: number;       // 通用设备制造业
  specialEquipment: number;       // 专用设备制造业
  electricalMachinery: number;    // 电气机械和器材制造业
  pharmaceutical: number;         // 医药制造业
}

// 设备投资与建筑工程投资增速对比数据
export const equipmentInvestmentData: EquipmentInvestmentDataPoint[] = [
  { period: '2025-02', manufacturing: 9.0, equipmentPurchase: 18.0, constructionInstall: 1.1 },
  { period: '2025-03', manufacturing: 9.1, equipmentPurchase: 19.0, constructionInstall: 1.5 },
  { period: '2025-04', manufacturing: 8.8, equipmentPurchase: 18.2, constructionInstall: 1.4 },
  { period: '2025-05', manufacturing: 8.5, equipmentPurchase: 17.3, constructionInstall: 1.2 },
  { period: '2025-06', manufacturing: 7.5, equipmentPurchase: 17.3, constructionInstall: 0.1 },
  { period: '2025-07', manufacturing: 6.2, equipmentPurchase: 15.2, constructionInstall: -0.8 },
  { period: '2025-08', manufacturing: 5.1, equipmentPurchase: 14.4, constructionInstall: -2.2 },
  { period: '2025-09', manufacturing: 4.0, equipmentPurchase: 14.0, constructionInstall: -4.1 },
  { period: '2025-10', manufacturing: 2.7, equipmentPurchase: 13.0, constructionInstall: -5.4 },
  { period: '2025-11', manufacturing: 1.9, equipmentPurchase: 12.2, constructionInstall: -6.4 },
  { period: '2025-12', manufacturing: 0.6, equipmentPurchase: 11.8, constructionInstall: -8.4 },
  { period: '2026-02', manufacturing: 3.1, equipmentPurchase: 11.5, constructionInstall: 0.6 },
  { period: '2026-03', manufacturing: 4.1, equipmentPurchase: 13.9, constructionInstall: -0.4 },
];

// 制造业分行业投资累计同比数据
export const manufacturingInvestmentData: ManufacturingInvestmentDataPoint[] = [
  { period: '2025-02', autoManufacturing: 27.0, chemicals: 6.0, highTechManufacturing: 31.6, computerOffice: 37.3, railwayShipAerospace: 16.1, nonferrousMetal: 21.6, generalEquipment: 9.0, specialEquipment: -8.6, electricalMachinery: 3.5, pharmaceutical: 16.1 },
  { period: '2025-03', autoManufacturing: 24.5, chemicals: 2.1, highTechManufacturing: 28.5, computerOffice: 37.9, railwayShipAerospace: 17.9, nonferrousMetal: 17.2, generalEquipment: 8.1, specialEquipment: -7.4, electricalMachinery: 4.4, pharmaceutical: 17.9 },
  { period: '2025-04', autoManufacturing: 23.6, chemicals: 1.3, highTechManufacturing: 28.9, computerOffice: 29.6, railwayShipAerospace: 16.4, nonferrousMetal: 17.9, generalEquipment: 8.4, specialEquipment: -7.5, electricalMachinery: 2.6, pharmaceutical: 16.4 },
  { period: '2025-05', autoManufacturing: 23.4, chemicals: 0.4, highTechManufacturing: 21.7, computerOffice: 26.1, railwayShipAerospace: 14.3, nonferrousMetal: 17.5, generalEquipment: 7.9, specialEquipment: -8.6, electricalMachinery: 0.9, pharmaceutical: 14.3 },
  { period: '2025-06', autoManufacturing: 22.2, chemicals: -1.1, highTechManufacturing: 21.5, computerOffice: 27.3, railwayShipAerospace: 9.1, nonferrousMetal: 16.6, generalEquipment: 6.2, specialEquipment: -7.8, electricalMachinery: -3.0, pharmaceutical: 9.1 },
  { period: '2025-07', autoManufacturing: 21.7, chemicals: -4.7, highTechManufacturing: 16.0, computerOffice: 29.3, railwayShipAerospace: 4.9, nonferrousMetal: 14.8, generalEquipment: 4.6, specialEquipment: -8.7, electricalMachinery: -6.6, pharmaceutical: 4.9 },
  { period: '2025-08', autoManufacturing: 20.2, chemicals: -5.2, highTechManufacturing: 12.6, computerOffice: 26.2, railwayShipAerospace: 2.2, nonferrousMetal: 13.7, generalEquipment: 1.6, specialEquipment: -8.8, electricalMachinery: -8.5, pharmaceutical: 2.2 },
  { period: '2025-09', autoManufacturing: 19.2, chemicals: -5.6, highTechManufacturing: 7.4, computerOffice: 22.3, railwayShipAerospace: 0.4, nonferrousMetal: 11.8, generalEquipment: -0.7, specialEquipment: -9.5, electricalMachinery: -9.9, pharmaceutical: 0.4 },
  { period: '2025-10', autoManufacturing: 17.5, chemicals: -7.9, highTechManufacturing: 4.1, computerOffice: 20.1, railwayShipAerospace: -1.5, nonferrousMetal: 9.5, generalEquipment: -2.0, specialEquipment: -9.4, electricalMachinery: -11.3, pharmaceutical: -1.5 },
  { period: '2025-11', autoManufacturing: 15.3, chemicals: -8.2, highTechManufacturing: null, computerOffice: 22.4, railwayShipAerospace: -2.2, nonferrousMetal: 8.9, generalEquipment: -4.0, specialEquipment: -9.5, electricalMachinery: -13.1, pharmaceutical: -2.2 },
  { period: '2025-12', autoManufacturing: 11.7, chemicals: -8.0, highTechManufacturing: null, computerOffice: 17.5, railwayShipAerospace: -4.2, nonferrousMetal: 6.2, generalEquipment: -7.1, specialEquipment: -10.3, electricalMachinery: -13.5, pharmaceutical: -4.2 },
  { period: '2026-02', autoManufacturing: 2.6, chemicals: -5.4, highTechManufacturing: 2.9, computerOffice: null, railwayShipAerospace: 31.1, nonferrousMetal: -9.2, generalEquipment: 7.0, specialEquipment: -0.5, electricalMachinery: 5.8, pharmaceutical: -2.8 },
  { period: '2026-03', autoManufacturing: 4.8, chemicals: 0.4, highTechManufacturing: 5.2, computerOffice: 28.3, railwayShipAerospace: 27.7, nonferrousMetal: 3.7, generalEquipment: 12.5, specialEquipment: -0.4, electricalMachinery: 0.8, pharmaceutical: -7.7 },
];
