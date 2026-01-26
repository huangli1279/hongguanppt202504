import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { ExportShareDataPoint } from '../types';

interface Props {
  data2024: ExportShareDataPoint[];
  data2025: ExportShareDataPoint[];
}

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-mckinsey-blue">{payload[0].name}</p>
        <p className="text-mckinsey-subtext">份额: <span className="font-bold text-mckinsey-accent">{payload[0].value}%</span></p>
      </div>
    );
  }
  return null;
};

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  if (percent < 0.1) return null; // Don't show labels for small slices to avoid clutter

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central" fontSize={10} fontWeight="bold">
      {`${value}%`}
    </text>
  );
};

export const ExportShareStructureChart: React.FC<Props> = ({ data2024, data2025 }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-2">
        <h3 className="text-sm font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          我国出口市场份额结构变化 (2024 vs 2025)
        </h3>
        <p className="text-xs text-mckinsey-subtext mt-1">
          美国份额萎缩3.5pct，东盟与“一带一路”国家份额显著提升
        </p>
      </div>
      <div className="flex-grow min-h-0 flex gap-4">
        {/* 2024 Chart */}
        <div className="w-1/2 relative">
             <h4 className="absolute top-2 left-0 w-full text-center text-xs font-bold text-slate-500">2024年</h4>
            <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                data={data2024}
                cx="50%"
                cy="55%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
                animationDuration={1500}
                labelLine={false}
                label={renderCustomizedLabel}
                >
                {data2024.map((entry, index) => (
                    <Cell key={`cell-2024-${index}`} fill={entry.fill} stroke="white" strokeWidth={1} />
                ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
            </PieChart>
            </ResponsiveContainer>
        </div>

         {/* 2025 Chart */}
         <div className="w-1/2 relative">
             <h4 className="absolute top-2 left-0 w-full text-center text-xs font-bold text-mckinsey-blue">2025年</h4>
            <ResponsiveContainer width="100%" height="100%">
            <PieChart>
                <Pie
                data={data2025}
                cx="50%"
                cy="55%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
                animationDuration={1500}
                labelLine={false}
                label={renderCustomizedLabel}
                >
                {data2025.map((entry, index) => (
                    <Cell key={`cell-2025-${index}`} fill={entry.fill} stroke="white" strokeWidth={1} />
                ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                    layout="horizontal" 
                    verticalAlign="bottom" 
                    align="center"
                    iconType="circle"
                    iconSize={8}
                    wrapperStyle={{ fontSize: '10px', bottom: 0 }}
                />
            </PieChart>
            </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};