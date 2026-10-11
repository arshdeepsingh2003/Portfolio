import React from 'react';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />

      {/* Dynamic Categorized Skills Section */}
      <Skills />

      {/* Professional Experience & Career Journey Section */}
      <Experience />

      {/* Unified Projects Section */}
      <Projects />

      {/* Verified Direct Contact Section */}
      <Contact />
    </Layout>
  );
};

export default App;
