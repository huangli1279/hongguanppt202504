import React from 'react';
import { IndustrialFinancialTableData, ColumnDefinition } from '../types';
import { DataTable, TableContainer } from './DataTable';

interface IndustrialFinancialTableProps {
  data: IndustrialFinancialTableData;
}

export const IndustrialFinancialTable: React.FC<IndustrialFinancialTableProps> = ({ data }) => {
  // Define columns
  const columns: ColumnDefinition[] = [
    { key: 'month', label: '月份', align: 'center' },
    { key: 'revenue', label: '营业收入', align: 'right' },
    { key: 'cost', label: '营业成本', align: 'right' },
    { key: 'operatingProfit', label: '营业利润', align: 'right' },
    { key: 'totalProfit', label: '利润总额', align: 'right' },
    { key: 'investmentIncome', label: '投资收益', align: 'right' }
  ];

  // Transform data to row array
  const rows = data.months.map((month, idx) => ({
    month,
    revenue: data.revenue[idx],
    cost: data.cost[idx],
    operatingProfit: data.operatingProfit[idx],
    totalProfit: data.totalProfit[idx],
    investmentIncome: data.investmentIncome[idx]
  }));

  return (
    <TableContainer title={data.title} unit={data.unit}>
      <DataTable
        data={rows}
        columns={columns}
        variant="default"
      />
    </TableContainer>
  );
};
