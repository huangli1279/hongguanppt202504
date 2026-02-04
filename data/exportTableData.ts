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
  { name: '农产品*', decAmount: 10570.5, totalAmount: 104158.1, yoy12Qty: null, yoy12Amt: 1.2, yoy6Qty: null, yoy6Amt: 1.8, isCategory: true, level: 0 },
  { name: '水产品', decAmount: 1896.3, totalAmount: 20143.2, yoy12Qty: 7.7, yoy12Amt: 0.0, yoy6Qty: 11.9, yoy6Amt: 4.4, isCategory: false, level: 1 },
  { name: '粮食', decAmount: 245.0, totalAmount: 1822.0, yoy12Qty: 45.5, yoy12Amt: 27.3, yoy6Qty: 38.5, yoy6Amt: 26.2, isCategory: false, level: 1 },
  { name: '成品油', decAmount: 3627.3, totalAmount: 38307.0, yoy12Qty: -0.2, yoy12Amt: -8.3, yoy6Qty: -9.7, yoy6Amt: -20.0, isCategory: false, level: 0 },
  { name: '箱包及类似容器', decAmount: 2760.2, totalAmount: 29888.2, yoy12Qty: 1.6, yoy12Amt: -13.5, yoy6Qty: 5.2, yoy6Amt: -11.2, isCategory: false, level: 0 },
  { name: '服装及衣着附件', decAmount: 13412.4, totalAmount: 151182.2, yoy12Qty: null, yoy12Amt: -5.0, yoy6Qty: null, yoy6Amt: -0.2, isCategory: false, level: 0 },
  { name: '鞋靴', decAmount: 3910.7, totalAmount: 41553.3, yoy12Qty: -2.0, yoy12Amt: -11.3, yoy6Qty: -0.3, yoy6Amt: -7.2, isCategory: false, level: 0 },
  { name: '机电产品*', decAmount: 223206.7, totalAmount: 2301843.3, yoy12Qty: null, yoy12Amt: 8.4, yoy6Qty: null, yoy6Amt: 8.2, isCategory: true, level: 0 },
  { name: '通用机械设备', decAmount: 6389.1, totalAmount: 68112.2, yoy12Qty: null, yoy12Amt: 6.1, yoy6Qty: null, yoy6Amt: 7.0, isCategory: false, level: 1 },
  { name: '手机', decAmount: 12546.0, totalAmount: 121694.7, yoy12Qty: -7.7, yoy12Amt: -9.4, yoy6Qty: -7.0, yoy6Amt: -8.5, isCategory: false, level: 1 },
  { name: '集成电路', decAmount: 21863.0, totalAmount: 201901.0, yoy12Qty: 17.4, yoy12Amt: 26.8, yoy6Qty: 20.6, yoy6Amt: 18.9, isCategory: false, level: 1 },
  { name: '汽车（包括底盘）', decAmount: 17140.6, totalAmount: 142455.3, yoy12Qty: 30.0, yoy12Amt: 21.4, yoy6Qty: 18.6, yoy6Amt: 8.2, isCategory: false, level: 1 },
  { name: '船舶', decAmount: 4464.4, totalAmount: 55084.9, yoy12Qty: 16.2, yoy12Amt: 26.7, yoy6Qty: 27.5, yoy6Amt: 18.6, isCategory: false, level: 1 },
  { name: '液晶平板显示模组', decAmount: 2817.7, totalAmount: 32226.9, yoy12Qty: 10.7, yoy12Amt: 11.0, yoy6Qty: 11.2, yoy6Amt: 9.3, isCategory: false, level: 1 },
  { name: '高新技术产品*', decAmount: 93692.7, totalAmount: 947899.0, yoy12Qty: null, yoy12Amt: 7.5, yoy6Qty: null, yoy6Amt: 6.4, isCategory: true, level: 0 },
];
