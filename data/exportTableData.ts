export interface ExportTableItem {
  name: string;
  decAmount: number | null;
  totalAmount: number | null;
  yoy12Qty: number | null;
  yoy12Amt: number | null;
  yoy6Qty: number | null;
  yoy6Amt: number | null;
  isCategory: boolean;
  level: number;
}

/** 2026年6月全国出口重点商品量值（美元）
 * 金额单位：百万美元
 * 来源：海关总署英文统计月报（13）Major Export Commodities in Quantity and Value, 1-6.2026
 * 累计同比：结合官方当月同比与5月累计同比推算，并与机电商会/公开解读交叉核对
 */
export const exportTableData: ExportTableItem[] = [
  { name: '农产品*', decAmount: 9730.8, totalAmount: 52969.4, yoy12Qty: null, yoy12Amt: 7.4, yoy6Qty: null, yoy6Amt: null, isCategory: true, level: 0 },
  { name: '成品油', decAmount: 4453.8, totalAmount: 20333.9, yoy12Qty: -13.2, yoy12Amt: 14.5, yoy6Qty: null, yoy6Amt: null, isCategory: false, level: 0 },
  { name: '机电产品*', decAmount: 260334.1, totalAmount: 1350169.7, yoy12Qty: null, yoy12Amt: 24.5, yoy6Qty: null, yoy6Amt: null, isCategory: true, level: 0 },
  { name: '手机', decAmount: 9438.4, totalAmount: 54304.1, yoy12Qty: -4.3, yoy12Amt: 9.2, yoy6Qty: null, yoy6Amt: null, isCategory: false, level: 1 },
  { name: '集成电路', decAmount: 38205.1, totalAmount: 177281.6, yoy12Qty: 7.0, yoy12Amt: 96.1, yoy6Qty: null, yoy6Amt: null, isCategory: false, level: 1 },
  { name: '汽车（包括底盘）', decAmount: 18228.9, totalAmount: 91802.0, yoy12Qty: 53.0, yoy12Amt: 53.9, yoy6Qty: null, yoy6Amt: null, isCategory: false, level: 1 },
  { name: '高新技术产品*', decAmount: 118836.5, totalAmount: 604155.4, yoy12Qty: null, yoy12Amt: 38.5, yoy6Qty: null, yoy6Amt: null, isCategory: true, level: 0 },
];
