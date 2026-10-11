import React from 'react';
import { ArrowRight, BarChart3, Code2, Terminal, Sparkles, Server, Workflow } from 'lucide-react';
import { brandConfig } from '../../config/brand';
import rawDisciplinesData from '../../data/disciplines.json';
import { DisciplinesData, DisciplineIcon } from '../../types/discipline';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { CardShell } from '../ui/CardShell';

export const Hero: React.FC = () => {
  const data = rawDisciplinesData as DisciplinesData;

  const renderDisciplineIcon = (icon?: DisciplineIcon) => {
    switch (icon) {
      case 'web':
        return <Code2 className="w-4 h-4" aria-hidden="true" />;
      case 'analytics':
        return <BarChart3 className="w-4 h-4" aria-hidden="true" />;
      case 'backend':
        return <Server className="w-4 h-4" aria-hidden="true" />;
      case 'systems':
        return <Workflow className="w-4 h-4" aria-hidden="true" />;
      default:
        return <Code2 className="w-4 h-4" aria-hidden="true" />;
    }
  };

  const getIconBackground = (icon?: DisciplineIcon) => {
    switch (icon) {
      case 'web':
        return 'bg-forest text-ivory';
      case 'analytics':
        return 'bg-plum text-ivory';
      case 'backend':
        return 'bg-charcoal text-ivory';
      case 'systems':
        return 'bg-forest/80 text-ivory';
      default:
        return 'bg-forest text-ivory';
    }
  };

  return (
    <section
      id="hero"
      aria-label="Introduction & Overview"
      className="relative py-12 sm:py-20 lg:py-24 border-b border-border/70 overflow-hidden bg-gradient-to-b from-surface/40 via-transparent to-surface/20"
    >
      {/* Subtle decorative background texture accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 [background-image:radial-gradient(#173C32_0.75px,transparent_0.75px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_60%,transparent_100%)]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Editorial Introduction, CTAs & Engineering Overview */}
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
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-forest tracking-tight leading-[1.08] mb-6">
              Designing resilient web applications & turning data into{' '}
              <span className="relative inline-block">
                decisive insight
                <svg
                  className="absolute -bottom-1 sm:-bottom-1.5 left-0 w-full h-2 text-plum/50 pointer-events-none"
                  viewBox="0 0 100 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 6.5C32 2.5 68 2.5 97 5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>

            {/* Introduction paragraph — Exact content requirement */}
            <p className="text-charcoal-muted text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl">
              Hello, I&apos;m <span className="font-semibold text-charcoal">{brandConfig.ownerDisplayName}</span>, a Full Stack Developer behind <span className="font-mono text-base font-semibold text-forest bg-surface px-1.5 py-0.5 rounded-sm border border-border">{brandConfig.wordmark}</span>. I build modern, scalable web applications with a focus on clean code, thoughtful design, and seamless user experiences. Beyond development, I leverage data analytics to transform complex operational data into actionable insights and solve real-world problems through technology.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 w-full sm:w-auto">
              <Button
                href="#projects"
                variant="primary"
                size="md"
                rightIcon={<ArrowRight className="w-4 h-4" aria-hidden="true" />}
                className="w-full sm:w-auto"
              >
                Explore Projects
              </Button>
              <Button
                href="#experience"
                variant="secondary"
                size="md"
                className="w-full sm:w-auto"
              >
                Career Journey
              </Button>
              <Button
                href="#skills"
                variant="ghost"
                size="md"
                className="w-full sm:w-auto"
              >
                Technical Skills
              </Button>
            </div>
          </div>

          {/* Right Column: Core Disciplines Showcase (4 discipline cards) */}
          <div className="lg:col-span-5 w-full">
            <CardShell padding="none" className="overflow-hidden border-border bg-surface shadow-card">
              {/* Window Header — "Verified" badge removed */}
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
                <span className="text-[11px] font-mono text-plum uppercase tracking-wider font-semibold">
                  Disciplines
                </span>
              </div>

              {/* Composition Body: Four Core Discipline Cards */}
              <div className="p-4 sm:p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
                  {data.disciplines.map((discipline) => {
                    const iconBg = getIconBackground(discipline.icon);

                    return (
                      <article
                        key={discipline.id}
                        className="p-3.5 sm:p-4 rounded-md bg-ivory/50 border border-border/70 hover:border-forest/40 transition-colors flex flex-col justify-between"
                      >
                        <div className="flex items-start gap-3">
                          <div className={`p-2 rounded-sm ${iconBg} shrink-0`}>
                            {renderDisciplineIcon(discipline.icon)}
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <h3 className="font-serif text-base sm:text-lg font-bold text-forest">
                                {discipline.title}
                              </h3>
                              <span className="text-[11px] font-mono text-charcoal-muted uppercase tracking-wider font-medium shrink-0">
                                {discipline.label}
                              </span>
                            </div>
                            <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                              {discipline.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 mt-2.5">
                              {discipline.technologies.map((tech) => (
                                <Badge key={tech} variant="neutral" size="sm">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </CardShell>
          </div>
        </div>
      </Container>
    </section>
  );
};
