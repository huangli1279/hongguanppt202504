
import React from 'react';
import { TrendingUp, Users, AlertTriangle, Wallet } from 'lucide-react';
import { ConsumerConfidenceTrendChart } from './ConsumerConfidenceTrendChart';
import { ResidentIncomeExpenditureChart } from './ResidentIncomeExpenditureChart';
import { consumerConfidenceData, residentIncomeExpenditureData } from '../data';

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

export const ContentSlide20: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">

      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-lightBlue"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            收入与信心分析
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          人均可支配收入实际增长5.0%，<span className="text-webank-accent">消费者信心指数回升但就业依旧承压</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-2 gap-6 mb-8 h-44">
         <InsightBox title="收入与就业预期分化制约消费者信心回暖" icon={TrendingUp} delay="100ms" highlight={true}>
           <p>
             消费者信心指数（从86.4升至90.3）的温和回升，主要由收入预期和消费意愿支撑，但被就业预期严重拖累，新兴领域（AI、低空经济）需求旺盛，传统行业需求减弱。
           </p>
         </InsightBox>

         <InsightBox title="收入增速超越消费，居民储蓄倾向依然显著" icon={Wallet} delay="200ms" alert={true}>
           <p>
             2025年人均可支配收入实际增长5.0%，但居民人均消费支出实际增长4.4%，低于收入增速；显示在资产价格波动（房价/股市）背景下，居民预防性储蓄心理依然较强。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <ConsumerConfidenceTrendChart data={consumerConfidenceData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <ResidentIncomeExpenditureChart data={residentIncomeExpenditureData} />
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-4 left-12 right-12 border-t border-slate-200 pt-2 flex justify-between text-[10px] text-slate-400">
        <span>个金管理部-数据管理室</span>
        <span>20</span>
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
