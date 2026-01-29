
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine
} from 'recharts';
import { M1M2ScissorsTrendDataPoint } from '../types';

interface Props {
  data: M1M2ScissorsTrendDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-lightBlue font-bold">M1-M2剪刀差: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export const M1RealEstateCorrelationChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2022-2025年中国货币供应量(M1/M2)剪刀差走势
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          同比增速单位为%
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={0} stroke="#333" strokeWidth={1} />
            
            <XAxis 
              dataKey="month" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 10 }}
              dy={10}
              tickFormatter={(value) => value.endsWith('-01') ? value : value.slice(5)}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#00a9f4', fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
              domain={[-12, 0]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <Line
              name="M1-M2剪刀差"
              type="monotone"
              dataKey="value"
              stroke="#00a9f4"
              strokeWidth={3}
              dot={false}
              animationDuration={2000}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
