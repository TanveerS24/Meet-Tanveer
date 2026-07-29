'use client';

import React, { useState } from 'react';
import { ProjectItem } from '../../types/portfolio';
import { SkeuoCard } from '../ui/SkeuoCard';
import { SkeuoBadge } from '../ui/SkeuoBadge';
import { SkeuoButton } from '../ui/SkeuoButton';
import { SkeuoModal } from '../ui/SkeuoModal';
import { Github, ExternalLink, Sparkles, Layers } from 'lucide-react';

interface ProjectGridProps {
  projects: ProjectItem[];
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({ projects }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['ALL', ...Array.from(new Set(projects.map((p) => p.category)))];

  const filtered =
    selectedCategory === 'ALL' ? projects : projects.filter((p) => p.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 p-2 rounded-2xl skeuo-inset-container border border-white/5">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
              selectedCategory === cat
                ? 'bg-gradient-to-b from-blue-600 to-blue-800 text-white shadow-skeuo-button border border-blue-400/40'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((proj) => (
          <SkeuoCard key={proj.id} variant="panel" className="flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-xl font-bold text-white tracking-tight">{proj.title}</h3>
                {proj.featured && (
                  <SkeuoBadge variant="amber" size="sm">
                    <Sparkles className="w-3 h-3 mr-1 inline" /> Featured
                  </SkeuoBadge>
                )}
              </div>

              <p className="text-sm text-slate-300 line-clamp-3 leading-relaxed">
                {proj.description}
              </p>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {proj.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-slate-900 px-2.5 py-1 rounded-lg border border-white/5 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <SkeuoButton
                variant="secondary"
                size="sm"
                icon={<Layers className="w-4 h-4" />}
                onClick={() => setActiveModalProject(proj)}
              >
                Inspect Specs
              </SkeuoButton>

              <div className="flex items-center gap-2">
                {proj.repoUrl && (
                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl skeuo-btn text-slate-300 hover:text-white"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-xl skeuo-btn text-blue-400 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </SkeuoCard>
        ))}
      </div>

      {/* Modal View */}
      <SkeuoModal
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
        title={activeModalProject?.title || ''}
      >
        {activeModalProject && (
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <SkeuoBadge variant="blue">{activeModalProject.category}</SkeuoBadge>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {activeModalProject.longDescription || activeModalProject.description}
            </p>
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-mono font-bold text-slate-400 uppercase">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono bg-slate-900 px-3 py-1.5 rounded-lg border border-white/10 text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
              {activeModalProject.repoUrl && (
                <a href={activeModalProject.repoUrl} target="_blank" rel="noreferrer">
                  <SkeuoButton variant="metal" icon={<Github className="w-4 h-4" />}>
                    GitHub Repository
                  </SkeuoButton>
                </a>
              )}
              {activeModalProject.demoUrl && (
                <a href={activeModalProject.demoUrl} target="_blank" rel="noreferrer">
                  <SkeuoButton variant="primary" icon={<ExternalLink className="w-4 h-4" />}>
                    Live Application
                  </SkeuoButton>
                </a>
              )}
            </div>
          </div>
        )}
      </SkeuoModal>
    </div>
  );
};
