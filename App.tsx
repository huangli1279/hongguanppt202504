import React, { useEffect, useState, useRef } from 'react';
import { CoverSlide } from './components/CoverSlide';
import { TableOfContentsSlide } from './components/TableOfContentsSlide';
import { BaseSectionTransitionSlide } from './components/BaseSectionTransitionSlide';
import { ContentSlide04 } from './components/ContentSlide04';
import { ContentSlide05 } from './components/ContentSlide05';
import { ContentSlide06 } from './components/ContentSlide06';
import { ContentSlide07 } from './components/ContentSlide07';
import { ContentSlide09 } from './components/ContentSlide09';
import { ContentSlide10 } from './components/ContentSlide10';
import { ContentSlide11 } from './components/ContentSlide11';
import { ContentSlide12 } from './components/ContentSlide12';
import { ContentSlide13 } from './components/ContentSlide13';
import { ContentSlide14 } from './components/ContentSlide14';
import { ContentSlide16 } from './components/ContentSlide16';
import { ContentSlide17 } from './components/ContentSlide17';
import { ContentSlide18 } from './components/ContentSlide18';
import { ContentSlide19 } from './components/ContentSlide19';
import { ThankYouSlide } from './components/ThankYouSlide';

const App: React.FC = () => {
  const [scale, setScale] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(1);
  const isThrottled = useRef(false);
  const TOTAL_SLIDES = 20;

  const handleResize = () => {
    const targetWidth = 1280;
    const targetHeight = 720;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const scaleX = windowWidth / targetWidth;
    const scaleY = windowHeight / targetHeight;
    const newScale = Math.min(scaleX, scaleY) * 0.95;
    setScale(newScale);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isThrottled.current) return;
      if (Math.abs(e.deltaY) > 20) {
        if (e.deltaY > 0) {
          setCurrentSlide(prev => (prev < TOTAL_SLIDES ? prev + 1 : 1));
        } else {
          setCurrentSlide(prev => (prev > 1 ? prev - 1 : TOTAL_SLIDES));
        }
        isThrottled.current = true;
        setTimeout(() => { isThrottled.current = false; }, 1000);
      }
    };
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        setCurrentSlide(prev => (prev < TOTAL_SLIDES ? prev + 1 : 1));
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        setCurrentSlide(prev => (prev > 1 ? prev - 1 : TOTAL_SLIDES));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getVisibleSlides = () => {
    const maxVisible = 3;
    if (TOTAL_SLIDES <= maxVisible) {
      return Array.from({ length: TOTAL_SLIDES }, (_, i) => i + 1);
    }
    let start = Math.max(1, currentSlide - Math.floor(maxVisible / 2));
    let end = start + maxVisible - 1;
    if (end > TOTAL_SLIDES) {
      end = TOTAL_SLIDES;
      start = Math.max(1, end - maxVisible + 1);
    }
    const slides = [];
    for (let i = start; i <= end; i++) {
      slides.push(i);
    }
    return slides;
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-[#f0f0f0] relative overflow-hidden">
      <div 
        style={{
          width: '1280px',
          height: '720px',
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
        className="relative bg-white overflow-hidden shadow-2xl transition-all duration-500"
      >
        {currentSlide === 1 && <CoverSlide />}
        {currentSlide === 2 && <TableOfContentsSlide />}
        {currentSlide === 3 && <BaseSectionTransitionSlide id="01" title="GDP 分析" subtitle="定基调，找温差" />}
        {currentSlide === 4 && <ContentSlide04 />}
        {currentSlide === 5 && <ContentSlide05 />}
        {currentSlide === 6 && <ContentSlide06 />}
        {currentSlide === 7 && <ContentSlide07 />}
        {currentSlide === 8 && <BaseSectionTransitionSlide id="02" title="生产端分析" subtitle="看景气，看利润" />}
        {currentSlide === 9 && <ContentSlide09 />}
        {currentSlide === 10 && <ContentSlide10 />}
        {currentSlide === 11 && <ContentSlide11 />}
        {currentSlide === 12 && <ContentSlide12 />}
        {currentSlide === 13 && <ContentSlide13 />}
        {currentSlide === 14 && <ContentSlide14 />}
        {currentSlide === 15 && <BaseSectionTransitionSlide id="03" title="消费分析" subtitle="看意愿，看结构" />}
        {currentSlide === 16 && <ContentSlide16 />}
        {currentSlide === 17 && <ContentSlide17 />}
        {currentSlide === 18 && <ContentSlide18 />}
        {currentSlide === 19 && <ContentSlide19 />}
        {currentSlide === 20 && <ThankYouSlide />}
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50 select-none pointer-events-none">
        {getVisibleSlides().map((slide) => (
          <div key={slide} className="flex items-center gap-3 justify-end h-8 transition-all duration-500">
            <span className={`font-serif transition-all duration-500 ${
              currentSlide === slide 
                ? 'text-webank-blue font-bold text-lg translate-x-0 opacity-100' 
                : 'text-slate-400 font-medium text-xs translate-x-1 opacity-60'
            }`}>
              {String(slide).padStart(2, '0')}
            </span>
            <div className={`w-1 rounded-full transition-all duration-500 ${
              currentSlide === slide 
                ? 'h-8 bg-webank-blue shadow-lg' 
                : 'h-1.5 bg-slate-300'
            }`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
