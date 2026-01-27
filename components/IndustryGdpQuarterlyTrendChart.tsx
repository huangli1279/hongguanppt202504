import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { IndustryGdpQuarterlyDataPoint } from '../types';

interface IndustryGdpQuarterlyTrendChartProps {
  data: IndustryGdpQuarterlyDataPoint[];
}

export const IndustryGdpQuarterlyTrendChart: React.FC<IndustryGdpQuarterlyTrendChartProps> = ({ data }) => {
  // Transform data for line chart (quarters as x-axis, industries as lines)
  const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];

  // Select key industries to display
  const keyIndustries = [
    '信息传输、软件和信息技术服务业',
    '租赁和商务服务业',
    '制造业',
    '工业',
    '建筑业',
    '房地产业'
  ];

  const filteredData = data.filter(d => keyIndustries.includes(d.industry));

  const chartData = quarters.map((q, idx) => {
    const dataPoint: any = { quarter: q };
    filteredData.forEach(industry => {
      const qKey = ['q1', 'q2', 'q3', 'q4'][idx] as keyof IndustryGdpQuarterlyDataPoint;
      dataPoint[industry.industry] = industry[qKey];
    });
    return dataPoint;
  });

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-2 px-2">
        <h3 className="text-sm font-bold text-webank-blue">主要行业季度增速趋势</h3>
        <p className="text-xs text-webank-subtext">单位: %</p>
      </div>

      <ResponsiveContainer width="100%" height="90%">
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 10, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="quarter"
            tick={{ fill: '#666666', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
          />
          <YAxis
            domain={[-5, 15]}
            tick={{ fill: '#666666', fontSize: 11 }}
            axisLine={{ stroke: '#cbd5e1' }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #cbd5e1',
              borderRadius: '4px',
              fontSize: '11px'
            }}
            formatter={(value: number) => `${value}%`}
          />
          <Legend
            wrapperStyle={{ fontSize: '10px' }}
            iconType="line"
          />
          <Line
            type="monotone"
            dataKey="信息传输、软件和信息技术服务业"
            stroke="#051c2c"
            strokeWidth={2}
            dot={{ r: 3 }}
            name="信息技术"
          />
          <Line
            type="monotone"
            dataKey="租赁和商务服务业"
            stroke="#00a9f4"
            strokeWidth={2}
            dot={{ r: 3 }}
            name="租赁商务"
          />
          <Line
            type="monotone"
            dataKey="制造业"
            stroke="#005c8f"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
          <Line
            type="monotone"
            dataKey="工业"
            stroke="#94a3b8"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
          <Line
            type="monotone"
            dataKey="建筑业"
            stroke="#ef4444"
            strokeWidth={2}
            dot={{ r: 3 }}
          />
          <Line
            type="monotone"
            dataKey="房地产业"
            stroke="#fca5a5"
            strokeWidth={2}
            dot={{ r: 3 }}
            name="房地产"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
