import React from 'react';
import { ColumnDefinition, CellColorStyle } from '../types';
import { DataTable, TableContainer } from './DataTable';

const importCoreData = {
  "图表标题": "2025年进口核心商品同比增速趋势表",
  "单位": "%",
  "时间序列": [
    "2025-01", "2025-02", "2025-03", "2025-04", "2025-05", "2025-06",
    "2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12"
  ],
  "核心指标": {
    "半导体制造设备": [9.80, 9.20, 9.80, 10.40, 10.80, 11.20, 12.00, 12.50, 13.00, 14.20, 18.50, 22.40],
    "集成电路(IC)": [3.00, 2.50, 2.90, 3.10, 3.60, 3.80, 3.50, 4.00, 4.80, 5.20, 8.40, 12.60],
    "原油及天然气": [-2.30, -2.50, -1.50, 0.70, 0.80, 0.90, 0.60, 1.20, 1.80, -3.50, -1.20, 4.10],
    "化妆品及洗护用品": [-3.00, -2.80, -3.50, -3.90, -4.20, -4.50, -6.20, -6.50, -6.80, -8.20, -5.40, -2.10],
    "铁矿砂及其精矿": [-6.60, -6.50, -5.50, -4.70, -4.80, -4.00, -2.60, -2.20, -1.50, 0.40, -1.80, -3.50]
  }
};

export const ImportCoreCommoditiesTable: React.FC = () => {
  // Create columns with commodity categories as headers
  const columns: ColumnDefinition[] = [
    { key: 'time', label: '时间', align: 'center', sticky: true, width: '80px' }
  ];

  // Add each commodity as a column
  Object.keys(importCoreData.核心指标).forEach((commodity) => {
    columns.push({
      key: commodity,
      label: commodity,
      align: 'center',
      width: 'auto'
    });
  });

  // Transform data to rows (each row is a time period)
  const rows = importCoreData.时间序列.map((time, timeIdx) => {
    const [year, month] = time.split('-');
    const row: Record<string, string | number> = {
      time: `${month}月`
    };

    // Add each commodity's value for this time period
    Object.entries(importCoreData.核心指标).forEach(([commodity, values]) => {
      row[commodity] = values[timeIdx];
    });

    return row;
  });

  // Custom colorizer with stronger highlights
  const importColorizer = (value: unknown, rowIndex: number, colKey: string): CellColorStyle => {
    if (typeof value !== 'number') return {};
    if (colKey === 'time') return {};

    if (value >= 10) {
      return {
        bgColor: 'bg-emerald-50',
        textColor: 'text-emerald-700',
        fontWeight: 'bold'
      };
    }

    if (value < 0) {
      return {
        bgColor: 'bg-red-50',
        textColor: 'text-red-600',
        fontWeight: 'bold'
      };
    }

    if (value > 0) {
      return {
        textColor: 'text-webank-blue',
        fontWeight: 'semibold'
      };
    }

    return {};
  };

  return (
    <div className="w-full h-full flex flex-col">
      {/* Custom Title Section */}
      <div className="flex-shrink-0 mb-1 flex justify-between items-center px-1">
        <div className="flex items-center gap-2">
          <div className="w-1 h-4 bg-webank-lightBlue rounded-full"></div>
          <h3 className="text-xs font-bold text-webank-blue">{importCoreData.图表标题}</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-emerald-500 rounded-sm opacity-80"></div>
            <span className="text-[9px] text-slate-500 font-medium">高增项</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-red-500 rounded-sm opacity-80"></div>
            <span className="text-[9px] text-slate-500 font-medium">收缩项</span>
          </div>
          <span className="text-[9px] text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">
            单位：{importCoreData.单位}
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="flex-grow min-h-0 overflow-hidden border border-slate-100 rounded-lg shadow-sm">
        <DataTable
          data={rows}
          columns={columns}
          variant="minimal"
          stickyFirstColumn
          cellColorizer={importColorizer}
          minRowHeight={26}
        />
      </div>
    </div>
  );
};
