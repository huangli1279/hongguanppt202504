
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

// Data from user request
const rawData = {
  "时间序列": [
    "2024-02", "2024-03", "2024-04", "2024-05", "2024-06", "2024-07",
    "2024-08", "2024-09", "2024-10", "2024-11", "2024-12",
    "2025-02", "2025-03", "2025-04", "2025-05", "2025-06",
    "2025-07", "2025-08", "2025-09", "2025-10", "2025-11", "2025-12"
  ],
  "建筑及装潢材料": [
    2.10, 2.40, 0.60, -0.40, -1.20, -1.30,
    -2.00, -2.60, -3.00, -2.30, -2.00,
    0.10, 0.00, 2.30, 3.00, 2.60,
    2.20, 1.80, 1.60, 0.50, -1.50, -2.67
  ],
  "汽车类": [
    8.70, 3.80, 1.40, 0.20, -1.10, -1.70,
    -2.40, -2.10, -1.50, -0.70, -0.50,
    -4.40, -0.80, -0.50, -0.10, 0.80,
    0.40, 0.50, 0.60, -0.20, -1.00, -1.49
  ],
  "通讯器材类": [
    16.20, 13.20, 13.20, 13.90, 11.30, 11.40,
    11.80, 11.90, 12.20, 9.50, 9.90,
    26.20, 26.90, 25.40, 27.10, 24.10,
    22.90, 21.10, 20.50, 20.90, 20.90, 20.86
  ],
  "家用电器类": [
    5.70, 5.80, 5.50, 7.00, 3.10, 2.30,
    2.50, 4.40, 7.80, 9.60, 12.30,
    10.90, 19.30, 23.90, 30.20, 30.70,
    30.40, 28.40, 25.30, 20.10, 14.80, 11.00
  ],
  "体育、娱乐用品类": [
    11.30, 14.20, 13.80, 15.20, 11.20, 11.10,
    10.10, 9.70, 11.50, 10.50, 11.10,
    25.00, 25.40, 24.90, 25.70, 22.20,
    21.10, 20.60, 19.60, 18.40, 16.40, 15.70
  ]
};

// Transform data for Recharts
const data = rawData["时间序列"].map((date, index) => ({
  date,
  "建筑及装潢材料": rawData["建筑及装潢材料"][index],
  "汽车类": rawData["汽车类"][index],
  "通讯器材类": rawData["通讯器材类"][index],
  "家用电器类": rawData["家用电器类"][index],
  "体育、娱乐用品类": rawData["体育、娱乐用品类"][index],
}));

// Colors for lines
const colors = {
  "通讯器材类": "#005c8f", // Dark Blue (Strongest)
  "体育、娱乐用品类": "#00a9f4", // Light Blue (Strong)
  "家用电器类": "#f59e0b", // Orange (Volatile)
  "建筑及装潢材料": "#94a3b8", // Grey (Weak)
  "汽车类": "#ef4444", // Red (Negative/Weak)
};

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 border border-slate-200 shadow-lg text-xs font-sans">
        <p className="font-bold text-slate-700 mb-1">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value}%
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export const RetailCategoryLineChart: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col bg-white p-4 rounded-sm shadow-sm border border-slate-200">
      <div className="mb-2">
        <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide flex items-center gap-2">
          <div className="w-1 h-3 bg-webank-blue rounded-full"></div>
          2024-2025年分商品零售类值累计同比走势
        </h3>
        <p className="text-[10px] text-webank-subtext mt-1">
          数据来源：国家统计局/行业统计
        </p>
      </div>
      <div className="flex-grow min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#f1f5f9" strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              axisLine={{ stroke: '#e2e8f0' }}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 9 }}
              interval={2} // Show every 3rd label to avoid clutter
              height={20}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94a3b8', fontSize: 9 }}
              tickFormatter={(val) => `${val}%`}
              domain={['auto', 'auto']}
              width={35}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              align="center"
              wrapperStyle={{ fontSize: '10px', paddingTop: '5px' }}
              iconType="circle"
              iconSize={6}
            />
            <ReferenceLine y={0} stroke="#cbd5e1" strokeDasharray="3 3" />
            
            <Line
              type="monotone"
              dataKey="通讯器材类"
              stroke={colors["通讯器材类"]}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="体育、娱乐用品类"
              stroke={colors["体育、娱乐用品类"]}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="家用电器类"
              stroke={colors["家用电器类"]}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="建筑及装潢材料"
              stroke={colors["建筑及装潢材料"]}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
            <Line
              type="monotone"
              dataKey="汽车类"
              stroke={colors["汽车类"]}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
