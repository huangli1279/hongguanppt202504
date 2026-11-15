import React from 'react';
import { HeartPulse, Dumbbell, Watch } from 'lucide-react';
import { BaseContentSlide } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';

const FigureCard: React.FC<{ label: string; title: string; children: React.ReactNode }> = ({
  label,
  title,
  children,
}) => (
  <div className="bg-white border border-slate-200 rounded-lg flex flex-col min-h-0 overflow-hidden">
    <div className="px-2 pt-1.5 pb-1 border-b border-slate-100 shrink-0">
      <div className="text-[8px] text-slate-400 leading-none mb-0.5">{label}</div>
      <div className="text-[10px] font-semibold text-slate-700 leading-tight truncate">{title}</div>
    </div>
    <div className="flex-1 min-h-0 p-1.5 overflow-hidden">{children}</div>
  </div>
);

const healthGroups = [
  { name: '生活必需品', q2: 32, q3: 40, dot: 20 },
  { name: '身体健康', q2: 37, q3: 21, dot: 39 },
  { name: '个人爱好', q2: 5, q3: 10, dot: 19 },
];

const CHART_H = 92;
const h1 = (v: number) => `${(v / 50) * CHART_H}px`;

const consumeChange = [
  {
    label: '实际增加最多',
    bars: [
      { name: '医疗', v: 18.9, color: '#2f6db5' },
      { name: '住房', v: 16.3, color: '#b7ab94' },
    ],
  },
  {
    label: '实际减少最多',
    bars: [
      { name: '外出餐饮', v: 28.2, color: '#b7ab94' },
      { name: '文娱服务', v: 25.2, color: '#b7ab94' },
    ],
  },
];

const CHART_H2 = 88;
const h2 = (v: number) => `${(v / 30) * CHART_H2}px`;

