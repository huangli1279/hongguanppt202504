import React from 'react';
import { ConfidenceChart } from './ConfidenceChart';
import { IncomeSourceChart } from './IncomeSourceChart';
import { confidenceData, incomeSourceData } from '../data';
import { Users, TrendingDown, ShoppingBag, Wallet } from 'lucide-react';

const InsightBox = ({ title, children, icon: Icon, delay, alert }: { title: string, children?: React.ReactNode, icon: any, delay: string, alert?: boolean }) => {
    let borderColor = 'border-webank-blue';
    let iconColor = 'text-webank-blue';
    
    if (alert) {
        borderColor = 'border-red-500';
        iconColor = 'text-red-600';
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

export const SlideContentEleven: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-slate-800"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            居民信心与财富效应
          </span>
          <span className="text-xs text-slate-400">
             数据来源：CMF, 国家统计局
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight w-11/12">
          居民收入信心弱于就业信心，“宏微观温差”源于<br/>
          <span className="text-webank-subtext">资产价值缩水与预防性储蓄</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-3 gap-6 mb-8 h-36">
         <InsightBox title="信心指数分化" icon={Users} delay="100ms">
           <p>
             CMF数据显示，消费者对于“就业”的信心相对稳定，但对于“收入”的乐观程度有所下降。虽然名义收入增速（5.0%）与GDP同步，但<span className="font-bold">财产净收入</span>增长滞后，制约了中高收入群体的购买力。
           </p>
         </InsightBox>

         <InsightBox title="财富效应逆转" icon={TrendingDown} delay="200ms" alert={true}>
           <p>
             <span className="font-bold">房产：</span>70城二手房价格持续下跌（一线城市12月同比-5.8%），引发中产阶级资产负债表受损（“财富收缩效应”）。<br/>
             <span className="font-bold">金融资产：</span>理财收益率下行，居民缺乏稳定财产性收入来源。
           </p>
         </InsightBox>

         <InsightBox title="消费行为变迁" icon={ShoppingBag} delay="300ms">
           <p>
             <span className="font-bold">服务消费：</span>呈现“量增价平”特征，旅游出行增长快于人均支出，体现“花小钱买快乐”心态。<br/>
             <span className="font-bold">必选强于可选：</span>粮油食品（+9.3%）稳健，可选消费在促销季后迅速回落。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <ConfidenceChart data={confidenceData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <IncomeSourceChart data={incomeSourceData} />
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