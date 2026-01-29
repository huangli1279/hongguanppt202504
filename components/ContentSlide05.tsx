import React from 'react';
import { IndustryGrowthChart } from './IndustryGrowthChart';
import { ThreeYearContributionChart } from './ThreeYearContributionChart';
import { industryGrowthData, threeYearContributionData } from '../data';
import { TrendingUp, Activity, AlertTriangle } from 'lucide-react';

const InsightBox = ({ title, children, icon: Icon, delay }: { title: string, children?: React.ReactNode, icon: any, delay: string }) => (
  <div className="flex flex-col h-full p-4 bg-slate-50 border-t-2 border-webank-blue opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: delay }}>
    <div className="flex items-center gap-2 mb-2">
      <Icon size={16} className="text-webank-accent" />
      <h4 className="font-bold text-webank-blue text-sm uppercase">{title}</h4>
    </div>
    <div className="text-xs text-webank-text leading-relaxed">
      {children}
    </div>
  </div>
);

export const ContentSlide05: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-lightBlue"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            结构性分析：产业分化
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          第三产业Q4增长5.2%支撑稳健，<span className="text-webank-accent">工业受建筑业拖累放缓</span>
        </h1>
      </header>

      {/* Top Insights Row */}
      <section className="grid grid-cols-2 gap-6 mb-6 h-32">
        <InsightBox title="三产拉动分化" icon={Activity} delay="100ms">
          <p className="mb-1"><span className="font-bold text-webank-accent">第三产业 (5.2%)</span>: 核心支撑。信息技术 (+11.1%) 与租赁商务服务 (+10.3%) 领跑，现代服务业增势强劲。</p>
        </InsightBox>

        <InsightBox title="第二产业明显回落" icon={AlertTriangle} delay="200ms">
           <p className="mb-1"><span className="font-bold text-red-500">第二产业 (3.4%)</span>: 虽然12月工业回升，但受房地产投资深跌 (-17.2%) 影响，建筑业及上游原材料严重拖累整体表现。</p>
        </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-4 min-h-0">

        {/* Industry Growth Chart - Left side */}
        <div className="bg-white border border-slate-100 p-2 opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
           <IndustryGrowthChart data={industryGrowthData} />
        </div>

        {/* Three Year Contribution Chart - Right side */}
        <div className="bg-white border border-slate-100 p-2 opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '700ms' }}>
          <ThreeYearContributionChart data={threeYearContributionData} />
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