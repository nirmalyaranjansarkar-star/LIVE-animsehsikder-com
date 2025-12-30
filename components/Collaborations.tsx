import React from 'react';
import { motion } from 'framer-motion';
import { Users, Music2 } from 'lucide-react';
import { Language } from '../types';
import { COLLABORATIONS } from '../constants';

interface CollaborationsProps {
  lang: Language;
}

const Collaborations: React.FC<CollaborationsProps> = ({ lang }) => {
  return (
    <section id="collaborations" className="py-24 bg-slate-50 dark:bg-navy-900 relative transition-colors duration-300 border-t border-slate-200 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className={`text-3xl md:text-5xl font-serif text-slate-900 dark:text-white mb-4 ${lang === 'bn' ? 'font-bengali' : ''}`}>
              {lang === 'en' ? 'Collaborative Legacy' : 'যৌথ সঙ্গীত যাত্রা'}
            </h2>
            <p className={`text-slate-600 dark:text-slate-400 max-w-xl ${lang === 'bn' ? 'font-bengali' : ''}`}>
              {lang === 'en' 
                ? 'Harmonizing across generations and recreating the golden duets of yesteryear.' 
                : 'প্রজন্মের মেলবন্ধন এবং স্বর্ণযুগের দ্বৈত গানের পুনর্জাগরণ।'}
            </p>
          </div>
          <div className="hidden md:block p-3 bg-gold-100 dark:bg-gold-500/10 rounded-full text-gold-600 dark:text-gold-400">
             <Users size={32} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {COLLABORATIONS.map((collab, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col md:flex-row bg-white dark:bg-navy-800 rounded-2xl overflow-hidden shadow-lg border border-slate-100 dark:border-white/5"
            >
              {/* Symbolic Image/Icon Area */}
              <div className="md:w-1/3 bg-slate-200 dark:bg-navy-900 flex items-center justify-center p-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pattern-dots"></div>
                <Music2 size={64} className="text-slate-400 dark:text-slate-600 relative z-10" />
              </div>

              <div className="md:w-2/3 p-8 flex flex-col justify-center">
                <span className={`inline-block text-xs font-bold uppercase tracking-widest text-gold-600 dark:text-gold-400 mb-2 ${lang === 'bn' ? 'font-bengali' : ''}`}>
                  {collab.relation[lang]}
                </span>
                
                <h3 className={`text-2xl font-serif font-bold text-slate-900 dark:text-white mb-4 ${lang === 'bn' ? 'font-bengali' : ''}`}>
                  {collab.name[lang]}
                </h3>

                <p className={`text-slate-600 dark:text-slate-300 mb-4 leading-relaxed ${lang === 'bn' ? 'font-bengali' : ''}`}>
                  {collab.description[lang]}
                </p>

                {collab.track && (
                   <div className="flex items-center space-x-2 text-sm font-medium text-slate-500 dark:text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-500"></div>
                      <span>Feature Track: <span className="text-slate-800 dark:text-white italic">"{collab.track}"</span></span>
                   </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collaborations;