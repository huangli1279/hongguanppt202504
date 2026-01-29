
import React from 'react';
import { M1M2ScissorsChart } from './M1M2ScissorsChart';
import { M1RealEstateCorrelationChart } from './M1RealEstateCorrelationChart';
import { moneySupplyData, m1RealEstateData } from '../data';
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

export const ContentSlide36: React.FC = () => {
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
          12月M1增速滑落至3.8%创新低，<span className="text-webank-accent">M2-M1剪刀差扩至4.7%警示资金"定期化"</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-3 gap-6 mb-8 h-36">
         <InsightBox title="剪刀差：活钱变死钱" icon={Split} alert={true} delay="100ms">
           <p>
             M2维持在 <span className="font-bold">8.5%</span> 的相对高位，但M1大幅下行至 <span className="font-bold">3.8%</span>。剪刀差走阔意味着企业和居民更倾向于将资金以定期存款形式沉淀（资金定期化），而非用于即期交易或投资。
           </p>
         </InsightBox>

         <InsightBox title="核心拖累：地产链" icon={AlertOctagon} delay="200ms">
           <p>
             M1的主要派生渠道之一是房地产销售（居民存款转化为房企活期存款）。受商品房销售深跌影响，这一货币传导链条严重受阻，导致M1读数持续承压。
           </p>
         </InsightBox>

         <InsightBox title="活性不足：避险情绪" icon={Landmark} delay="300ms">
           <p>
             企业扩产意愿低迷（对应固投减速）与居民预防性储蓄（对应理财回表）共同作用，导致货币乘数效应减弱。金融体系内“不缺钱”，但实体经济中“钱不转”。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <M1M2ScissorsChart data={moneySupplyData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <M1RealEstateCorrelationChart data={m1RealEstateData} />
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
