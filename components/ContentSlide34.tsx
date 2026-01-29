
import React from 'react';
import { M1M2ScissorsChart } from './M1M2ScissorsChart';
import { M1RealEstateCorrelationChart } from './M1RealEstateCorrelationChart';
import { moneySupplyData, m1M2ScissorsTrendData } from '../data';
import { Split, AlertOctagon, Landmark, Briefcase } from 'lucide-react';

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

export const ContentSlide34: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-slate-500"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            货币供应：M1与M2剪刀差极度走阔
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          12月M1增速滑落至3.8%，剪刀差扩至4.7%警示资金"定期化"
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-3 gap-6 mb-8 h-36">
         <InsightBox title="剪刀差创新高" icon={Split} alert={true} delay="100ms">
           <p>
             M2同比增速在12月超预期反弹至 8.5%（11月为8.0%），而M1同比增速从9月的7.2%一路下滑至12月的 3.8%。两者剪刀差由三季度的1.2%迅速扩大至年末的 4.7%，创年内新高。
           </p>
         </InsightBox>

         <InsightBox title="基数压制与绝对量" icon={AlertOctagon} delay="200ms">
           <p>
             2024年下半年M1统计口径修订后数据上修，叠加当时化债资金集中投放，导致2025年Q4面临极高基数压制。若剔除基数，12月M1环比增加约2.6万亿，绝对量表现尚可。
           </p>
         </InsightBox>

         <InsightBox title="资金定期化" icon={Landmark} delay="300ms">
           <p>
             在低通胀与资产价格波动环境下，企业与居民风险偏好下降，倾向于将活期资金转为定期存款或理财以锁定收益，导致M1向M2内部的迁移。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <M1M2ScissorsChart data={moneySupplyData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <M1RealEstateCorrelationChart data={m1M2ScissorsTrendData} />
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
