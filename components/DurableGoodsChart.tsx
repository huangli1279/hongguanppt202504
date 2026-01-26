
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
  Cell,
  LabelList
} from 'recharts';
import { DurableGoodsDataPoint } from '../types';

interface Props {
  data: DurableGoodsDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-slate-500">11月: {payload[0].value}%</p>
        <p className="text-webank-blue font-bold">12月: {payload[1].value}%</p>
      </div>
    );
  }
  return null;
};

export const DurableGoodsChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          Q4重点商品零售额当月同比 (11月 vs 12月)
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          补贴边际效应递减，家电波动剧烈，汽车、地产相关品类承压
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            barGap={4}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={0} stroke="#666" />
            
            <XAxis 
              dataKey="category" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#333', fontSize: 11, fontWeight: 600 }}
              dy={10}
            />
            <YAxis 
              hide={false}
              tickFormatter={(val) => `${val}%`}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#999' }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                verticalAlign="top" 
                align="right" 
                iconType="circle" 
                iconSize={8}
                wrapperStyle={{ paddingBottom: '10px', fontSize: '11px' }}
            />

            <Bar dataKey="nov" name="11月" fill="#cbd5e1" radius={[2, 2, 2, 2]} animationDuration={1000}>
                 <LabelList 
                  dataKey="nov" 
                  position={data.map(d => d.nov >= 0 ? 'top' : 'bottom')} 
                  formatter={(val: number) => `${val}%`}
                  style={{ fill: '#666', fontSize: '10px' }}
                />
            </Bar>
            <Bar dataKey="dec" name="12月" fill="#051c2c" radius={[2, 2, 2, 2]} animationDuration={1000} animationBegin={300}>
                 <LabelList 
                  dataKey="dec" 
                  position={data.map(d => d.dec >= 0 ? 'top' : 'bottom')} 
                  formatter={(val: number) => `${val}%`}
                  style={{ fill: '#051c2c', fontSize: '10px', fontWeight: 'bold' }}
                />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
