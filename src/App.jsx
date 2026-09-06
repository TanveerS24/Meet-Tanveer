import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ToolsSection from './components/sections/ToolsSection';
import JourneySection from './components/sections/JourneySection';
import ProjectsSection from './components/sections/ProjectsSection';
import TransitionBeat from './components/sections/TransitionBeat';
import AboutSection from './components/sections/AboutSection';
import ContactSection from './components/sections/ContactSection';
import NoiseOverlay from './components/common/NoiseOverlay';
import CustomCursor from './components/common/CustomCursor';

/**
 * App Root Component
 * 
 * Orchestrates the full cinematic developer portfolio:
 * - 01 Hero (Massive typography, portrait cutout placeholder, live typing code panel)
 * - 02 "The Digital Universe" (3D starfield, floating tool nodes, winding glowing Catmull-Rom tube)
 * - 03 "The Time Machine" (Ascending 3D journey from 2022 to 2026, billboarded nodes, HUD radar overlay)
 * - 04 Projects Showcase (3D tilted orbit cards, code peeking, tech tags)
 * - 05 Transition Beat ("REAL PROJECTS. REAL CODE. REAL IMPACT.")
 * - 06 About Me (Noir portrait slot, "CLEAN CODE SPEAKS LOUDER.", technical pillars)
 * - 07 Finale / Contact (Dramatic diagonal flame gradient, interactive message terminal, diagnostics)
 */
export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'tools', 'journey', 'projects', 'about', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-noir-950 text-noir-text overflow-x-hidden font-sans selection:bg-flame-500 selection:text-black">
      {/* Procedural Film Grain / Scanline Overlay */}
      <NoiseOverlay />

      {/* Fluid Magnetic Custom Reticle Cursor */}
      <CustomCursor />

      {/* Floating HUD Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Orchestration Canvas & Content Sections */}
      <main className="relative z-10 flex flex-col w-full">
        <HeroSection />
        <ToolsSection />
        <JourneySection />
        <ProjectsSection />
        <TransitionBeat />
        <AboutSection />
        <ContactSection />
      </main>

      {/* Diagnostics Technical Footer */}
      <Footer />
    </div>
  );
}
