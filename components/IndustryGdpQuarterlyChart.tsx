import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { IndustryGdpQuarterlyDataPoint } from '../types';

interface IndustryGdpQuarterlyChartProps {
  data: IndustryGdpQuarterlyDataPoint[];
}

export const IndustryGdpQuarterlyChart: React.FC<IndustryGdpQuarterlyChartProps> = ({ data }) => {
  // Get Q4 data for bar chart
  const chartData = data.map(d => ({
    industry: d.industry,
    Q4: d.q4,
    category: d.category
  }));

  // Color mapping based on category
  const getColor = (category: string) => {
    switch (category) {
      case 'new-quality': return '#051c2c'; // WeBank blue - highlight
      case 'strong': return '#00a9f4'; // Light blue
      case 'moderate': return '#94a3b8'; // Grey
      case 'weak': return '#ef4444'; // Red
      default: return '#94a3b8';
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-2 px-2">
        <h3 className="text-sm font-bold text-webank-blue">2025年Q4各行业GDP当季同比增速</h3>
        <p className="text-xs text-webank-subtext">单位: %</p>
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 180, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={true} vertical={false} />
          <XAxis
            type="number"
            domain={[-5, 15]}
            ticks={[-5, 0, 5, 10, 15]}
            tick={{ fill: '#666666', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
          />
          <YAxis
            type="category"
            dataKey="industry"
            tick={{ fill: '#333333', fontSize: 10 }}
            width={170}
            axisLine={{ stroke: '#cbd5e1' }}
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
          <Bar dataKey="Q4" radius={[0, 4, 4, 0]}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.category)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
