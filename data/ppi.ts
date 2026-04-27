// PPI 及大宗商品价格数据

export interface PpiDataPoint {
  period: string;
  ppiYoy: number;
  productionMaterialsYoy: number;
  livingGoodsYoy: number;
}

// PPI 分行业环比数据点
export interface PpiIndustryMomDataPoint {
  period: string;
  ppiMom: number | null;                  // PPI环比
  externalStorage: number | null;         // 外存储设备及部件
  lithiumBattery: number | null;       // 锂离子电池制造
  photovoltaic: number | null;         // 光伏设备及元器件制造
  computerComm: number | null;         // 计算机、通信和其他电子设备制造业
  fuelProcessing: number | null;       // 石油、煤炭及其他燃料加工业
  coalMining: number | null;           // 煤炭开采和洗选业
  oilGas: number | null;               // 石油和天然气开采业
  ferrousMining: number | null;        // 黑色金属矿采选业
  nonFerrousMining: number | null;     // 有色金属矿采选业
  chemicalRawMaterials: number | null; // 化学原料和化学制品制造业
  nonFerrousSmelting: number | null;   // 有色金属冶炼和压延加工业
  ferrousSmelting: number | null;      // 黑色金属冶炼和压延加工业
  chemicalFiber: number | null;        // 化学纤维制造业
  nonMetalMineral: number | null;      // 非金属矿物制品业
  generalEquipment: number | null;     // 通用设备制造业
  automobile: number | null;           // 汽车制造业
  electricalMachinery: number | null;  // 电气机械和器材制造业
}

