import React from 'react';
import { ArrowRight, Download, Code2, Database, Lightbulb } from 'lucide-react';
import { brandConfig } from '../../config/brand';
import { Container } from '../layout/Container';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="About & Overview"
      className="relative min-h-screen flex items-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-24 overflow-hidden bg-[#FAF6EE] dark:bg-[#0B0F0D] border-b border-border/70 dark:border-white/10"
    >
      {/* Full-width Panoramic Background Workspace Graphic extending to the very top */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden="true">
        <img
          src="./images/hero-clean-bg.jpg"
          alt="Modern developer workspace setup featuring code editor, interactive data visualizations, and hardware devices"
          className="w-full h-full object-cover object-[80%_center] lg:object-center dark:brightness-[0.80] dark:contrast-[1.25] dark:saturate-[1.15] transition-[filter] duration-300"
          loading="eager"
        />

        {/* Ambient Dark Mode Glow Elements to ensure vibrancy and rich contrast */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none opacity-0 dark:opacity-80 transition-opacity duration-300" />
        <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-[#E0592A]/20 rounded-full blur-[100px] pointer-events-none opacity-0 dark:opacity-75 transition-opacity duration-300" />
        <div className="absolute bottom-10 right-20 w-[350px] h-[350px] bg-cyan-500/15 rounded-full blur-[90px] pointer-events-none opacity-0 dark:opacity-70 transition-opacity duration-300" />

        {/* Dark Mode Ambient Vignette: Left side dark gradient to make text razor-sharp without dulling the right side illustration */}
        <div className="absolute inset-y-0 left-0 w-full lg:w-3/5 bg-gradient-to-r from-[#0B0F0D]/95 via-[#0B0F0D]/75 to-transparent opacity-0 dark:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Soft mobile/tablet gradient in light mode to guarantee 100% text legibility on narrow viewports */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF6EE]/95 via-[#FAF6EE]/85 to-[#FAF6EE]/30 lg:opacity-0 dark:opacity-0 transition-opacity duration-300" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-xl lg:max-w-2xl flex flex-col items-start -translate-x-3 sm:-translate-x-6 lg:-translate-x-10">
          {/* Eyebrow with Orange Accent Line */}
          <div className="flex items-center gap-3 mb-5 sm:mb-6 animate-hero-fade [animation-delay:60ms]">
            <span className="w-8 h-[2.5px] bg-[#E0592A] dark:bg-[#FF6B35] rounded-full dark:shadow-[0_0_10px_rgba(255,107,53,0.8)]" aria-hidden="true" />
            <span className="font-mono text-xs sm:text-sm uppercase tracking-[0.22em] font-semibold text-charcoal/80 dark:text-emerald-400">
              FULL STACK DEVELOPER
            </span>
          </div>

          {/* Main Editorial Headline with Orange Period Accent */}
          <h1 className="font-serif text-3.5xl sm:text-5xl lg:text-5xl xl:text-[56px] text-forest dark:text-[#F3F4F6] font-bold tracking-tight leading-[1.1] mb-5 sm:mb-6 animate-hero-slide [animation-delay:150ms]">
            Designing resilient web applications &amp; turning data into decisive insight
            <span className="text-[#E0592A] dark:text-[#FF6B35] dark:drop-shadow-[0_0_12px_rgba(255,107,53,0.6)]">.</span>
          </h1>

          {/* Introduction Paragraph */}
          <p className="text-charcoal/85 dark:text-[#D1D5DB] text-base sm:text-lg leading-relaxed mb-8 max-w-2xl animate-hero-slide [animation-delay:260ms]">
            Hello, I&apos;m <strong className="font-semibold text-charcoal dark:text-white">{brandConfig.ownerDisplayName}</strong>, a Full Stack Developer behind{' '}
            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs sm:text-sm font-mono font-bold bg-[#EFEAE2]/90 dark:bg-[#16201B] text-charcoal dark:text-emerald-300 border border-border/70 dark:border-emerald-500/30 dark:shadow-[0_0_15px_rgba(52,211,153,0.15)]">
              ARSH . DEV
            </span>
            . I build modern, scalable web applications with a focus on clean code, thoughtful design, and seamless user experiences. Beyond development, I leverage data analytics to transform complex operational data into actionable insights and solve real-world problems through technology.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto animate-hero-slide [animation-delay:360ms]">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#E0592A] hover:bg-[#C94A1F] dark:bg-[#E0592A] dark:hover:bg-[#FF6B35] text-white font-medium text-sm sm:text-base shadow-sm hover:shadow-md dark:shadow-[0_0_24px_rgba(224,89,42,0.4)] transition-all duration-200 group w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0592A] focus-visible:ring-offset-2"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>

            <a
              href={brandConfig.contact.resumeUrl || './resume.pdf'}
              download="Arshdeep_Singh_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[#E0592A]/60 dark:border-[#FF6B35]/60 hover:border-[#E0592A] dark:hover:border-[#FF6B35] bg-[#FAF6EE]/60 hover:bg-[#FAF6EE] dark:bg-[#141C18]/80 dark:hover:bg-[#FF6B35]/15 text-charcoal dark:text-ivory hover:text-charcoal dark:hover:text-white transition-all duration-200 text-sm sm:text-base font-medium w-full sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E0592A] focus-visible:ring-offset-2"
            >
              <span>Download Resume</span>
              <Download className="w-4 h-4 text-[#E0592A] dark:text-[#FF6B35]" aria-hidden="true" />
            </a>
          </div>

          {/* Bottom 3 Capability Highlights matching mockup */}
          <div className="pt-8 sm:pt-10 mt-6 sm:mt-8 flex flex-wrap items-center gap-5 sm:gap-7 text-charcoal/85 dark:text-ivory animate-hero-fade [animation-delay:460ms]">
            <div className="flex items-center gap-2.5">
              <Code2 className="w-5 h-5 text-charcoal dark:text-emerald-400 stroke-[1.8] dark:drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]" aria-hidden="true" />
              <span className="font-mono text-xs sm:text-sm font-medium leading-tight dark:text-white">
                Web Development
              </span>
            </div>

            <span className="h-6 w-px bg-charcoal/20 dark:bg-emerald-500/25 hidden sm:block" aria-hidden="true" />

            <div className="flex items-center gap-2.5">
              <Database className="w-5 h-5 text-charcoal dark:text-emerald-400 stroke-[1.8] dark:drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]" aria-hidden="true" />
              <span className="font-mono text-xs sm:text-sm font-medium leading-tight dark:text-white">
                Data Analytics
              </span>
            </div>

            <span className="h-6 w-px bg-charcoal/20 dark:bg-emerald-500/25 hidden sm:block" aria-hidden="true" />

            <div className="flex items-center gap-2.5">
              <Lightbulb className="w-5 h-5 text-charcoal dark:text-emerald-400 stroke-[1.8] dark:drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]" aria-hidden="true" />
              <span className="font-mono text-xs sm:text-sm font-medium leading-tight dark:text-white">
                Problem Solving
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
