import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * 内嵌数据强调组件 — 替代散落的 <span className="font-bold text-red-500">...
 * tone: neutral(默认) / accent(品牌蓝) / positive(绿) / negative(红)
 */
export const Metric: React.FC<{
  children: React.ReactNode;
  tone?: 'neutral' | 'accent' | 'positive' | 'negative';
  className?: string;
}> = ({ children, tone = 'neutral', className }) => {
  const toneClass = {
    neutral: 'text-webank-text',
    accent: 'text-webank-accent',
    positive: 'text-green-600',
    negative: 'text-red-600',
  }[tone];
  return (
    <span className={cn('font-semibold tabular-nums', toneClass, className)}>{children}</span>
  );
};

/** 简洁的 KPI 网格容器：等同 cards 区的 grid，统一间距 */
export const KpiGrid: React.FC<{
  columns?: 2 | 3 | 4;
  children: React.ReactNode;
  className?: string;
}> = ({ columns = 3, children, className }) => {
  const colClass = {
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-4',
  }[columns];
  return <div className={cn('grid gap-4', colClass, className)}>{children}</div>;
};

export interface BaseCardProps {
  title?: string;
  children?: React.ReactNode;
  icon?: LucideIcon;
  delay?: string;
  className?: string;
  titleClassName?: string;
  variant?: 'default' | 'accent' | 'subtle';
  animated?: boolean;
}

export const BaseCard: React.FC<BaseCardProps> = ({
  title,
  children,
  icon: Icon,
  delay = '0ms',
  className,
  titleClassName,
  variant = 'default',
  animated = true,
}) => {
  const variantStyles = {
    default: 'bg-slate-50 border-l-4 border-webank-accent/20 hover:border-webank-accent',
    accent: 'bg-webank-accent/5 border-l-4 border-webank-accent hover:border-webank-blue',
    subtle: 'bg-white border border-webank-line hover:border-webank-accent',
  };

  return (
    <div
      data-base-card="true"
      className={cn(
        'flex flex-col gap-2 p-4 rounded-card shadow-card transition-all duration-700 ease-out',
        variantStyles[variant],
        animated && 'animate-fade-in-up fill-mode-forwards',
        className
      )}
      style={animated ? { animationDelay: '0ms', opacity: 0 } : undefined}
    >
      {(title || Icon) && (
        <div className="flex items-center gap-2 text-webank-accent">
          {Icon && <Icon size={18} />}
          {title && <h4 className={cn("font-bold text-webank-blue text-h3 uppercase", titleClassName)}>{title}</h4>}
        </div>
      )}
      <div className="text-body text-webank-text leading-relaxed">
        {children}
      </div>
    </div>
  );
};
