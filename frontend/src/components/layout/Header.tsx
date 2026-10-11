import React, { useState } from 'react';
import { Menu, Moon, Sun } from 'lucide-react';
import { brandConfig } from '../../config/brand';
import { MobileNav } from './MobileNav';
import { useActiveSection } from '../../hooks/useActiveSection';
import { useTheme } from '../../hooks/useTheme';

export const Header: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { activeSection, isScrolled } = useActiveSection(['about', 'skills', 'experience', 'projects', 'contact']);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.history.pushState(null, '', '#about');
  };

  return (
    <>
      <header
        className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
        aria-label="Main Navigation Container"
      >
        <nav
          aria-label="Main Navigation"
          className={`pointer-events-auto flex items-center justify-between gap-3 sm:gap-6 px-3 py-2 sm:px-5 sm:py-2.5 rounded-2xl sm:rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-[#FAF6EE]/90 dark:bg-[#141C18]/90 shadow-[0_8px_32px_rgba(0,0,0,0.12)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.5)] border border-border/80 dark:border-white/15 backdrop-blur-md'
              : 'bg-[#FAF6EE]/80 dark:bg-[#141C18]/80 shadow-[0_4px_24px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] border border-border/60 dark:border-white/12 backdrop-blur-md'
          }`}
        >
          {/* Brand Logo: Stylized AS Monogram Mark */}
          <a
            href="#about"
            onClick={handleLogoClick}
            className="group flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest dark:focus-visible:ring-emerald-400 rounded-lg p-0.5"
            aria-label={`${brandConfig.ownerDisplayName} (${brandConfig.wordmark}) About`}
          >
            <div
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-surface dark:bg-[#1C2521] border border-border/80 dark:border-white/15 flex items-center justify-center overflow-hidden shadow-xs group-hover:scale-105 active:scale-95 transition-all duration-200"
              title={brandConfig.wordmark}
            >
              <img
                src={brandConfig.logoUrl}
                alt={brandConfig.wordmark}
                className="w-full h-full object-contain p-0.5"
              />
            </div>
            <span className="sr-only">{brandConfig.wordmark}</span>
          </a>

          {/* Desktop Navigation Links (About, Work, Projects, Contact, Resume) */}
          <div className="hidden md:flex items-center space-x-1 sm:space-x-1.5 font-mono text-xs sm:text-sm">
            {brandConfig.navItems.map((item) => {
              const isActive = activeSection === item.href;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  download={item.isDownload ? (item.downloadFileName || true) : undefined}
                  target={item.target}
                  rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                  data-active={isActive ? 'true' : 'false'}
                  className={`nav-link-underline px-3 py-1.5 transition-colors duration-200 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest dark:focus-visible:ring-emerald-400 ${
                    isActive
                      ? 'text-forest dark:text-emerald-400 font-semibold'
                      : 'text-charcoal/70 dark:text-[#A8B2AC] hover:text-charcoal dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right Action Cluster: Dark Mode Toggle + Mobile Menu Trigger */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Theme Toggle Button (Moon/Sun) */}
            <button
              type="button"
              onClick={toggleTheme}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-charcoal/15 dark:border-white/15 bg-transparent hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center text-charcoal dark:text-ivory transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest dark:focus-visible:ring-emerald-400 active:scale-95"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-300 stroke-[1.8] animate-spin-slow" aria-hidden="true" />
              ) : (
                <Moon className="w-4 h-4 text-charcoal stroke-[1.8]" aria-hidden="true" />
              )}
            </button>

            {/* Mobile Hamburger Drawer Trigger */}
            <button
              type="button"
              onClick={() => setIsMobileNavOpen(true)}
              className="md:hidden w-8 h-8 rounded-xl border border-charcoal/15 dark:border-white/15 bg-transparent hover:bg-black/5 dark:hover:bg-white/10 flex items-center justify-center text-charcoal dark:text-ivory transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest dark:focus-visible:ring-emerald-400"
              aria-label="Open navigation menu"
              aria-expanded={isMobileNavOpen}
              aria-controls="mobile-navigation"
            >
              <Menu className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      {/* Accessible Mobile Drawer */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  );
};
