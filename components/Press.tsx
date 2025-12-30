import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Globe, TrendingUp, Newspaper } from 'lucide-react';
import { Language } from '../types';
import { PRESS_ITEMS, GLOBAL_IMPACT } from '../constants';

interface PressProps {
  lang: Language;
}

const Press: React.FC<PressProps> = ({ lang }) => {
  return (
    <section id="press" className="py-24 bg-slate-100 dark:bg-navy-800 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="mb-16 md:text-center">
          <h2 className={`text-3xl md:text-5xl font-serif text-slate-900 dark:text-white mb-4 ${lang === 'bn' ? 'font-bengali' : ''}`}>
            {lang === 'en' ? 'Media & Critical Acclaim' : 'গণমাধ্যম ও স্বীকৃতি'}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 uppercase tracking-widest text-sm">Social Proof & Global Impact</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
          
          {/* Main Feature - Sourav Ganguly */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-10 glass-dark rounded-xl border-l-4 border-gold-400 shadow-xl dark:shadow-none h-full flex flex-col justify-center"
            >
              <Quote className="absolute top-6 left-6 text-gold-600/20 dark:text-gold-500/20" size={64} />
              <div className="relative z-10">
                <p className={`text-2xl md:text-3xl font-serif text-slate-800 dark:text-white leading-relaxed mb-8 italic ${lang === 'bn' ? 'font-bengali' : ''}`}>
                   {PRESS_ITEMS[0].quote[lang]}
                </p>
                <div className="flex items-center space-x-4">
                  <div className="h-px w-12 bg-gold-400"></div>
                  <div>
                    <h4 className={`font-bold text-slate-900 dark:text-white text-lg ${lang === 'bn' ? 'font-bengali' : ''}`}>
                      {PRESS_ITEMS[0].author?.[lang]}
                    </h4>
                    <p className={`text-sm text-slate-500 dark:text-slate-400 ${lang === 'bn' ? 'font-bengali' : ''}`}>
                      {PRESS_ITEMS[0].source[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Press & Viral Stats */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Viral Impact Card */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-8 rounded-xl shadow-lg relative overflow-hidden group">
               <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/3 -translate-y-1/3 group-hover:scale-110 transition-transform">
                  <TrendingUp size={150} />
               </div>
               <div className="relative z-10">
                  <h3 className={`text-xl font-bold mb-2 flex items-center space-x-2 ${lang === 'bn' ? 'font-bengali' : ''}`}>
                     <TrendingUp size={20} />
                     <span>{lang === 'en' ? 'Viral Phenomenon' : 'ভাইরাল সেনসেশন'}</span>
                  </h3>
                  <p className={`text-red-100 leading-relaxed mb-4 ${lang === 'bn' ? 'font-bengali' : ''}`}>
                     {lang === 'en' ? 'Millions of admirers across YouTube and Facebook.' : 'ইউটিউব এবং ফেসবুকে লক্ষ লক্ষ ভক্তের সমাগম।'}
                  </p>
                  <div className="inline-block bg-white/20 px-3 py-1 rounded text-sm font-medium backdrop-blur-sm">
                     {lang === 'en' ? 'Digital Sensation' : 'ডিজিটাল সেনসেশন'}
                  </div>
               </div>
            </div>

            {/* Other Press Snippets */}
            <div className="space-y-4">
              {PRESS_ITEMS.slice(1).map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-navy-900 p-6 rounded-xl border border-slate-200 dark:border-white/5 hover:border-gold-400/30 transition-colors shadow-sm">
                   <div className="flex items-center space-x-2 text-slate-400 mb-2 text-xs uppercase tracking-widest">
                      <Newspaper size={14} />
                      <span className={lang === 'bn' ? 'font-bengali' : ''}>{item.source[lang]}</span>
                   </div>
                   <p className={`text-slate-800 dark:text-slate-200 italic font-serif ${lang === 'bn' ? 'font-bengali' : ''}`}>{item.quote[lang]}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Global Human Connection */}
        <div className="border-t border-slate-200 dark:border-slate-700 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
             <div>
                <div className="flex items-center space-x-3 text-gold-600 dark:text-gold-400 mb-4">
                   <Globe size={24} />
                   <span className="text-sm uppercase tracking-widest font-bold">{GLOBAL_IMPACT.title[lang]}</span>
                </div>
                <h3 className={`text-2xl md:text-3xl font-serif text-slate-900 dark:text-white mb-6 leading-relaxed ${lang === 'bn' ? 'font-bengali' : ''}`}>
                   "{GLOBAL_IMPACT.description[lang]}"
                </h3>
                <div className="flex flex-wrap gap-2">
                   {GLOBAL_IMPACT.locations.map(loc => (
                      <span key={loc} className="px-3 py-1 bg-slate-200 dark:bg-white/10 rounded-full text-xs text-slate-600 dark:text-slate-300">
                         {loc}
                      </span>
                   ))}
                </div>
             </div>
             <div className="relative h-64 bg-slate-200 dark:bg-navy-900 rounded-2xl overflow-hidden flex items-center justify-center">
                {/* Abstract World Map Representation */}
                <div className="absolute inset-0 opacity-20 dark:opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center bg-no-repeat grayscale"></div>
                <div className="relative z-10 text-center p-8">
                   <div className="w-20 h-20 bg-gold-500/20 rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse">
                      <Globe size={40} className="text-gold-600 dark:text-gold-400" />
                   </div>
                   <span className="text-slate-500 dark:text-slate-400 text-sm uppercase tracking-widest">Connection Beyond Borders</span>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Press;