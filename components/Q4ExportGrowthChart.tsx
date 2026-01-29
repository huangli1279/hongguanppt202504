
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
  LabelList
} from 'recharts';
import { Q4ExportGrowthDataPoint } from '../types';

interface Props {
  data: Q4ExportGrowthDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload as Q4ExportGrowthDataPoint;
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        {payload.map((item: any, index: number) => (
          <p key={index} style={{ color: item.color }} className="font-bold">
            {item.name}: {item.value}%
          </p>
        ))}
        {dataPoint.annotation2024 && (
          <p className="text-red-600 text-[10px] mt-1 italic">2024: {dataPoint.annotation2024}</p>
        )}
        {dataPoint.annotation2025 && (
          <p className="text-red-600 text-[10px] mt-1 italic">2025: {dataPoint.annotation2025}</p>
        )}
      </div>
    );
  }
  return null;
};

export const Q4ExportGrowthChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2024-2025年Q4出口增速
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          同比对比：2025年Q4呈现"先抑后扬"V型反转
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={0} stroke="#333" strokeWidth={1} />
            
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
              domain={[-2, 14]}
            />
            <Tooltip content={<CustomTooltip />} />
            
            <Bar
              dataKey="2024"
              name="2024年"
              fill="#051c2c"
              radius={[2, 2, 0, 0]}
              animationDuration={1500}
            >
              <LabelList
                dataKey="2024"
                position="top"
                fill="#333"
                fontSize={10}
                fontWeight="bold"
                formatter={(value: number) => `${value}%`}
              />
            </Bar>
            <Bar
              dataKey="2025"
              name="2025年"
              fill="#00a9f4"
              radius={[2, 2, 0, 0]}
              animationDuration={1500}
            >
              <LabelList
                dataKey="2025"
                position="top"
                fill="#333"
                fontSize={10}
                fontWeight="bold"
                formatter={(value: number) => `${value}%`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-1 flex justify-between items-center text-[8px] text-slate-400 italic">
        <span>数据来源：海关总署 / 数据集：4_进出口及贸易差额</span>
        <div className="flex gap-2">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-[#051c2c]"></div>
            <span>2024年</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-[#00a9f4]"></div>
            <span>2025年</span>
          </div>
        </div>
      </div>
    </div>
  );
};
