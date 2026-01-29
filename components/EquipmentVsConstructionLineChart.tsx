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
import { EquipmentVsConstructionTrendDataPoint } from '../types';

interface Props {
  data: EquipmentVsConstructionTrendDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue font-bold">
          设备工器具购置: {payload[0].value > 0 ? '+' : ''}{payload[0].value}%
        </p>
        <p className="text-red-500 font-bold">
          建筑安装工程: {payload[1].value > 0 ? '+' : ''}{payload[1].value}%
        </p>
      </div>
    );
  }
  return null;
};

export const EquipmentVsConstructionLineChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-2 flex-shrink-0">
        <h3 className="text-xs font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          设备投资与建筑工程投资增速对比
        </h3>
        <p className="text-[10px] text-webank-subtext mt-0.5">
          设备更新驱动投资增长，建筑工程投资持续下行
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: 10, bottom: 5 }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={0} stroke="#666" strokeWidth={1} />
            
            <XAxis 
              dataKey="month" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 10 }}
              interval={1}
              angle={-30}
              textAnchor="end"
              height={50}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#999', fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
              domain={[-10, 20]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="line" 
                iconSize={16} 
            />
            
            <Line
              name="设备工器具购置累计增长"
              type="monotone"
              dataKey="equipment"
              stroke="#005c8f"
              strokeWidth={3}
              dot={{ r: 4, fill: '#005c8f' }}
              label={{ 
                position: 'top', 
                fontSize: 9, 
                fill: '#005c8f', 
                offset: 10,
                formatter: (val: number) => `${val}%`
              }}
              animationDuration={2000}
            />
            <Line
              name="建筑安装工程累计增长"
              type="monotone"
              dataKey="construction"
              stroke="#ef4444"
              strokeWidth={3}
              dot={{ r: 4, fill: '#ef4444' }}
              label={{ 
                position: 'bottom', 
                fontSize: 9, 
                fill: '#ef4444', 
                offset: 10,
                formatter: (val: number) => `${val}%`
              }}
              animationDuration={2000}
              animationBegin={300}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
