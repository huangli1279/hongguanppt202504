

import React from 'react';
import { HouseholdLoanChart } from './HouseholdLoanChart';
import { DepositFlowChart } from './DepositFlowChart';
import { householdLoanStructureData, depositFlowData } from '../data';
import { Wallet, TrendingDown, PiggyBank, ArrowRightLeft } from 'lucide-react';

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

export const ContentSlide38: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            部门行为：居民资产负债表监测
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          12月居民贷款罕见净偿还916亿元，<span className="text-webank-subtext">避险情绪驱动存款回流银行体系</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-3 gap-6 mb-8 h-36">
         <InsightBox title="主动去杠杆" icon={TrendingDown} alert={true} delay="100ms">
           <p>
             12月居民贷款罕见减少 <span className="font-bold">916亿元</span>，同比多减4416亿元。短期贷款减少1023亿元（消费疲软），中长期贷款仅增100亿元（地产销售低迷及提前还贷）。收入预期不稳下，居民缩表意愿加剧。
           </p>
         </InsightBox>

         <InsightBox title="预防性储蓄" icon={PiggyBank} highlight={true} delay="200ms">
           <p>
             资产端倾向保守，12月居民存款大增 <span className="font-bold">2.58万亿元</span>，同比多增3900亿元。全年累计增加14.64万亿元，资金回流定期存款趋势未改，风险偏好持续处于低位。
           </p>
         </InsightBox>

         <InsightBox title="存款搬家退潮" icon={ArrowRightLeft} delay="300ms">
           <p>
             相比10月受股市大涨驱动的“存款搬家”，12月非银存款 <span className="font-bold">减少 3300亿元</span>。随着股市震荡及年末银行考核压力，资金流向逆转，重新回流银行表内，M2增速因此受益。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <HouseholdLoanChart data={householdLoanStructureData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <DepositFlowChart data={depositFlowData} />
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