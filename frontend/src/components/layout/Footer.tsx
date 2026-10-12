import React from 'react';
import { ArrowUp, Mail, Github, Linkedin, Phone } from 'lucide-react';
import { brandConfig } from '../../config/brand';
import footerData from '../../data/footer.json';
import { Container } from './Container';
import { Badge } from '../ui/Badge';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-surface dark:bg-[#121815] border-t border-border dark:border-white/10 mt-auto pt-12 pb-10 transition-colors">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-border dark:border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl bg-surface dark:bg-[#1C2521] border border-border/80 dark:border-white/15 flex items-center justify-center overflow-hidden shadow-xs"
              >
                <img
                  src={brandConfig.logoUrl}
                  alt={brandConfig.wordmark}
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold text-forest dark:text-ivory tracking-tight leading-none">
                  {brandConfig.wordmark}
                </span>
                <span className="text-[11px] font-mono tracking-wider text-plum dark:text-purple-300 uppercase mt-1">
                  {brandConfig.ownerDisplayName} &bull; {footerData.roleSubtitle || 'Software Developer'}
                </span>
              </div>
            </div>
            <p className="mt-3 text-sm text-charcoal-muted dark:text-[#A8B2AC] max-w-sm leading-relaxed">
              {brandConfig.description}
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-status-success animate-pulse" />
              <span className="text-xs font-mono text-charcoal-muted dark:text-neutral-400">
                {footerData.statusText || 'Open to opportunities'}
              </span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h3 className="font-mono text-xs uppercase tracking-widest text-plum dark:text-purple-300 font-semibold mb-3">
              {footerData.headings.navigation || 'Navigation'}
            </h3>
            <ul className="space-y-2 text-sm">
              {brandConfig.navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    download={item.isDownload ? (item.downloadFileName || true) : undefined}
                    target={item.target}
                    rel={item.target === '_blank' ? 'noopener noreferrer' : undefined}
                    className="text-charcoal dark:text-ivory/80 hover:text-forest dark:hover:text-emerald-400 transition-colors inline-block py-0.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest dark:focus-visible:ring-emerald-400 rounded-sm font-mono text-xs"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Links */}
          <div className="md:col-span-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-plum dark:text-purple-300 font-semibold mb-3">
              {footerData.headings.contact || 'Direct Contact'}
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center justify-between py-0.5">
                <span className="flex items-center gap-2 text-charcoal dark:text-ivory">
                  <Mail className="w-4 h-4 text-forest dark:text-emerald-400" aria-hidden="true" />
                  <span>{footerData.labels.email || 'Email'}</span>
                </span>
                {brandConfig.contact.email ? (
                  <a
                    href={`mailto:${brandConfig.contact.email}`}
                    className="text-forest dark:text-emerald-400 hover:underline font-mono text-xs"
                  >
                    {brandConfig.contact.email}
                  </a>
                ) : (
                  <Badge variant="pending" size="sm">{footerData.labels.pendingBadge || 'Pending'}</Badge>
                )}
              </li>

              {brandConfig.contact.phone && (
                <li className="flex items-center justify-between py-0.5">
                  <span className="flex items-center gap-2 text-charcoal dark:text-ivory">
                    <Phone className="w-4 h-4 text-forest dark:text-emerald-400" aria-hidden="true" />
                    <span>{footerData.labels.phone || 'Phone'}</span>
                  </span>
                  <a
                    href={`tel:${brandConfig.contact.phone}`}
                    className="text-forest dark:text-emerald-400 hover:underline font-mono text-xs"
                  >
                    {brandConfig.contact.phone}
                  </a>
                </li>
              )}

              <li className="flex items-center justify-between py-0.5">
                <span className="flex items-center gap-2 text-charcoal dark:text-ivory">
                  <Github className="w-4 h-4 text-forest dark:text-emerald-400" aria-hidden="true" />
                  <span>{footerData.labels.github || 'GitHub'}</span>
                </span>
                {brandConfig.contact.githubUrl ? (
                  <a
                    href={brandConfig.contact.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-forest dark:text-emerald-400 hover:underline font-mono text-xs"
                  >
                    {footerData.labels.viewProfile || 'View Profile'}
                  </a>
                ) : (
                  <Badge variant="pending" size="sm">{footerData.labels.pendingBadge || 'Pending'}</Badge>
                )}
              </li>

              <li className="flex items-center justify-between py-0.5">
                <span className="flex items-center gap-2 text-charcoal dark:text-ivory">
                  <Linkedin className="w-4 h-4 text-forest dark:text-emerald-400" aria-hidden="true" />
                  <span>{footerData.labels.linkedin || 'LinkedIn'}</span>
                </span>
                {brandConfig.contact.linkedinUrl ? (
                  <a
                    href={brandConfig.contact.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-forest dark:text-emerald-400 hover:underline font-mono text-xs"
                  >
                    {footerData.labels.viewProfile || 'View Profile'}
                  </a>
                ) : (
                  <Badge variant="pending" size="sm">{footerData.labels.pendingBadge || 'Pending'}</Badge>
                )}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-charcoal-muted dark:text-neutral-400 font-sans">
          <p>© {currentYear} {brandConfig.wordmark}. {footerData.labels.rightsReserved || 'All rights reserved.'}</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex items-center gap-1.5 hover:text-forest dark:hover:text-emerald-400 transition-all duration-200 py-1 px-2 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest dark:focus-visible:ring-emerald-400 cursor-pointer active:scale-95"
            aria-label={footerData.labels.backToTopAria || 'Scroll back to top of page'}
          >
            <span>{footerData.labels.backToTop || 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" aria-hidden="true" />
          </button>
        </div>
      </Container>
    </footer>
  );
};
