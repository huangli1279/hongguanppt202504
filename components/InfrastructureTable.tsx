import React from 'react';
import { IndustryGrowthTableData } from '../types';
import { DataTable, TableContainer } from './DataTable';
import { createColumnsFromIndustries, transformToTransposedRowArray, conservativeColorizer } from '../utils/tableHelpers';

interface InfrastructureTableProps {
  data: IndustryGrowthTableData;
}

export const InfrastructureTable: React.FC<InfrastructureTableProps> = ({ data }) => {
  // Create columns from industries (Transposed) - remove fixed widths for auto-fit
  const columns = createColumnsFromIndustries(data, '月份').map(col => ({
    ...col,
    width: undefined // Remove fixed width to allow auto-sizing
  }));

  // Transform data to transposed rows (Time series as rows)
  const rows = transformToTransposedRowArray(data);

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

