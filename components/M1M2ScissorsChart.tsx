
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
  LabelList
} from 'recharts';
import { MoneySupplyDataPoint } from '../types';

interface Props {
  data: MoneySupplyDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue font-bold">M2增速: {payload[0].value}%</p>
        <p className="text-webank-lightBlue">M1增速: {payload[1].value}%</p>
        <div className="mt-1 border-t border-slate-100 pt-1 text-red-500 font-bold text-[10px]">
           剪刀差: {payload[0].payload.gap}%
        </div>
      </div>
    );
  }
  return null;
};

export const M1M2ScissorsChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年Q4 M1与M2同比增速及剪刀差走势
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          两者走势背离加剧，年末剪刀差扩大至4.7%
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
              tick={{ fill: '#999', fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
              domain={[0, 10]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <Line
              name="M2同比"
              type="monotone"
              dataKey="m2"
              stroke="#051c2c"
              strokeWidth={3}
              dot={{ r: 4, fill: '#051c2c' }}
              animationDuration={2000}
            >
                 <LabelList 
                  dataKey="m2" 
                  position="top" 
                  formatter={(val: number) => `${val}%`}
                  style={{ fill: '#051c2c', fontSize: '10px', fontWeight: 'bold' }}
                />
            </Line>
            <Line
              name="M1同比"
              type="monotone"
              dataKey="m1"
              stroke="#00a9f4"
              strokeWidth={3}
              dot={{ r: 4, fill: '#00a9f4' }}
              animationDuration={2000}
              animationBegin={300}
            >
                 <LabelList 
                  dataKey="m1" 
                  position="bottom" 
                  formatter={(val: number) => `${val}%`}
                  style={{ fill: '#00a9f4', fontSize: '10px', fontWeight: 'bold' }}
                />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
