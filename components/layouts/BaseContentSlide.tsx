import React from 'react';
import { cn } from '../../utils/cn';

export interface BaseContentSlideProps {
  subtitle?: string;
  title: React.ReactNode;
  cards?: React.ReactNode;
  charts?: React.ReactNode;
  footer?: string;
  cardColumns?: 2 | 3 | 4;
  chartColumns?: 1 | 2 | 3;
  className?: string;
  headerClassName?: string;
  children?: React.ReactNode;
}

export const BaseContentSlide: React.FC<BaseContentSlideProps> = ({
  subtitle = '2026年第二季度宏观经济报告',
  title,
  cards,
  charts,
  footer = '个金管理部-数据管理室',
  cardColumns = 3,
  chartColumns = 2,
  className,
  headerClassName,
  children,
}) => {
  const cardGridClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-4',
  }[cardColumns];
  const chartGridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-3',
  }[chartColumns];

  return (
    <div className={cn('w-full h-full bg-white flex flex-col p-6 sm:p-12 overflow-hidden relative', className)}>
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue animate-top-line" />

      <header className={cn('mb-6 animate-fade-in', headerClassName)}>
        {subtitle && (
          <div className="flex justify-between items-end mb-1">
            <span className="text-caption font-bold text-webank-subtext uppercase">
              {subtitle}
            </span>
          </div>
        )}
        <h1 className="text-h1 font-serif text-webank-blue">
          {title}
        </h1>
      </header>

      {children ? (
        <div className="flex-1 min-h-0">{children}</div>
      ) : (
        <>
          {cards && (
            <section className={cn('grid gap-3 sm:gap-4 mb-4 sm:mb-6', cardGridClass)}>
              {cards}
            </section>
          )}
          {charts && (
            <section className={cn('flex-1 grid gap-4 sm:gap-6 min-h-0', chartGridClass)}>
              {charts}
            </section>
          )}
        </>
      )}

      {footer && (
        <footer className="absolute bottom-4 left-6 right-6 sm:left-12 sm:right-12 border-t border-webank-line pt-2 flex justify-between text-caption text-webank-subtext">
          <span>{footer}</span>
        </footer>
      )}
    </div>
  );
};

/**
 * 统一的入场动画节奏（毫秒）。
 * 用法：cards 区使用 stagger.cards[i]；charts 区使用 stagger.charts[i]。
 * 节奏：cards 0/120/240/360；charts 在 cards 之后 480/600/720。
 */
export const stagger = {
  cards:  ['0ms', '0ms', '0ms', '0ms'] as const,
  charts: ['0ms', '0ms', '0ms', '0ms'] as const,
};

/** 图表容器 — delay 真正生效，统一卡片风格 */
export const ChartContainer: React.FC<{
  children: React.ReactNode;
  delay?: string;
  className?: string;
  /** 图表语义描述，供屏幕阅读器使用 */
  ariaLabel?: string;
}> = ({ children, delay = '0ms', className, ariaLabel }) => (
  <div
    role={ariaLabel ? 'img' : undefined}
    aria-label={ariaLabel}
    className={cn(
      'h-full bg-white animate-fade-in-up fill-mode-forwards',
      className
    )}
    style={{ animationDelay: '0ms' }}
  >
    {children}
  </div>
);
