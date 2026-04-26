import React, { useEffect, useState, useRef } from 'react';
import { CoverSlide } from './components/layouts/CoverSlide';
import { ContentSlide03 } from './components/slides/ContentSlide03';
import { TableOfContentsSlide } from './components/layouts/TableOfContentsSlide';
import { BaseSectionTransitionSlide } from './components/layouts/BaseSectionTransitionSlide';
import { ContentSlide05 } from './components/slides/ContentSlide05';
import { ContentSlide06 } from './components/slides/ContentSlide06';
import { ContentSlide07 } from './components/slides/ContentSlide07';
import { ContentSlide08 } from './components/slides/ContentSlide08';
import { ContentSlide10 } from './components/slides/ContentSlide10';
import { ContentSlide11 } from './components/slides/ContentSlide11';
import { ContentSlide12 } from './components/slides/ContentSlide12';
import { ContentSlide13 } from './components/slides/ContentSlide13';
import { ContentSlide14 } from './components/slides/ContentSlide14';
import { ContentSlide16 } from './components/slides/ContentSlide16';
import { ContentSlide17 } from './components/slides/ContentSlide17';
import { ContentSlide18 } from './components/slides/ContentSlide18';
import { ContentSlide19 } from './components/slides/ContentSlide19';
import { ContentSlide21 } from './components/slides/ContentSlide21';
import { ContentSlide22 } from './components/slides/ContentSlide22';
import { ContentSlide23 } from './components/slides/ContentSlide23';
import { ContentSlide24 } from './components/slides/ContentSlide24';
import { ContentSlide26 } from './components/slides/ContentSlide26';
import { ContentSlide27 } from './components/slides/ContentSlide27';
import { ContentSlide28 } from './components/slides/ContentSlide28';
import { ContentSlide29 } from './components/slides/ContentSlide29';
import { ContentSlide31 } from './components/slides/ContentSlide31';
import { ContentSlide32 } from './components/slides/ContentSlide32';
import { ContentSlide34 } from './components/slides/ContentSlide34';
import { ContentSlide35 } from './components/slides/ContentSlide35';
import { ContentSlide36 } from './components/slides/ContentSlide36';
import { ContentSlide37 } from './components/slides/ContentSlide37';
import { ContentSlide38 } from './components/slides/ContentSlide38';
import { ThankYouSlide } from './components/layouts/ThankYouSlide';

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
    <div className="flex items-center justify-center min-h-screen w-full bg-webank-grey relative overflow-hidden">
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
        {currentSlide === 3 && <ContentSlide03 />}
        {currentSlide === 4 && <BaseSectionTransitionSlide id="02" title="GDP 分析" subtitle="找温差，看结构" />}
        {currentSlide === 5 && <ContentSlide05 />}
        {currentSlide === 6 && <ContentSlide06 />}
        {currentSlide === 7 && <ContentSlide07 />}
        {currentSlide === 8 && <ContentSlide08 />}
        {currentSlide === 9 && <BaseSectionTransitionSlide id="03" title="生产端分析" subtitle="看景气，看价格，看利润" />}
        {currentSlide === 10 && <ContentSlide10 />}
        {currentSlide === 11 && <ContentSlide11 />}
        {currentSlide === 12 && <ContentSlide12 />}
        {currentSlide === 13 && <ContentSlide13 />}
        {currentSlide === 14 && <ContentSlide14 />}
        {currentSlide === 15 && <BaseSectionTransitionSlide id="04" title="消费分析" subtitle="看意愿，看结构，看价格" />}
        {currentSlide === 16 && <ContentSlide16 />}
        {currentSlide === 17 && <ContentSlide17 />}
        {currentSlide === 18 && <ContentSlide18 />}
        {currentSlide === 19 && <ContentSlide19 />}
        {currentSlide === 20 && <BaseSectionTransitionSlide id="05" title="投资分析" subtitle="看地产拖累，看制造提速" />}
        {currentSlide === 21 && <ContentSlide21 />}
        {currentSlide === 22 && <ContentSlide22 />}
        {currentSlide === 23 && <ContentSlide23 />}
        {currentSlide === 24 && <ContentSlide24 />}
        {currentSlide === 25 && <BaseSectionTransitionSlide id="06" title="进出口分析" subtitle="看韧性，看结构" />}
        {currentSlide === 26 && <ContentSlide26 />}
        {currentSlide === 27 && <ContentSlide27 />}
        {currentSlide === 28 && <ContentSlide28 />}
        {currentSlide === 29 && <ContentSlide29 />}
        {currentSlide === 30 && <BaseSectionTransitionSlide id="07" title="财政分析" subtitle="看钱袋子" />}
        {currentSlide === 31 && <ContentSlide31 />}
        {currentSlide === 32 && <ContentSlide32 />}
        {currentSlide === 33 && <BaseSectionTransitionSlide id="08" title="金融数据分析" subtitle="看总量，看活性" />}
        {currentSlide === 34 && <ContentSlide34 />}
        {currentSlide === 35 && <ContentSlide35 />}
        {currentSlide === 36 && <ContentSlide36 />}
        {currentSlide === 37 && <ContentSlide37 />}
        {currentSlide === 38 && <ContentSlide38 />}
        {currentSlide === 39 && <ThankYouSlide />}

        <div className="absolute right-6 bottom-4 z-50 select-none pointer-events-none">
          <span className="font-serif text-webank-blue font-medium text-meta">
            {String(currentSlide).padStart(2, '0')}
          </span>
        </div>
      </div>


    </div>
  );
};

export default App;
