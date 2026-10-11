import React from 'react';

export interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  level?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  eyebrow,
  title,
  description,
  align = 'left',
  level = 'h2',
  className = '',
}) => {
  const HeadingTag = level;

  const alignmentStyles = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col mb-8 sm:mb-12 ${alignmentStyles} ${className}`}>
      {eyebrow && (
        <span className="font-mono text-xs uppercase tracking-widest text-plum font-semibold mb-2.5 inline-block">
          {eyebrow}
        </span>
      )}
      <HeadingTag id={id} className="font-serif text-3xl sm:text-4xl text-forest tracking-tight leading-tight">
        {title}
      </HeadingTag>
      {description && (
        <div className={`mt-3 text-charcoal-muted text-base sm:text-lg leading-relaxed max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {typeof description === 'string' ? <p>{description}</p> : description}
        </div>
      )}
    </div>
  );
};
