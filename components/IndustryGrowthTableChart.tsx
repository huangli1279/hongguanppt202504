import React from 'react';
import { IndustryGrowthTableData, CellColorStyle } from '../types';
import { DataTable, TableContainer } from './DataTable';
import { createColumnsFromTimeSeries, transformToRowArray } from '../utils/tableHelpers';

interface IndustryGrowthTableChartProps {
  data: IndustryGrowthTableData;
}

export const IndustryGrowthTableChart: React.FC<IndustryGrowthTableChartProps> = ({ data }) => {
  // Create columns from time series
  const columns = createColumnsFromTimeSeries(data, '月份');

  // Transform data and format month labels
  const rows = transformToRowArray(data).map(row => ({
    ...row,
    name: typeof row.name === 'string' && row.name.includes('-')
      ? row.name.split('-')[1] + '月'
      : row.name
  }));

  // Custom colorizer that only highlights Oct-Dec
  const highlightRecentColorizer = (value: unknown, rowIndex: number, colKey: string): CellColorStyle => {
    if (typeof value !== 'number') return {};

    // Check if month is Oct-Dec (columns from time series)
    const monthMatch = colKey.match(/2025-(\d{2})/);
    if (!monthMatch) return {};

    const monthNum = parseInt(monthMatch[1]);
    const shouldHighlight = monthNum >= 10 && monthNum <= 12;

    if (!shouldHighlight) return { textColor: 'text-gray-700' };

    if (value >= 5) {
      return { bgColor: 'bg-green-50', textColor: 'text-green-700', fontWeight: 'bold' };
    }
    if (value >= 0) {
      return { textColor: 'text-gray-700' };
    }
    return { bgColor: 'bg-red-50', textColor: 'text-red-600', fontWeight: 'bold' };
  };

  return (
    <TableContainer
      title={data.title}
      unit={data.unit}
      source={data.source}
      legend={[
        { color: 'bg-green-50', label: '高增长 (≥5%)' },
        { color: 'bg-white', label: '正增长 (0-5%)' },
        { color: 'bg-red-50', label: '负增长 (<0%)' }
      ]}
    >
      <DataTable
        data={rows}
        columns={columns}
        variant="default"
        stickyFirstColumn
        cellColorizer={highlightRecentColorizer}
      />
    </TableContainer>
  );
};
