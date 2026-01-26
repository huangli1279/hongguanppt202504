
import React from 'react';
import { CpiTrendChart } from './CpiTrendChart';
import { CpiContributionChart } from './CpiContributionChart';
import { cpiTrendData, cpiContributionData } from '../data';
import { Coins, Carrot, Home, Activity } from 'lucide-react';

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

export const SlideContentTen: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-slate-800"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            物价与通胀深度分析
          </span>
          <span className="text-xs text-slate-400">
             数据来源：国家统计局
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight w-11/12">
          12月CPI回升至0.8%主要受鲜菜与金价驱动，<br/>
          <span className="text-webank-subtext">核心需求内生动力依然不强</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-4 gap-6 mb-8 h-36">
         <InsightBox title="结构性回暖" icon={Activity} delay="100ms" highlight={true}>
           <p>
             12月CPI同比上涨 <span className="font-bold">0.8%</span>（前值0.7%），创2023年3月以来新高。但涨幅主要由供给侧扰动（天气）与外部输入（金价）贡献。
           </p>
         </InsightBox>

         <InsightBox title="金价效应" icon={Coins} delay="200ms">
           <p>
             金饰品价格同比大涨 <span className="font-bold">68.5%</span>。据测算，金价上涨对核心CPI的贡献高达 <span className="font-bold">0.54%</span>。剔除黄金后，实际核心通胀仅为0.6%。
           </p>
         </InsightBox>

         <InsightBox title="“菜篮子”冲击" icon={Carrot} delay="300ms">
           <p>
             受寒潮雨雪天气影响，<span className="font-bold">鲜菜 (+18.2%)</span> 与鲜果 (+4.4%) 价格飙升，成为CPI转正的另一大核心推手。
           </p>
         </InsightBox>

         <InsightBox title="居住需求疲软" icon={Home} delay="400ms" alert={true}>
           <p>
             房租价格同比下降 <span className="font-bold">0.3%</span>，降幅进一步走阔。居住类消费持续降级，反映房地产市场调整压力向租赁市场传导。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <CpiTrendChart data={cpiTrendData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <CpiContributionChart data={cpiContributionData} />
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
