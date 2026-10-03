import React from 'react';
import type { Project } from '../data/portfolioData';
import { X, ExternalLink, CheckCircle2, Sparkles, Server, GitBranch } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card rounded-3xl border border-slate-700 p-6 sm:p-8 shadow-2xl space-y-6 text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Title */}
        <div className="space-y-2 pr-8">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
              {project.category}
            </span>
            {project.demoUrl && (
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Live Production
              </span>
            )}
          </div>
          
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">
            {project.title}
          </h3>
          
          <p className="text-sm font-medium text-sky-300">
            {project.tagline}
          </p>
        </div>

        {/* Overview Description */}
        <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
          <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Présentation du Projet</h4>
          <p className="text-sm text-slate-300 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-3">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2 font-outfit">
            <Sparkles className="w-4 h-4 text-sky-400" />
            Fonctionnalités Clés
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {project.features.map((feature, idx) => (
              <div key={idx} className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture details if available */}
        {project.architecture && (
          <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-2">
            <h4 className="text-xs font-mono uppercase text-sky-400 tracking-wider flex items-center gap-2">
              <Server className="w-4 h-4" />
              Architecture Technique
            </h4>
            <p className="text-xs text-slate-300 font-mono leading-relaxed">
              {project.architecture}
            </p>
          </div>
        )}

        {/* Technologies Badge List */}
        <div className="space-y-2">
          <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Stack & Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-800 text-slate-200 border border-slate-700">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="pt-4 border-t border-slate-800 space-y-4">
          
          {/* Multiple GitHub Repos Section */}
          {project.githubLinks && project.githubLinks.length > 0 && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-2">
                <GitBranch className="w-3.5 h-3.5 text-sky-400" />
                Repositories GitHub — Même Projet, 2 dépôts
              </h4>
              {project.githubLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-sky-500/40 hover:bg-slate-900 transition-all group"
                >
                  <div className="mt-0.5 w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center flex-shrink-0 group-hover:border-sky-500/30">
                    <GithubIcon className="w-4 h-4 text-sky-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-bold text-white group-hover:text-sky-300 transition-colors">
                        {link.label}
                      </span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-sky-400 flex-shrink-0 transition-colors" />
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{link.description}</p>
                    <span className="text-[10px] font-mono text-sky-500/70 mt-1 block truncate">{link.url.replace('https://github.com/', '')}</span>
                  </div>
                </a>
              ))}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-sky-500 to-cyan-500 hover:opacity-95 shadow-md shadow-sky-500/20 transition-all flex items-center gap-2"
                >
                  <span>Accéder à la Démo Live</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}

              {/* Single GitHub link (for non-multi-repo projects) */}
              {!project.githubLinks && project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl font-semibold text-xs text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all flex items-center gap-2"
                >
                  <GithubIcon className="w-4 h-4 text-sky-400" />
                  <span>Repository GitHub</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
            >
              Fermer
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
