
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
  Area,
  ComposedChart
} from 'recharts';
import { TsfTrendDataPoint } from '../types';

interface Props {
  data: TsfTrendDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue font-bold">存量增速: {payload[0].value}%</p>
        <p className="text-webank-lightBlue">新增社融: {payload[1].value}万亿</p>
      </div>
    );
  }
  return null;
};

export const TsfTrendChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年社融存量增速与新增规模走势
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          年末增速回升至9.5%，政府债发行提速支撑总量企稳
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 30, left: -20, bottom: 0 }}
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
              yAxisId="left"
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#051c2c', fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
              domain={[7, 10]}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#00a9f4', fontSize: 10 }}
              domain={[-2, 8]}
              label={{ value: '万亿', angle: 0, position: 'top', fontSize: 10, fill: '#00a9f4', offset: 10 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <Line
              yAxisId="left"
              name="社融存量增速"
              type="monotone"
              dataKey="growth"
              stroke="#051c2c"
              strokeWidth={3}
              dot={{ r: 4, fill: '#051c2c' }}
              animationDuration={2000}
            />
             <Area
              yAxisId="right"
              name="新增社融规模"
              type="monotone"
              dataKey="newTsf"
              fill="#00a9f4"
              fillOpacity={0.2}
              stroke="#00a9f4"
              strokeWidth={1}
              animationDuration={2000}
              animationBegin={300}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
