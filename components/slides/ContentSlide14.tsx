import React from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseLineChart, LineConfig } from '../base/BaseLineChart';
import { CpiCategoryDataPoint, cpiCategoryData, cpiTrendData } from '@/data/cpi';
import { uiColors } from '@/utils/chartColors';

const cpiLines: LineConfig[] = [
  { dataKey: 'cpi', name: 'CPI:当月同比', strokeWidth: 2.5 },
  { dataKey: 'coreCpi', name: '剔除食品能源CPI:当月同比', strokeWidth: 2 },
];

const MINI_LINE_COLOR = '#005c8f';
const MINI_X_TICKS = ['2025-09', '2026-03', '2026-09'];

const miniCategories: { key: keyof CpiCategoryDataPoint; name: string }[] = [
  { key: 'foodTobaccoAlcohol', name: '食品烟酒' },
  { key: 'transportation', name: '交通通信' },
  { key: 'housing', name: '居住' },
  { key: 'education', name: '教育文娱' },
  { key: 'clothing', name: '衣着' },
  { key: 'healthcare', name: '医疗保健' },
  { key: 'householdServices', name: '生活用品' },
  { key: 'otherGoodsServices', name: '其他用品' },
];

const formatSigned1 = (val: number) => `${val > 0 ? '+' : ''}${val.toFixed(1)}`;

/** 单个分项的小图：按自身取值范围收紧 Y 轴，让波动更明显 */
const MiniCategoryChart: React.FC<{
  data: CpiCategoryDataPoint[];
  dataKey: keyof CpiCategoryDataPoint;
  name: string;
  showXAxis?: boolean;
}> = ({ data, dataKey, name, showXAxis = false }) => {
  const values = data.map((d) => Number(d[dataKey]));
  const rawMin = Math.min(...values);
  const rawMax = Math.max(...values);
  const pad = Math.max(rawMax - rawMin, 0.4) * 0.15;
  const lo = Math.round((rawMin - pad) * 10) / 10;
  const hi = Math.round((rawMax + pad) * 10) / 10;
  const latest = values[values.length - 1];
  const latestMonth = Number(data[data.length - 1].period.slice(5, 7));
  const latestTone =
    latest > 0 ? 'text-red-500' : latest < 0 ? 'text-green-600' : 'text-slate-500';
  const lastIndex = data.length - 1;

  return (
    <div className="flex min-h-0 min-w-0 flex-col">
      <div className="mb-0.5 flex items-baseline justify-between gap-1 text-[10px] leading-none">
        <span className="font-semibold text-webank-blue whitespace-nowrap">{name}</span>
        <span className={`font-bold tabular-nums ${latestTone}`}>
          {latestMonth}月{formatSigned1(latest)}%
        </span>
      </div>
      <div className="min-h-0 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 8, right: 18, left: 0, bottom: showXAxis ? 0 : 6 }}
          >
            <CartesianGrid vertical={false} stroke={uiColors.grid} strokeDasharray="3 3" />
            {lo < 0 && hi > 0 && (
              <ReferenceLine y={0} stroke={uiColors.tickSecondary} strokeDasharray="2 2" />
            )}
            <XAxis
              dataKey="period"
              hide={!showXAxis}
              axisLine={false}
              tickLine={false}
              interval={0}
              ticks={showXAxis ? MINI_X_TICKS : undefined}
              tick={{ fill: uiColors.tick, fontSize: 8 }}
              dy={2}
            />
            <YAxis
              domain={[lo, hi]}
              ticks={[lo, hi]}
              width={26}
              axisLine={false}
              tickLine={false}
              tick={{ fill: uiColors.tickSecondary, fontSize: 8 }}
              tickFormatter={(value: number) => value.toFixed(1)}
            />
            <Line
              type="monotone"
              dataKey={dataKey as string}
              stroke={MINI_LINE_COLOR}
              strokeWidth={1.5}
              isAnimationActive={false}
              dot={(props: any) => {
                const { cx, cy, index } = props;
                if (index !== lastIndex) return null as any;
                return (
                  <circle
                    key={`mini-dot-${index}`}
                    cx={cx}
                    cy={cy}
                    r={2.2}
                    fill={latest >= 0 ? '#ef4444' : '#10b981'}
                    stroke="#ffffff"
                    strokeWidth={1}
                  />
                );
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const ContentSlide14: React.FC = () => {
  return (
    <BaseContentSlide
      title="CPI：前三季度CPI+0.9%、核心+1.1%，仍处于温和通胀区间"
      cardColumns={2}
      chartColumns={2}
      cards={
        <>
          <BaseCard
            title="三季度CPI能源与AI终端涨，内需缓慢修复"
            delay="0ms"
            variant="accent"
            className="sm:col-span-2"
          >
            <p>
              三季度CPI逐步回升，9月CPI同比<span className="font-bold text-red-500">+0.9%</span>，核心CPI<span className="font-bold text-red-500">+1.0%</span>，处于温和通胀区间。
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                9月受油价影响，交通通信同比<span className="font-bold text-red-500">+4.3%</span>，其中燃料<span className="font-bold text-red-500">+14.9%</span>（8月<span className="text-webank-blue">+8.3%</span>）；AI相关的涨价导致存储设备9月<span className="font-bold text-red-500">+46.7%</span>、平板电脑<span className="font-bold text-red-500">+23.6%</span>。
              </li>
              <li>
                食品受到季节性影响CPI下行，其中猪肉<span className="font-bold text-green-600">-10.0%</span>、鲜菜<span className="font-bold text-green-600">-8.1%</span>。
              </li>
              <li>
                其他用品CPI三季度同比增速放缓（9月<span className="font-bold text-red-500">+5.9%</span>），受金价三季度下降影响。
              </li>
            </ul>
          </BaseCard>
        </>
      }
      charts={
        <>
          <ChartContainer delay="600ms" className="min-h-0">
            <BaseLineChart
              data={cpiTrendData}
              title="CPI当月同比、剔除食品能源CPI当月同比"
              subtitle="数据来源：国家统计局 | 单位：%"
              lines={cpiLines}
              yAxisDomain={[-1, 2]}
              showYAxis={true}
              showReferenceLine={true}
              referenceLineY={0}
              legendOrder={['CPI:当月同比', '剔除食品能源CPI:当月同比']}
              xAxisTickCount={7}
              highlightPeriods={['2026-09']}
            />
          </ChartContainer>
          <ChartContainer delay="720ms" className="min-h-0">
            <div className="flex h-full flex-col">
              <div className="mb-1">
                <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
                  CPI八大类当月同比
                </h3>
                <p className="text-[10px] text-webank-subtext mt-0.5">
                  数据来源：国家统计局 | 单位：%
                </p>
              </div>
              <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-4 gap-x-2 gap-y-1">
                {miniCategories.map((category, index) => (
                  <MiniCategoryChart
                    key={category.key}
                    data={cpiCategoryData}
                    dataKey={category.key}
                    name={category.name}
                    showXAxis={index >= 6}
                  />
                ))}
              </div>
            </div>
          </ChartContainer>
        </>
      }
    />
  );
};
