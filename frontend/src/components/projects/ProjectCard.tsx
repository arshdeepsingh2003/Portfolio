import React, { useState } from 'react';
import { ExternalLink, Github, Code2, Sparkles, Clock } from 'lucide-react';
import { Project } from '../../types/project';
import { CardShell } from '../ui/CardShell';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { hasValidUrl } from '../../utils/projectHelpers';

export interface ProjectCardProps {
  readonly project: Project;
  readonly className?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  const [imageError, setImageError] = useState(false);

  const hasLiveUrl = hasValidUrl(project.liveUrl);
  const hasGithubUrl = hasValidUrl(project.githubUrl);
  const showFallbackImage = !project.image || imageError;

  const categoryLabel =
    project.category === 'web-development'
      ? 'Web Engineering'
      : project.category === 'data-analytics'
      ? 'Data Analytics'
      : project.category;

  return (
    <CardShell
      as="article"
      padding="none"
      className={`flex flex-col h-full overflow-hidden bg-surface border-border hover:border-forest/40 transition-all duration-200 ${className}`}
    >
      {/* Media or Consistent Editorial Fallback Header */}
      <div className="relative aspect-[16/9] w-full bg-surface-muted border-b border-border/80 flex items-center justify-center overflow-hidden">
        {showFallbackImage ? (
          <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-surface to-surface-muted select-none">
            <div className="w-12 h-12 rounded-sm bg-forest/5 border border-forest/15 flex items-center justify-center text-forest mb-3">
              <Code2 className="w-6 h-6" aria-hidden="true" />
            </div>
            <p className="font-serif text-lg text-forest font-medium">{project.title}</p>
            <p className="text-xs text-charcoal-muted mt-1 font-mono">
              Visual preview pending owner review
            </p>
            <div className="mt-3">
              <Badge variant="pending" size="sm">
                Artifact Pending
              </Badge>
            </div>
          </div>
        ) : (
          <img
            src={project.image!}
            alt={`Preview of ${project.title}`}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        {/* Badges / Taxonomy row */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <Badge variant="plum" size="sm">
            {categoryLabel}
          </Badge>

          {project.featured && (
            <Badge variant="forest" size="sm" icon={<Sparkles className="w-3 h-3" />}>
              Featured
            </Badge>
          )}

          {project.status === 'pending-review' && (
            <Badge variant="pending" size="sm">
              Pending Review
            </Badge>
          )}

          {project.status === 'in-progress' && (
            <Badge variant="warning" size="sm">
              In Progress
            </Badge>
          )}

          {project.status === 'completed' && (
            <Badge variant="success" size="sm">
              Completed
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl text-forest font-normal tracking-tight mb-2">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-charcoal-muted text-sm leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Detailed Narrative */}
        {project.description && (
          <p className="text-charcoal-muted/90 text-xs leading-relaxed mb-6 pt-3 border-t border-border/50">
            {project.description}
          </p>
        )}

        {/* Tech Stack Badges */}
        <div className="mt-auto pt-4 border-t border-border/60">
          <div className="text-xs font-mono uppercase tracking-wider text-charcoal-muted mb-2 font-medium">
            Tech Stack
          </div>
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="neutral" size="sm">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Links or Empty State Indicator */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {hasLiveUrl && (
              <Button
                href={project.liveUrl!}
                target="_blank"
                variant="primary"
                size="sm"
                rightIcon={<ExternalLink className="w-3.5 h-3.5" />}
              >
                Live Demo
              </Button>
            )}

            {hasGithubUrl && (
              <Button
                href={project.githubUrl!}
                target="_blank"
                variant="secondary"
                size="sm"
                leftIcon={<Github className="w-3.5 h-3.5" />}
              >
                Source Code
              </Button>
            )}

            {!hasLiveUrl && !hasGithubUrl && (
              <div className="flex items-center gap-2 text-xs font-mono text-charcoal-muted italic py-1">
                <Clock className="w-3.5 h-3.5 text-plum" aria-hidden="true" />
                <span>Links pending owner review</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </CardShell>
  );
};
