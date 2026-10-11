import { useState, useEffect } from 'react';

/**
 * Hook to track current active section anchor and header scroll state.
 */
export function useActiveSection(sectionIds: string[] = ['about', 'skills', 'experience', 'projects', 'contact']) {
  const [activeSection, setActiveSection] = useState<string>('#about');
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // If at top of the page, highlight about
      if (window.scrollY < 180) {
        if (sectionIds.includes('about')) {
          setActiveSection('#about');
        } else if (sectionIds.length > 0) {
          setActiveSection(`#${sectionIds[0]}`);
        } else {
          setActiveSection('');
        }
        return;
      }

      // Check section bounding rectangles
      const scrollPosition = window.scrollY + 180;
      let currentSection = '';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = `#${id}`;
            break;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger on initial mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);

  return { activeSection, isScrolled };
}
