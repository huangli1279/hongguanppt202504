import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
  ReferenceLine
} from 'recharts';
import { GrowthIndicatorData } from '../types';

interface Props {
  data: GrowthIndicatorData[];
}

export const ThreeCarriagesChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-2">
        <h3 className="text-sm font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年“三驾马车”核心指标累计增速对比
        </h3>
        <p className="text-xs text-mckinsey-subtext mt-1">
          外需（出口）表现显著优于内需，房地产投资仍是最大拖累项
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 40, left: 40, bottom: 5 }}
            barCategoryGap="20%"
          >
            <CartesianGrid horizontal={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis type="number" hide domain={[-20, 10]} />
            <YAxis 
              dataKey="name" 
              type="category" 
              width={90}
              tick={{ fontSize: 11, fill: '#333', fontWeight: 500 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
               cursor={{ fill: 'transparent' }}
               contentStyle={{ fontSize: '12px', border: '1px solid #e2e8f0' }}
            />
            <ReferenceLine x={0} stroke="#666" />
            <Bar dataKey="value" radius={[0, 4, 4, 0]} animationDuration={1500}>
              {data.map((entry, index) => (
                <Cell 
                    key={`cell-${index}`} 
                    fill={entry.value < 0 ? '#ef4444' : (entry.value > 5 ? '#005c8f' : '#00a9f4')} 
                />
              ))}
              <LabelList 
                dataKey="value" 
                position={data.map(d => d.value >= 0 ? 'right' : 'left')}
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