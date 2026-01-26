import React from 'react';
import { ExportGrowthByRegionChart } from './ExportGrowthByRegionChart';
import { ExportShareStructureChart } from './ExportShareStructureChart';
import { exportGrowthByRegionData, exportShare2024Data, exportShare2025Data } from '../data';
import { AlertTriangle, Globe, Leaf, TrendingUp } from 'lucide-react';

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

export const SlideContentEighteen: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            区域结构：贸易版图重构
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          对美出口降幅扩大至30%，<span className="text-webank-accent">东盟与"一带一路"国家成为外贸绝对基石</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-4 gap-6 mb-8 h-36">
         <InsightBox title="美国：压力加剧" icon={AlertTriangle} alert={true} delay="100ms">
           <p>
             受关税政策滞后及高基数影响，12月对美出口同比 <span className="font-bold">下降 30.0%</span>（前值-28.6%），拖累整体出口约4.4个百分点。2025年美国市场份额降至11.1%，较上年减少3.5pct。
           </p>
         </InsightBox>

         <InsightBox title="非美：强劲对冲" icon={Globe} highlight={true} delay="200ms">
           <p>
             12月对非美区域整体出口增长 <span className="font-bold">12.8%</span>，有效填补了美国需求缺口。多元化市场布局成效显著，出口抗风险能力大幅增强。
           </p>
         </InsightBox>

         <InsightBox title="新兴市场：工业化红利" icon={Leaf} delay="300ms">
           <p>
             东盟 (+11.1%)、非洲 (+21.8%)、拉美 (+9.8%) 需求旺盛。受益于这些地区的工业化进程提速，中国中间品和生产资料出口保持高景气。
           </p>
         </InsightBox>

         <InsightBox title="欧盟：补库支撑" icon={TrendingUp} delay="400ms">
           <p>
             12月对欧盟出口增长 <span className="font-bold">11.6%</span>，虽较上月有所回落，但仍保持两位数增长。显示欧洲在经历了前期的去库存后，补库需求依然尚存。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <ExportGrowthByRegionChart data={exportGrowthByRegionData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <ExportShareStructureChart data2024={exportShare2024Data} data2025={exportShare2025Data} />
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