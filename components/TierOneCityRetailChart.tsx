
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
  ReferenceLine
} from 'recharts';
import { TierOneCityRetailDataPoint } from '../types';

// 创建一个高阶函数来传递 data
const createCustomizedDot = (data: TierOneCityRetailDataPoint[]) => (props: any) => {
  const { cx, cy, value, dataKey, index } = props;

  // 只标注每条线的最后一个非null数据点
  // 找到该数据系列的最后一个非null值的索引
  const findLastNonNullIndex = (dataKey: string) => {
    for (let i = data.length - 1; i >= 0; i--) {
      if (data[i][dataKey] !== null) {
        return i;
      }
    }
    return -1;
  };

  const lastIndex = findLastNonNullIndex(dataKey);

  if (index === lastIndex && value !== null) {
    // 根据数据键使用不同颜色
    let dotColor = '#f59e0b'; // 广州
    if (dataKey === 'shenzhen') dotColor = '#00a9f4';
    if (dataKey === 'beijing') dotColor = '#64748b';
    if (dataKey === 'shanghai') dotColor = '#005c8f';

    // 标签位置调整
    let labelY = cy - 12;
    if (dataKey === 'guangzhou') labelY = cy - 20;
    if (dataKey === 'beijing') labelY = cy + 16;

    return (
      <g>
        <Dot cx={cx} cy={cy} r={5} fill={dotColor} stroke="#fff" strokeWidth={2} />
        <text
          x={cx}
          y={labelY}
          textAnchor="middle"
          fill="#333"
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
  data: TierOneCityRetailDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        {payload.map((p: any, index: number) => (
          p.value !== null && (
            <p key={index} style={{ color: p.color }}>
              {p.name}: {p.value}%
            </p>
          )
        ))}
      </div>
    );
  }
  return null;
};

const renderCustomLegend = (props: any) => {
  const { payload } = props;
  
  // 重新排列图例顺序：上海、广州、深圳、北京
  const legendOrder = ['上海', '广州', '深圳', '北京'];
  const sortedPayload = [...payload].sort((a, b) => {
    return legendOrder.indexOf(a.value) - legendOrder.indexOf(b.value);
  });

  return (
    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', margin: 0 }}>
      {sortedPayload.map((entry, index) => (
        <li key={`item-${index}`} style={{ marginRight: '20px', display: 'flex', alignItems: 'center' }}>
          <div style={{
            width: '8px',
            height: '8px',
            backgroundColor: entry.color,
            marginRight: '5px',
            borderRadius: '50%'
          }} />
          <span style={{ color: '#666', fontSize: '12px' }}>{entry.value}</span>
        </li>
      ))}
    </ul>
  );
};

export const TierOneCityRetailChart: React.FC<Props> = ({ data }) => {
  const CustomizedDot = createCustomizedDot(data);
  
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2024-2025年一线城市社会消费品零售总额累计同比变化
        </h3>
        <p className="text-xs text-webank-subtext mt-1">
          单位: %
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
              domain={[-6, 7]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
                content={renderCustomLegend}
                wrapperStyle={{ paddingTop: '10px' }} 
                iconType="circle" 
                iconSize={8} 
            />
            
            <ReferenceLine y={0} stroke="#999" strokeDasharray="3 3" />
            
            <Line
              name="广州"
              type="monotone"
              dataKey="guangzhou"
              stroke="#f59e0b"
              strokeWidth={3}
              dot={<CustomizedDot />}
              connectNulls
              animationDuration={2000}
            />
            <Line
              name="深圳"
              type="monotone"
              dataKey="shenzhen"
              stroke="#00a9f4"
              strokeWidth={3}
              dot={<CustomizedDot />}
              connectNulls
              animationDuration={2000}
              animationBegin={300}
            />
            <Line
              name="北京"
              type="monotone"
              dataKey="beijing"
              stroke="#64748b"
              strokeWidth={3}
              dot={<CustomizedDot />}
              connectNulls
              animationDuration={2000}
              animationBegin={600}
            />
            <Line
              name="上海"
              type="monotone"
              dataKey="shanghai"
              stroke="#005c8f"
              strokeWidth={3}
              dot={<CustomizedDot />}
              connectNulls
              animationDuration={2000}
              animationBegin={900}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
