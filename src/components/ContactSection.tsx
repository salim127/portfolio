import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check, FileDown, MessageSquare, Sparkles } from 'lucide-react';
import { GithubIcon } from './GithubIcon';

export const ContactSection: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger mailto link as fallback
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(formData.subject || 'Prise de contact Portfolio')}&body=${encodeURIComponent(`Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoUrl;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-badge text-sky-400 text-xs font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" />
            Restons en Contact
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-outfit tracking-tight">
            Travaillons <span className="text-gradient">Ensemble</span>
          </h2>
          
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Vous recherchez un développeur full-stack rigoureux et autonome pour un Stage PFE ou un projet innovant ? Écrivez-moi directement !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white font-outfit">
                Coordonnées Directes
              </h3>

              <div className="space-y-4">
                {/* Email Box */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800/90 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">Email Officiel</div>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs sm:text-sm font-semibold text-white hover:text-sky-300 transition-colors">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="Copier l'email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Box */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800/90 flex items-center justify-between gap-3 group">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">Téléphone</div>
                      <a href={`tel:${PERSONAL_INFO.phone}`} className="text-xs sm:text-sm font-semibold text-white hover:text-purple-300 transition-colors">
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                    title="Copier le téléphone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Box */}
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800/90 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">Localisation</div>
                    <div className="text-xs sm:text-sm font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>

                {/* GitHub Box */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800/90 flex items-center justify-between hover:border-sky-500/40 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-sky-400">
                      <GithubIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">GitHub Profile</div>
                      <div className="text-xs sm:text-sm font-semibold text-white group-hover:text-sky-300">
                        github.com/salim127
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* CV Download CTA Banner */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-sky-500/10 to-purple-500/10 border border-sky-500/20 space-y-3">
                <div className="text-xs font-semibold text-slate-200">
                  Besoin du CV au format PDF ?
                </div>
                <a
                  href={PERSONAL_INFO.cvPath}
                  download
                  className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors flex items-center justify-center gap-2"
                >
                  <FileDown className="w-4 h-4 text-sky-400" />
                  <span>Télécharger Salim_HIZI_CV.pdf</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Contact Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl relative">
              
              <h3 className="text-xl font-bold text-white font-outfit mb-6">
                Envoyer un Message
              </h3>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3 animate-fadeIn">
                  <Sparkles className="w-10 h-10 text-emerald-400 mx-auto animate-bounce" />
                  <h4 className="text-lg font-bold text-white">Merci pour votre message !</h4>
                  <p className="text-xs text-slate-300">
                    Votre client de messagerie a été ouvert avec les données pré-remplies. Je vous répondrai dans les plus brefs délais !
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Votre Nom</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Jean Dupont"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">Votre Email</label>
                      <input
                        type="email"
                        required
                        placeholder="jean.dupont@entreprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Sujet / Motif</label>
                    <input
                      type="text"
                      placeholder="Ex: Proposition de Stage PFE / Mission Full-Stack"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Bonjour Salim, j'ai parcouru ton portfolio et..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 placeholder-slate-500 text-xs focus:outline-none focus:border-sky-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-sky-500 via-cyan-500 to-purple-600 hover:opacity-95 shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Envoyer le Message Direct</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
