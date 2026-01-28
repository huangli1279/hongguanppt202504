
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
  Label,
  LabelList,
} from 'recharts';
import { CommodityIndexDataPoint } from '../types';

interface Props {
  data: CommodityIndexDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        {payload.map((item: any, index: number) => (
          <p key={index} style={{ color: item.color }}>
            {item.name}: {item.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const CommodityIndexChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          大宗商品价格指数分项数据
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          能源与钢铁类指数回落，有色金属与矿产类表现分化
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 35,
              left: -20,
              bottom: 5,
            }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            
            <XAxis 
              dataKey="month" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 9 }}
              dy={10}
              interval={1}
              ticks={['24-01', '24-03', '24-05', '24-07', '24-09', '24-11', '25-01', '25-03', '25-05', '25-07', '25-09', '25-11', '25-12']}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#999', fontSize: 10 }}
              domain={['auto', 'auto']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '10px' }}
              iconType="circle"
              iconSize={8}
            />
            
            <Line
              name="钢铁类"
              type="monotone"
              dataKey="steel"
              stroke="#94a3b8"
              strokeWidth={2}
              dot={{ r: 2 }}
              animationDuration={1500}
            >
              <LabelList 
                dataKey="steel" 
                position="top" 
                style={{ fontSize: '9px', fill: '#94a3b8', fontWeight: 'bold' }}
                content={({ x, y, value, index }: any) => {
                  // 只标注最后一个数据点（25-12）
                  if (index === 23) {
                    return (
                      <text x={x} y={y} dy={-8} textAnchor="middle" fill="#94a3b8" fontSize={9} fontWeight="bold">
                        {value}
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Line>
            <Line
              name="矿产类"
              type="monotone"
              dataKey="minerals"
              stroke="#00a9f4"
              strokeWidth={2}
              dot={{ r: 2 }}
              animationDuration={1800}
            >
              <LabelList 
                dataKey="minerals" 
                position="top" 
                style={{ fontSize: '9px', fill: '#00a9f4', fontWeight: 'bold' }}
                content={({ x, y, value, index }: any) => {
                  if (index === 23) {
                    return (
                      <text x={x} y={y} dy={-8} textAnchor="middle" fill="#00a9f4" fontSize={9} fontWeight="bold">
                        {value}
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Line>
            <Line
              name="有色类"
              type="monotone"
              dataKey="nonFerrous"
              stroke="#051c2c"
              strokeWidth={2}
              dot={{ r: 2 }}
              animationDuration={2100}
            >
              <LabelList 
                dataKey="nonFerrous" 
                position="top" 
                style={{ fontSize: '9px', fill: '#051c2c', fontWeight: 'bold' }}
                content={({ x, y, value, index }: any) => {
                  if (index === 23) {
                    return (
                      <text x={x} y={y} dy={-8} textAnchor="middle" fill="#051c2c" fontSize={9} fontWeight="bold">
                        {value}
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Line>
            <Line
              name="能源类"
              type="monotone"
              dataKey="energy"
              stroke="#ef4444"
              strokeWidth={2}
              dot={{ r: 2 }}
              animationDuration={2400}
            >
              <LabelList 
                dataKey="energy" 
                position="top" 
                style={{ fontSize: '9px', fill: '#ef4444', fontWeight: 'bold' }}
                content={({ x, y, value, index }: any) => {
                  if (index === 23) {
                    return (
                      <text x={x} y={y} dy={-8} textAnchor="middle" fill="#ef4444" fontSize={9} fontWeight="bold">
                        {value}
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
