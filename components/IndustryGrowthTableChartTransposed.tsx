import React from 'react';
import { IndustryGrowthTableData, CellColorStyle, ColumnDefinition } from '../types';
import { DataTable, TableContainer } from './DataTable';

interface IndustryGrowthTableChartTransposedProps {
  data: IndustryGrowthTableData;
}

// Industry name abbreviations
const industryAbbreviations: { [key: string]: string } = {
  "煤炭开采和洗选业": "煤炭",
  "石油和天然气开采业": "油气",
  "黑色金属矿采选业": "黑矿",
  "有色金属矿采选业": "有矿",
  "农副食品加工业": "农副",
  "食品制造业": "食品",
  "家具制造业": "家具",
  "石油、煤炭及其他燃料加工业": "燃料",
  "化学原料和化学制品制造业": "化学",
  "医药制造业": "医药",
  "橡胶和塑料制品业": "橡塑",
  "非金属矿物制品业": "非矿",
  "黑色金属冶炼和压延加工业": "黑冶",
  "有色金属冶炼和压延加工业": "有冶",
  "金属制品业": "金属",
  "通用设备制造业": "通用",
  "汽车制造业": "汽车",
  "铁路、船舶、航空航天和其他运输设备制造业": "铁船航",
  "电气机械和器材制造业": "电气",
  "计算机、通信和其他电子设备制造业": "电子",
  "装备制造业": "装备",
  "高技术制造业": "高技术"
};

export const IndustryGrowthTableChartTransposed: React.FC<IndustryGrowthTableChartTransposedProps> = ({ data }) => {
  const industries = Object.keys(data.industryData);
  
  // Create columns: first column is month, then one column per industry (abbreviated)
  const columns: ColumnDefinition[] = [
    {
      key: 'month',
      label: '月份',
      align: 'center',
      width: '60px',
      sticky: true
    },
    ...industries.map(industry => ({
      key: industry,
      label: industryAbbreviations[industry] || industry,
      align: 'center' as const,
      width: '48px'
    }))
  ];

  // Transform data: each row is a time period with values for all industries
  const rows = data.timeSeries.map((timePeriod, timeIndex) => {
    const row: any = {
      month: timePeriod.split('-')[1] + '月'
    };
    
    industries.forEach(industry => {
      const value = data.industryData[industry][timeIndex];
      row[industry] = value !== null ? value.toFixed(1) : '-';
    });
    
    return row;
  });

  // Custom colorizer - highlight values in last 3 months
  const highlightRecentColorizer = (value: unknown, rowIndex: number, colKey: string): CellColorStyle => {
    if (colKey === 'month') return {};
    if (typeof value === 'string' && value === '-') return { textColor: 'text-gray-400' };
    
    const numValue = typeof value === 'string' ? parseFloat(value) : (typeof value === 'number' ? value : null);
    if (numValue === null || isNaN(numValue)) return {};

    // Highlight last 3 rows (Oct-Dec)
    const shouldHighlight = rowIndex >= rows.length - 3;

    if (!shouldHighlight) return { textColor: 'text-gray-700' };

    if (numValue >= 5) {
      return { bgColor: 'bg-green-50', textColor: 'text-green-700', fontWeight: 'bold' };
    }
    if (numValue >= 0) {
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