// PPI 分行业环比数据
export const ppiIndustryMomData: PpiIndustryMomDataPoint[] = [
  { period: '2025-01', ppiMom: -0.2, externalStorage: null, lithiumBattery: -0.6, photovoltaic: 0.5, electricalMachinery: -0.2, computerComm: -0.3, fuelProcessing: 1.0, coalMining: -2.2, oilGas: 4.5, ferrousMining: -0.4, nonFerrousMining: 0.4, chemicalRawMaterials: -0.2, nonFerrousSmelting: -0.4, ferrousSmelting: -0.9, chemicalFiber: -0.4, nonMetalMineral: -0.6, generalEquipment: -0.2, automobile: -0.5 },
  { period: '2025-02', ppiMom: -0.1, externalStorage: null, lithiumBattery: null, photovoltaic: null, electricalMachinery: -0.1, computerComm: 0.0, fuelProcessing: 0.9, coalMining: -3.3, oilGas: 0.3, ferrousMining: 0.9, nonFerrousMining: 1.8, chemicalRawMaterials: 0.0, nonFerrousSmelting: 0.3, ferrousSmelting: -0.2, chemicalFiber: 0.1, nonMetalMineral: -0.9, generalEquipment: -0.3, automobile: -0.4 },
  { period: '2025-03', ppiMom: -0.4, externalStorage: null, lithiumBattery: null, photovoltaic: null, electricalMachinery: -0.1, computerComm: -0.7, fuelProcessing: -2.3, coalMining: -4.3, oilGas: -4.4, ferrousMining: 0.1, nonFerrousMining: 0.4, chemicalRawMaterials: 0.2, nonFerrousSmelting: 0.5, ferrousSmelting: -0.5, chemicalFiber: -0.6, nonMetalMineral: -0.5, generalEquipment: -0.1, automobile: -0.5 },
  { period: '2025-04', ppiMom: -0.4, externalStorage: null, lithiumBattery: null, photovoltaic: null, electricalMachinery: -0.1, computerComm: -0.2, fuelProcessing: -2.6, coalMining: -3.3, oilGas: -3.1, ferrousMining: -0.9, nonFerrousMining: 1.5, chemicalRawMaterials: -0.6, nonFerrousSmelting: 0.3, ferrousSmelting: -1.0, chemicalFiber: -2.0, nonMetalMineral: 0.0, generalEquipment: -0.2, automobile: -0.5 },
  { period: '2025-05', ppiMom: -0.4, externalStorage: null, lithiumBattery: null, photovoltaic: null, electricalMachinery: -0.2, computerComm: 0.1, fuelProcessing: -3.1, coalMining: -3.0, oilGas: -5.6, ferrousMining: -0.9, nonFerrousMining: 0.8, chemicalRawMaterials: -1.2, nonFerrousSmelting: -0.1, ferrousSmelting: -1.0, chemicalFiber: -1.3, nonMetalMineral: -1.0, generalEquipment: -0.2, automobile: 0.0 },
  { period: '2025-06', ppiMom: -0.4, externalStorage: null, lithiumBattery: null, photovoltaic: null, electricalMachinery: -0.2, computerComm: -0.4, fuelProcessing: -0.6, coalMining: -3.4, oilGas: 2.6, ferrousMining: -2.0, nonFerrousMining: 1.3, chemicalRawMaterials: -0.7, nonFerrousSmelting: 0.2, ferrousSmelting: -1.8, chemicalFiber: 0.1, nonMetalMineral: -1.4, generalEquipment: -0.2, automobile: 0.2 },
  { period: '2025-07', ppiMom: -0.2, externalStorage: null, lithiumBattery: null, photovoltaic: null, electricalMachinery: -0.2, computerComm: -0.4, fuelProcessing: 1.2, coalMining: -1.5, oilGas: 3.0, ferrousMining: -1.1, nonFerrousMining: 0.7, chemicalRawMaterials: -0.7, nonFerrousSmelting: 0.8, ferrousSmelting: -0.3, chemicalFiber: -0.7, nonMetalMineral: -1.4, generalEquipment: -0.2, automobile: -0.3 },
  { period: '2025-08', ppiMom: 0.0, externalStorage: null, lithiumBattery: null, photovoltaic: -0.2, electricalMachinery: -0.1, computerComm: -0.2, fuelProcessing: 0.7, coalMining: 2.8, oilGas: -1.1, ferrousMining: 2.1, nonFerrousMining: 0.8, chemicalRawMaterials: -0.1, nonFerrousSmelting: 0.2, ferrousSmelting: 1.9, chemicalFiber: -0.6, nonMetalMineral: -1.0, generalEquipment: -0.1, automobile: -0.3 },
  { period: '2025-09', ppiMom: 0.0, externalStorage: null, lithiumBattery: null, photovoltaic: 0.8, electricalMachinery: -0.1, computerComm: -0.2, fuelProcessing: -0.8, coalMining: 2.5, oilGas: -2.0, ferrousMining: 2.6, nonFerrousMining: 2.5, chemicalRawMaterials: -0.4, nonFerrousSmelting: 1.2, ferrousSmelting: 0.2, chemicalFiber: -0.2, nonMetalMineral: -0.4, generalEquipment: -0.1, automobile: -0.5 },
  { period: '2025-10', ppiMom: 0.1, externalStorage: null, lithiumBattery: 0.2, photovoltaic: 0.6, electricalMachinery: 0.0, computerComm: 0.1, fuelProcessing: -0.5, coalMining: 1.6, oilGas: -2.3, ferrousMining: 0.9, nonFerrousMining: 5.3, chemicalRawMaterials: -0.6, nonFerrousSmelting: 2.4, ferrousSmelting: -0.7, chemicalFiber: -0.7, nonMetalMineral: 0.1, generalEquipment: -0.1, automobile: -0.2 },
  { period: '2025-11', ppiMom: 0.1, externalStorage: null, lithiumBattery: null, photovoltaic: null, electricalMachinery: 0.3, computerComm: 0.1, fuelProcessing: -1.3, coalMining: 4.1, oilGas: -2.4, ferrousMining: 0.6, nonFerrousMining: 2.6, chemicalRawMaterials: -0.6, nonFerrousSmelting: 2.1, ferrousSmelting: -0.5, chemicalFiber: -0.3, nonMetalMineral: 0.0, generalEquipment: -0.1, automobile: -0.1 },
  { period: '2025-12', ppiMom: 0.2, externalStorage: null, lithiumBattery: 1.0, photovoltaic: -0.2, electricalMachinery: 0.4, computerComm: -0.1, fuelProcessing: -0.6, coalMining: 1.3, oilGas: -1.3, ferrousMining: 0.0, nonFerrousMining: 3.7, chemicalRawMaterials: 0.0, nonFerrousSmelting: 2.8, ferrousSmelting: -0.1, chemicalFiber: -0.4, nonMetalMineral: 0.1, generalEquipment: 0.0, automobile: -0.1 },
  { period: '2026-01', ppiMom: 0.4, externalStorage: 4.0, lithiumBattery: 0.1, photovoltaic: 1.9, electricalMachinery: 1.2, computerComm: 0.5, fuelProcessing: -2.5, coalMining: null, oilGas: -2.2, ferrousMining: 0.4, nonFerrousMining: 5.7, chemicalRawMaterials: 0.6, nonFerrousSmelting: null, ferrousSmelting: null, chemicalFiber: null, nonMetalMineral: null, generalEquipment: null, automobile: 0.0 },
  { period: '2026-02', ppiMom: 0.4, externalStorage: 1.2, lithiumBattery: null, photovoltaic: null, electricalMachinery: 1.2, computerComm: 0.6, fuelProcessing: 0.4, coalMining: null, oilGas: 5.1, ferrousMining: -0.8, nonFerrousMining: 7.1, chemicalRawMaterials: 1.3, nonFerrousSmelting: null, ferrousSmelting: null, chemicalFiber: null, nonMetalMineral: null, generalEquipment: null, automobile: -0.2 },
  { period: '2026-03', ppiMom: 1.0, externalStorage: null, lithiumBattery: null, photovoltaic: null, electricalMachinery: 1.1, computerComm: 0.7, fuelProcessing: 5.8, coalMining: null, oilGas: 15.8, ferrousMining: -0.9, nonFerrousMining: 5.4, chemicalRawMaterials: 3.6, nonFerrousSmelting: null, ferrousSmelting: null, chemicalFiber: null, nonMetalMineral: null, generalEquipment: null, automobile: -0.5 },
  { period: '26Q1同比', ppiMom: -0.6, externalStorage: 20.3, lithiumBattery: 0.5, photovoltaic: 3.0, electricalMachinery: 2, computerComm: -0.7, fuelProcessing: -9.4, coalMining: null, oilGas: -8.3, ferrousMining: 1.4, nonFerrousMining: 29.8, chemicalRawMaterials: -3, nonFerrousSmelting: null, ferrousSmelting: null, chemicalFiber: null, nonMetalMineral: null, generalEquipment: null, automobile: -2.4 },
];

