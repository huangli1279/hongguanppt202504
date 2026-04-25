
import React from 'react';
import { BarChart3, Zap, ShoppingCart, HardHat, Globe, Landmark, Activity, Target } from 'lucide-react';

const contents = [
  { id: '01', title: '一季度关键事件与政策主线', icon: Target, desc: '春节、外部冲击、两会定调与"十五五"规划落地' },
  { id: '02', title: 'GDP 分析：找温差，看结构', icon: BarChart3, desc: '名义与实际增速"温差"显现，价格传导待疏通' },
  { id: '03', title: '生产端分析：看景气，看价格，看利润', icon: Zap, desc: '制造业PMI跃升至50.4%，工业利润显著增长，PPI降幅收窄' },
  { id: '04', title: '消费分析：看意愿，看结构，看价格', icon: ShoppingCart, desc: '社零回暖至2.4%，服务消费强于商品，核心CPI回升至1.2%' },
  { id: '05', title: '投资分析：看地产拖累，看制造提速', icon: HardHat, desc: '固投企稳1.7%，基建增8.9%托底，制造业提速，地产仍寻底' },
  { id: '06', title: '进出口分析：看韧性，看结构', icon: Globe, desc: '"抢出口"支撑增速，AI产业链量价齐升，出口结构优化' },
  { id: '07', title: '财政分析：看钱袋子', icon: Landmark, desc: '一般公共预算收入增2.4%，支出+2.6%精准倾斜民生' },
  { id: '08', title: '金融数据分析：看总量，看活性', icon: Activity, desc: '社融平稳扩表，企业贷款支撑信贷，M1-M2剪刀差小幅走扩' },
];

export const TableOfContentsSlide: React.FC = () => {
  return (
    <div className="w-full h-full bg-white flex flex-col p-12 overflow-hidden relative">
      {/* Top Decoration with animation */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue animate-top-line"></div>

      <header className="mb-10 animate-fade-in">
        <h1 className="text-4xl font-serif font-bold text-webank-blue">目录</h1>
        <p className="text-webank-subtext mt-2 text-sm uppercase tracking-widest">Table of Contents</p>
      </header>

      <div className="grid grid-cols-2 gap-x-12 gap-y-6 flex-grow content-start">
        {contents.map((item, index) => (
          <div 
            key={item.id} 
            className="flex items-start gap-4 p-4 border-b border-slate-100 hover:bg-slate-50 transition-colors duration-300 opacity-0 animate-fade-in-up fill-mode-forwards"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="text-2xl font-bold text-webank-lightBlue opacity-50 font-serif">
              {item.id}
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-2 mb-1">
                <item.icon size={16} className="text-webank-blue" />
                <h3 className="text-lg font-bold text-webank-blue">{item.title}</h3>
              </div>
              <p className="text-xs text-webank-subtext pl-6">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

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
