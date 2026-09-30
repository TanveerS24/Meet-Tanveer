import React, { useState } from 'react';
import { profileData } from '../../content/profile';
import { trackEvent } from '../../analytics/AnalyticsProvider';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent discard for spam bots

    setStatus('loading');
    trackEvent('form_submit_attempt');

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      // Fallback: Mailto link if no API key set
      const mailtoUrl = `mailto:${profileData.email}?subject=Portfolio Ping from ${encodeURIComponent(
        formData.name
      )}&body=${encodeURIComponent(formData.message)}`;
      window.location.href = mailtoUrl;
      setStatus('success');
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio ping from ${formData.name}`,
        }),
      });

      const resData = await response.json();
      if (resData.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '', honeypot: '' });
        trackEvent('form_submit_success');
      } else {
        setStatus('error');
        setErrorMessage(resData.message || 'Something went wrong. Please try again.');
        trackEvent('form_submit_error');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Falling back to email client...');
      window.location.href = `mailto:${profileData.email}?subject=Portfolio Ping&body=${encodeURIComponent(
        formData.message
      )}`;
    }
  };

  return (
    <section className="w-full bg-primary-container text-white py-space-xl px-margin-mobile md:px-margin mt-space-lg relative overflow-hidden" id="contact">
      {/* Ambient Circle Graphic Overlay */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />

      <div className="max-w-[1120px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center relative z-10">
        {/* Left Column info */}
        <div className="lg:col-span-6 space-y-space-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white font-label text-xs backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-white" />
            <span>Let's collaborate</span>
          </div>

          <h2 className="font-headline text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Let's build something extraordinary together!
          </h2>

          <p className="font-body text-base md:text-lg text-white/90 max-w-md">
            Currently interviewing for 2026 SWE internships and full-time software engineering roles. Drop a note or connect directly!
          </p>

          <div className="flex flex-wrap items-center gap-space-sm pt-2">
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('outbound_click', { target: 'linkedin' })}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-on-surface font-label text-sm font-bold hover:bg-surface-low transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">link</span>
              <span>LinkedIn</span>
            </a>

            <a
              href={profileData.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackEvent('outbound_click', { target: 'github' })}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white text-on-surface font-label text-sm font-bold hover:bg-surface-low transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px] text-primary">terminal</span>
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${profileData.email}`}
              onClick={() => trackEvent('outbound_click', { target: 'email_direct' })}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/20 border border-white/40 text-white font-label text-sm font-semibold hover:bg-white hover:text-on-surface transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              <span>{profileData.email}</span>
            </a>
          </div>
        </div>

        {/* Right Column Form Card */}
        <div className="lg:col-span-6">
          <div className="rounded-card bg-surface-elevated text-on-surface p-space-md md:p-space-lg shadow-2xl border border-outline-variant">
            <h3 className="font-headline text-xl md:text-2xl font-bold mb-1 text-on-surface">
              Send a quick ping
            </h3>
            <p className="font-body text-xs md:text-sm text-on-surface-variant mb-space-md">
              I typically respond within 12 business hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-space-sm">
              {/* Spam Honeypot */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label className="block font-label text-xs text-on-surface-variant mb-1 font-semibold">
                  Your Name or Company
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Roche Talent Team / Alex Chen"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full h-12 px-space-md rounded-xl bg-surface-low border border-outline-variant text-on-surface font-body text-sm focus:border-sky focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-label text-xs text-on-surface-variant mb-1 font-semibold">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="recruiter@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full h-12 px-space-md rounded-xl bg-surface-low border border-outline-variant text-on-surface font-body text-sm focus:border-sky focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block font-label text-xs text-on-surface-variant mb-1 font-semibold">
                  Message
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="We saw your SIH winner project and would love to chat..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-space-md rounded-xl bg-surface-low border border-outline-variant text-on-surface font-body text-sm focus:border-sky focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3.5 rounded-xl bg-primary-container text-white font-label text-sm font-bold hover:bg-primary transition-all shadow-coral-btn hover:-translate-y-0.5 active:translate-y-0.5 active:shadow-none flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send message</span>
                    <span className="material-symbols-outlined text-[18px]">send</span>
                  </>
                )}
              </button>
            </form>

            {/* Paper Plane Success State */}
            {status === 'success' && (
              <div className="mt-3 p-3.5 rounded-xl bg-secondary-container/50 border border-secondary/30 text-secondary font-label text-sm flex items-center gap-2 animate-bounce">
                <span className="material-symbols-outlined text-[20px]">mark_email_read</span>
                <span>Message sent! Tanveer has received your ping.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="mt-3 p-3.5 rounded-xl bg-primary-container/20 border border-primary-container/40 text-primary-container font-label text-sm">
                {errorMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
