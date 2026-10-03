import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge text-purple-400 text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            Parcours Professionnel
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit tracking-tight">
            Expériences & <span className="text-gradient">Stages Réalisés</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            5 immersions professionnelles réussies combinant développement web full-stack, intégration de logiciels BPM et architecture logicielle d'entreprise.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-slate-800 ml-4 md:ml-32 space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-6 md:pl-10 group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-slate-950 border-2 border-sky-500 flex items-center justify-center shadow-lg shadow-sky-500/20 group-hover:scale-110 group-hover:border-purple-400 transition-all">
                <div className="w-2.5 h-2.5 rounded-full bg-sky-400 group-hover:bg-purple-400 transition-colors"></div>
              </div>

              {/* Period Date Badge (Left on desktop) */}
              <div className="hidden md:block absolute -left-36 top-2 text-xs font-mono font-semibold text-slate-400 w-28 text-right">
                {exp.period}
              </div>

              {/* Main Content Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/80 hover:border-sky-500/30 transition-all duration-300 space-y-4 shadow-xl">
                
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-sky-500/10 text-sky-400 border border-sky-500/25">
                        {exp.type}
                      </span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-outfit pt-1">
                      {exp.role}
                    </h3>
                    
                    <div className="flex items-center gap-3 text-xs text-sky-300 font-medium pt-0.5">
                      <span className="flex items-center gap-1">
                        <Building2 className="w-3.5 h-3.5 text-slate-400" />
                        {exp.company}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-slate-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Mobile Period Badge */}
                  <div className="md:hidden flex items-center gap-1 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 self-start">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullet Highlights */}
                <div className="space-y-2.5">
                  {exp.description.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  <span className="text-xs font-mono text-slate-400 mr-1 self-center">Stack:</span>
                  {exp.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 text-slate-300 border border-slate-800">
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
