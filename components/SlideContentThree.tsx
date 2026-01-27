import React from 'react';
import { DemandContributionChart } from './DemandContributionChart';
import { threeCarriagesContributionData } from '../data';
import { Globe, ShoppingCart, Briefcase, TrendingDown, ArrowRight } from 'lucide-react';

const InsightColumn = ({ title, highlight, children, icon: Icon, type, delay }: { title: string, highlight?: string, children?: React.ReactNode, icon: any, type: 'strong' | 'weak' | 'stable', delay: string }) => {
    const borderColor = type === 'strong' ? 'border-webank-lightBlue' : (type === 'weak' ? 'border-red-500' : 'border-webank-blue');
    const iconColor = type === 'strong' ? 'text-webank-lightBlue' : (type === 'weak' ? 'text-red-500' : 'text-webank-blue');

    return (
        <div className={`flex flex-col p-5 bg-slate-50 border-t-4 ${borderColor} opacity-0 animate-fade-in-up fill-mode-forwards h-full`} style={{ animationDelay: delay }}>
            <div className={`flex items-center gap-2 mb-3 ${iconColor}`}>
                <Icon size={20} />
                <h4 className="font-bold text-sm uppercase tracking-wider">{title}</h4>
            </div>
            {highlight && (
                <div className="text-2xl font-serif font-bold text-webank-blue mb-2">
                    {highlight}
                </div>
            )}
            <div className="text-xs text-webank-text leading-relaxed">
                {children}
            </div>
        </div>
    );
};

export const SlideContentThree: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue"></div>

      {/* Header */}
      <header className="mb-6 animate-fade-in">
         <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            需求侧分析：供强需弱
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          净出口Q4贡献率升至31.1%有效对冲内需缺口，<span className="text-webank-accent">资本形成贡献率仅16%</span>
        </h1>
      </header>

      {/* Top Insights Grid */}
      <section className="grid grid-cols-3 gap-6 mb-8 h-40">
        <InsightColumn title="外需：强力支撑" highlight="31.1% 贡献率" icon={Globe} type="strong" delay="100ms">
          <p>
            全年出口增长 <span className="font-bold">6.1%</span>。外贸韧性极大缓解了内需不足压力，Q4净出口对增长贡献率达31.1%，呈现典型的“外需好于内需”特征。
          </p>
        </InsightColumn>
        
        <InsightColumn title="投资：明显拖累" highlight="16.0% 贡献率" icon={TrendingDown} type="weak" delay="200ms">
           <p>
            Q4资本形成总额贡献率仅16.0%。受 <span className="font-bold text-red-600">房地产开发投资 (-17.2%)</span> 深度调整影响，全年固投下降3.8%，制造业投资仅维持微增。
          </p>
        </InsightColumn>

        <InsightColumn title="消费：压舱石" highlight="52.9% 贡献率" icon={ShoppingCart} type="stable" delay="300ms">
           <p>
            虽然社零增速放缓，但以旧换新及服务需求释放带动 <span className="font-bold">服务消费 (+5.5%)</span> 占比提升，最终消费支出贡献率维持在50%以上，发挥基础性作用。
          </p>
        </InsightColumn>
      </section>

      {/* Charts Section */}
      <section className="flex-grow flex justify-center min-h-0">
         <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards w-full" style={{ animationDelay: '500ms' }}>
            <DemandContributionChart data={threeCarriagesContributionData} />
         </div>
      </section>

       {/* Footer */}
      <footer className="absolute bottom-4 left-12 right-12 border-t border-slate-200 pt-2 flex justify-between text-[10px] text-slate-400">
        <span>个金管理部-数据管理室</span>
        
      </footer>

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