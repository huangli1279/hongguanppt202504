
import React from 'react';

interface Props {
  id: string;
  title: string;
  subtitle: string;
}

export const BaseSectionTransitionSlide: React.FC<Props> = ({ id, title, subtitle }) => {
  return (
    <div className="w-full h-full bg-[#051c2c] flex flex-col justify-center items-center relative overflow-hidden text-white">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-lightBlue"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#002f52] opacity-40 transform -skew-x-12 translate-x-32"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-[#00a9f4] opacity-10 rounded-tr-full"></div>

      <div className="z-10 text-center animate-fade-in-up max-w-4xl px-8">
        <div className="text-webank-lightBlue font-serif text-2xl mb-6 font-bold tracking-[0.2em] border-b border-webank-lightBlue/50 inline-block pb-2">
          章节 {id}
        </div>
        <h1 className="text-7xl font-serif font-bold mb-8 text-white leading-tight">
          {title}
        </h1>
        <div className="w-20 h-1 bg-webank-lightBlue mx-auto mb-8"></div>
        <h2 className="text-3xl font-light text-slate-300 leading-normal">
          {subtitle}
        </h2>
      </div>

       {/* Footer */}
      <div className="absolute bottom-8 left-12 text-slate-500 font-sans text-[10px] tracking-wider uppercase">
         个金管理部-数据管理室
      </div>

       <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};
