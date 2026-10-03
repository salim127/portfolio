import React from 'react';
import { EDUCATION } from '../data/portfolioData';
import { GraduationCap, Calendar, CheckCircle2 } from 'lucide-react';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative bg-slate-950/40 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge text-amber-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            Diplômes & Formation
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit tracking-tight">
            Cursus <span className="text-gradient">Académique</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Formation rigoureuse en ingénierie informatique et développement web d'excellence.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/90 hover:border-amber-500/30 transition-all duration-300 space-y-5 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-600 p-0.5 shadow-lg shadow-amber-500/20">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center text-amber-400">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-slate-900 text-amber-300 border border-slate-800 flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white font-outfit">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-semibold text-sky-400 pt-1">
                    {edu.institution}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed pt-2 border-t border-slate-800/80">
                  {edu.details}
                </p>
              </div>

              <div className="pt-3 flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Parcours validé & accrédité</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
