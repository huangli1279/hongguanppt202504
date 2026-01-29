import React from 'react';
import { DataTable, TableContainer } from './DataTable';
import { conservativeColorizer } from '../utils/tableHelpers';

const rawData = {
  "时间序列": [
    "2025-02", "2025-03", "2025-04", "2025-05", "2025-06", "2025-07", 
    "2025-08", "2025-09", "2025-10", "2025-11", "2025-12"
  ],
  "粮油食品类": [
    11.50, 12.20, 12.60, 13.00, 12.30, 11.80, 11.00, 10.40, 10.30, 9.90, 9.30
  ],
  "日用品类": [
    5.70, 6.80, 7.00, 7.20, 7.30, 7.40, 7.40, 7.40, 7.40, 6.50, 6.28
  ],
  "中西药品类": [
    2.50, 2.10, 2.20, 1.80, 1.40, 1.20, 1.20, 1.30, 1.50, 1.80, 1.77
  ],
  "服装鞋帽针纺织品类": [
    3.30, 3.40, 3.10, 3.30, 3.10, 2.90, 2.90, 3.10, 3.50, 3.50, 3.18
  ],
  "金银珠宝类": [
    5.40, 6.90, 10.40, 12.30, 11.30, 11.00, 11.70, 11.50, 14.00, 13.50, 12.78
  ],
  "体育娱乐用品类": [
    25.00, 25.40, 24.90, 25.70, 22.20, 21.10, 20.60, 19.60, 18.40, 16.40, 15.70
  ],
  "家具类": [
    11.70, 18.10, 20.20, 21.40, 22.90, 22.60, 22.00, 21.30, 19.90, 16.90, 14.62
  ],
  "家用电器和音像器材类": [
    10.90, 19.30, 23.90, 30.20, 30.70, 30.40, 28.40, 25.30, 20.10, 14.80, 11.00
  ],
  "建筑及装潢材料类": [
    0.10, 0.00, 2.30, 3.00, 2.60, 2.20, 1.80, 1.60, 0.50, -1.50, -2.67
  ],
  "汽车类": [
    -4.40, -0.80, -0.50, -0.10, 0.80, 0.40, 0.50, 0.60, -0.20, -1.00, -1.49
  ],
  "通讯器材类": [
    26.20, 26.90, 25.40, 27.10, 24.10, 22.90, 21.10, 20.50, 20.90, 20.90, 20.86
  ],
  "文化办公用品类": [
    21.80, 21.70, 24.40, 25.70, 25.40, 23.70, 22.30, 19.90, 19.10, 18.20, 17.27
  ]
};

const getLabel = (key: string) => {
  const map: Record<string, string> = {
    "粮油食品类": "粮油食品",
    "日用品类": "日用品",
    "中西药品类": "中西药品",
    "服装鞋帽针纺织品类": "服装鞋帽",
    "金银珠宝类": "金银珠宝",
    "体育娱乐用品类": "体育娱乐",
    "家具类": "家具",
    "家用电器和音像器材类": "家电音像",
    "建筑及装潢材料类": "建筑装潢",
    "汽车类": "汽车",
    "通讯器材类": "通讯器材",
    "文化办公用品类": "文化办公"
  };
  return map[key] || key;
};

export const RetailCategoryTable: React.FC = () => {
  // Transpose logic
  const categories = Object.keys(rawData).filter(k => k !== '时间序列') as (keyof typeof rawData)[];
  
  // Create columns: Date + Categories
  const columns = [
    { key: 'month', label: '日期', sticky: true },
    ...categories.map(category => ({
      key: category,
      label: getLabel(category),
      align: 'center' as const
    }))
  ];

  // Create rows
  const rows = rawData["时间序列"]
    .map((date, idx) => {
      // Format date: "2025-02" -> "25-02"
      const formattedDate = date.substring(2);
      
      const row: any = {
        month: formattedDate
      };

      categories.forEach(category => {
        // @ts-ignore
        row[category] = rawData[category][idx];
      });

      return row;
    })
    .filter(row => row !== null); // Remove null entries if any

  return (
    <TableContainer
      title="2025年分商品零售类值累计同比走势"
      unit="%"
      source="国家统计局"
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
