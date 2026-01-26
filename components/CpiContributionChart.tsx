
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
  Cell,
  ReferenceLine
} from 'recharts';
import { CpiContributionDataPoint } from '../types';

interface Props {
  data: CpiContributionDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue">拉动CPI: {payload[0].value > 0 ? '+' : ''}{payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export const CpiContributionChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          12月CPI主要分项拉动点数拆解
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          金饰品与鲜菜合计拉动约0.96个百分点，是CPI转正核心推手
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 10, right: 40, left: 30, bottom: 0 }}
          >
            <CartesianGrid horizontal={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine x={0} stroke="#666" />
            
            <XAxis 
              type="number" 
              hide={false}
              domain={[-0.3, 0.6]}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
            />
            <YAxis 
              dataKey="category" 
              type="category" 
              width={70}
              tick={{ fontSize: 11, fill: '#333', fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
               cursor={{ fill: 'transparent' }}
               contentStyle={{ fontSize: '12px', border: '1px solid #e2e8f0' }}
            />

            <Bar dataKey="value" barSize={25} animationDuration={1500}>
               {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.highlight ? '#005c8f' : (entry.isPositive ? '#00a9f4' : '#ef4444')} 
                />
              ))}
              <LabelList 
                dataKey="value" 
                position={data.map(d => d.value >= 0 ? 'right' : 'left')}
                formatter={(val: number) => `${val > 0 ? '+' : ''}${val}`}
                style={{ fill: '#333', fontSize: '11px', fontWeight: 'bold' }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
