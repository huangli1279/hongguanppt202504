

import React from 'react';
import { TsfDecContributionChart } from './TsfDecContributionChart';
import { CorpLoanTrendChart } from './CorpLoanTrendChart';
import { tsfDecContributionData, corpLoanTrendData } from '../data';
import { Landmark, TrendingDown, Briefcase, BarChart2 } from 'lucide-react';

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

export const SlideContentTwentyThree: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-slate-700"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            社融与信贷：政府债错位致社融降速
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          12月社融存量增速回落至8.3%，政府债高基数是核心拖累，<span className="text-webank-accent">企业信贷现积极信号</span>
        </h1>
      </header>

      {/* Insight Section */}
      <section className="grid grid-cols-3 gap-6 mb-8 h-36">
         <InsightBox title="社融总量：高基数拖累" icon={TrendingDown} alert={true} delay="100ms">
           <p>
             12月新增社融 <span className="font-bold">2.21万亿元</span>，同比少增6457亿元；存量增速回落至 <span className="font-bold">8.3%</span>。主要受2024年末2万亿隐债置换债券集中发行带来的高基数影响，12月政府债净融资仅0.7万亿，同比大幅少增1.07万亿元。
           </p>
         </InsightBox>

         <InsightBox title="企业贷：积极信号" icon={Briefcase} highlight={true} delay="200ms">
           <p>
             12月企业中长期贷款新增 <span className="font-bold">3300亿元</span>，同比多增2900亿元，结束了连续5个月的同比少增。得益于5000亿新型政策性金融工具投放后的配套融资需求释放，以及银行年末冲量。
           </p>
         </InsightBox>

         <InsightBox title="直接融资：环境改善" icon={BarChart2} delay="300ms">
           <p>
             12月企业债券融资同比多增 <span className="font-bold">1683亿元</span>。受益于化债背景下城投再融资环境改善及产业债发行回暖，直接融资渠道功能有所修复。
           </p>
         </InsightBox>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '500ms' }}>
          <TsfDecContributionChart data={tsfDecContributionData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <CorpLoanTrendChart data={corpLoanTrendData} />
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