
import React from 'react';
import { IndustrialTrendChart } from './IndustrialTrendChart';
import { industrialTrendData } from '../data';
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

export const ContentSlide06: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            工业生产分析
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          Q4工业生产呈现“V型”修复，<span className="text-webank-accent">12月增速回升至5.2%受出口与高技术双轮驱动</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-3 gap-6 mb-8 h-32">
         <InsightBox title="总量运行：年末翘尾" icon={BarChart2} delay="100ms">
           <p>
             Q4增速呈<span className="font-bold">“先抑后扬”</span>，12月反弹至<span className="font-bold">5.2%</span>。全年增长<span className="font-bold">5.9%</span>，高于GDP增速(5.0%)。12月季调环比增长<span className="font-bold">0.49%</span>，边际动能增强。
           </p>
         </InsightBox>

         <InsightBox title="结构分化：新质生产力领跑" icon={Rocket} delay="200ms">
           <p>
             12月高技术制造业增长<span className="font-bold">11.0%</span>。电子(+11.8%)、汽车(+8.3%)领跑；集成电路(+33.7%)、机器人(+28.0%)爆发。传统行业如粗钢(-10.3%)、水泥(-6.6%)受限。
           </p>
         </InsightBox>

         <InsightBox title="驱动归因：外需拉动增强" icon={Anchor} delay="300ms">
           <p>
             12月出口交货值增长<span className="font-bold">3.2%</span>(前值-0.1%)，设备更新政策支撑装备制造业(全年+9.2%)，政策效应持续显现。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow flex justify-center min-h-0">
        <div className="bg-white rounded-sm w-full opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <IndustrialTrendChart data={industrialTrendData} />
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
