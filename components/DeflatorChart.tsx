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
import { DeflatorDataPoint } from '../types';

interface Props {
  data: DeflatorDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-mckinsey-blue mb-1">{label}</p>
        {payload.map((p: any, index: number) => (
          <p key={index} style={{ color: p.color }}>
            {p.name}: {p.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const DeflatorChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          三产业GDP平减指数同比增速 (2023-2025)
        </h3>
        <p className="text-xs text-mckinsey-subtext mt-1">
          第二产业平减指数持续处于负值区间，拖累整体名义增速
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={0} stroke="#666" strokeWidth={1} />
            <XAxis 
              dataKey="period" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 10 }}
              dy={10}
              interval={1} // Show every other label to avoid clutter
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#999', fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '10px' }}
              iconType="circle"
              iconSize={8}
            />
            
            <Line
              name="第一产业"
              type="monotone"
              dataKey="primary"
              stroke="#94a3b8" // Slate 400
              strokeWidth={2}
              dot={false}
              strokeDasharray="5 5"
              animationDuration={2000}
            />
            <Line
              name="第二产业"
              type="monotone"
              dataKey="secondary"
              stroke="#ef4444" // Red 500 - Highlighting the problem area
              strokeWidth={3}
              dot={false}
              animationDuration={2000}
              animationBegin={500}
            />
            <Line
              name="第三产业"
              type="monotone"
              dataKey="tertiary"
              stroke="#005c8f" // Mckinsey Blue
              strokeWidth={2}
              dot={false}
              animationDuration={2000}
              animationBegin={200}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};