import React, { Suspense, lazy, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CoverSlide } from './components/layouts/CoverSlide';
import { TableOfContentsSlide } from './components/layouts/TableOfContentsSlide';
import { BaseSectionTransitionSlide } from './components/layouts/BaseSectionTransitionSlide';
import { ThankYouSlide } from './components/layouts/ThankYouSlide';

const SLIDE_WIDTH = 1280;
const SLIDE_HEIGHT = 720;
const TOTAL_SLIDES = 44;
const MOBILE_QUERY = '(max-width: 768px), (pointer: coarse)';
const MOBILE_STAGE_GAP = 12;
const MOBILE_CONTROLS_SPACE = 96;

const lazyNamed = <T extends React.ComponentType<any>>(
  importer: () => Promise<Record<string, T>>,
  exportName: string
) => lazy(async () => ({ default: (await importer())[exportName] }));

const ContentSlide04 = lazyNamed(() => import('./components/slides/ContentSlide04'), 'ContentSlide04');
const ContentSlide05 = lazyNamed(() => import('./components/slides/ContentSlide05'), 'ContentSlide05');
const ContentSlide06 = lazyNamed(() => import('./components/slides/ContentSlide06'), 'ContentSlide06');
const ContentSlide07 = lazyNamed(() => import('./components/slides/ContentSlide07'), 'ContentSlide07');
const ContentSlide09 = lazyNamed(() => import('./components/slides/ContentSlide09'), 'ContentSlide09');
const ContentSlide10 = lazyNamed(() => import('./components/slides/ContentSlide10'), 'ContentSlide10');
const ContentSlide11 = lazyNamed(() => import('./components/slides/ContentSlide11'), 'ContentSlide11');
const ContentSlide12 = lazyNamed(() => import('./components/slides/ContentSlide12'), 'ContentSlide12');
const ContentSlide14 = lazyNamed(() => import('./components/slides/ContentSlide14'), 'ContentSlide14');
const ContentSlide15 = lazyNamed(() => import('./components/slides/ContentSlide15'), 'ContentSlide15');
const ContentSlide16 = lazyNamed(() => import('./components/slides/ContentSlide16'), 'ContentSlide16');
const ContentSlide18 = lazyNamed(() => import('./components/slides/ContentSlide18'), 'ContentSlide18');
const ContentSlide19 = lazyNamed(() => import('./components/slides/ContentSlide19'), 'ContentSlide19');
const ContentSlide20 = lazyNamed(() => import('./components/slides/ContentSlide20'), 'ContentSlide20');
const ContentSlide23 = lazyNamed(() => import('./components/slides/ContentSlide23'), 'ContentSlide23');
const ContentSlide24 = lazyNamed(() => import('./components/slides/ContentSlide24'), 'ContentSlide24');
const ContentSlide25 = lazyNamed(() => import('./components/slides/ContentSlide25'), 'ContentSlide25');
const ContentSlide26 = lazyNamed(() => import('./components/slides/ContentSlide26'), 'ContentSlide26');
const ContentSlide27 = lazyNamed(() => import('./components/slides/ContentSlide27'), 'ContentSlide27');
const ContentSlide29 = lazyNamed(() => import('./components/slides/ContentSlide29'), 'ContentSlide29');
const ContentSlide30 = lazyNamed(() => import('./components/slides/ContentSlide30'), 'ContentSlide30');
const ContentSlide32 = lazyNamed(() => import('./components/slides/ContentSlide32'), 'ContentSlide32');
const ContentSlide33 = lazyNamed(() => import('./components/slides/ContentSlide33'), 'ContentSlide33');
const ContentSlide34 = lazyNamed(() => import('./components/slides/ContentSlide34'), 'ContentSlide34');
const ContentSlide35 = lazyNamed(() => import('./components/slides/ContentSlide35'), 'ContentSlide35');
const ContentSlide37 = lazyNamed(() => import('./components/slides/ContentSlide37'), 'ContentSlide37');
const ContentSlide38 = lazyNamed(() => import('./components/slides/ContentSlide38'), 'ContentSlide38');
const ContentSlide39 = lazyNamed(() => import('./components/slides/ContentSlide39'), 'ContentSlide39');
const ContentSlide40 = lazyNamed(() => import('./components/slides/ContentSlide40'), 'ContentSlide40');
const ContentSlide41 = lazyNamed(() => import('./components/slides/ContentSlide41'), 'ContentSlide41');
const ContentSlide43 = lazyNamed(() => import('./components/slides/ContentSlide43'), 'ContentSlide43');
const ContentSlide44 = lazyNamed(() => import('./components/slides/ContentSlide44'), 'ContentSlide44');
const ContentSlide45 = lazyNamed(() => import('./components/slides/ContentSlide45'), 'ContentSlide45');
const ContentSlide46 = lazyNamed(() => import('./components/slides/ContentSlide46'), 'ContentSlide46');
const ContentSlide21 = lazyNamed(() => import('./components/slides/ContentSlide21'), 'ContentSlide21');

const App: React.FC = () => {
  const [scale, setScale] = useState(1);
  const [viewportHeight, setViewportHeight] = useState(() =>
    typeof window === 'undefined' ? SLIDE_HEIGHT : window.innerHeight
  );
  const [stageSize, setStageSize] = useState({ width: SLIDE_WIDTH, height: SLIDE_HEIGHT });
  const [isMobile, setIsMobile] = useState(() =>
    typeof window === 'undefined' ? false : window.matchMedia(MOBILE_QUERY).matches
  );
  const [currentSlide, setCurrentSlide] = useState(1);
  const isThrottled = useRef(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev < TOTAL_SLIDES ? prev + 1 : 1));
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev > 1 ? prev - 1 : TOTAL_SLIDES));
  }, []);

  const handleResize = useCallback(() => {
    const visualViewport = window.visualViewport;
    const windowWidth = visualViewport?.width ?? window.innerWidth;
    const windowHeight = visualViewport?.height ?? window.innerHeight;
    const nextIsMobile = window.matchMedia(MOBILE_QUERY).matches;

    if (nextIsMobile) {
      const width = Math.max(320, Math.floor(windowWidth - MOBILE_STAGE_GAP * 2));
      const height = Math.max(480, Math.floor(windowHeight - MOBILE_STAGE_GAP * 2 - MOBILE_CONTROLS_SPACE));
      setStageSize({ width, height });
      setScale(1);
    } else {
      const stagePadding = 32;
      const scaleX = (windowWidth - stagePadding * 2) / SLIDE_WIDTH;
      const scaleY = (windowHeight - stagePadding * 2) / SLIDE_HEIGHT;
      setStageSize({ width: SLIDE_WIDTH, height: SLIDE_HEIGHT });
      setScale(Math.max(0.1, Math.min(scaleX, scaleY)));
    }

    setIsMobile(nextIsMobile);
    setViewportHeight(windowHeight);
    document.documentElement.style.setProperty('--app-height', `${windowHeight}px`);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    window.visualViewport?.addEventListener('resize', handleResize, { passive: true });
    return () => {
      window.removeEventListener('resize', handleResize);
      window.visualViewport?.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY);
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);
    updateIsMobile();
    mediaQuery.addEventListener('change', updateIsMobile);
    return () => mediaQuery.removeEventListener('change', updateIsMobile);
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isThrottled.current) return;
      if (Math.abs(e.deltaY) > 20) {
        if (e.deltaY > 0) {
          goToNextSlide();
        } else {
          goToPrevSlide();
        }
        isThrottled.current = true;
        setTimeout(() => { isThrottled.current = false; }, 1000);
      }
    };
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [goToNextSlide, goToPrevSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        goToNextSlide();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        goToPrevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNextSlide, goToPrevSlide]);

  const activeSlide = useMemo(() => {
    switch (currentSlide) {
      case 1: return <CoverSlide />;
      case 2: return <TableOfContentsSlide />;
      case 3: return <BaseSectionTransitionSlide id="01" title="GDP 分析" />;
      case 4: return <ContentSlide04 />;
      case 5: return <ContentSlide05 />;
      case 6: return <ContentSlide06 />;
      case 7: return <ContentSlide07 />;
      case 8: return <BaseSectionTransitionSlide id="02" title="生产端分析" />;
      case 9: return <ContentSlide09 />;
      case 10: return <ContentSlide10 />;
      case 11: return <ContentSlide11 />;
      case 12: return <ContentSlide12 />;
      case 13: return <BaseSectionTransitionSlide id="03" title="消费分析" />;
      case 14: return <ContentSlide14 />;
      case 15: return <ContentSlide15 />;
      case 16: return <ContentSlide16 />;
      case 17: return <BaseSectionTransitionSlide id="04" title="投资分析" />;
      case 18: return <ContentSlide18 />;
      case 19: return <ContentSlide19 />;
      case 20: return <ContentSlide20 />;
      case 21: return <ContentSlide21 />;
      case 22: return <BaseSectionTransitionSlide id="05" title="进出口分析" />;
      case 23: return <ContentSlide23 />;
      case 24: return <ContentSlide24 />;
      case 25: return <ContentSlide25 />;
      case 26: return <ContentSlide26 />;
      case 27: return <ContentSlide27 />;
      case 28: return <BaseSectionTransitionSlide id="06" title="财政分析" />;
      case 29: return <ContentSlide29 />;
      case 30: return <ContentSlide30 />;
      case 31: return <BaseSectionTransitionSlide id="07" title="金融数据分析" />;
      case 32: return <ContentSlide32 />;
      case 33: return <ContentSlide33 />;
      case 34: return <ContentSlide34 />;
      case 35: return <ContentSlide35 />;
      case 36: return (
        <BaseSectionTransitionSlide
          id="08"
          title="消费现状及趋势"
          subtitle="本轮消费疲弱不止于周期回落，更是收入预期下修、就业不稳与房价财富效应三重约束下的结构性收缩；总量修复仍慢，增量则向体验、情绪与健康等「软消费」迁移。"
        />
      );
      case 37: return <ContentSlide37 />;
      case 38: return <ContentSlide38 />;
      case 39: return <ContentSlide39 />;
      case 40: return <ContentSlide40 />;
      case 41: return <ContentSlide41 />;
      case 42: return <ThankYouSlide />;
      default: return <CoverSlide />;
    }
  }, [currentSlide]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const touch = event.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    if (!touchStart.current) return;
    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStart.current.x;
    const deltaY = touch.clientY - touchStart.current.y;
    touchStart.current = null;

    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) return;
    if (deltaX < 0) {
      goToNextSlide();
    } else {
      goToPrevSlide();
    }
  };

  return (
    <div
      className={`presentation-shell flex w-full bg-webank-grey relative overflow-hidden ${isMobile ? 'presentation-shell-mobile items-start justify-center' : 'items-center justify-center'}`}
      style={{ minHeight: viewportHeight }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        style={{
          width: `${stageSize.width}px`,
          height: `${stageSize.height}px`,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
        }}
        className={`relative bg-white overflow-hidden shadow-2xl transition-all duration-500 ${isMobile ? 'mobile-slide-stage' : ''}`}
      >
        <Suspense fallback={<div className="w-full h-full bg-white" />}>
          {activeSlide}
        </Suspense>

        <div className="absolute right-6 bottom-4 z-50 select-none pointer-events-none">
          <span className="font-serif text-webank-blue font-medium text-meta">
            {String(currentSlide).padStart(2, '0')}
          </span>
        </div>
      </div>

      {isMobile && (
        <nav className="mobile-controls" aria-label="幻灯片导航">
          <button type="button" onClick={goToPrevSlide} aria-label="上一页">
            <ChevronLeft size={22} />
          </button>
          <span>{currentSlide}/{TOTAL_SLIDES}</span>
          <button type="button" onClick={goToNextSlide} aria-label="下一页">
            <ChevronRight size={22} />
          </button>
        </nav>
      )}
    </div>
  );
};

export default App;
