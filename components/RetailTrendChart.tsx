
import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell
} from 'recharts';
import { RetailTrendDataPoint } from '../types';

interface Props {
  data: RetailTrendDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue">同比增速: <span className="font-bold">{payload[0].value}%</span></p>
      </div>
    );
  }
  return null;
};

export const RetailTrendChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年社零总额当月同比增速走势
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          四季度增速显著滑落：2.9% <span className="text-slate-400">→</span> 1.3% <span className="text-slate-400">→</span> <span className="text-red-600 font-bold">0.9%</span>
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
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
              domain={[0, 6]}
            />
            <Tooltip content={<CustomTooltip />} />
            
            <Bar
              dataKey="value"
              barSize={30}
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.highlight ? '#ef4444' : '#051c2c'} 
                  fillOpacity={entry.highlight ? 0.9 : 0.8}
                />
              ))}
               <LabelList 
                  dataKey="value" 
                  position="top" 
                  formatter={(val: number) => `${val}%`}
                  style={{ fill: '#333', fontSize: '10px', fontWeight: 'bold' }}
                />
            </Bar>
            
            <Line
              type="monotone"
              dataKey="value"
              stroke="#00a9f4"
              strokeWidth={3}
              dot={{ r: 0 }}
              activeDot={{ r: 5 }}
              animationDuration={2000}
              animationBegin={500}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
