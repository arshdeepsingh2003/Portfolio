import React from 'react';
import { FileText, Compass, ShieldCheck, ArrowRight } from 'lucide-react';
import { brandConfig } from '../../config/brand';
import { aboutData } from '../../data/about';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { CardShell } from '../ui/CardShell';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About Me and Technical Background"
      className="py-16 sm:py-24 border-b border-border/70 bg-surface/30"
    >
      <Container>
        <SectionHeading
          eyebrow={aboutData.eyebrow}
          title={aboutData.title}
          description="A look into my engineering perspective, analytical philosophy, and the principles that guide my work."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Narrative Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            {/* Lead Statement */}
            <div className="p-5 sm:p-6 rounded-md bg-surface border border-border border-l-4 border-l-forest shadow-subtle">
              <p className="font-serif text-xl sm:text-2xl text-forest leading-snug">
                &ldquo;{aboutData.lead}&rdquo;
              </p>
            </div>

            {/* Detailed Story Paragraphs */}
            <div className="space-y-4 text-charcoal leading-relaxed text-base sm:text-lg">
              {aboutData.paragraphs.map((para, index) => (
                <p key={index} className="text-charcoal/90">
                  {para}
                </p>
              ))}
            </div>

            {/* Action Bar & Résumé Status */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Button
                href="#contact"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
              >
                Direct Contact
              </Button>

              {brandConfig.contact.resumeUrl ? (
                <Button
                  href={brandConfig.contact.resumeUrl}
                  target="_blank"
                  variant="secondary"
                  size="md"
                  leftIcon={<FileText className="w-4 h-4 text-forest" aria-hidden="true" />}
                >
                  View Résumé
                </Button>
              ) : (
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-sm bg-surface border border-border text-xs text-charcoal-muted font-mono">
                  <FileText className="w-3.5 h-3.5 text-plum" aria-hidden="true" />
                  <span>Résumé Document:</span>
                  <Badge variant="pending" size="sm">Pending Verification</Badge>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Principles & Profile at a Glance */}
          <div className="lg:col-span-5 space-y-6">
            {/* Principles Card */}
            <CardShell className="bg-surface shadow-card">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border text-forest">
                <Compass className="w-5 h-5 text-forest" aria-hidden="true" />
                <h3 className="font-serif text-xl font-bold">Guiding Principles</h3>
              </div>

              <div className="space-y-4">
                {aboutData.principles.map((principle) => (
                  <div key={principle.id} className="group">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <h4 className="font-sans font-semibold text-charcoal text-sm group-hover:text-forest transition-colors">
                        {principle.title}
                      </h4>
                      <Badge
                        variant={principle.category === 'Analytics' ? 'plum' : 'forest'}
                        size="sm"
                      >
                        {principle.category}
                      </Badge>
                    </div>
                    <p className="text-xs text-charcoal-muted leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardShell>

            {/* Profile Overview Card */}
            <CardShell className="bg-surface shadow-card">
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border text-forest">
                <ShieldCheck className="w-5 h-5 text-forest" aria-hidden="true" />
                <h3 className="font-serif text-xl font-bold">Profile at a Glance</h3>
              </div>

              <dl className="space-y-3 text-xs">
                {aboutData.facts.map((fact, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 py-1.5 border-b border-border/40 last:border-b-0">
                    <dt className="font-mono text-plum font-medium">
                      {fact.label}
                    </dt>
                    <dd className="font-sans text-charcoal sm:text-right flex items-center sm:justify-end gap-1.5">
                      {fact.isPending ? (
                        <span className="flex items-center gap-1 text-charcoal-muted italic">
                          <span>{fact.value}</span>
                          <Badge variant="pending" size="sm">Pending</Badge>
                        </span>
                      ) : (
                        <span className="font-medium text-charcoal">{fact.value}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </CardShell>
          </div>
        </div>
      </Container>
    </section>
  );
};
