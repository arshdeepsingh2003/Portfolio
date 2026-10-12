import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectList } from '../projects/ProjectList';
import { ScrollReveal } from '../ui/ScrollReveal';
import rawProjectsData from '../../data/projects.json';

export const Projects: React.FC = () => {
  const section = !Array.isArray(rawProjectsData) && 'section' in rawProjectsData
    ? (rawProjectsData as { section: { eyebrow: string; title: string; description: string; emptyMessage?: string } }).section
    : {
        eyebrow: 'Portfolio & Systems',
        title: 'Featured Projects',
        description: 'Full-stack web platforms, AI-driven applications, and data analytics dashboards. Built with modern architectures and data-driven problem solving.',
        emptyMessage: 'No projects currently published. Add projects to projects.json to populate this section.',
      };

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-16 sm:py-24 border-b border-border/60 dark:border-white/10 bg-surface/30 dark:bg-[#121815]/50">
      <Container>
        <ScrollReveal animation="fade-up">
          <SectionHeading
            id="projects-heading"
            eyebrow={section.eyebrow}
            title={section.title}
            description={section.description}
          />
        </ScrollReveal>

        {/* Dynamic Project Cards across all domains */}
        <ProjectList
          emptyMessage={section.emptyMessage || 'No projects currently published. Add projects to projects.json to populate this section.'}
        />
      </Container>
    </section>
  );
};
