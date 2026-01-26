import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { ContributionDataPoint } from '../types';

interface Props {
  data: ContributionDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p style={{ color: '#005c8f' }}>第三产业: {payload[2].value}%</p>
        <p style={{ color: '#00a9f4' }}>第二产业: {payload[1].value}%</p>
        <p style={{ color: '#94a3b8' }}>第一产业: {payload[0].value}%</p>
        <div className="border-t border-slate-200 mt-1 pt-1 font-bold text-webank-blue">
            GDP: {payload[0].payload.total}%
        </div>
      </div>
    );
  }
  return null;
};

export const ContributionChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-2">
        <h3 className="text-xs font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          三产业GDP当季同比拉动 (2024-2025)
        </h3>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            barCategoryGap="20%"
            stackOffset="sign"
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis 
              dataKey="period" 
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 10 }}
              dy={5}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#999', fontSize: 10 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: '10px' }} />
            <Bar dataKey="primary" name="第一产业" stackId="a" fill="#94a3b8" />
            <Bar dataKey="secondary" name="第二产业" stackId="a" fill="#00a9f4" />
            <Bar dataKey="tertiary" name="第三产业" stackId="a" fill="#005c8f" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};