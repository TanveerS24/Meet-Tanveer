import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';
import { DEVELOPER_INFO } from '../../constants/data';

/**
 * Navbar
 * Cinematic floating HUD navigation bar with sound synth toggle,
 * section tracker, and status diagnostics.
 */
export default function Navbar({ activeSection }) {
  const [isMuted, setIsMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Web Audio API ambient hum synth trigger (no external audio files required)
  const toggleSound = () => {
    setIsMuted(!isMuted);
    if (isMuted) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          const ctx = new AudioContext();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(440, ctx.currentTime);
          osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
          gain.gain.setValueAtTime(0.08, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.start();
          osc.stop(ctx.currentTime + 0.25);
        }
      } catch (e) {
        // Ignore audio block
      }
    }
  };

  const navLinks = [
    { label: "01 // ECOSYSTEM", href: "#tools" },
    { label: "02 // JOURNEY", href: "#journey" },
    { label: "03 // PROJECTS", href: "#projects" },
    { label: "04 // ABOUT", href: "#about" },
    { label: "05 // CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8 py-3.5 ${
        scrolled
          ? 'bg-noir-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand / Monogram */}
        <a
          href="#"
          className="flex items-center gap-2.5 group cursor-pointer"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-flame-500 to-flame-300 p-[1px] shadow-flame-sm group-hover:shadow-flame-md transition-shadow">
            <div className="w-full h-full bg-noir-900 rounded-[7px] flex items-center justify-center">
              <span className="font-display font-extrabold text-sm text-flame-300">T</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wider text-noir-text group-hover:text-flame-300 transition-colors">
              {DEVELOPER_INFO.name}
            </span>
            <span className="text-[9px] font-mono text-flame-400 tracking-widest uppercase">
              PORTFOLIO // 2026
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-noir-900/80 border border-white/10 backdrop-blur-md">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 rounded-full text-xs font-mono text-noir-muted hover:text-white hover:bg-white/5 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right HUD Controls */}
        <div className="flex items-center gap-3">
          {/* Sound Toggle Button */}
          <button
            onClick={toggleSound}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-noir-900/80 border border-white/10 hover:border-flame-500/50 text-xs font-mono text-noir-muted hover:text-flame-300 transition-all cursor-pointer"
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-noir-muted" />
                <span className="hidden sm:inline text-[10px]">SOUND: OFF</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-flame-400 animate-pulse" />
                <span className="hidden sm:inline text-[10px] text-flame-400">SOUND: ON</span>
              </>
            )}
          </button>

          {/* Quick Connect CTA */}
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-flame-500 to-amber-500 hover:from-flame-400 hover:to-amber-400 text-black font-semibold text-xs font-mono tracking-wide shadow-flame-sm hover:shadow-flame-md transition-all duration-300 cursor-pointer"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-noir-900 border border-white/10 text-noir-text"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-4 rounded-2xl bg-noir-900/95 border border-flame-500/30 backdrop-blur-2xl space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-mono text-noir-text hover:bg-flame-500/20 hover:text-flame-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center py-2.5 rounded-xl bg-flame-500 text-black font-mono font-bold text-sm shadow-flame-sm"
          >
            INITIALIZE CONTACT
          </a>
        </div>
      )}
    </header>
  );
}
