
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
import { TaxCategoryDataPoint } from '../types';

interface Props {
  data: TaxCategoryDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-mckinsey-blue mb-1">{label}</p>
        <p className={payload[0].value > 0 ? 'text-mckinsey-blue font-bold' : 'text-red-500 font-bold'}>
          累计增速: {payload[0].value > 0 ? '+' : ''}{payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

export const TaxCategoryChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          1-11月主要税收及非税收入累计同比增速
        </h3>
        <p className="text-xs text-mckinsey-subtext mt-1">
          印花税与个税显著跑赢，企业所得税与非税收入负增长
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 40, left: 40, bottom: 5 }}
            barCategoryGap="20%"
          >
            <CartesianGrid horizontal={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine x={0} stroke="#666" />
            <ReferenceLine x={1.8} stroke="#666" strokeDasharray="3 3" label={{ value: '税收总额 1.8%', position: 'bottom', fill: '#666', fontSize: 10 }} />
            
            <XAxis 
              type="number" 
              hide={false}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 10 }}
              domain={[-10, 80]}
            />
            <YAxis 
              dataKey="category" 
              type="category" 
              width={80}
              tick={{ fontSize: 11, fill: '#333', fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
               cursor={{ fill: 'transparent' }}
               content={<CustomTooltip />}
            />

            <Bar dataKey="value" radius={[2, 2, 2, 2]} animationDuration={1500}>
               {data.map((entry, index) => {
                  let color = '#94a3b8'; // Default grey
                  if (entry.category === '证券印花税' || entry.category === '个人所得税') color = '#00a9f4'; // Highlight positives
                  if (entry.value < 0) color = '#ef4444'; // Red for negative
                  if (entry.category === '税收总额') color = '#051c2c'; // Benchmark
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
