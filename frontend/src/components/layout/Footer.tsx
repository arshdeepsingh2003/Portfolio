import React from 'react';
import { ArrowUp, Mail, Github, Linkedin } from 'lucide-react';
import { brandConfig } from '../../config/brand';
import { Container } from './Container';
import { Badge } from '../ui/Badge';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface border-t border-border mt-auto pt-12 pb-10 transition-colors">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-border">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <span className="font-serif text-2xl font-bold text-forest tracking-tight">
              {brandConfig.wordmark}
            </span>
            <p className="mt-2 text-sm text-charcoal-muted max-w-sm leading-relaxed">
              {brandConfig.description}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-status-success animate-pulse" />
              <span className="text-xs font-mono text-charcoal-muted">Open to opportunities</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-plum font-semibold mb-3">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              {brandConfig.navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-charcoal hover:text-forest transition-colors inline-block py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest rounded-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Links */}
          <div className="md:col-span-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-plum font-semibold mb-3">
              Direct Contact
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center justify-between py-0.5">
                <span className="flex items-center gap-2 text-charcoal">
                  <Mail className="w-4 h-4 text-forest" aria-hidden="true" />
                  <span>Email</span>
                </span>
                {brandConfig.contact.email ? (
                  <a
                    href={`mailto:${brandConfig.contact.email}`}
                    className="text-forest hover:underline font-mono text-xs"
                  >
                    {brandConfig.contact.email}
                  </a>
                ) : (
                  <Badge variant="pending" size="sm">Pending</Badge>
                )}
              </li>

              <li className="flex items-center justify-between py-0.5">
                <span className="flex items-center gap-2 text-charcoal">
                  <Github className="w-4 h-4 text-forest" aria-hidden="true" />
                  <span>GitHub</span>
                </span>
                {brandConfig.contact.githubUrl ? (
                  <a
                    href={brandConfig.contact.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-forest hover:underline font-mono text-xs"
                  >
                    View Profile
                  </a>
                ) : (
                  <Badge variant="pending" size="sm">Pending</Badge>
                )}
              </li>

              <li className="flex items-center justify-between py-0.5">
                <span className="flex items-center gap-2 text-charcoal">
                  <Linkedin className="w-4 h-4 text-forest" aria-hidden="true" />
                  <span>LinkedIn</span>
                </span>
                {brandConfig.contact.linkedinUrl ? (
                  <a
                    href={brandConfig.contact.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-forest hover:underline font-mono text-xs"
                  >
                    View Profile
                  </a>
                ) : (
                  <Badge variant="pending" size="sm">Pending</Badge>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-muted font-sans">
          <p>© {currentYear} {brandConfig.wordmark}. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-forest transition-colors py-1 px-2 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest cursor-pointer"
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </Container>
    </footer>
  );
};