export interface CommodityPriceDataPoint {
  period: string;
  energy: number;      // 能源类
  nonFerrous: number;  // 有色类
  mineral: number;     // 矿产类
  steel: number;       // 钢铁类
}

// PPI 同比数据
export const ppiYoyData: PpiDataPoint[] = [
  { period: '2022-01', ppiYoy: 9.1, productionMaterialsYoy: 11.8, livingGoodsYoy: 0.8 },
  { period: '2022-02', ppiYoy: 8.8, productionMaterialsYoy: 11.4, livingGoodsYoy: 0.9 },
  { period: '2022-03', ppiYoy: 8.3, productionMaterialsYoy: 10.7, livingGoodsYoy: 0.9 },
  { period: '2022-04', ppiYoy: 8.0, productionMaterialsYoy: 10.3, livingGoodsYoy: 1.0 },
  { period: '2022-05', ppiYoy: 6.4, productionMaterialsYoy: 8.1, livingGoodsYoy: 1.2 },
  { period: '2022-06', ppiYoy: 6.1, productionMaterialsYoy: 7.5, livingGoodsYoy: 1.7 },
  { period: '2022-07', ppiYoy: 4.2, productionMaterialsYoy: 5.0, livingGoodsYoy: 1.7 },
  { period: '2022-08', ppiYoy: 2.3, productionMaterialsYoy: 2.4, livingGoodsYoy: 1.6 },
  { period: '2022-09', ppiYoy: 0.95, productionMaterialsYoy: 0.64, livingGoodsYoy: 1.78 },
  { period: '2022-10', ppiYoy: -1.3, productionMaterialsYoy: -2.5, livingGoodsYoy: 2.2 },
  { period: '2022-11', ppiYoy: -1.3, productionMaterialsYoy: -2.3, livingGoodsYoy: 2.0 },
  { period: '2022-12', ppiYoy: -0.7, productionMaterialsYoy: -1.4, livingGoodsYoy: 1.8 },
  { period: '2023-01', ppiYoy: -0.8, productionMaterialsYoy: -1.4, livingGoodsYoy: 1.5 },
  { period: '2023-02', ppiYoy: -1.4, productionMaterialsYoy: -2.0, livingGoodsYoy: 1.1 },
  { period: '2023-03', ppiYoy: -2.5, productionMaterialsYoy: -3.4, livingGoodsYoy: 0.9 },
  { period: '2023-04', ppiYoy: -3.6, productionMaterialsYoy: -4.7, livingGoodsYoy: 0.4 },
  { period: '2023-05', ppiYoy: -4.6, productionMaterialsYoy: -5.9, livingGoodsYoy: -0.1 },
  { period: '2023-06', ppiYoy: -5.4, productionMaterialsYoy: -6.8, livingGoodsYoy: -0.5 },
  { period: '2023-07', ppiYoy: -4.4, productionMaterialsYoy: -5.5, livingGoodsYoy: -0.4 },
  { period: '2023-08', ppiYoy: -3.0, productionMaterialsYoy: -3.7, livingGoodsYoy: -0.2 },
  { period: '2023-09', ppiYoy: -2.5, productionMaterialsYoy: -3.0, livingGoodsYoy: -0.3 },
  { period: '2023-10', ppiYoy: -2.6, productionMaterialsYoy: -3.0, livingGoodsYoy: -0.9 },
  { period: '2023-11', ppiYoy: -3.0, productionMaterialsYoy: -3.4, livingGoodsYoy: -1.2 },
  { period: '2023-12', ppiYoy: -2.7, productionMaterialsYoy: -3.3, livingGoodsYoy: -1.2 },
  { period: '2024-01', ppiYoy: -2.5, productionMaterialsYoy: -3.0, livingGoodsYoy: -1.1 },
  { period: '2024-02', ppiYoy: -2.7, productionMaterialsYoy: -3.4, livingGoodsYoy: -0.9 },
  { period: '2024-03', ppiYoy: -2.8, productionMaterialsYoy: -3.5, livingGoodsYoy: -1.0 },
  { period: '2024-04', ppiYoy: -2.5, productionMaterialsYoy: -3.1, livingGoodsYoy: -0.9 },
  { period: '2024-05', ppiYoy: -1.4, productionMaterialsYoy: -1.6, livingGoodsYoy: -0.8 },
  { period: '2024-06', ppiYoy: -0.8, productionMaterialsYoy: -0.8, livingGoodsYoy: -0.8 },
  { period: '2024-07', ppiYoy: -0.8, productionMaterialsYoy: -0.7, livingGoodsYoy: -1.0 },
  { period: '2024-08', ppiYoy: -1.8, productionMaterialsYoy: -2.0, livingGoodsYoy: -1.1 },
  { period: '2024-09', ppiYoy: -2.8, productionMaterialsYoy: -3.3, livingGoodsYoy: -1.3 },
  { period: '2024-10', ppiYoy: -2.9, productionMaterialsYoy: -3.3, livingGoodsYoy: -1.6 },
  { period: '2024-11', ppiYoy: -2.5, productionMaterialsYoy: -2.9, livingGoodsYoy: -1.4 },
  { period: '2024-12', ppiYoy: -2.3, productionMaterialsYoy: -2.6, livingGoodsYoy: -1.4 },
  { period: '2025-01', ppiYoy: -2.3, productionMaterialsYoy: -2.6, livingGoodsYoy: -1.2 },
  { period: '2025-02', ppiYoy: -2.2, productionMaterialsYoy: -2.5, livingGoodsYoy: -1.2 },
  { period: '2025-03', ppiYoy: -2.5, productionMaterialsYoy: -2.8, livingGoodsYoy: -1.5 },
  { period: '2025-04', ppiYoy: -2.7, productionMaterialsYoy: -3.1, livingGoodsYoy: -1.6 },
  { period: '2025-05', ppiYoy: -3.3, productionMaterialsYoy: -4.0, livingGoodsYoy: -1.4 },
  { period: '2025-06', ppiYoy: -3.6, productionMaterialsYoy: -4.4, livingGoodsYoy: -1.4 },
  { period: '2025-07', ppiYoy: -3.6, productionMaterialsYoy: -4.3, livingGoodsYoy: -1.6 },
  { period: '2025-08', ppiYoy: -2.9, productionMaterialsYoy: -3.2, livingGoodsYoy: -1.7 },
  { period: '2025-09', ppiYoy: -2.3, productionMaterialsYoy: -2.4, livingGoodsYoy: -1.7 },
  { period: '2025-10', ppiYoy: -2.1, productionMaterialsYoy: -2.4, livingGoodsYoy: -1.4 },
  { period: '2025-11', ppiYoy: -2.2, productionMaterialsYoy: -2.4, livingGoodsYoy: -1.5 },
  { period: '2025-12', ppiYoy: -1.9, productionMaterialsYoy: -2.1, livingGoodsYoy: -1.3 },
  { period: '2026-01', ppiYoy: -1.4, productionMaterialsYoy: -1.3, livingGoodsYoy: -1.7 },
  { period: '2026-02', ppiYoy: -0.9, productionMaterialsYoy: -0.7, livingGoodsYoy: -1.6 },
  { period: '2026-03', ppiYoy: 0.5, productionMaterialsYoy: 1.0, livingGoodsYoy: -1.3 },
];

