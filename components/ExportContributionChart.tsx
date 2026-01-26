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
import { ExportContributionDataPoint } from '../types';

interface Props {
  data: ExportContributionDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className={payload[0].value > 0 ? 'text-webank-blue font-bold' : 'text-red-500 font-bold'}>
          拉动出口: {payload[0].value > 0 ? '+' : ''}{payload[0].value}%
        </p>
      </div>
    );
  }
  return null;
};

export const ExportContributionChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          12月出口增速拉动点数拆解
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          机电产品贡献超5个百分点，有效对冲劳动密集型产品拖累
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barCategoryGap="30%"
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={0} stroke="#666" />
            
            <XAxis 
              dataKey="name" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#333', fontSize: 11, fontWeight: 600 }}
              dy={10}
            />
            <YAxis 
              hide={false}
              tickFormatter={(val) => `${val > 0 ? '+' : ''}${val}`}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#999' }}
              domain={[-2, 6]}
            />
            <Tooltip 
               cursor={{ fill: 'transparent' }}
               content={<CustomTooltip />}
            />

            <Bar dataKey="value" radius={[4, 4, 4, 4]} animationDuration={1500}>
               {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.fill} 
                />
              ))}
              <LabelList 
                dataKey="value" 
                position={data.map(d => d.value >= 0 ? 'top' : 'bottom')}
                formatter={(val: number) => `${val > 0 ? '+' : ''}${val}`}
                style={{ fill: '#333', fontSize: '12px', fontWeight: 'bold' }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};