import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Code2, ArrowUp, Heart } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/80 py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Rights */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
            <Code2 className="w-4 h-4" />
          </div>
          <div className="text-xs text-slate-400">
            © {new Date().getFullYear()} <span className="text-white font-semibold">{PERSONAL_INFO.name}</span>. Tous droits réservés.
          </div>
        </div>

        {/* Center Tagline */}
        <div className="text-xs text-slate-500 flex items-center gap-1 font-mono">
          <span>Conçu avec</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>React, TypeScript & Tailwind CSS</span>
        </div>

        {/* Links & Back to Top */}
        <div className="flex items-center gap-4">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-slate-400 hover:text-white transition-colors flex items-center gap-1"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Profile</span>
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
            title="Retour en haut"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
