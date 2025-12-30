import React from 'react';
import { motion } from 'framer-motion';
import { Ear, Activity, Mic2 } from 'lucide-react';
import { Language } from '../types';
import { ARTISTIC_CONTENT } from '../constants';
import FloatingNotes from './FloatingNotes';

interface ArtisticPortfolioProps {
  lang: Language;
}

const ArtisticPortfolio: React.FC<ArtisticPortfolioProps> = ({ lang }) => {
  return (
    <section id="artistic" className="py-24 bg-slate-50 dark:bg-navy-900 relative transition-colors duration-300">
      
      <FloatingNotes count={12} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl md:text-5xl font-serif text-slate-900 dark:text-white mb-4 ${lang === 'bn' ? 'font-bengali' : ''}`}
          >
            {lang === 'en' ? 'Artistic "Sandhya-Kanthi" Portfolio' : 'শিল্পী "সন্ধ্যা-কণ্ঠী" পোর্টফোলিও'}
          </motion.h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Methodology Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="bg-white dark:bg-navy-800 p-8 md:p-12 rounded-2xl shadow-xl dark:shadow-none border border-slate-200 dark:border-white/5 h-full relative overflow-hidden group">
              {/* Decorative Icon Background */}
              <div className="absolute -right-10 -top-10 text-slate-100 dark:text-navy-900 opacity-50 dark:opacity-50 transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
                <Ear size={300} strokeWidth={0.5} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gold-100 dark:bg-gold-900/30 rounded-full text-gold-600 dark:text-gold-400">
                    <Ear size={32} />
                  </div>
                  <h3 className={`text-xl md:text-2xl font-bold text-slate-800 dark:text-white ${lang === 'bn' ? 'font-bengali' : 'font-serif'}`}>
                    {ARTISTIC_CONTENT.methodology.title[lang]}
                  </h3>
                </div>
                
                <h4 className={`text-lg font-medium text-gold-600 dark:text-gold-400 mb-6 uppercase tracking-wider ${lang === 'bn' ? 'font-bengali' : ''}`}>
                  {ARTISTIC_CONTENT.methodology.subtitle[lang]}
                </h4>

                <p className={`text-slate-600 dark:text-slate-300 leading-relaxed text-lg ${lang === 'bn' ? 'font-bengali' : ''}`}>
                  {ARTISTIC_CONTENT.methodology.description[lang]}
                </p>

                <div className="mt-8 flex items-center space-x-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                  <span className="uppercase tracking-widest">{lang === 'en' ? '40+ Years of Practice' : '৪০+ বছরের সাধনা'}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Milestones Column */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="flex flex-col space-y-8"
          >
             {/* The Gangasagar Feat Card */}
            <div className="bg-gradient-to-br from-navy-900 to-navy-800 dark:from-black dark:to-navy-900 p-8 md:p-12 rounded-2xl shadow-xl border border-navy-800 dark:border-white/10 relative overflow-hidden text-white">
              
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Activity size={150} />
              </div>

              <div className="relative z-10">
                <div className="inline-block px-3 py-1 border border-gold-400/50 rounded-full text-gold-400 text-xs uppercase tracking-widest mb-6">
                  {ARTISTIC_CONTENT.milestone.title[lang]}
                </div>

                <h3 className={`text-3xl md:text-4xl font-serif font-bold text-white mb-2 ${lang === 'bn' ? 'font-bengali' : ''}`}>
                  {ARTISTIC_CONTENT.milestone.featName[lang]}
                </h3>

                <div className="flex items-baseline space-x-2 mb-6">
                  <span className="text-5xl md:text-6xl font-bold text-gold-400 font-mono">
                    {ARTISTIC_CONTENT.milestone.stat}
                  </span>
                  <span className="text-slate-400 uppercase tracking-widest text-sm">
                    {lang === 'en' ? 'Continuous Singing' : 'একটানা গান'}
                  </span>
                </div>

                <p className={`text-slate-300 leading-relaxed ${lang === 'bn' ? 'font-bengali' : ''}`}>
                   {ARTISTIC_CONTENT.milestone.description[lang]}
                </p>
              </div>
            </div>

            {/* Quick Stat / Micro-card */}
            <div className="flex-1 bg-gold-500 dark:bg-gold-600 rounded-2xl p-8 flex items-center justify-between shadow-lg text-navy-900 relative overflow-hidden group">
               <div className="absolute -right-6 -bottom-6 opacity-20 transform group-hover:scale-110 transition-transform">
                  <Mic2 size={120} />
               </div>
               <div>
                  <h4 className={`text-2xl font-bold mb-1 ${lang === 'bn' ? 'font-bengali' : 'font-serif'}`}>
                    {lang === 'en' ? 'Key Performance' : 'বিশেষ পরিবেশনা'}
                  </h4>
                  <p className="font-medium opacity-80">
                     {lang === 'en' ? 'Female Register Mastery' : 'মহিলা কণ্ঠের দক্ষতা'}
                  </p>
               </div>
               <div className="w-12 h-12 bg-navy-900/10 rounded-full flex items-center justify-center">
                  <Mic2 size={24} className="text-navy-900" />
               </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArtisticPortfolio;