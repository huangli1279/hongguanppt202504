
import React, { useEffect, useState, useRef } from 'react';
import { CoverSlide } from './components/CoverSlide';
import { TableOfContentsSlide } from './components/TableOfContentsSlide';
import { SectionTransitionSlide } from './components/SectionTransitionSlide';
import { ContentSlide01 } from './components/ContentSlide01';
import { ContentSlide02 } from './components/ContentSlide02';
import { ContentSlide03 } from './components/ContentSlide03';
import { ContentSlide04 } from './components/ContentSlide04';
import { ContentSlide05 } from './components/ContentSlide05';
import { ContentSlide06 } from './components/ContentSlide06';
import { ContentSlide07 } from './components/ContentSlide07';
import { ContentSlide08 } from './components/ContentSlide08';
import { ContentSlide09 } from './components/ContentSlide09';
import { ContentSlide10 } from './components/ContentSlide10';
import { ContentSlide11 } from './components/ContentSlide11';
import { ContentSlide12 } from './components/ContentSlide12';
import { ContentSlide13 } from './components/ContentSlide13';
import { ContentSlide14 } from './components/ContentSlide14';
import { ContentSlide14A } from './components/ContentSlide14A';
import { ContentSlide15 } from './components/ContentSlide15';
import { ContentSlide16 } from './components/ContentSlide16';
import { ContentSlide17 } from './components/ContentSlide17';
import { ContentSlide18 } from './components/ContentSlide18';
import { ContentSlide19 } from './components/ContentSlide19';
import { ContentSlide20 } from './components/ContentSlide20';
import { ContentSlide21 } from './components/ContentSlide21';
import { ContentSlide22 } from './components/ContentSlide22';
import { ContentSlide23 } from './components/ContentSlide23';
import { ContentSlide24 } from './components/ContentSlide24';
import { ContentSlide25 } from './components/ContentSlide25';
import { ContentSlide26 } from './components/ContentSlide26';
import { ContentSlide27 } from './components/ContentSlide27';
import { ContentSlide28 } from './components/ContentSlide28';
import { ThankYouSlide } from './components/ThankYouSlide';

