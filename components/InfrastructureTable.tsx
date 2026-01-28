import React from 'react';
import { IndustryGrowthTableData } from '../types';
import { DataTable, TableContainer } from './DataTable';
import { createColumnsFromTimeSeries, transformToRowArray, conservativeColorizer } from '../utils/tableHelpers';

interface InfrastructureTableProps {
  data: IndustryGrowthTableData;
}

export const InfrastructureTable: React.FC<InfrastructureTableProps> = ({ data }) => {
  // Create columns from time series
  const columns = createColumnsFromTimeSeries(data, '月份');

  // Transform data and format month labels (remove year prefix)
  const rows = transformToRowArray(data).map(row => ({
    ...row,
    name: typeof row.name === 'string' && row.name.length > 5
      ? row.name.substring(2)
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
        data={rows}
        columns={columns}
        variant="bordered"
        stickyFirstColumn
        cellColorizer={conservativeColorizer}
      />
    </TableContainer>
  );
};
