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
  download?: string | boolean;
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
      download,
      className = '',
      type = 'button',
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    // Base styling following DESIGN_SYSTEM.md with refined micro-interactions
    const baseStyles =
      'inline-flex items-center justify-center font-medium transition-all duration-200 ease-out rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest dark:focus-visible:ring-emerald-400 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#0F1412] select-none group/btn hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]';

    // Variant styling
    const variantStyles: Record<ButtonVariant, string> = {
      primary:
        'bg-forest dark:bg-emerald-600 text-ivory hover:bg-forest-hover dark:hover:bg-emerald-500 hover:shadow-card active:bg-forest-light border border-transparent shadow-subtle',
      secondary:
        'bg-surface dark:bg-[#1C2420] text-charcoal dark:text-ivory border border-border dark:border-white/15 hover:border-charcoal/40 dark:hover:border-white/30 hover:bg-ivory dark:hover:bg-[#232D28] hover:shadow-subtle active:bg-surface-muted',
      ghost:
        'bg-transparent text-charcoal dark:text-ivory hover:bg-charcoal/5 dark:hover:bg-white/10 active:bg-charcoal/10 border border-transparent',
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
      ? 'opacity-50 cursor-not-allowed pointer-events-none hover:translate-y-0 hover:shadow-none active:scale-100'
      : 'cursor-pointer';

    const combinedClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`.trim();

    if (href && !isDisabled) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          download={download}
          target={target}
          rel={target === '_blank' ? 'noopener noreferrer ' + (rel || '') : rel}
          className={combinedClasses}
        >
          {isLoading && <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />}
          {!isLoading && leftIcon && (
            <span className="inline-flex items-center transition-transform duration-200 group-hover/btn:-translate-x-0.5">
              {leftIcon}
            </span>
          )}
          <span>{children}</span>
          {!isLoading && rightIcon && (
            <span className="inline-flex items-center transition-transform duration-200 group-hover/btn:translate-x-0.5">
              {rightIcon}
            </span>
          )}
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
        {!isLoading && leftIcon && (
          <span className="inline-flex items-center transition-transform duration-200 group-hover/btn:-translate-x-0.5">
            {leftIcon}
          </span>
        )}
        <span>{children}</span>
        {!isLoading && rightIcon && (
          <span className="inline-flex items-center transition-transform duration-200 group-hover/btn:translate-x-0.5">
            {rightIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
