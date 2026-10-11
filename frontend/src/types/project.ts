/**
 * Project Data Types & Documentation
 * 
 * Strict type definitions for portfolio projects managed via `projects.json`.
 * Adding, editing, removing, or reordering projects occurs exclusively via JSON
 * without altering any React or TypeScript code.
 * 
 * FIELD SPECIFICATION:
 * - `id` (Required, string): Unique identifier (e.g. "estate-app").
 * - `title` (Required, string): Project display name (e.g. "EstateApp").
 * - `slug` (Required, string): URL-friendly slug (e.g. "estate-app").
 * - `category` (Required, string): Primary category, e.g. "web-development" | "data-analytics".
 * - `shortDescription` (Required, string): Concise 1-2 sentence overview for card listings.
 * - `description` (Required, string): In-depth summary explaining the project.
 * - `technologies` (Required, string[]): Array of technology and framework badges.
 * - `image` (Optional, string | null): Image path (relative or absolute). If missing, empty,
 *   or failed to load, a consistent editorial fallback card is displayed.
 * - `githubUrl` (Optional, string | null): Link to source repository. If empty or null,
 *   the button is hidden.
 * - `liveUrl` (Optional, string | null): Link to live application/demo. If empty or null,
 *   the button is hidden.
 * - `featured` (Required, boolean): Whether the project is prominently featured.
 * - `status` (Required, ProjectStatus): Project status ('completed' | 'in-progress' | 'pending-review').
 */

export type ProjectCategory = 'web-development' | 'data-analytics';

export type ProjectStatus = 'completed' | 'in-progress' | 'pending-review';

export interface Project {
  /** Required: Unique identifier */
  readonly id: string;
  /** Required: Project display name */
  readonly title: string;
  /** Required: URL-friendly slug */
  readonly slug: string;
  /** Required: Primary category ('web-development' | 'data-analytics' | string) */
  readonly category: ProjectCategory | string;
  /** Required: Concise 1-2 sentence overview */
  readonly shortDescription: string;
  /** Required: Full narrative description */
  readonly description: string;
  /** Required: List of technologies used */
  readonly technologies: readonly string[];
  /** Optional: Screenshot or preview image path; null or empty if unavailable */
  readonly image: string | null;
  /** Optional: Repository URL; null or empty if unavailable */
  readonly githubUrl: string | null;
  /** Optional: Live demo URL; null or empty if unavailable */
  readonly liveUrl: string | null;
  /** Required: Whether the project is marked as featured */
  readonly featured: boolean;
  /** Required: Project lifecycle status */
  readonly status: ProjectStatus;
}
