/**
 * Brand & Site Configuration
 * 
 * Central configuration for brand wordmark, site metadata, navigation items,
 * and external links. Sourced from `src/data/brand.json` so personal details and site
 * configuration can be updated easily via JSON.
 */

import rawBrandData from '../data/brand.json';

export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly isDownload?: boolean;
  readonly downloadFileName?: string;
  readonly target?: string;
}

export interface ContactLinks {
  /** Verified contact email from resume */
  readonly email: string | null;
  /** Verified phone number from resume */
  readonly phone?: string | null;
  /** Verified GitHub profile URL */
  readonly githubUrl: string | null;
  /** Verified LinkedIn profile URL */
  readonly linkedinUrl: string | null;
  /** Verified local download file */
  readonly resumeUrl: string | null;
}

export interface BrandConfig {
  readonly wordmark: string;
  readonly title: string;
  readonly description: string;
  readonly ownerDisplayName: string;
  readonly logoUrl: string;
  readonly navItems: readonly NavItem[];
  readonly contact: ContactLinks;
}

export const brandConfig: BrandConfig = rawBrandData as BrandConfig;

export const isPending = (value: string | null | undefined): boolean => {
  return !value || value.trim().length === 0;
};
