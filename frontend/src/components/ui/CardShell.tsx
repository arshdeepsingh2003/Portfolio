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
    lg: 'p-6 sm:p-8',
  };

  const interactiveStyles = interactive
    ? 'hover:shadow-card hover:-translate-y-0.5 hover:border-charcoal/30 transition-all duration-200'
    : '';

  return (
    <Component
      className={`bg-surface border border-border rounded-md shadow-subtle ${paddingStyles[padding]} ${interactiveStyles} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
};
