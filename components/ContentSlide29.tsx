import React from 'react';
import { Cpu, Factory, Building2, TrendingUp, TrendingDown, AlertCircle } from 'lucide-react';
import { ImportCoreCommoditiesTable } from './ImportCoreCommoditiesTable';

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
        <div className={`flex flex-col h-full p-5 bg-slate-50 border-t-2 ${borderColor} opacity-0 animate-fade-in-up fill-mode-forwards`} style={{ animationDelay: delay }}>
            <div className={`flex items-center gap-2 mb-3 ${iconColor}`}>
                <Icon size={20} />
                <h4 className="font-bold text-sm uppercase tracking-wider">{title}</h4>
            </div>
            <div className="text-sm text-webank-text leading-relaxed">
                {children}
            </div>
        </div>
    );
};

export const ContentSlide29: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue"></div>

      {/* Header */}
      <header className="mb-8 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            进口结构分析：新旧动能切换下的需求温差
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          进口端结构性分化——<span className="text-webank-lightBlue">硬科技补库</span>但传统内需疲软
        </h1>
      </header>

      {/* Content Sections */}
      <div className="flex-grow flex flex-col gap-4 overflow-hidden">
        {/* Insight Cards - Compact */}
        <div className="grid grid-cols-3 gap-6 h-32 shrink-0">
          <InsightBox title="集成电路（IC）" icon={Cpu} highlight={true} delay="100ms">
            <p>
              12月进口同比回升至 <span className="font-bold text-webank-lightBlue">12.6%</span>。受 AI 服务器及终端换机潮驱动，高端存储芯片补库显著。
            </p>
          </InsightBox>

          <InsightBox title="半导体设备" icon={Factory} highlight={true} delay="200ms">
            <p>
              全年维持增长，12月增长22.4%，反映国内芯片厂在自主可控背景下的战略扩张。
            </p>
          </InsightBox>

          <InsightBox title="铁矿砂及其精矿" icon={Building2} alert={true} delay="300ms">
            <p>
              12月进口同比录得 <span className="font-bold text-red-600">-3.5%</span>。主要受国内地产开工端持续低迷影响，上游采购意愿降至冰点。
            </p>
          </InsightBox>
        </div>

        {/* Table Section */}
        <div className="flex-grow min-h-0 opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '400ms' }}>
          <ImportCoreCommoditiesTable />
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-12 right-12 border-t border-slate-200 pt-2 flex justify-between text-[10px] text-slate-400">
        <span>个金管理部-数据管理室</span>
        <span>29</span>
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
