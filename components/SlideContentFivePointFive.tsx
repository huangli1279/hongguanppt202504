
import React from 'react';
import { IndustryGrowthTableChart } from './IndustryGrowthTableChart';
import { industryDivergenceTableData } from '../data';
import { Rocket, TrendingDown, Wrench } from 'lucide-react';

const InsightBox = ({ title, children, icon: Icon, delay }: { title: string, children?: React.ReactNode, icon: any, delay: string }) => (
  <div className="flex flex-col h-full p-4 bg-slate-50 border-t-2 border-webank-blue opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: delay }}>
    <div className="flex items-center gap-2 mb-2 text-webank-blue">
      <Icon size={18} className="text-webank-accent"/>
      <h4 className="font-bold text-sm uppercase">{title}</h4>
    </div>
    <div className="text-xs text-webank-text leading-relaxed">
      {children}
    </div>
  </div>
);

export const SlideContentFivePointFive: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue"></div>

      {/* Header */}
      <header className="mb-3 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            新旧动能分化分析
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          工业分化加剧：<span className="text-webank-accent">装备制造与高技术领跑，传统行业拖累明显</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-3 gap-4 mb-12 min-h-[120px]">
         <InsightBox title="装备制造：强支撑" icon={Wrench} delay="100ms">
          <p>
            12月装备制造业增长<span className="font-bold text-green-600">7.6%</span>，全年保持稳健。电气机械<span className="font-bold">(+11.8%)</span>、铁路船舶<span className="font-bold">(+11.8%)</span>等细分行业领跑。
          </p>
        </InsightBox>

        <InsightBox title="汽车制造：新引擎" icon={Rocket} delay="200ms">
          <p>
            12月汽车制造业增加值增长<span className="font-bold">4.3%</span>，虽较前期回落但仍具韧性。高技术制造整体受部分权重行业波动影响，12月同比为<span className="font-bold text-red-600">-2.8%</span>。
          </p>
        </InsightBox>

        <InsightBox title="传统行业：分化态势" icon={TrendingDown} delay="300ms">
          <p>
            煤炭、有色等资源类行业保持稳定；<span className="font-bold text-red-600">医药制造业(-2.4%)、橡胶和塑料制品业(-1.8%)</span>在年末出现阶段性承压，行业间分化进一步加剧。
          </p>
        </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow flex justify-center min-h-0 pb-8">
        <div className="bg-white rounded-sm w-full h-full opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <IndustryGrowthTableChart data={industryDivergenceTableData} />
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-4 left-12 right-12 border-t border-slate-200 pt-2 flex justify-between text-[10px] text-slate-400">
        <span>个金管理部-数据管理室</span>
        
      </footer>

      {/* Animation Styles Reuse */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .fill-mode-forwards { animation-fill-mode: forwards; }
      `}</style>
    </div>
  );
};
