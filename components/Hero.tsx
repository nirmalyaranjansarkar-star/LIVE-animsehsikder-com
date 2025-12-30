import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Guitar, PenTool, Music } from 'lucide-react';
import { Language } from '../types';
import { HERO_CONTENT } from '../constants';
import FloatingNotes from './FloatingNotes';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-navy-900 transition-colors duration-300">
      {/* Abstract Background Composition */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Studio Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop" 
            alt="Studio Atmosphere" 
            className="w-full h-full object-cover opacity-10 dark:opacity-50 grayscale" 
          />
          {/* Dark overlay to ensure text contrast over the image */}
          <div className="absolute inset-0 bg-slate-50/90 dark:bg-navy-900/80 mix-blend-multiply"></div>
        </div>

        {/* Music Flow Layer - Animated Musical Notes */}
        {/* Placed at z-10 to sit between background (z-0) and text (z-30), mingling with gradients (z-20) */}
        {/* Increased count for a richer flow */}
        <FloatingNotes count={30} className="z-10" />

        {/* Guitar - representing the musical side */}
        <div className="absolute -left-20 top-20 opacity-[0.03] text-gold-600 dark:text-gold-400 transform -rotate-12 z-10">
          <Guitar size={600} strokeWidth={0.5} />
        </div>
        
        {/* Pen - representing the technocrat side */}
        <div className="absolute -right-20 bottom-0 opacity-[0.03] text-blue-600 dark:text-blue-300 transform rotate-45 z-10">
          <PenTool size={500} strokeWidth={0.5} />
        </div>

        {/* Large Music Note - representing the atmosphere */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-slate-900 dark:text-white z-10">
          <Music size={800} strokeWidth={0.2} />
        </div>
        
        {/* Gradient Overlay - Adaptive for Light/Dark */}
        {/* Notes at z-10 will appear slightly behind these gradients, adding depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-slate-50/50 dark:from-navy-900 dark:via-transparent dark:to-navy-900/50 z-20 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-50/20 to-slate-50 dark:via-navy-900/20 dark:to-navy-900 z-20 pointer-events-none"></div>
      </div>

      <div className="relative z-30 max-w-5xl mx-auto px-6 text-center pt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tagline */}
          <span className="inline-block py-1 px-3 border border-gold-600/30 dark:border-gold-400/50 rounded-full text-gold-700 dark:text-gold-400 text-xs sm:text-sm tracking-[0.3em] uppercase mb-6 backdrop-blur-sm bg-slate-50/50 dark:bg-navy-900/50">
            {HERO_CONTENT.tagline[lang]}
          </span>
          
          {/* Name */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-slate-900 dark:text-white mb-2 leading-tight ${lang === 'bn' ? 'font-bengali' : ''}`}>
            {HERO_CONTENT.name[lang]}
          </h1>

          {/* Duality Branding Block */}
          <div className="flex flex-col items-center space-y-3 mb-8">
            {/* Artistic Aliases */}
            <h2 className={`text-xl md:text-2xl italic text-gold-600 dark:text-gold-400 font-serif ${lang === 'bn' ? 'font-bengali' : ''}`}>
              {HERO_CONTENT.aliases[lang]}
            </h2>
            
            {/* Divider */}
            <div className="w-16 h-px bg-slate-300 dark:bg-slate-700"></div>

            {/* Professional Titles */}
            <h3 className={`text-sm md:text-base font-medium tracking-widest uppercase text-slate-500 dark:text-slate-400 ${lang === 'bn' ? 'font-bengali' : 'font-sans'}`}>
              {HERO_CONTENT.professionalRoles[lang]}
            </h3>
          </div>
          
          {/* Philosophy Statement */}
          <div className="max-w-3xl mx-auto mb-8 relative px-4">
             <p className={`text-lg md:text-2xl text-slate-800 dark:text-slate-200 leading-relaxed font-medium ${lang === 'bn' ? 'font-bengali' : 'font-serif'}`}>
               {HERO_CONTENT.philosophy[lang]}
             </p>
          </div>

          {/* Original Subtitle (now smaller secondary text) */}
          <p className={`text-sm md:text-base text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 font-light italic opacity-80 ${lang === 'bn' ? 'font-bengali' : ''}`}>
            {HERO_CONTENT.subtitle[lang]}
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <button 
              onClick={() => document.getElementById('duality')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-8 py-3 bg-transparent border border-gold-600 dark:border-gold-400 text-gold-700 dark:text-gold-400 hover:bg-gold-600 dark:hover:bg-gold-400 hover:text-white dark:hover:text-navy-900 transition-all duration-300 ease-out backdrop-blur-sm"
            >
              <span className={`uppercase tracking-widest text-sm font-semibold ${lang === 'bn' ? 'font-bengali' : ''}`}>
                {HERO_CONTENT.cta[lang]}
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex flex-col items-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-500 mb-2">
          {HERO_CONTENT.scroll[lang]}
        </span>
        <ChevronDown className="text-gold-600 dark:text-gold-400" size={20} />
      </motion.div>
    </section>
  );
};

export default Hero;