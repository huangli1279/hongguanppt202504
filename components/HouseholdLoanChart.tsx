

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
import { HouseholdLoanStructureDataPoint } from '../types';

interface Props {
  data: HouseholdLoanStructureDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-mckinsey-blue mb-1">{label}</p>
        <p style={{ color: '#ef4444' }}>短期贷款: {payload[0].value}亿元</p>
        <p style={{ color: '#005c8f' }}>中长期贷款: {payload[1].value}亿元</p>
        <div className="mt-1 pt-1 border-t border-slate-100 font-bold text-slate-700">
           总计: {payload[0].payload.total}亿元
        </div>
      </div>
    );
  }
  return null;
};

export const HouseholdLoanChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          12月居民户新增贷款结构历史同期对比 (亿元)
        </h3>
        <p className="text-xs text-mckinsey-subtext mt-1">
          2025年12月出现罕见净偿还，短期贷款大幅收缩
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
            stackOffset="sign"
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={0} stroke="#666" strokeWidth={1} />
            
            <XAxis 
              dataKey="year" 
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

            <Bar dataKey="shortTerm" name="短期贷款" stackId="a" fill="#ef4444" radius={[2, 2, 2, 2]} animationDuration={1500} />
            <Bar dataKey="mediumLongTerm" name="中长期贷款" stackId="a" fill="#005c8f" radius={[2, 2, 2, 2]} animationDuration={1500} />
            
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};