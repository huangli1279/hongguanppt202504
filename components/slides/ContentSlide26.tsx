import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { IndustryProsperityScatterChart } from '../charts/IndustryProsperityScatterChart';

export const ContentSlide26: React.FC = () => {
  return (
    <BaseContentSlide
      title={
        <>
          <span className="text-webank-blue font-bold">行业景气变化追踪：</span>
            <span className="text-webank-blue">分化延续，上游资源与AI链景气延续，消费轻工持续低迷</span>
        </>
      }
      headerClassName="!mb-4"
    >
      {/* 右上角专栏书签 — 仅保留“行业总结”标志；顶部留出间距，避免与导出时叠加的右上角机构标志重叠 */}
      <div className="absolute top-[56px] right-0 z-20">
        <div className="[clip-path:polygon(0_0,100%_0,100%_100%,50%_78%,0_100%)] bg-gradient-to-b from-webank-darkBlue via-webank-blue to-webank-midBlue px-6 pt-3 pb-6 text-center drop-shadow-[0_6px_16px_rgba(5,28,44,0.32)]">
          <span className="block text-[15px] font-semibold leading-none tracking-[0.3em] pl-[0.3em] text-white">
            行业总结
          </span>
          <span className="mt-1 block text-[8px] font-medium leading-none tracking-[0.2em] pl-[0.2em] text-white/65">
            INDUSTRY
          </span>
        </div>
      </div>

      <div className="h-full min-h-0 grid grid-cols-[1.6fr_1fr] gap-3">
          <ChartContainer delay="400ms" className="min-h-0">
            <IndustryProsperityScatterChart />
          </ChartContainer>

          <div className="flex flex-col gap-2 min-h-0 pt-8">
          <div className="flex-shrink-0">
            <BaseCard title="行业总结" delay="0ms" variant="accent" className="!p-2.5 gap-0.5">
              <p className="text-xs leading-snug">
                6→9月景气分化延续：新经济端电子、仪器仪表、电气机械受出口与算力需求支撑，叠加油气、煤炭量价齐升，景气领跑；旧经济端地产链（家具、木材、非金属矿）与黑色冶炼持续低迷，中下游普遍“量增利薄”。
              </p>
            </BaseCard>
          </div>

          <div className="flex-shrink-0 min-h-0">
            <BaseCard title="行业变化" delay="600ms" variant="accent" className="!p-2.5 gap-1">
              <div className="flex flex-col gap-2">
                <p className="text-[12px] leading-snug text-slate-600">按照两月景气分变动大于13.1(备注)作为显著波动行业标准，总结景气上升、下降行业驱动共性</p>
                <table className="w-full table-fixed border-collapse text-[11px] leading-tight text-slate-700">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800">
                      <th className="w-[28%] border border-slate-400 px-1 py-1 text-left font-semibold">上升行业</th>
                      <th className="w-[22%] border border-slate-400 px-1 py-1 font-semibold">6→9月</th>
                      <th className="w-[16%] border border-slate-400 px-1 py-1 font-semibold">档位</th>
                      <th className="w-[34%] border border-slate-400 px-1 py-1 font-semibold">驱动</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-1 py-1">仪器仪表</td>
                      <td className="border border-slate-300 px-1 py-1 text-center tabular-nums">47.9→71.2</td>
                      <td className="border border-slate-300 px-1 py-1 text-center">中→高</td>
                      <td rowSpan={4} className="border border-slate-300 px-1 py-1 align-middle">①出口是第一驱动<br />②价格上升，利润增速高位<br />③固投持续改善</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-1 py-1">石油天然气开采</td>
                      <td className="border border-slate-300 px-1 py-1 text-center tabular-nums">74.7→94.9</td>
                      <td className="border border-slate-300 px-1 py-1 text-center">高→高</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-1 py-1">化学纤维</td>
                      <td className="border border-slate-300 px-1 py-1 text-center tabular-nums">39.7→56.3</td>
                      <td className="border border-slate-300 px-1 py-1 text-center">低→中</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-1 py-1">纺织服装</td>
                      <td className="border border-slate-300 px-1 py-1 text-center tabular-nums">40.8→55.3</td>
                      <td className="border border-slate-300 px-1 py-1 text-center">中→中</td>
                    </tr>
                  </tbody>
                </table>
                <table className="w-full table-fixed border-collapse text-[11px] leading-tight text-slate-700">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800">
                      <th className="w-[28%] border border-slate-400 px-1 py-1 text-left font-semibold">下降行业</th>
                      <th className="w-[22%] border border-slate-400 px-1 py-1 font-semibold">6→9月</th>
                      <th className="w-[16%] border border-slate-400 px-1 py-1 font-semibold">档位</th>
                      <th className="w-[34%] border border-slate-400 px-1 py-1 font-semibold">驱动</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-slate-300 px-1 py-1">铁路船舶航空航天</td>
                      <td className="border border-slate-300 px-1 py-1 text-center tabular-nums">56.7→35.6</td>
                      <td className="border border-slate-300 px-1 py-1 text-center">中→低</td>
                      <td rowSpan={5} className="border border-slate-300 px-1 py-1 align-middle">①利润增速遭遇下降或转负<br />②涨价红利消退<br />③工增回落</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-1 py-1">食品制造</td>
                      <td className="border border-slate-300 px-1 py-1 text-center tabular-nums">66.2→49.3</td>
                      <td className="border border-slate-300 px-1 py-1 text-center">高→中</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-1 py-1">黑色金属矿采选</td>
                      <td className="border border-slate-300 px-1 py-1 text-center tabular-nums">41.4→25.4</td>
                      <td className="border border-slate-300 px-1 py-1 text-center">中→低</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-1 py-1">水的生产供应</td>
                      <td className="border border-slate-300 px-1 py-1 text-center tabular-nums">38.4→22.5</td>
                      <td className="border border-slate-300 px-1 py-1 text-center">低→低</td>
                    </tr>
                    <tr>
                      <td className="border border-slate-300 px-1 py-1">橡胶塑料</td>
                      <td className="border border-slate-300 px-1 py-1 text-center tabular-nums">56.5→41.4</td>
                      <td className="border border-slate-300 px-1 py-1 text-center">中→中</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-[9px] leading-snug text-slate-500">注:按3个月分数变化幅度的前25%大波动计为显著异动，切分线为13.1分。</p>
              </div>
            </BaseCard>
          </div>
          </div>
      </div>
    </BaseContentSlide>
  );
};
