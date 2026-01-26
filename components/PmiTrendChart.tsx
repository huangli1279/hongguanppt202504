
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
import { PmiTrendDataPoint } from '../types';

interface Props {
  data: PmiTrendDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        {payload.map((p: any, index: number) => (
          <p key={index} style={{ color: p.color }}>
            {p.name}: {p.value}%
          </p>
        ))}
        <div className="mt-1 border-t border-slate-100 pt-1 text-[10px] text-slate-500">
          50% = 荣枯线
        </div>
      </div>
    );
  }
  return null;
};

export const PmiTrendChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年1-12月制造业PMI及核心指数走势
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          12月PMI重回扩张区间(50.1%)，生产指数与新订单指数同步大幅改善
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: -20,
              bottom: 0,
            }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            
            {/* The 50% Expansion/Contraction Line */}
            <ReferenceLine y={50} stroke="#333" strokeDasharray="3 3" strokeWidth={1} label={{ value: '荣枯线 50%', position: 'insideRight', fill: '#666', fontSize: 10 }} />
            
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
              domain={[48, 53]}
              ticks={[48, 49, 50, 51, 52, 53]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '10px' }}
              iconType="circle"
              iconSize={8}
            />
            
            <Line
              name="制造业PMI"
              type="monotone"
              dataKey="pmi"
              stroke="#051c2c"
              strokeWidth={3}
              dot={{ r: 3, fill: '#051c2c' }}
              activeDot={{ r: 5 }}
              animationDuration={2000}
            />
            <Line
              name="生产指数"
              type="monotone"
              dataKey="production"
              stroke="#00a9f4"
              strokeWidth={2}
              dot={false}
              animationDuration={2000}
              animationBegin={300}
            />
             <Line
              name="新订单指数"
              type="monotone"
              dataKey="newOrders"
              stroke="#94a3b8"
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
