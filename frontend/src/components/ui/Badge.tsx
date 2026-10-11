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
    'inline-flex items-center font-mono font-medium tracking-wide transition-colors select-none';

  const variantStyles: Record<BadgeVariant, string> = {
    forest: 'bg-forest/10 text-forest border border-forest/20',
    plum: 'bg-plum/10 text-plum border border-plum/20',
    neutral: 'bg-surface text-charcoal border border-border',
    success: 'bg-status-success/10 text-status-success border border-status-success/20',
    warning: 'bg-status-warning/10 text-status-warning border border-status-warning/20',
    pending: 'bg-charcoal/5 text-charcoal-muted border border-border border-dashed italic',
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