// PPI 月度同比明细数据
export interface PpiMonthlyDetailDataPoint {
  period: string;
  ppiYoy: number;
  productionMaterials: number;
  mining: number;
  rawMaterials: number;
  processing: number;
  livingGoods: number;
  food: number;
  clothing: number;
  dailyUse: number;
  durableGoods: number;
}

export const ppiMonthlyDetailData: PpiMonthlyDetailDataPoint[] = [
  { period: '2025-01', ppiYoy: -2.3, productionMaterials: -2.6, mining: -4.9, rawMaterials: -1.9, processing: -2.7, livingGoods: -1.2, food: -1.4, clothing: -0.1, dailyUse: 0.5, durableGoods: -2.6 },
  { period: '2025-02', ppiYoy: -2.2, productionMaterials: -2.5, mining: -6.3, rawMaterials: -1.5, processing: -2.7, livingGoods: -1.2, food: -1.6, clothing: -0.2, dailyUse: 0.9, durableGoods: -2.5 },
  { period: '2025-03', ppiYoy: -2.5, productionMaterials: -2.8, mining: -8.3, rawMaterials: -2.4, processing: -2.6, livingGoods: -1.5, food: -1.4, clothing: -0.3, dailyUse: 0.7, durableGoods: -3.4 },
  { period: '2025-04', ppiYoy: -2.7, productionMaterials: -3.1, mining: -9.4, rawMaterials: -3.6, processing: -2.3, livingGoods: -1.6, food: -1.4, clothing: -0.1, dailyUse: 0.6, durableGoods: -3.7 },
  { period: '2025-05', ppiYoy: -3.3, productionMaterials: -4.0, mining: -11.9, rawMaterials: -5.4, processing: -2.8, livingGoods: -1.4, food: -1.4, clothing: 0.0, dailyUse: 0.6, durableGoods: -3.3 },
  { period: '2025-06', ppiYoy: -3.6, productionMaterials: -4.4, mining: -13.2, rawMaterials: -5.5, processing: -3.2, livingGoods: -1.4, food: -2.0, clothing: 0.1, dailyUse: 0.8, durableGoods: -2.7 },
  { period: '2025-07', ppiYoy: -3.6, productionMaterials: -4.3, mining: -14.0, rawMaterials: -5.4, processing: -3.1, livingGoods: -1.6, food: -1.8, clothing: -0.1, dailyUse: 0.6, durableGoods: -3.5 },
  { period: '2025-08', ppiYoy: -2.9, productionMaterials: -3.2, mining: -11.5, rawMaterials: -4.1, processing: -2.2, livingGoods: -1.7, food: -1.7, clothing: 0.0, dailyUse: 0.4, durableGoods: -3.7 },
  { period: '2025-09', ppiYoy: -2.3, productionMaterials: -2.4, mining: -9.0, rawMaterials: -2.9, processing: -1.7, livingGoods: -1.7, food: -1.7, clothing: -0.3, dailyUse: 0.7, durableGoods: -3.9 },
  { period: '2025-10', ppiYoy: -2.1, productionMaterials: -2.4, mining: -7.8, rawMaterials: -2.5, processing: -1.9, livingGoods: -1.4, food: -1.6, clothing: -0.3, dailyUse: 1.0, durableGoods: -3.2 },
  { period: '2025-11', ppiYoy: -2.2, productionMaterials: -2.4, mining: -6.1, rawMaterials: -2.9, processing: -1.9, livingGoods: -1.5, food: -1.5, clothing: -0.3, dailyUse: 1.1, durableGoods: -3.6 },
  { period: '2025-12', ppiYoy: -1.9, productionMaterials: -2.1, mining: -4.7, rawMaterials: -2.6, processing: -1.6, livingGoods: -1.3, food: -1.5, clothing: -0.1, dailyUse: 1.4, durableGoods: -3.5 },
];

