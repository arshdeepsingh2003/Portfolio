/**
 * Experience Section Type Definitions
 */

export interface Experience {
  readonly id: string;
  readonly company: string;
  readonly role: string;
  readonly location: string | null;
  readonly duration: string | null;
  readonly overview: string;
  readonly focusAreas: readonly string[];
  readonly technologies: readonly string[] | null;
}
