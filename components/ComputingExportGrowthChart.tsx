import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine
} from 'recharts';
import { ComputingExportGrowthDataPoint } from '../types';

interface Props {
  data: ComputingExportGrowthDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-2 border-b pb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="flex justify-between gap-4 mb-1" style={{ color: entry.color }}>
            <span className="font-medium">{entry.name}:</span>
            <span className="font-bold">{entry.value > 0 ? '+' : ''}{entry.value}%</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const ComputingExportGrowthChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2024-2025年算力相关硬件出口同比增速
        </h3>
        <p className="text-[10px] text-webank-subtext mt-1">
          单位: % | 自动数据处理设备(含服务器)与半导体设备出口显著提速
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 9, fill: '#666' }}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
              interval={2}
            />
            <YAxis 
              tick={{ fontSize: 9, fill: '#999' }}
              axisLine={false}
              tickLine={false}
              domain={[0, 40]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              verticalAlign="top" 
              align="right" 
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: '10px', top: -10 }}
            />
            <ReferenceLine y={0} stroke="#666" />
            
            <Line 
              name="自动数据处理设备(含服务器)" 
              type="monotone" 
              dataKey="server" 
              stroke="#005c8f" 
              strokeWidth={2.5}
              dot={{ r: 2, fill: '#005c8f' }}
              activeDot={{ r: 4, strokeWidth: 0 }}
              animationDuration={1500}
            />
            <Line 
              name="半导体制造设备及零部件" 
              type="monotone" 
              dataKey="semiconductor" 
              stroke="#00a9f4" 
              strokeWidth={2.5}
              dot={{ r: 2, fill: '#00a9f4' }}
              activeDot={{ r: 4, strokeWidth: 0 }}
              animationDuration={1500}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
