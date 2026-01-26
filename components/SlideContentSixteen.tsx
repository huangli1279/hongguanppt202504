

import React from 'react';
import { TradeTrendChart } from './TradeTrendChart';
import { TradeSurplusChart } from './TradeSurplusChart';
import { tradeTrendData, tradeSurplusData } from '../data';
import { Globe, TrendingUp, Ship, Calendar } from 'lucide-react';

const InsightBox = ({ title, children, icon: Icon, delay, highlight }: { title: string, children?: React.ReactNode, icon: any, delay: string, highlight?: boolean }) => {
    let borderColor = 'border-mckinsey-blue';
    let iconColor = 'text-mckinsey-blue';
    
    if (highlight) {
        borderColor = 'border-mckinsey-lightBlue';
        iconColor = 'text-mckinsey-lightBlue';
    }

    return (
        <div className={`flex flex-col h-full p-4 bg-slate-50 border-t-2 ${borderColor} opacity-0 animate-fade-in-up fill-mode-forwards`} style={{ animationDelay: delay }}>
            <div className={`flex items-center gap-2 mb-2 ${iconColor}`}>
                <Icon size={18} />
                <h4 className="font-bold text-sm uppercase">{title}</h4>
            </div>
            <div className="text-xs text-mckinsey-text leading-relaxed">
                {children}
            </div>
        </div>
    );
};

export const SlideContentSixteen: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-mckinsey-blue"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-mckinsey-subtext uppercase tracking-widest">
            外贸进出口监测
          </span>
          <span className="text-xs text-slate-400">
             数据来源：海关总署
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-mckinsey-blue leading-tight w-11/12">
          Q4出口增速呈“先抑后扬”走势，<br/>
          <span className="text-mckinsey-accent">12月超预期回升至6.6%圆满收官</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-4 gap-6 mb-8 h-36">
         <InsightBox title="月度波动：V型反转" icon={TrendingUp} delay="100ms" highlight={true}>
           <p>
             <span className="font-bold">10月探底 (-1.1%)</span>：受高基数及台风因素扰动。<br/>
             <span className="font-bold">12月走强 (+6.6%)</span>：受春节前“抢出口”效应及非美需求强劲带动，显著高于市场预期 (2.2%)。
           </p>
         </InsightBox>

         <InsightBox title="全年成绩单" icon={Globe} delay="200ms">
           <p>
             全年进出口总额增长 <span className="font-bold">3.8%</span>，其中出口增长6.1%。外贸韧性有效对冲内需波动，净出口对经济增长贡献率维持高位，发挥了宏观经济“稳定器”作用。
           </p>
         </InsightBox>

         <InsightBox title="进口改善逻辑" icon={Ship} delay="300ms">
           <p>
             12月进口回升至 <span className="font-bold">5.7%</span> (前值1.9%)。制造业PMI重回扩张 (50.1%) 带动原材料补库需求释放，同时大豆等农产品采购规模扩大。
           </p>
         </InsightBox>

         <InsightBox title="抢出口效应" icon={Calendar} delay="400ms">
           <p>
             鉴于2025年春节较早，外贸企业普遍在12月集中赶工出货。叠加部分市场对未来关税不确定性的担忧，提前发货意愿增强，推高了年末出口读数。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <TradeTrendChart data={tradeTrendData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <TradeSurplusChart data={tradeSurplusData} />
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