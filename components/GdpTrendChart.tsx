import React from 'react';
import { LineChartBase } from './LineChartBase';
import { GdpDataPoint } from '../types';

interface Props {
  data: GdpDataPoint[];
}

export const GdpTrendChart: React.FC<Props> = ({ data }) => {
  return (
    <LineChartBase
      data={data}
      title="2024Q1-2025Q4季度GDP当季同比增速走势图"
      subtitle="单位：%"
      yAxisDomain={[0, 8]}
      showYAxis={true}
      legendOrder={['GDP现价', 'GDP不变价']}
      lines={[
        { dataKey: 'value', name: 'GDP不变价', color: '#005c8f', strokeWidth: 2, labelPosition: 'top' },
        { dataKey: 'nominal', name: 'GDP现价', color: '#ef4444', strokeWidth: 2, labelPosition: 'bottom' }
      ]}
    />
  );
};
