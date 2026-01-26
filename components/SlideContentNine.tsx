
import React from 'react';
import { ServiceGoodsGapChart } from './ServiceGoodsGapChart';
import { DurableGoodsChart } from './DurableGoodsChart';
import { serviceGoodsData, durableGoodsData } from '../data';
import { Coffee, Smartphone, Home, AlertOctagon } from 'lucide-react';

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

export const SlideContentNine: React.FC = () => {
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
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight w-11/12">
          服务零售全年增长5.5%跑赢商品，<br/>
          <span className="text-webank-subtext">耐用品消费在补贴边际递减下承压</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-3 gap-6 mb-8 h-36">
         <InsightBox title="服务强于商品" icon={Coffee} delay="100ms" highlight={true}>
           <p>
             全年服务零售额增长 <span className="font-bold">5.5%</span>，高于商品（3.8%）。文体休闲、通讯服务等“情绪价值”与“数字生活”类消费保持两位数高增，消费结构加速向服务型转型。
           </p>
         </InsightBox>

         <InsightBox title="耐用品明显承压" icon={Home} delay="200ms" alert={true}>
           <p>
             受“以旧换新”效应递减及高基数影响，Q4耐用品疲软。<span className="font-bold">家电</span> 11月深跌19.4%，12月虽回升但波动剧烈。<span className="font-bold">汽车</span> 销量增速未能覆盖价格战缺口。<span className="font-bold">装潢</span> 受地产拖累降幅扩大。
           </p>
         </InsightBox>

         <InsightBox title="新品类亮点" icon={Smartphone} delay="300ms">
           <p>
             <span className="font-bold">通讯器材</span> 受AI手机新品驱动，11月高增20.6%。<span className="font-bold">金银珠宝</span> 10月因避险需求大增37.6%，但11月迅速回落至8.5%，显示极强价格敏感性。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <ServiceGoodsGapChart data={serviceGoodsData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <DurableGoodsChart data={durableGoodsData} />
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
