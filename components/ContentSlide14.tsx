
import React from 'react';
import { TrendingUp, ShoppingBag, AlertCircle, BarChart3, Activity, Wallet } from 'lucide-react';
import { CpiTrendChart } from './CpiTrendChart';
import { ConsumptionPropensityChart } from './ConsumptionPropensityChart';
import { cpiTrendData, consumptionPropensityData } from '../data';

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

export const ContentSlide14: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-lightBlue"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            物价压力与消费倾向分析
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          CPI 0.8% 创年内新高难掩核心需求偏弱，<span className="text-webank-accent">Q4 消费倾向转淡凸显避险情绪</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-3 gap-6 mb-8 h-44">
         <InsightBox title="CPI 结构分析" icon={TrendingUp} delay="100ms" highlight={true}>
           <p>
             <span className="font-bold">成本推动型上涨：</span>12月CPI回升至0.8%，主要受鲜菜季节性减产与全球金价避险上涨驱动。同比涨幅虽创2023年3月以来新高，但剔除食品与能源后，<span className="font-bold">核心CPI仍显“温和”</span>，反映出耐用品市场（如家电、服装）仍处于价格博弈期，居民对非必需品的消费弹性极低。
           </p>
         </InsightBox>

         <InsightBox title="消费倾向解析" icon={ShoppingBag} delay="200ms">
           <p>
             <span className="font-bold">“信心错位”：</span>全年人均收入实际增长5.0%，但消费倾向下降至72.7%。收入增长并未完全转化为支出意愿，反映出居民对未来收入预期的波动性担忧。
           </p>
         </InsightBox>

         <InsightBox title="深度洞察" icon={AlertCircle} delay="300ms" alert={true}>
           <p>
             <span className="font-bold">预防性储蓄增强：</span>居民消费支出增速（4.4%）持续低于收入增速，显示出预防性储蓄意愿在Q4显著增强。金价暴涨带动CPI的同时，也侧面印证了居民资金流向<span className="font-bold">避险资产</span>而非实物消费。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <CpiTrendChart data={cpiTrendData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <ConsumptionPropensityChart data={consumptionPropensityData} />
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-4 left-12 right-12 border-t border-slate-200 pt-2 flex justify-between text-[10px] text-slate-400">
        <span>个金管理部-数据管理室</span>
        <span>19</span>
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
