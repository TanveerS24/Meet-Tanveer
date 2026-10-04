import React from 'react';
import { Navbar } from '../components/common/Navbar';
import { Footer } from '../components/common/Footer';
import { ScrollProgress } from '../components/common/ScrollProgress';
import { Typewriter } from '../components/hero/Typewriter';
import { HeroBlobs } from '../components/hero/HeroBlobs';
import { ProjectCard3D } from '../components/work/ProjectCard3D';
import { ShippedStrip } from '../components/work/ShippedStrip';
import { Timeline } from '../components/journey/Timeline';
import { TrophyBadge } from '../components/proof/TrophyBadge';
import { LeetCodeDonut } from '../components/proof/LeetCodeDonut';
import { GitHubHeatmap } from '../components/proof/GitHubHeatmap';
import { MarqueeSkills } from '../components/skills/MarqueeSkills';
import { MiniTerminal } from '../components/terminal/MiniTerminal';
import { ContactForm } from '../components/contact/ContactForm';
import { profileData } from '../content/profile';
import { projectsData } from '../content/projects';
import { funFactsData } from '../content/funFacts';
import { certificationsData } from '../content/certifications';
import { trackEvent } from '../analytics/AnalyticsProvider';

export const Home: React.FC = () => {
  const featuredProjects = projectsData.filter((p) => p.featured && p.visible);
  const moreProjects = projectsData.filter((p) => !p.featured && p.visible);

  return (
    <div className="min-h-screen bg-surface text-on-surface flex flex-col justify-between selection:bg-primary-container selection:text-white">
      <ScrollProgress />
      <Navbar />

      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-200px)]">
        <div className="flex flex-col w-full relative overflow-hidden bg-surface">
          {/* Ambient Background Decor from Stitch Design */}
          <div className="absolute top-10 left-[-80px] w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none -z-0" />
          <div className="absolute top-48 right-[-60px] w-96 h-96 rounded-full bg-primary-container/15 blur-3xl pointer-events-none -z-0" />
          <div className="absolute top-[1800px] left-1/4 w-[500px] h-[500px] rounded-full bg-tertiary-fixed/30 blur-3xl pointer-events-none -z-0" />

          {/* ========================================== */}
          {/* 1. HERO SECTION */}
          {/* ========================================== */}
          <section className="relative z-10 w-full max-w-[1120px] mx-auto px-margin-mobile md:px-space-lg pt-space-lg md:pt-space-xl pb-space-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-gutter items-center">
              {/* Left Column */}
              <div className="lg:col-span-7 flex flex-col items-start gap-space-md">
                {/* Live Status Pill Badge */}
                <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-secondary-container/30 border border-secondary/20 shadow-sm">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
                  </span>
                  <span className="font-label text-xs text-secondary font-semibold tracking-wide">
                    {profileData.availability}
                  </span>
                </div>

                {/* Headline with Typewriter */}
                <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-on-surface tracking-tight font-extrabold leading-[1.12]">
                  Hi, I'm Tanveer! I build <Typewriter />
                </h1>

                {/* Subline */}
                <p className="font-body text-base md:text-lg text-on-surface-variant max-w-xl">
                  <strong className="font-semibold text-on-surface">Smart India Hackathon 2025 winner</strong>
                  , Roche AR intern, and{' '}
                  <span className="inline-block px-2 py-0.5 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-code text-xs font-bold">
                    9.32 CGPA
                  </span>{' '}
                  CSE builder crafting tactile, high-performance spatial and distributed interfaces.
                </p>

                {/* CTA Row */}
                <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                  <a
                    href="#work"
                    onClick={() => trackEvent('cta_click', { target: 'see_my_work' })}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary-container text-white font-label text-sm hover:bg-primary transition-all shadow-[0_4px_0_#D95341] hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none"
                  >
                    <span>See my work</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
                  </a>

                  <a
                    href="#contact"
                    onClick={() => trackEvent('cta_click', { target: 'say_hi_hero' })}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-surface-elevated text-on-surface font-label text-sm border border-[#EADFCF] hover:bg-surface-low transition-all shadow-sm"
                  >
                    <span>Say hi</span>
                    <span className="text-base select-none">👋</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Visual Blob & Tilted Badges */}
              <div className="lg:col-span-5 relative flex items-center justify-center py-space-md lg:py-0">
                <HeroBlobs />
              </div>
            </div>
          </section>

          {/* ========================================== */}
          {/* 2. FEATURED WORK SECTION */}
          {/* ========================================== */}
          <section className="w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin py-space-xl" id="work">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-space-sm mb-space-lg">
              <div>
                <div className="inline-flex items-center gap-space-xs font-code text-xs text-primary-container uppercase tracking-wider font-bold mb-1">
                  <span>01 // Selected Archives</span>
                </div>
                <h2 className="font-headline text-3xl md:text-4xl text-on-surface tracking-tight font-extrabold">
                  Featured work
                </h2>
                <p className="font-body text-sm md:text-base text-on-surface-variant">
                  Production systems, award-winning hackathon builds, and interactive experiences.
                </p>
              </div>

              <a
                href={profileData.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent('outbound_click', { target: 'github_header' })}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-elevated border border-[#EADFCF] text-on-surface font-label text-xs font-semibold hover:border-primary-container transition-colors shadow-sm"
              >
                <span>More on GitHub</span>
                <span className="material-symbols-outlined text-[16px]">north_east</span>
              </a>
            </div>

            {/* 3-Column Interactive Card Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {featuredProjects.map((project) => (
                <ProjectCard3D key={project.slug} project={project} />
              ))}
            </div>

            {/* Shipped Experiments Strip */}
            <ShippedStrip moreProjects={moreProjects} />
          </section>


          {/* ========================================== */}
          {/* 3. JOURNEY & EXPERIENCE TIMELINE */}
          {/* ========================================== */}
          <Timeline />

          {/* ========================================== */}
          {/* 4. PROOF & RECRUITER METRICS */}
          {/* ========================================== */}
          <section className="w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin py-space-xl" id="proof">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-space-sm mb-space-lg">
              <div>
                <div className="inline-flex items-center gap-space-xs font-code text-xs text-primary-container uppercase tracking-wider font-bold mb-1">
                  <span>03 // Verified Metrics</span>
                </div>
                <h2 className="font-headline text-3xl md:text-4xl text-on-surface tracking-tight font-extrabold">
                  Proof & Engineering Rigor
                </h2>
                <p className="font-body text-sm md:text-base text-on-surface-variant">
                  Algorithmic consistency, open-source output, and industry certifications.
                </p>
              </div>
            </div>

            {/* 3 Metric Cards Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              <LeetCodeDonut />
              <GitHubHeatmap />

              {/* Credentials & Accolades Card */}
              <div className="rounded-[24px] bg-surface-elevated border border-[#EADFCF] p-space-lg shadow-sm flex flex-col justify-between h-full space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-space-md">
                    <h3 className="font-headline text-base font-bold text-on-surface flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary-container">military_tech</span>
                      <span>Credentials</span>
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                  </div>

                  <div className="space-y-3">
                    <TrophyBadge />

                    {certificationsData
                      .filter((c) => c.badgeType === 'certification')
                      .map((cert) => (
                        <div
                          key={cert.id}
                          className="p-3 rounded-xl bg-surface-low border border-[#EADFCF] flex items-start gap-2.5"
                        >
                          <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">
                            verified
                          </span>
                          <div>
                            <p className="font-label text-xs font-bold text-on-surface">{cert.title}</p>
                            <p className="font-body text-xs text-on-surface-variant">
                              {cert.issuer} • Issued {cert.issueDate}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                <div className="pt-space-md border-t border-[#EADFCF] flex items-center justify-between text-xs font-code">
                  <span className="text-on-surface-variant">Credential verification:</span>
                  <a
                    href={profileData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary font-bold hover:underline"
                  >
                    Verify IDs ↗
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================== */}
          {/* 5. SKILLS MARQUEE */}
          {/* ========================================== */}
          <MarqueeSkills />

          {/* ========================================== */}
          {/* 6. ABOUT & FUN FACTS */}
          {/* ========================================== */}
          <section className="w-full max-w-[1120px] mx-auto px-margin-mobile md:px-margin py-space-xl" id="about">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
              {/* Bio Summary */}
              <div className="lg:col-span-6 space-y-space-md">
                <div className="inline-flex items-center gap-space-xs font-code text-xs text-secondary uppercase tracking-wider font-bold">
                  <span>05 // The Human Behind The Terminal</span>
                </div>
                <h2 className="font-headline text-3xl md:text-4xl text-on-surface tracking-tight font-extrabold leading-tight">
                  Obsessed with tangible pixels, low latencies, and playful tools.
                </h2>
                {profileData.bio.map((paragraph, idx) => (
                  <p key={idx} className="font-body text-base text-on-surface-variant leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* 4 Tilted Sticker Fact Cards */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-space-md p-space-xs">
                {funFactsData.map((fact) => (
                  <div
                    key={fact.title}
                    className={`p-space-md rounded-[20px] bg-surface-elevated border border-[#EADFCF] shadow-sm transform hover:rotate-0 transition-transform ${fact.rotationClass}`}
                  >
                    <span className="text-2xl select-none mb-2 block">{fact.emoji}</span>
                    <p className="font-headline font-bold text-base text-on-surface">{fact.title}</p>
                    <p className="font-body text-xs text-on-surface-variant mt-1 leading-relaxed">
                      {fact.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================== */}
          {/* 7. INTERACTIVE CLI TERMINAL */}
          {/* ========================================== */}
          <MiniTerminal />

          {/* ========================================== */}
          {/* 8. CORAL CONTACT BAND */}
          {/* ========================================== */}
          <ContactForm />
        </div>
      </main>

      <Footer />
    </div>
  );
};
