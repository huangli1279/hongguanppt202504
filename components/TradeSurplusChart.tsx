import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell
} from 'recharts';
import { TradeSurplusDataPoint } from '../types';

interface Props {
  data: TradeSurplusDataPoint[];
}

export const TradeSurplusChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2024-2025年贸易顺差规模对比 (万亿元)
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          顺差规模进一步扩大，净出口对经济增长贡献率维持高位
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
            barCategoryGap="40%"
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            
            <XAxis 
              dataKey="year" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#333', fontSize: 11, fontWeight: 600 }}
              dy={10}
            />
            <YAxis 
              hide={false}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#999' }}
              domain={[0, 8]}
            />
            <Tooltip 
               cursor={{ fill: 'transparent' }}
               contentStyle={{ fontSize: '12px', border: '1px solid #e2e8f0' }}
            />

            <Bar dataKey="value" radius={[4, 4, 0, 0]} animationDuration={1500}>
               {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={index === 1 ? '#005c8f' : '#94a3b8'} 
                />
              ))}
              <LabelList 
                dataKey="value" 
                position="top" 
                formatter={(val: number) => `${val}万亿`}
                style={{ fill: '#333', fontSize: '12px', fontWeight: 'bold' }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};