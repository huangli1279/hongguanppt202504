
import React from 'react';
import { Globe, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

export const ThankYouSlide: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#051c2c] flex flex-col relative overflow-hidden text-white">
      
      {/* Background Decor - Consistent with Cover/Transition slides */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#002f52] opacity-30 transform -skew-x-12 translate-x-20"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[#005c8f] opacity-20 rounded-tr-full"></div>
      <div className="absolute top-0 left-0 w-full h-2 bg-mckinsey-lightBlue"></div>

      <div className="flex-grow flex flex-col justify-center items-center z-10 animate-fade-in-up">
        
        {/* Icon & Title */}
        <div className="flex flex-col items-center mb-8">
            <Globe className="text-mckinsey-lightBlue mb-6 opacity-90" size={56} />
            <h1 className="text-6xl font-serif font-bold mb-6 tracking-wider">
            感谢观看
            </h1>
            <div className="w-24 h-1 bg-mckinsey-lightBlue mb-6"></div>
            <h2 className="text-2xl font-light text-slate-300 tracking-widest uppercase">
            Thank You
            </h2>
        </div>

        {/* Call to Action */}
        <div className="mb-16 text-center">
             <p className="text-lg text-slate-400 font-light mb-2">如有任何疑问，欢迎随时联系</p>
             <p className="text-mckinsey-lightBlue font-serif text-xl">Q & A 环节</p>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-3 gap-12 text-sm text-slate-300 font-light border-t border-slate-700 pt-8">
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="p-3 rounded-full bg-slate-800 group-hover:bg-mckinsey-lightBlue transition-colors duration-300">
                <Mail size={20} className="text-white" />
            </div>
            <span className="group-hover:text-white transition-colors">contact@mckinsey.com</span>
          </div>
          
          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="p-3 rounded-full bg-slate-800 group-hover:bg-mckinsey-lightBlue transition-colors duration-300">
                 <Phone size={20} className="text-white" />
            </div>
            <span className="group-hover:text-white transition-colors">+86 10 8555 8888</span>
          </div>

          <div className="flex flex-col items-center gap-2 group cursor-pointer">
            <div className="p-3 rounded-full bg-slate-800 group-hover:bg-mckinsey-lightBlue transition-colors duration-300">
                <MapPin size={20} className="text-white" />
            </div>
            <span className="group-hover:text-white transition-colors">Beijing · Shanghai · Shenzhen</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-8 w-full text-center">
        <p className="text-slate-500 font-mono text-[10px] tracking-widest uppercase mb-1">
             McKinsey Global Institute Analysis
        </p>
        <p className="text-slate-600 font-mono text-[10px]">
            © 2026 McKinsey & Company. All rights reserved.
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
