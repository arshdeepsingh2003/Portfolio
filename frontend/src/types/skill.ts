/**
 * Skill Data Types
 * 
 * Strict type definitions for portfolio skills and skill categories.
 * Arbitrary percentages, numerical ratings, or skill progress bars are
 * strictly prohibited per design system and project rules.
 */

export type SkillStatus = 'supported' | 'pending-review';

export interface SkillItem {
  readonly name: string;
  readonly highlight?: boolean;
  readonly status?: SkillStatus;
}

export interface SkillCategory {
  readonly id: string;
  readonly name: string;
  readonly label?: string;
  readonly description?: string;
  readonly skills: readonly SkillItem[];
}
