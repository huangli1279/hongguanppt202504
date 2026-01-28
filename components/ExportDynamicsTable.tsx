import React from 'react';
import { ColumnDefinition, CellColorStyle } from '../types';
import { DataTable, TableContainer } from './DataTable';

interface ExportDynamicsTableProps {
  data: {
    "图表标题": string;
    "单位": string;
    "时间序列": string[];
    "核心指标": {
      [key: string]: number[];
    };
  };
}

export const ExportDynamicsTable: React.FC<ExportDynamicsTableProps> = ({ data }) => {
  // Create columns: first column is indicator name, then time periods
  const columns: ColumnDefinition[] = [
    { key: 'indicator', label: '指标 / 时间', align: 'left', sticky: true, width: '150px' }
  ];

  data.时间序列.forEach((time) => {
    columns.push({
      key: time,
      label: time.split('-')[1] + '月',
      align: 'center'
    });
  });

  // Transform data to row array
  const rows = Object.entries(data.核心指标).map(([indicator, values]) => {
    const row: Record<string, string | number> = { indicator };
    data.时间序列.forEach((time, idx) => {
      row[time] = values[idx];
    });
    return row;
  });

  // Colorizer: highlight negative values
  const negativeColorizer = (value: unknown, rowIndex: number, colKey: string): CellColorStyle => {
    if (typeof value !== 'number') return {};
    if (colKey === 'indicator') return {};

    if (value < 0) {
      return { textColor: 'text-red-600', fontWeight: 'semibold' };
    }
    return { textColor: 'text-slate-600' };
  };

  return (
    <TableContainer
      title={data.图表标题}
      unit={data.单位}
      legend={[
        { color: 'bg-red-600', label: '负增长' },
        { color: 'bg-webank-blue', label: '正增长' }
      ]}
    >
      <DataTable
        data={rows}
        columns={columns}
        variant="default"
        stickyFirstColumn
        cellColorizer={negativeColorizer}
      />
    </TableContainer>
  );
};
