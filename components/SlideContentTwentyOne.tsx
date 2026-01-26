import React from 'react';
import { LandRevenueChart } from './LandRevenueChart';
import { SpecialBondChart } from './SpecialBondChart';
import { landRevenueData, specialBondData } from '../data';
import { Building2, TrendingDown, Coins, Zap } from 'lucide-react';

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

export const SlideContentTwentyOne: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-slate-500"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            土地与债务：财政平衡术
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight w-11/12">
          土地出让收入降幅扩大至10.7%，<br/>
          <span className="text-webank-lightBlue">新增专项债发行进度超100%力保支出</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-3 gap-6 mb-8 h-36">
         <InsightBox title="土地市场：核心拖累" icon={TrendingDown} alert={true} delay="100ms">
           <p>
             1-11月国有土地使用权出让收入同比 <span className="font-bold">下降 10.7%</span>，降幅较前值 (-7.4%) 显著扩大。房企拿地意愿低迷，土拍热度仅集中在核心城市优质地块，地方政府“钱袋子”持续承压。
           </p>
         </InsightBox>

         <InsightBox title="政府债：强力对冲" icon={Coins} highlight={true} delay="200ms">
           <p>
             为弥补缺口，专项债发行在Q4再度提速。截至11月末，新增专项债发行进度达 <span className="font-bold">101.3%</span>（含盘活结存限额）。资金加速落地支撑11月政府性基金支出转正 (+2.8%)。
           </p>
         </InsightBox>

         <InsightBox title="支出效应：存在时滞" icon={Zap} delay="300ms">
           <p>
             5000亿政策性金融工具已投放完毕，主要投向基建与“两重”项目。但受冬季施工受限及项目储备不足影响，资金转化为实物工作量存在一定时滞，稳增长效果或延后至明年Q1。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <LandRevenueChart data={landRevenueData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <SpecialBondChart data={specialBondData} />
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
