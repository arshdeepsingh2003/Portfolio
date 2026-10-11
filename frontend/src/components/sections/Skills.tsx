import React from 'react';
import rawSkillsData from '../../data/skills.json';
import { SkillCategory } from '../../types/skill';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { CardShell } from '../ui/CardShell';
import { Badge } from '../ui/Badge';

export const Skills: React.FC = () => {
  const categories: readonly SkillCategory[] = rawSkillsData as SkillCategory[];

  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-16 sm:py-24 border-b border-border/60 bg-warm-ivory">
      <Container>
        <SectionHeading
          id="skills-heading"
          eyebrow="Technical Capabilities"
          title="Skills & Engineering Taxonomy"
          description="A structured overview of core competencies across web development, data analytics, systems engineering, and software architecture."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          {categories.map((category, index) => {
            const isLastOdd = index === categories.length - 1 && categories.length % 2 !== 0;

            return (
              <CardShell
                key={category.id}
                as="article"
                padding="lg"
                className={`flex flex-col h-full bg-surface hover:border-forest/40 transition-colors duration-200 ${
                  isLastOdd ? 'md:col-span-2' : ''
                }`}
              >
                {/* Category Header */}
                <div className="mb-5 pb-4 border-b border-border/70">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      {category.label && (
                        <span className="font-mono text-[11px] text-plum uppercase tracking-wider font-semibold block mb-1">
                          {category.label}
                        </span>
                      )}
                      <h3 className="font-serif text-xl sm:text-2xl text-forest font-bold">
                        {category.name}
                      </h3>
                    </div>
                    <Badge variant="neutral" size="sm" className="shrink-0">
                      {category.skills.length} skills
                    </Badge>
                  </div>
                  {category.description && (
                    <p className="text-sm text-charcoal-muted mt-2 leading-relaxed">
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
            );
          })}
        </div>
      </Container>
    </section>
  );
};
