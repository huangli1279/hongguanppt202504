import React from 'react';
import { IndustryGrowthTableData } from '../types';
import { DataTable, TableContainer } from './DataTable';
import { createColumnsFromTimeSeries, transformToRowArray, conservativeColorizer } from '../utils/tableHelpers';

interface IndustryGrowthTableProps {
  data: IndustryGrowthTableData;
}

export const IndustryGrowthTable: React.FC<IndustryGrowthTableProps> = ({ data }) => {
  // Create columns from time series (月份 + dynamic month columns)
  const columns = createColumnsFromTimeSeries(data, '月份');

  // Transform wide data to row array
  const rows = transformToRowArray(data);

  // Customize row labels to remove "2025-" prefix
  const formattedRows = rows.map(row => ({
    ...row,
    name: typeof row.name === 'string' && row.name.startsWith('2025-')
      ? row.name.replace('2025-', '') + '月'
      : row.name
  }));

  return (
    <TableContainer
      title={data.title}
      unit={data.unit}
      source={data.source}
      legend={[
        { color: 'bg-blue-50', label: '增速 ≥ 10%' },
        { color: 'bg-red-50', label: '负增长' }
      ]}
    >
      <DataTable
        data={formattedRows}
        columns={columns}
        variant="default"
        minWidth="1500px"
        stickyFirstColumn
        cellColorizer={conservativeColorizer}
      />
    </TableContainer>
  );
};
