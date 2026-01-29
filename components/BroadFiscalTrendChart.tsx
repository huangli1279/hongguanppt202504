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
import { BroadFiscalTrendDataPoint } from '../types';

interface Props {
  data: BroadFiscalTrendDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const taxPayload = payload.find((p: any) => p.name === '税收收入');
    const nonTaxPayload = payload.find((p: any) => p.name === '非税收入');
    const totalPayload = payload.find((p: any) => p.name === '合计');
    
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue font-bold">合计: {totalPayload ? totalPayload.value : '-'}%</p>
        <p className="text-webank-lightBlue">税收收入: {taxPayload ? taxPayload.value : '-'}%</p>
        <p className="text-red-500">非税收入: {nonTaxPayload ? nonTaxPayload.value : '-'}%</p>
      </div>
    );
  }
  return null;
};

export const BroadFiscalTrendChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2024-2025年一般公共预算收入累计同比变化
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          税收收入持续负增长，非税收入维持高位支撑
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
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <Line
              name="合计"
              type="monotone"
              dataKey="total"
              stroke="#051c2c"
              strokeWidth={3}
              dot={{ r: 3, fill: '#051c2c' }}
              animationDuration={2000}
            />
            <Line
              name="税收收入"
              type="monotone"
              dataKey="taxRevenue"
              stroke="#00a9f4"
              strokeWidth={3}
              dot={false}
              animationDuration={2000}
              animationBegin={300}
            />
            <Line
              name="非税收入"
              type="monotone"
              dataKey="nonTaxRevenue"
              stroke="#ef4444"
              strokeWidth={3}
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