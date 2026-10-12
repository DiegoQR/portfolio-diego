import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} tabIndex={-1} aria-labelledby={`${id}-title`} className={`section ${className}`}>
      <div className="section-layout page-width">
        <h2 id={`${id}-title`} className="section-title">{title}</h2>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
