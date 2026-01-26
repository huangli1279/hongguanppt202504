import React from 'react';
import { BroadFiscalTrendChart } from './BroadFiscalTrendChart';
import { FiscalLedgerGrowthChart } from './FiscalLedgerGrowthChart';
import { broadFiscalTrendData, fiscalLedgerGrowthData } from '../data';
import { Landmark, TrendingDown, Scale, AlertTriangle } from 'lucide-react';

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

export const SlideContentNineteen: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-slate-700"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            宏观总览：财政运行监测
          </span>
          <span className="text-xs text-slate-400">
             数据来源：财政部
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight w-11/12">
          1-11月广义财政支出增速回落至4.5%，<br/>
          <span className="text-webank-subtext">受政策前置与收入约束双重挤压</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-3 gap-6 mb-8 h-36">
         <InsightBox title="总量特征：扩张放缓" icon={Landmark} delay="100ms">
           <p>
             1-11月广义财政收入同比微降 <span className="font-bold">0.2%</span>，广义支出增长 <span className="font-bold">4.5%</span>（较前值5.2%回落）。财政脉冲力度在四季度边际减弱。
           </p>
         </InsightBox>

         <InsightBox title="节奏分析：前高后低" icon={TrendingDown} alert={true} delay="200ms">
           <p>
             上半年政策积极靠前发力透支了额度，叠加去年同期高基数，Q4支出受限。10月单月广义一本账支出曾一度出现 <span className="font-bold">-9.8%</span> 的负增长。
           </p>
         </InsightBox>

         <InsightBox title="收支剪刀差收窄" icon={Scale} delay="300ms">
           <p>
             受土地出让收入大幅下滑影响，“二本账”收入约束明显。财政逆周期扩张的资金来源面临挑战，收支增速差自三季度以来持续收窄。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <BroadFiscalTrendChart data={broadFiscalTrendData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <FiscalLedgerGrowthChart data={fiscalLedgerGrowthData} />
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-4 left-12 right-12 border-t border-slate-200 pt-2 flex justify-between text-[10px] text-slate-400">
        <span>个金管理部-数据管理室</span>
        <span>CONFIDENTIAL - INTERNAL USE ONLY</span>
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