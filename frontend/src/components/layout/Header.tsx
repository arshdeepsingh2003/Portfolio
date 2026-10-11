import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { brandConfig } from '../../config/brand';
import { Container } from './Container';
import { MobileNav } from './MobileNav';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-ivory/90 backdrop-blur-md border-b border-border/80 transition-colors">
        <Container as="nav" aria-label="Main Navigation" className="flex items-center justify-between h-16 sm:h-20">
          {/* Wordmark logo */}
          <a
            href="#"
            className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest rounded-sm py-1"
            aria-label={`${brandConfig.wordmark} Homepage`}
          >
            <span className="font-serif text-2xl sm:text-3xl font-bold text-forest tracking-tight group-hover:text-forest-hover transition-colors">
              {brandConfig.wordmark}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {brandConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-sm font-medium text-charcoal/80 hover:text-forest hover:bg-surface rounded-sm transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              href="#contact"
              variant="primary"
              size="sm"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Navigation Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setIsMobileNavOpen(true)}
              className="p-2 -mr-2 rounded-sm text-charcoal hover:text-forest hover:bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest min-h-[44px] min-w-[44px] flex items-center justify-center transition-colors"
              aria-label="Open navigation menu"
              aria-expanded={isMobileNavOpen}
              aria-controls="mobile-navigation"
            >
              <Menu className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </Container>
      </header>

      {/* Accessible Mobile Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
};
