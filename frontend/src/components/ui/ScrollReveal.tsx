import React, { ElementType } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export interface ScrollRevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: ElementType;
  animation?: 'fade-up' | 'fade' | 'scale';
  delay?: number;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  as: Component = 'div',
  animation = 'fade-up',
  delay = 0,
  className = '',
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
  ...rest
}) => {
  const { ref, isVisible } = useScrollReveal<HTMLElement>({
    threshold,
    rootMargin,
    delay,
  });

  const getAnimationClasses = () => {
    switch (animation) {
      case 'fade':
        return isVisible ? 'reveal-fade-active' : 'reveal-fade-init';
      case 'scale':
        return isVisible ? 'reveal-scale-active' : 'reveal-scale-init';
      case 'fade-up':
      default:
        return isVisible ? 'reveal-fade-up-active' : 'reveal-fade-up-init';
    }
  };

  return (
    <Component
      ref={ref}
      className={`reveal-base ${getAnimationClasses()} ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
};
