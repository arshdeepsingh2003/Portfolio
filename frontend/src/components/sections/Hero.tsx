import React from 'react';
import { ArrowRight, BarChart3, Code2, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { brandConfig } from '../../config/brand';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { CardShell } from '../ui/CardShell';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction & Overview"
      className="relative py-12 sm:py-20 lg:py-24 border-b border-border/70 overflow-hidden bg-gradient-to-b from-surface/40 via-transparent to-surface/20"
    >
      {/* Subtle decorative background line / texture accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 [background-image:radial-gradient(#173C32_0.75px,transparent_0.75px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_60%,transparent_100%)]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Introduction & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status indicator and badge */}
            <div className="flex flex-wrap items-center gap-2 mb-5">
              <Badge variant="forest" size="md" icon={<Sparkles className="w-3.5 h-3.5" />}>
                Full-Stack Developer & Analyst
              </Badge>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-surface text-charcoal border border-border text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-status-success animate-pulse" aria-hidden="true" />
                <span>Open to opportunities</span>
              </div>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest tracking-tight leading-[1.08] mb-6">
              Designing resilient web applications & turning data into decisive insight.
            </h1>

            {/* Introduction paragraph */}
            <p className="text-charcoal-muted text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
              Hello, I&apos;m <span className="font-semibold text-charcoal">{brandConfig.ownerDisplayName}</span>.
              Working under the wordmark <span className="font-mono text-base font-semibold text-forest bg-surface px-1.5 py-0.5 rounded-sm border border-border">{brandConfig.wordmark}</span>,
              I build accessible, high-performance web systems with modern React and TypeScript, while leveraging analytical rigor and Python to extract actionable truths from operational data.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto">
              <Button
                href="#projects"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
              >
                Explore Web Projects
              </Button>
              <Button
                href="#data-analytics"
                variant="secondary"
                size="md"
                leftIcon={<BarChart3 className="w-4 h-4 text-plum" aria-hidden="true" />}
              >
                Data Analytics
              </Button>
              <Button
                href="#about"
                variant="ghost"
                size="md"
              >
                About Background
              </Button>
            </div>

            {/* Discipline Highlights Strip */}
            <div className="pt-6 border-t border-border/80 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono text-charcoal-muted">
              <div>
                <span className="block text-plum font-semibold uppercase tracking-wider mb-0.5">Frontend</span>
                <span className="text-charcoal font-sans text-sm">React &bull; TypeScript &bull; Tailwind</span>
              </div>
              <div>
                <span className="block text-plum font-semibold uppercase tracking-wider mb-0.5">Analytics</span>
                <span className="text-charcoal font-sans text-sm">Python &bull; SQL &bull; Data Modeling</span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-plum font-semibold uppercase tracking-wider mb-0.5">Architecture</span>
                <span className="text-charcoal font-sans text-sm">Zero-DB &bull; Semantic &bull; Fast</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Discipline Composition */}
          <div className="lg:col-span-5 w-full">
            <CardShell padding="none" className="overflow-hidden border-border bg-surface shadow-card">
              {/* Card Window Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-surface-muted border-b border-border">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-border-dark inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-border-dark inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-border-dark inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-mono text-charcoal-muted">
                  <Terminal className="w-3.5 h-3.5 text-forest" aria-hidden="true" />
                  <span>~/arsh.dev/disciplines</span>
                </div>
                <Badge variant="neutral" size="sm">Verified</Badge>
              </div>

              {/* Composition Body */}
              <div className="p-5 sm:p-6 space-y-4">
                {/* Discipline 1: Web Engineering */}
                <div className="p-4 rounded-md bg-ivory/50 border border-border/70 hover:border-forest/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-sm bg-forest text-ivory shrink-0">
                      <Code2 className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h2 className="font-serif text-lg font-bold text-forest">
                          Web Engineering
                        </h2>
                        <span className="text-xs font-mono text-forest font-medium">Core Discipline</span>
                      </div>
                      <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                        Component-driven web applications engineered for maintainability, keyboard accessibility, and clean state lifecycles.
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        <Badge variant="forest" size="sm">React</Badge>
                        <Badge variant="forest" size="sm">TypeScript</Badge>
                        <Badge variant="neutral" size="sm">Vite</Badge>
                        <Badge variant="neutral" size="sm">Tailwind CSS</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Discipline 2: Data Analytics */}
                <div className="p-4 rounded-md bg-ivory/50 border border-border/70 hover:border-plum/40 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-sm bg-plum text-ivory shrink-0">
                      <BarChart3 className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <h2 className="font-serif text-lg font-bold text-forest">
                          Data Analytics
                        </h2>
                        <span className="text-xs font-mono text-plum font-medium">Core Discipline</span>
                      </div>
                      <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                        Operational reconciliation, analytical summaries, and data storytelling focused on reproducible truth over assumptions.
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        <Badge variant="plum" size="sm">Python</Badge>
                        <Badge variant="plum" size="sm">Data Modeling</Badge>
                        <Badge variant="neutral" size="sm">SQL</Badge>
                        <Badge variant="neutral" size="sm">FastAPI (Backend)</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Architectural Pledge */}
                <div className="p-3 rounded-sm bg-surface border border-border text-xs text-charcoal-muted flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-status-success shrink-0" aria-hidden="true" />
                  <span>Strict zero-database footprint & authentic local data structures.</span>
                </div>
              </div>
            </CardShell>
          </div>
        </div>
      </Container>
    </section>
  );
};
