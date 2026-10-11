/**
 * Core Discipline & Engineering Overview Type Definitions
 */

export type DisciplineIcon = 'web' | 'analytics' | 'backend' | 'systems';

export interface Discipline {
  readonly id: string;
  readonly title: string;
  readonly label: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly icon?: DisciplineIcon;
}

export interface EngineeringCategory {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly technologies: readonly string[];
}

export interface DisciplinesData {
  readonly disciplines: readonly Discipline[];
  readonly engineeringOverview?: readonly EngineeringCategory[];
}
