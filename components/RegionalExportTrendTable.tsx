import React from 'react';
import { DataTable, TableContainer } from './DataTable';
import { RegionalExportTrendDataPoint } from '../types';

interface Props {
  data: RegionalExportTrendDataPoint[];
}

// Transform data for table display
const transformDataForTable = (data: RegionalExportTrendDataPoint[]) => {
  return data.map(item => ({
    month: `${item.month}月`,
    total: item.total,
    us: item.us,
    asean: item.asean,
    africa: item.africa,
    eu: item.eu,
    latinAmerica: item.latinAmerica
  }));
};


// Cell colorizer for positive/negative values
const cellColorizer = (value: unknown, rowIdx: number, colKey: string) => {
  if (colKey === 'month') return {};

  const numValue = Number(value);
  if (isNaN(numValue)) return {};

  if (numValue > 0) {
    return {
      textColor: 'text-emerald-600',
      fontWeight: 'semibold' as const
    };
  } else if (numValue < 0) {
    return {
      textColor: 'text-red-600',
      fontWeight: 'semibold' as const
    };
  }
  return { textColor: 'text-slate-600' };
};

export const RegionalExportTrendTable: React.FC<Props> = ({ data }) => {
  const tableData = transformDataForTable(data);

  const columns = [
    { key: 'month', label: '月份', width: '10%', align: 'center' as const },
    { key: 'total', label: '出口总值', width: '15%', align: 'center' as const },
    { key: 'us', label: '对美', width: '15%', align: 'center' as const },
    { key: 'asean', label: '对东盟', width: '15%', align: 'center' as const },
    { key: 'africa', label: '对非洲', width: '15%', align: 'center' as const },
    { key: 'eu', label: '对欧盟', width: '15%', align: 'center' as const },
    { key: 'latinAmerica', label: '对拉美', width: '15%', align: 'center' as const }
  ];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-1.5">
        <h3 className="text-[10px] font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-0.5">
          2025年中国对主要贸易伙伴出口月度同比增速走势
        </h3>
      </div>
      <div className="flex-grow min-h-0">
        <DataTable
          data={tableData}
          columns={columns}
          variant="bordered"
          cellColorizer={cellColorizer}
          minRowHeight={10}
        />
      </div>
    </div>
  );
};
