
import React from 'react';
import { TaxCategoryChart } from './TaxCategoryChart';
import { VatVsProductionChart } from './VatVsProductionChart';
import { taxCategoryData, vatVsProductionData } from '../data';
import { TrendingDown, Percent, Wallet, AlertCircle } from 'lucide-react';

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

export const SlideContentTwenty: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-slate-600"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            税收分析：结构性分化
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          生产端走弱拖累税收修复斜率，<span className="text-webank-lightBlue">证券印花税与个税受政策扰动维持高增</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-3 gap-6 mb-8 h-36">
         <InsightBox title="总量修复遇阻" icon={TrendingDown} alert={true} delay="100ms">
           <p>
             1-11月税收收入累计增长 <span className="font-bold">1.8%</span>，修复进程延续。但11月单月增速由10月的8.6%大幅回落至 <span className="font-bold">2.8%</span>。工业生产走弱及PPI负增严重制约了增值税和企业所得税（11月单月-5.2%）的增长。
           </p>
         </InsightBox>

         <InsightBox title="非基本面亮点" icon={Percent} highlight={true} delay="200ms">
           <p>
             <span className="font-bold">证券印花税 (+70.7%)</span>：资本市场活跃度提升显著拉动。<br/>
             <span className="font-bold">个税 (+11.5%)</span>：主要源于加强互联网平台税收征管及股东减持，而非居民收入实质性大幅改善。
           </p>
         </InsightBox>

         <InsightBox title="非税空间收窄" icon={AlertCircle} delay="300ms">
           <p>
             1-11月非税收入同比 <span className="font-bold">下降 3.7%</span>，远低于过去五年平均水平。表明地方政府通过“罚没收入”等非税手段弥补财力的空间已大幅收窄，财政紧平衡压力加剧。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <TaxCategoryChart data={taxCategoryData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <VatVsProductionChart data={vatVsProductionData} />
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
