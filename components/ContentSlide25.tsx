
import React from 'react';
import { EquipmentVsConstructionLineChart } from './EquipmentVsConstructionLineChart';
import { EquipmentInvestmentTable } from './EquipmentInvestmentTable';
import { equipmentVsConstructionTrendData, equipmentInvestmentTableData } from '../data';
import { RefreshCcw, HardHat, Rocket, AlertCircle } from 'lucide-react';

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
        <div className={`flex flex-col h-full p-3 bg-slate-50 border-t-2 ${borderColor} opacity-0 animate-fade-in-up fill-mode-forwards`} style={{ animationDelay: delay }}>
            <div className={`flex items-center gap-2 mb-1.5 ${iconColor}`}>
                <Icon size={16} />
                <h4 className="font-bold text-xs uppercase">{title}</h4>
            </div>
            <div className="text-[11px] text-webank-text leading-snug">
                {children}
            </div>
        </div>
    );
};

export const ContentSlide25: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col overflow-hidden relative">

      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue"></div>

      {/* Header - Fixed height */}
      <header className="flex-shrink-0 px-8 pt-6 pb-2 animate-fade-in">
         <div className="flex justify-between items-end mb-1">
          <span className="text-[11px] font-bold text-webank-subtext uppercase tracking-widest">
            制造业投资结构深度洞察
          </span>
        </div>
        <h1 className="text-xl font-serif font-bold text-webank-blue leading-tight">
          设备购置投资高增11.8%，<span className="text-webank-subtext">企业"反内卷"导致产能扩张意愿降温</span>
        </h1>
      </header>

      {/* Insight Section - Fixed height */}
      <section className="flex-shrink-0 px-8 pb-3 grid grid-cols-4 gap-3 h-[110px]">
         <InsightBox title="存量更新驱动" icon={RefreshCcw} highlight={true} delay="100ms">
           <p>
             全年设备工器具购置投资增长 <span className="font-bold">11.8%</span>，拉动全部投资增长1.8pct。在"两新"政策引导下，制造业投资主要由存量设备技改驱动，而非新建产能。
           </p>
         </InsightBox>

         <InsightBox title="扩厂意愿收缩" icon={HardHat} alert={true} delay="200ms">
           <p>
             与设备高增形成鲜明对比，建筑安装工程投资（代表厂房扩建）全年 <span className="font-bold">下降 8.4%</span>。企业在"反内卷"政策下，对单纯扩大产能的资本开支变得极为谨慎。
           </p>
         </InsightBox>

         <InsightBox title="高技术引领" icon={Rocket} delay="300ms">
           <p>
             <span className="font-bold">航空航天 (+17.5%)</span> 投资领跑。新质生产力相关领域资金流入加速，投资结构持续优化。
           </p>
         </InsightBox>

         <InsightBox title="传统行业承压" icon={AlertCircle} alert={true} delay="400ms">
           <p>
             受产能过剩影响，部分中游装备及下游消费品制造投资意愿减弱。<span className="font-bold">电气机械</span> 投资（-10.3%）出现显著负增长，行业进入深度去产能周期。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section - Flex grow with proper constraints */}
      <section className="flex-1 px-8 pb-8 grid grid-cols-2 gap-4 min-h-0">
        <div className="bg-white rounded-sm h-full opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <EquipmentVsConstructionLineChart data={equipmentVsConstructionTrendData} />
        </div>
        <div className="bg-white rounded-sm h-full opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <EquipmentInvestmentTable data={equipmentInvestmentTableData} />
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-2 left-8 right-8 border-t border-slate-200 pt-1 flex justify-between text-[10px] text-slate-400">
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
