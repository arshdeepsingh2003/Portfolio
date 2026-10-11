import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { brandConfig } from '../../config/brand';
import { Button } from '../ui/Button';

export interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
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

  // Handle escape key to dismiss
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
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
      <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-surface border-l border-border p-6 shadow-elevated flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
        <div>
          {/* Header & Close Button */}
          <div className="flex items-center justify-between pb-6 border-b border-border">
            <span className="font-serif text-2xl font-bold text-forest">
              {brandConfig.wordmark}
            </span>
            <button
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
