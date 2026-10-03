import React from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Code, Server, Layout, Database, Terminal, Cpu, CheckCircle } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5 text-sky-400" />;
      case 'Server': return <Server className="w-5 h-5 text-purple-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-amber-400" />;
      default: return <Cpu className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            Stack & Compétences
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit tracking-tight">
            Boîte à Outils & <span className="text-gradient">Technologies</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Un aperçu des langages, frameworks, bases de données et outils que je maîtrise pour concrétiser des applications web et intelligentes.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_CATEGORIES.map((catGroup) => (
            <div
              key={catGroup.category}
              className="glass-card rounded-3xl p-6 sm:p-7 border border-slate-800/90 hover:border-sky-500/30 transition-all duration-300 space-y-6 shadow-xl"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
                  {getIcon(catGroup.iconName)}
                </div>
                <h3 className="text-lg font-bold text-white font-outfit">
                  {catGroup.category}
                </h3>
              </div>

              {/* Skills Progress List */}
              <div className="space-y-4">
                {catGroup.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-medium">
                      <span className="text-slate-200 flex items-center gap-1.5 font-mono">
                        <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
                        {skill.name}
                      </span>
                      <span className="text-slate-400 font-mono">{skill.level}%</span>
                    </div>

                    {/* Progress Meter */}
                    <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden border border-slate-800">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-sky-500 via-cyan-400 to-purple-500 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
