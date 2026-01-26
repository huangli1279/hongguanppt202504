import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { ConfidenceDataPoint } from '../types';

interface Props {
  data: ConfidenceDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-mckinsey-blue mb-1">{label}</p>
        <p className="text-mckinsey-blue">就业信心: {payload[0].value}</p>
        <p className="text-mckinsey-lightBlue">收入信心: {payload[1].value}</p>
        <div className="mt-1 border-t border-slate-100 pt-1 text-[10px] text-slate-500">
          剪刀差: {(payload[0].value - payload[1].value).toFixed(1)}
        </div>
      </div>
    );
  }
  return null;
};

export const ConfidenceChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          消费者信心指数分项走势 (2025年)
        </h3>
        <p className="text-xs text-mckinsey-subtext mt-1">
          就业预期相对平稳，但收入预期持续下滑，两者缺口走阔
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            
            <XAxis 
              dataKey="month" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 10 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#999', fontSize: 10 }}
              domain={[75, 90]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <Line
              name="就业预期指数"
              type="monotone"
              dataKey="employment"
              stroke="#051c2c"
              strokeWidth={3}
              dot={{ r: 2 }}
              animationDuration={2000}
            />
             <Line
              name="收入预期指数"
              type="monotone"
              dataKey="income"
              stroke="#00a9f4"
              strokeWidth={3}
              dot={{ r: 2 }}
              strokeDasharray="5 5"
              animationDuration={2000}
              animationBegin={300}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};