// 大宗商品价格指数数据
export const commodityPriceData: CommodityPriceDataPoint[] = [
  { period: '2024-01', energy: 154.68, nonFerrous: 104.54, mineral: 186.53, steel: 116.82 },
  { period: '2024-02', energy: 157.75, nonFerrous: 103.82, mineral: 183.66, steel: 116.26 },
  { period: '2024-03', energy: 160.18, nonFerrous: 106.13, mineral: 174.53, steel: 112.20 },
  { period: '2024-04', energy: 163.85, nonFerrous: 112.36, mineral: 169.45, steel: 109.63 },
  { period: '2024-05', energy: 160.12, nonFerrous: 119.34, mineral: 180.04, steel: 110.88 },
  { period: '2024-06', energy: 159.34, nonFerrous: 117.94, mineral: 178.01, steel: 108.05 },
  { period: '2024-07', energy: 161.41, nonFerrous: 115.39, mineral: 181.60, steel: 105.03 },
  { period: '2024-08', energy: 154.95, nonFerrous: 110.24, mineral: 176.51, steel: 97.14 },
  { period: '2024-09', energy: 146.85, nonFerrous: 111.87, mineral: 170.44, steel: 94.59 },
  { period: '2024-10', energy: 150.51, nonFerrous: 116.46, mineral: 172.81, steel: 105.23 },
  { period: '2024-11', energy: 148.27, nonFerrous: 115.53, mineral: 174.00, steel: 101.53 },
  { period: '2024-12', energy: 145.73, nonFerrous: 114.51, mineral: 176.07, steel: 101.30 },
  { period: '2025-01', energy: 149.57, nonFerrous: 113.23, mineral: 172.04, steel: 99.59 },
  { period: '2025-02', energy: 146.25, nonFerrous: 115.19, mineral: 170.49, steel: 99.51 },
  { period: '2025-03', energy: 138.47, nonFerrous: 117.99, mineral: 169.87, steel: 98.11 },
  { period: '2025-04', energy: 130.39, nonFerrous: 114.17, mineral: 165.69, steel: 96.65 },
  { period: '2025-05', energy: 126.12, nonFerrous: 114.89, mineral: 164.12, steel: 95.73 },
  { period: '2025-06', energy: 129.68, nonFerrous: 115.69, mineral: 159.93, steel: 93.39 },
  { period: '2025-07', energy: 128.03, nonFerrous: 116.58, mineral: 158.54, steel: 95.38 },
  { period: '2025-08', energy: 129.17, nonFerrous: 116.10, mineral: 166.89, steel: 98.29 },
  { period: '2025-09', energy: 130.88, nonFerrous: 116.95, mineral: 169.37, steel: 96.58 },
  { period: '2025-10', energy: 127.25, nonFerrous: 120.98, mineral: 172.50, steel: 95.28 },
  { period: '2025-11', energy: 127.60, nonFerrous: 123.00, mineral: 174.60, steel: 94.80 },
  { period: '2025-12', energy: 124.50, nonFerrous: 127.60, mineral: 173.40, steel: 95.40 },
];
