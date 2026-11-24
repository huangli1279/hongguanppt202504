import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { BaseBarChart } from '../base/BaseBarChart';
import { seriesColors } from '../../utils/chartColors';
import { formatThousands } from '@/utils/numberFormat';

const specialBondData = [
  { period: '2026-01', planned: 3221, actual: 3677, completion: 1.14 },
  { period: '2026-02', planned: 2691, actual: 4565, completion: 1.70 },
  { period: '2026-03', planned: 3349, actual: 3357, completion: 1.00 },
  { period: '2026-04', planned: 3073, actual: 1744, completion: 0.57 },
  { period: '2026-05', planned: 2764, actual: 1608, completion: 0.58 },
  { period: '2026-06', planned: 4300, actual: 5716, completion: 1.33 },
  { period: '2026-07', planned: 3276.57, actual: 3412, completion: 1.04 },
  { period: '2026-08', planned: 5617.42, actual: 5213, completion: 0.93 },
  { period: '2026-09', planned: 4121.88, actual: 6339, completion: 1.54 },
];

const specialBondCompositionData = [
  { period: '2026-01', special: 10, land: 5, other: 85, amount: 3677 },
  { period: '2026-02', special: 25, land: 0, other: 75, amount: 4565 },
  { period: '2026-03', special: 10, land: 21, other: 69, amount: 3357 },
  { period: '2026-04', special: 8, land: 24, other: 68, amount: 1744 },
  { period: '2026-05', special: 4, land: 23, other: 73, amount: 1608 },
  { period: '2026-06', special: 34, land: 11, other: 55, amount: 5716 },
  { period: '2026-07', special: 20, land: 46, other: 34, amount: 3412 },
  { period: '2026-08', special: 14, land: 47, other: 39, amount: 5213 },
  { period: '2026-09', special: 10, land: 29, other: 61, amount: 6339 },
];

