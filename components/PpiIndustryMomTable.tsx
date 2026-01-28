import React from 'react';
import { PpiIndustryMomDataPoint, ColumnDefinition, CellColorStyle } from '../types';
import { DataTable, TableContainer } from './DataTable';

interface PpiIndustryMomTableProps {
  data: PpiIndustryMomDataPoint[];
}

export const PpiIndustryMomTable: React.FC<PpiIndustryMomTableProps> = ({ data }) => {
  // Industry name mapping
  const industryMap: { [key: string]: string } = {
    'lithium': '锂电池',
    'solar': '光伏设备',
    'electronics': '计算机通信',
    'coal': '煤炭开采',
    'oil': '石油和天然气开采',
    'ferrousMining': '黑色金属矿采',
    'nonFerrous': '有色金属矿采',
    'nonFerrousSmelting': '有色金属冶炼',
    'chemicals': '化学制品',
    'nonMetals': '非金属矿物制品',
    'ferrousSmelting': '黑色金属冶炼',
    'generalEquip': '通用设备',
    'automotive': '汽车制造',
    'electrical': '电气机械制造'
  };

  // Extract industry keys
  const industries = Object.keys(data[0] || {}).filter(key => key !== 'month');

  // Create columns: first column is month, then industry columns
  const columns: ColumnDefinition[] = [
    { key: 'month', label: '月份', align: 'left', sticky: true }
  ];

  industries.forEach((industry) => {
    columns.push({
      key: industry,
      label: industryMap[industry] || industry,
      align: 'center'
    });
  });

  // Reverse data (newest first)
  const reversedData = [...data].reverse();

  // Custom colorizer with month-based highlighting
  const ppiColorizer = (value: unknown, rowIndex: number, colKey: string): CellColorStyle => {
    if (typeof value !== 'number') return {};
    if (colKey === 'month') return {}; // No coloring for month column

    // Get the month for this row
    const month = reversedData[rowIndex]?.month;
    const shouldHighlight = ['2025-10', '2025-11', '2025-12'].includes(month);

    if (!shouldHighlight) return { textColor: 'text-gray-700' };

    if (value >= 2.0) {
      return { bgColor: 'bg-green-50', textColor: 'text-green-700', fontWeight: 'bold' };
    }
    if (value >= 0.5) {
      return { bgColor: 'bg-green-50/50', textColor: 'text-green-600', fontWeight: 'semibold' };
    }
    if (value >= 0) {
      return { textColor: 'text-gray-700' };
    }
    if (value >= -1.0) {
      return { bgColor: 'bg-orange-50/50', textColor: 'text-orange-600' };
    }
    return { bgColor: 'bg-red-50', textColor: 'text-red-600', fontWeight: 'semibold' };
  };

  return (
    <TableContainer
      title="工业生产者出厂价格指数(PPI)分行业环比数据"
      unit="%"
      source="国家统计局"
      legend={[
        { color: 'bg-green-50', label: '大幅上涨 (≥0.5%)' },
        { color: 'bg-white', label: '小幅上涨 (0-0.5%)' },
        { color: 'bg-orange-50', label: '小幅下降 (-1.0%-0%)' },
        { color: 'bg-red-50', label: '大幅下降 (<-1.0%)' }
      ]}
    >
      <DataTable
        data={reversedData}
        columns={columns}
        variant="default"
        stickyFirstColumn
        cellColorizer={ppiColorizer}
      />
    </TableContainer>
  );
};
