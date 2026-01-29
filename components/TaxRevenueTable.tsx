import React from 'react';
import { TaxRevenueDataPoint, ColumnDefinition, CellColorizer } from '../types';
import { DataTable, TableContainer } from './DataTable';

interface Props {
  data: TaxRevenueDataPoint[];
}

export const TaxRevenueTable: React.FC<Props> = ({ data }) => {
  const columns: ColumnDefinition[] = [
    { key: 'taxType', label: '税种', align: 'left', width: '40%' },
    { key: 'amount', label: '1-11月金额', align: 'right', width: '30%' },
    { key: 'growth', label: '1-11月累计增速', align: 'right', width: '30%' },
  ];

  const cellColorizer: CellColorizer = (value, rowIndex, colKey) => {
    if (colKey === 'growth' && typeof value === 'number') {
      return {
        textColor: value < 0 ? 'text-red-500' : 'text-webank-blue',
        fontWeight: 'semibold'
      };
    }
    return {};
  };

  return (
    <TableContainer 
      title="2025年1-11月主要税种累计完成情况" 
      unit="金额:亿元, 累计增速:%"
    >
      <DataTable 
        data={data as any} 
        columns={columns} 
        variant="minimal"
        cellColorizer={cellColorizer}
      />
    </TableContainer>
  );
};
