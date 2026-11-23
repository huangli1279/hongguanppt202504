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
      title={<>追求性价比成为主流选择</>}
      subtitle="2026年三季度宏观经济报告"
      headerClassName="!mb-3"
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域：两张卡片 */}
        <div className="grid grid-cols-2 gap-3 mb-3 flex-shrink-0">
          {/* 卡片1：三大长假（合并原“出游规模与总花费齐增长” + “人均消费”两张卡片） */}
          <BaseCard title="出游人次扩张，消费更重性价比" delay="0ms" variant="accent">
            <ul className="text-sm space-y-2 list-disc pl-4">
              <li>
                2026年春节、五一出游人次分别升至
                <span className="font-bold text-webank-blue">5.96亿</span>
                和
                <span className="font-bold text-webank-blue">3.25亿</span>
                ，同比增长25.7%、10.2%；对应人均消费却分别降至
                <span className="font-bold text-webank-blue">1,348元</span>
                和
                <span className="font-bold text-webank-blue">571元</span>
                ，低于上年。
              </li>
              <li>
                十一假期也呈现相似变化：2026年人均消费
                <span className="font-bold text-webank-blue">894元</span>
                ，低于2025年的911元；出游人次虽较2024年增加，较2025年则回落。人次与消费金额并非同步上行，而人均支出连续回落，反映假日出游更强调控制预算、提升每笔支出的获得感。
              </li>
            </ul>
          </BaseCard>

          {/* 卡片2：二手交易扩容，平替成为默认选择 */}
          <BaseCard title="二手交易扩容，平替成为默认选择" delay="120ms">
            <p className="text-sm">
              二手交易：2025年交易额约1.69万亿元、+12.4%；二手车2026H1成交971.32万辆，6月单月首超乘用车零售，上半年与新车之比接近1:1——三年期二手车约为新车五折。
            </p>
            <p className="text-sm mt-1">
              平替经济：57.2%的消费者在质量功能相近时倾向平替，00后72.7%、90后69.3%，高出80后27.6和24.2个百分点（知萌2024）；美团“平替”搜索+26.4%、含“平替”到店商品供给+97.8%（2025）。
            </p>
            <p className="text-sm mt-1 text-webank-subtext">
              行为数据印证：82%的人愿意延长物品使用时间，69%选择修理而非丢弃；一半Z世代每2–3个月购买二手，性价比与循环消费意识持续增强。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域：两列 */}
        <div className="flex-1 grid grid-cols-2 gap-3 min-h-0">
          {/* 左列：合成图（出游人数柱 + 总花费柱 + 人均花费线） */}
          <ChartContainer delay="600ms" className="h-full min-h-0">
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
          <ChartContainer delay="840ms">
            <div className="flex flex-col h-full">
              <div className="mb-1.5">
                <h3 className="text-base font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
                  行为数据：性价比成消费显著增长点
                </h3>
                <p className="text-[12px] text-webank-subtext mt-0.5">
                  数据来源：贝恩×纽锐拓消费者调研（p15–16）
                </p>
              </div>
              <div className="flex-1 min-h-0 overflow-hidden">
                <table className="w-full h-full text-[12px] border-collapse">
                  <thead>
                    <tr className="bg-webank-blue/10 text-webank-blue">
                      <th className="border border-slate-200 px-1.5 py-1 text-left font-bold w-14">维度</th>
                      <th className="border border-slate-200 px-1.5 py-1 text-left font-bold">关键数据</th>
                      <th className="border border-slate-200 px-1.5 py-1 text-left font-bold w-16">解读</th>
                    </tr>
                  </thead>
                  <tbody className="text-webank-text">
                    <tr className="align-top">
                      <td className="border border-slate-200 px-1.5 py-1 font-semibold text-webank-accent">循环使用</td>
                      <td className="border border-slate-200 px-1.5 py-1">
                        <span className="font-bold text-webank-blue">82%</span> 更长时间使用物品再更换；
                        <span className="font-bold text-webank-blue">69%</span> 选择修理而非丢弃；
                        <span className="font-bold text-webank-blue">68%</span> 主动减少浪费
                      </td>
                      <td className="border border-slate-200 px-1.5 py-1">延长使用周期</td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-slate-200 px-1.5 py-1 font-semibold text-webank-accent">二手循环</td>
                      <td className="border border-slate-200 px-1.5 py-1">
                        <span className="font-bold text-webank-blue">30%</span> 购买二手服装、全品类超
                        <span className="font-bold text-webank-blue">20%</span>；近一半消费者"DIY化"了过去付费的服务（家政维修、理发、美容）
                      </td>
                      <td className="border border-slate-200 px-1.5 py-1">二手加速</td>
                    </tr>
                    <tr className="align-top">
                      <td className="border border-slate-200 px-1.5 py-1 font-semibold text-webank-accent">年轻人领先</td>
                      <td className="border border-slate-200 px-1.5 py-1">
                        一半 Z 世代在社交平台寻找 DIY 灵感（尤其关注省钱博主）；一半每
                        <span className="font-bold text-webank-blue">2–3</span> 个月购买二手
                      </td>
                      <td className="border border-slate-200 px-1.5 py-1">Z 世代引领</td>
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
