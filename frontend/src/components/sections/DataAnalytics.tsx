import React from 'react';
import { Database, ShieldCheck, FileCheck, Binary } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ProjectList } from '../projects/ProjectList';

export const DataAnalytics: React.FC = () => {
  return (
    <section
      id="data-analytics"
      aria-labelledby="data-analytics-heading"
      className="py-16 sm:py-24 border-b border-border/60 bg-warm-ivory"
    >
      <Container>
        <SectionHeading
          id="data-analytics-heading"
          eyebrow="Analytical Portfolio"
          title="Data Analytics & Case Studies"
          description="Operational audits, reconciliation pipelines, and surveillance analytics. Structured case studies documenting problem questions, dataset parameters, methodology, and verified findings without fabricated metrics."
        />

        {/* Analytical Discipline & Rigor Banner */}
        <div className="mb-10 p-5 sm:p-6 rounded-md bg-surface/80 border border-border/80 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-plum animate-pulse" aria-hidden="true" />
            <h3 className="font-mono text-xs uppercase tracking-widest text-plum font-semibold">
              Analytical Integrity Framework
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="flex items-start gap-2.5">
              <Database className="w-4 h-4 text-plum shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-charcoal">Verified Schema Origins</p>
                <p className="text-charcoal-muted mt-0.5 leading-relaxed">
                  Grounded in real transactional logs; no synthetic or fabricated datasets.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-plum shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-charcoal">Zero Invented Metrics</p>
                <p className="text-charcoal-muted mt-0.5 leading-relaxed">
                  Unverified KPIs and business outcomes remain strictly marked as pending.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Binary className="w-4 h-4 text-plum shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-charcoal">Reproducible Pipelines</p>
                <p className="text-charcoal-muted mt-0.5 leading-relaxed">
                  SQL and Python reconciliation routines engineered for repeatable auditing.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <FileCheck className="w-4 h-4 text-plum shrink-0 mt-0.5" aria-hidden="true" />
              <div>
                <p className="font-semibold text-charcoal">Transparent Limitations</p>
                <p className="text-charcoal-muted mt-0.5 leading-relaxed">
                  Data assumptions, boundary limits, and audit scopes clearly stated.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Analytics Project Cards filtered by data-analytics category */}
        <ProjectList
          category="data-analytics"
          variant="analytics"
          emptyMessage="No data analytics case studies currently published. Add entries to projects.json to populate this section."
        />
      </Container>
    </section>
  );
};
