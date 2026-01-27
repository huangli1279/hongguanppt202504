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
  LabelList
} from 'recharts';
import { ThreeCarriagesContributionDataPoint } from '../types';

interface Props {
  data: ThreeCarriagesContributionDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-2">{label}</p>
        {payload.map((item: any, index: number) => (
          <p key={index} className="flex justify-between gap-4 mb-1">
            <span style={{ color: item.color }}>{item.name}:</span>
            <span className="font-bold text-slate-700">{item.value}%</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const DemandContributionChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-2">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2024-2025年三驾马车对GDP增长的贡献率
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          单位：%
        </p>
      </div>
      <div className="flex-grow min-h-0 relative">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
            barGap={4}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey="period" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#666' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#666' }}
              domain={[0, 80]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }}
            />
            <Bar 
              name="最终消费支出" 
              dataKey="consumption" 
              fill="#005c8f" 
              radius={[2, 2, 0, 0]} 
              animationDuration={1500} 
            >
              <LabelList dataKey="consumption" position="top" offset={10} style={{ fill: '#005c8f', fontSize: '10px', fontWeight: 'bold' }} />
            </Bar>
            <Bar 
              name="资本形成总额" 
              dataKey="investment" 
              fill="#94a3b8" 
              radius={[2, 2, 0, 0]} 
              animationDuration={1500} 
            >
              <LabelList dataKey="investment" position="top" offset={10} style={{ fill: '#94a3b8', fontSize: '10px', fontWeight: 'bold' }} />
            </Bar>
            <Bar 
              name="货物和服务净出口" 
              dataKey="netExport" 
              fill="#00a9f4" 
              radius={[2, 2, 0, 0]} 
              animationDuration={1500} 
            >
              <LabelList dataKey="netExport" position="top" offset={10} style={{ fill: '#00a9f4', fontSize: '10px', fontWeight: 'bold' }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};