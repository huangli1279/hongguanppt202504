import React from 'react';
import { IndustryGdpGroupedBarChart } from './IndustryGdpGroupedBarChart';
import { industryGdpQuarterlyData } from '../data';
import { TrendingUp, Zap, Activity } from 'lucide-react';

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

export const SlideContentTwoPointFive: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-10 overflow-hidden relative">

      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-lightBlue"></div>

      {/* Header */}
      <header className="mb-4 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            新质生产力动能分析
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          <span className="text-webank-accent">装备制造业（+9.2%）和高技术制造业（+9.4%）</span>全年增速显著快于整体
        </h1>
      </header>

      {/* Top Insights Row */}
      <section className="grid grid-cols-3 gap-4 mb-4 h-28">
        <InsightBox title="信息与租赁服务业双位数高增" icon={Zap} delay="100ms">
          <p className="mb-1">在新质生产力核心动能带动下，信息服务业全年维持高增速（Q4:10.7%）；租赁和商务服务业四季度增长12.7%，主要得益于服务消费回暖和以金融、科技为代表的高端商务活动的强劲需求拉动。</p>
        </InsightBox>

        <InsightBox title="制造业稳健支撑" icon={Activity} delay="200ms">
           <p className="mb-1"><span className="font-bold text-webank-blue">制造业 (Q4: 5.1%)</span> 和 <span className="font-bold text-webank-blue">工业 (Q4: 5.0%)</span> 增速虽放缓但仍高于GDP整体 (4.5%)，体现工业生产韧性。</p>
        </InsightBox>

        <InsightBox title="房地产建筑拖累" icon={TrendingUp} delay="300ms">
           <p className="mb-1"><span className="font-bold text-red-500">建筑业 (Q4: -2.5%)</span> 和 <span className="font-bold text-red-500">房地产业 (Q4: -1.0%)</span> 增速为负，受房地产投资深度调整影响，对整体经济形成拖累。</p>
        </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow flex min-h-0 mb-2">

        {/* Grouped Bar Chart */}
        <div className="flex-1 bg-white border border-slate-100 p-2 pb-0 opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
           <IndustryGdpGroupedBarChart data={industryGdpQuarterlyData} />
        </div>

      </section>

       {/* Footer */}
      <footer className="border-t border-slate-200 pt-2 flex justify-between text-[10px] text-slate-400">
        <span>个金管理部-数据管理室</span>

      </footer>

      {/* Animation Styles */}
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
