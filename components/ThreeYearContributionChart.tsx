import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { ContributionDataPoint } from '../types';

interface ThreeYearContributionChartProps {
  data: ContributionDataPoint[];
}

export const ThreeYearContributionChart: React.FC<ThreeYearContributionChartProps> = ({ data }) => {
  // Transform period format from "2023-03" to "23Q1" etc.
  const transformedData = data.map(d => {
    const [year, month] = d.period.split('-');
    const shortYear = year.slice(2);
    const quarter = Math.ceil(parseInt(month) / 3);
    return {
      period: `${shortYear}Q${quarter}`,
      第一产业: d.primary,
      第二产业: d.secondary,
      第三产业: d.tertiary,
    };
  });

  return (
    <div className="w-full h-full flex flex-col">
      {/* Title - matching left chart style */}
      <div className="mb-2">
        <h3 className="text-xs font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2023-2025年三产业GDP当季同比拉动
        </h3>
      </div>

      {/* Chart */}
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={transformedData}
            margin={{ top: 15, right: 30, left: 10, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="period"
              tick={{ fontSize: 11, fill: '#666' }}
              axisLine={{ stroke: '#cbd5e1' }}
            />
            <YAxis
              tick={{ fontSize: 11, fill: '#666' }}
              axisLine={{ stroke: '#cbd5e1' }}
              label={{ value: '百分点', angle: -90, position: 'insideLeft', style: { fontSize: 10, fill: '#666' } }}
              domain={[0, 'dataMax']}
            />
            <Tooltip
              contentStyle={{ fontSize: '11px', border: '1px solid #e2e8f0', borderRadius: '4px' }}
              formatter={(value: number) => value.toFixed(2)}
            />
            <Legend
              wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
            />
            <Bar 
              dataKey="第一产业" 
              stackId="a" 
              fill="#cbd5e1" 
              name="第一产业"
              animationDuration={1500}
            />
            <Bar 
              dataKey="第二产业" 
              stackId="a" 
              fill="#00a9f4" 
              name="第二产业"
              animationDuration={1500}
            />
            <Bar 
              dataKey="第三产业" 
              stackId="a" 
              fill="#005c8f" 
              name="第三产业"
              animationDuration={1500}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
