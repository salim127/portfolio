import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Sparkles, ArrowRight, FileText } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content (Left 7 Cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-badge backdrop-blur-md border border-sky-500/30">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-sky-300 tracking-wide uppercase">
                ESPRIT Ingénieur 3ème Année • Stage PFE & opportunités
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-outfit">
              Bonjour, je suis <br />
              <span className="text-gradient">Salim HIZI</span>
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-slate-300">
              Développeur <span className="text-sky-400 font-semibold">Full-Stack</span> & Intégrateur de Solutions <span className="text-purple-400 font-semibold">Intelligence Artificielle</span>
            </p>

            {/* Description */}
            <p className="text-base text-slate-400 max-w-2xl leading-relaxed">
              Élève Ingénieur en 3e année à <span className="text-slate-200 font-semibold">ESPRIT</span> (ex-ISET Kélibia DSI). 
              Spécialisé dans la création d'architectures web évolutives avec <span className="text-sky-300 font-mono">React, Angular, Spring Boot, NestJS, Symfony</span> et le développement de fonctionnalités d'IA intelligentes (Chatbots, Recherche Vocale, Modèles d'estimation).
            </p>

            {/* Featured Live Deployed Applications Quick Highlights */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-emerald-500 p-0.5 flex-shrink-0">
                  <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-sky-400" />
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider">Applications en Production Live</h4>
                  <p className="text-xs text-slate-400">BMP.tn (Marketplace BTP & IA) & AI English Tutor</p>
                </div>
              </div>

              <a
                href="#demos"
                className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 border border-sky-500/30 transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Tester les Démos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* CTA Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-sky-500 via-cyan-500 to-purple-600 hover:opacity-95 shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] flex items-center gap-2"
              >
                <span>Explorer Mes Projets</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.cvPath}
                download
                className="px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-all hover:scale-[1.02] flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Télécharger Mon CV (PDF)</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl text-slate-300 bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-all hover:scale-105"
                title="Profil GitHub salim127"
              >
                <GithubIcon className="w-5 h-5 text-sky-400" />
              </a>
            </div>

            {/* Key Quick Metrics */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-800/80">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-outfit">5+</div>
                <div className="text-xs text-slate-400 font-medium">Stages Réalisés</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-sky-400 font-outfit">8+</div>
                <div className="text-xs text-slate-400 font-medium">Projets Majeurs</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-purple-400 font-outfit">2</div>
                <div className="text-xs text-slate-400 font-medium">Déploiements Vercel Live</div>
              </div>
            </div>

          </div>

          {/* Right Visual Card Component (Right 5 Cols) */}
          <div className="lg:col-span-5 relative">
            
            {/* Visual Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500 via-cyan-400 to-purple-600 opacity-30 blur-xl animate-pulse-slow"></div>

              {/* Terminal / Code Card */}
              <div className="relative rounded-2xl glass-card overflow-hidden border border-slate-800 shadow-2xl">
                
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">salim-hizi-profile.ts</span>
                  <div className="w-4"></div>
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-xs text-slate-300 space-y-3 bg-[#0c1222]/90 leading-relaxed overflow-x-auto">
                  <div>
                    <span className="text-purple-400">const</span> <span className="text-sky-300">developer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span> <span className="text-emerald-300">"Salim HIZI"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">status:</span> <span className="text-emerald-300">"Élève Ingénieur ESPRIT (3e Année)"</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">stack:</span> [
                    <div className="pl-4 text-cyan-300">
                      "Spring Boot", "NestJS", "React",<br />
                      "Angular", "Symfony 6", "Python"<br />
                    </div>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">aiIntegration:</span> [
                    <span className="text-amber-300">"OpenAI API", "Voice Search", "Chatbots"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">databases:</span> [
                    <span className="text-sky-300">"PostgreSQL", "MySQL", "MongoDB"</span>
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-slate-400">passion:</span> <span className="text-emerald-300">"Architecture propre & UX performante"</span>
                  </div>
                  <div>&#125;;</div>

                  <div className="pt-2 text-slate-500 text-[11px] border-t border-slate-800">
                    // GitHub: github.com/salim127<br />
                    // Status: Ready for engineering challenges
                  </div>
                </div>

                {/* Tech Pills Display */}
                <div className="p-4 bg-slate-950/60 border-t border-slate-800/80 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-sky-500/10 text-sky-300 border border-sky-500/20">React.js</span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">Spring Boot</span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">NestJS</span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">Angular</span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">Symfony 6</span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
