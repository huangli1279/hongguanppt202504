

import React from 'react';
import { InfrastructureTable } from './InfrastructureTable';
import { infrastructureGrowthTableData } from '../data';
import { TrendingDown, Zap, Clock, Landmark } from 'lucide-react';

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

export const ContentSlide24: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-slate-600"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            基建投资专项分析
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          基建投资全年下降1.48%，<span className="text-webank-subtext">债务化解与项目断档导致实物工作量落地受阻</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-3 gap-6 mb-8 h-36">
         <InsightBox title="化债约束与挤出效应" icon={Landmark} alert={true} delay="100ms">
           <p>
             受地方政府化债提速影响，财政资金优先用于偿还存量债务，对新增投资形成明显“挤出”。12月单月基建投资估算同比下降约 <span className="font-bold">12.2%-16%</span>，资金到位率偏低制约施工进度。
           </p>
         </InsightBox>

         <InsightBox title="结构分化：能源托底" icon={Zap} highlight={true} delay="200ms">
           <p>
             <span className="font-bold">电热气水</span> 投资全年增长 <span className="font-bold">9.1%</span>，受益于能源保供与绿色转型强力支持。相比之下，<span className="font-bold">水利环境公用设施</span> 投资全年下降8.4%，12月单月更是深跌26.6%，成为主要拖累。
           </p>
         </InsightBox>

         <InsightBox title="政策时滞" icon={Clock} delay="300ms">
           <p>
             尽管10月投放了5000亿新型政策性金融工具，但受北方冬季施工受限及项目前期准备周期影响，四季度实物工作量尚未充分释放，政策效果存在滞后性。
           </p>
         </InsightBox>
      </section>

      {/* Table Section */}
      <section className="flex-grow min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards h-full" style={{ animationDelay: '500ms' }}>
          <InfrastructureTable data={infrastructureGrowthTableData} />
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
