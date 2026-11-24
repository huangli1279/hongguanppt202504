import React from 'react';
import { BaseCard } from '../base/BaseCard';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseBarChart, BarConfig, BarLineConfig } from '../base/BaseBarChart';

// 三大长假：出游人数（亿人次）、总花费（亿元）、人均花费（元），按 2024 / 2025 / 2026 年排列
const YEARS = ['2024', '2025', '2026'] as const;
const festivalOrder = ['春节', '五一', '十一'] as const;
const festivalColor: Record<string, string> = {
  春节: '#1B4F72', // 深蓝
  五一: '#DC2626', // 红
  十一: '#C09A4A', // 琥珀
};

const festivalRaw: Record<string, { visitors: number[]; spending: number[] }> = {
  春节: { visitors: [4.74, 5.01, 5.96], spending: [6326.87, 6770, 8034.83] },
  五一: { visitors: [2.95, 3.14, 3.25], spending: [1668.9, 1802.69, 1854.92] },
  十一: { visitors: [7.65, 8.88, 8.26], spending: [7008.17, 8090.06, 7383.75] },
};

const perCapita = (spending: number, visitors: number) => Math.round(spending / visitors);

// 合并后的图表数据：每个节日×年一个 period，同时包含出游人数、总花费、人均花费。
// 在相邻节日之间插入一个空点，用于打断人均线在跨节处的连线（connectNulls=false）。
const mergedData = festivalOrder.flatMap((festival, festivalIndex) => {
  const rows = YEARS.map((year, i) => ({
    period: `${festival}${year.slice(2)}`,
    visitors: festivalRaw[festival].visitors[i],
    spending: festivalRaw[festival].spending[i],
    perCapita: perCapita(festivalRaw[festival].spending[i], festivalRaw[festival].visitors[i]),
  }));
  if (festivalIndex < festivalOrder.length - 1) {
    rows.push({ period: `gap-${festival}`, visitors: null as any, spending: null as any, perCapita: null as any });
  }
  return rows;
});

const mergedCategoryGroups = festivalOrder.map((festival) => ({
  label: festival,
  x1: `${festival}${YEARS[0].slice(2)}`,
  x2: `${festival}${YEARS[2].slice(2)}`,
  stroke: festivalColor[festival],
  fill: festivalColor[festival],
  fillOpacity: 0.06,
}));

const travelBars: BarConfig[] = [
  { dataKey: 'visitors', name: '出游人数（亿人次）', color: '#1B4F72', yAxisId: 'left', unit: '亿人次' },
  { dataKey: 'spending', name: '总花费（亿元）', color: '#C09A4A', yAxisId: 'right', unit: '亿元' },
];

const travelLines: BarLineConfig[] = [
  { dataKey: 'perCapita', name: '人均消费（元）', color: '#DC2626', yAxisId: 'lineExtra', unit: '元', strokeWidth: 2 },
];

