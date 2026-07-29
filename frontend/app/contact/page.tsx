'use client';

import React from 'react';
import { PageContainer } from '../../components/layout/PageContainer';
import { ContactForm } from '../../components/contact/ContactForm';
import { SkeuoCard } from '../../components/ui/SkeuoCard';
import { Mail, MapPin, Globe, ShieldCheck } from 'lucide-react';

export default function ContactPage() {
  return (
    <PageContainer
      title="Contact & Consultation"
      subtitle="Reach out regarding enterprise architecture advisory, technical leadership, or high-scale system design."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form */}
        <div className="lg:col-span-8">
          <ContactForm />
        </div>

        {/* Direct Contact Info Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <SkeuoCard variant="panel" className="space-y-4">
            <h3 className="text-lg font-bold text-white border-b border-white/10 pb-3">
              Direct Contact Details
            </h3>

            <div className="space-y-4 text-xs">
              <div className="flex items-center gap-3 p-3 rounded-xl skeuo-inset-container">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <div>
                  <div className="text-slate-400">Email Address</div>
                  <a href="mailto:contact@tanveers24.dev" className="font-bold text-white hover:text-blue-400">
                    contact@tanveers24.dev
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl skeuo-inset-container">
                <MapPin className="w-5 h-5 text-rose-400 shrink-0" />
                <div>
                  <div className="text-slate-400">Location</div>
                  <div className="font-bold text-white">Bengaluru, India (UTC +5:30)</div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-xl skeuo-inset-container">
                <Globe className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-slate-400">Availability Status</div>
                  <div className="font-bold text-emerald-400">Open for Architecture Advisory & Lead Roles</div>
                </div>
              </div>
            </div>
          </SkeuoCard>
        </div>
      </div>
    </PageContainer>
  );
}
