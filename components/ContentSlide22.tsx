import React from 'react';
import { FaiComponentsChart } from './FaiComponentsChart';
import { PrivateStateInvestmentChart } from './PrivateStateInvestmentChart';
import { faiComponentsData, privateStateInvestmentData } from '../data';
import { TrendingDown, Building, Briefcase, BarChart } from 'lucide-react';

const InsightBox = ({ title, children, icon: Icon, delay, alert }: { title: string, children?: React.ReactNode, icon: any, delay: string, alert?: boolean }) => {
    let borderColor = 'border-webank-blue';
    let iconColor = 'text-webank-blue';
    
    if (alert) {
        borderColor = 'border-red-500';
        iconColor = 'text-red-600';
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

export const ContentSlide22: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-red-800"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            固定资产投资分析
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          2025年固投全年下降3.8%，<span className="text-webank-subtext">房地产深跌与基建乏力导致"稳增长"缺口</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-2 gap-6 mb-8 h-36">
         <InsightBox title="总量加速下行" icon={TrendingDown} alert={true} delay="100ms">
           <p>
             全年固定资产投资（不含农户）同比下降 <span className="font-bold">3.8%</span>。四季度下行斜率显著加大，累计增速从1-9月的-0.5%一路滑落，显示投资需求在年末急剧收缩。固定资产投资三大支柱全面降速：房地产深度下跌（-17.2%）、基建转负（-1.48%）、制造业增速显著回落（0.6%），整体投资动能乏力。
           </p>
         </InsightBox>

          <InsightBox title="民间投资深度负增长" icon={Building} delay="200ms" alert={true}>
            <p>
              <span className="font-bold">民间投资：</span>全年下降6.4%，创历史新低，反映民营企业投资意愿极度低迷。<br/>
              <span className="font-bold">国有控股：</span>全年下降2.5%，亦转负增长。
            </p>
          </InsightBox>
      </section>

       {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <FaiComponentsChart data={faiComponentsData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <PrivateStateInvestmentChart data={privateStateInvestmentData} />
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
