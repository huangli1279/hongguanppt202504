import React from 'react';
import { IndustryGrowthTableData } from '../types';
import { DataTable, TableContainer } from './DataTable';
import { createColumnsFromIndustries, transformToTransposedRowArray, conservativeColorizer } from '../utils/tableHelpers';

interface InfrastructureTableProps {
  data: IndustryGrowthTableData;
}

export const InfrastructureTable: React.FC<InfrastructureTableProps> = ({ data }) => {
  // Create columns from industries (Transposed)
  const columns = createColumnsFromIndustries(data, '月份');

  // Transform data to transposed rows (Time series as rows)
  const rows = transformToTransposedRowArray(data).map(row => ({
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
        data={rows}
        columns={columns}
        variant="bordered"
        stickyFirstColumn
        cellColorizer={conservativeColorizer}
      />
    </TableContainer>
  );
};

