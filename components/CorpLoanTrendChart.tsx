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
import { CorpLoanTrendDataPoint } from '../types';

interface Props {
  data: CorpLoanTrendDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-mckinsey-blue mb-1">{label}</p>
        <p className={value > 0 ? 'text-mckinsey-blue font-bold' : 'text-red-500 font-bold'}>
          同比多增: {value > 0 ? '+' : ''}{value}亿元
        </p>
      </div>
    );
  }
  return null;
};

export const CorpLoanTrendChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          企业中长期贷款当月同比多增额走势 (亿元)
        </h3>
        <p className="text-xs text-mckinsey-subtext mt-1">
          结束连续5个月的少增态势，12月实现显著转正 (+2900亿)
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
            barCategoryGap="30%"
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
            <Tooltip content={<CustomTooltip />} />

            <Bar dataKey="value" radius={[4, 4, 4, 4]} animationDuration={1500}>
               {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.isPositive ? '#005c8f' : '#ef4444'} 
                  fillOpacity={0.8}
                />
              ))}
              <LabelList 
                dataKey="value" 
                position="top" 
                formatter={(val: number) => `${val > 0 ? '+' : ''}${val}`}
                style={{ fill: '#333', fontSize: '12px', fontWeight: 'bold' }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};