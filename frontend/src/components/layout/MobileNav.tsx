import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowRight, Download } from 'lucide-react';
import { brandConfig } from '../../config/brand';
import headerData from '../../data/header.json';
import { Button } from '../ui/Button';

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [isRendered, setIsRendered] = useState(isOpen);
  const [isVisible, setIsVisible] = useState(isOpen);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Manage mount/unmount and CSS transition state
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;

    if (isOpen) {
      setIsRendered(true);
      // Small timeout or rAF to ensure transition runs after DOM attachment
      const animTimer = setTimeout(() => {
        setIsVisible(true);
      }, 20);
      return () => clearTimeout(animTimer);
    } else {
      setIsVisible(false);
      timer = setTimeout(() => {
        setIsRendered(false);
      }, 300);
      return () => {
        if (timer) clearTimeout(timer);
      };
    }
  }, [isOpen]);

  // Lock body scroll when mobile navigation is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Manage focus when opened / closed
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElementRef.current = document.activeElement as HTMLElement;
      // Focus close button on open
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 60);
      return () => clearTimeout(timer);
    } else if (previouslyFocusedElementRef.current) {
      previouslyFocusedElementRef.current.focus();
      previouslyFocusedElementRef.current = null;
    }
  }, [isOpen]);

  // Handle escape key to dismiss & trap focus within drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isRendered) return null;

  return (
    <div
      id="mobile-navigation"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation"
      className="fixed inset-0 z-50 lg:hidden"
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        ref={drawerRef}
        className={`fixed inset-y-0 right-0 w-full max-w-xs bg-surface dark:bg-[#151D19] border-l border-border dark:border-white/10 p-6 shadow-elevated flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div>
          {/* Header & Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-border dark:border-white/10">
            <div className="flex items-center gap-2.5">
              <div
                className="w-9 h-9 rounded-xl bg-surface dark:bg-[#1C2521] border border-border/80 dark:border-white/15 flex items-center justify-center overflow-hidden shadow-xs"
              >
                <img
                  src={brandConfig.logoUrl}
                  alt={brandConfig.wordmark}
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-forest dark:text-ivory leading-none">
                  {brandConfig.wordmark}
                </span>
                <span className="text-[10px] font-mono tracking-wider text-plum dark:text-purple-300 uppercase mt-0.5">
                  {headerData.mobileMenu.roleSubtitle || 'Software Developer'}
                </span>
              </div>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-2 -mr-2 rounded-lg text-charcoal dark:text-ivory hover:text-forest dark:hover:text-emerald-400 hover:bg-ivory dark:hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest dark:focus-visible:ring-emerald-400 min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
              aria-label={headerData.mobileMenu.closeAria || 'Close navigation menu'}
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          {/* Nav Items */}
          <nav className="mt-6 flex flex-col space-y-1" aria-label="Mobile menu links">
            {brandConfig.navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                download={item.isDownload ? (item.downloadFileName || true) : undefined}
                target={item.target}
                rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                onClick={onClose}
                className="group flex items-center justify-between px-3.5 py-3 text-base font-medium text-charcoal dark:text-ivory/80 hover:text-forest dark:hover:text-emerald-400 hover:bg-ivory dark:hover:bg-white/5 rounded-lg transition-all duration-150 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest dark:focus-visible:ring-emerald-400 font-mono text-sm"
              >
                <span>{item.label}</span>
                {item.isDownload ? (
                  <Download className="w-4 h-4 text-plum dark:text-emerald-400 opacity-70 group-hover:translate-y-0.5 transition-all duration-200" aria-hidden="true" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-plum dark:text-emerald-400 opacity-70 group-hover:translate-x-1 transition-all duration-200" aria-hidden="true" />
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom CTA in Drawer */}
        <div className="pt-6 border-t border-border dark:border-white/10 mt-6">
          <Button
            href={headerData.mobileMenu.ctaButton.href || '#contact'}
            variant="primary"
            size="md"
            className="w-full"
            onClick={onClose}
          >
            {headerData.mobileMenu.ctaButton.label || 'Get in Touch'}
          </Button>
          <p className="mt-4 text-center text-xs text-charcoal-muted dark:text-neutral-400">
            {brandConfig.description}
          </p>
        </div>
      </div>
    </div>
  );
};
