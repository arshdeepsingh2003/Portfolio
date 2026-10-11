import React from 'react';

export interface CardShellProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  as?: 'div' | 'article' | 'section';
  className?: string;
}

export const CardShell: React.FC<CardShellProps> = ({
  children,
  interactive = false,
  padding = 'md',
  as: Component = 'div',
  className = '',
  ...rest
}) => {
  const paddingStyles: Record<string, string> = {
    none: 'p-0',
    sm: 'p-3 sm:p-4',
    md: 'p-4 sm:p-6',
    lg: 'p-5 sm:p-8',
  };

  const interactiveStyles = interactive
    ? 'hover:shadow-card dark:hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)] hover:-translate-y-1 hover:border-forest/40 dark:hover:border-emerald-500/40 transition-all duration-300 ease-out'
    : 'transition-all duration-300 ease-out';

  return (
    <Component
      className={`bg-surface dark:bg-[#161D1A] border border-border dark:border-white/10 rounded-md shadow-subtle dark:shadow-none ${paddingStyles[padding]} ${interactiveStyles} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
};
