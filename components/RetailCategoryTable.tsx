import React from 'react';
import { ColumnDefinition, CellColorStyle } from '../types';
import { DataTable, TableContainer } from './DataTable';
import { cn } from '../utils/cn';

export const RetailCategoryTable: React.FC = () => {
  const categories = [
    { name: '通讯器材类', data24: ['10.4%', '12.0%', '15.1%'], data25: ['19.6%', '19.8%', '20.9%'] },
    { name: '家用电器类', data24: ['4.4%', '8.1%', '12.3%'], data25: ['4.4%', '2.1%', '0.1%'] },
    { name: '汽车类', data24: ['-1.5%', '-1.2%', '-0.5%'], data25: ['-3.0%', '-4.4%', '-5.0%'] },
    { name: '建筑装潢类', data24: ['-3.1%', '-2.5%', '-2.0%'], data25: ['-9.2%', '-10.4%', '-11.8%'] },
  ];

  // Transform data to row format
  const rows = categories.map(cat => ({
    name: cat.name,
    '2024-10': cat.data24[0],
    '2024-11': cat.data24[1],
    '2024-12': cat.data24[2],
    '2025-10': cat.data25[0],
    '2025-11': cat.data25[1],
    '2025-12': cat.data25[2]
  }));

  const columns: ColumnDefinition[] = [
    { key: 'name', label: '消费品类', align: 'left' },
    { key: '2024-10', label: '10月', align: 'center' },
    { key: '2024-11', label: '11月', align: 'center' },
    { key: '2024-12', label: '12月', align: 'center' },
    { key: '2025-10', label: '10月', align: 'center' },
    { key: '2025-11', label: '11月', align: 'center' },
    { key: '2025-12', label: '12月', align: 'center' }
  ];

  // Custom header for multi-level display
  const customHeader = (
    <>
      <tr className="bg-slate-100 text-slate-600">
        <th rowSpan={2} className="border border-slate-300 px-2 py-2 text-center font-bold w-20">
          消费品类
        </th>
        <th colSpan={3} className="border border-slate-300 px-2 py-2 text-center font-bold">
          2024年 (Q4累计)
        </th>
        <th colSpan={3} className="border border-slate-300 px-2 py-2 text-center font-bold text-webank-blue">
          2025年 (Q4累计)
        </th>
      </tr>
      <tr className="bg-slate-100">
        <th className="border border-slate-300 px-2 py-1.5 text-center font-bold text-slate-500 text-[9px]">10月</th>
        <th className="border border-slate-300 px-2 py-1.5 text-center font-bold text-slate-500 text-[9px]">11月</th>
        <th className="border border-slate-300 px-2 py-1.5 text-center font-bold text-slate-500 text-[9px]">12月</th>
        <th className="border border-slate-300 px-2 py-1.5 text-center font-bold text-webank-lightBlue text-[9px]">10月</th>
        <th className="border border-slate-300 px-2 py-1.5 text-center font-bold text-webank-lightBlue text-[9px]">11月</th>
        <th className="border border-slate-300 px-2 py-1.5 text-center font-bold text-webank-lightBlue text-[9px]">12月</th>
      </tr>
    </>
  );

  // Colorizer: only apply to 2025 columns
  const retailColorizer = (value: unknown, rowIndex: number, colKey: string): CellColorStyle => {
    if (typeof value === 'string' && !colKey.startsWith('2025')) {
      return { textColor: 'text-slate-500' };
    }

    if (typeof value === 'string' && colKey.startsWith('2025')) {
      const numVal = parseFloat(value);
      const isPositive = numVal > 15;
      const isNegative = numVal < 0;

      if (isPositive) {
        return { textColor: 'text-webank-blue', fontWeight: 'bold' };
      }
      if (isNegative) {
        return { textColor: 'text-red-600' };
      }
      return { textColor: 'text-slate-700' };
    }

    return {};
  };

  return (
    <TableContainer
      title="核心品类月度累计同比对标表（24年Q4 vs 25年Q4）"
      unit="%"
      source="国家统计局"
      legend={[
        { color: 'text-webank-blue', label: '高增长' },
        { color: 'text-red-600', label: '负增长' }
      ]}
    >
      <DataTable
        data={rows}
        columns={columns}
        variant="bordered"
        customHeader={customHeader}
        cellColorizer={retailColorizer}
      />
    </TableContainer>
  );
};
