import React from 'react';
import { KeyExportGrowthChart } from './KeyExportGrowthChart';
import { ComputingExportGrowthChart } from './ComputingExportGrowthChart';
import { MechElecExportGrowthChart } from './MechElecExportGrowthChart';
import { ExportContributionChart } from './ExportContributionChart';
import { exportItemGrowthData, exportContributionData, computingExportGrowthData, mechElecExportGrowthData } from '../data';
import { Zap, Smartphone, Shirt, Layers } from 'lucide-react';

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

export const ContentSlide28: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            产品结构深度洞察：科技制造领跑
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          科技制造领跑，汽车与半导体产业链爆发，机电产品拉动出口增长
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-2 gap-6 mb-4 h-40">
         <InsightBox title="机电出口占比创新高，高技术驱动结构升级" icon={Layers} highlight={true} delay="100ms">
           <p>
             机电产品制造稳步领跑，全年出口占比已提升至60.9%的历史高位，累计同比增长26.8%。高技术与集成电路作为结构升级的“双引擎”在年末迎来爆发，充分兑现了中国制造在全球AI算力建设与新能源转型中的核心竞争力。
           </p>
         </InsightBox>

         <InsightBox title="劳密产品表现疲软，传统产业加速向高端让位" icon={Zap} highlight={true} delay="200ms">
           <p>
             劳动密集型产品表现疲软，服装累计同比-5%，显示出传统支柱产业在存量博弈与产业链外迁压力下正加速向高端装备制造让位。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <MechElecExportGrowthChart data={mechElecExportGrowthData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <ComputingExportGrowthChart data={computingExportGrowthData} />
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