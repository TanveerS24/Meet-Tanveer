import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Sparkles, CheckCircle2, MessageSquare, Terminal } from 'lucide-react';
import { GithubIcon, TwitterIcon, LinkedinIcon } from '../common/Icons';
import confetti from 'canvas-confetti';
import { DEVELOPER_INFO } from '../../constants/data';
import PhotoPlaceholder from '../common/PhotoPlaceholder';

/**
 * ContactSection
 * 
 * Section 7: Finale / Contact
 * - Full-bleed dramatic diagonal gradient background (warm cream/amber -> deep red-orange -> near-black noir)
 * - Photo placeholder for strong closing portrait
 * - Large CTA: "LET'S BUILD SOMETHING EXTRAORDINARY"
 * - Interactive terminal message console
 * - Social connection links
 */
export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#ff4500', '#ff8c00', '#ffb703', '#ffffff']
      });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full py-28 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-[#120805] via-noir-950 to-noir-950"
    >
      {/* Dramatic Diagonal Flame & Amber Sunken Glow */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_80%_60%_at_80%_10%,rgba(255,69,0,0.18),transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(ellipse_60%_50%_at_20%_90%,rgba(255,140,0,0.12),transparent_70%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10 space-y-16">
        {/* Top CTA Banner */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-noir-900 border border-flame-500/40 text-xs font-mono text-flame-300 shadow-flame-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-flame-glow" />
            <span>FINALE // INITIALIZE TRANSMISSION</span>
          </motion.div>

          <h2 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-none">
            LET'S BUILD <br />
            <span className="bg-gradient-to-r from-flame-500 via-flame-300 to-amber-300 bg-clip-text text-transparent text-glow-flame">
              SOMETHING
            </span>
          </h2>

          <p className="text-base sm:text-lg font-mono text-noir-muted max-w-2xl mx-auto">
            Whether you have a breakthrough architecture to design, a mission-critical system to scale, or a visionary product to bring to life.
          </p>
        </div>

        {/* Main Grid: Closing Portrait & Interactive Terminal Contact Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Closing Portrait Photo Slot */}
          <div className="lg:col-span-5 space-y-6">
            {/*
              FOOTER / CLOSING PORTRAIT PHOTO SLOT
              Path: /src/assets/images/footer-portrait.png
              Ideal asset: High-impact dramatic closing portrait with fiery backlight
              and direct gaze.
            */}
            <PhotoPlaceholder
              src="/src/assets/images/footer-portrait.png"
              alt="Closing Portrait"
              type="portrait"
              glowColor="orange"
              idealDescription="Dramatic closing portrait with fiery warm backlight and sharp noir contrast."
              className="w-full shadow-2xl"
            />

            {/* Direct Connect Pills */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <a
                href="mailto:contact@tanveer.dev"
                className="p-3.5 rounded-xl bg-noir-900/90 border border-white/10 hover:border-flame-500/50 text-xs font-mono text-white hover:text-flame-300 transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-flame-400" />
                <span className="truncate">contact@tanveer.dev</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-noir-900/90 border border-white/10 hover:border-flame-500/50 text-xs font-mono text-white hover:text-flame-300 transition-all flex items-center gap-2.5 cursor-pointer"
              >
                <GithubIcon className="w-4 h-4 text-flame-400" />
                <span className="truncate">github.com/Tanveer</span>
              </a>
            </div>
          </div>

          {/* Interactive Message Terminal Console */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-noir-900/90 border border-flame-500/30 backdrop-blur-2xl shadow-flame-md space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-flame-400" />
                  <span className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                    TRANSMISSION TERMINAL // DIRECT PING
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-emerald-400">READY</span>
                </div>
              </div>

              {isSubmitted ? (
                <div className="py-12 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-flame-500/20 border border-flame-500/50 flex items-center justify-center text-flame-300 shadow-flame-sm">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-white">
                    Transmission Dispatched
                  </h3>
                  <p className="text-sm font-mono text-noir-muted max-w-sm">
                    Your signal has been routed. I'll review your transmission and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormState({ name: '', email: '', message: '' });
                    }}
                    className="px-6 py-2 rounded-xl bg-noir-800 border border-white/10 text-xs font-mono text-white hover:bg-noir-700 cursor-pointer"
                  >
                    SEND ANOTHER TRANSMISSION
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-widest text-noir-muted">
                        Identifier / Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="Ada Lovelace"
                        className="w-full px-4 py-3 rounded-xl bg-noir-950 border border-white/10 focus:border-flame-400 focus:outline-none text-sm font-mono text-white placeholder:text-noir-muted/40 transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-mono uppercase tracking-widest text-noir-muted">
                        Return Signal / Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="ada@domain.com"
                        className="w-full px-4 py-3 rounded-xl bg-noir-950 border border-white/10 focus:border-flame-400 focus:outline-none text-sm font-mono text-white placeholder:text-noir-muted/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] font-mono uppercase tracking-widest text-noir-muted">
                      Payload / Message
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Describe your vision, system requirements, or inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-noir-950 border border-white/10 focus:border-flame-400 focus:outline-none text-sm font-mono text-white placeholder:text-noir-muted/40 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-flame-500 via-flame-400 to-amber-500 hover:from-flame-400 hover:to-amber-400 text-black font-mono font-bold text-sm tracking-wider shadow-flame-md hover:shadow-flame-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {isSending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>TRANSMITTING SIGNAL...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>DISPATCH TRANSMISSION</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
