/**
 * About Section Data
 * 
 * Configurable content for the About section describing technical background,
 * professional journey, guiding principles, and factual attributes.
 * Unverified personal data or historical metrics remain strictly pending.
 */

export interface AboutPrinciple {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly category: 'Engineering' | 'Analytics' | 'Design' | 'Process';
}

export interface AboutFact {
  readonly label: string;
  readonly value: string;
  readonly isPending?: boolean;
}

export interface AboutData {
  readonly eyebrow: string;
  readonly title: string;
  readonly lead: string;
  readonly paragraphs: readonly string[];
  readonly principles: readonly AboutPrinciple[];
  readonly facts: readonly AboutFact[];
}

export const aboutData: AboutData = {
  eyebrow: 'Background & Journey',
  title: 'Crafting with Purpose & Analytical Rigor',
  lead: 'I build software that balances visual craftsmanship with analytical clarity—delivering resilient web applications and deriving actionable answers from complex data.',
  paragraphs: [
    'My technical focus centers on full-stack web engineering and data analytics. On the frontend and web architecture side, I build responsive, accessible web applications with React, TypeScript, and modern component systems—prioritizing semantic structure, intuitive navigation, and clean code over superficial complexity.',
    'On the analytical side, I approach challenges through the lens of data integrity, structured analysis, and operational clarity. Rather than viewing software engineering and analytics as isolated domains, I treat them as complementary: disciplined code produces reliable, reproducible data, while analytical curiosity ensures what we build serves genuine real-world needs.',
    'My philosophy is rooted in deliberate simplicity: zero unnecessary runtime dependencies, strict type safety, transparent data modeling, and honest representation of project capabilities. Every component, pipeline, and query is crafted to be understood, audited, and maintained with long-term confidence.',
  ],
  principles: [
    {
      id: 'clarity',
      title: 'Clarity Over Complexity',
      description: 'Choosing straightforward, maintainable patterns over convoluted abstractions. Code and architectures should be easy to inspect, test, and adapt.',
      category: 'Engineering',
    },
    {
      id: 'integrity',
      title: 'Data Integrity & Honesty',
      description: 'Treating datasets and metrics with rigorous accuracy—verifying sources, documenting limitations, and never relying on unvalidated assumptions.',
      category: 'Analytics',
    },
    {
      id: 'resilience',
      title: 'Accessible & Resilient Craft',
      description: 'Engineering experiences for everyone: keyboard navigability, high-contrast typography, fast load times, and respectful interaction design.',
      category: 'Design',
    },
  ],
  facts: [
    {
      label: 'Primary Disciplines',
      value: 'Full-Stack Web Engineering & Data Analytics',
    },
    {
      label: 'Frontend Foundation',
      value: 'React, TypeScript, Tailwind CSS, Vite',
    },
    {
      label: 'Data & Scripting',
      value: 'Python, SQL, Data Modeling & Reconciliation',
    },
    {
      label: 'Architecture Principles',
      value: 'Strict Zero-DB, Semantic HTML, Clean State',
    },
    {
      label: 'Current Status',
      value: 'Open to select developer & analytics opportunities',
    },
    {
      label: 'Formal History & Verification',
      value: 'Available upon direct request / portfolio review',
      isPending: true,
    },
  ],
};
