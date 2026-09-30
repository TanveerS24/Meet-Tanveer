import React, { useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { Project } from '../../content/projects';
import { useAnimationGate } from '../../motion/tokens';
import { trackEvent } from '../../analytics/AnalyticsProvider';

interface ProjectCard3DProps {
  project: Project;
  onOpenCaseStudy?: (project: Project) => void;
}

export const ProjectCard3D: React.FC<ProjectCard3DProps> = ({ project, onOpenCaseStudy }) => {
  const { isReducedMotion } = useAnimationGate();
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse tilt spring values
  const rotateX = useSpring(0, { stiffness: 300, damping: 25 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 25 });
  const glareX = useMotionValue(50);
  const glareY = useMotionValue(50);
  const glareOpacity = useSpring(0, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion || isFlipped || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const normX = (x / rect.width - 0.5) * 2; // -1 to 1
    const normY = (y / rect.height - 0.5) * 2; // -1 to 1

    rotateX.set(-normY * 8); // rotateX up to 8deg
    rotateY.set(normX * 8); // rotateY up to 8deg

    glareX.set((x / rect.width) * 100);
    glareY.set((y / rect.height) * 100);
    glareOpacity.set(0.15);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    glareOpacity.set(0);
  };

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
    trackEvent('project_card_flip', { project: project.slug, flipped: !isFlipped });
  };

  return (
    <div className="relative group perspective-900 w-full min-h-[460px]">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isFlipped ? 0 : rotateX,
          rotateY: isFlipped ? 0 : rotateY,
        }}
        animate={{
          rotateY: isFlipped ? 180 : 0,
        }}
        transition={{
          duration: isReducedMotion ? 0.01 : 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative w-full h-full rounded-card bg-surface-elevated border border-outline-variant p-space-md shadow-sm preserve-3d flex flex-col justify-between hover:-translate-y-1 hover:shadow-lg focus-within:-translate-y-1 transition-shadow"
      >
        {/* Pointer Glare Highlight */}
        <motion.div
          style={{
            opacity: isFlipped ? 0 : glareOpacity,
            background: `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,0.4), transparent 60%)`,
          }}
          className="absolute inset-0 rounded-card pointer-events-none z-30"
        />

        {/* FRONT FACE */}
        <div
          className={`flex flex-col h-full justify-between backface-hidden ${
            isFlipped ? 'pointer-events-none invisible' : 'visible'
          }`}
        >
          {/* Banner Graphic Frame */}
          <div className="relative w-full h-48 rounded-squircle overflow-hidden flex items-center justify-center p-2 bg-surface-low border border-outline-variant/30">
            {project.badgeText && (
              <div className="absolute top-2 left-2 z-10 flex items-center gap-1 px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-code text-xs font-bold shadow-sm border border-tertiary-fixed-dim/40">
                <span className="material-symbols-outlined text-[14px]">stars</span>
                <span>{project.badgeText}</span>
              </div>
            )}
            <img
              src={project.imagePlaceholder}
              alt={project.title}
              className="w-full h-full object-cover rounded-squircle transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content info */}
          <div className="pt-space-md pb-space-sm flex-1 flex flex-col justify-between">
            <div>
              <h3 className="font-headline text-xl md:text-2xl text-on-surface font-bold tracking-tight">
                {project.title}
              </h3>
              <p className="font-body text-sm text-on-surface-variant mt-1 line-clamp-2">
                {project.shortDescription}
              </p>
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-1.5 mt-space-md">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 rounded-full bg-surface-low font-code text-xs text-on-surface-variant border border-outline-variant/30 font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Card Footer Actions */}
          <div className="pt-space-sm mt-space-xs border-t border-outline-variant/40 flex items-center justify-between">
            <button
              type="button"
              onClick={toggleFlip}
              className="font-label text-xs md:text-sm text-primary-container font-semibold hover:underline flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-primary-container rounded-md"
            >
              <span>View details & results</span>
              <span className="material-symbols-outlined text-[16px]">swap_horiz</span>
            </button>

            <a
              href={`/#/work/${project.slug}`}
              onClick={() => trackEvent('project_case_study_click', { project: project.slug })}
              aria-label={`View ${project.title} case study`}
              className="w-9 h-9 rounded-full bg-surface-low flex items-center justify-center text-on-surface hover:bg-primary-container hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          </div>
        </div>

        {/* BACK FACE (Rotated 180deg) */}
        <div
          style={{ transform: 'rotateY(180deg)' }}
          className={`absolute inset-0 p-space-md rounded-card bg-surface-elevated border border-outline-variant flex flex-col justify-between backface-hidden ${
            !isFlipped ? 'pointer-events-none invisible' : 'visible'
          }`}
        >
          <div className="space-y-3 overflow-y-auto pr-1">
            <div className="flex items-center justify-between border-b border-outline-variant/40 pb-2">
              <h4 className="font-headline font-bold text-lg text-on-surface">{project.title}</h4>
              <button
                type="button"
                onClick={toggleFlip}
                className="w-8 h-8 rounded-full bg-surface-low text-on-surface flex items-center justify-center hover:bg-surface-container"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            </div>

            <div>
              <p className="font-code text-xs font-bold text-primary-container uppercase">My Role:</p>
              <p className="font-body text-sm text-on-surface font-semibold">{project.role}</p>
            </div>

            <div>
              <p className="font-code text-xs font-bold text-secondary uppercase">Key Impact:</p>
              <p className="font-body text-sm text-on-surface-variant">{project.impactResult}</p>
            </div>

            <div>
              <p className="font-code text-xs font-bold text-tertiary-container uppercase">Architecture:</p>
              <p className="font-body text-xs text-on-surface-variant">{project.architectureDetails}</p>
            </div>

            {project.stats && (
              <div className="grid grid-cols-3 gap-1 pt-1 text-center">
                {project.stats.map((s) => (
                  <div key={s.label} className="p-1.5 rounded-lg bg-surface-low border border-outline-variant/30">
                    <span className="block font-headline font-bold text-sm text-on-surface">{s.value}</span>
                    <span className="block font-label text-[10px] text-on-surface-variant">{s.label}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-outline-variant/40 flex items-center justify-between gap-2">
            <a
              href={`/#/work/${project.slug}`}
              className="px-4 py-2 rounded-full bg-primary-container text-white font-label text-xs font-bold hover:bg-primary transition-all shadow-sm"
            >
              Full Case Study →
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full bg-surface-low text-on-surface font-label text-xs font-semibold border border-outline-variant/40 hover:bg-surface-container"
            >
              GitHub Repo ↗
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
