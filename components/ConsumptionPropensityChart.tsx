
import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { ConsumptionPropensityDataPoint } from '../types';

interface Props {
  data: ConsumptionPropensityDataPoint[];
}

export const ConsumptionPropensityChart: React.FC<Props> = ({ data }) => {
  // Transform data for grouped bar chart
  const monthMap: { [key: string]: string } = {
    'Q1': '3月',
    'Q2': '6月',
    'Q3': '9月',
    'Q4': '12月'
  };

  const chartData = ['Q1', 'Q2', 'Q3', 'Q4'].map(quarter => {
    const period2024 = `2024-${quarter}`;
    const period2025 = `2025-${quarter}`;
    
    const value2024 = data.find(d => d.period === period2024)?.value;
    const value2025 = data.find(d => d.period === period2025)?.value;

    return {
      month: monthMap[quarter],
      year2024: value2024,
      year2025: value2025
    };
  });

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
            data={chartData}
            margin={{ top: 10, right: 10, left: -25, bottom: 0 }}
            barGap={2}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis 
              dataKey="month" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 9 }}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#999', fontSize: 9 }}
              tickFormatter={(val) => `${val}%`}
              domain={[60, 75]}
            />
            <Tooltip 
              contentStyle={{ borderRadius: '4px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              cursor={{ fill: 'rgba(0,0,0,0.05)' }}
            />
            <Legend 
              verticalAlign="top" 
              height={36} 
              iconSize={8}
              wrapperStyle={{ fontSize: '10px', right: 0, top: -5 }}
            />
            <Bar 
              dataKey="year2024" 
              name="2024年"
              fill="#051c2c"
              radius={[2, 2, 0, 0]}
              animationDuration={1500}
              label={{ 
                position: 'top', 
                fill: '#333', 
                fontSize: 9, 
                fontWeight: 'bold',
                formatter: (value: number) => `${value}%`
              }}
            />
            <Bar 
              dataKey="year2025" 
              name="2025年"
              fill="#00a9f4"
              radius={[2, 2, 0, 0]}
              animationDuration={1500}
              label={{ 
                position: 'top', 
                fill: '#333', 
                fontSize: 9, 
                fontWeight: 'bold',
                formatter: (value: number) => `${value}%`
              }}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-1 flex justify-between items-center text-[8px] text-slate-400 italic">
        <span>数据来源：国家统计局（基于人均收入与支出换算）</span>
      </div>
    </div>
  );
};
