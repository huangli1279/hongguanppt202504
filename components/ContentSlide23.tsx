
import React from 'react';
import { RealEstateInvestmentChart } from './RealEstateInvestmentChart';
import { RealEstatePriceChart } from './RealEstatePriceChart';
import { realEstateInvestmentData, realEstateMarketData } from '../data';
import { Home, TrendingDown } from 'lucide-react';

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

export const ContentSlide23: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-red-700"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            房地产市场深度分析
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          房地产开发投资重挫17.2%，<span className="text-webank-subtext">新开工面积腰斩式下跌制约后续实物量</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-2 gap-6 mb-8 h-36">
         <InsightBox title="投资端深度出清" icon={TrendingDown} alert={true} delay="100ms">
           <p>
             全年开发投资下降 <span className="font-bold">17.2%</span>。房屋新开工面积下降 <span className="font-bold">20.4%</span>，竣工面积下降18.1%。先行指标剧烈收缩，意味着未来1-2年建安投资仍面临巨大压力。
           </p>
         </InsightBox>

         <InsightBox title="房价指数：持续调整" icon={Home} delay="200ms" alert={true}>
           <p>
             70个大中城市房价指数维持下行态势。12月新建商品住宅价格同比下降 <span className="font-bold">3.05%</span>，二手住宅价格同比下降 <span className="font-bold">6.07%</span>。市场筑底过程仍在延续，价格修复斜率依然偏平。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <RealEstateInvestmentChart data={realEstateInvestmentData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <RealEstatePriceChart data={realEstateMarketData} />
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
