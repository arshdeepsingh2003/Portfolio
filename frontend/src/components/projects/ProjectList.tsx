import React from 'react';
import rawProjectsData from '../../data/projects.json';
import { Project } from '../../types/project';
import { ProjectCard } from './ProjectCard';
import { AnalyticsProjectCard } from './AnalyticsProjectCard';
import { CardShell } from '../ui/CardShell';
import { ScrollReveal } from '../ui/ScrollReveal';
import { normalizeProject, filterProjectsByCategory } from '../../utils/projectHelpers';

export interface ProjectListProps {
  /** Optional custom project list; defaults to all items from projects.json */
  readonly projects?: readonly Project[];
  /** Optional category filter, e.g. 'web-development' or 'data-analytics' */
  readonly category?: string;
  /** Optional filter for featured items only */
  readonly featuredOnly?: boolean;
  /** Presentation variant: 'web' renders engineering cards, 'analytics' renders case study cards */
  readonly variant?: 'web' | 'analytics';
  /** Empty state message if no items match */
  readonly emptyMessage?: string;
  /** Container CSS classes */
  readonly className?: string;
}

export const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  category,
  featuredOnly = false,
  variant,
  emptyMessage = 'No projects currently available in this category.',
  className = '',
}) => {
  // Load and normalize projects from JSON if not passed via props
  const sourceProjects: Project[] =
    projects !== undefined
      ? [...projects]
      : (rawProjectsData as unknown[]).map(normalizeProject);

  // Apply category filtering if requested
  let displayedProjects = category
    ? filterProjectsByCategory(sourceProjects, category)
    : sourceProjects;

  // Apply featured filtering if requested
  if (featuredOnly) {
    displayedProjects = displayedProjects.filter((p) => p.featured);
  }

  if (displayedProjects.length === 0) {
    return (
      <CardShell className="bg-surface/80 border-dashed text-center py-12">
        <p className="text-sm font-mono text-charcoal-muted">{emptyMessage}</p>
      </CardShell>
    );
  }

  // Determine card rendering style: explicit variant or inferred from category
  const isAnalytics = variant === 'analytics' || (!variant && category === 'data-analytics');

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch ${className}`}>
      {displayedProjects.map((project, index) => (
        <ScrollReveal
          key={project.id || project.slug}
          animation="fade-up"
          delay={index * 100}
          className="h-full"
        >
          {isAnalytics ? (
            <AnalyticsProjectCard project={project} />
          ) : (
            <ProjectCard project={project} />
          )}
        </ScrollReveal>
      ))}
    </div>
  );
};