export const ContentSlide38: React.FC = () => {
  return (
    <BaseContentSlide
      title={<>特点二：追求性价比成为消费共识</>}
      subtitle="2026年三季度宏观经济报告"
      headerClassName="!mb-3"
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域：两张卡片 */}
        <div className="grid grid-cols-2 gap-3 mb-3 flex-shrink-0">
          {/* 卡片1：三大长假（合并原“出游规模与总花费齐增长” + “人均消费”两张卡片） */}
          <BaseCard title="出游人次扩张，消费更重性价比" delay="120ms" variant="accent" className="order-2">
            <ul className="text-xs space-y-2 list-disc pl-4">
              <li>
                2026年春节、五一出游人次分别升至
                <span className="text-webank-blue">5.96亿</span>
                和
                <span className="text-webank-blue">3.25亿</span>
                ，同比增长25.7%、10.2%；对应人均消费却分别降至
                <span className="text-webank-blue">1,348元</span>
                和
                <span className="text-webank-blue">571元</span>
                ，低于上年。
              </li>
              <li>
                十一假期也呈现相似变化：2026年人均消费
                <span className="text-webank-blue">894元</span>
                ，低于2025年的911元；出游人次虽较2024年增加，较2025年则回落。人次与消费金额并非同步上行，而人均支出连续回落，反映假日出游更强调控制预算、提升每笔支出的获得感。
              </li>
            </ul>
          </BaseCard>

          {/* 卡片2：二手交易扩容，平替成为比价起点 */}
          <BaseCard title="二手交易扩容，平替成为比价起点" delay="0ms" className="order-1">
            <p className="text-xs">
              <span className="font-semibold text-webank-blue">二手交易：</span>
              2025年交易额约1.69万亿元、<span className="text-webank-blue">+12.4%</span>；二手车上半年与新车之比接近1:1（三年期二手车约为新车五折）。
            </p>
            <p className="text-xs mt-1">
              <span className="font-semibold text-webank-blue">平替经济：</span>
              调查显示，<span className="text-webank-blue">71.2%</span>的消费者在过去半年有过“平替”行为；美团“平替”搜索<span className="text-webank-blue">+26.4%</span>（2025）。
            </p>
            <p className="text-xs mt-1 text-webank-subtext">
              消费者并未压缩品质要求，而是拒绝继续支付品牌溢价。
            </p>
            <p className="text-[10px] mt-2 text-webank-subtext">
              数据来源：中国中小商业企业协会×立信数据研究院《2026年二季度中国消费者消费意愿调查报告》
            </p>
          </BaseCard>
        </div>

        {/* 图表区域：两列 */}
        <div className="flex-1 grid grid-cols-2 gap-3 min-h-0">
          {/* 左列：合成图（出游人数柱 + 总花费柱 + 人均花费线） */}
          <ChartContainer delay="600ms" className="h-full min-h-0 order-2">
            <BaseBarChart
              data={mergedData}
              title="三大长假出游人数花费与人均消费（按节日分布）"
              subtitle={`数据来源：文化和旅游部·国家统计局 | 单位：亿人次 / 亿元 / 元 | 红线为人均消费（元）`}
              xAxisKey="period"
              bars={travelBars}
              lines={travelLines}
              yAxisDomain={[0, 20]}
              showYAxis={false}
              yAxisTickFormatter={(v) => `${v}亿`}
              yAxisWidth={30}
              legendOrder={['出游人数（亿人次）', '总花费（亿元）', '人均消费（元）']}
              legendFontSize={9}
              barSize={14}
              barGap={3}
              barCategoryGap="35%"
              showLabels={true}
              labelContent={({ value, x, y, width, dataKey }: any) => {
                if (value == null) return null;
                const num = Number(value) || 0;
                const cx = (Number(x) || 0) + (Number(width) || 0) / 2;
                const isSpending = dataKey === 'spending';
                const text = isSpending ? Math.round(num).toLocaleString() : num.toFixed(2);
                return (
                  <text
                    x={cx}
                    y={(Number(y) || 0) - 6}
                    textAnchor="middle"
                    fill={isSpending ? '#C09A4A' : '#1B4F72'}
                    fontSize={8}
                    fontWeight={700}
                  >
                    {text}
                  </text>
                );
              }}
              xAxisTickFormatter={(v) => {
                const match = String(v).match(/(\d{2})$/);
                return match ? match[1] : '';
              }}
              xAxisTickFontSize={9}
              xAxisHeight={22}
              xAxisInterval={0}
              categoryGroups={mergedCategoryGroups}
              showLineYAxis={false}
              lineAxisDomain={[0, 20000]}
              lineUnit="元"
              lineYAxisWidth={44}
              lineYAxisTickFormatter={(v) => `${Math.round(v)}`}
              lineExtraAxis={{
                domain: [0, 1600],
                unit: '元',
                width: 44,
                tickFormatter: (v) => `${Math.round(v)}`,
                hide: true,
              }}
              unit="亿人次"
              lineLabelContent={({ value, x, y }: any) => {
                if (value == null) return null;
                return (
                  <text
                    x={Number(x)}
                    y={Number(y) - 8}
                    textAnchor="middle"
                    fill="#DC2626"
                    fontSize={8}
                    fontWeight={700}
                  >
                    {Math.round(Number(value)).toLocaleString()}
                  </text>
                );
              }}
              lineShowDot={true}
            />
          </ChartContainer>

          {/* 右列：行为数据表 */}
          <ChartContainer delay="840ms" className="order-1">
            <div className="flex flex-col h-full">
              <div className="mb-1.5">
                <h3 className="text-base font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
                  行为数据印证
                </h3>
                <p className="text-[12px] text-webank-subtext mt-0.5">
                  数据来源：麦肯锡《2026 消费者现状》
                </p>
              </div>
              <div className="flex-1 min-h-0 overflow-hidden">
                <table className="w-full h-full text-[12px] border-collapse">
                  <thead>
                    <tr className="bg-webank-blue/10 text-black">
                      <th className="border border-slate-200 px-1.5 py-1 text-left font-bold w-40">行为</th>
                      <th className="border border-slate-200 px-1.5 py-1 text-left font-bold w-20">占比</th>
                      <th className="border border-slate-200 px-1.5 py-1 text-left font-bold">备注</th>
                    </tr>
                  </thead>
                  <tbody className="text-webank-text">
                    <tr className="align-top">
                      <td className="border border-slate-200 px-1.5 py-1 font-semibold text-webank-accent">延长物品使用周期再更换</td>
                      <td className="border border-slate-200 px-1.5 py-1 text-center font-bold text-black">82%</td>
                      <td className="border border-slate-200 px-1.5 py-1">全年龄</td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-slate-200 px-1.5 py-1 font-semibold text-webank-accent">维修而非丢弃</td>
                      <td className="border border-slate-200 px-1.5 py-1 text-center font-bold text-webank-blue">69%</td>
                      <td className="border border-slate-200 px-1.5 py-1">全年龄</td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-slate-200 px-1.5 py-1 font-semibold text-webank-accent">主动减少浪费</td>
                      <td className="border border-slate-200 px-1.5 py-1 text-center font-bold text-webank-blue">68%</td>
                      <td className="border border-slate-200 px-1.5 py-1">全年龄</td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-slate-200 px-1.5 py-1 font-semibold text-webank-accent">购买二手服装</td>
                      <td className="border border-slate-200 px-1.5 py-1 text-center font-bold text-webank-blue">30%</td>
                      <td className="border border-slate-200 px-1.5 py-1">多数品类超20%</td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-slate-200 px-1.5 py-1 font-semibold text-webank-accent">DIY 此前付费的服务</td>
                      <td className="border border-slate-200 px-1.5 py-1 text-center font-bold text-webank-blue">近一半</td>
                      <td className="border border-slate-200 px-1.5 py-1">家政、理发、美容等</td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-slate-200 px-1.5 py-1 font-semibold text-webank-accent">每2–3个月买一次二手</td>
                      <td className="border border-slate-200 px-1.5 py-1 text-center font-bold text-webank-blue">50%</td>
                      <td className="border border-slate-200 px-1.5 py-1">Z世代</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
