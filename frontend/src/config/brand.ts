/**
 * Brand & Site Configuration
 * 
 * Central configuration for brand wordmark, site metadata, navigation items,
 * and external links. Missing or unverified personal details are strictly marked
 * as null/pending to prevent fabricating personal information.
 */

export interface NavItem {
  readonly label: string;
  readonly href: string;
  readonly isDownload?: boolean;
  readonly downloadFileName?: string;
  readonly target?: string;
}

export interface ContactLinks {
  /** Pending verification: Do not invent email address */
  readonly email: string | null;
  /** Pending verification: Do not invent GitHub URL */
  readonly githubUrl: string | null;
  /** Pending verification: Do not invent LinkedIn URL */
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

export const brandConfig: BrandConfig = {
  // Configurable wordmark
  wordmark: 'ARSH.DEV',
  title: 'ARSH.DEV — Developer & Data Portfolio',
  description: 'Full-stack developer portfolio showcasing web development, data analytics projects, and technical skills.',
  ownerDisplayName: 'Arshdeep Singh',
  logoUrl: './as-logo.png',

  navItems: [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'Resume', href: './resume.pdf', isDownload: true, downloadFileName: 'Arshdeep_Singh_Resume.pdf' },
  ],

  // Contact details strictly kept as null/pending until verified by owner
  contact: {
    email: null,
    githubUrl: null,
    linkedinUrl: null,
    resumeUrl: './resume.pdf',
  },
} as const;

export const isPending = (value: string | null | undefined): boolean => {
  return !value || value.trim().length === 0;
};
