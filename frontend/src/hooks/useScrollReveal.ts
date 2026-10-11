import { useEffect, useRef, useState } from 'react';

export interface UseScrollRevealOptions {
  /** Threshold at which element is deemed visible (0 to 1) */
  threshold?: number;
  /** Root margin offset */
  rootMargin?: string;
  /** Delay in milliseconds before triggering visibility */
  delay?: number;
  /** Force disable animation */
  disabled?: boolean;
}

/**
 * Lightweight IntersectionObserver hook for one-time scroll reveals.
 * Automatically respects prefers-reduced-motion and gracefully falls back
 * to visible if IntersectionObserver is unavailable or disabled.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = '0px 0px -40px 0px',
  delay = 0,
  disabled = false,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // If disabled or prefers-reduced-motion, show immediately
    if (disabled) {
      setIsVisible(true);
      return;
    }

    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setIsVisible(true);
      return;
    }

    // Graceful fallback if IntersectionObserver is not supported
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const element = ref.current;
    if (!element) return;

    let timer: NodeJS.Timeout | undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry && entry.isIntersecting) {
          if (delay > 0) {
            timer = setTimeout(() => {
              setIsVisible(true);
            }, delay);
          } else {
            setIsVisible(true);
          }
          // Reveal once, then stop observing to avoid re-triggering on scroll oscillations
          observer.unobserve(element);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (timer) clearTimeout(timer);
      observer.disconnect();
    };
  }, [threshold, rootMargin, delay, disabled]);

  return { ref, isVisible };
}
