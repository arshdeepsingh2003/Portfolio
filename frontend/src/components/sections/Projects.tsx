import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectList } from '../projects/ProjectList';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Projects: React.FC = () => {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-16 sm:py-24 border-b border-border/60 dark:border-white/10 bg-warm-ivory dark:bg-[#0F1412]">
      <Container>
        <ScrollReveal animation="fade-up">
          <SectionHeading
            id="projects-heading"
            eyebrow="Portfolio & Systems"
            title="Featured Projects"
            description="Full-stack web platforms, AI-driven applications, and data analytics dashboards. Built with modern architectures and data-driven problem solving."
          />
        </ScrollReveal>

        {/* Dynamic Project Cards across all domains */}
        <ProjectList
          emptyMessage="No projects currently published. Add projects to projects.json to populate this section."
        />
      </Container>
    </section>
  );
};
