import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { DemandStructureData } from '../types';

interface Props {
  data: DemandStructureData[];
}

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, value } = props;
  return (
    <g>
      <path d={props.d} fill={fill} />
      <text x={cx} y={cy} dy={-10} textAnchor="middle" fill="#051c2c" className="text-xl font-bold font-serif">
        {payload.value}%
      </text>
      <text x={cx} y={cy} dy={10} textAnchor="middle" fill="#666" className="text-[10px]">
        {payload.name}
      </text>
      <text x={cx} y={cy} dy={22} textAnchor="middle" fill="#999" className="text-[9px]">
        贡献率
      </text>
    </g>
  );
};

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue">{payload[0].name}</p>
        <p className="text-webank-subtext">贡献率: <span className="font-bold text-webank-accent">{payload[0].value}%</span></p>
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
          2025 Q4 三大需求对GDP增长贡献率
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          净出口贡献率跃升至31.1%，有效弥补投资缺口
        </p>
      </div>
      <div className="flex-grow min-h-0 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={90}
              paddingAngle={2}
              dataKey="value"
              animationDuration={1500}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} stroke="white" strokeWidth={2} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              layout="vertical" 
              verticalAlign="middle" 
              align="right"
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: '11px', color: '#333' }}
            />
          </PieChart>
        </ResponsiveContainer>
        {/* Central Text Overlay (Static fallback if interaction is tricky, but label handles it above ideally, or just center text) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none pr-24">
             {/* Adjusted margin right to account for legend offset */}
             <div className="text-2xl font-bold text-webank-blue font-serif">52.9%</div>
             <div className="text-[10px] text-slate-500 uppercase">消费贡献主导</div>
        </div>
      </div>
    </div>
  );
};