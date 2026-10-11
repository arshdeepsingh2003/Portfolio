import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  BarChart3,
  Sparkles,
  Clock,
  Database,
  HelpCircle,
  Layers,
  CheckCircle2,
  AlertCircle,
  FileSpreadsheet,
} from 'lucide-react';
import { Project } from '../../types/project';
import { CardShell } from '../ui/CardShell';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { hasValidUrl } from '../../utils/projectHelpers';

export interface AnalyticsProjectCardProps {
  readonly project: Project;
  readonly className?: string;
}

export const AnalyticsProjectCard: React.FC<AnalyticsProjectCardProps> = ({
  project,
  className = '',
}) => {
  const [imageError, setImageError] = useState(false);

  const hasLiveUrl = hasValidUrl(project.liveUrl);
  const hasGithubUrl = hasValidUrl(project.githubUrl);
  const showFallbackImage = !project.image || imageError;

  const caseStudy = project.caseStudy;

  return (
    <CardShell
      as="article"
      padding="none"
      className={`flex flex-col h-full overflow-hidden bg-surface dark:bg-[#161D1A] border-border dark:border-white/10 hover:border-plum/50 dark:hover:border-purple-400/50 hover:-translate-y-1.5 hover:shadow-elevated transition-all duration-300 ease-out group ${className}`}
    >
      {/* Visual Artifact or Analytical Fallback Header */}
      <div className="relative aspect-[16/9] w-full bg-surface-muted dark:bg-[#131916] border-b border-border/80 dark:border-white/10 flex items-center justify-center overflow-hidden">
        {showFallbackImage ? (
          <div className="w-full h-full p-6 sm:p-8 flex flex-col items-center justify-center text-center bg-gradient-to-b from-surface via-surface-muted/80 to-surface-muted dark:from-[#18201D] dark:via-[#161D1A] dark:to-[#131916] select-none">
            {/* Analytical Schematic Icon with subtle hover lift */}
            <div className="w-12 h-12 rounded-sm bg-plum/10 dark:bg-purple-400/15 border border-plum/20 dark:border-purple-400/30 flex items-center justify-center text-plum dark:text-purple-300 mb-3 shadow-sm transition-transform duration-300 ease-out group-hover:scale-110">
              <BarChart3 className="w-6 h-6" aria-hidden="true" />
            </div>

            <p className="font-serif text-lg text-forest dark:text-ivory font-medium">{project.title}</p>
            <p className="text-xs text-charcoal-muted dark:text-[#A8B2AC] mt-1 font-mono">
              Analytical visualization pending owner review
            </p>

            <div className="mt-3 flex items-center gap-2">
              <Badge variant="pending" size="sm">
                Visual Artifact Pending
              </Badge>
              <span className="text-[11px] font-mono text-charcoal-muted dark:text-neutral-400 hidden sm:inline">
                No mock data used
              </span>
            </div>
          </div>
        ) : (
          <img
            src={project.image!}
            alt={`Visual analytical artifact for ${project.title}`}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        )}
      </div>

      {/* Card Content Body */}
      <div className="p-5 sm:p-7 flex flex-col flex-1">
        {/* Badges / Taxonomy row */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="plum" size="sm" icon={<BarChart3 className="w-3 h-3" aria-hidden="true" />}>
              Data Analytics
            </Badge>

            {project.featured && (
              <Badge variant="forest" size="sm" icon={<Sparkles className="w-3 h-3" aria-hidden="true" />}>
                Featured Case
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

          <span className="text-[11px] font-mono uppercase tracking-widest text-plum/80 dark:text-purple-300 font-semibold">
            Case Study
          </span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-2xl sm:text-3xl text-forest dark:text-ivory font-normal tracking-tight mb-2">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-charcoal-muted dark:text-[#A8B2AC] text-sm leading-relaxed mb-4">
          {project.shortDescription}
        </p>

        {/* Narrative Description */}
        {project.description && (
          <div className="mb-6 p-3.5 rounded-sm bg-warm-ivory/40 dark:bg-[#1C2521]/60 border border-border/70 dark:border-white/10 text-xs text-charcoal dark:text-[#E8E5DD] leading-relaxed">
            {project.description}
          </div>
        )}

        {/* Structured Case Study Facets Grid (Feature 3) */}
        <div className="mb-6 pt-4 border-t border-border/70 dark:border-white/10">
          <div className="flex items-center gap-2 mb-3">
            <FileSpreadsheet className="w-3.5 h-3.5 text-plum dark:text-purple-300" aria-hidden="true" />
            <span className="text-xs font-mono uppercase tracking-wider text-charcoal-muted dark:text-neutral-400 font-medium">
              Case Study Facets
            </span>
          </div>

          <div className="space-y-2.5 text-xs">
            {/* 1. Core Problem Statement / Question */}
            <div className="p-2.5 rounded-sm bg-surface-muted/50 dark:bg-[#1C2521]/40 border border-border/60 dark:border-white/10">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="flex items-center gap-1.5 font-medium text-forest dark:text-emerald-400 font-sans">
                  <HelpCircle className="w-3.5 h-3.5 text-plum dark:text-purple-300" aria-hidden="true" />
                  <span>Core Problem / Question</span>
                </span>
                {!caseStudy?.coreQuestion && (
                  <Badge variant="pending" size="sm">Pending</Badge>
                )}
              </div>
              <p className="text-charcoal-muted dark:text-[#A8B2AC] leading-relaxed">
                {caseStudy?.coreQuestion || 'Audit scope and core investigative question pending owner review.'}
              </p>
            </div>

            {/* 2. Dataset & Source */}
            <div className="p-2.5 rounded-sm bg-surface-muted/50 dark:bg-[#1C2521]/40 border border-border/60 dark:border-white/10">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="flex items-center gap-1.5 font-medium text-forest dark:text-emerald-400 font-sans">
                  <Database className="w-3.5 h-3.5 text-plum dark:text-purple-300" aria-hidden="true" />
                  <span>Dataset & Source</span>
                </span>
                {!caseStudy?.datasetSource && (
                  <Badge variant="pending" size="sm">Pending</Badge>
                )}
              </div>
              <p className="text-charcoal-muted dark:text-[#A8B2AC] leading-relaxed">
                {caseStudy?.datasetSource || 'Dataset parameters, schema origins, and sample volumes pending owner review.'}
              </p>
            </div>

            {/* 3. Methodology & Approach */}
            <div className="p-2.5 rounded-sm bg-surface-muted/50 dark:bg-[#1C2521]/40 border border-border/60 dark:border-white/10">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="flex items-center gap-1.5 font-medium text-forest dark:text-emerald-400 font-sans">
                  <Layers className="w-3.5 h-3.5 text-plum dark:text-purple-300" aria-hidden="true" />
                  <span>Methodology & Approach</span>
                </span>
                {!caseStudy?.methodology && (
                  <Badge variant="pending" size="sm">Pending</Badge>
                )}
              </div>
              <p className="text-charcoal-muted leading-relaxed">
                {caseStudy?.methodology || 'Analytical pipeline, data cleaning, and statistical methodology pending owner review.'}
              </p>
            </div>

            {/* 4. Verified Findings & Metrics */}
            <div className="p-2.5 rounded-sm bg-surface-muted/50 border border-border/60">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="flex items-center gap-1.5 font-medium text-forest font-sans">
                  <CheckCircle2 className="w-3.5 h-3.5 text-plum" aria-hidden="true" />
                  <span>Key Findings & Outcomes</span>
                </span>
                {!caseStudy?.keyFindings && (
                  <Badge variant="pending" size="sm">Pending</Badge>
                )}
              </div>
              <p className="text-charcoal-muted leading-relaxed">
                {caseStudy?.keyFindings || 'Verified operational findings and empirical impact metrics pending owner review.'}
              </p>
            </div>

            {/* 5. Scope Limitations */}
            <div className="p-2.5 rounded-sm bg-surface-muted/50 border border-border/60">
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="flex items-center gap-1.5 font-medium text-forest font-sans">
                  <AlertCircle className="w-3.5 h-3.5 text-plum" aria-hidden="true" />
                  <span>Limitations & Caveats</span>
                </span>
                {!caseStudy?.limitations && (
                  <Badge variant="pending" size="sm">Pending</Badge>
                )}
              </div>
              <p className="text-charcoal-muted leading-relaxed">
                {caseStudy?.limitations || 'Data constraints, assumptions, and audit boundaries pending owner review.'}
              </p>
            </div>
          </div>
        </div>

        {/* Analytical Stack Badges & Actions */}
        <div className="mt-auto pt-4 border-t border-border/60">
          <div className="text-xs font-mono uppercase tracking-wider text-charcoal-muted mb-2 font-medium">
            Analytical Stack
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
                rightIcon={<ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />}
              >
                View Dashboard
              </Button>
            )}

            {hasGithubUrl && (
              <Button
                href={project.githubUrl!}
                target="_blank"
                variant="secondary"
                size="sm"
                leftIcon={<Github className="w-3.5 h-3.5" aria-hidden="true" />}
              >
                View Pipeline Code
              </Button>
            )}

            {!hasLiveUrl && !hasGithubUrl && (
              <div className="flex items-center gap-2 text-xs font-mono text-charcoal-muted italic py-1">
                <Clock className="w-3.5 h-3.5 text-plum" aria-hidden="true" />
                <span>Case study artifacts & reports pending owner review</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </CardShell>
  );
};
