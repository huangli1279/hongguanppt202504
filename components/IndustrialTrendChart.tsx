
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
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value}%
          </p>
        ))}
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
          2024-2025年工业增加值与出口交货值当月同比增速
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          规模以上工业增加值:当月同比 / 出口交货值:当月同比 (%)
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
              tick={{ fill: '#666', fontSize: 10 }}
              dy={10}
            />
            <YAxis 
              yAxisId="left"
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#00a9f4', fontSize: 10, fontWeight: 600 }}
              domain={['auto', 'auto']}
              tickFormatter={(val) => `${val}%`}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#ef4444', fontSize: 10, fontWeight: 600 }}
              domain={['auto', 'auto']}
              tickFormatter={(val) => `${val}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="top" align="right" wrapperStyle={{ fontSize: '11px', paddingBottom: '20px' }} />
            
            <Line 
              yAxisId="left"
              type="monotone"
              dataKey="yoy" 
              name="工业增加值:当月同比" 
              stroke="#00a9f4" 
              strokeWidth={3}
              dot={{ r: 4, fill: '#00a9f4', strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              animationDuration={1500}
            >
              <LabelList dataKey="yoy" position="top" style={{ fill: '#00a9f4', fontSize: 10, fontWeight: 'bold' }} />
            </Line>

            <Line 
              yAxisId="right"
              type="monotone"
              dataKey="exportYoy" 
              name="出口交货值:当月同比" 
              stroke="#ef4444" 
              strokeWidth={3}
              dot={{ r: 4, fill: '#ef4444', strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 6, strokeWidth: 0 }}
              animationDuration={1500}
            >
              <LabelList dataKey="exportYoy" position="bottom" style={{ fill: '#ef4444', fontSize: 10, fontWeight: 'bold' }} />
            </Line>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
