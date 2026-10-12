import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';
import { brandConfig } from '../../config/brand';
import contactData from '../../data/contact.json';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ScrollReveal } from '../ui/ScrollReveal';

export const Contact: React.FC = () => {
  const contact = brandConfig.contact;
  const linkedinUrl = contact.linkedinUrl || 'https://www.linkedin.com/in/er-arshdeep-singh-7168a937a/';
  const githubUrl = contact.githubUrl || 'https://github.com/arshdeepsingh2003';
  const phone = contact.phone || '+91-8799793855';
  const email = contact.email || 'arshdeepgtbit@gmail.com';

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 sm:py-20 lg:py-24 border-b border-border/70 dark:border-white/10 bg-surface/30 dark:bg-[#121815]/50 relative overflow-hidden"
    >
      {/* Subtle editorial watermark / grid accent */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25 dark:opacity-10 [background-image:radial-gradient(#173C32_0.75px,transparent_0.75px)] dark:[background-image:radial-gradient(#34D399_0.75px,transparent_0.75px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_50%,transparent_100%)]"
        aria-hidden="true"
      />

      <Container className="relative">
        <ScrollReveal animation="fade-up">
          <SectionHeading
            id="contact-heading"
            eyebrow={contactData.section.eyebrow}
            title={contactData.section.title}
            align="center"
          />
        </ScrollReveal>

        {/* Minimal Horizontal Contact Strip matching Screenshot 2 */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-10 py-6 sm:py-8 px-4 sm:px-6">
            {/* 1. LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Arshdeep Singh on LinkedIn"
              className="group flex items-center gap-3.5 sm:gap-4 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest dark:focus-visible:ring-emerald-400 rounded-xl"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-border/80 dark:border-white/15 bg-warm-ivory/80 dark:bg-[#16201B]/80 flex items-center justify-center shrink-0 text-forest dark:text-emerald-400 group-hover:border-forest/50 dark:group-hover:border-emerald-400/50 group-hover:bg-[#EDE6D9] dark:group-hover:bg-[#202C27] group-hover:scale-105 transition-all duration-200 shadow-subtle">
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" aria-hidden="true" />
              </div>
              <span className="font-serif text-lg sm:text-xl text-forest dark:text-ivory font-medium group-hover:text-forest-hover dark:group-hover:text-emerald-300 transition-colors">
                LinkedIn
              </span>
            </a>

            {/* Separator 1 */}
            <span className="h-10 sm:h-12 w-px bg-border/80 dark:bg-white/15 hidden lg:block shrink-0" aria-hidden="true" />

            {/* 2. GitHub */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Explore Arshdeep Singh's repositories on GitHub"
              className="group flex items-center gap-3.5 sm:gap-4 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest dark:focus-visible:ring-emerald-400 rounded-xl"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-border/80 dark:border-white/15 bg-warm-ivory/80 dark:bg-[#16201B]/80 flex items-center justify-center shrink-0 text-forest dark:text-emerald-400 group-hover:border-forest/50 dark:group-hover:border-emerald-400/50 group-hover:bg-[#EDE6D9] dark:group-hover:bg-[#202C27] group-hover:scale-105 transition-all duration-200 shadow-subtle">
                <Github className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" aria-hidden="true" />
              </div>
              <span className="font-serif text-lg sm:text-xl text-forest dark:text-ivory font-medium group-hover:text-forest-hover dark:group-hover:text-emerald-300 transition-colors">
                GitHub
              </span>
            </a>

            {/* Separator 2 */}
            <span className="h-10 sm:h-12 w-px bg-border/80 dark:bg-white/15 hidden lg:block shrink-0" aria-hidden="true" />

            {/* 3. Phone */}
            <a
              href={`tel:${phone}`}
              aria-label={`Call Arshdeep Singh at ${phone}`}
              className="group flex items-center gap-3.5 sm:gap-4 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest dark:focus-visible:ring-emerald-400 rounded-xl"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-border/80 dark:border-white/15 bg-warm-ivory/80 dark:bg-[#16201B]/80 flex items-center justify-center shrink-0 text-forest dark:text-emerald-400 group-hover:border-forest/50 dark:group-hover:border-emerald-400/50 group-hover:bg-[#EDE6D9] dark:group-hover:bg-[#202C27] group-hover:scale-105 transition-all duration-200 shadow-subtle">
                <Phone className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" aria-hidden="true" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-base sm:text-lg text-forest dark:text-ivory font-medium leading-tight group-hover:text-forest-hover dark:group-hover:text-emerald-300 transition-colors">
                  Call
                </span>
                <span className="text-base sm:text-[17px] font-medium text-charcoal/90 dark:text-ivory group-hover:text-forest dark:group-hover:text-emerald-400 transition-colors leading-snug">
                  {phone}
                </span>
              </div>
            </a>

            {/* Separator 3 */}
            <span className="h-10 sm:h-12 w-px bg-border/80 dark:bg-white/15 hidden lg:block shrink-0" aria-hidden="true" />

            {/* 4. Email */}
            <a
              href={`mailto:${email}`}
              aria-label={`Email Arshdeep Singh at ${email}`}
              className="group flex items-center gap-3.5 sm:gap-4 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest dark:focus-visible:ring-emerald-400 rounded-xl"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl border border-border/80 dark:border-white/15 bg-warm-ivory/80 dark:bg-[#16201B]/80 flex items-center justify-center shrink-0 text-forest dark:text-emerald-400 group-hover:border-forest/50 dark:group-hover:border-emerald-400/50 group-hover:bg-[#EDE6D9] dark:group-hover:bg-[#202C27] group-hover:scale-105 transition-all duration-200 shadow-subtle">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" aria-hidden="true" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-serif text-base sm:text-lg text-forest dark:text-ivory font-medium leading-tight group-hover:text-forest-hover dark:group-hover:text-emerald-300 transition-colors">
                  Email
                </span>
                <span className="text-base sm:text-[17px] font-medium text-charcoal/90 dark:text-ivory group-hover:text-forest dark:group-hover:text-emerald-400 transition-colors leading-snug break-all sm:break-normal">
                  {email}
                </span>
              </div>
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
};
