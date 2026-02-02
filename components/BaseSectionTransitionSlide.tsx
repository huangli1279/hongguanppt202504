
import React from 'react';

interface Props {
  id: string;
  title: string;
  subtitle: string;
}

export const BaseSectionTransitionSlide: React.FC<Props> = ({ id, title, subtitle }) => {
  return (
    <div className="w-full h-full bg-[#051c2c] flex flex-col justify-center items-center relative overflow-hidden text-white">
      {/* Background Decor with animations */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-lightBlue animate-top-line"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#002f52] opacity-0 transform -skew-x-12 translate-x-32 animate-bg-slide-in"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#00a9f4] opacity-0 rounded-tr-full animate-bg-expand"></div>
      
      {/* Animated pulsing circles - infinite loop (使用百分比尺寸自适应) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] aspect-square border border-webank-lightBlue/15 rounded-full animate-ring-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] aspect-square border border-webank-lightBlue/10 rounded-full animate-ring-pulse-delayed"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square border border-webank-lightBlue/5 rounded-full animate-ring-pulse-delayed-2"></div>
      
      {/* Floating particles - infinite loop */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-webank-lightBlue/30 rounded-full animate-float-1"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-webank-lightBlue/20 rounded-full animate-float-2"></div>
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-webank-lightBlue/40 rounded-full animate-float-3"></div>
      <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-webank-lightBlue/25 rounded-full animate-float-4"></div>

      <div className="z-10 text-center max-w-4xl px-8">
        {/* Chapter indicator with scale animation */}
        <div className="text-webank-lightBlue font-serif text-2xl mb-6 font-bold tracking-[0.2em] border-b border-webank-lightBlue/50 inline-block pb-2 opacity-0 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          章节 {id}
        </div>
        
        {/* Title with typewriter-like reveal */}
        <h1 className="text-7xl font-serif font-bold mb-8 text-white leading-tight opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {title}
        </h1>
        
        {/* Animated divider line */}
        <div className="h-1 bg-webank-lightBlue mx-auto mb-8 animate-line-expand-center"></div>
        
        {/* Subtitle with fade */}
        <h2 className="text-3xl font-light text-slate-300 leading-normal opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {subtitle}
        </h2>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 left-12 text-slate-500 font-sans text-[10px] tracking-wider uppercase opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
        个金管理部-数据管理室
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes lineExpandCenter {
          from { width: 0; opacity: 0; }
          to { width: 6%; opacity: 1; }
        }
        @keyframes topLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes bgSlideIn {
          from { transform: skewX(-12deg) translateX(100%); opacity: 0; }
          to { transform: skewX(-12deg) translateX(128px); opacity: 0.4; }
        }
        @keyframes bgExpand {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 0.1; }
        }
        @keyframes ringPulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1.3); opacity: 0; }
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
        @keyframes float4 {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(18px) translateX(-8px); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        .animate-line-expand-center {
          animation: lineExpandCenter 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.6s;
        }
        .animate-top-line {
          animation: topLine 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: left;
        }
        .animate-bg-slide-in {
          animation: bgSlideIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          animation-delay: 0.1s;
        }
        .animate-bg-expand {
          animation: bgExpand 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          transform-origin: bottom left;
          animation-delay: 0.2s;
        }
        .animate-ring-pulse {
          animation: ringPulse 3s ease-out infinite;
        }
        .animate-ring-pulse-delayed {
          animation: ringPulse 3s ease-out infinite;
          animation-delay: 1s;
        }
        .animate-ring-pulse-delayed-2 {
          animation: ringPulse 3s ease-out infinite;
          animation-delay: 2s;
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
        .animate-float-4 {
          animation: float4 4.5s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </div>
  );
};
