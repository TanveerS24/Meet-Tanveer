/**
 * HIDDEN OWNER ROUTE: /#/owner
 * NOTE: This passcode gate is ONLY a client-side convenience lock, not cryptographic security.
 * Sensitive data should NEVER be stored here—keep real analytics/form responses behind third-party logins.
 */

import React, { useState, useEffect } from 'react';
import { trackEvent } from '../analytics/AnalyticsProvider';

interface RecruiterLead {
  id: string;
  company: string;
  contactName: string;
  roleTitle: string;
  status: 'contacted' | 'interviewing' | 'offer' | 'archived';
  notes: string;
  dateAdded: string;
}

export const OwnerDashboard: React.FC = () => {
  const [passcode, setPasscode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Trackable link generator state
  const [companyRef, setCompanyRef] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);

  // Recruiter CRM state (Stored in localStorage - per browser!)
  const [leads, setLeads] = useState<RecruiterLead[]>(() => {
    try {
      const saved = localStorage.getItem('owner_recruiter_leads');
      return saved ? JSON.parse(saved) : [
        {
          id: '1',
          company: 'Roche',
          contactName: 'Immersive Tech Team',
          roleTitle: 'AR Prototyping Intern',
          status: 'interviewing',
          notes: 'Followed up after SIH 2025 announcement.',
          dateAdded: '2026-09-20',
        }
      ];
    } catch (e) {
      return [];
    }
  });

  const [newCompany, setNewCompany] = useState('');
  const [newContact, setNewContact] = useState('');
  const [newRole, setNewRole] = useState('');

  // Checklist state
  const [checklist, setChecklist] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('owner_checklist');
      return saved ? JSON.parse(saved) : {
        'update_leetcode': true,
        'review_analytics': false,
        'check_inbox': false,
        'update_resume_pdf': false,
      };
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('owner_recruiter_leads', JSON.stringify(leads));
  }, [leads]);

  useEffect(() => {
    localStorage.setItem('owner_checklist', JSON.stringify(checklist));
  }, [checklist]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default passcode if env var not set: 'tanveer2026'
    const validPasscode = import.meta.env.VITE_OWNER_PASSCODE || 'tanveer2026';
    if (passcode === validPasscode) {
      setIsAuthenticated(true);
      setErrorMsg('');
      trackEvent('owner_login_success');
    } else {
      setErrorMsg('Incorrect passcode. Please check your .env configuration.');
    }
  };

  const generateTrackableLink = () => {
    const slug = companyRef.trim().toLowerCase().replace(/\s+/g, '-');
    const baseUrl = window.location.origin + window.location.pathname;
    return `${baseUrl}?ref=${encodeURIComponent(slug)}`;
  };

  const copyToClipboard = () => {
    const link = generateTrackableLink();
    navigator.clipboard.writeText(link);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const addLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCompany.trim()) return;
    const item: RecruiterLead = {
      id: Date.now().toString(),
      company: newCompany,
      contactName: newContact || 'N/A',
      roleTitle: newRole || 'Software Engineer',
      status: 'contacted',
      notes: '',
      dateAdded: new Date().toISOString().split('T')[0],
    };
    setLeads([item, ...leads]);
    setNewCompany('');
    setNewContact('');
    setNewRole('');
  };

  const deleteLead = (id: string) => {
    setLeads(leads.filter((l) => l.id !== id));
  };

  const exportLeadsJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(leads, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "tanveer_recruiter_leads.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const toggleChecklist = (key: string) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-surface flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-surface-elevated rounded-card border border-outline-variant p-space-lg shadow-xl text-center">
          <div className="w-12 h-12 rounded-full bg-primary-container/20 text-primary-container flex items-center justify-center mx-auto mb-3">
            <span className="material-symbols-outlined text-[24px]">lock</span>
          </div>
          <h1 className="font-headline font-bold text-2xl text-on-surface mb-1">Owner Dashboard</h1>
          <p className="font-body text-xs text-on-surface-variant mb-4">
            Passcode required. (Default local passcode: <code className="font-code text-primary">tanveer2026</code>)
          </p>

          <form onSubmit={handleLogin} className="space-y-3">
            <input
              type="password"
              placeholder="Enter passcode..."
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              className="w-full h-12 px-4 rounded-xl bg-surface-low border border-outline-variant text-on-surface font-code text-sm text-center outline-none focus:border-sky"
            />
            {errorMsg && <p className="font-body text-xs text-primary-container font-semibold">{errorMsg}</p>}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-primary-container text-white font-label font-bold text-sm hover:bg-primary transition-colors"
            >
              Unlock Dashboard
            </button>
          </form>

          <p className="mt-4 text-[11px] text-on-surface-variant/70 italic">
            *Convenience lock only. Per-browser features like Recruiter CRM are stored in local storage.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface p-space-md md:p-space-xl">
      <div className="max-w-[1200px] mx-auto space-y-space-lg">
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-space-md rounded-card bg-surface-elevated border border-outline-variant shadow-sm">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-code text-secondary font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
              <span>S Tanveer Muhammed — Control Center</span>
            </div>
            <h1 className="font-headline text-2xl md:text-3xl font-extrabold text-on-surface">
              Owner Dashboard
            </h1>
          </div>
          <button
            type="button"
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 rounded-full bg-surface-low text-on-surface font-label text-xs font-semibold hover:bg-surface-container"
          >
            Lock Dashboard
          </button>
        </div>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          {/* Tile 1: Trackable Link Generator */}
          <div className="rounded-card bg-surface-elevated border border-outline-variant p-space-md space-y-3">
            <h3 className="font-headline font-bold text-lg text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container">link</span>
              <span>Trackable Link Generator (?ref=)</span>
            </h3>
            <p className="font-body text-xs text-on-surface-variant">
              Generate custom URLs for recruiters or applications to track which company clicked your link.
            </p>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Company Name (e.g. Roche, Google)"
                value={companyRef}
                onChange={(e) => setCompanyRef(e.target.value)}
                className="flex-1 h-11 px-3 rounded-xl bg-surface-low border border-outline-variant text-on-surface font-code text-xs outline-none focus:border-sky"
              />
              <button
                type="button"
                onClick={copyToClipboard}
                disabled={!companyRef.trim()}
                className="px-4 py-2 rounded-xl bg-primary-container text-white font-label text-xs font-bold hover:bg-primary disabled:opacity-50"
              >
                {copiedLink ? 'Copied! ✓' : 'Copy Link'}
              </button>
            </div>

            {companyRef && (
              <div className="p-2.5 rounded-lg bg-surface-low font-code text-xs text-on-surface break-all border border-outline-variant/40">
                {generateTrackableLink()}
              </div>
            )}
          </div>

          {/* Tile 2: Monthly "Keep It Fresh" Checklist */}
          <div className="rounded-card bg-surface-elevated border border-outline-variant p-space-md space-y-3">
            <h3 className="font-headline font-bold text-lg text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-tertiary">checklist</span>
              <span>Monthly "Keep It Fresh" Checklist</span>
            </h3>

            <div className="space-y-2 text-sm">
              {[
                { key: 'update_leetcode', label: 'Update LeetCode solved count & streak in stats.ts' },
                { key: 'review_analytics', label: 'Review GoatCounter / Cloudflare analytics for ?ref= logs' },
                { key: 'check_inbox', label: 'Check Web3Forms inbox for recruiter pings' },
                { key: 'update_resume_pdf', label: 'Verify resume PDF download link in profile.ts' },
              ].map((task) => (
                <label key={task.key} className="flex items-center gap-3 cursor-pointer p-2 rounded-lg bg-surface-low hover:bg-surface-container">
                  <input
                    type="checkbox"
                    checked={!!checklist[task.key]}
                    onChange={() => toggleChecklist(task.key)}
                    className="w-4 h-4 accent-primary-container rounded"
                  />
                  <span className={`font-body text-xs ${checklist[task.key] ? 'line-through text-on-surface-variant' : 'text-on-surface font-medium'}`}>
                    {task.label}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Recruiter CRM Table (Per-browser LocalStorage) */}
        <div className="rounded-card bg-surface-elevated border border-outline-variant p-space-md md:p-space-lg space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h3 className="font-headline font-bold text-xl text-on-surface">Recruiter Tracker CRM</h3>
              <p className="font-body text-xs text-on-surface-variant">
                *Stored locally in this browser. Export to JSON to transfer between devices.
              </p>
            </div>
            <button
              type="button"
              onClick={exportLeadsJSON}
              className="px-4 py-2 rounded-full bg-surface-low text-on-surface font-label text-xs font-semibold border border-outline-variant hover:bg-surface-container w-fit"
            >
              Export JSON 📥
            </button>
          </div>

          {/* Add New Lead Form */}
          <form onSubmit={addLead} className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-2">
            <input
              type="text"
              placeholder="Company (e.g. Roche)"
              required
              value={newCompany}
              onChange={(e) => setNewCompany(e.target.value)}
              className="h-10 px-3 rounded-xl bg-surface-low border border-outline-variant text-on-surface font-body text-xs"
            />
            <input
              type="text"
              placeholder="Contact Name"
              value={newContact}
              onChange={(e) => setNewContact(e.target.value)}
              className="h-10 px-3 rounded-xl bg-surface-low border border-outline-variant text-on-surface font-body text-xs"
            />
            <input
              type="text"
              placeholder="Role Title"
              value={newRole}
              onChange={(e) => setNewRole(e.target.value)}
              className="h-10 px-3 rounded-xl bg-surface-low border border-outline-variant text-on-surface font-body text-xs"
            />
            <button
              type="submit"
              className="h-10 px-4 rounded-xl bg-primary-container text-white font-label text-xs font-bold hover:bg-primary"
            >
              + Add Lead
            </button>
          </form>

          {/* Leads Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left font-body text-xs">
              <thead className="bg-surface-low font-code text-on-surface-variant uppercase text-[11px]">
                <tr>
                  <th className="p-3">Company</th>
                  <th className="p-3">Contact</th>
                  <th className="p-3">Role</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30">
                {leads.map((l) => (
                  <tr key={l.id} className="hover:bg-surface-low/50">
                    <td className="p-3 font-bold text-on-surface">{l.company}</td>
                    <td className="p-3 text-on-surface-variant">{l.contactName}</td>
                    <td className="p-3 text-on-surface-variant">{l.roleTitle}</td>
                    <td className="p-3 font-code text-on-surface-variant">{l.dateAdded}</td>
                    <td className="p-3">
                      <button
                        type="button"
                        onClick={() => deleteLead(l.id)}
                        className="text-primary-container hover:underline font-semibold"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
