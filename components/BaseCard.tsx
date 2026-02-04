import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '../utils/cn';

export interface BaseCardProps {
  title?: string;
  children?: React.ReactNode;
  icon?: LucideIcon;
  delay?: string;
  className?: string;
  variant?: 'default' | 'accent' | 'subtle';
  animated?: boolean;
}

export const BaseCard: React.FC<BaseCardProps> = ({
  title,
  children,
  icon: Icon,
  delay = '0ms',
  className,
  variant = 'default',
  animated = true,
}) => {
  const variantStyles = {
    default: 'bg-slate-50 border-l-4 border-webank-accent/20 hover:border-webank-accent',
    accent: 'bg-webank-accent/5 border-l-4 border-webank-accent hover:border-webank-blue',
    subtle: 'bg-white border border-slate-200 hover:border-webank-accent',
  };

  return (
    <div
      className={cn(
        'flex flex-col gap-2 p-4 transition-all duration-700 ease-out',
        variantStyles[variant],
        animated && 'opacity-0 animate-fade-in-up fill-mode-forwards',
        className
      )}
      style={animated ? { animationDelay: delay } : undefined}
    >
      {(title || Icon) && (
        <div className="flex items-center gap-2 text-webank-accent">
          {Icon && <Icon size={18} />}
          {title && <h4 className="font-bold text-webank-blue text-sm uppercase">{title}</h4>}
        </div>
      )}
      <div className="text-xs text-webank-text leading-relaxed">
        {children}
      </div>
    </div>
  );
};
