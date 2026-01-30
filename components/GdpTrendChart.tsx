import React from 'react';
import { BaseLineChart } from './BaseLineChart';
import { GdpDataPoint } from '../types';
import { chartColors } from '@/utils/chartColors';

interface Props {
  data: GdpDataPoint[];
}

export const GdpTrendChart: React.FC<Props> = ({ data }) => {
  return (
    <BaseLineChart
      data={data}
      title="2024Q1-2025Q4季度GDP当季同比增速走势图"
      subtitle="单位：%"
      yAxisDomain={[0, 8]}
      showYAxis={true}
      legendOrder={['GDP现价', 'GDP不变价']}
      lines={[
        { dataKey: 'value', name: 'GDP不变价', color: chartColors.primary, strokeWidth: 2, labelPosition: 'top' },
        { dataKey: 'nominal', name: 'GDP现价', color: chartColors.negative, strokeWidth: 2, labelPosition: 'bottom' }
      ]}
    />
  );
};
