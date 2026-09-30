import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../content/projects';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { trackEvent } from '../analytics/AnalyticsProvider';

export const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-surface flex flex-col justify-between">
        <Navbar />
        <div className="max-w-md mx-auto text-center py-32 px-4">
          <h1 className="font-headline font-bold text-3xl text-on-surface mb-2">Project Not Found</h1>
          <p className="font-body text-sm text-on-surface-variant mb-6">
            The case study you requested does not exist or has been archived.
          </p>
          <button
            type="button"
            onClick={() => navigate('/')}
            className="px-6 py-3 rounded-full bg-primary-container text-white font-label font-bold"
          >
            ← Back to Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface flex flex-col justify-between">
      <Navbar />

      <main className="w-full pt-28 pb-space-xl px-margin-mobile md:px-margin max-w-[1120px] mx-auto">
        {/* Back Link */}
        <button
          type="button"
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-1.5 font-label text-sm text-primary-container font-semibold hover:underline mb-space-md"
        >
          <span>← Back to all projects</span>
        </button>

        {/* Header */}
        <div className="space-y-3 mb-space-lg">
          {project.badgeText && (
            <span className="inline-block px-3.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-code text-xs font-bold">
              {project.badgeText}
            </span>
          )}
          <h1 className="font-headline text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight">
            {project.title}
          </h1>
          <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-3xl">
            {project.shortDescription}
          </p>
        </div>

        {/* Main Banner Image */}
        <div className="w-full h-80 md:h-[450px] rounded-card overflow-hidden bg-surface-low border border-outline-variant mb-space-lg">
          <img
            src={project.imagePlaceholder}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 2-Column Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg mb-space-xl">
          {/* Left Column Description */}
          <div className="lg:col-span-8 space-y-space-md">
            <div>
              <h2 className="font-headline font-bold text-2xl text-on-surface mb-2">Overview</h2>
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            <div>
              <h2 className="font-headline font-bold text-2xl text-on-surface mb-2">Architecture & Engineering</h2>
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                {project.architectureDetails}
              </p>
            </div>
          </div>

          {/* Right Column Metadata */}
          <div className="lg:col-span-4 space-y-space-md bg-surface-elevated p-space-md rounded-card border border-outline-variant h-fit">
            <div>
              <p className="font-code text-xs text-primary-container font-bold uppercase">Role</p>
              <p className="font-body text-sm font-bold text-on-surface">{project.role}</p>
            </div>

            <div>
              <p className="font-code text-xs text-secondary font-bold uppercase">Impact Result</p>
              <p className="font-body text-sm text-on-surface-variant">{project.impactResult}</p>
            </div>

            <div>
              <p className="font-code text-xs text-tertiary-container font-bold uppercase">Technologies</p>
              <div className="flex flex-wrap gap-1.5 mt-1">
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

            <div className="pt-3 border-t border-outline-variant/40 flex flex-col gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent('outbound_click', { target: `github_${project.slug}` })}
                className="w-full py-2.5 rounded-full bg-primary-container text-white font-label text-sm font-bold text-center hover:bg-primary shadow-sm"
              >
                View GitHub Repository ↗
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
