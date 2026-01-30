import React from 'react';
import { LineChartBase } from './LineChartBase';
import { DeflatorDataPoint } from '../types';

interface Props {
  data: DeflatorDataPoint[];
}

export const DeflatorChart: React.FC<Props> = ({ data }) => {
  // 过滤数据，只保留24年和25年的数据
  const filteredData = data.filter(item => !item.period.startsWith('2023'));

  return (
    <LineChartBase
      data={filteredData}
      title="三产业GDP平减指数同比增速 (2024-2025)"
      subtitle="第二产业平减指数持续处于负值区间，拖累整体名义增速"
      yAxisDomain={[-6, 6]}
      showYAxis={true}
      showReferenceLine={true}
      referenceLineY={0}
      legendOrder={['第一产业', '第二产业', '第三产业']}
      lines={[
        { dataKey: 'primary', name: '第一产业', color: '#94a3b8', strokeWidth: 2, labelPosition: 'top' },
        { dataKey: 'secondary', name: '第二产业', color: '#ef4444', strokeWidth: 2, labelPosition: 'bottom' },
        { dataKey: 'tertiary', name: '第三产业', color: '#005c8f', strokeWidth: 2, labelPosition: 'top' }
      ]}
    />
  );
};