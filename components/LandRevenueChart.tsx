import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  ReferenceLine
} from 'recharts';
import { LandRevenueDataPoint } from '../types';

interface Props {
  data: LandRevenueDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-mckinsey-blue mb-1">{label}</p>
        <p className="text-red-500 font-bold">累计同比: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export const LandRevenueChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年国有土地使用权出让收入累计同比
        </h3>
        <p className="text-xs text-mckinsey-subtext mt-1">
          1-11月降幅大幅走阔至-10.7%，土地财政缺口进一步放大
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorLand" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={0} stroke="#333" />
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
              domain={[-15, 5]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#ef4444"
              strokeWidth={3}
              fill="url(#colorLand)"
              animationDuration={2000}
            >
              <LabelList 
                dataKey="value" 
                position="bottom" 
                offset={10} 
                formatter={(val: number) => `${val}%`}
                style={{ fill: '#ef4444', fontSize: '10px', fontWeight: 600 }}
              />
            </Area>
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
