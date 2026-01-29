
import React from 'react';
import { RetailTrendChart } from './RetailTrendChart';
import { ServiceGoodsGapChart } from './ServiceGoodsGapChart';
import { retailTrendData, serviceGoodsData } from '../data';
import { TrendingDown, CalendarClock } from 'lucide-react';

const InsightBox = ({ title, children, icon: Icon, delay, alert }: { title: string, children?: React.ReactNode, icon: any, delay: string, alert?: boolean }) => (
  <div className={`flex flex-col h-full p-4 bg-slate-50 border-t-2 ${alert ? 'border-red-500' : 'border-webank-blue'} opacity-0 animate-fade-in-up fill-mode-forwards`} style={{ animationDelay: delay }}>
    <div className={`flex items-center gap-2 mb-2 ${alert ? 'text-red-600' : 'text-webank-blue'}`}>
      <Icon size={18} className={alert ? "" : "text-webank-accent"}/>
      <h4 className="font-bold text-sm uppercase">{title}</h4>
    </div>
    <div className="text-xs text-webank-text leading-relaxed">
      {children}
    </div>
  </div>
);

export const ContentSlide11: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            消费市场监测
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          2025年社零增长3.7%，服务消费韧性显著强于商品零售
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-2 gap-6 mb-8 h-36">
         <InsightBox title="服务消费韧性凸显" icon={TrendingDown} alert={true} delay="100ms">
           <p>
             2025 年全年社零总额增长 <span className="font-bold">3.7%</span>，规模首破 50 万亿元；服务零售额全年累计增长<span className="font-bold">5.5%</span>，始终快于商品零售，且增速在下半年持续增长
           </p>
         </InsightBox>

         <InsightBox title={`"促销平移"透支内需`} icon={CalendarClock} delay="200ms">
           <p>
             受"双十一"错位（10月透支11月）及去年同期高基数（24年Q4疫情后补偿消费及初期政策刺激）影响，四季度社零当月同比增速呈现明显的下行趋势，12 月创下近三年非极端波动期的最低值，复苏斜率明显放缓
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <ServiceGoodsGapChart data={serviceGoodsData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <RetailTrendChart data={retailTrendData} />
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
