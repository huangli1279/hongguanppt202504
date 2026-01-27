
import React, { useEffect, useState, useRef } from 'react';
import { CoverSlide } from './components/CoverSlide';
import { TableOfContentsSlide } from './components/TableOfContentsSlide';
import { SectionTransitionSlide } from './components/SectionTransitionSlide';
import { SlideContent } from './components/SlideContent';
import { SlideContentTwo } from './components/SlideContentTwo';
import { SlideContentTwoPointFive } from './components/SlideContentTwoPointFive';
import { SlideContentThree } from './components/SlideContentThree';
import { SlideContentFour } from './components/SlideContentFour';
import { SlideContentFive } from './components/SlideContentFive';
import { SlideContentFivePointFive } from './components/SlideContentFivePointFive';
import { SlideContentSix } from './components/SlideContentSix';
import { SlideContentSeven } from './components/SlideContentSeven';
import { SlideContentSevenPointFive } from './components/SlideContentSevenPointFive';
import { SlideContentEight } from './components/SlideContentEight';
import { SlideContentNine } from './components/SlideContentNine';
import { SlideContentTwelve } from './components/SlideContentTwelve';
import { SlideContentThirteen } from './components/SlideContentThirteen';
import { SlideContentFourteen } from './components/SlideContentFourteen';
import { SlideContentFifteen } from './components/SlideContentFifteen';
import { SlideContentSixteen } from './components/SlideContentSixteen';
import { SlideContentSeventeen } from './components/SlideContentSeventeen';
import { SlideContentEighteen as SlideContentEighteenOld } from './components/SlideContentEighteen';
import { SlideContentEighteen } from './components/SlideContentEighteen_New';
import { SlideContentEighteen_Added } from './components/SlideContentEighteen_Added';
import { SlideContentNineteen } from './components/SlideContentNineteen';
import { SlideContentTwenty } from './components/SlideContentTwenty';
import { SlideContentTwentyOne } from './components/SlideContentTwentyOne';
import { SlideContentTwentyTwo } from './components/SlideContentTwentyTwo';
import { SlideContentTwentyThree } from './components/SlideContentTwentyThree';
import { SlideContentTwentyFour } from './components/SlideContentTwentyFour';
import { SlideContentTwentyEight_New } from './components/SlideContentTwentyEight_New';
import { ThankYouSlide } from './components/ThankYouSlide';

const App: React.FC = () => {
  const [scale, setScale] = useState(1);
  const [currentSlide, setCurrentSlide] = useState(1);
  const isThrottled = useRef(false);
  const TOTAL_SLIDES = 38; // Updated after adding slide 29

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
        {currentSlide === 4 && <SlideContent />}
        {currentSlide === 5 && <SlideContentTwo />}
        {currentSlide === 6 && <SlideContentTwoPointFive />}
        {currentSlide === 7 && <SlideContentThree />}

        {/* Transition Slide 2: Production */}
        {currentSlide === 8 && <SectionTransitionSlide id="02" title="生产端分析" subtitle="看景气，看利润" />}

        {currentSlide === 9 && <SlideContentFour />}
        {currentSlide === 10 && <SlideContentFive />}
        {currentSlide === 11 && <SlideContentFivePointFive />}
        {currentSlide === 12 && <SlideContentSix />}
        {currentSlide === 13 && <SlideContentSeven />}
        {currentSlide === 14 && <SlideContentSevenPointFive />}

        {/* Transition Slide 3: Consumption */}
        {currentSlide === 15 && <SectionTransitionSlide id="03" title="消费分析" subtitle="看意愿，看结构" />}

        {currentSlide === 16 && <SlideContentEight />}
        {currentSlide === 17 && <SlideContentNine />}
        {currentSlide === 18 && <SlideContentEighteen />}
        {currentSlide === 19 && <SlideContentEighteen_Added />}

        {/* Transition Slide 4: Investment */}
        {currentSlide === 20 && <SectionTransitionSlide id="04" title="投资分析" subtitle="看地产拖累，看基建托底" />}

        {/* Investment Slides */}
        {currentSlide === 21 && <SlideContentTwelve />}
        {currentSlide === 22 && <SlideContentThirteen />}
        {currentSlide === 23 && <SlideContentFourteen />}
        {currentSlide === 24 && <SlideContentFifteen />}

        {/* Transition Slide 5: Trade */}
        {currentSlide === 25 && <SectionTransitionSlide id="05" title="进出口分析" subtitle="看韧性，看抢跑" />}

        {/* Trade Slides */}
        {currentSlide === 26 && <SlideContentSixteen />}
        {currentSlide === 27 && <SlideContentSeventeen />}
        {currentSlide === 28 && <SlideContentEighteenOld />}
        {currentSlide === 29 && <SlideContentTwentyEight_New />}

        {/* Transition Slide 6: Fiscal */}
        {currentSlide === 30 && <SectionTransitionSlide id="06" title="财政分析" subtitle="看钱袋子" />}

        {/* Fiscal Slides */}
        {currentSlide === 31 && <SlideContentNineteen />}
        {currentSlide === 32 && <SlideContentTwenty />}
        {currentSlide === 33 && <SlideContentTwentyOne />}

        {/* NEW Transition Slide 7: Financial */}
        {currentSlide === 34 && <SectionTransitionSlide id="07" title="金融数据分析" subtitle="看资金活性" />}

        {/* Financial Slides */}
        {currentSlide === 35 && <SlideContentTwentyTwo />}
        {currentSlide === 36 && <SlideContentTwentyThree />}
        {currentSlide === 37 && <SlideContentTwentyFour />}

        {/* Thank You Slide */}
        {currentSlide === 38 && <ThankYouSlide />}
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
