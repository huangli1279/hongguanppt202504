

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
  Cell,
  ReferenceLine
} from 'recharts';
import { InfrastructureSectorDataPoint } from '../types';

interface Props {
  data: InfrastructureSectorDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-mckinsey-blue mb-1">{label}</p>
        <p className={`${payload[0].value >= 0 ? 'text-mckinsey-blue' : 'text-red-500'} font-bold`}>
          累计增速: {payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

export const InfrastructureSectorChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年基建各细分行业全年累计投资增速
        </h3>
        <p className="text-xs text-mckinsey-subtext mt-1">
          能源与新基建逆势高增，传统市政类基建成为主要拖累项
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 50, left: 60, bottom: 5 }}
            barCategoryGap="20%"
          >
            <CartesianGrid horizontal={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine x={0} stroke="#666" />
            <ReferenceLine x={-1.48} stroke="#ef4444" strokeDasharray="3 3" label={{ value: '全口径 -1.48%', position: 'bottom', fill: '#ef4444', fontSize: 10 }} />
            
            <XAxis 
              type="number" 
              hide={false}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 10 }}
              domain={[-10, 15]}
            />
            <YAxis 
              dataKey="sector" 
              type="category" 
              width={110}
              tick={{ fontSize: 11, fill: '#333', fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
               cursor={{ fill: 'transparent' }}
               content={<CustomTooltip />}
            />

            <Bar dataKey="value" radius={[0, 4, 4, 0]} animationDuration={1500}>
               {data.map((entry, index) => {
                  let color = '#94a3b8';
                  if (entry.category === 'energy') color = '#005c8f';
                  if (entry.value < 0) color = '#ef4444';
                  if (entry.category === 'average') color = '#333';
                  return <Cell key={`cell-${index}`} fill={color} />;
               })}
              <LabelList 
                dataKey="value" 
                position="right"
                formatter={(val: number) => `${val > 0 ? '+' : ''}${val}%`}
                style={{ fill: '#333', fontSize: '12px', fontWeight: 'bold' }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
