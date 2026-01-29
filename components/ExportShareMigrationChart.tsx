import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  LabelList
} from 'recharts';
import { ExportShareMigrationDataPoint } from '../types';

interface Props {
  data: ExportShareMigrationDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-[10px] font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-slate-500">2024年份额: {payload[0].value}%</p>
        <p className="text-webank-blue font-bold">2025年份额: {payload[1].value}%</p>
        <p className="text-xs mt-1 border-t pt-1 font-bold" style={{ color: payload[1].value > payload[0].value ? '#10b981' : '#ef4444' }}>
          变动: {(payload[1].value - payload[0].value).toFixed(1)} pct
        </p>
      </div>
    );
  }
  return null;
};

export const ExportShareMigrationChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-1.5">
        <h3 className="text-[10px] font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-0.5">
          2024-2025年中国出口市场份额迁移对比
        </h3>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 15, right: 10, left: -20, bottom: 0 }}
            barGap={4}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis
              dataKey="name"
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 9 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 9 }}
              domain={[0, 50]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="top"
              align="right"
              iconType="rect"
              iconSize={8}
              wrapperStyle={{ fontSize: '8px', paddingBottom: '5px' }}
            />
            <Bar
              dataKey="share2024"
              name="2024年份额"
              fill="#cbd5e1"
              radius={[2, 2, 0, 0]}
              barSize={18}
            >
              <LabelList dataKey="share2024" position="top" style={{ fontSize: '8px', fill: '#64748b', fontWeight: 'bold' }} />
            </Bar>
            <Bar
              dataKey="share2025"
              name="2025年份额"
              radius={[2, 2, 0, 0]}
              barSize={18}
            >
              {data.map((entry, index) => {
                let color = '#005c8f'; // Default blue
                if (entry.name.includes('美国')) color = '#ef4444'; // Red for USA decline
                if (entry.name.includes('新兴市场')) color = '#00a9f4'; // Light blue for EM growth
                return <Cell key={`cell-${index}`} fill={color} />;
              })}
              <LabelList dataKey="share2025" position="top" style={{ fontSize: '8px', fill: '#334155', fontWeight: 'bold' }} />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-1.5 grid grid-cols-2 gap-2 shrink-0">
        <div className="bg-emerald-50 p-1.5 rounded border border-emerald-100 flex flex-col">
          <span className="text-[9px] font-bold text-emerald-700">东盟亮点</span>
          <span className="text-[8px] text-emerald-600 leading-tight">上升 1.3 pct，稳居第一大贸易伙伴</span>
        </div>
        <div className="bg-red-50 p-1.5 rounded border border-red-100 flex flex-col">
          <span className="text-[9px] font-bold text-red-700">美国异动</span>
          <span className="text-[8px] text-red-600 leading-tight">下降 3.7 pct，受关税与脱钩惯性影响</span>
        </div>
      </div>
    </div>
  );
};
