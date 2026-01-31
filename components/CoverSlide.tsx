
import React from 'react';
import { Globe } from 'lucide-react';

export const CoverSlide: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#051c2c] flex flex-col relative overflow-hidden text-white">
      
      {/* Abstract Background Elements with animations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#002f52] opacity-30 transform -skew-x-12 translate-x-20 animate-bg-slide-in"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#005c8f] opacity-20 rounded-tr-full animate-bg-expand"></div>
      
      {/* Floating particles */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-webank-lightBlue/30 rounded-full animate-float-1"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-webank-lightBlue/20 rounded-full animate-float-2"></div>
      <div className="absolute bottom-1/3 right-1/5 w-1.5 h-1.5 bg-webank-lightBlue/40 rounded-full animate-float-3"></div>
      
      {/* Ripple effects - infinite loop */}
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-webank-lightBlue/15 rounded-full animate-ripple"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-webank-lightBlue/10 rounded-full animate-ripple-delayed"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-webank-lightBlue/5 rounded-full animate-ripple-delayed-2"></div>
      
      <div className="flex-grow flex flex-col justify-center px-24 z-10">
        {/* Logo / Brand Area */}
        <div className="flex items-center gap-3 mb-12 opacity-0 animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
          <Globe className="text-webank-lightBlue animate-spin-slow" size={32} />
          <span className="text-sm font-bold tracking-widest uppercase border-l-2 border-webank-lightBlue pl-3">
            个金管理部-数据管理室
          </span>
        </div>

        {/* Main Title with staggered animation */}
        <h1 className="text-6xl font-serif font-bold leading-tight mb-8">
          <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>2025年第四季度</span>
          <span className="block text-webank-lightBlue opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>中国宏观经济运行</span>
          <span className="block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>分析报告</span>
        </h1>

        {/* Animated underline */}
        <div className="h-1 bg-webank-lightBlue animate-line-expand" style={{ animationDelay: '1.1s' }}></div>
      </div>

      {/* Footer / Date */}
      <div className="absolute bottom-12 left-24 text-slate-400 font-mono text-sm opacity-0 animate-fade-in" style={{ animationDelay: '1.3s' }}>
        2026年1月
      </div>
      
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes lineExpand {
          from { width: 0; opacity: 0; }
          to { width: 200px; opacity: 1; }
        }
        @keyframes bgSlideIn {
          from { transform: skewX(-12deg) translateX(100%); opacity: 0; }
          to { transform: skewX(-12deg) translateX(80px); opacity: 0.3; }
        }
        @keyframes bgExpand {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 0.2; }
        }
        @keyframes float1 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(15px) translateX(-15px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-25px) translateX(5px); }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-line-expand {
          animation: lineExpand 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-bg-slide-in {
          animation: bgSlideIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-bg-expand {
          animation: bgExpand 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: bottom left;
        }
        .animate-float-1 {
          animation: float1 4s ease-in-out infinite;
        }
        .animate-float-2 {
          animation: float2 5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .animate-float-3 {
          animation: float3 6s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }
        @keyframes ripple {
          0% { transform: scale(0.5); opacity: 0; }
          30% { opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .animate-ripple {
          animation: ripple 4s ease-out infinite;
        }
        .animate-ripple-delayed {
          animation: ripple 4s ease-out infinite;
          animation-delay: 1.3s;
        }
        .animate-ripple-delayed-2 {
          animation: ripple 4s ease-out infinite;
          animation-delay: 2.6s;
        }
      `}</style>
    </div>
  );
};
