import React from 'react';
import { Layout } from './components/layout/Layout';
import { Container } from './components/layout/Container';
import { SectionHeading } from './components/ui/SectionHeading';
import { Badge } from './components/ui/Badge';
import { CardShell } from './components/ui/CardShell';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';

export const App: React.FC = () => {
  return (
    <Layout>
      {/* Phase 2: Verified Hero Section */}
      <Hero />

      {/* Phase 2: Verified About Section */}
      <About />

      {/* Phase 3: Dynamic Categorized Skills Section */}
      <Skills />

      {/* Phase 3: Data-Driven Web Development Projects Section */}
      <Projects />

      <section id="data-analytics" className="py-12 sm:py-16 border-b border-border/60">
        <Container>
          <SectionHeading
            eyebrow="Phase 4 Planned"
            title="Data Analytics Section Shell"
            description="Distinct from Web Development, showcasing analytical methodology, findings, and metrics."
          />
          <CardShell className="bg-surface/60 border-dashed">
            <p className="text-sm text-charcoal-muted">
              Inventory Reconciliation and Warehouse Surveillance case studies will be implemented in Phase 4.
            </p>
          </CardShell>
        </Container>
      </section>

      <section id="contact" className="py-12 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Phase 5 Planned"
            title="Contact Section Shell"
            description="Direct contact links configured in src/config/brand.ts."
          />
          <CardShell className="bg-surface/60 border-dashed">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="text-sm text-charcoal font-medium">Direct Contact Status</p>
                <p className="text-xs text-charcoal-muted mt-1">
                  Email, GitHub, and LinkedIn links are currently marked as pending review to uphold integrity rules.
                </p>
              </div>
              <Badge variant="pending" size="md">
                Pending Verification
              </Badge>
            </div>
          </CardShell>
        </Container>
      </section>
    </Layout>
  );
};

export default App;
