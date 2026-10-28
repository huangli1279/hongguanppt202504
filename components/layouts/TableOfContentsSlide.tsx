
import React from 'react';
import { BarChart3, Zap, ShoppingCart, HardHat, Globe, Landmark, Activity, TrendingUp, ArrowUpRight } from 'lucide-react';

const contents = [
  { id: '01', title: 'GDP 分析', subtitle: '第 01 章', icon: BarChart3 },
  { id: '02', title: '生产端分析', subtitle: '第 02 章', icon: Zap },
  { id: '03', title: '消费分析', subtitle: '第 03 章', icon: ShoppingCart },
  { id: '04', title: '投资分析', subtitle: '第 04 章', icon: HardHat },
  { id: '05', title: '进出口分析', subtitle: '第 05 章', icon: Globe },
  { id: '06', title: '财政分析', subtitle: '第 06 章', icon: Landmark },
  { id: '07', title: '金融数据分析', subtitle: '第 07 章', icon: Activity },
  { id: '08', title: '消费现状及趋势', subtitle: '专题一', icon: TrendingUp },
];

export const TableOfContentsSlide: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
          backgroundSize: '28px 28px',
          color: '#1a3a8a',
        }}
      />
      <div className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-webank-blue/[0.04] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-32 w-[380px] h-[380px] rounded-full bg-webank-lightBlue/[0.05] blur-3xl pointer-events-none" />

      {/* Top Decoration with animation */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue animate-top-line"></div>

      {/* Giant watermark numeral */}
      <div className="absolute right-12 top-10 font-serif font-bold text-[200px] leading-none text-webank-blue/[0.05] select-none pointer-events-none tracking-tighter">
        目录
      </div>

      <header className="mb-4 animate-fade-in relative z-10">
        <div className="flex items-end gap-4">
          <div className="flex items-end gap-3">
            <div className="w-1.5 h-12 bg-webank-blue rounded-sm" />
            <h1 className="text-5xl font-serif font-bold text-webank-blue leading-none">目录</h1>
          </div>
          <div className="flex-grow ml-2 mb-2 h-px bg-gradient-to-r from-webank-blue/40 via-slate-200 to-transparent" />
          <span className="text-sm text-slate-400 pb-1">共 {contents.length} 章</span>
        </div>
      </header>

      <div className="grid grid-cols-2 gap-x-8 gap-y-2.5 flex-grow content-start pt-8 relative z-10">
        {contents.map((item, index) => (
          <div
            key={item.id}
            className="group relative flex items-center gap-5 px-5 py-4 rounded-xl border border-slate-100 bg-white/60 backdrop-blur-sm hover:border-webank-blue/40 hover:bg-white hover:shadow-[0_8px_24px_-12px_rgba(26,58,138,0.25)] transition-all duration-300 opacity-0 animate-fade-in-up fill-mode-forwards overflow-hidden"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            {/* Left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-webank-blue scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />

            <div className="relative flex flex-col items-center w-12 shrink-0">
              <div className="font-serif font-bold text-4xl text-webank-blue/80 group-hover:text-webank-blue transition-colors duration-300 leading-none">
                {item.id}
              </div>
              <div className="mt-1 h-0.5 w-6 bg-webank-blue/30 group-hover:w-10 group-hover:bg-webank-blue transition-all duration-300" />
            </div>

            <div className="w-px h-14 bg-gradient-to-b from-transparent via-slate-200 to-transparent shrink-0" />

            <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-webank-blue/[0.08] to-webank-lightBlue/[0.12] text-webank-blue group-hover:from-webank-blue group-hover:to-webank-lightBlue group-hover:text-white transition-all duration-300 shrink-0 ring-1 ring-webank-blue/10 group-hover:ring-webank-blue/30">
              <item.icon size={26} strokeWidth={1.8} />
            </div>

            <div className="flex-grow min-w-0">
              <h3 className="text-lg font-bold text-webank-blue leading-snug truncate">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1 truncate">
                {item.subtitle}
              </p>
            </div>

            <ArrowUpRight
              size={18}
              className="shrink-0 text-slate-300 group-hover:text-webank-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              strokeWidth={2}
            />
          </div>
        ))}
      </div>

       <footer className="absolute bottom-4 left-12 right-12 border-t border-slate-200 pt-2 flex justify-between text-caption text-slate-400">
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
        @keyframes topLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fadeIn 1s ease-out forwards; }
        .animate-top-line {
          animation: topLine 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: left;
        }
        .fill-mode-forwards { animation-fill-mode: forwards; }
      `}</style>
    </div>
  );
};
