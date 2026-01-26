import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine
} from 'recharts';
import { TradeTrendDataPoint } from '../types';

interface Props {
  data: TradeTrendDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue font-bold">出口: {payload[0].value}%</p>
        <p className="text-webank-lightBlue">进口: {payload[1].value}%</p>
      </div>
    );
  }
  return null;
};

export const TradeTrendChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年Q4进出口当月同比增速
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          出口呈“先抑后扬”V型反转，12月进出口双双超预期回升
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 20, left: -10, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={0} stroke="#333" strokeWidth={1} />
            
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
              tick={{ fill: '#999', fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
              domain={[-4, 8]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <Line
              name="出口(美元计价)"
              type="monotone"
              dataKey="export"
              stroke="#005c8f" // Dark Blue
              strokeWidth={3}
              dot={{ r: 4, fill: '#005c8f' }}
              animationDuration={2000}
            />
            <Line
              name="进口(美元计价)"
              type="monotone"
              dataKey="import"
              stroke="#00a9f4" // Light Blue
              strokeWidth={3}
              dot={{ r: 4, fill: '#00a9f4' }}
              strokeDasharray="5 5"
              animationDuration={2000}
              animationBegin={300}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};