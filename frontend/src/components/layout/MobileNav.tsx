import React, { useEffect, useRef } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { brandConfig } from '../../config/brand';
import { Button } from '../ui/Button';

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

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
      }, 50);
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

  if (!isOpen) return null;

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
        className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div
        ref={drawerRef}
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-surface border-l border-border p-6 shadow-elevated flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200"
      >
        <div>
          {/* Header & Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-border">
            <div className="flex items-center gap-2.5">
              <img
                src={brandConfig.logoUrl}
                alt={`${brandConfig.ownerDisplayName} Logo`}
                className="w-9 h-9 rounded-lg object-cover border border-border bg-charcoal"
              />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold text-forest leading-none">
                  {brandConfig.wordmark}
                </span>
                <span className="text-[10px] font-mono tracking-wider text-plum uppercase mt-0.5">
                  Software Developer
                </span>
              </div>
            </div>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              className="p-2 -mr-2 rounded-sm text-charcoal hover:text-forest hover:bg-ivory focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>

          {/* Nav Items */}
          <nav className="mt-6 flex flex-col space-y-1" aria-label="Mobile menu links">
            {brandConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between px-3 py-3 text-base font-medium text-charcoal hover:text-forest hover:bg-ivory rounded-sm transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-plum opacity-70" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom CTA in Drawer */}
        <div className="pt-6 border-t border-border mt-6">
          <Button
            href="#contact"
            variant="primary"
            size="md"
            className="w-full"
            onClick={onClose}
          >
            Get in Touch
          </Button>
          <p className="mt-4 text-center text-xs text-charcoal-muted">
            {brandConfig.description}
          </p>
        </div>
      </div>
    </div>
  );
};
