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
import { IndustryGrowthData } from '../types';

interface Props {
  data: IndustryGrowthData[];
}

export const IndustryGrowthChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-2">
        <h3 className="text-xs font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025 Q4 三大产业增加值增速
        </h3>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
          >
            <CartesianGrid horizontal={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis type="number" hide domain={[0, 6]} />
            <YAxis 
              dataKey="name" 
              type="category" 
              width={60} 
              tick={{ fontSize: 10, fill: '#333', fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
              cursor={{ fill: 'transparent' }}
              contentStyle={{ fontSize: '12px', border: '1px solid #e2e8f0' }}
            />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={24} animationDuration={1500}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
              <LabelList 
                dataKey="value" 
                position="right" 
                formatter={(val: number) => `${val}%`}
                style={{ fill: '#333', fontSize: '11px', fontWeight: 'bold' }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};