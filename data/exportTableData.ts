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

export const exportTableData: ExportTableItem[] = [
  { name: '农产品*', decAmount: 8564.2, totalAmount: 25625.1, yoy12Qty: null, yoy12Amt: 5.3, yoy6Qty: null, yoy6Amt: null, isCategory: true, level: 0 },
  { name: '成品油', decAmount: 3404.0, totalAmount: 8708.7, yoy12Qty: 2.6, yoy12Amt: 3.6, yoy6Qty: null, yoy6Amt: null, isCategory: false, level: 0 },
  { name: '机电产品*', decAmount: 209097.6, totalAmount: 619988.1, yoy12Qty: null, yoy12Amt: 21.4, yoy6Qty: null, yoy6Amt: null, isCategory: true, level: 0 },
  { name: '手机', decAmount: 9515.2, totalAmount: 26581.5, yoy12Qty: -1.5, yoy12Amt: -4.7, yoy6Qty: null, yoy6Amt: null, isCategory: false, level: 1 },
  { name: '集成电路', decAmount: 29146.9, totalAmount: 72470.7, yoy12Qty: 13.4, yoy12Amt: 77.5, yoy6Qty: null, yoy6Amt: null, isCategory: false, level: 1 },
  { name: '汽车（包括底盘）', decAmount: 13796.8, totalAmount: 40773.9, yoy12Qty: 50.3, yoy12Amt: 58.5, yoy6Qty: null, yoy6Amt: null, isCategory: false, level: 1 },
  { name: '高新技术产品*', decAmount: 102157.7, totalAmount: 269374.9, yoy12Qty: null, yoy12Amt: 28.6, yoy6Qty: null, yoy6Amt: null, isCategory: true, level: 0 },
];
