import React from 'react';
import { Briefcase, Calendar, MapPin, Layers, CheckCircle2 } from 'lucide-react';
import rawExperienceData from '../../data/experience.json';
import { Experience as ExperienceType } from '../../types/experience';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { CardShell } from '../ui/CardShell';
import { Badge } from '../ui/Badge';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Experience: React.FC = () => {
  const section = !Array.isArray(rawExperienceData) && 'section' in rawExperienceData
    ? (rawExperienceData as { section: { eyebrow: string; title: string; description: string } }).section
    : {
        eyebrow: 'Professional Experience',
        title: 'Career Journey',
        description: 'A verified record of full-stack development, AI system integration, and technical research internships across real-world business and research environments.',
      };

  const experiences: ExperienceType[] = (
    Array.isArray(rawExperienceData) ? rawExperienceData : (rawExperienceData as { experiences: ExperienceType[] }).experiences || []
  ) as ExperienceType[];

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-16 sm:py-24 border-b border-border/60 dark:border-white/10 bg-warm-ivory dark:bg-[#0F1412] relative"
    >
      <Container>
        <ScrollReveal animation="fade-up">
          <SectionHeading
            id="experience-heading"
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />
        </ScrollReveal>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const hasMeta = Boolean(exp.duration || exp.location);
            const isCurrentRole = Boolean(exp.duration && exp.duration.toLowerCase().includes('present'));

            return (
              <ScrollReveal
                key={exp.id}
                animation="fade-up"
                delay={index * 120}
              >
                <CardShell
                  as="article"
                  padding="lg"
                  className={`bg-surface dark:bg-[#161D1A] hover:border-forest/40 dark:hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-elevated transition-all duration-300 ease-out shadow-card group ${
                    isCurrentRole ? 'border-forest/30 dark:border-emerald-500/40 ring-1 ring-forest/15 dark:ring-emerald-500/20' : 'border-border dark:border-white/10'
                  }`}
                >
                  {/* Header: Role, Company & Metadata */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 pb-5 border-b border-border/70 dark:border-white/10">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-plum/40 dark:bg-emerald-400/40 group-hover:bg-forest dark:group-hover:bg-emerald-400 group-hover:scale-125 transition-all duration-300" aria-hidden="true" />
                        <span className="font-mono text-xs text-plum dark:text-emerald-400 font-semibold uppercase tracking-wider">
                          Experience 0{index + 1}
                        </span>
                        {isCurrentRole && (
                          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm bg-forest/10 dark:bg-emerald-500/15 text-forest dark:text-emerald-400 border border-forest/20 dark:border-emerald-500/30 text-[11px] font-mono font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-forest dark:bg-emerald-400 animate-pulse" aria-hidden="true" />
                            Current Role
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl text-forest dark:text-ivory group-hover:text-forest-hover dark:group-hover:text-emerald-400 transition-colors font-bold tracking-tight">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-charcoal dark:text-ivory font-medium text-sm sm:text-base pt-0.5">
                        <Briefcase className="w-4 h-4 text-plum dark:text-purple-300 shrink-0" aria-hidden="true" />
                        <span>{exp.company}</span>
                      </div>
                    </div>

                    {/* Metadata: Duration & Location (when verified) */}
                    {hasMeta && (
                      <div className="flex flex-wrap items-center gap-2 shrink-0">
                        {exp.duration && (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-ivory dark:bg-[#1C2521] text-charcoal dark:text-ivory border border-border dark:border-white/10 text-xs font-mono">
                            <Calendar className="w-3.5 h-3.5 text-plum dark:text-purple-300" aria-hidden="true" />
                            <span>{exp.duration}</span>
                          </div>
                        )}
                        {exp.location && (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-ivory dark:bg-[#1C2521] text-charcoal dark:text-ivory border border-border dark:border-white/10 text-xs font-mono">
                            <MapPin className="w-3.5 h-3.5 text-forest dark:text-emerald-400" aria-hidden="true" />
                            <span>{exp.location}</span>
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Overview Paragraph */}
                  <div className="py-5">
                    <p className="text-charcoal/90 dark:text-[#E8E5DD]/90 text-sm sm:text-base leading-relaxed">
                      {exp.overview}
                    </p>
                  </div>

                  {/* Focus Areas & Technologies */}
                  <div className="pt-4 border-t border-border/60 dark:border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6">
                    {/* Focus Areas */}
                    <div className={exp.technologies ? 'md:col-span-7' : 'md:col-span-12'}>
                      <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-plum dark:text-emerald-400 font-semibold mb-3">
                        <Layers className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Key Focus Areas</span>
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-charcoal dark:text-[#E8E5DD]">
                        {exp.focusAreas.map((area) => (
                          <li key={area} className="flex items-start gap-2 group/item hover:text-forest dark:hover:text-emerald-400 transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-forest dark:text-emerald-400 shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200" aria-hidden="true" />
                            <span>{area}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technology Tags (when verified & available) */}
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="md:col-span-5 md:border-l md:border-border/60 dark:md:border-white/10 md:pl-6">
                        <div className="text-xs font-mono uppercase tracking-wider text-forest dark:text-emerald-400 font-semibold mb-3">
                          Technologies & Tooling
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="neutral" size="sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardShell>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
