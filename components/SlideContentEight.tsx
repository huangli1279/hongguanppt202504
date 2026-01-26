
import React from 'react';
import { RetailTrendChart } from './RetailTrendChart';
import { UrbanRuralChart } from './UrbanRuralChart';
import { retailTrendData, urbanRuralData } from '../data';
import { TrendingDown, CalendarClock, Map, ShoppingBag } from 'lucide-react';

const InsightBox = ({ title, children, icon: Icon, delay, alert }: { title: string, children?: React.ReactNode, icon: any, delay: string, alert?: boolean }) => (
  <div className={`flex flex-col h-full p-4 bg-slate-50 border-t-2 ${alert ? 'border-red-500' : 'border-webank-blue'} opacity-0 animate-fade-in-up fill-mode-forwards`} style={{ animationDelay: delay }}>
    <div className={`flex items-center gap-2 mb-2 ${alert ? 'text-red-600' : 'text-webank-blue'}`}>
      <Icon size={18} className={alert ? "" : "text-webank-accent"}/>
      <h4 className="font-bold text-sm uppercase">{title}</h4>
    </div>
    <div className="text-xs text-webank-text leading-relaxed">
      {children}
    </div>
  </div>
);

export const SlideContentEight: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            消费市场监测
          </span>
          <span className="text-xs text-slate-400">
             数据来源：国家统计局
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight w-11/12">
          Q4社零增速受“双十一”错位与高基数拖累滑落至0.9%，<br/>
          <span className="text-webank-subtext">内需修复斜率放缓</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-3 gap-6 mb-8 h-36">
         <InsightBox title="总量特征：前高后低" icon={TrendingDown} alert={true} delay="100ms">
           <p>
             全年增长 <span className="font-bold">3.7%</span>。Q4单月增速逐月下滑：10月（2.9%）-{'>'} 11月（1.3%）-{'>'} 12月（0.9%）。12月环比下降0.12%，复苏动能暂时性走弱。
           </p>
         </InsightBox>

         <InsightBox title="核心扰动：促销错位" icon={CalendarClock} delay="200ms">
           <p>
             <span className="font-bold">双十一提前</span>：2025年大促提前至10月上旬，严重透支11-12月消费潜力。叠加2024年同期因刺激政策形成的高基数，压制了Q4读数表现。
           </p>
         </InsightBox>

         <InsightBox title="结构分化：乡村领跑" icon={Map} delay="300ms">
           <p>
             乡村市场韧性显著强于城镇。12月乡村零售额增长 <span className="font-bold">1.7%</span>，远高于城镇的 <span className="font-bold">0.7%</span>。下沉市场成为消费增长的重要稳定器。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <RetailTrendChart data={retailTrendData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <UrbanRuralChart data={urbanRuralData} />
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-4 left-12 right-12 border-t border-slate-200 pt-2 flex justify-between text-[10px] text-slate-400">
        <span>个金管理部-数据管理室</span>
        <span>CONFIDENTIAL - INTERNAL USE ONLY</span>
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
