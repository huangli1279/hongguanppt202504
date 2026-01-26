
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine
} from 'recharts';
import { UrbanRuralDataPoint } from '../types';

interface Props {
  data: UrbanRuralDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-mckinsey-blue mb-1">{label}</p>
        {payload.map((p: any, index: number) => (
          <p key={index} style={{ color: p.color }}>
            {p.name}: {p.value}%
          </p>
        ))}
        <div className="mt-1 border-t border-slate-100 pt-1 text-[10px] text-slate-500">
          差距: {(payload[1].value - payload[0].value).toFixed(1)}%
        </div>
      </div>
    );
  }
  return null;
};

export const UrbanRuralChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年城乡消费品零售额累计同比增速
        </h3>
        <p className="text-xs text-mckinsey-subtext mt-1">
          乡村市场韧性持续强于城镇，12月累计增速差距扩大
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
              tickFormatter={(val) => `${val}%`}
              domain={[0, 6]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
             <Line
              name="乡村零售额"
              type="monotone"
              dataKey="rural"
              stroke="#00a9f4"
              strokeWidth={3}
              dot={false}
              animationDuration={2000}
            />
            <Line
              name="城镇零售额"
              type="monotone"
              dataKey="urban"
              stroke="#051c2c"
              strokeWidth={3}
              dot={false}
              animationDuration={2000}
              animationBegin={300}
            />
           
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
