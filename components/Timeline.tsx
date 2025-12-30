import React from 'react';
import { motion } from 'framer-motion';
import { Language } from '../types';
import { TIMELINE } from '../constants';

interface TimelineProps {
  lang: Language;
}

const Timeline: React.FC<TimelineProps> = ({ lang }) => {
  return (
    <section id="timeline" className="py-24 bg-slate-50 dark:bg-navy-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-serif text-slate-900 dark:text-white mb-2 ${lang === 'bn' ? 'font-bengali' : ''}`}>
            {lang === 'en' ? 'The Journey' : 'জীবনপ্রবাহ'}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm uppercase tracking-widest">
            {lang === 'en' ? 'From Science to Soul' : 'বিজ্ঞান থেকে আত্মায়'}
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-500/50 dark:via-gold-500/30 to-transparent"></div>

          <div className="space-y-12">
            {TIMELINE.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-[5px] md:-translate-x-[5px] w-2.5 h-2.5 rounded-full bg-gold-500 dark:bg-gold-400 border-4 border-slate-50 dark:border-navy-900 z-10 mt-1.5 shadow-[0_0_10px_rgba(212,175,55,0.5)]"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 px-4 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <span className="inline-block text-gold-600 dark:text-gold-400 font-mono text-sm mb-2 opacity-80">
                    {event.year}
                  </span>
                  <h3 className={`text-xl font-bold text-slate-800 dark:text-white mb-2 ${lang === 'bn' ? 'font-bengali' : 'font-serif'}`}>
                    {event.title[lang]}
                  </h3>
                  <p className={`text-slate-600 dark:text-slate-400 text-sm leading-relaxed ${lang === 'bn' ? 'font-bengali' : ''}`}>
                    {event.description[lang]}
                  </p>
                  <span className={`inline-block mt-3 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-slate-300 dark:border-white/10 text-slate-500`}>
                    {event.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;