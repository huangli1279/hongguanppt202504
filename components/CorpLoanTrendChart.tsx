import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { CorpLoanTrendDataPoint } from '../types';

interface Props {
  data: CorpLoanTrendDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue font-bold">
          同比增速: {value}%
        </p>
      </div>
    );
  }
  return null;
};

export const CorpLoanTrendChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          社融存量规模同比增速走势 (%)
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          从2022年初10.5%逐步回落至2025年末8.3%，整体呈下行趋势
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            
            <XAxis 
              dataKey="month" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 10 }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#999' }}
              tickFormatter={(val) => `${val}%`}
              domain={[7.5, 11]}
            />
            <Tooltip content={<CustomTooltip />} />

            <Line
              dataKey="value"
              type="monotone"
              stroke="#005c8f"
              strokeWidth={2}
              dot={{ r: 3, fill: '#005c8f' }}
              activeDot={{ r: 5, fill: '#005c8f' }}
              animationDuration={2000}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};