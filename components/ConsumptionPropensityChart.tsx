
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
  Cell,
  ReferenceLine
} from 'recharts';
import { ConsumptionPropensityDataPoint } from '../types';

interface Props {
  data: ConsumptionPropensityDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue font-bold">消费倾向: {payload[0].value}%</p>
      </div>
    );
  }
  return null;
};

export const ConsumptionPropensityChart: React.FC<Props> = ({ data }) => {
  // Define the specific comparison order requested: 24Q1, 25Q1, 24Q2, 25Q2...
  const order = [
    "2024-Q1", "2025-Q1", 
    "2024-Q2", "2025-Q2", 
    "2024-Q3", "2025-Q3", 
    "2024-Q4", "2025-Q4"
  ];

  const displayData = order
    .map(period => data.find(d => d.period === period))
    .filter((d): d is ConsumptionPropensityDataPoint => d !== undefined);

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2024-2025年分季度居民消费倾向同比对比
        </h3>
        <div className="mt-2 space-y-1">
          <p className="text-[10px] text-webank-subtext leading-tight">
            <span className="font-bold text-webank-accent">同比透视：</span>
            2025年各季度消费倾向中枢较2024年均有所下移，反映出预防性储蓄意愿的趋势性增强。
          </p>
          <p className="text-[10px] text-webank-subtext leading-tight">
            <span className="font-bold text-webank-accent">Q4 异常值：</span>
            2025-Q4 下降至 72.7%，与 2024-Q4 的 73.2% 形成鲜明对比，避险情绪显著。
          </p>
        </div>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={displayData}
            margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
            barGap={0}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis 
              dataKey="period" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 9 }}
              tickFormatter={(value) => value.replace('20', '')}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#999', fontSize: 9 }}
              tickFormatter={(val) => `${val}%`}
              domain={[60, 75]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar 
              dataKey="value" 
              name="居民消费倾向"
              radius={[2, 2, 0, 0]}
              animationDuration={1500}
              label={{ 
                position: 'top', 
                fill: '#333', 
                fontSize: 9, 
                fontWeight: 'bold',
                formatter: (value: number) => `${value}%`
              }}
            >
              {displayData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.period.includes('2025') ? '#00a9f4' : '#051c2c'} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-1 flex justify-between items-center text-[8px] text-slate-400 italic">
        <span>数据来源：国家统计局（基于人均收入与支出换算）</span>
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
