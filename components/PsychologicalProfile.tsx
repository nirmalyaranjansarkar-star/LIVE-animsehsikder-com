import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { PSYCH_PROFILE } from '../constants';

interface PsychProfileProps {
  lang: Language;
}

const PsychologicalProfile: React.FC<PsychProfileProps> = ({ lang }) => {
  return (
    <section id="psychology" className="py-24 bg-slate-100 dark:bg-navy-800 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-4xl font-serif text-slate-900 dark:text-white mb-2 ${lang === 'bn' ? 'font-bengali' : ''}`}
          >
            {lang === 'en' ? 'Psychological Insights' : 'মনস্তাত্ত্বিক অন্তর্দৃষ্টি'}
          </motion.h2>
          <div className="w-16 h-1 bg-gold-500 mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PSYCH_PROFILE.map((profile, index) => {
            const Icon = profile.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white dark:bg-navy-900 rounded-2xl p-8 shadow-xl border border-slate-100 dark:border-white/5 relative overflow-hidden group hover:border-gold-400/30 transition-colors"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-100 dark:bg-gold-500/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-navy-50 dark:bg-navy-800 rounded-xl flex items-center justify-center text-gold-600 dark:text-gold-400 mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300">
                    <Icon size={28} />
                  </div>

                  <h3 className={`text-sm font-bold uppercase tracking-widest text-slate-400 mb-2 ${lang === 'bn' ? 'font-bengali' : ''}`}>
                    {profile.title[lang]}
                  </h3>
                  
                  <h4 className={`text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4 ${lang === 'bn' ? 'font-bengali' : ''}`}>
                    {profile.subtitle[lang]}
                  </h4>

                  <p className={`text-slate-600 dark:text-slate-300 leading-relaxed ${lang === 'bn' ? 'font-bengali' : ''}`}>
                    {profile.description[lang]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PsychologicalProfile;