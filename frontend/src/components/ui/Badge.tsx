import React from 'react';

export type BadgeVariant = 'forest' | 'plum' | 'neutral' | 'success' | 'warning' | 'pending';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  pill?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'sm',
  pill = false,
  icon,
  className = '',
}) => {
  const baseStyles =
    'inline-flex items-center font-mono font-medium tracking-wide transition-all duration-200 select-none';

  const variantStyles: Record<BadgeVariant, string> = {
    forest: 'bg-forest/10 dark:bg-emerald-500/15 text-forest dark:text-emerald-400 border border-forest/20 dark:border-emerald-500/30',
    plum: 'bg-plum/10 dark:bg-purple-400/15 text-plum dark:text-purple-300 border border-plum/20 dark:border-purple-400/30',
    neutral: 'bg-surface dark:bg-[#1E2622] text-charcoal dark:text-ivory border border-border dark:border-white/15 hover:border-border-dark dark:hover:border-white/30 hover:bg-surface-muted/80',
    success: 'bg-status-success/10 dark:bg-emerald-500/15 text-status-success dark:text-emerald-400 border border-status-success/20 dark:border-emerald-500/30',
    warning: 'bg-status-warning/10 dark:bg-amber-500/15 text-status-warning dark:text-amber-300 border border-status-warning/20 dark:border-amber-500/30',
    pending: 'bg-charcoal/5 dark:bg-white/5 text-charcoal-muted dark:text-neutral-400 border border-border dark:border-white/10 border-dashed italic',
  };

  const sizeStyles: Record<BadgeSize, string> = {
    sm: 'text-xs px-2.5 py-0.5 gap-1.5',
    md: 'text-sm px-3 py-1 gap-2',
  };

  const radiusStyle = pill ? 'rounded-full' : 'rounded-sm';

  return (
    <span className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${radiusStyle} ${className}`}>
      {icon}
      <span>{children}</span>
    </span>
  );
};
