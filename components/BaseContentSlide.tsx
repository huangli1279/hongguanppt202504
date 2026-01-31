import React from 'react';
import { cn } from '../utils/cn';

export interface BaseContentSlideProps {
  /** 顶部副标题，如 "2025年度宏观经济报告" */
  subtitle?: string;
  /** 主标题 */
  title: React.ReactNode;
  /** 卡片区域内容 */
  cards?: React.ReactNode;
  /** 图表区域内容 */
  charts?: React.ReactNode;
  /** 页脚文字 */
  footer?: string;
  /** 卡片网格列数 */
  cardColumns?: 2 | 3 | 4;
  /** 图表网格列数 */
  chartColumns?: 1 | 2 | 3;
  /** 自定义类名 */
  className?: string;
  /** 子元素（完全自定义内容区域） */
  children?: React.ReactNode;
}

export const BaseContentSlide: React.FC<BaseContentSlideProps> = ({
  subtitle = '2025年第四季度宏观经济报告',
  title,
  cards,
  charts,
  footer = '个金管理部-数据管理室',
  cardColumns = 3,
  chartColumns = 2,
  className,
  children,
}) => {
  const cardGridClass = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
  }[cardColumns];

  const chartGridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
  }[chartColumns];

  return (
    <div className={cn('w-full h-full bg-white flex flex-col p-12 overflow-hidden relative', className)}>
      {/* Top Decoration */}
      <div className="absolute top-0 left-0 w-full h-2 bg-webank-blue" />

      {/* Header Section */}
      <header className="mb-6 animate-fade-in">
        {subtitle && (
          <div className="flex justify-between items-end mb-1">
            <span className="text-xs font-bold text-webank-subtext uppercase tracking-widest">
              {subtitle}
            </span>
          </div>
        )}
        <h1 className="text-3xl font-serif font-bold text-webank-blue leading-tight">
          {title}
        </h1>
      </header>

      {/* Custom Children (完全自定义模式) */}
      {children ? (
        <div className="flex-1 min-h-0">{children}</div>
      ) : (
        <>
          {/* Cards Section */}
          {cards && (
            <section className={cn('grid gap-4 mb-6', cardGridClass)}>
              {cards}
            </section>
          )}

          {/* Charts Section */}
          {charts && (
            <section className={cn('flex-1 grid gap-6 min-h-0', chartGridClass)}>
              {charts}
            </section>
          )}
        </>
      )}

      {/* Footer */}
      {footer && (
        <footer className="absolute bottom-4 left-12 right-12 border-t border-slate-200 pt-2 flex justify-between text-[10px] text-slate-400">
          <span>{footer}</span>
        </footer>
      )}

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        .fill-mode-forwards {
          animation-fill-mode: forwards;
        }
      `}</style>
    </div>
  );
};

/** 图表容器包装组件，带动画效果 */
export const ChartContainer: React.FC<{
  children: React.ReactNode;
  delay?: string;
  className?: string;
}> = ({ children, delay = '0ms', className }) => (
  <div
    className={cn(
      'h-full bg-white rounded-sm opacity-0 animate-fade-in-up fill-mode-forwards',
      className
    )}
    style={{ animationDelay: delay }}
  >
    {children}
  </div>
);
