import React, { forwardRef } from 'react';
import { Loader2 } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled = false,
      leftIcon,
      rightIcon,
      href,
      target,
      rel,
      className = '',
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    // Base styling following DESIGN_SYSTEM.md
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-colors duration-150 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2 select-none';

    // Variant styling
    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        'bg-forest text-ivory hover:bg-forest-hover active:bg-forest-light border border-transparent shadow-subtle',
      secondary:
        'bg-surface text-charcoal border border-border hover:border-charcoal/40 hover:bg-ivory active:bg-surface-muted',
      ghost:
        'bg-transparent text-charcoal hover:bg-charcoal/5 active:bg-charcoal/10 border border-transparent',
      danger:
        'bg-status-error text-ivory hover:opacity-90 active:opacity-80 border border-transparent',
    };

    // Size styling
    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'text-xs px-3 py-1.5 min-h-[36px] gap-1.5',
      md: 'text-sm px-4 py-2 min-h-[44px] gap-2',
      lg: 'text-base px-6 py-3 min-h-[48px] gap-2.5',
    };

    const disabledStyles = isDisabled
      ? 'opacity-50 cursor-not-allowed pointer-events-none'
      : 'cursor-pointer';

    const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`.trim();

    if (href && !isDisabled) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer ' + (rel || '') : rel}
          className={combinedClasses}
        >
          {isLoading && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
          {!isLoading && leftIcon}
          <span>{children}</span>
          {!isLoading && rightIcon}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        disabled={isDisabled}
        aria-busy={isLoading}
        className={combinedClasses}
        {...rest}
      >
        {isLoading && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
        {!isLoading && leftIcon}
        <span>{children}</span>
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
