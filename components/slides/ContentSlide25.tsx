import React from 'react';
import { BaseContentSlide, ChartContainer } from '../layouts/BaseContentSlide';
import { BaseCard } from '../base/BaseCard';
import { UsExportTariffChart, TariffEventTimeline } from '../charts/UsExportTariffChart';

const keyRegionExportGrowth = [
  { name: '俄罗斯', value: 41.54 },
  { name: '东盟', value: 40.05 },
  { name: '美国', value: 30.03 },
  { name: '非洲', value: 21.35 },
  { name: '欧盟', value: 15.71 },
  { name: '日本', value: 12.72 },
];

const KeyRegionExportChart: React.FC = () => (
  <div className="h-full flex flex-col min-h-0 overflow-hidden border border-webank-line/60 rounded-card bg-white p-2.5">
    <div className="mb-2 flex-shrink-0">
      <h3 className="text-sm font-bold text-webank-blue border-b border-slate-300 pb-1">
        三季度重点地区出口增速
      </h3>
      <p className="text-[10px] text-webank-subtext mt-1">三季度同比｜单位：%</p>
    </div>
    <div className="flex-1 min-h-0 flex flex-col justify-around">
      {keyRegionExportGrowth.map(({ name, value }) => (
        <div key={name} className="grid grid-cols-[2.5rem_minmax(0,1fr)_2.7rem] items-center gap-1.5">
          <span className="text-[10px] text-slate-600">{name}</span>
          <div className="h-3 bg-slate-100 rounded-sm overflow-hidden">
            <div className="h-full bg-[#005c8f]/80 rounded-sm" style={{ width: `${(value / 45) * 100}%` }} />
          </div>
          <span className="text-[10px] text-red-600 font-semibold tabular-nums text-right">{value.toFixed(2)}%</span>
        </div>
      ))}
    </div>
  </div>
);

export const ContentSlide25: React.FC = () => {
  return (
    <BaseContentSlide
      title="三季度出口地区结构：市场多元与中美关系缓和"
      cardColumns={3}
      chartColumns={2}
    >
      <div className="flex flex-col h-full">
        {/* 卡片区域 */}
        <div className="grid grid-cols-3 gap-3 mb-4 flex-shrink-0">
          <BaseCard title="三季度出口增速回升" delay="0ms" variant="accent">
            <p className="text-sm leading-snug">
              分地区看，9月对东盟<span className="text-red-500 font-semibold">+52.3%</span>、欧盟
              +25.3%、非洲
              +16.1%、拉美+24.7%，俄罗斯
              <span className="text-red-500 font-semibold">+51.1%</span>，三季度均维持高增；美国8月
              <span className="text-red-500 font-semibold">+34.4%</span>，9月
              <span className="text-red-500 font-semibold">+39.6%</span>均有所回暖，中美谈判成效凸显。
            </p>
          </BaseCard>
          <BaseCard title="出口份额向多元市场调整" delay="120ms">
            <p className="text-sm leading-snug">
              三季度（7—9月）共建“一带一路”国家出口占比为
              <span className="text-red-500 font-semibold">51.6%</span>，较上半年提高
              0.9个百分点；美国三季度占比升至
              <span className="text-red-500 font-semibold">10.6%</span>，较一季度的
              9.9%有所回升。
            </p>
          </BaseCard>
          <BaseCard title="对美出口增长" delay="240ms">
            <p className="text-sm leading-snug">
              三季度中美经贸磋商取得阶段性进展，对美出口同比增长
              <span className="text-red-500 font-semibold">30.03%</span>。
            </p>
          </BaseCard>
        </div>

        {/* 图表区域 */}
        <div className="flex-1 grid grid-cols-[180px_minmax(0,1fr)_336px] gap-4 min-h-0">
          <KeyRegionExportChart />
          <ChartContainer
            delay="480ms"
            className="min-w-0 min-h-0"
            ariaLabel="2025年1月至2026年9月美国自华进口（中国对美出口）同比增速及中美关税战关键节点"
          >
            <UsExportTariffChart />
          </ChartContainer>
          <ChartContainer delay="600ms" className="min-w-0 min-h-0">
            <TariffEventTimeline />
          </ChartContainer>
        </div>
      </div>
    </BaseContentSlide>
  );
};
