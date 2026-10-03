import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Code2, Menu, X, FileDown, Sparkles } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#hero' },
    { name: 'Démos Live', href: '#demos' },
    { name: 'Projets', href: '#projects' },
    { name: 'Parcours & Stages', href: '#experience' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Formation', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-lg shadow-sky-950/20' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 via-cyan-400 to-purple-600 p-[2px] shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#0b0f19] rounded-[10px] flex items-center justify-center">
              <Code2 className="w-5 h-5 text-sky-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-white font-outfit tracking-tight flex items-center gap-1.5">
              Salim <span className="text-sky-400">HIZI</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Full-Stack & AI Engineer</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white shadow-md shadow-sky-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.cvPath}
            download
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 transition-all hover:scale-105"
            title="Télécharger CV Salim HIZI"
          >
            <FileDown className="w-4 h-4 text-sky-400" />
            <span>CV</span>
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-white bg-slate-900 border border-slate-700 hover:border-sky-500/50 hover:bg-slate-800 transition-all hover:scale-105 shadow-sm"
          >
            <GithubIcon className="w-4 h-4 text-sky-400" />
            <span>GitHub</span>
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-sky-500 via-cyan-500 to-purple-600 hover:opacity-95 shadow-md shadow-sky-500/20 transition-all hover:scale-105"
          >
            <Sparkles className="w-4 h-4" />
            <span>Contact</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-slate-800 px-4 pt-4 pb-6 mt-3 space-y-3">
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-xs font-medium text-slate-200 bg-slate-900/80 border border-slate-800 hover:bg-sky-500/10 hover:border-sky-500/30 hover:text-sky-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
            <a
              href={PERSONAL_INFO.cvPath}
              download
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold text-slate-200 bg-slate-800 border border-slate-700"
            >
              <FileDown className="w-4 h-4 text-sky-400" />
              Télécharger CV
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sky-400"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