const App: React.FC = () => {
  const [scale, setScale] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(1);
  const isThrottled = useRef(false);
  const TOTAL_SLIDES = 39; // Added ContentSlide14A between CPI and Investment sections

  // Function to handle scaling based on window size to maintain 16:9 visualization
  const handleResize = () => {
    const targetWidth = 1280; // Standard 720p width base
    const targetHeight = 720;
    
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const scaleX = windowWidth / targetWidth;
    const scaleY = windowHeight / targetHeight;
    
    // Fit within the viewport while maintaining aspect ratio
    const newScale = Math.min(scaleX, scaleY) * 0.95; // 0.95 for a little margin
    setScale(newScale);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle Scroll (Wheel) Navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isThrottled.current) return;

      // Threshold to prevent micro-movements on trackpads
      if (Math.abs(e.deltaY) > 20) {
        if (e.deltaY > 0) {
          // Scroll Down -> Next Slide
          setCurrentSlide(prev => (prev < TOTAL_SLIDES ? prev + 1 : 1));
        } else {
          // Scroll Up -> Prev Slide
          setCurrentSlide(prev => (prev > 1 ? prev - 1 : TOTAL_SLIDES));
        }

        // Throttle subsequent scrolls for 1 second to allow animation to finish
        isThrottled.current = true;
        setTimeout(() => {
          isThrottled.current = false;
        }, 1000);
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  // Handle Keyboard Navigation
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

  // Calculate visible slides for indicator (Max 3)
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
      
      {/* Slide Container */}
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
        {currentSlide === 3 && <SectionTransitionSlide id="01" title="GDP 分析" subtitle="定基调，找温差" />}
        {currentSlide === 4 && <ContentSlide01 />}
        {currentSlide === 5 && <ContentSlide02 />}
        {currentSlide === 6 && <ContentSlide03 />}
        {currentSlide === 7 && <ContentSlide04 />}

        {/* Transition Slide 2: Production */}
        {currentSlide === 8 && <SectionTransitionSlide id="02" title="生产端分析" subtitle="看景气，看利润" />}

        {currentSlide === 9 && <ContentSlide05 />}
        {currentSlide === 10 && <ContentSlide06 />}
        {currentSlide === 11 && <ContentSlide07 />}
        {currentSlide === 12 && <ContentSlide08 />}
        {currentSlide === 13 && <ContentSlide09 />}
        {currentSlide === 14 && <ContentSlide10 />}

        {/* Transition Slide 3: Consumption */}
        {currentSlide === 15 && <SectionTransitionSlide id="03" title="消费分析" subtitle="看意愿，看结构" />}

        {currentSlide === 16 && <ContentSlide11 />}
        {currentSlide === 17 && <ContentSlide12 />}
        {currentSlide === 18 && <ContentSlide13 />}
        {currentSlide === 19 && <ContentSlide14 />}
        {currentSlide === 20 && <ContentSlide14A />}

        {/* Transition Slide 4: Investment */}
        {currentSlide === 21 && <SectionTransitionSlide id="04" title="投资分析" subtitle="看地产拖累，看基建托底" />}

        {/* Investment Slides */}
        {currentSlide === 22 && <ContentSlide15 />}
        {currentSlide === 23 && <ContentSlide16 />}
        {currentSlide === 24 && <ContentSlide17 />}
        {currentSlide === 25 && <ContentSlide18 />}

        {/* Transition Slide 5: Trade */}
        {currentSlide === 26 && <SectionTransitionSlide id="05" title="进出口分析" subtitle="看韧性，看抢跑" />}

        {/* Trade Slides */}
        {currentSlide === 27 && <ContentSlide19 />}
        {currentSlide === 28 && <ContentSlide20 />}
        {currentSlide === 29 && <ContentSlide21 />}
        {currentSlide === 30 && <ContentSlide22 />}

        {/* Transition Slide 6: Fiscal */}
        {currentSlide === 31 && <SectionTransitionSlide id="06" title="财政分析" subtitle="看钱袋子" />}

        {/* Fiscal Slides */}
        {currentSlide === 32 && <ContentSlide23 />}
        {currentSlide === 33 && <ContentSlide24 />}
        {currentSlide === 34 && <ContentSlide25 />}

        {/* NEW Transition Slide 7: Financial */}
        {currentSlide === 35 && <SectionTransitionSlide id="07" title="金融数据分析" subtitle="看资金活性" />}

        {/* Financial Slides */}
        {currentSlide === 36 && <ContentSlide26 />}
        {currentSlide === 37 && <ContentSlide27 />}
        {currentSlide === 38 && <ContentSlide28 />}

        {/* Thank You Slide */}
        {currentSlide === 39 && <ThankYouSlide />}
      </div>

      {/* Visual Indicators (Vertical, Right Side, Non-interactive) */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50 select-none pointer-events-none">
        {getVisibleSlides().map((slide) => (
           <div 
             key={slide}
             className="flex items-center gap-3 justify-end h-8 transition-all duration-500" 
           >
             <span className={`font-serif transition-all duration-500 ${
               currentSlide === slide 
                 ? 'text-webank-blue font-bold text-lg translate-x-0 opacity-100' 
                 : 'text-slate-400 font-medium text-xs translate-x-1 opacity-60'
             }`}>
               {String(slide).padStart(2, '0')}
             </span>
             
             <div 
               className={`w-1 rounded-full transition-all duration-500 ${
                 currentSlide === slide 
                   ? 'h-8 bg-webank-blue shadow-lg' 
                   : 'h-1.5 bg-slate-300'
               }`}
             />
           </div>
        ))}
      </div>

    </div>
  );
};

export default App;
