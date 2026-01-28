
import React from 'react';
import {
  Dot,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
  Label
} from 'recharts';
import { UrbanRuralDataPoint } from '../types';

const CustomizedDot = (props: any) => {
  const { cx, cy, payload, value, dataKey } = props;
  
  // 标注10、11、12月
  const highlightMonths = ['10月', '11月', '12月'];
  
  if (payload && highlightMonths.includes(payload.month)) {
    // 根据数据键（城镇/乡村）使用不同颜色
    const dotColor = dataKey === 'rural' ? '#00a9f4' : '#051c2c';
    const labelColor = payload.month === '12月' ? '#ef4444' : '#333';
    
    return (
      <g>
        <Dot cx={cx} cy={cy} r={5} fill={dotColor} stroke="#fff" strokeWidth={2} />
        <text
          x={cx}
          y={cy - 12}
          textAnchor="middle"
          fill={labelColor}
          fontSize={10}
          fontWeight="bold"
        >
          {value}%
        </text>
      </g>
    );
  }

  return null;
};

interface Props {
  data: UrbanRuralDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        {payload.map((p: any, index: number) => (
          <p key={index} style={{ color: p.color }}>
            {p.name}: {p.value}%
          </p>
        ))}
        <div className="mt-1 border-t border-slate-100 pt-1 text-[10px] text-slate-500">
          差距: {(payload[1].value - payload[0].value).toFixed(1)}%
        </div>
      </div>
    );
  }
  return null;
};

export const UrbanRuralChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2025年城镇与乡村社会消费品零售总额累计同比
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          乡村市场韧性持续强于城镇，12月累计增速差距扩大
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#e5e7eb" strokeDasharray="3 3" />
            <XAxis 
              dataKey="month" 
              axisLine={{ stroke: '#e5e7eb' }} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 10 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#999', fontSize: 10 }}
              tickFormatter={(val) => `${val}%`}
              domain={[3, 5.5]}
              ticks={[3.0, 3.5, 4.0, 4.5, 5.0, 5.5]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
             <Line
              name="乡村零售额"
              type="monotone"
              dataKey="rural"
              stroke="#00a9f4"
              strokeWidth={3}
              dot={<CustomizedDot />}
              animationDuration={2000}
            />
            <Line
              name="城镇零售额"
              type="monotone"
              dataKey="urban"
              stroke="#051c2c"
              strokeWidth={3}
              dot={<CustomizedDot />}
              animationDuration={2000}
              animationBegin={300}
            />
           
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
