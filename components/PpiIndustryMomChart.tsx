
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
import { PpiIndustryMomDataPoint } from '../types';

interface Props {
  data: PpiIndustryMomDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-slate-200 shadow-lg text-xs font-sans max-w-xs">
        <p className="font-bold text-webank-blue mb-2">{label}</p>
        <div className="grid grid-cols-2 gap-x-3 gap-y-1">
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="font-medium">
              {entry.name}: {entry.value}%
            </p>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export const PpiIndustryMomChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-3">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          工业生产者出厂价格指数(PPI)分行业环比数据
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          重点行业价格走势分化明显，锂电池、光伏、有色金属等行业波动较大
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 10,
              left: -25,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={0} stroke="#333" strokeWidth={1} />
            
            <XAxis 
              dataKey="month" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 9 }}
              dy={8}
              tickFormatter={(value) => value.substring(5)}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#999', fontSize: 9 }}
              tickFormatter={(val) => `${val}%`}
              domain={[-3, 6]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '5px', fontSize: '9px' }}
              iconType="line"
              iconSize={10}
            />
            
            {/* Key "anti-involution" industries */}
            <Line
              name="锂离子电池"
              type="monotone"
              dataKey="lithium"
              stroke="#ef4444"
              strokeWidth={2.5}
              dot={{ r: 3 }}
              animationDuration={1500}
            />
            <Line
              name="光伏设备"
              type="monotone"
              dataKey="solar"
              stroke="#f59e0b"
              strokeWidth={2.5}
              dot={{ r: 3 }}
              animationDuration={1500}
            />
            <Line
              name="电气机械"
              type="monotone"
              dataKey="electrical"
              stroke="#10b981"
              strokeWidth={2}
              dot={{ r: 2.5 }}
              animationDuration={1500}
            />
            
            {/* Traditional heavy industries */}
            <Line
              name="煤炭开采"
              type="monotone"
              dataKey="coal"
              stroke="#64748b"
              strokeWidth={1.5}
              dot={{ r: 2 }}
              animationDuration={1500}
              strokeDasharray="3 3"
            />
            <Line
              name="有色金属矿"
              type="monotone"
              dataKey="nonFerrous"
              stroke="#6366f1"
              strokeWidth={1.5}
              dot={{ r: 2 }}
              animationDuration={1500}
              strokeDasharray="3 3"
            />
            <Line
              name="黑色金属矿"
              type="monotone"
              dataKey="ferrous"
              stroke="#8b5cf6"
              strokeWidth={1.5}
              dot={{ r: 2 }}
              animationDuration={1500}
              strokeDasharray="3 3"
            />
            
            {/* Other key sectors */}
            <Line
              name="计算机通信"
              type="monotone"
              dataKey="electronics"
              stroke="#00a9f4"
              strokeWidth={2}
              dot={{ r: 2.5 }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
