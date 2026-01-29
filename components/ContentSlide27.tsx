
import React from 'react';
import { Q4ExportGrowthChart } from './Q4ExportGrowthChart';
import { MonthlyTradeGrowthChart } from './MonthlyTradeGrowthChart';
import { q4ExportGrowthData, monthlyTradeGrowthData } from '../data';
import { Globe, TrendingUp } from 'lucide-react';

const InsightBox = ({ title, children, icon: Icon, delay, highlight }: { title: string, children?: React.ReactNode, icon: any, delay: string, highlight?: boolean }) => {
    let borderColor = 'border-webank-blue';
    let iconColor = 'text-webank-blue';
    
    if (highlight) {
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

export const ContentSlide27: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            外贸进出口监测
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          2025年全年保持增长再创新高，Q4出口增速超预期回升至6.6%。
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-2 gap-6 mb-4 h-36">
         <InsightBox title="全年外贸成绩与贡献" icon={Globe} delay="100ms">
           <p>
             2025年全年货物进出口总额45.47万亿，增长3.8%，其中，出口26.99万亿元，增长6.1%；进口18.48万亿元，增长0.5%，规模再创新高。
           </p>
         </InsightBox>

         <InsightBox title="Q4出口波动解析" icon={TrendingUp} delay="200ms" highlight={true}>
           <p>
             受去年同期高基数（台风后补偿性出货）等影响，<span className="font-bold">10月出口同比下降 1.1%</span>，为年内首次转负。<span className="font-bold">12月因集成电路、自动数据处理设备等电子类产品进入补库周期</span>和企业为对冲 2026 年初关税不确定性及避开春节假期，<span className="font-bold">出口加速至 6.6%</span>。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow flex gap-6 min-h-0 px-8">
        {/* Left: Monthly Trade Growth Chart */}
        <div className="w-1/2 h-full bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '400ms' }}>
          <MonthlyTradeGrowthChart data={monthlyTradeGrowthData} />
        </div>

        {/* Right: Q4 Export Growth Chart */}
        <div className="w-1/2 h-full bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <Q4ExportGrowthChart data={q4ExportGrowthData} />
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
