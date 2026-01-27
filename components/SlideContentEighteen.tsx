import React from 'react';
import { ExportDynamicsTable } from './ExportDynamicsTable';
import { AlertTriangle, Globe, Leaf } from 'lucide-react';

const exportDynamicsData = {
  "图表标题": "2025年出口动能分化与结构性拖累对比 (美元计价)",
  "单位": "%",
  "时间序列": ["2025-12", "2025-11", "2025-10", "2025-09", "2025-08", "2025-07", "2025-06", "2025-05", "2025-04", "2025-03", "2025-02", "2025-01"],
  "核心指标": {
      "高新技术产品": [16.70, 7.80, 1.80, 11.90, 9.00, 4.30, 7.30, 5.00, 6.90, 7.90, 8.50, 2.90],
      "手机": [10.60, -12.50, -16.50, -1.70, -18.90, -21.80, -8.80, -22.80, -20.90, 9.40, 10.70, -12.80],
      "服装及衣着附件": [-10.20, -10.90, -15.90, -8.00, -10.00, -0.50, 1.10, 3.00, -0.50, 9.30, -28.40, 7.60],
      "家具及其零件": [-8.60, -8.50, -12.60, 0.40, -3.20, 3.00, 0.60, -9.40, -7.20, 8.20, -29.40, -7.20],
      "纺织纱线、织物及制品": [-4.20, 1.00, -9.10, 6.40, 1.50, 0.60, -1.60, -1.90, 3.40, 16.50, -25.30, 12.50]
  }
};

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
            双重收缩：地缘财富效应缩水抑制“非必要”消费
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          劳动密集型产品出口乏力，<span className="text-webank-accent">内需外需同步收缩构成双重拖累</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-3 gap-6 mb-8 h-44">
         <InsightBox title="内需侧（地产周期压制）" icon={AlertTriangle} alert={true} delay="100ms">
           <p>
             建筑及装潢材料类零售额累计同比录得 <span className="font-bold">-2.67%</span>，创近两年新低。这种内需疲软直接拖累了相关出口品类，家具及其零件 12 月出口同比大幅下降 <span className="font-bold">-8.60%</span>，整个四季度均深陷负增长区间。
           </p>
         </InsightBox>

         <InsightBox title="外需侧（消费信心匮乏）" icon={Globe} highlight={true} delay="200ms">
           <p>
             服装类零售累计同比增速由年初的 5.9% 萎缩至年末的 <span className="font-bold">2.8%</span>。对应出口端，服装及衣着附件 12 月当月同比大幅下挫 <span className="font-bold">-10.20%</span>，显示海外居民在通胀压力下对可选消费的采购极度低迷。
           </p>
         </InsightBox>

         <InsightBox title="旺季不旺" icon={Leaf} delay="300ms">
           <p>
             尽管处于传统出口旺季，但纺织纱线及制品 12 月再度转负（<span className="font-bold">-4.20%</span>）。在运费成本上升与利润空间收窄的双重挤压下，劳密产品呈现明显的“有单难接、有货难出”特征。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow flex justify-center min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards w-full" style={{ animationDelay: '500ms' }}>
          <ExportDynamicsTable data={exportDynamicsData} />
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