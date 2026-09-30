import React from 'react';
import { allSkillsList } from '../../content/skills';
import { useAnimationGate } from '../../motion/tokens';

export const MarqueeSkills: React.FC = () => {
  const { isReducedMotion } = useAnimationGate();

  return (
    <section className="w-full py-space-xl overflow-hidden relative select-none">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin mb-space-md">
        <div className="inline-flex items-center gap-space-xs font-code text-xs text-primary-container uppercase tracking-wider font-bold mb-1">
          <span>05 // Technical Arsenal</span>
        </div>
        <h2 className="font-headline text-2xl md:text-3xl text-on-surface font-extrabold tracking-tight">
          Languages, Frameworks & Engines
        </h2>
      </div>

      {/* Edge Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

      {/* Marquee Row 1 */}
      <div className="group flex overflow-hidden py-2">
        <div
          className={`flex gap-3 whitespace-nowrap ${
            isReducedMotion
              ? 'flex-wrap px-margin-mobile justify-center'
              : 'animate-marquee group-hover:[animation-play-state:paused]'
          }`}
        >
          {allSkillsList.map((skill, idx) => (
            <span
              key={`${skill}-${idx}`}
              className="px-4 py-2 rounded-full bg-surface-elevated border border-outline-variant/50 text-on-surface font-code text-xs font-semibold shadow-sm flex items-center gap-2 hover:border-primary-container transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-primary-container" />
              {skill}
            </span>
          ))}

          {/* Repeat list for seamless marquee loop */}
          {!isReducedMotion &&
            allSkillsList.map((skill, idx) => (
              <span
                key={`repeat-${skill}-${idx}`}
                className="px-4 py-2 rounded-full bg-surface-elevated border border-outline-variant/50 text-on-surface font-code text-xs font-semibold shadow-sm flex items-center gap-2 hover:border-primary-container transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-secondary-container" />
                {skill}
              </span>
            ))}
        </div>
      </div>
    </section>
  );
};
