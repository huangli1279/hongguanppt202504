
import React from 'react';
import { Globe, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const ThankYouSlide: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#051c2c] flex flex-col relative overflow-hidden text-white">
      
      {/* Background Decor - Consistent with Cover/Transition slides */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#002f52] opacity-30 transform -skew-x-12 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#005c8f] opacity-20 rounded-tr-full"></div>
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-lightBlue"></div>

      <div className="flex-grow flex flex-col justify-center items-center z-10 animate-fade-in-up">
        
        {/* Icon & Title */}
        <div className="flex flex-col items-center mb-8">
            <Globe className="text-webank-lightBlue mb-6 opacity-90" size={56} />
            <h1 className="text-6xl font-serif font-bold mb-6 tracking-wider">
            感谢观看
            </h1>
            <div className="w-24 h-1 bg-webank-lightBlue mb-6"></div>
            <h2 className="text-2xl font-light text-slate-300 tracking-widest uppercase">
            Thank You
            </h2>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 w-full text-center">
        <p className="text-slate-500 font-mono text-[10px] tracking-widest uppercase mb-1">
             个金管理部-数据管理室
        </p>
      </footer>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};
