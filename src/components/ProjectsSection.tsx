import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { Search, ExternalLink, Sparkles, Info, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['Tous', 'AI / Voice', 'Full-Stack', 'Web App'];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesCategory =
      selectedCategory === 'Tous' || project.category === selectedCategory;
    
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Réalisations & Portfolio
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit tracking-tight">
            Mes Projets & <span className="text-gradient">Développements Web</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Découvrez une sélection de projets complets en microservices, applications web modernes et solutions assistées par l'Intelligence Artificielle.
          </p>
        </div>

        {/* Filter Tabs & Search Control */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-slate-900/60 p-3 rounded-2xl border border-slate-800 backdrop-blur-md">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Rechercher par techno, nom..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500 transition-colors"
            />
          </div>

        </div>

        {/* Projects Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 p-8 rounded-3xl glass-card border border-slate-800 space-y-3">
            <Info className="w-10 h-10 text-slate-500 mx-auto" />
            <h4 className="text-lg font-bold text-white">Aucun projet trouvé</h4>
            <p className="text-xs text-slate-400">Essayez de modifier votre mot-clé de recherche ou sélectionnez une autre catégorie.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => setActiveModalProject(project)}
                className="glass-card rounded-3xl border border-slate-800/90 hover:border-sky-500/40 p-6 flex flex-col justify-between transition-all duration-300 group glow-card cursor-pointer"
              >
                <div className="space-y-4">
                  {/* Category & Featured Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {project.category}
                    </span>
                    {project.demoUrl && (
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Live Demo
                      </span>
                    )}
                    {project.githubLinks && (
                      <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        2 Repos GitHub
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors font-outfit">
                      {project.title}
                    </h3>
                    <p className="text-xs text-sky-400/90 font-medium pt-1">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description snippet */}
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-300 border border-slate-800">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900 text-slate-400">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Action Bar */}
                <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between gap-3">
                  <span
                    className="text-xs font-semibold text-sky-400 group-hover:text-sky-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Détails & Architecture</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    {/* Multiple GitHub repos: show each as a labeled icon */}
                    {project.githubLinks && project.githubLinks.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-300 hover:border-sky-500/40 transition-colors relative group/gh"
                        title={link.label}
                      >
                        <GithubIcon className="w-4 h-4" />
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-[9px] text-slate-200 px-2 py-1 rounded whitespace-nowrap opacity-0 group-hover/gh:opacity-100 transition-opacity pointer-events-none border border-slate-700 z-10">
                          {idx === 0 ? 'Backend + Admin' : 'Client Frontend'}
                        </span>
                      </a>
                    ))}

                    {/* Single GitHub link (normal projects) */}
                    {!project.githubLinks && project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                        title="Repository GitHub"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 hover:bg-sky-500/20 transition-colors"
                        title="Voir la démo en direct"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
