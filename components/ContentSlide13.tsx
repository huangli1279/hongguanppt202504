
import React from 'react';
import { Smartphone, Zap, ShoppingBag, TrendingUp, AlertCircle, BarChart3 } from 'lucide-react';
import { RetailCategoryTable } from './RetailCategoryTable';
import { AutoDealerInventoryChart } from './AutoDealerInventoryChart';
import { autoDealerInventoryData } from '../data';

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

export const ContentSlide13: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-lightBlue"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            细分品类与政策成效分析
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          通讯器材全年高增20.9%领跑市场，家电与汽车消费年底承压
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-3 gap-6 mb-8 h-40">
         <InsightBox title="通讯器材：最强引擎" icon={Smartphone} delay="100ms" highlight={true}>
           <p>
             政策“红包”与AI技术红利共振。2025年通讯器材零售额累计同比增长 <span className="font-bold text-webank-lightBlue">20.9%</span>。
           </p>
         </InsightBox>

         <InsightBox title="以旧换新：降维打击" icon={Zap} delay="200ms">
           <p>
             商务部数据显示中高端手机补贴占比为 <span className="font-bold">72.5%</span>，通过“政府补贴+厂方让利”实现精准收割。AI手机渗透率提升，IDC预计2026年中国新一代AI手机出货量将达 <span className="font-bold">1.47亿台</span>，同比增长31.6%，占据整体市场的 <span className="font-bold">53%</span>。
           </p>
         </InsightBox>

         <InsightBox title="家电汽车：透支休克" icon={AlertCircle} delay="300ms" alert={true}>
           <p>
             边际递减效应显现：家电类零售同比转负（12月 <span className="font-bold">-18.7%</span>），反映出存量收割后的补偿性回落。12月汽车经销商库存系数 <span className="font-bold">1.31</span>，仍高于合理区间。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <RetailCategoryTable />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <AutoDealerInventoryChart data={autoDealerInventoryData} />
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-4 left-12 right-12 border-t border-slate-200 pt-2 flex justify-between text-[10px] text-slate-400">
        <span>个金管理部-数据管理室</span>
        <span>18</span>
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
