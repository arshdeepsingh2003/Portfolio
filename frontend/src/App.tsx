import React, { useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  useEffect(() => {
    // Disable browser automatic scroll restoration on refresh/load
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollToAbout = () => {
      const aboutElement = document.getElementById('about');
      if (aboutElement) {
        aboutElement.scrollIntoView({ behavior: 'instant' });
      } else {
        window.scrollTo(0, 0);
      }
      if (window.location.hash !== '#about') {
        window.history.replaceState(null, '', '#about');
      }
    };

    // Immediately navigate to About on mount / page reload
    scrollToAbout();

    // Guard against late browser scroll restoration
    const rafId = requestAnimationFrame(scrollToAbout);
    const timerId = setTimeout(scrollToAbout, 50);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timerId);
    };
  }, []);

  return (
    <Layout>
      {/* About Section (Top Section) */}
      <About />

      {/* Dynamic Categorized Skills Section */}
      <Skills />

      {/* Unified Projects Section */}
      <Projects />

      {/* Professional Experience & Career Journey Section */}
      <Experience />

      {/* Verified Direct Contact Section */}
      <Contact />
    </Layout>
  );
};

export default App;
