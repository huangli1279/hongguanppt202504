
import React from 'react';
import { PpiTrendChart } from './PpiTrendChart';
import { CommodityIndexChart } from './CommodityIndexChart';
import { ppiTrendData, commodityIndexData } from '../data';
import { TrendingUp, ShieldCheck, Globe, Zap } from 'lucide-react';

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

export const SlideContentSeven: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            价格与通胀监测
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          PPI环比连续三个月上涨，<span className="text-webank-accent">大宗商品价格走势出现结构性分化</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-2 gap-6 mb-8 h-36">
         <InsightBox title="价格弹性边际修复" icon={TrendingUp} delay="100ms">
           <p>
             12月PPI环比上涨 <span className="font-bold">0.2%</span>，连续第3个月维持正增长，同比降幅收窄至 -1.9%。工业品价格通缩压力显著缓解，企业定价权逐步回归。
           </p>
         </InsightBox>

         <InsightBox title="大宗商品价格分化" icon={Globe} delay="300ms">
           <p>
             能源与钢铁指数震荡下行，反映国内建筑需求偏弱；有色类指数逆势走强，主要受全球供应偏紧及输入性因素驱动，大宗商品价格走势呈现明显的结构性分化特征。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <PpiTrendChart data={ppiTrendData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <CommodityIndexChart data={commodityIndexData} />
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
