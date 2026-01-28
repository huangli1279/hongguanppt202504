
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
  Area
} from 'recharts';
import { ServiceGoodsDataPoint } from '../types';

const CustomizedDot = (props: any) => {
  const { cx, cy, payload, value, dataKey } = props;
  
  // 标注2025年10、11、12月
  const highlightMonths = ['2025-10', '2025-11', '2025-12'];
  
  if (payload && highlightMonths.includes(payload.month)) {
    // 根据数据键（服务/商品）使用不同颜色
    const dotColor = dataKey === 'service' ? '#005c8f' : '#00a9f4';
    const labelColor = payload.month === '2025-12' ? '#ef4444' : '#333';
    
    // 商品零售额的标签显示在下方，服务零售额显示在上方
    const labelY = dataKey === 'goods' ? cy + 16 : cy - 12;
    
    return (
      <g>
        <Dot cx={cx} cy={cy} r={5} fill={dotColor} stroke="#fff" strokeWidth={2} />
        <text
          x={cx}
          y={labelY}
          textAnchor="middle"
          fill={labelColor}
          fontSize={10}
          fontWeight="bold"
        >
          {value}
        </text>
      </g>
    );
  }

  return null;
};

interface Props {
  data: ServiceGoodsDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        <p className="text-webank-blue">服务零售: {payload[0].value}%</p>
        <p className="text-slate-500">限额以上商品零售: {payload[1].value}%</p>
        <div className="mt-1 border-t border-slate-100 pt-1 text-[10px] text-slate-500">
          剪刀差: {(payload[0].value - payload[1].value).toFixed(1)}%
        </div>
      </div>
    );
  }
  return null;
};

export const ServiceGoodsGapChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2024-2025年服务零售与限额以上商品零售累计同比
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          服务零售持续领先，限额以上商品零售在2025年反弹后回落
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
              domain={[0, 14]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <Line
              name="服务零售额"
              type="monotone"
              dataKey="service"
              stroke="#005c8f"
              strokeWidth={3}
              dot={<CustomizedDot />}
              animationDuration={2000}
            />
            <Line
              name="限额以上商品零售额"
              type="monotone"
              dataKey="goods"
              stroke="#00a9f4"
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
