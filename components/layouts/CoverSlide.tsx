import React from 'react';
import { Globe } from 'lucide-react';

export const CoverSlide: React.FC = () => {
  return (
    <div className="w-full h-full bg-webank-blue flex flex-col relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-webank-darkBlue opacity-30 transform -skew-x-12 translate-x-20 animate-bg-slide-in" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-webank-midBlue opacity-20 rounded-tr-full animate-bg-expand" />

      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-webank-lightBlue/30 rounded-full animate-float-1" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-webank-lightBlue/20 rounded-full animate-float-2" />
      <div className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 bg-webank-lightBlue/40 rounded-full animate-float-3" />

      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-webank-lightBlue/15 rounded-full animate-ripple" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-webank-lightBlue/10 rounded-full animate-ripple-delayed" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-webank-lightBlue/5  rounded-full animate-ripple-delayed-2" />

      <div className="flex-grow flex flex-col justify-center px-24 z-10">
        <div className="flex items-center gap-3 mb-12 animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
          <Globe className="text-webank-lightBlue animate-spin-slow" size={32} />
          <span className="text-caption font-bold tracking-widest uppercase border-l-2 border-webank-lightBlue pl-3">
            个金管理部-数据管理室
          </span>
        </div>

        <h1 className="font-serif leading-tight mb-8" style={{ fontSize: '64px', fontWeight: 700 }}>
          <span className="block animate-fade-in-up" style={{ animationDelay: '0.5s' }}>2026年第二季度</span>
          <span className="block text-webank-lightBlue animate-fade-in-up" style={{ animationDelay: '0.7s' }}>中国宏观经济运行</span>
          <span className="block animate-fade-in-up" style={{ animationDelay: '0.9s' }}>分析报告</span>
        </h1>

        <div className="h-1 w-0 bg-webank-lightBlue animate-line-expand" style={{ animationDelay: '1.1s' }} />
      </div>

      <div className="absolute bottom-12 left-24 text-webank-muted font-mono text-meta animate-fade-in" style={{ animationDelay: '1.3s' }}>
        2026年7月
      </div>
    </div>
  );
};
