import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import { IndustryGdpQuarterlyDataPoint } from '../types';

interface IndustryGdpGroupedBarChartProps {
  data: IndustryGdpQuarterlyDataPoint[];
}

export const IndustryGdpGroupedBarChart: React.FC<IndustryGdpGroupedBarChartProps> = ({ data }) => {
  // Transform data for grouped bar chart
  const chartData = data.map(d => ({
    industry: d.industry,
    'Q1': d.q1,
    'Q2': d.q2,
    'Q3': d.q3,
    'Q4': d.q4,
    category: d.category
  }));

  // Define quarter colors
  const quarterColors = {
    'Q1': '#94a3b8',
    'Q2': '#64748b',
    'Q3': '#005c8f',
    'Q4': '#051c2c'
  };

  return (
    <div className="w-full h-full flex flex-col pb-0">
      <div className="mb-1 px-2">
        <h3 className="text-sm font-bold text-webank-blue">2025年各行业GDP季度同比增速</h3>
        <p className="text-xs text-webank-subtext">单位: %</p>
      </div>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 5, right: 20, left: 10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis
              dataKey="industry"
              angle={-45}
              textAnchor="end"
              height={58}
              tick={{ fill: '#333333', fontSize: 9 }}
              axisLine={{ stroke: '#cbd5e1' }}
              interval={0}
            />
            <YAxis
              domain={[-5, 15]}
              ticks={[-5, 0, 5, 10, 15]}
              tick={{ fill: '#666666', fontSize: 11 }}
              axisLine={{ stroke: '#cbd5e1' }}
              label={{ value: '%', angle: 0, position: 'top', offset: 10, style: { fill: '#666666', fontSize: 11 } }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #cbd5e1',
                borderRadius: '4px',
                fontSize: '12px'
              }}
              formatter={(value: number) => `${value}%`}
            />
            <Legend
              wrapperStyle={{ fontSize: '11px' }}
              iconType="rect"
              verticalAlign="bottom"
            />
            <Bar dataKey="Q1" fill={quarterColors.Q1} radius={[4, 4, 0, 0]}>
              <LabelList dataKey="Q1" position="top" style={{ fontSize: '8px', fill: '#333333' }} />
            </Bar>
            <Bar dataKey="Q2" fill={quarterColors.Q2} radius={[4, 4, 0, 0]}>
              <LabelList dataKey="Q2" position="top" style={{ fontSize: '8px', fill: '#333333' }} />
            </Bar>
            <Bar dataKey="Q3" fill={quarterColors.Q3} radius={[4, 4, 0, 0]}>
              <LabelList dataKey="Q3" position="top" style={{ fontSize: '8px', fill: '#333333' }} />
            </Bar>
            <Bar dataKey="Q4" fill={quarterColors.Q4} radius={[4, 4, 0, 0]}>
              <LabelList dataKey="Q4" position="top" style={{ fontSize: '8px', fill: '#333333' }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
