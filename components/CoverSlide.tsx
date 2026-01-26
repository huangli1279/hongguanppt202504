
import React from 'react';
import { Globe } from 'lucide-react';

export const CoverSlide: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#051c2c] flex flex-col relative overflow-hidden text-white">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#002f52] opacity-30 transform -skew-x-12 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#005c8f] opacity-20 rounded-tr-full"></div>
      
      <div className="flex-grow flex flex-col justify-center px-24 z-10 animate-fade-in-up">
        {/* Logo / Brand Area */}
        <div className="flex items-center gap-3 mb-12 opacity-80">
          <Globe className="text-webank-lightBlue" size={32} />
          <span className="text-sm font-bold tracking-widest uppercase border-l-2 border-webank-lightBlue pl-3">
            个金管理部-数据管理室
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl font-serif font-bold leading-tight mb-8">
          2025年第四季度<br/>
          <span className="text-webank-lightBlue">中国宏观经济运行</span><br/>
          分析报告
        </h1>

        {/* Subtitle */}
        <div className="w-24 h-1 bg-webank-lightBlue mb-8"></div>
        <h2 className="text-2xl font-light text-slate-300 max-w-2xl leading-relaxed">
          GDP实现5.0%增长圆满收官“十四五”<br/>
          结构性分化与动能转换深度复盘
        </h2>
      </div>

      {/* Footer / Date */}
      <div className="absolute bottom-12 left-24 text-slate-400 font-mono text-sm">
        2026年1月
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};
