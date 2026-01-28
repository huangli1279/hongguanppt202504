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
      {/* Title and metadata */}
      <div className="mb-2 px-2">
        <h3 className="text-xs font-bold text-webank-blue">2023-2025年三产业GDP当季同比拉动</h3>
        <p className="text-[9px] text-slate-500">单位: 百分点 | 数据来源: GDP数据</p>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={transformedData}
          margin={{ top: 5, right: 10, left: -10, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis
            dataKey="period"
            tick={{ fontSize: 9, fill: '#666' }}
            angle={-45}
            textAnchor="end"
            height={40}
          />
          <YAxis
            tick={{ fontSize: 9, fill: '#666' }}
            label={{ value: '百分点', angle: -90, position: 'insideLeft', fontSize: 9, fill: '#666' }}
            domain={[0, 'dataMax']}
          />
          <Tooltip
            contentStyle={{ fontSize: 10, backgroundColor: 'rgba(255,255,255,0.95)', border: '1px solid #ccc' }}
            formatter={(value: number) => value.toFixed(2)}
          />
          <Legend
            wrapperStyle={{ fontSize: 9 }}
            iconType="square"
          />
          <Bar dataKey="第一产业" stackId="a" fill="#82ca9d" name="第一产业" />
          <Bar dataKey="第二产业" stackId="a" fill="#ffa726" name="第二产业" />
          <Bar dataKey="第三产业" stackId="a" fill="#42a5f5" name="第三产业" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
