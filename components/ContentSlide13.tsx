
import React from 'react';
import { Smartphone, AlertCircle } from 'lucide-react';
import { RetailCategoryTable } from './RetailCategoryTable';

const InsightBox = ({ title, children, icon: Icon, delay, alert, highlight }: { title: string, children?: React.ReactNode, icon: any, delay: string, alert?: boolean, highlight?: boolean }) => {
    let borderColor = 'border-webank-blue';
    let iconColor = 'text-webank-blue';
    
    if (alert) {
        borderColor = 'border-red-500';
        iconColor = 'text-red-600';
    } else if (highlight) {
        borderColor = 'border-webank-lightBlue';
        iconColor = 'text-webank-lightBlue';
    }

    return (
        <div className={`flex flex-col h-full p-4 bg-slate-50 border-t-2 ${borderColor} opacity-0 animate-fade-in-up fill-mode-forwards`} style={{ animationDelay: delay }}>
            <div className={`flex items-center gap-2 mb-2 ${iconColor}`}>
                <Icon size={18} />
                <h4 className="font-bold text-sm uppercase">{title}</h4>
            </div>
            <div className="text-xs text-webank-text leading-relaxed">
                {children}
            </div>
        </div>
    );
};

export const ContentSlide13: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-lightBlue"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            细分品类与政策成效分析
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          通讯器材全年高增20.9%领跑市场，家电与汽车消费年底承压
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-2 gap-6 mb-8 h-40">
         <InsightBox title="通讯器材增速领跑，家电家具受补贴退坡放缓" icon={Smartphone} delay="100ms" highlight={true}>
           <p>
             2025全年通讯器材类以 20.86% 的累计增速领跑大盘，这主要受益于 “以旧换新”对中高端机型（占比达 72.5%）的精准补贴；体育娱乐用品全年正增长，12月累计达 15.70%，折射居民对健康投资与精神消费的持续热衷；家用电器（12月跌至11.0%）、家具类（12月跌至14.62%）受四季度补贴退坡影响。
           </p>
         </InsightBox>

         <InsightBox title="家电汽车：透支休克" icon={AlertCircle} delay="300ms" alert={true}>
           <p>
             受房地产下行周期拖累的影响，相关行业普遍承压：建筑及装潢材料类累计同比跌至 -2.67%，汽车行业受补贴退坡和市场内卷影响，全年以-1.5%的增长收尾。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow flex flex-col min-h-0">
        <div className="bg-white rounded-sm h-full opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <RetailCategoryTable />
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-4 left-12 right-12 border-t border-slate-200 pt-2 flex justify-between text-[10px] text-slate-400">
        <span>个金管理部-数据管理室</span>
        <span>18</span>
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
