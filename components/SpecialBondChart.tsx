import React from 'react';
import {
  ComposedChart,
  Line,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  LabelList
} from 'recharts';
import { SpecialBondDataPoint } from '../types';

interface Props {
  data: SpecialBondDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue">当月发行: {payload[0].value}亿元</p>
        <p className="text-webank-lightBlue font-bold">发行进度: {payload[1].value}%</p>
      </div>
    );
  }
  return null;
};

export const SpecialBondChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年新增专项债发行规模及进度
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          Q4发行显著提速，截至11月进度已超100%，有效支撑财政支出
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            data={data}
            margin={{ top: 20, right: 40, left: 0, bottom: 0 }}
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
              tick={{ fill: '#999', fontSize: 10 }}
              label={{ value: '亿元', angle: 0, position: 'top', fontSize: 10, fill: '#999', offset: 10 }}
            />
            <YAxis 
              yAxisId="right"
              orientation="right"
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#00a9f4', fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
              domain={[0, 110]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <Bar
              yAxisId="left"
              name="当月发行规模"
              dataKey="issuance"
              fill="#051c2c"
              barSize={20}
              radius={[2, 2, 0, 0]}
              animationDuration={1500}
            />
            
            <Line
              yAxisId="right"
              name="累计发行进度"
              type="monotone"
              dataKey="progress"
              stroke="#00a9f4"
              strokeWidth={3}
              dot={{ r: 4, fill: '#00a9f4' }}
              animationDuration={2000}
              animationBegin={300}
            >
               <LabelList 
                  dataKey="progress" 
                  position="top" 
                  formatter={(val: number) => val > 90 ? `${val}%` : ''}
                  style={{ fill: '#00a9f4', fontSize: '10px', fontWeight: 'bold' }}
                />
            </Line>
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
