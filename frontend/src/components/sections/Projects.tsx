import React from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectList } from '../projects/ProjectList';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 sm:py-24 border-b border-border/60 bg-warm-ivory">
      <Container>
        <SectionHeading
          eyebrow="Engineering Portfolio"
          title="Web Development Projects"
          description="Full-stack web applications, front-end component architectures, and responsive utilities. All projects render dynamically from local JSON data files without hardcoded markup."
        />

        {/* Dynamic Project Cards filtered by web-development category */}
        <ProjectList
          category="web-development"
          emptyMessage="No web development projects currently published. Add projects to projects.json to populate this section."
        />
      </Container>
    </section>
  );
};
