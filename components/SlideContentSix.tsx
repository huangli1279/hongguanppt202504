
import React from 'react';
import { ProfitBridgeChart } from './ProfitBridgeChart';
import { InventoryCycleChart } from './InventoryCycleChart';
import { profitBridgeData, inventoryCycleData } from '../data';
import { TrendingDown, BarChart4, Archive, Clock } from 'lucide-react';

const InsightBox = ({ title, children, icon: Icon, delay, alert }: { title: string, children?: React.ReactNode, icon: any, delay: string, alert?: boolean }) => (
  <div className={`flex flex-col h-full p-5 bg-slate-50 border-t-4 ${alert ? 'border-red-500' : 'border-mckinsey-blue'} opacity-0 animate-fade-in-up fill-mode-forwards`} style={{ animationDelay: delay }}>
    <div className={`flex items-center gap-2 mb-3 ${alert ? 'text-red-600' : 'text-mckinsey-blue'}`}>
      <Icon size={20} />
      <h4 className="font-bold text-sm uppercase">{title}</h4>
    </div>
    <div className="text-xs text-mckinsey-text leading-relaxed">
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
          <span className="text-xs font-bold text-mckinsey-subtext uppercase tracking-widest">
            企业效益监测
          </span>
          <span className="text-xs text-slate-400">
             数据来源：国家统计局
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-mckinsey-blue leading-tight w-11/12">
          11月工企利润因投资收益基数重挫13.1%，<br/>
          <span className="text-mckinsey-subtext">剔除后实际经营效益呈“弱修复”</span>
        </h1>
      </header>

      {/* Insight Grid */}
      <section className="grid grid-cols-3 gap-6 mb-8 h-40">
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

         <InsightBox title="现金流压力犹存" icon={Clock} delay="300ms">
           <p>
             应收账款回收期升至 <span className="font-bold">70.4天</span> (+3.7天)。产成品存货周转天数增加0.7天。企业回款变慢，资金周转效率仍待提升。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <ProfitBridgeChart data={profitBridgeData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <InventoryCycleChart data={inventoryCycleData} />
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-4 left-12 right-12 border-t border-slate-200 pt-2 flex justify-between text-[10px] text-slate-400">
        <span>McKinsey Global Institute Analysis</span>
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
