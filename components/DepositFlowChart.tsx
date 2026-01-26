

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
  LabelList
} from 'recharts';
import { DepositFlowDataPoint } from '../types';

interface Props {
  data: DepositFlowDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p style={{ color: '#005c8f' }}>住户存款: {payload[0].value}亿元</p>
        <p style={{ color: '#94a3b8' }}>非银存款: {payload[1].value}亿元</p>
      </div>
    );
  }
  return null;
};

export const DepositFlowChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年Q4居民存款与非银存款月度增量变化 (亿元)
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          12月资金显著回流银行表内，“存款搬家”现象阶段性逆转
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
            <ReferenceLine y={0} stroke="#666" strokeWidth={1} />
            
            <XAxis 
              dataKey="month" 
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
            />
            <Tooltip 
               cursor={{ fill: 'transparent' }}
               content={<CustomTooltip />}
            />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />

            <Bar dataKey="household" name="住户存款" fill="#005c8f" radius={[2, 2, 0, 0]} animationDuration={1500}>
                 <LabelList 
                  dataKey="household" 
                  position="top" 
                  formatter={(val: number) => val}
                  style={{ fill: '#005c8f', fontSize: '10px', fontWeight: 'bold' }}
                />
            </Bar>
            <Bar dataKey="nonBank" name="非银存款" fill="#94a3b8" radius={[2, 2, 0, 0]} animationDuration={1500}>
                 <LabelList 
                  dataKey="nonBank" 
                  position="top" 
                  formatter={(val: number) => val}
                  style={{ fill: '#94a3b8', fontSize: '10px', fontWeight: 'bold' }}
                />
            </Bar>
            
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};