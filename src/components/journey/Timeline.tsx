import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { experienceData } from '../../content/experience';

export const Timeline: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });

  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  return (
    <section className="w-full max-w-[1120px] mx-auto px-margin-mobile md:px-margin py-space-xl" id="journey">
      <div className="text-center max-w-xl mx-auto mb-space-xl">
        <div className="inline-flex items-center gap-space-xs font-code text-xs text-primary-container uppercase tracking-wider font-bold mb-1">
          <span>03 // Path & Milestones</span>
        </div>
        <h2 className="font-headline text-3xl md:text-4xl text-on-surface tracking-tight font-extrabold">
          Journey & Experience
        </h2>
        <p className="font-body text-base text-on-surface-variant mt-1">
          Engineering foundation paired with corporate immersive tech practice.
        </p>
      </div>

      {/* Timeline Container */}
      <div ref={containerRef} className="relative pl-6 sm:pl-10 space-y-space-xl">
        {/* Background Hairline Guide Line */}
        <div className="absolute left-2 sm:left-4 top-4 bottom-4 w-[2px] bg-outline-variant/40" />

        {/* Animated Scroll Line Drawing */}
        <motion.div
          style={{ scaleY: lineHeight }}
          className="absolute left-2 sm:left-4 top-4 bottom-4 w-[2px] bg-primary-container origin-top pointer-events-none"
        />

        {experienceData.map((item) => (
          <div key={item.id} className="relative flex items-start gap-space-md group">
            {/* Timeline Icon Marker */}
            <div
              className={`absolute -left-6 sm:-left-10 w-8 h-8 rounded-full border-4 border-surface flex items-center justify-center shadow-md ${
                item.type === 'work'
                  ? 'bg-secondary-container text-secondary'
                  : 'bg-tertiary-fixed text-on-tertiary-fixed'
              }`}
            >
              <span className="material-symbols-outlined text-[16px]">
                {item.type === 'work' ? 'work' : 'school'}
              </span>
            </div>

            {/* Content Card */}
            <div className="w-full rounded-card bg-surface-elevated border border-outline-variant p-space-md md:p-space-lg shadow-sm hover:-translate-y-0.5 transition-transform">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                <h3 className="font-headline text-lg md:text-xl text-on-surface font-bold">
                  {item.company} <span className="font-normal text-on-surface-variant">— {item.role}</span>
                </h3>
                <span className="inline-block px-3 py-1 rounded-full bg-surface-low text-on-surface font-code text-xs font-bold w-fit">
                  {item.period}
                </span>
              </div>

              <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed">
                {item.description}
              </p>

              {item.highlightMetric && (
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed font-headline text-sm font-extrabold flex items-center gap-1 shadow-sm">
                    <span className="material-symbols-outlined text-[18px]">trending_up</span>
                    {item.highlightMetric}
                  </span>
                  <span className="font-body text-xs text-on-surface-variant">
                    {item.highlightText}
                  </span>
                </div>
              )}

              <div className="flex flex-wrap gap-2 mt-3">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-full bg-surface-low font-code text-xs text-on-surface-variant border border-outline-variant/30 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
