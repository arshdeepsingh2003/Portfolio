import React from 'react';
import rawSkillsData from '../../data/skills.json';
import { SkillCategory } from '../../types/skill';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { CardShell } from '../ui/CardShell';
import { Badge } from '../ui/Badge';
import { CheckCircle2 } from 'lucide-react';

export const Skills: React.FC = () => {
  const categories: readonly SkillCategory[] = rawSkillsData as SkillCategory[];

  return (
    <section id="skills" className="py-16 sm:py-24 border-b border-border/60 bg-warm-ivory">
      <Container>
        <SectionHeading
          eyebrow="Technical Capabilities"
          title="Skills & Engineering Taxonomy"
          description="A structured overview of core competencies across web development, data analytics, and software architecture. Strictly verified skills only, without arbitrary ratings or percentages."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {categories.map((category) => (
            <CardShell
              key={category.id}
              as="article"
              padding="lg"
              className="flex flex-col h-full bg-surface hover:border-forest/40 transition-colors duration-200"
            >
              {/* Category Header */}
              <div className="mb-5 pb-4 border-b border-border/70">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-serif text-xl sm:text-2xl text-forest font-normal">
                    {category.name}
                  </h3>
                  <Badge variant="plum" size="sm">
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
                <div className="text-xs font-mono uppercase tracking-wider text-charcoal-muted mb-3 font-medium">
                  Verified Technologies & Tools
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant={skill.highlight ? 'forest' : 'neutral'}
                      size="md"
                      icon={
                        skill.highlight ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-forest" aria-hidden="true" />
                        ) : undefined
                      }
                      className={skill.highlight ? 'font-medium' : ''}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardShell>
          ))}
        </div>
      </Container>
    </section>
  );
};