export const ContentSlide42: React.FC = () => {
  return (
    <BaseContentSlide
      title={<>特点四：收缩周期下健康支出的刚性凸显</>}
      cardColumns={3}
    >
      <div className="flex flex-col h-full min-h-0">
        <div className="grid grid-cols-3 gap-4 flex-1 min-h-0 mb-2">
          {/* 左框：健康支出刚性 */}
          <BaseCard
            title="健康支出：各年龄段首要"
            icon={HeartPulse}
            variant="accent"
            className="h-full overflow-auto"
          >
            <div className="space-y-3 text-sm leading-relaxed">
              <p>
                健康支出为各年龄段的首要，特别是
                <span className="font-semibold text-webank-accent">Z世代</span>。
              </p>
              <p>
                北大汇丰调研中，26年Q2身体健康居「最愿意花钱领域」第一选择（
                <span className="font-semibold text-webank-accent">37%</span>），Q3仍以{' '}
                <span className="font-semibold text-webank-accent">39%</span> 稳居第二选择首位。
              </p>
              <div className="rounded-md bg-red-50/70 border-l-4 border-red-400 pl-3 py-2">
                <p className="font-semibold text-red-600 mb-1">收缩周期里的支出顺序</p>
                <p className="text-[12px] text-slate-600 leading-relaxed">
                  必需开支先被保障，居民先减少弹性消费，健康是最后退让的支出方向。
                </p>
              </div>
              <p className="text-[12px] text-slate-600 leading-relaxed">
                26年Q2在<span className="font-semibold text-webank-accent">医疗</span>增加消费最多；而在
                <span className="font-semibold text-red-500">外出餐饮、文娱服务</span>方面减少支出最多。
              </p>
            </div>
          </BaseCard>

          {/* 中框：三大细分赛道 */}
          <BaseCard
            title="三大健康消费赛道"
            icon={Dumbbell}
            variant="subtle"
            className="h-full overflow-auto"
          >
            <ol className="space-y-3 text-[13px] leading-relaxed text-slate-600">
              <li>
                <span className="font-bold text-webank-blue">1. 健身：</span>
                商业健身市场 2025 年 <span className="font-semibold text-webank-accent">3,827 亿</span>（
                <span className="font-semibold text-emerald-700">+34.2%</span>），Z世代成消费主力、月均轻中端支出{' '}
                <span className="font-semibold">300–500 元</span>，县域增速{' '}
                <span className="font-semibold text-emerald-700">40%</span>。
              </li>
              <li>
                <span className="font-bold text-webank-blue">2. 智能穿戴：</span>
                健康设备 <span className="font-semibold text-webank-accent">711 亿</span>（CAGR{' '}
                <span className="font-semibold">14.4%</span>），腕戴出货{' '}
                <span className="font-semibold">7,390 万台</span>（
                <span className="font-semibold text-emerald-700">+20.8%</span>）；
                <span className="font-semibold">45%</span> 为健康监测而买、国补{' '}
                <span className="font-semibold">15%</span>——技术让健康可测量。Z世代使用智能设备监测健康问题{' '}
                <span className="font-semibold text-webank-accent">75%</span>，
                <span className="font-semibold">26%</span> 的消费者使用 AI 处理健康问题（高于整体 22%）。
              </li>
              <li>
                <span className="font-bold text-webank-blue">3. 心理咨询/情绪：</span>
                心理咨询 <span className="font-semibold text-webank-accent">1,450 亿</span>（年均{' '}
                <span className="font-semibold text-emerald-700">+27%</span>）；Z世代{' '}
                <span className="font-semibold text-webank-accent">68.3%</span> 向 AI 倾诉。
              </li>
            </ol>
          </BaseCard>

          {/* 右框：技术让健康“可测量” */}
          <BaseCard
            title="技术让健康“可测量”"
            icon={Watch}
            variant="default"
            className="h-full overflow-auto"
          >
            <div className="space-y-2.5 text-[13px] leading-relaxed text-slate-600">
              <ul className="space-y-2">
                <li>
                  <span className="font-semibold text-webank-blue">实时测量：</span>
                  智能手表、连续血糖监测、健身手环让睡眠质量、血糖、营养摄入、心脏健康可实时测量。
                </li>
                <li>
                  <span className="font-semibold text-webank-blue">使用率：</span>
                  Z世代 <span className="font-semibold text-webank-accent">75%</span>、千禧一代{' '}
                  <span className="font-semibold text-webank-accent">73%</span> 使用此类工具（X世代 55%、婴儿潮 32%）。
                </li>
                <li>
                  <span className="font-semibold text-webank-blue">AI 处理健康问题：</span>
                  <span className="font-semibold text-webank-accent">22%</span> 的消费者用大语言模型处理健康问题（Z世代 26%）。
                </li>
                <li>
                  <span className="font-semibold text-webank-blue">行为改变：</span>
                  实时反馈可能更快带来行为改变：如看到饮酒后可穿戴设备“睡眠分”下降，可能减少再次饮酒。
                </li>
              </ul>
              <p className="text-[10px] text-gray-500 leading-snug border-t border-gray-200 pt-2">
                脚注：2024 调研中 59% 的婴儿潮一代向医生获取健康信息，Z世代仅 42%；38% 的 Z 世代转向社交媒体获取健康信息。
              </p>
            </div>
          </BaseCard>
        </div>

        {/* 底部：五图横向排列 */}
        <div className="grid grid-cols-5 gap-2 h-[250px] shrink-0">
          {/* 图1 双柱+圆点 */}
          <FigureCard label="图1" title="最愿意花钱的领域：第一选择 vs 第二选择">
            <div className="flex flex-col h-full">
              <div className="text-[7px] text-slate-400 leading-none mb-1 truncate">
                北大汇丰 2026Q2–Q3 市场信心调研 · %
              </div>
              <div className="flex-1 min-h-0 flex items-end justify-around gap-1">
                {healthGroups.map((g) => (
                  <div key={g.name} className="relative flex flex-1 h-full items-end justify-center gap-1">
                    <div className="flex flex-col items-center justify-end">
                      <span className="text-[8px] text-slate-600 leading-none mb-0.5">{g.q2}</span>
                      <div className="w-3.5 bg-[#a9c3e2]" style={{ height: h1(g.q2) }} />
                    </div>
                    <div className="flex flex-col items-center justify-end">
                      <span className="text-[8px] text-webank-blue font-semibold leading-none mb-0.5">{g.q3}</span>
                      <div className="w-3.5 bg-[#2e4a6b]" style={{ height: h1(g.q3) }} />
                    </div>
                    <div
                      className="absolute right-0 flex flex-col items-center"
                      style={{ bottom: h1(g.dot) }}
                    >
                      <span className="text-[8px] text-orange-500 font-semibold leading-none mb-0.5">{g.dot}</span>
                      <span className="w-1.5 h-1.5 rounded-full border border-orange-400 bg-white" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-around mt-0.5 border-t border-slate-200 pt-0.5">
                {healthGroups.map((g) => (
                  <span key={g.name} className="flex-1 text-center text-[8px] text-slate-700 leading-none truncate">
                    {g.name}
                  </span>
                ))}
              </div>
              <div className="flex justify-center gap-1.5 mt-1 text-[7px] text-slate-500 leading-none whitespace-nowrap">
                <span className="flex items-center gap-0.5">
                  <i className="w-1.5 h-1.5 bg-[#a9c3e2] inline-block" />第一选择·2026Q2
                </span>
                <span className="flex items-center gap-0.5">
                  <i className="w-1.5 h-1.5 bg-[#2e4a6b] inline-block" />第一选择·2026Q3
                </span>
                <span className="flex items-center gap-0.5">
                  <i className="w-1.5 h-1.5 rounded-full border border-orange-400 inline-block" />第二选择·2026Q3
                </span>
              </div>
              <p className="text-[6.5px] text-slate-400 leading-tight mt-1">
                注：柱表示「第一选择」占比；圆点为第二选择·2026Q3 占比（按真实数值定位，不连线）。
              </p>
            </div>
          </FigureCard>

          {/* 图2 分框柱状 */}
          <FigureCard label="图2" title="2026Q2 居民实际消费调整">
            <div className="flex flex-col h-full">
              <div className="text-[7px] text-slate-400 leading-none mb-1 truncate">
                厦大×蚂蚁《中国家庭财富与消费报告（2026Q2）》· %
              </div>
              <div className="flex-1 min-h-0 flex justify-around items-end gap-2">
                {consumeChange.map((grp) => (
                  <div key={grp.label} className="flex flex-col flex-1 min-w-0 justify-end">
                    <span className="text-[8px] text-slate-600 font-medium text-center leading-none mb-0.5 truncate">
                      {grp.label}
                    </span>
                    <div className="relative h-[88px] border border-[#41508f] rounded-[2px] px-1.5 flex items-end justify-around gap-1.5">
                      <div className="absolute inset-x-0 border-t border-dashed border-slate-300" style={{ top: '33%' }} />
                      <div className="absolute inset-x-0 border-t border-dashed border-slate-300" style={{ top: '66%' }} />
                      {grp.bars.map((b) => (
                        <div key={b.name} className="flex-1 flex justify-center">
                          <div
                            className="w-full max-w-[16px] flex justify-center"
                            style={{ height: h2(b.v), background: b.color }}
                          >
                            <span className="text-[6.5px] text-white leading-none mt-0.5">{b.v}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-around gap-1.5 mt-0.5">
                      {grp.bars.map((b) => (
                        <span key={b.name} className="flex-1 text-center text-[7.5px] text-slate-700 leading-none truncate">
                          {b.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-[6px] text-slate-400 leading-none mt-1 pl-0.5 pr-0.5">
                <span>0%</span>
                <span>10%</span>
                <span>20%</span>
                <span>30%</span>
              </div>
            </div>
          </FigureCard>

          {/* 图3 健身市场规模表 */}
          <FigureCard label="图3" title="商业健身市场规模（单位：亿元）">
            <div className="flex flex-col h-full text-[8px]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500">
                    <th className="text-left font-medium px-1 py-0.5 border-b border-slate-200">年份</th>
                    <th className="text-left font-medium px-1 py-0.5 border-b border-slate-200">规模</th>
                    <th className="text-left font-medium px-1 py-0.5 border-b border-slate-200">备注</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr>
                    <td className="px-1 py-1 border-b border-slate-100">2024</td>
                    <td className="px-1 py-1 border-b border-slate-100">2,851</td>
                    <td className="px-1 py-1 border-b border-slate-100 text-slate-500">实际（=3,827÷1.342）</td>
                  </tr>
                  <tr>
                    <td className="px-1 py-1 border-b border-slate-100">2025</td>
                    <td className="px-1 py-1 border-b border-slate-100 font-semibold">3,827</td>
                    <td className="px-1 py-1 border-b border-slate-100 text-slate-500">实际（+34.2%，较2024 +975亿）</td>
                  </tr>
                </tbody>
              </table>
              <ul className="mt-1.5 space-y-1 text-[7px] leading-snug text-slate-600">
                <li className="flex gap-1">
                  <span className="text-webank-blue leading-none">•</span>
                  <span>
                    托衬：人均年消费 <b>4,284 元（+32.3%）</b>；县域成交额增速 <b>40%</b>；Z世代（18–24 岁）成消费主力、月均轻中端 300–500 元。
                  </span>
                </li>
              </ul>
            </div>
          </FigureCard>

          {/* 图4 心理咨询规模表 */}
          <FigureCard label="图4" title="心理咨询行业规模（单位：亿元，宽口径）">
            <div className="flex flex-col h-full text-[7.5px]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500">
                    <th className="text-left font-medium px-1 py-[1px] border-b border-slate-200">年份</th>
                    <th className="text-left font-medium px-1 py-[1px] border-b border-slate-200">规模</th>
                    <th className="text-left font-medium px-1 py-[1px] border-b border-slate-200">备注</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr><td className="px-1 py-[1px] border-b border-slate-100">2020</td><td className="px-1 py-[1px] border-b border-slate-100">386</td><td className="px-1 py-[1px] border-b border-slate-100 text-slate-500">实际</td></tr>
                  <tr><td className="px-1 py-[1px] border-b border-slate-100">2021</td><td className="px-1 py-[1px] border-b border-slate-100">512</td><td className="px-1 py-[1px] border-b border-slate-100 text-slate-500">实际</td></tr>
                  <tr><td className="px-1 py-[1px] border-b border-slate-100">2022</td><td className="px-1 py-[1px] border-b border-slate-100">678</td><td className="px-1 py-[1px] border-b border-slate-100 text-slate-500">实际</td></tr>
                  <tr><td className="px-1 py-[1px] border-b border-slate-100">2023</td><td className="px-1 py-[1px] border-b border-slate-100">912</td><td className="px-1 py-[1px] border-b border-slate-100 text-slate-500">实际</td></tr>
                  <tr><td className="px-1 py-[1px] border-b border-slate-100">2024</td><td className="px-1 py-[1px] border-b border-slate-100">972</td><td className="px-1 py-[1px] border-b border-slate-100 text-slate-500">实际</td></tr>
                  <tr><td className="px-1 py-[1px] border-b border-slate-100">2025</td><td className="px-1 py-[1px] border-b border-slate-100 font-semibold">1,450</td><td className="px-1 py-[1px] border-b border-slate-100 text-slate-500">实际（宽口径）</td></tr>
                  <tr><td className="px-1 py-[1px] border-b border-slate-100">2026E</td><td className="px-1 py-[1px] border-b border-slate-100">1,800</td><td className="px-1 py-[1px] border-b border-slate-100 text-slate-500">预测</td></tr>
                  <tr><td className="px-1 py-[1px] border-b border-slate-100">2030E</td><td className="px-1 py-[1px] border-b border-slate-100">2,000</td><td className="px-1 py-[1px] border-b border-slate-100 text-slate-500">预测</td></tr>
                </tbody>
              </table>
              <ul className="mt-1 space-y-[2px] text-[7px] leading-snug text-slate-600">
                <li className="flex gap-1">
                  <span className="text-webank-blue leading-none">•</span>
                  <span>五年增幅约 <b>3.8 倍</b>；年均增速约 <b>27%</b>。</span>
                </li>
                <li className="flex gap-1">
                  <span className="text-webank-blue leading-none">•</span>
                  <span>托衬：Z世代占情绪经济 <b>77.5%</b>；<b>56.3%</b> 愿为情绪价值买单；<b>68.3%</b> 曾向 AI 倾诉。</span>
                </li>
              </ul>
            </div>
          </FigureCard>

          {/* 图5 智能穿戴规模表 */}
          <FigureCard label="图5" title="智能可穿戴健康设备（单位：亿元）">
            <div className="flex flex-col h-full text-[8px]">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500">
                    <th className="text-left font-medium px-1 py-0.5 border-b border-slate-200">年份</th>
                    <th className="text-left font-medium px-1 py-0.5 border-b border-slate-200">规模</th>
                    <th className="text-left font-medium px-1 py-0.5 border-b border-slate-200">备注</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr><td className="px-1 py-1 border-b border-slate-100">2020</td><td className="px-1 py-1 border-b border-slate-100">364</td><td className="px-1 py-1 border-b border-slate-100 text-slate-500">实际</td></tr>
                  <tr><td className="px-1 py-1 border-b border-slate-100">2025</td><td className="px-1 py-1 border-b border-slate-100 font-semibold">711</td><td className="px-1 py-1 border-b border-slate-100 text-slate-500">实际（2020–2025 CAGR 14.4%）</td></tr>
                  <tr><td className="px-1 py-1 border-b border-slate-100">2026E</td><td className="px-1 py-1 border-b border-slate-100">820</td><td className="px-1 py-1 border-b border-slate-100 text-slate-500">预测（约 817–826 亿）</td></tr>
                </tbody>
              </table>
              <ul className="mt-1.5 space-y-1 text-[7px] leading-snug text-slate-600">
                <li className="flex gap-1">
                  <span className="text-webank-blue leading-none">•</span>
                  <span>托衬指标：腕带设备出货 <b>7,390 万台（+20.8%）</b>；智能手表 5,061 万台（+17.2%）、手环 2,329 万台（+29.4%）。</span>
                </li>
                <li className="flex gap-1">
                  <span className="text-webank-blue leading-none">•</span>
                  <span><b>45.48%</b> 以「健康监测」为购买首因；2026 起智能手表/手环/眼镜享 <b>15%</b> 国补。</span>
                </li>
                <li className="flex gap-1">
                  <span className="text-webank-blue leading-none">•</span>
                  <span>来源：中商产业研究院、IDC《中国可穿戴设备市场季度跟踪报告》、艾媒咨询。</span>
                </li>
              </ul>
            </div>
          </FigureCard>
        </div>
      </div>
    </BaseContentSlide>
  );
};
