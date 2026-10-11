import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

export interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-ivory text-charcoal font-sans">
      {/* Skip to main content link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-forest text-ivory text-sm font-medium rounded-sm shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest"
      >
        Skip to main content
      </a>

      {/* Main Header */}
      <Header />

      {/* Primary Main Landmark */}
      <main id="main-content" className="flex-1 focus:outline-none">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
