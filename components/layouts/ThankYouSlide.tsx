import React from 'react';
import { Globe } from 'lucide-react';

export const ThankYouSlide: React.FC = () => {
  return (
    <div className="w-full h-full bg-webank-blue flex flex-col relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-webank-darkBlue opacity-0 transform -skew-x-12 translate-x-20 animate-bg-slide-in" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-webank-midBlue opacity-0 rounded-tr-full animate-bg-expand" />
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-lightBlue animate-top-line" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-webank-lightBlue/10 rounded-full animate-ring-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-webank-lightBlue/5  rounded-full animate-ring-pulse-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-webank-lightBlue/5 rounded-full animate-ring-pulse-delayed-2" />

      <div className="flex-grow flex flex-col justify-center items-center z-10">
        <div className="flex flex-col items-center mb-8">
          <div className="relative mb-6 animate-scale-bounce" style={{ animationDelay: '0.2s' }}>
            <Globe className="text-webank-lightBlue animate-spin-slow" size={56} />
            <div className="absolute inset-0 bg-webank-lightBlue/20 rounded-full animate-ping-slow" />
          </div>

          <h1 className="font-serif font-bold mb-6 tracking-wider animate-fade-in-up" style={{ fontSize: '64px', animationDelay: '0.4s' }}>
            感谢观看
          </h1>

          <div className="h-1 bg-webank-lightBlue mb-6 animate-line-expand-center" />

          <h2 className="text-h2 font-light text-slate-300 tracking-widest uppercase animate-fade-in" style={{ animationDelay: '0.8s' }}>
            Thank You
          </h2>
        </div>
      </div>

      <footer className="absolute bottom-8 w-full text-center animate-fade-in" style={{ animationDelay: '1s' }}>
        <p className="text-webank-muted font-mono text-caption tracking-widest uppercase mb-1">
          个金管理部-数据管理室
        </p>
      </footer>
    </div>
  );
};
