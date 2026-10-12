import React from 'react';
import rawSkillsData from '../../data/skills.json';
import { SkillCategory } from '../../types/skill';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { CardShell } from '../ui/CardShell';
import { Badge } from '../ui/Badge';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Skills: React.FC = () => {
  const section = !Array.isArray(rawSkillsData) && 'section' in rawSkillsData
    ? (rawSkillsData as { section: { eyebrow: string; title: string; description: string } }).section
    : {
        eyebrow: 'Technical Capabilities',
        title: 'Skills & Engineering Taxonomy',
        description: 'A structured overview of core competencies across frontend, backend, data analytics, machine learning, systems automation, and engineering practices.',
      };

  const categories: readonly SkillCategory[] = (
    Array.isArray(rawSkillsData) ? rawSkillsData : (rawSkillsData as { categories: SkillCategory[] }).categories || []
  ) as SkillCategory[];

  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-16 sm:py-24 border-b border-border/60 dark:border-white/10 bg-warm-ivory dark:bg-[#0F1412]">
      <Container>
        <ScrollReveal animation="fade-up">
          <SectionHeading
            id="skills-heading"
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {categories.map((category, index) => {
            const isLastOdd = index === categories.length - 1 && categories.length % 2 !== 0;

            return (
              <ScrollReveal
                key={category.id}
                animation="fade-up"
                delay={index * 120}
                className={isLastOdd ? 'md:col-span-2 h-full' : 'h-full'}
              >
                <CardShell
                  as="article"
                  padding="lg"
                  className="flex flex-col h-full bg-surface dark:bg-[#161D1A] border-border dark:border-white/10 hover:border-forest/40 dark:hover:border-emerald-500/40 hover:-translate-y-1 hover:shadow-card transition-all duration-300 ease-out group"
                >
                  {/* Category Header */}
                  <div className="mb-5 pb-4 border-b border-border/70 dark:border-white/10">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        {category.label && (
                          <span className="font-mono text-[11px] text-plum dark:text-emerald-400 uppercase tracking-wider font-semibold block mb-1">
                            {category.label}
                          </span>
                        )}
                        <h3 className="font-serif text-xl sm:text-2xl text-forest dark:text-ivory group-hover:text-forest-hover dark:group-hover:text-emerald-400 transition-colors font-bold">
                          {category.name}
                        </h3>
                      </div>
                      <Badge variant="neutral" size="sm" className="shrink-0">
                        {category.skills.length} skills
                      </Badge>
                    </div>
                    {category.description && (
                      <p className="text-sm text-charcoal-muted dark:text-[#A8B2AC] mt-2 leading-relaxed">
                        {category.description}
                      </p>
                    )}
                  </div>

                  {/* Skills List */}
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill.name}
                          variant="neutral"
                          size="md"
                        >
                          {skill.name}
                        </Badge>
                      ))}
                    </div>
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
