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
}

export interface ContactLinks {
  /** Pending verification: Do not invent email address */
  readonly email: string | null;
  /** Pending verification: Do not invent GitHub URL */
  readonly githubUrl: string | null;
  /** Pending verification: Do not invent LinkedIn URL */
  readonly linkedinUrl: string | null;
  /** Pending verification: Do not invent Resume URL */
  readonly resumeUrl: string | null;
}

export interface BrandConfig {
  readonly wordmark: string;
  readonly title: string;
  readonly description: string;
  readonly ownerDisplayName: string;
  readonly navItems: readonly NavItem[];
  readonly contact: ContactLinks;
}

export const brandConfig: BrandConfig = {
  // Configurable wordmark
  wordmark: 'ARSH.DEV',
  title: 'ARSH.DEV — Developer & Data Portfolio',
  description: 'Full-stack developer portfolio showcasing web development, data analytics projects, and technical skills.',
  ownerDisplayName: 'Arshdeep Singh',

  navItems: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Web Projects', href: '#projects' },
    { label: 'Data Analytics', href: '#data-analytics' },
    { label: 'Contact', href: '#contact' },
  ],

  // Contact details strictly kept as null/pending until verified by owner
  contact: {
    email: null,
    githubUrl: null,
    linkedinUrl: null,
    resumeUrl: null,
  },
} as const;

export const isPending = (value: string | null | undefined): boolean => {
  return !value || value.trim().length === 0;
};
