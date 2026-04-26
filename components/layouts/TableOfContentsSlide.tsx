
import React from 'react';
import { BarChart3, Zap, ShoppingCart, HardHat, Globe, Landmark, Activity, Target } from 'lucide-react';

const contents = [
  { id: '01', title: '一季度关键事件与政策主线', icon: Target },
  { id: '02', title: 'GDP 分析', icon: BarChart3 },
  { id: '03', title: '生产端分析', icon: Zap },
  { id: '04', title: '消费分析', icon: ShoppingCart },
  { id: '05', title: '投资分析', icon: HardHat },
  { id: '06', title: '进出口分析', icon: Globe },
  { id: '07', title: '财政分析', icon: Landmark },
  { id: '08', title: '金融数据分析', icon: Activity },
];

export const TableOfContentsSlide: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      {/* Top Decoration with animation */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue animate-top-line"></div>

      <header className="mb-10 animate-fade-in">
        <h1 className="text-4xl font-serif font-bold text-webank-blue">目录</h1>
      </header>

      <div className="grid grid-cols-2 gap-x-10 gap-y-5 flex-grow content-start">
        {contents.map((item, index) => (
          <div
            key={item.id}
            className="group flex items-center gap-5 px-5 py-5 border-b-2 border-slate-100 hover:border-webank-blue hover:bg-slate-50/60 transition-all duration-300 opacity-0 animate-fade-in-up fill-mode-forwards"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="font-serif font-bold text-4xl text-webank-lightBlue/60 group-hover:text-webank-blue transition-colors duration-300 leading-none w-12 shrink-0">
              {item.id}
            </div>

            <div className="w-px h-10 bg-slate-200 shrink-0" />

            <div className="flex items-center justify-center w-11 h-11 rounded-md bg-webank-blue/[0.06] text-webank-blue group-hover:bg-webank-blue group-hover:text-white transition-colors duration-300 shrink-0">
              <item.icon size={20} strokeWidth={1.8} />
            </div>

            <h3 className="flex-grow text-lg font-bold text-webank-blue leading-snug">
              {item.title}
            </h3>
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
