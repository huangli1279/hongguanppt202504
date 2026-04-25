import React, { useEffect, useState, useRef } from 'react';
import { CoverSlide } from './components/CoverSlide';
import { PolicyTimeline2026Slide } from './components/PolicyTimeline2026Slide';
import { TableOfContentsSlide } from './components/TableOfContentsSlide';
import { BaseSectionTransitionSlide } from './components/BaseSectionTransitionSlide';
import { ContentSlide05 } from './components/ContentSlide05';
import { ContentSlide06 } from './components/ContentSlide06';
import { ContentSlide07 } from './components/ContentSlide07';
import { ContentSlide08 } from './components/ContentSlide08';
import { ContentSlide10 } from './components/ContentSlide10';
import { ContentSlide11 } from './components/ContentSlide11';
import { ContentSlide12 } from './components/ContentSlide12';
import { ContentSlide13 } from './components/ContentSlide13';
import { ContentSlide14 } from './components/ContentSlide14';
import { ContentSlide15 } from './components/ContentSlide15';
import { ContentSlide17 } from './components/ContentSlide17';
import { ContentSlide18 } from './components/ContentSlide18';
import { ContentSlide19 } from './components/ContentSlide19';
import { ContentSlide20 } from './components/ContentSlide20';
import { ContentSlide21 } from './components/ContentSlide21';
import { ContentSlide23 } from './components/ContentSlide23';
import { ContentSlide24 } from './components/ContentSlide24';
import { ContentSlide25 } from './components/ContentSlide25';
import { ContentSlide26 } from './components/ContentSlide26';
import { ContentSlide28 } from './components/ContentSlide28';
import { ContentSlide29 } from './components/ContentSlide29';
import { ContentSlide30 } from './components/ContentSlide30';
import { ContentSlide31 } from './components/ContentSlide31';
import { ContentSlide33 } from './components/ContentSlide33';
import { ContentSlide35 } from './components/ContentSlide35';
import { ContentSlide36 } from './components/ContentSlide36';
import { ContentSlide37 } from './components/ContentSlide37';
import { ContentSlide38 } from './components/ContentSlide38';
import { ThankYouSlide } from './components/ThankYouSlide';

const App: React.FC = () => {
  const [scale, setScale] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(1);
  const isThrottled = useRef(false);
  const TOTAL_SLIDES = 39;

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
        {currentSlide === 3 && <PolicyTimeline2026Slide />}
        {currentSlide === 4 && <BaseSectionTransitionSlide id="02" title="GDP 分析" subtitle="定基调，找温差" />}
        {currentSlide === 5 && <ContentSlide05 />}
        {currentSlide === 6 && <ContentSlide06 />}
        {currentSlide === 7 && <ContentSlide07 />}
        {currentSlide === 8 && <ContentSlide08 />}
        {currentSlide === 9 && <BaseSectionTransitionSlide id="03" title="生产端分析" subtitle="看景气，看利润" />}
        {currentSlide === 10 && <ContentSlide10 />}
        {currentSlide === 11 && <ContentSlide11 />}
        {currentSlide === 12 && <ContentSlide12 />}
        {currentSlide === 13 && <ContentSlide13 />}
        {currentSlide === 14 && <ContentSlide14 />}
        {currentSlide === 15 && <ContentSlide15 />}
        {currentSlide === 16 && <BaseSectionTransitionSlide id="04" title="消费分析" subtitle="看意愿，看结构" />}
        {currentSlide === 17 && <ContentSlide17 />}
        {currentSlide === 18 && <ContentSlide18 />}
        {currentSlide === 19 && <ContentSlide19 />}
        {currentSlide === 20 && <ContentSlide20 />}
        {currentSlide === 21 && <ContentSlide21 />}
        {currentSlide === 22 && <BaseSectionTransitionSlide id="05" title="投资分析" subtitle="看地产拖累，看设备更新" />}
        {currentSlide === 23 && <ContentSlide23 />}
        {currentSlide === 24 && <ContentSlide24 />}
        {currentSlide === 25 && <ContentSlide25 />}
        {currentSlide === 26 && <ContentSlide26 />}
        {currentSlide === 27 && <BaseSectionTransitionSlide id="06" title="进出口分析" subtitle="看韧性，看抢跑" />}
        {currentSlide === 28 && <ContentSlide28 />}
        {currentSlide === 29 && <ContentSlide29 />}
        {currentSlide === 30 && <ContentSlide30 />}
        {currentSlide === 31 && <ContentSlide31 />}
        {currentSlide === 32 && <BaseSectionTransitionSlide id="07" title="财政分析" subtitle="看钱袋子" />}
        {currentSlide === 33 && <ContentSlide33 />}
        {currentSlide === 34 && <BaseSectionTransitionSlide id="08" title="金融数据分析" subtitle="看资金活性" />}
        {currentSlide === 35 && <ContentSlide35 />}
        {currentSlide === 36 && <ContentSlide36 />}
        {currentSlide === 37 && <ContentSlide37 />}
        {currentSlide === 38 && <ContentSlide38 />}
        {currentSlide === 39 && <ThankYouSlide />}

        <div className="absolute right-6 bottom-4 z-50 select-none pointer-events-none">
          <span className="font-serif text-webank-blue font-medium text-sm">
            {String(currentSlide).padStart(2, '0')}
          </span>
        </div>
      </div>


    </div>
  );
};

export default App;
