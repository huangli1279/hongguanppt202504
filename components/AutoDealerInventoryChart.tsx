
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
  LabelList,
  ReferenceLine
} from 'recharts';
import { AutoDealerInventoryDataPoint } from '../types';

interface Props {
  data: AutoDealerInventoryDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value}{entry.name === '同比' ? '%' : ''}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const AutoDealerInventoryChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col bg-white p-4 rounded-sm shadow-sm border border-slate-200">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide flex items-center gap-2">
          <div className="w-1 h-3 bg-webank-blue rounded-full"></div>
          2024-2025年月度汽车经销商库存系数
        </h3>
        <p className="text-[10px] text-webank-subtext mt-1">
          数据来源：中国汽车流通协会产业协调发展工作委员会
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis 
              dataKey="month" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 10 }}
            />
            <YAxis 
              yAxisId="left"
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 10 }}
              domain={[0, 2.5]}
              ticks={[0, 0.5, 1.0, 1.5, 2.0, 2.5]}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 10 }}
              domain={[-20, 60]}
              tickFormatter={(val) => `${val}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="top" 
              align="center" 
              wrapperStyle={{ fontSize: '10px', paddingBottom: '10px' }}
              iconType="rect"
            />
            
            <ReferenceLine 
              yAxisId="left"
              y={1.5} 
              stroke="#ef4444" 
              strokeDasharray="3 3" 
              label={{ position: 'right', value: '警戒线', fill: '#ef4444', fontSize: 10, fontWeight: 'bold' }} 
            />

            <Bar 
              yAxisId="left"
              dataKey="year2024" 
              name="2024年" 
              fill="#cbd5e1" 
              barSize={20}
            >
               <LabelList dataKey="year2024" position="top" style={{ fill: '#64748b', fontSize: 9 }} />
            </Bar>

            <Bar 
              yAxisId="left"
              dataKey="year2025" 
              name="2025年" 
              fill="#005c8f" 
              barSize={20}
            >
               <LabelList dataKey="year2025" position="top" style={{ fill: '#005c8f', fontSize: 9, fontWeight: 'bold' }} />
            </Bar>

            <Line 
              yAxisId="right"
              type="monotone"
              dataKey="yoy" 
              name="同比" 
              stroke="#ef4444" 
              strokeWidth={2}
              dot={{ r: 3, fill: '#ef4444', strokeWidth: 1, stroke: '#fff' }}
            >
               <LabelList 
                dataKey="yoy" 
                position="top" 
                formatter={(val: number) => `${val}%`}
                style={{ fill: '#ef4444', fontSize: 9, fontWeight: 'bold' }} 
               />
            </Line>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
