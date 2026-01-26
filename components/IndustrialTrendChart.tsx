
import React from 'react';
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LabelList
} from 'recharts';
import { IndustrialTrendDataPoint } from '../types';

interface Props {
  data: IndustrialTrendDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue">同比增速: {payload[0].value}%</p>
        <p className="text-webank-lightBlue">环比增速: {payload[1].value}%</p>
      </div>
    );
  }
  return null;
};

export const IndustrialTrendChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年Q4 工业增加值增速走势 (同比 vs 环比)
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          12月同比增速回升至5.2%，环比增速显著加快
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis 
              dataKey="month" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 11 }}
              dy={10}
            />
            {/* Left Axis for YoY (Bars) */}
            <YAxis 
              yAxisId="left"
              orientation="left"
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#051c2c', fontSize: 10, fontWeight: 600 }}
              domain={[0, 6]}
              tickFormatter={(val) => `${val}%`}
            />
            {/* Right Axis for MoM (Line) */}
            <YAxis 
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#00a9f4', fontSize: 10 }}
              domain={[0, 0.8]}
              tickFormatter={(val) => `${val}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
            
            <Bar 
              yAxisId="left" 
              dataKey="yoy" 
              name="同比增速" 
              fill="#051c2c" 
              barSize={40} 
              radius={[4, 4, 0, 0]} 
              animationDuration={1500}
            >
               <LabelList dataKey="yoy" position="top" fill="#051c2c" fontSize={12} fontWeight="bold" formatter={(val: number) => `${val}%`} />
            </Bar>
            
            <Line 
              yAxisId="right" 
              type="monotone" 
              dataKey="mom" 
              name="环比增速" 
              stroke="#00a9f4" 
              strokeWidth={3} 
              dot={{ r: 4, fill: '#00a9f4' }}
              animationDuration={1500}
              animationBegin={500}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
