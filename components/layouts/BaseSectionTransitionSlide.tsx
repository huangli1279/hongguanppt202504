import React from 'react';

interface Props {
  id: string;
  title: string;
  subtitle?: string;
}

export const BaseSectionTransitionSlide: React.FC<Props> = ({ id, title, subtitle }) => {
  return (
    <div className="w-full h-full bg-webank-blue flex flex-col justify-center items-center relative overflow-hidden text-white">
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-lightBlue animate-top-line" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-webank-darkBlue opacity-0 transform -skew-x-12 translate-x-32 animate-bg-slide-in" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-webank-lightBlue opacity-0 rounded-tr-full animate-bg-expand" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] aspect-square border border-webank-lightBlue/15 rounded-full animate-ring-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55%] aspect-square border border-webank-lightBlue/10 rounded-full animate-ring-pulse-delayed" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] aspect-square border border-webank-lightBlue/5  rounded-full animate-ring-pulse-delayed-2" />

      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-webank-lightBlue/30 rounded-full animate-float-1" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-webank-lightBlue/20 rounded-full animate-float-2" />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-webank-lightBlue/40 rounded-full animate-float-3" />
      <div className="absolute bottom-1/4 right-1/5 w-2 h-2 bg-webank-lightBlue/25 rounded-full animate-float-4" />

      <div className="z-10 text-center max-w-5xl px-8">
        <div className="text-webank-lightBlue font-serif text-h2 mb-6 tracking-[0.2em] border-b border-webank-lightBlue/50 inline-block pb-2 animate-scale-in" style={{ animationDelay: '0.2s' }}>
          章节 {id}
        </div>

        <h1
          className="font-serif font-bold mb-8 text-white leading-tight animate-fade-in-up"
          style={{ fontSize: subtitle ? '56px' : '72px', animationDelay: '0.4s' }}
        >
          {title}
        </h1>

        <div className="h-1 w-0 bg-webank-lightBlue mx-auto mb-8 animate-line-expand-center" />

        {subtitle && (
          <p
            className="text-white/80 font-sans text-[18px] leading-relaxed max-w-4xl mx-auto animate-fade-in-up"
            style={{ animationDelay: '0.7s' }}
          >
            {subtitle}
          </p>
        )}
      </div>

      <div className="absolute bottom-8 left-12 text-webank-muted font-sans text-caption tracking-wider uppercase animate-fade-in" style={{ animationDelay: '1s' }}>
        个金管理部-数据管理室
      </div>
    </div>
  );
};
