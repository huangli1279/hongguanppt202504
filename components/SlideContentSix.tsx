
import React from 'react';
import { IndustrialFinancialTable } from './IndustrialFinancialTable';
import { industrialFinancialTableData } from '../data';
import { TrendingDown, BarChart4 } from 'lucide-react';

const InsightBox = ({ title, children, icon: Icon, delay, alert }: { title: string, children?: React.ReactNode, icon: any, delay: string, alert?: boolean }) => (
  <div className={`flex flex-col h-full p-5 bg-slate-50 border-t-4 ${alert ? 'border-red-500' : 'border-webank-blue'} opacity-0 animate-fade-in-up fill-mode-forwards`} style={{ animationDelay: delay }}>
    <div className={`flex items-center gap-2 mb-3 ${alert ? 'text-red-600' : 'text-webank-blue'}`}>
      <Icon size={20} />
      <h4 className="font-bold text-sm uppercase">{title}</h4>
    </div>
    <div className="text-xs text-webank-text leading-relaxed">
      {children}
    </div>
  </div>
);

export const SlideContentSix: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-slate-800"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            企业效益监测
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          11月工企利润因投资收益基数重挫13.1%，<span className="text-webank-subtext">剔除后实际经营效益呈"弱修复"</span>
        </h1>
      </header>

      {/* Insight Grid */}
      <section className="grid grid-cols-2 gap-6 mb-8 h-40 max-w-4xl mx-auto w-full">
         <InsightBox title="利润读数剧烈波动" icon={TrendingDown} alert={true} delay="100ms">
           <p>
             11月规上工业企业利润同比 <span className="font-bold">下降 13.1%</span>，降幅较10月大幅扩大（-5.5%）。全年累计增速收窄至0.1%，主要受非经营性因素扰动。
           </p>
         </InsightBox>

         <InsightBox title="核心归因：投资收益错位" icon={BarChart4} delay="200ms">
           <p>
             前期股市上涨带来的高基数导致“其他损益”贡献大幅转负。若剔除此因素，<span className="font-bold">实际经营利润增速为 -6.7%</span>，较上月回升5.1个百分点，内生获利能力边际改善。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow flex justify-center min-h-0 mb-10">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards w-full max-w-4xl" style={{ animationDelay: '500ms' }}>
          <IndustrialFinancialTable data={industrialFinancialTableData} />
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
