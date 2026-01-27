
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
import { MonthlyTradeGrowthDataPoint } from '../types';

interface Props {
  data: MonthlyTradeGrowthDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    // Find the correct payload items by name
    const totalItem = payload.find((p: any) => p.name === '进出口总额同比');
    const exportItem = payload.find((p: any) => p.name === '出口同比增速');
    const importItem = payload.find((p: any) => p.name === '进口同比增速');
    
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        {totalItem && <p className="text-red-600 font-bold">总额: {totalItem.value}%</p>}
        {exportItem && <p className="text-webank-blue font-bold">出口: {exportItem.value}%</p>}
        {importItem && <p className="text-webank-lightBlue">进口: {importItem.value}%</p>}
      </div>
    );
  }
  return null;
};

export const MonthlyTradeGrowthChart: React.FC<Props> = ({ data }) => {
  // Sort data chronologically
  const sortedData = [...data].sort((a, b) => a.month.localeCompare(b.month));

  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年1-12月全年度进出口同比增速月度明细
        </h3>
        <div className="mt-2 space-y-1">
          <p className="text-[10px] text-webank-subtext leading-tight">
            <span className="font-bold text-webank-accent">全年累计：</span>
            出口累计增长 <span className="font-bold">6.1%</span>，进出口总额累计增长 <span className="font-bold">3.8%</span>
          </p>
          <p className="text-[10px] text-webank-subtext leading-tight">
            <span className="font-bold text-webank-accent">12月亮点：</span>
            出口回升至6.6%，显著高于全年均值，主要受电子产品补库及抢出口效应驱动。
          </p>
        </div>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={sortedData}
            margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={0} stroke="#333" strokeWidth={1} />
            
            <XAxis 
              dataKey="month" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 9 }}
              tickFormatter={(value) => value.replace('2025-', '')}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#999', fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
              domain={[-5, 16]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
                style={{ fontSize: '10px' }}
                payload={[
                  { value: '进出口总额同比', type: 'line', id: 'total', color: '#ef4444' },
                  { value: '出口同比增速', type: 'line', id: 'export', color: '#051c2c' },
                  { value: '进口同比增速', type: 'line', id: 'import', color: '#00a9f4' }
                ]}
            />
            
            <Line
              name="进出口总额同比"
              type="monotone"
              dataKey="total"
              stroke="#ef4444" // Red
              strokeWidth={3}
              dot={{ r: 3, fill: '#ef4444' }}
              activeDot={{ r: 5 }}
              animationDuration={2000}
            />
            <Line
              name="出口同比增速"
              type="monotone"
              dataKey="export"
              stroke="#051c2c" // Dark Blue
              strokeWidth={3}
              dot={{ r: 3, fill: '#051c2c' }}
              activeDot={{ r: 5 }}
              animationDuration={2000}
              animationBegin={300}
            />
            <Line
              name="进口同比增速"
              type="monotone"
              dataKey="import"
              stroke="#00a9f4" // Light Blue
              strokeWidth={3}
              dot={{ r: 3, fill: '#00a9f4' }}
              activeDot={{ r: 5 }}
              animationDuration={2000}
              animationBegin={600}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
