
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
  LabelList
} from 'recharts';
import { MonthlyTradeGrowthDataPoint } from '../types';

interface Props {
  data: MonthlyTradeGrowthDataPoint[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-webank-blue mb-1">{label}</p>
        {payload.map((item: any, index: number) => (
          <p key={index} style={{ color: item.color }} className="font-bold">
            {item.name}: {item.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const CustomLegend = (props: any) => {
  // 明确定义图例顺序
  const legendItems = [
    { name: '进出口总额', color: '#051c2c' },
    { name: '进口同比', color: '#00a9f4' },
    { name: '出口同比', color: '#ff9800' }
  ];

  return (
    <ul style={{
      listStyle: 'none',
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      margin: '10px 0 0 0'
    }}>
      {legendItems.map((entry, index) => (
        <li
          key={`item-${index}`}
          style={{
            marginRight: index < legendItems.length - 1 ? '20px' : '0',
            display: 'flex',
            alignItems: 'center',
            fontSize: '10px'
          }}
        >
          <div style={{
            width: '16px',
            height: '2px',
            backgroundColor: entry.color,
            marginRight: '5px'
          }} />
          <span style={{ color: '#666' }}>{entry.name}</span>
        </li>
      ))}
    </ul>
  );
};

// 自定义标签渲染函数，只在最后一个数据点显示
const renderCustomLabel = (props: any) => {
  const { x, y, value, index, stroke } = props;
  // 只在最后一个数据点（2025-12，index = 21）显示标签
  if (index === 21) {
    return (
      <text
        x={x}
        y={y - 10}
        fill={stroke}
        fontSize={10}
        fontWeight="bold"
        textAnchor="middle"
      >
        {value}%
      </text>
    );
  }
  return null;
};

export const MonthlyTradeGrowthChart: React.FC<Props> = ({ data }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-3">
        <h3 className="text-xs font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
          2024-2025年进出口贸易累计同比走势
        </h3>
        <p className="text-[10px] text-webank-subtext mt-1">
          单位：%
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <ReferenceLine y={0} stroke="#333" strokeWidth={1} />

            <XAxis
              dataKey="month"
              axisLine={{ stroke: '#e5e7eb' }}
              tickLine={false}
              tick={{ fill: '#666', fontSize: 9 }}
              dy={8}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#999', fontSize: 9 }}
              tickFormatter={(val) => `${val}%`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend content={<CustomLegend />} />

            <Line
              type="monotone"
              dataKey="totalTrade"
              name="进出口总额"
              stroke="#051c2c"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5 }}
              animationDuration={1500}
            >
              <LabelList content={renderCustomLabel} />
            </Line>
            <Line
              type="monotone"
              dataKey="import"
              name="进口同比"
              stroke="#00a9f4"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5 }}
              animationDuration={1500}
            >
              <LabelList content={renderCustomLabel} />
            </Line>
            <Line
              type="monotone"
              dataKey="export"
              name="出口同比"
              stroke="#ff9800"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 5 }}
              animationDuration={1500}
            >
              <LabelList content={renderCustomLabel} />
            </Line>
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-1 text-[8px] text-slate-400 italic">
        <span>数据来源：海关总署/相关统计数据</span>
      </div>
    </div>
  );
};
