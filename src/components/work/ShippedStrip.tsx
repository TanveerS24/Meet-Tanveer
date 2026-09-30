import React from 'react';
import { Project } from '../../content/projects';
import { trackEvent } from '../../analytics/AnalyticsProvider';

interface ShippedStripProps {
  moreProjects: Project[];
}

export const ShippedStrip: React.FC<ShippedStripProps> = ({ moreProjects }) => {
  return (
    <div className="mt-space-lg p-space-md rounded-2xl bg-surface-low border border-outline-variant flex flex-col md:flex-row items-center justify-between gap-space-md overflow-hidden">
      <div className="flex items-center gap-2 text-on-surface font-label text-sm shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-primary-container" />
        <span className="font-bold">More shipped experiments:</span>
      </div>

      <div className="flex flex-wrap items-center gap-space-md text-on-surface-variant font-body text-sm">
        {moreProjects.map((p) => (
          <a
            key={p.slug}
            href={`/#/work/${p.slug}`}
            onClick={() => trackEvent('more_project_click', { project: p.slug })}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-elevated hover:text-on-surface hover:border-primary-container border border-outline-variant/40 transition-all shadow-sm group"
          >
            <span className="font-bold text-on-surface">{p.title}</span>
            <span className="text-xs text-on-surface-variant/80 hidden sm:inline">
              {p.badgeText}
            </span>
            <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform">
              north_east
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
