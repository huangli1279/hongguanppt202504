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
  { product: '农产品*', decAmount: 18489.9, yearTotalAmount: 207408.8, yearQtyYoY: '-', yearAmountYoY: -3.6 },
  { product: '肉类 (包括杂碎)', decAmount: 1629.1, yearTotalAmount: 23149.4, yearQtyYoY: -8.7, yearAmountYoY: -1 },
  { product: '干鲜瓜果及坚果', decAmount: 1775.4, yearTotalAmount: 19436.5, yearQtyYoY: 13.4, yearAmountYoY: 1.2 },
  { product: '粮食', decAmount: 4840.3, yearTotalAmount: 59690.6, yearQtyYoY: -10.8, yearAmountYoY: -13.5 },
  { product: '大豆', decAmount: 3877.1, yearTotalAmount: 50327.2, yearQtyYoY: 6.5, yearAmountYoY: -4.6 },
  { product: '铁矿砂及其精矿', decAmount: 12103.6, yearTotalAmount: 123054.9, yearQtyYoY: 1.8, yearAmountYoY: -7.1 },
  { product: '铜矿砂及其精矿', decAmount: 8192.8, yearTotalAmount: 83000.8, yearQtyYoY: 7.9, yearAmountYoY: 23.3 },
  { product: '煤及褐煤', decAmount: 4573.0, yearTotalAmount: 36169.7, yearQtyYoY: -9.6, yearAmountYoY: -30.6 },
  { product: '原油', decAmount: 26642.9, yearTotalAmount: 296506.8, yearQtyYoY: 4.4, yearAmountYoY: -8.8 },
  { product: '成品油', decAmount: 1957.3, yearTotalAmount: 24005.7, yearQtyYoY: -12, yearAmountYoY: -18.2 },
  { product: '天然气', decAmount: 5884.2, yearTotalAmount: 56742.0, yearQtyYoY: -2.8, yearAmountYoY: -13 },
  { product: '钢材', decAmount: 935.9, yearTotalAmount: 10275.0, yearQtyYoY: -11.1, yearAmountYoY: -10.7 },
  { product: '机电产品*', decAmount: 101940.7, yearTotalAmount: 1035305.1, yearQtyYoY: '-', yearAmountYoY: 5.2 },
  { product: '自动数据处理设备及其零部件', decAmount: 9708.4, yearTotalAmount: 94045.5, yearQtyYoY: '-', yearAmountYoY: 18.2 },
  { product: '二极管及类似半导体器件', decAmount: 2286.1, yearTotalAmount: 24410.8, yearQtyYoY: -0.8, yearAmountYoY: 3.6 },
  { product: '集成电路', decAmount: 42612.0, yearTotalAmount: 424333.4, yearQtyYoY: 7.8, yearAmountYoY: 10.1 },
  { product: '汽车(包括底盘)', decAmount: 1469.5, yearTotalAmount: 23641.7, yearQtyYoY: -32.4, yearAmountYoY: -39.7 },
  { product: '汽车零配件', decAmount: 1630.5, yearTotalAmount: 21126.6, yearQtyYoY: '-', yearAmountYoY: -21.4 },
  { product: '高新技术产品*', decAmount: 82619.6, yearTotalAmount: 822542.5, yearQtyYoY: '-', yearAmountYoY: 9.3 },
];
