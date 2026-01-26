
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
import { InvestmentStructureDataPoint } from '../types';

interface Props {
  data: InvestmentStructureDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-mckinsey-blue mb-1">{label}</p>
        <p className={payload[0].value > 0 ? 'text-mckinsey-blue font-bold' : 'text-red-500 font-bold'}>
          增速: {payload[0].value > 0 ? '+' : ''}{payload[0].value}%
        </p>
        {payload[0].payload.description && (
          <p className="text-mckinsey-subtext text-[10px] mt-1 italic">
             {payload[0].payload.description}
          </p>
        )}
      </div>
    );
  }
  return null;
};

export const EquipmentVsConstructionChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-mckinsey-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          投资结构分化：设备购置 vs. 建筑安装
        </h3>
        <p className="text-xs text-mckinsey-subtext mt-1">
          “重设备、轻厂房”特征显著，设备更新成为投资核心驱动力
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 10, bottom: 5 }}
            barCategoryGap="30%"
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <ReferenceLine y={0} stroke="#666" strokeWidth={1} />
            
            <XAxis 
              dataKey="category" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#333', fontSize: 11, fontWeight: 600 }}
              dy={10}
            />
            <YAxis 
              hide={false}
              tickFormatter={(val) => `${val}%`}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 10, fill: '#999' }}
              domain={[-10, 15]}
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
                />
              ))}
              <LabelList 
                dataKey="value" 
                position={data.map(d => d.value >= 0 ? 'top' : 'bottom')}
                formatter={(val: number) => `${val > 0 ? '+' : ''}${val}%`}
                style={{ fill: '#333', fontSize: '12px', fontWeight: 'bold' }}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
