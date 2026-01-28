import React from 'react';
import { ColumnDefinition, CellColorStyle } from '../types';
import { DataTable, TableContainer } from './DataTable';

const importCoreData = {
  "图表标题": "2024-2025年进口核心商品同比增速趋势表",
  "单位": "%",
  "时间序列": [
    "2025-12", "2025-11", "2025-10", "2025-09", "2025-08", "2025-07",
    "2025-06", "2025-05", "2025-04", "2025-03", "2025-02", "2025-01",
    "2024-12", "2024-11", "2024-10"
  ],
  "核心指标": {
    "半导体制造设备": [22.40, 18.50, 14.20, 13.00, 12.50, 12.00, 11.20, 10.80, 10.40, 9.80, 9.20, 9.80, 12.50, 10.20, 14.80],
    "集成电路(IC)": [12.60, 8.40, 5.20, 4.80, 4.00, 3.50, 3.80, 3.60, 3.10, 2.90, 2.50, 3.00, 3.20, 1.50, 5.60],
    "原油及天然气": [4.10, -1.20, -3.50, 1.80, 1.20, 0.60, 0.90, 0.80, 0.70, -1.50, -2.50, -2.30, 5.40, 2.10, 3.80],
    "化妆品及洗护用品": [-2.10, -5.40, -8.20, -6.80, -6.50, -6.20, -4.50, -4.20, -3.90, -3.50, -2.80, -3.00, 1.50, 2.80, 4.20],
    "铁矿砂及其精矿": [-3.50, -1.80, 0.40, -1.50, -2.20, -2.60, -4.00, -4.80, -4.70, -5.50, -6.50, -6.60, 2.10, 4.50, 6.80]
  }
};

export const ImportCoreCommoditiesTable: React.FC = () => {
  // Create columns
  const columns: ColumnDefinition[] = [
    { key: 'commodity', label: '核心商品类别', align: 'left', sticky: true, width: '160px' }
  ];

  importCoreData.时间序列.forEach((time) => {
    const [year, month] = time.split('-');
    columns.push({
      key: time,
      label: `${year}\n${month}月`,
      align: 'center'
    });
  });

  // Transform data to rows
  const rows = Object.entries(importCoreData.核心指标).map(([commodity, values]) => {
    const row: Record<string, string | number> = { commodity };
    importCoreData.时间序列.forEach((time, idx) => {
      row[time] = values[idx];
    });
    return row;
  });

  // Custom colorizer with stronger highlights
  const importColorizer = (value: unknown, rowIndex: number, colKey: string): CellColorStyle => {
    if (typeof value !== 'number') return {};
    if (colKey === 'commodity') return {};

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
      <div className="flex-shrink-0 mb-2 flex justify-between items-center px-1">
        <div className="flex items-center gap-3">
          <div className="w-1 h-5 bg-webank-lightBlue rounded-full"></div>
          <h3 className="text-sm font-bold text-webank-blue">{importCoreData.图表标题}</h3>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-sm opacity-80"></div>
            <span className="text-[10px] text-slate-500 font-medium">高增项</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 bg-red-500 rounded-sm opacity-80"></div>
            <span className="text-[10px] text-slate-500 font-medium">收缩项</span>
          </div>
          <span className="text-[10px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
            单位：{importCoreData.单位}
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="flex-grow overflow-auto border border-slate-100 rounded-lg shadow-sm">
        <DataTable
          data={rows}
          columns={columns}
          variant="minimal"
          minWidth="1200px"
          stickyFirstColumn
          cellColorizer={importColorizer}
        />
      </div>

      {/* Footer Note */}
      <div className="flex-shrink-0 mt-2 flex justify-between items-center px-1">
        <div className="text-[10px] text-slate-400 flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
          数据来源：海关总署，微众银行个金管理部整理
        </div>
        <div className="text-[10px] font-medium text-webank-lightBlue italic">
          注：2025年12月数据反映了明显的"硬科技"补库特征
        </div>
      </div>
    </div>
  );
};
