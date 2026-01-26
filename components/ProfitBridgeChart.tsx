
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
import { ProfitBridgeDataPoint } from '../types';

interface Props {
  data: ProfitBridgeDataPoint[];
}

export const ProfitBridgeChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          11月规上工业利润增速拆解 (同比贡献度)
        </h3>
        <p className="text-xs text-mckinsey-subtext mt-1">
          投资收益（其他损益）大幅回落致使降幅扩大，实际经营层面呈“弱修复”
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barCategoryGap="20%"
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={0} stroke="#666" />
            
            <XAxis 
              dataKey="name" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#333', fontSize: 11, fontWeight: 600 }}
              dy={10}
            />
            <YAxis 
              tickFormatter={(val) => `${val}%`}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#999' }}
              domain={[-15, 5]}
            />
            <Tooltip 
               cursor={{ fill: 'transparent' }}
               contentStyle={{ fontSize: '12px', border: '1px solid #e2e8f0' }}
            />

            <Bar dataKey="value" radius={[2, 2, 2, 2]} animationDuration={1500}>
               {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.fill} 
                  fillOpacity={entry.isTotal ? 1 : 0.8}
                />
              ))}
              <LabelList 
                dataKey="value" 
                position={data.map(d => d.value >= 0 ? 'top' : 'bottom')}
                formatter={(val: number) => `${val}%`}
                style={{ fill: '#333', fontSize: '12px', fontWeight: 'bold' }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
