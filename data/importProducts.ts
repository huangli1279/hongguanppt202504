// 进口产品数据

export interface ImportProductDataPoint {
  period: string;
  semiconductorEquipment: number;
  integratedCircuit: number;
  oilAndGas: number;
  cosmetics: number;
  ironOre: number;
}

// 主要进口产品同比走势数据
export const importProductTrendData: ImportProductDataPoint[] = [
  { period: '2501', semiconductorEquipment: -3.10, integratedCircuit: 3.30, oilAndGas: -2.3, cosmetics: -3.0, ironOre: -6.6 },
  { period: '2502', semiconductorEquipment: -3.10, integratedCircuit: 3.30, oilAndGas: -2.5, cosmetics: -2.8, ironOre: -6.5 },
  { period: '2503', semiconductorEquipment: -9.60, integratedCircuit: 3.55, oilAndGas: -1.5, cosmetics: -3.5, ironOre: -5.5 },
  { period: '2504', semiconductorEquipment: -8.80, integratedCircuit: 11.10, oilAndGas: 0.7, cosmetics: -3.9, ironOre: -4.7 },
  { period: '2505', semiconductorEquipment: -0.80, integratedCircuit: 8.87, oilAndGas: 0.8, cosmetics: -4.2, ironOre: -4.8 },
  { period: '2506', semiconductorEquipment: 19.00, integratedCircuit: 11.46, oilAndGas: 0.9, cosmetics: -4.5, ironOre: -4.0 },
  { period: '2507', semiconductorEquipment: 14.00, integratedCircuit: 12.96, oilAndGas: 0.6, cosmetics: -6.2, ironOre: -2.6 },
  { period: '2508', semiconductorEquipment: 8.20, integratedCircuit: 8.36, oilAndGas: 1.2, cosmetics: -6.5, ironOre: -2.2 },
  { period: '2509', semiconductorEquipment: 35.20, integratedCircuit: 14.08, oilAndGas: 1.8, cosmetics: -6.8, ironOre: -1.5 },
  { period: '2510', semiconductorEquipment: 25.90, integratedCircuit: 10.24, oilAndGas: -3.5, cosmetics: -8.2, ironOre: 0.4 },
  { period: '2511', semiconductorEquipment: -11.20, integratedCircuit: 13.89, oilAndGas: -1.2, cosmetics: -5.4, ironOre: -1.8 },
  { period: '2512', semiconductorEquipment: -2.70, integratedCircuit: 16.58, oilAndGas: 4.1, cosmetics: -2.1, ironOre: -3.5 },
];

export interface ImportStatisticsData {
  product: string;
  decAmount: number;
  yearTotalAmount: number;
  yearQtyYoY: number | string;
  yearAmountYoY: number;
}

export const importStatisticsData: ImportStatisticsData[] = [
  { product: '农产品*', decAmount: 15612.3, yearTotalAmount: 49293.6, yearQtyYoY: '-', yearAmountYoY: 11.0 },
  { product: '肉类 (包括杂碎)', decAmount: 2036.2, yearTotalAmount: 6679.8, yearQtyYoY: -3.5, yearAmountYoY: 11.3 },
  { product: '铁矿砂及其精矿', decAmount: 10430.5, yearTotalAmount: 31694.3, yearQtyYoY: 10.5, yearAmountYoY: 11.3 },
  { product: '稀土', decAmount: 279.0, yearTotalAmount: 698.3, yearQtyYoY: 30.0, yearAmountYoY: 167.5 },
  { product: '机电产品*', decAmount: 108978.6, yearTotalAmount: 281021.7, yearQtyYoY: '-', yearAmountYoY: 24.9 },
  { product: '集成电路', decAmount: 49776.7, yearTotalAmount: 128007.7, yearQtyYoY: 11.0, yearAmountYoY: 45.0 },
  { product: '高新技术产品*', decAmount: 91776.5, yearTotalAmount: 231529.8, yearQtyYoY: '-', yearAmountYoY: 29.2 },
];
