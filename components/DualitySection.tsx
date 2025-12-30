import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { PERSONAS } from '../constants';

interface DualitySectionProps {
  lang: Language;
}

const DualitySection: React.FC<DualitySectionProps> = ({ lang }) => {
  return (
    <section id="duality" className="py-24 bg-slate-50 dark:bg-navy-900 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-4xl font-serif text-slate-900 dark:text-white mb-4 ${lang === 'bn' ? 'font-bengali' : ''}`}
          >
            {lang === 'en' ? 'The Resonance of Duality' : 'দ্বৈত সত্তার অনুরণন'}
          </motion.h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {PERSONAS.map((persona, index) => {
            const Icon = persona.icon;
            // Adjust theme colors for light/dark
            const themeColorClass = persona.themeColor === 'text-blue-400' 
                ? 'text-blue-600 dark:text-blue-400' 
                : 'text-gold-600 dark:text-gold-400';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200/[0.5] dark:from-white/[0.03] to-transparent rounded-lg transform transition-transform group-hover:scale-[1.02]"></div>
                <div className="relative p-8 md:p-12 border border-slate-200 dark:border-white/10 rounded-lg glass h-full flex flex-col items-center text-center bg-white dark:bg-transparent shadow-lg dark:shadow-none">
                  <div className={`p-4 rounded-full bg-slate-100 dark:bg-navy-800 mb-6 ${themeColorClass} ring-1 ring-slate-200 dark:ring-white/10`}>
                    <Icon size={32} />
                  </div>
                  
                  <h3 className={`text-sm uppercase tracking-[0.2em] mb-2 text-slate-500 dark:text-slate-400 ${lang === 'bn' ? 'font-bengali' : ''}`}>
                    {persona.role[lang]}
                  </h3>
                  
                  <h4 className={`text-2xl font-serif font-bold text-slate-800 dark:text-white mb-6 ${lang === 'bn' ? 'font-bengali' : ''}`}>
                    {persona.title[lang]}
                  </h4>
                  
                  <p className={`text-slate-600 dark:text-slate-300 leading-relaxed font-light ${lang === 'bn' ? 'font-bengali text-lg' : ''}`}>
                    {persona.description[lang]}
                  </p>

                  <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/5 w-full">
                     <span className={`text-xs uppercase tracking-widest opacity-80 ${themeColorClass}`}>
                        {index === 0 ? (lang === 'en' ? 'Duty & Discipline' : 'কর্তব্য ও শৃঙ্খলা') : (lang === 'en' ? 'Breath & Melody' : 'শ্বাস ও সুর')}
                     </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DualitySection;