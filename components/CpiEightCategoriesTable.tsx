import React from 'react';
import { IndustryGrowthTableData } from '../types';
import { DataTable, TableContainer } from './DataTable';
import { createColumnsFromTimeSeries, transformToRowArray, cpiCategoryColorizer } from '../utils/tableHelpers';

interface CpiEightCategoriesTableProps {
  data: IndustryGrowthTableData;
}

export const CpiEightCategoriesTable: React.FC<CpiEightCategoriesTableProps> = ({ data }) => {
  // Create columns from time series
  const columns = createColumnsFromTimeSeries(data, '分类 \\ 月份');

  // Transform data to rows and clean up category names
  const rows = transformToRowArray(data).map(row => ({
    ...row,
    name: typeof row.name === 'string'
      ? row.name.replace('CPI:', '').replace(':环比', '')
      : row.name
  }));

  return (
    <TableContainer
      title={data.title}
      unit={data.unit}
      source={data.source}
      legend={[
        { color: 'bg-blue-50', label: '上涨显著' },
        { color: 'bg-red-50', label: '下跌显著' }
      ]}
    >
      <DataTable
        data={rows}
        columns={columns}
        variant="default"
        minWidth="1000px"
        stickyFirstColumn
        cellColorizer={cpiCategoryColorizer}
      />
    </TableContainer>
  );
};
