'use client';

import React, { useState } from 'react';
import { SkeuoCard } from '../ui/SkeuoCard';
import { SkeuoButton } from '../ui/SkeuoButton';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { fetchApi } from '../../services/api';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetchApi<{ message: string }>('/contact', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      setStatus({
        type: 'success',
        message: res.message || 'Your message has been sent successfully!',
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setStatus({
        type: 'error',
        message: err.message || 'Failed to submit contact message. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SkeuoCard variant="panel" className="max-w-2xl mx-auto space-y-6">
      <div className="border-b border-white/10 pb-4">
        <h3 className="text-2xl font-black text-white">Direct Communication Channel</h3>
        <p className="text-sm text-slate-400">
          Send a validated message directly to the enterprise architecture backend pipeline.
        </p>
      </div>

      {status && (
        <div
          className={`p-4 rounded-xl text-sm flex items-center gap-3 border ${
            status.type === 'success'
              ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/40 shadow-inner'
              : 'bg-rose-950/80 text-rose-300 border-rose-500/40 shadow-inner'
          }`}
        >
          {status.type === 'success' ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          ) : (
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
          )}
          <span>{status.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold text-slate-300">Your Full Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Sarah Jenkins"
              className="w-full px-4 py-2.5 rounded-xl skeuo-inset-container border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-mono font-bold text-slate-300">Email Address</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="e.g. sarah@enterprise.com"
              className="w-full px-4 py-2.5 rounded-xl skeuo-inset-container border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono font-bold text-slate-300">Subject</label>
          <input
            type="text"
            required
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="e.g. Enterprise Architecture & Advisory Inquiry"
            className="w-full px-4 py-2.5 rounded-xl skeuo-inset-container border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="space-y-1.5">
          <label className="text-xs font-mono font-bold text-slate-300">Message</label>
          <textarea
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Details regarding project requirements, timeline, or consultation..."
            className="w-full px-4 py-2.5 rounded-xl skeuo-inset-container border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 resize-none"
          />
        </div>

        <div className="pt-2">
          <SkeuoButton
            type="submit"
            variant="primary"
            size="lg"
            disabled={loading}
            icon={loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            className="w-full"
          >
            {loading ? 'Transmitting Message...' : 'Send Message to Backend'}
          </SkeuoButton>
        </div>
      </form>
    </SkeuoCard>
  );
};
