import React from 'react';
import { IndustryGrowthTableData } from '../types';
import { DataTable, TableContainer } from './DataTable';
import { conservativeColorizer } from '../utils/tableHelpers';

interface EquipmentInvestmentTableProps {
  data: IndustryGrowthTableData;
}

export const EquipmentInvestmentTable: React.FC<EquipmentInvestmentTableProps> = ({ data }) => {
  // Transpose: industries as columns, months as rows
  const industries = Object.keys(data.industryData);

  // Create columns: first column is "月份", then one column per industry
  const columns = [
    { key: 'month', label: '月份', width: '100px' },
    ...industries.map(industry => ({
      key: industry,
      label: industry,
      align: 'center' as const
    }))
  ];

  // Create rows: one row per month
  const rows = data.timeSeries.map((month, idx) => {
    const row: any = {
      month: month.substring(5) // Format as "02", "03", etc.
    };

    // Add each industry's value for this month
    industries.forEach(industry => {
      row[industry] = data.industryData[industry][idx];
    });

    return row;
  });

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
