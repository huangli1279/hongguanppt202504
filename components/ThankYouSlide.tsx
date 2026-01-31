
import React from 'react';
import { Globe } from 'lucide-react';

export const ThankYouSlide: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#051c2c] flex flex-col relative overflow-hidden text-white">
      
      {/* Background Decor with animations */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#002f52] opacity-0 transform -skew-x-12 translate-x-20 animate-bg-slide-in"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#005c8f] opacity-0 rounded-tr-full animate-bg-expand"></div>
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-lightBlue animate-top-line"></div>
      
      {/* Animated rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-webank-lightBlue/10 rounded-full animate-ring-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-webank-lightBlue/5 rounded-full animate-ring-pulse-delayed"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-webank-lightBlue/5 rounded-full animate-ring-pulse-delayed-2"></div>

      <div className="flex-grow flex flex-col justify-center items-center z-10">
        
        {/* Icon & Title */}
        <div className="flex flex-col items-center mb-8">
            {/* Globe with pulse effect */}
            <div className="relative mb-6 opacity-0 animate-scale-bounce" style={{ animationDelay: '0.2s' }}>
              <Globe className="text-webank-lightBlue animate-spin-slow" size={56} />
              <div className="absolute inset-0 bg-webank-lightBlue/20 rounded-full animate-ping-slow"></div>
            </div>
            
            {/* Main title with character animation effect */}
            <h1 className="text-6xl font-serif font-bold mb-6 tracking-wider opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              感谢观看
            </h1>
            
            {/* Animated divider */}
            <div className="h-1 bg-webank-lightBlue mb-6 animate-line-expand-center"></div>
            
            {/* Subtitle */}
            <h2 className="text-2xl font-light text-slate-300 tracking-widest uppercase opacity-0 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              Thank You
            </h2>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 w-full text-center opacity-0 animate-fade-in" style={{ animationDelay: '1s' }}>
        <p className="text-slate-500 font-mono text-[10px] tracking-widest uppercase mb-1">
          个金管理部-数据管理室
        </p>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleBounce {
          0% { opacity: 0; transform: scale(0); }
          60% { transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes lineExpandCenter {
          from { width: 0; opacity: 0; }
          to { width: 96px; opacity: 1; }
        }
        @keyframes topLine {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes bgSlideIn {
          from { transform: skewX(-12deg) translateX(100%); opacity: 0; }
          to { transform: skewX(-12deg) translateX(80px); opacity: 0.3; }
        }
        @keyframes bgExpand {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 0.2; }
        }
        @keyframes ringPulse {
          0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1.2); opacity: 0; }
        }
        @keyframes pingSlow {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(2); opacity: 0; }
        }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .animate-scale-bounce {
          animation: scaleBounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
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
        .animate-ping-slow {
          animation: pingSlow 2s ease-out infinite;
        }
        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};
