
import React from 'react';
import { PmiTrendChart } from './PmiTrendChart';
import { PmiSizeLineChart } from './PmiSizeLineChart';
import { pmiTrendData, pmiSizeTrendData } from '../data';
import { TrendingUp, Layers, Zap, ShoppingBag } from 'lucide-react';

const InsightBox = ({ title, children, icon: Icon, delay }: { title: string, children?: React.ReactNode, icon: any, delay: string }) => (
  <div className="flex flex-col h-full p-4 bg-slate-50 border-l-4 border-webank-blue hover:border-webank-lightBlue transition-all duration-500 opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: delay }}>
    <div className="flex items-center gap-2 mb-2 text-webank-blue">
      <Icon size={18} />
      <h4 className="font-bold text-sm uppercase">{title}</h4>
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
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-accent"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            制造业景气度监测
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          12月制造业PMI录得50.1%实现景气反转，<span className="text-webank-lightBlue">政策发力与"抢出口"效应驱动产需双升</span>
        </h1>
      </header>

      {/* Top Insights Grid */}
      <section className="grid grid-cols-3 gap-6 mb-8 h-36">
        <InsightBox title="景气度反转" icon={TrendingUp} delay="100ms">
          <p>
            12月PMI升至 <span className="font-bold">50.1%</span> (+0.9pct)，为4月以来首次扩张。超出市场预期 (49.2%)，显示稳增长政策效果集中显现。
          </p>
        </InsightBox>
        
        <InsightBox title="供需同步改善" icon={Zap} delay="200ms">
           <p>
            <span className="font-bold">生产指数 (51.7%)</span> 创近期新高；受海外节假日、关税预期下的“抢出口”及春节错位赶工影响，<span className="font-bold">新订单指数 (50.8%)</span> 重回荣枯线以上，外需短期韧性超预期，供需缺口收窄。
           </p>
        </InsightBox>

         <InsightBox title="结构明显分化" icon={Layers} delay="300ms">
           <p>
            <span className="font-bold">大型企业 (50.8%)</span> 受益于“两重”资金落地领跑；小型企业 (48.6%) 虽有回升但仍处收缩。高技术制造业 (52.5%) 持续高景气。
           </p>
        </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-8 min-h-0">
         {/* Left Chart: Trend */}
         <div className="col-span-1 bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
            <PmiTrendChart data={pmiTrendData} />
         </div>
         {/* Right Chart: Size Breakdown */}
         <div className="col-span-1 bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '700ms' }}>
            <PmiSizeLineChart data={pmiSizeTrendData} />
         </div>
      </section>

       {/* Footer */}
      <footer className="absolute bottom-4 left-12 right-12 border-t border-slate-200 pt-2 flex justify-between text-[10px] text-slate-400">
        <span>个金管理部-数据管理室</span>
        
      </footer>

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
