import React, { useState } from 'react';
import { Mail, Github, Linkedin, FileText, Check, Copy, ExternalLink, ArrowUpRight, ShieldCheck, Sparkles } from 'lucide-react';
import { brandConfig } from '../../config/brand';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { CardShell } from '../ui/CardShell';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'failed'>('idle');
  const contact = brandConfig.contact;

  const handleCopyEmail = async () => {
    if (!contact.email) return;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(contact.email);
        setCopyStatus('copied');
      } else {
        // Fallback for non-secure contexts or restricted clipboard environments
        const textArea = document.createElement('textarea');
        textArea.value = contact.email;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
          setCopyStatus('copied');
        } else {
          setCopyStatus('failed');
        }
      }
    } catch {
      setCopyStatus('failed');
    }
    setTimeout(() => setCopyStatus('idle'), 2500);
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 sm:py-24 border-b border-border/70 bg-surface/30 relative overflow-hidden"
    >
      {/* Persistent live region for screen reader announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {copyStatus === 'copied' && 'Email address copied to clipboard successfully.'}
        {copyStatus === 'failed' && 'Unable to copy email address automatically. Please copy manually.'}
      </div>

      {/* Subtle editorial watermark / grid accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 [background-image:radial-gradient(#173C32_0.75px,transparent_0.75px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_50%,transparent_100%)]"
        aria-hidden="true"
      />

      <Container className="relative">
        <SectionHeading
          id="contact-heading"
          eyebrow="Direct Inquiries & Collaboration"
          title="Direct Contact & Networks"
          description="Open for full-stack web engineering roles, data analytics initiatives, and consulting engagements. Reaching out directly is preferred—no tracking forms or third-party CRM."
        />

        {/* 4-Channel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* Channel 1: Direct Email */}
          <CardShell
            as="article"
            padding="lg"
            className="flex flex-col h-full bg-surface hover:border-forest/40 transition-colors duration-200"
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="p-2.5 rounded-sm bg-forest/10 text-forest border border-forest/20">
                <Mail className="w-5 h-5" aria-hidden="true" />
              </div>
              {contact.email ? (
                <Badge variant="success" size="sm">Active Channel</Badge>
              ) : (
                <Badge variant="pending" size="sm">Pending Verification</Badge>
              )}
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-forest font-normal mb-1">
              Direct Email
            </h3>
            <p className="text-xs font-mono uppercase tracking-wider text-charcoal-muted mb-3">
              Primary correspondence inbox
            </p>
            <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
              For technical inquiries, full-time engineering roles, or consulting requests. Directly reaches my inbox without intermediate routing.
            </p>

            <div className="mt-auto pt-4 border-t border-border/70">
              {contact.email ? (
                <div className="space-y-3">
                  <div className="p-2.5 rounded-sm bg-warm-ivory/60 border border-border/80 flex items-center justify-between gap-2">
                    <span className="font-mono text-xs text-charcoal truncate select-all">
                      {contact.email}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded-sm hover:bg-surface text-charcoal hover:text-forest transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-forest cursor-pointer"
                      aria-label={copyStatus === 'copied' ? 'Email address copied' : 'Copy email address'}
                      title="Copy email address"
                    >
                      {copyStatus === 'copied' ? (
                        <Check className="w-4 h-4 text-status-success" aria-hidden="true" />
                      ) : (
                        <Copy className="w-4 h-4 text-charcoal-muted" aria-hidden="true" />
                      )}
                    </button>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Button
                      href={`mailto:${contact.email}`}
                      variant="primary"
                      size="sm"
                      rightIcon={<ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />}
                    >
                      Compose Email
                    </Button>
                    {copyStatus === 'copied' && (
                      <span className="text-xs font-mono text-status-success flex items-center gap-1" role="status">
                        <Check className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copied to clipboard!</span>
                      </span>
                    )}
                    {copyStatus === 'failed' && (
                      <span className="text-xs font-mono text-status-warning" role="status">
                        Unable to copy. Please select text manually.
                      </span>
                    )}
                  </div>
                </div>
              ) : (
                <div className="p-3 rounded-sm bg-surface-muted/60 border border-border/70 space-y-1">
                  <p className="text-xs font-semibold text-charcoal">Address Pending Review</p>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    Direct email is configured in <code className="font-mono text-[11px] bg-warm-ivory px-1 py-0.5 rounded-sm">src/config/brand.ts</code> and awaiting verification to avoid displaying unverified contact addresses.
                  </p>
                </div>
              )}
            </div>
          </CardShell>

          {/* Channel 2: GitHub Profile */}
          <CardShell
            as="article"
            padding="lg"
            className="flex flex-col h-full bg-surface hover:border-forest/40 transition-colors duration-200"
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="p-2.5 rounded-sm bg-charcoal/5 text-charcoal border border-border">
                <Github className="w-5 h-5" aria-hidden="true" />
              </div>
              {contact.githubUrl ? (
                <Badge variant="forest" size="sm">Verified Account</Badge>
              ) : (
                <Badge variant="pending" size="sm">Pending Verification</Badge>
              )}
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-forest font-normal mb-1">
              GitHub Profile
            </h3>
            <p className="text-xs font-mono uppercase tracking-wider text-charcoal-muted mb-3">
              Code repositories & experiments
            </p>
            <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
              Inspect open-source code repositories, version history, system blueprints, and frontend architectural experiments.
            </p>

            <div className="mt-auto pt-4 border-t border-border/70">
              {contact.githubUrl ? (
                <Button
                  href={contact.githubUrl}
                  target="_blank"
                  variant="secondary"
                  size="sm"
                  rightIcon={<ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />}
                >
                  Explore Repositories
                </Button>
              ) : (
                <div className="p-3 rounded-sm bg-surface-muted/60 border border-border/70 space-y-1">
                  <p className="text-xs font-semibold text-charcoal">Profile Link Pending</p>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    GitHub handle configured in brand settings and awaiting verification to prevent broken links.
                  </p>
                </div>
              )}
            </div>
          </CardShell>

          {/* Channel 3: LinkedIn Profile */}
          <CardShell
            as="article"
            padding="lg"
            className="flex flex-col h-full bg-surface hover:border-plum/40 transition-colors duration-200"
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="p-2.5 rounded-sm bg-plum/10 text-plum border border-plum/20">
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </div>
              {contact.linkedinUrl ? (
                <Badge variant="plum" size="sm">Verified Network</Badge>
              ) : (
                <Badge variant="pending" size="sm">Pending Verification</Badge>
              )}
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-forest font-normal mb-1">
              LinkedIn Profile
            </h3>
            <p className="text-xs font-mono uppercase tracking-wider text-plum mb-3 font-semibold">
              Professional history & networking
            </p>
            <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
              Connect for professional collaboration, background verification, peer networking, or career opportunities.
            </p>

            <div className="mt-auto pt-4 border-t border-border/70">
              {contact.linkedinUrl ? (
                <Button
                  href={contact.linkedinUrl}
                  target="_blank"
                  variant="secondary"
                  size="sm"
                  rightIcon={<ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />}
                >
                  Connect on LinkedIn
                </Button>
              ) : (
                <div className="p-3 rounded-sm bg-surface-muted/60 border border-border/70 space-y-1">
                  <p className="text-xs font-semibold text-charcoal">Profile Link Pending</p>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    LinkedIn profile URL is awaiting owner review in brand configuration before being displayed publicly.
                  </p>
                </div>
              )}
            </div>
          </CardShell>

          {/* Channel 4: Résumé / CV Document */}
          <CardShell
            as="article"
            padding="lg"
            className="flex flex-col h-full bg-surface hover:border-forest/40 transition-colors duration-200"
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <div className="p-2.5 rounded-sm bg-forest/10 text-forest border border-forest/20">
                <FileText className="w-5 h-5" aria-hidden="true" />
              </div>
              {contact.resumeUrl ? (
                <Badge variant="forest" size="sm">Document Ready</Badge>
              ) : (
                <Badge variant="pending" size="sm">Pending Verification</Badge>
              )}
            </div>

            <h3 className="font-serif text-xl sm:text-2xl text-forest font-normal mb-1">
              Curriculum Vitae
            </h3>
            <p className="text-xs font-mono uppercase tracking-wider text-charcoal-muted mb-3">
              Comprehensive technical résumé
            </p>
            <p className="text-sm text-charcoal-muted leading-relaxed mb-6">
              A comprehensive chronological view of engineering proficiencies, analytics experience, tooling, and education.
            </p>

            <div className="mt-auto pt-4 border-t border-border/70">
              {contact.resumeUrl ? (
                <Button
                  href={contact.resumeUrl}
                  target="_blank"
                  variant="secondary"
                  size="sm"
                  rightIcon={<ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />}
                >
                  View Résumé PDF
                </Button>
              ) : (
                <div className="p-3 rounded-sm bg-surface-muted/60 border border-border/70 space-y-1">
                  <p className="text-xs font-semibold text-charcoal">Document Pending Review</p>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    Official résumé document is pending owner verification to uphold strict data accuracy standards.
                  </p>
                </div>
              )}
            </div>
          </CardShell>
        </div>

        {/* Communication Guarantees & Editorial Principles */}
        <div className="p-6 sm:p-8 rounded-md bg-surface border border-border shadow-card">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border text-forest">
            <ShieldCheck className="w-5 h-5 text-forest" aria-hidden="true" />
            <h3 className="font-serif text-xl font-bold">Direct Communication Guarantees</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-forest" aria-hidden="true" />
                <h4 className="font-sans font-semibold text-charcoal">Direct Privacy & Security</h4>
              </div>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                No third-party tracking scripts, external tracking forms, or unsolicited data collection. Communication occurs directly between your mail client and my verified inbox.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-plum" aria-hidden="true" />
                <h4 className="font-sans font-semibold text-charcoal">Direct Technical Discourse</h4>
              </div>
              <p className="text-xs text-charcoal-muted leading-relaxed">
                Connect directly with the developer. Inquiries regarding frontend architecture, TypeScript systems, or Python reconciliation routines receive thoughtful attention.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-status-success" aria-hidden="true" />
                <h4 className="font-sans font-semibold text-charcoal">Status & Availability</h4>
              </div>
              <p className="text-xs text-charcoal-muted leading-relaxed flex items-center gap-1.5 flex-wrap">
                <span>Currently open to opportunities and collaborative engineering projects under the</span>
                <span className="font-mono text-forest font-semibold">{brandConfig.wordmark}</span>
                <span>brand.</span>
              </p>
            </div>
          </div>

          {/* Editorial colophon note */}
          <div className="mt-6 pt-4 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-charcoal-muted font-mono">
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-plum" aria-hidden="true" />
              <span>Configured centrally via <code className="bg-warm-ivory px-1 py-0.5 rounded-sm">frontend/src/config/brand.ts</code></span>
            </span>
            <span>No backend form API required</span>
          </div>
        </div>
      </Container>
    </section>
  );
};
