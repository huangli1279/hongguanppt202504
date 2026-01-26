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
import { ExportGrowthByRegionDataPoint } from '../types';

interface Props {
  data: ExportGrowthByRegionDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-mckinsey-blue mb-1">{label}</p>
        <p className={payload[0].value > 0 ? 'text-mckinsey-blue font-bold' : 'text-red-500 font-bold'}>
          同比增速: {payload[0].value > 0 ? '+' : ''}{payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

export const ExportGrowthByRegionChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年12月主要贸易伙伴出口增速对比
        </h3>
        <p className="text-xs text-mckinsey-subtext mt-1">
          对美出口深跌30%，新兴市场及欧盟实现双位数增长有效对冲
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
            
            <XAxis 
              type="number" 
              hide={false}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 10 }}
              domain={[-35, 25]}
            />
            <YAxis 
              dataKey="region" 
              type="category" 
              width={60}
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
                  let color = '#005c8f'; // Default blue for growth
                  if (entry.category === 'US') color = '#ef4444'; // Red for negative
                  if (entry.region === '非美整体') color = '#00a9f4'; // Light blue highlight
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