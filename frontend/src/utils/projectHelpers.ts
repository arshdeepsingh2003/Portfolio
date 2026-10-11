import { Project } from '../types/project';

/**
 * Checks whether an optional URL string is populated with non-whitespace content.
 */
export const hasValidUrl = (url?: string | null): boolean => {
  return typeof url === 'string' && url.trim().length > 0;
};

/**
 * Normalizes project object fields with sensible defaults for optional values.
 */
export const normalizeProject = (raw: unknown): Project => {
  const item = (raw && typeof raw === 'object' ? raw : {}) as Record<string, unknown>;

  return {
    id: String(item.id || ''),
    title: String(item.title || 'Untitled Project'),
    slug: String(item.slug || ''),
    category: String(item.category || 'web-development'),
    shortDescription: String(item.shortDescription || ''),
    description: String(item.description || ''),
    technologies: Array.isArray(item.technologies) ? item.technologies.map(String) : [],
    image: typeof item.image === 'string' && item.image.trim().length > 0 ? item.image : null,
    githubUrl: typeof item.githubUrl === 'string' && item.githubUrl.trim().length > 0 ? item.githubUrl : null,
    liveUrl: typeof item.liveUrl === 'string' && item.liveUrl.trim().length > 0 ? item.liveUrl : null,
    featured: Boolean(item.featured),
    status: (item.status as Project['status']) || 'pending-review',
  };
};

/**
 * Filters a list of projects by category.
 */
export const filterProjectsByCategory = (
  projects: readonly Project[],
  category?: string
): Project[] => {
  if (!category) return [...projects];
  return projects.filter((project) => project.category.toLowerCase() === category.toLowerCase());
};
