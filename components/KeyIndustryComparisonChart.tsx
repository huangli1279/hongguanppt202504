
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
import { KeyIndustryDataPoint } from '../types';

interface Props {
  data: KeyIndustryDataPoint[];
}

export const KeyIndustryComparisonChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          12月重点行业增加值增速对比 (新旧动能分化)
        </h3>
        <p className="text-xs text-mckinsey-subtext mt-1">
          集成电路与机器人产业领跑，传统建材行业深度调整
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 50, left: 40, bottom: 5 }}
            barCategoryGap="15%"
          >
            <CartesianGrid horizontal={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis type="number" hide domain={[-10, 35]} />
            <YAxis 
              dataKey="name" 
              type="category" 
              width={90}
              tick={{ fontSize: 11, fill: '#333', fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
               cursor={{ fill: 'transparent' }}
               contentStyle={{ fontSize: '12px', border: '1px solid #e2e8f0' }}
            />
            <ReferenceLine x={0} stroke="#999" />
            
            {/* Dashed line for Average */}
            <ReferenceLine x={5.2} stroke="#666" strokeDasharray="3 3" label={{ value: '平均 5.2%', position: 'insideBottomRight', fill: '#666', fontSize: 10 }} />

            <Bar dataKey="value" radius={[0, 4, 4, 0]} animationDuration={1500}>
              {data.map((entry, index) => {
                 let color = '#94a3b8'; // Default grey for average/stable
                 if (entry.category === 'new') color = '#005c8f'; // Strong Blue for High Tech
                 if (entry.category === 'traditional' && entry.value < 0) color = '#ef4444'; // Red for negative
                 if (entry.name === '规上工业整体') color = '#333333'; // Black for benchmark
                 return <Cell key={`cell-${index}`} fill={color} />;
              })}
              <LabelList 
                dataKey="value" 
                position="right"
                formatter={(val: number) => `${val > 0 ? '+' : ''}${val}%`}
                style={{ fill: '#333', fontSize: '11px', fontWeight: 'bold' }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
