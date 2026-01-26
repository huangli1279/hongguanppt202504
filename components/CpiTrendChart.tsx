
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
import { CpiTrendDataPoint } from '../types';

interface Props {
  data: CpiTrendDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-mckinsey-blue mb-1">{label}</p>
        <p className="text-mckinsey-blue font-bold">CPI同比: {payload[0].value}%</p>
        <p className="text-mckinsey-subtext">核心CPI: {payload[1].value}%</p>
        <p className="text-red-500 font-bold">剔除黄金后核心: {payload[2].value}%</p>
      </div>
    );
  }
  return null;
};

export const CpiTrendChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          CPI、核心CPI及剔除金价后核心CPI走势
        </h3>
        <p className="text-xs text-mckinsey-subtext mt-1">
          剔除金价后的“真实核心CPI”仅0.6%，且呈下行态势
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
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
              domain={[-0.5, 1.5]}
              ticks={[0, 0.5, 1.0, 1.5]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <Line
              name="CPI同比"
              type="monotone"
              dataKey="headline"
              stroke="#051c2c" // McKinsey Blue
              strokeWidth={3}
              dot={{ r: 3, fill: '#051c2c' }}
              activeDot={{ r: 5 }}
              animationDuration={2000}
            />
            <Line
              name="核心CPI"
              type="monotone"
              dataKey="core"
              stroke="#94a3b8" // Grey
              strokeWidth={2}
              dot={false}
              animationDuration={2000}
              animationBegin={300}
            />
            <Line
              name="剔除金价后核心CPI"
              type="monotone"
              dataKey="adjustedCore"
              stroke="#ef4444" // Red for warning
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              animationDuration={2000}
              animationBegin={600}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
