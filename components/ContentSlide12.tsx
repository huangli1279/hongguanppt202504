
import React from 'react';
import { ServiceGoodsGapChart } from './ServiceGoodsGapChart';
import { UrbanRuralChart } from './UrbanRuralChart';
import { serviceGoodsData, urbanRuralData } from '../data';
import { Coffee, Smartphone, Home, AlertOctagon, Map, TrendingUp } from 'lucide-react';

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

export const ContentSlide12: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-lightBlue"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            商品与服务结构分析
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          服务消费贡献近半壁江山，乡村消费增速持续快于城镇
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-3 gap-6 mb-8 h-36">
         <InsightBox title="服务消费：半壁江山" icon={Coffee} delay="100ms" highlight={true}>
           <p>
             全年服务零售额增长 <span className="font-bold">5.5%</span>，高于商品（3.8%）。人均服务性消费支出占比达 <span className="font-bold">46.1%</span>。前三季度以旧换新政策强力提振商品消费，使其增速领跑，而四季度政策效应减弱，年终文娱旅游需求爆发，增速反超商品消费。
           </p>
         </InsightBox>

         <InsightBox title="乡村 vs 城镇：韧性对标" icon={Map} delay="200ms" alert={true}>
           <p>
             全年乡村增长 <span className="font-bold">4.1%</span> 领跑。12 月城镇受大促透支及高基数压制降至 <span className="font-bold">0.7%</span>，而乡村凭借 <span className="font-bold">1.7%</span> 的增速构筑了年末缓冲垫。
           </p>
         </InsightBox>

         <InsightBox title="逻辑深挖：政策时滞" icon={TrendingUp} delay="300ms">
           <p>
             以旧换新红利在城镇已提前释放，12 月正处于向乡村深度渗透的“下半场”。乡村凭借“基建红利”沉降，展现出更强的增长后劲。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <ServiceGoodsGapChart data={serviceGoodsData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <UrbanRuralChart data={urbanRuralData} />
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
