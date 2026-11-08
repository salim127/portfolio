import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ExternalLink, Sparkles, Mic, Bot, ShoppingCart, BookOpen, MessageSquare, Zap, Globe } from 'lucide-react';

export const LiveDemosSection: React.FC = () => {
  const eduConnect = PROJECTS.find((project) => project.id === 'educonnect-django')!;
  return (
    <section id="demos" className="py-20 relative bg-slate-950/60 border-y border-slate-800/80">
      
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Déploiements Production Live (Vercel)
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit tracking-tight">
            Applications Web <span className="text-gradient">Déployées & Fonctionnelles</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Découvrez mes applications en ligne : plateformes éducatives, intelligence artificielle et services interactifs.
          </p>
        </div>

        {/* Featured Live Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-2xl">
            <div className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">EdTech & Django</span>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1"><Globe className="w-3 h-3" /> Live Vercel</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors font-outfit pt-1">{eduConnect.title}</h3>
                </div>
                <div className="w-12 h-12 flex-shrink-0 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 p-0.5 shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-emerald-400"><BookOpen className="w-6 h-6" /></div>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{eduConnect.description}</p>
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                {[
                  { label: 'Cours & Exercices', icon: BookOpen, color: 'text-cyan-400' },
                  { label: 'Objectifs & Progression', icon: Zap, color: 'text-amber-400' },
                  { label: 'Validation des Travaux', icon: MessageSquare, color: 'text-purple-400' },
                  { label: 'Analyse IA Gemini', icon: Sparkles, color: 'text-emerald-400' },
                ].map(({ label, icon: Icon, color }) => (
                  <div key={label} className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center gap-2.5"><Icon className={`w-4 h-4 flex-shrink-0 ${color}`} /><span>{label}</span></div>
                ))}
              </div>
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Technologies Utilisées</div>
              <div className="flex flex-wrap gap-1.5">
                {eduConnect.technologies.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800">{tech}</span>
                ))}
              </div>
              </div>
            </div>
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3">
              <a href={eduConnect.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-slate-400 font-mono hover:text-emerald-300 transition-colors flex items-center gap-2">Code source GitHub <ExternalLink className="w-4 h-4" /></a>
              <a href={eduConnect.demoUrl} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-md shadow-emerald-500/20 transition-all flex items-center gap-2 group-hover:scale-105">
                <span>Tester l’application</span> <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          {/* Card 1: BMP.tn */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-sky-500/40 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-2xl">
            
            <div className="space-y-6">
              {/* Header Badge & Title */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                      Marketplace BTP & IA
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                      <Globe className="w-3 h-3" /> Live Vercel
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors font-outfit pt-1">
                    BMP.tn
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 p-0.5 shadow-lg shadow-sky-500/20 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-sky-400">
                    <Bot className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Plateforme digitale pour le secteur de la construction connectant artisans, experts et fabricants. Intègre un système de recherche vocale, un chatbot intelligent pour filtrer par zone/spécialité, et l'estimation de coût de chantier basée sur un dataset.
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center gap-2.5">
                  <Mic className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Recherche Vocale</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center gap-2.5">
                  <Bot className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Chatbot Artisans/Architectes</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center gap-2.5">
                  <ShoppingCart className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Paiement Stripe & Panier</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Estimateur Devis Dataset</span>
                </div>
              </div>

              {/* Technologies Pills */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Technologies Utilisées</div>
                <div className="flex flex-wrap gap-1.5">
                  {["React.js", "Node.js", "Express.js", "Python", "MongoDB", "Stripe API", "Voice APIs"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Footer Button */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">
                bmp-4lp3jo1gn-salims-projects-c221816c.vercel.app
              </span>
              
              <a
                href="https://bmp-4lp3jo1gn-salims-projects-c221816c.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 shadow-md shadow-sky-500/20 transition-all flex items-center gap-2 group-hover:scale-105"
              >
                <span>Tester l’application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Card 2: AI English Tutor */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 hover:border-purple-500/40 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden shadow-2xl">
            
            <div className="space-y-6">
              {/* Header Badge & Title */}
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      EdTech & AI Voice
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                      <Globe className="w-3 h-3" /> Live Vercel
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors font-outfit pt-1">
                    AI English Tutor
                  </h3>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 p-0.5 shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform">
                  <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-purple-400">
                    <BookOpen className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                Application d'apprentissage de l'anglais assistée par l'Intelligence Artificielle. Offre un coaching interactif en temps réel, une correction grammaticale instantanée et un entraînement à l'expression orale.
              </p>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-purple-400 flex-shrink-0" />
                  <span>Conversation IA Vocale</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center gap-2.5">
                  <Sparkles className="w-4 h-4 text-pink-400 flex-shrink-0" />
                  <span>Correction Grammaticale</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center gap-2.5">
                  <Mic className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span>Analyse Prononciation</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Exercices Adaptatifs</span>
                </div>
              </div>

              {/* Technologies Pills */}
              <div className="space-y-2">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Technologies Utilisées</div>
                <div className="flex flex-wrap gap-1.5">
                  {["React", "TypeScript", "Tailwind CSS", "OpenAI API", "Speech Recognition", "Web Audio"].map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Footer Button */}
            <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-mono">
                ai-english-tutor-p35v9fs2u-salims-projects-c221816c.vercel.app
              </span>
              
              <a
                href="https://ai-english-tutor-p35v9fs2u-salims-projects-c221816c.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 shadow-md shadow-purple-500/20 transition-all flex items-center gap-2 group-hover:scale-105"
              >
                <span>Tester l’application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
