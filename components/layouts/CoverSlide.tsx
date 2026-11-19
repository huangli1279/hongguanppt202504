import React from 'react';

const globeStroke = 'rgba(214, 232, 247, 0.72)';
const globeStrokeSoft = 'rgba(214, 232, 247, 0.5)';

export const CoverSlide: React.FC = () => {
  return (
    <div
      className="w-full h-full relative overflow-hidden text-white"
      style={{
        background: 'radial-gradient(120% 90% at 38% 62%, #1465b5 0%, #0e58a6 55%, #0b4c91 100%)',
        fontFamily: '"Noto Sans SC", "Microsoft YaHei", "PingFang SC", sans-serif',
      }}
    >
      {/* 背景线框地球 */}
      <svg
        className="absolute pointer-events-none"
        style={{ left: '-120px', top: '479px', width: '1000px', height: '1000px' }}
        viewBox="0 0 1000 1000"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="500" cy="500" r="430" stroke={globeStroke} strokeWidth="1.8" />
        {/* 纬线 */}
        <ellipse cx="500" cy="500" rx="430" ry="370" stroke={globeStrokeSoft} strokeWidth="1.4" />
        <ellipse cx="500" cy="500" rx="430" ry="284" stroke={globeStrokeSoft} strokeWidth="1.4" />
        <ellipse cx="500" cy="500" rx="430" ry="190" stroke={globeStrokeSoft} strokeWidth="1.4" />
        <ellipse cx="500" cy="500" rx="430" ry="95" stroke={globeStrokeSoft} strokeWidth="1.4" />
        <line x1="70" y1="500" x2="930" y2="500" stroke={globeStrokeSoft} strokeWidth="1.4" />
        {/* 经线 */}
        <ellipse cx="500" cy="500" rx="320" ry="430" stroke={globeStrokeSoft} strokeWidth="1.4" />
        <ellipse cx="500" cy="500" rx="205" ry="430" stroke={globeStrokeSoft} strokeWidth="1.4" />
        <ellipse cx="500" cy="500" rx="78" ry="430" stroke={globeStrokeSoft} strokeWidth="1.4" />
        <line x1="500" y1="70" x2="500" y2="930" stroke={globeStrokeSoft} strokeWidth="1.4" />
        {/* 红色轨道环 */}
        <ellipse
          cx="500"
          cy="500"
          rx="600"
          ry="430"
          stroke="#e8433a"
          strokeWidth="2"
          strokeOpacity="0.85"
          transform="rotate(-12 500 500)"
        />
      </svg>

      {/* 右侧红色竖线装饰 */}
      <div className="absolute" style={{ left: '85.5%', top: '-10px', width: '1.5px', height: '29%', background: '#e8433a', opacity: 0.6 }} />
      <div className="absolute" style={{ left: '91%', top: '0px', width: '1px', height: '19%', background: '#e8433a', opacity: 0.22 }} />
      <div className="absolute" style={{ left: '88.5%', top: '58%', width: '1.5px', height: '27%', background: '#e8433a', opacity: 0.4 }} />
      <div className="absolute" style={{ left: '96.5%', top: '50%', width: '1.5px', height: '30%', background: '#e8433a', opacity: 0.5 }} />

      {/* 顶部机构信息 */}
      <div
        className="absolute animate-fade-in-left"
        style={{
          left: '96px',
          top: '46px',
          color: '#8cc6ee',
          fontSize: '14px',
          lineHeight: 1.75,
          letterSpacing: '0.08em',
          fontWeight: 500,
          animationDelay: '0.2s',
        }}
      >
        <div>个金管理部-数据管理室</div>
        <div>宏观经济季度报告</div>
      </div>

      {/* 标题信息 */}
      <div className="absolute" style={{ left: '96px', top: '228px' }}>
        <div
          className="animate-fade-in-up"
          style={{
            color: '#ef4438',
            fontSize: '19px',
            fontWeight: 700,
            letterSpacing: '0.28em',
            marginBottom: '22px',
            animationDelay: '0.35s',
          }}
        >
          2026 年 11 月
        </div>

        <h1
          className="animate-fade-in-up"
          style={{
            margin: 0,
            color: '#f3f8fd',
            fontSize: '64px',
            lineHeight: 1.3,
            fontWeight: 800,
            letterSpacing: '0.01em',
            textShadow: '0 2px 18px rgba(4, 32, 62, 0.18)',
            animationDelay: '0.5s',
          }}
        >
          <span className="block">2026年第三季度</span>
          <span className="block">中国宏观经济运行</span>
          <span className="block">分析报告</span>
        </h1>
      </div>

      {/* 左下角 Logo */}
      <div
        className="absolute flex items-end animate-fade-in"
        style={{ left: '96px', bottom: '44px', animationDelay: '0.9s' }}
      >
        <span
          style={{
            fontFamily: '"Inter", "Arial Black", Arial, sans-serif',
            fontSize: '31px',
            fontWeight: 800,
            letterSpacing: '-0.01em',
            lineHeight: 1,
          }}
        >
          WeBank
        </span>
        <span
          style={{
            fontSize: '19px',
            fontWeight: 500,
            marginLeft: '12px',
            marginBottom: '2px',
            letterSpacing: '0.04em',
          }}
        >
          微众银行
        </span>
      </div>
    </div>
  );
};
