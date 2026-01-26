

import React from 'react';
import { GdpTrendChart } from './GdpTrendChart';
import { DeflatorChart } from './DeflatorChart';
import { gdpTrendData, deflatorData } from '../data';
import { TrendingDown, TrendingUp, BarChart3, Scale } from 'lucide-react';

const BulletPoint = ({ title, children, icon: Icon, delay }: { title: string, children?: React.ReactNode, icon: any, delay: string }) => (
  <div className={`flex flex-col gap-2 p-4 bg-slate-50 border-l-4 border-webank-accent/20 hover:border-webank-accent transition-all duration-700 ease-out opacity-0 animate-fade-in-up fill-mode-forwards`} style={{ animationDelay: delay }}>
    <div className="flex items-center gap-2 text-webank-accent">
      <Icon size={18} />
      <h4 className="font-bold text-webank-blue text-sm uppercase">{title}</h4>
    </div>
    <div className="text-xs text-webank-text leading-relaxed">
      {children}
    </div>
  </div>
);

export const SlideContent: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue"></div>

      {/* Header Section */}
      <header className="mb-8 animate-fade-in">
        <div className="flex justify-between items-end mb-2">
          <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
            2025年度宏观经济报告
          </span>
        </div>
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight w-3/4">
          2025年GDP实现5.0%增长圆满收官“十四五”，<br/>
          <span className="text-webank-accent">四季度增速回落至4.5%</span>
        </h1>
      </header>

      {/* Key Takeaways Grid */}
      <section className="grid grid-cols-4 gap-6 mb-8 h-32">
        <BulletPoint title="总量定调" icon={BarChart3} delay="100ms">
          <p>
            全年GDP达 <span className="font-bold">140.2万亿元</span>，同比增长 <span className="font-bold">5.0%</span>，成功实现全年预期目标。
          </p>
        </BulletPoint>

        <BulletPoint title="季度走势“前高后低”" icon={TrendingDown} delay="200ms">
          <p>
            受基数及内需影响逐季回落：<br/>Q1 5.4% <span className="text-slate-400">→</span> Q4 4.5%。<br/>
            四季度环比增长 <span className="font-bold">1.2%</span>，动能仍具韧性。
          </p>
        </BulletPoint>

        <BulletPoint title="人均水平" icon={TrendingUp} delay="300ms">
          <p>
            人均GDP稳步提升，国民经济顶住“供强需弱”压力，实现了质的有效提升和量的合理增长。
          </p>
        </BulletPoint>

        <BulletPoint title="名义 vs 实际“温差”" icon={Scale} delay="400ms">
          <p>
            Q4实际增长4.5% {'>'} 名义3.8%。<br/>
            <span className="text-red-600 font-semibold">GDP平减指数</span> 约 -0.7%，较Q3(-1.1%)收窄，但连续11个季度为负。
          </p>
        </BulletPoint>
      </section>

      {/* Charts Section */}
      <section className="flex-grow grid grid-cols-2 gap-10 min-h-0">
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '600ms' }}>
          <GdpTrendChart data={gdpTrendData} />
        </div>
        <div className="bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards" style={{ animationDelay: '800ms' }}>
          <DeflatorChart data={deflatorData} />
        </div>
      </section>

      {/* Footer */}
      <footer className="absolute bottom-4 left-12 right-12 border-t border-slate-200 pt-2 flex justify-between text-[10px] text-slate-400">
        <span>个金管理部-数据管理室</span>
        
      </footer>

      {/* Styles for simple animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .fill-mode-forwards {
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};