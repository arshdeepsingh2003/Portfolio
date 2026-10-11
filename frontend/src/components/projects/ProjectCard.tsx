import React, { useState } from 'react';
import { ExternalLink, Github, Code2, Sparkles, Clock, BarChart3, Bot } from 'lucide-react';
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

  const getFallbackIcon = () => {
    const techs = project.technologies.map((t) => t.toLowerCase());
    if (techs.some((t) => t.includes('power bi') || t.includes('dax') || t.includes('kpi'))) {
      return <BarChart3 className="w-6 h-6" aria-hidden="true" />;
    }
    if (techs.some((t) => t.includes('rag') || t.includes('voyage') || t.includes('machine learning') || t.includes('llm') || t.includes('ai'))) {
      return <Bot className="w-6 h-6" aria-hidden="true" />;
    }
    return <Code2 className="w-6 h-6" aria-hidden="true" />;
  };

  return (
    <CardShell
      as="article"
      padding="none"
      className={`flex flex-col h-full overflow-hidden bg-surface dark:bg-[#161D1A] border-border dark:border-white/10 hover:border-forest/40 dark:hover:border-emerald-500/40 hover:-translate-y-1.5 hover:shadow-elevated transition-all duration-300 ease-out group ${className}`}
    >
      {/* Media or Consistent Editorial Fallback Header */}
      <div className="relative aspect-[16/9] w-full bg-surface-muted dark:bg-[#131916] border-b border-border/80 dark:border-white/10 flex items-center justify-center overflow-hidden">
        {showFallbackImage ? (
          <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-b from-surface to-surface-muted dark:from-[#18201D] dark:to-[#131916] select-none">
            <div className="w-12 h-12 rounded-sm bg-forest/5 dark:bg-emerald-500/10 border border-forest/15 dark:border-emerald-500/20 flex items-center justify-center text-forest dark:text-emerald-400 mb-3 transition-transform duration-300 ease-out group-hover:scale-110">
              {getFallbackIcon()}
            </div>
            <p className="font-serif text-lg text-forest dark:text-ivory font-medium">{project.title}</p>
            <p className="text-xs text-charcoal-muted dark:text-[#A8B2AC] mt-1 font-mono">
              Visual preview pending owner review
            </p>
            <div className="mt-3">
              <Badge variant="pending" size="sm">
                Artifact Pending
              </Badge>
            </div>
          </div>
        ) : (
          <>
            <img
              src={project.image!}
              alt={`Preview screenshot of ${project.title}`}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </>
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-7 flex flex-col flex-1">
        {/* Badges / Taxonomy row */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {project.projectType && (
            <Badge variant={project.projectType === 'Major Project' ? 'plum' : 'neutral'} size="sm">
              {project.projectType}
            </Badge>
          )}

          {project.featured && (
            <Badge variant="forest" size="sm" icon={<Sparkles className="w-3 h-3" aria-hidden="true" />}>
              Featured
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

          {project.status === 'pending-review' && (
            <Badge variant="pending" size="sm">
              Pending Review
            </Badge>
          )}
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl text-forest dark:text-ivory group-hover:text-forest-hover dark:group-hover:text-emerald-400 transition-colors font-normal tracking-tight mb-2">
          {project.title}
        </h3>

        {/* Narrative Description */}
        <p className="text-charcoal-muted dark:text-[#A8B2AC] text-sm leading-relaxed mb-6">
          {project.description || project.shortDescription}
        </p>

        {/* Tech Stack Badges */}
        <div className="mt-auto pt-4 border-t border-border/60 dark:border-white/10">
          <div className="text-xs font-mono uppercase tracking-wider text-charcoal-muted dark:text-neutral-400 mb-2 font-medium">
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
                rightIcon={<ExternalLink className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />}
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
                leftIcon={<Github className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />}
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
