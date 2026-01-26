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
import { TsfContributionDataPoint } from '../types';

interface Props {
  data: TsfContributionDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-mckinsey-blue mb-1">{label}</p>
        <p className={value > 0 ? 'text-mckinsey-blue font-bold' : 'text-red-500 font-bold'}>
          同比变化: {value > 0 ? '+' : ''}{value}亿元
        </p>
      </div>
    );
  }
  return null;
};

export const TsfDecContributionChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          12月新增社融规模分项同比多增/少增贡献拆解 (亿元)
        </h3>
        <p className="text-xs text-mckinsey-subtext mt-1">
          政府债少增逾万亿是核心拖累，企业信贷与债券融资形成正向支撑
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 60, left: 60, bottom: 5 }}
            barCategoryGap="20%"
          >
            <CartesianGrid horizontal={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine x={0} stroke="#666" strokeWidth={1} />
            
            <XAxis 
              type="number" 
              hide={false}
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 10 }}
              domain={[-12000, 4000]}
            />
            <YAxis 
              dataKey="category" 
              type="category" 
              width={80}
              tick={{ fontSize: 11, fill: '#333', fontWeight: 600 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip 
               cursor={{ fill: 'transparent' }}
               content={<CustomTooltip />}
            />

            <Bar dataKey="value" radius={[2, 2, 2, 2]} animationDuration={1500}>
               {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.fill} 
                  fillOpacity={entry.isTotal ? 1 : 0.8}
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