
import React from 'react';
import { PpiIndustryMomTable } from './PpiIndustryMomTable';
import { ppiIndustryMomData } from '../data';
import { TrendingUp, ShieldCheck, Globe } from 'lucide-react';

const InsightBox = ({ title, children, icon: Icon, delay }: { title: string, children?: React.ReactNode, icon: any, delay: string }) => (
  <div className="flex flex-col h-full p-4 bg-slate-50 border-t-2 border-webank-blue opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: delay }}>
    <div className="flex items-center gap-2 mb-2 text-webank-blue">
      <Icon size={16} className="text-webank-accent"/>
      <h4 className="font-bold text-[11px] uppercase">{title}</h4>
    </div>
    <div className="text-[11px] text-webank-text leading-relaxed">
      {children}
    </div>
  </div>
);

export const SlideContentSevenPointFive: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue"></div>

      {/* Header */}
      <header className="mb-4 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            PPI分行业环比详细分析
          </span>
        </div>
        <h1 className="text-[28px] font-serif font-bold text-webank-blue leading-tight">
          PPI分行业环比数据揭示价格结构性分化，<span className="text-webank-accent">政策效果与市场因素交织</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-3 gap-4 mb-5 h-32">
         <InsightBox title="反内卷政策显效" icon={ShieldCheck} delay="100ms">
           <p>
             重点行业产能治理与市场秩序整治成效显现。<span className="font-bold">锂离子电池</span>（环比+1.0%）、<span className="font-bold">水泥制造</span>（环比+0.5%）价格均连续3个月上涨。新能源车整车制造价格<span className="font-bold">由降转涨</span>（环比+0.1%），恶性价格战得到初步遏制。光伏产业链：10月光伏设备及元器件价格环比上涨0.6%，行业供需关系边际改善。
           </p>
         </InsightBox>

         <InsightBox title="输入性与季节性因素" icon={Globe} delay="200ms">
           <p>
             <span className="font-bold">输入性上涨：</span>受国际铜价上涨带动，12月国内有色金属冶炼和压延加工业价格环比上涨2.8%。<br/><span className="font-bold">季节性支撑：</span>迎峰度冬带动煤炭开采和洗选业价格环比上涨1.3%。
           </p>
         </InsightBox>

         <InsightBox title="结构分化明显" icon={TrendingUp} delay="300ms">
           <p>
             新兴产业（锂电池、光伏、电气机械）价格波动大，但整体呈上涨趋势。传统行业（煤炭、金属矿采选）受国际大宗商品和季节性因素影响显著。计算机通信行业保持稳定，显示高科技制造需求韧性。
           </p>
         </InsightBox>
      </section>

      {/* Chart Section */}
      <section className="flex-grow min-h-0 opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
        <div className="bg-white rounded-sm h-full">
          <PpiIndustryMomTable data={ppiIndustryMomData} />
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
