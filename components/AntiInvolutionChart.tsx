
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
  Cell
} from 'recharts';
import { IndustryPriceDataPoint } from '../types';

interface Props {
  data: IndustryPriceDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-mckinsey-blue mb-1">{label}</p>
        <p className="text-slate-500">10月: {payload[0].value}%</p>
        <p className="text-slate-600">11月: {payload[1].value}%</p>
        <p className="text-mckinsey-blue font-bold">12月: {payload[2].value}%</p>
      </div>
    );
  }
  return null;
};

export const AntiInvolutionChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          重点行业价格环比变化追踪 (2025 Q4)
        </h3>
        <p className="text-xs text-mckinsey-subtext mt-1">
          锂电、水泥等“反内卷”重点领域价格连续回升，新能源车价格止跌转涨
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            barGap={2}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={0} stroke="#666" />
            
            <XAxis 
              dataKey="industry" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#333', fontSize: 11, fontWeight: 600 }}
              dy={10}
            />
            <YAxis 
              hide={false}
              tickFormatter={(val) => `${val}%`}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#999' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                verticalAlign="top" 
                align="right" 
                iconType="circle" 
                iconSize={8}
                wrapperStyle={{ paddingBottom: '10px', fontSize: '11px' }}
            />

            <Bar dataKey="oct" name="10月" fill="#cbd5e1" radius={[2, 2, 0, 0]} animationDuration={1000} />
            <Bar dataKey="nov" name="11月" fill="#94a3b8" radius={[2, 2, 0, 0]} animationDuration={1000} animationBegin={300} />
            <Bar dataKey="dec" name="12月" fill="#051c2c" radius={[2, 2, 0, 0]} animationDuration={1000} animationBegin={600} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
