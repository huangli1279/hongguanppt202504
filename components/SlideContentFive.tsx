
import React from 'react';
import { IndustrialTrendChart } from './IndustrialTrendChart';
import { KeyIndustryComparisonChart } from './KeyIndustryComparisonChart';
import { industrialTrendData, keyIndustryData } from '../data';
import { Rocket, Anchor, AlertCircle, BarChart2 } from 'lucide-react';

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

export const SlideContentFive: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            工业生产分析：动能切换
          </span>
          <span className="text-xs text-slate-400">
             数据来源：国家统计局
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight w-4/5">
          Q4工业增加值增速回升至5.2%，<br/>
          <span className="text-webank-accent">装备与高技术制造业维持全年高增</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-3 gap-6 mb-8 h-32">
         <InsightBox title="总量运行轨迹" icon={BarChart2} delay="100ms">
           <p>
             全年规上工业增加值增长 <span className="font-bold">5.9%</span>。Q4呈现回升态势：10-11月分别为4.9%和4.8%，12月在政策带动下显著回升至 <span className="font-bold">5.2%</span>。
           </p>
         </InsightBox>

         <InsightBox title="新动能：双引擎驱动" icon={Rocket} delay="200ms">
           <p>
             <span className="font-bold">装备制造业</span> 11月贡献率近60%，12月加速至9.2%。<br/>
             <span className="font-bold">高技术制造业</span> 领跑 (+9.4%)。集成电路 (+33.7%) 与工业机器人 (+29.2%) 产量爆发式增长。
           </p>
         </InsightBox>

         <InsightBox title="传统动能：深度调整" icon={Anchor} delay="300ms">
           <p>
             受房地产新开工低迷及“反内卷”限产双重挤压，<span className="font-bold text-red-600">水泥、玻璃等非金属制品业</span> 持续负增长；黑色金属冶炼（钢铁）增速受压 (-1.8%)。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <IndustrialTrendChart data={industrialTrendData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <KeyIndustryComparisonChart data={keyIndustryData} />
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