export const ContentSlide18: React.FC = () => (
  <BaseContentSlide title="专项债提速，多元工具协同稳投资" cardColumns={2}>
    <div className="flex flex-col h-full">
      <div className="grid grid-cols-2 gap-4 mb-4 flex-shrink-0">
        <BaseCard title="三季度资金端明显加力" variant="accent" delay="0ms">
          <p>
            1—9月新增专项债发行<span className="font-semibold">3.56万亿元</span>、进度<span className="font-semibold">81%</span>，9月同比多增<span className="font-semibold">2,148亿元</span>，叠加特别国债、政策性金融工具等多元工具协同。但专项债中化债、土储等非直接投资类占比仍处高位（图2），“资金到位→实物工作量”的传导存在时滞，四季度仍需观察。
          </p>
        </BaseCard>
        <BaseCard title="多元工具协同稳投资" delay="120ms">
          <p>
            多元工具超长特别国债、新型政策性金融工具、PSL（抵押补充贷款）降息扩围、地方债结存限额等协同，助力稳投资。（图3）
          </p>
        </BaseCard>
      </div>
      <div className="flex-1 grid grid-cols-3 gap-4 min-h-0">
        <ChartContainer delay="600ms">
          <BaseBarChart
            data={specialBondData}
            title="图1 专项债发行计划与实际发行"
            subtitle="数据来源：公开资料整理 | 单位：亿元；完成率为实际发行/计划发行"
            bars={[
              { dataKey: 'planned', name: '计划发行', color: seriesColors[1] },
              { dataKey: 'actual', name: '实际发行额', color: seriesColors[3] },
            ]}
            lines={[{ dataKey: 'completion', name: '完成率', color: seriesColors[0], yAxisId: 'right', unit: '', dotsOnly: true }]}
            showYAxis={true}
            yAxisDomain={[0, 7000]}
            yAxisTickFormatter={(value) => formatThousands(Number(value))}
            showLineYAxis={true}
            lineAxisDomain={[0, 2.4]}
            lineYAxisWidth={34}
            lineYAxisTickFormatter={(value) => Number(value).toFixed(1)}
            showReferenceLine={false}
            legendOrder={['计划发行', '实际发行额', '完成率']}
            unit="亿元"
            lineUnit=""
            lineShowDot={true}
            showLabels={false}
            barSize={7}
            barGap={1}
            barCategoryGap="18%"
            xAxisAngle={-55}
            xAxisHeight={55}
            xAxisTickFontSize={9}
            xAxisTickFormatter={(value) => String(value).slice(2)}
          />
        </ChartContainer>
        <ChartContainer delay="720ms">
          <BaseBarChart
            data={specialBondCompositionData}
            title="图2 专项债资金投向结构"
            subtitle="备注：土地储备专项债用于收储土地，不直接计入当期固定资产投资；特殊新增专项债主要用于置换隐性债务及清欠。"
            bars={[
              { dataKey: 'special', name: '特殊新增专项债占比', color: seriesColors[3], stackId: 'stack' },
              { dataKey: 'land', name: '土地储备专项债占比', color: '#8CB27A', stackId: 'stack' },
              { dataKey: 'other', name: '其他', color: seriesColors[1], stackId: 'stack' },
            ]}
            lines={[{ dataKey: 'amount', name: '专项债金额', color: seriesColors[0], yAxisId: 'right', unit: '亿元', strokeWidth: 2 }]}
            yAxisDomain={[0, 105]}
            showYAxis={true}
            yAxisTickFormatter={(value) => `${value}%`}
            showLineYAxis={true}
            lineAxisDomain={[0, 7000]}
            lineYAxisWidth={36}
            lineUnit="亿元"
            lineYAxisTickFormatter={(value) => formatThousands(Number(value))}
            showReferenceLine={false}
            legendOrder={['特殊新增专项债占比', '土地储备专项债占比', '其他', '专项债金额']}
            unit="%"
            lineShowDot={true}
            showLabels={false}
            barSize={12}
            barCategoryGap="18%"
            xAxisAngle={-55}
            xAxisHeight={55}
            xAxisTickFontSize={9}
            xAxisTickFormatter={(value) => String(value).slice(2)}
          />
        </ChartContainer>
        <ChartContainer delay="840ms">
          <div className="w-full h-full flex flex-col">
            <div className="mb-4">
              <h3 className="text-sm font-bold text-webank-blue uppercase tracking-wide border-b border-slate-300 pb-1">
                图3 政策工具
              </h3>
              <p className="text-xs text-webank-subtext mt-1">数据来源：公开资料整理</p>
            </div>
            <div className="flex-grow min-h-0 overflow-hidden">
              <table className="w-full h-full text-[9px] leading-[1.1] border-collapse table-fixed">
                <colgroup>
                  <col className="w-[19%]" />
                  <col className="w-[21%]" />
                  <col className="w-[27%]" />
                  <col className="w-[33%]" />
                </colgroup>
                <thead>
                  <tr className="bg-webank-accent/10 text-webank-blue">
                    <th className="border border-slate-300 px-1 py-0.5 text-left font-bold">政策工具</th>
                    <th className="border border-slate-300 px-1 py-0.5 text-left font-bold">总规模</th>
                    <th className="border border-slate-300 px-1 py-0.5 text-left font-bold">资金投向 / 用途</th>
                    <th className="border border-slate-300 px-1 py-0.5 text-left font-bold">进度与时点</th>
                  </tr>
                </thead>
                <tbody className="text-webank-text align-top">
                  <tr className="even:bg-slate-50/70">
                    <td className="border border-slate-300 px-1 py-1 font-semibold text-webank-blue">
                      超长期特别国债
                      <div className="mt-0.5">（中央财政发行，市场认购）</div>
                    </td>
                    <td className="border border-slate-300 px-1 py-1 font-semibold tabular-nums">1.3万亿元</td>
                    <td className="border border-slate-300 px-1 py-1">
                      8,000亿→“两重”建设；<br />
                      2,500亿→消费品以旧换新；<br />
                      2,000亿→大规模设备更新
                    </td>
                    <td className="border border-slate-300 px-1 py-1">
                      4月24日开始，10月16日发行结束
                      <div className="mt-0.5 text-webank-subtext">二季度 5,720亿｜三季度 6,050亿｜四季度 1,230亿</div>
                    </td>
                  </tr>
                  <tr className="even:bg-slate-50/70">
                    <td className="border border-slate-300 px-1 py-1 font-semibold text-webank-blue">
                      新型政策性金融工具
                      <div className="mt-0.5">（政策性银行发债募资、财政贴息，为项目补充资本金）</div>
                    </td>
                    <td className="border border-slate-300 px-1 py-1 font-semibold tabular-nums">8,000亿元</td>
                    <td className="border border-slate-300 px-1 py-1">补充项目资本金</td>
                    <td className="border border-slate-300 px-1 py-1">
                      9月开闸 → 10月28日全部投放完毕
                      <div className="mt-0.5 text-webank-subtext">撬动项目总投资约11万亿元</div>
                    </td>
                  </tr>
                  <tr className="even:bg-slate-50/70">
                    <td className="border border-slate-300 px-1 py-1 font-semibold text-webank-blue">
                      PSL（抵押补充贷款）
                      <div className="mt-0.5">（央行给政策性银行供应“定向低息资金”）</div>
                    </td>
                    <td className="border border-slate-300 px-1 py-1 font-semibold">降息扩围</td>
                    <td className="border border-slate-300 px-1 py-1">“六张网”纳入支持范围</td>
                    <td className="border border-slate-300 px-1 py-1 text-webank-subtext">—</td>
                  </tr>
                  <tr className="even:bg-slate-50/70">
                    <td className="border border-slate-300 px-1 py-1 font-semibold text-webank-blue">
                      地方债结存限额
                      <div className="mt-0.5">（盘活前期未使用地方债额度）</div>
                    </td>
                    <td className="border border-slate-300 px-1 py-1 font-semibold tabular-nums">
                      5,500亿元
                      <div className="text-webank-subtext font-normal">（其中专项债2,500亿）</div>
                    </td>
                    <td className="border border-slate-300 px-1 py-1">可用作项目资本金</td>
                    <td className="border border-slate-300 px-1 py-1 text-webank-subtext">—</td>
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
