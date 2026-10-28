export interface ImportTableItem {
  name: string;
  decAmount: number | null;
  totalAmount: number | null;
  yoy12Qty: number | null;
  yoy12Amt: number | null;
  isCategory: boolean;
  level: number;
}

/** 2026年6月全国进口重点商品量值（美元）
 * 金额单位：百万美元
 * 来源：海关总署英文统计月报（6）China's Major Imports by Quantity and Value, Jun 2026 (in USD)
 * 交叉核对：海关总署国新办发布会、中国机电商会解读
 */
export const importTableData: ImportTableItem[] = [
  { name: '农产品*', decAmount: 22156.8, totalAmount: 110811.4, yoy12Qty: null, yoy12Amt: 12.5, isCategory: true, level: 0 },
  { name: '原油', decAmount: 22406.1, totalAmount: 151040.0, yoy12Qty: -11.4, yoy12Amt: 1.8, isCategory: false, level: 0 },
  { name: '铁矿砂及其精矿', decAmount: 11645.8, totalAmount: 63940.3, yoy12Qty: 6.3, yoy12Amt: 11.4, isCategory: false, level: 0 },
  { name: '机电产品*', decAmount: 126109.7, totalAmount: 635941.0, yoy12Qty: null, yoy12Amt: 32.8, isCategory: true, level: 0 },
  { name: '集成电路', decAmount: 59596.1, totalAmount: 298020.5, yoy12Qty: 8.1, yoy12Amt: 55.8, isCategory: false, level: 1 },
  { name: '自动数据处理设备及其零部件', decAmount: 18993.9, totalAmount: 88075.1, yoy12Qty: null, yoy12Amt: 78.9, isCategory: false, level: 1 },
  { name: '高新技术产品*', decAmount: 106731.7, totalAmount: 530741.8, yoy12Qty: null, yoy12Amt: 39.6, isCategory: true, level: 0 },
];
