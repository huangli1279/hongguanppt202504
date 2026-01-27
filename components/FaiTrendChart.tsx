import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  LabelList
} from 'recharts';
import { FaiTrendDataPoint } from '../types';

interface Props {
  data: FaiTrendDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const val = payload[0].value;
    if (val === null) return null;
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue font-bold">
          累计增速: {val}%
        </p>
      </div>
    );
  }
  return null;
};

export const FaiTrendChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          全国固定资产投资累计同比增速走势
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          单位: %
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 25,
              right: 20,
              left: -10,
              bottom: 10,
            }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={0} stroke="#333" strokeWidth={1} />
            <XAxis 
              dataKey="month" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 9 }}
              interval={1}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#999', fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
              domain={['auto', 'auto']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#005c8f"
              strokeWidth={3}
              dot={{ r: 4, fill: '#005c8f', strokeWidth: 0 }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              connectNulls={false}
              animationDuration={2000}
            >
              <LabelList 
                dataKey="value" 
                position="top" 
                offset={10} 
                formatter={(val: number | null) => val !== null ? `${val}%` : ''}
                style={{ fill: '#005c8f', fontSize: '10px', fontWeight: 600 }}
              />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
