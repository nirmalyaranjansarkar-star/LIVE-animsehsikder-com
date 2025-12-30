import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Star, Briefcase, Globe, Heart, Mic2, User, Quote } from 'lucide-react';
import { Language, Testimonial } from '../types';
import { TESTIMONIALS } from '../constants';

interface TestimonialsProps {
  lang: Language;
}

const Testimonials: React.FC<TestimonialsProps> = ({ lang }) => {
  // Duplicate array for seamless infinite scroll
  const scrollItems = [...TESTIMONIALS, ...TESTIMONIALS];

  const getCategoryStyles = (category: Testimonial['category']) => {
    switch (category) {
      case 'media':
        return {
          icon: Newspaper,
          bg: 'bg-slate-100 dark:bg-navy-800',
          accent: 'text-blue-600 dark:text-blue-400',
          border: 'border-blue-200 dark:border-blue-900/30'
        };
      case 'icon':
        return {
          icon: Star,
          bg: 'bg-gold-50 dark:bg-navy-900',
          accent: 'text-gold-600 dark:text-gold-400',
          border: 'border-gold-200 dark:border-gold-900/30'
        };
      case 'peer':
        return {
          icon: Briefcase,
          bg: 'bg-slate-50 dark:bg-slate-800',
          accent: 'text-slate-600 dark:text-slate-400',
          border: 'border-slate-200 dark:border-slate-700'
        };
      case 'fan':
        return {
          icon: Globe,
          bg: 'bg-rose-50 dark:bg-navy-900',
          accent: 'text-rose-600 dark:text-rose-400',
          border: 'border-rose-200 dark:border-rose-900/30'
        };
      default:
        return {
          icon: Quote,
          bg: 'bg-white dark:bg-navy-800',
          accent: 'text-slate-500',
          border: 'border-slate-200'
        };
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-slate-50 dark:bg-navy-900 overflow-hidden border-t border-slate-200 dark:border-white/5 relative">
      
      {/* Background Gradient Blurs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-10">
        <div className="text-center">
          <h2 className={`text-3xl md:text-4xl font-serif text-slate-900 dark:text-white mb-3 ${lang === 'bn' ? 'font-bengali' : ''}`}>
            {lang === 'en' ? 'Echoes of the Legend' : 'কিংবদন্তির প্রতিধ্বনি'}
          </h2>
          <p className={`text-slate-500 dark:text-slate-400 max-w-2xl mx-auto ${lang === 'bn' ? 'font-bengali' : ''}`}>
            {lang === 'en' 
              ? 'From cultural icons to global admirers, the resonance of his voice is universal.' 
              : 'সাংস্কৃতিক আইকন থেকে শুরু করে বিশ্বব্যাপী ভক্ত, তাঁর কণ্ঠের অনুরণন সর্বজনীন।'}
          </p>
        </div>
      </div>

      {/* Infinite Carousel */}
      <div className="relative w-full mask-linear-gradient">
         {/* Gradient Masks for smooth fade edges */}
         <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-slate-50 dark:from-navy-900 to-transparent z-20"></div>
         <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-slate-50 dark:from-navy-900 to-transparent z-20"></div>

         <div className="flex overflow-hidden">
            <motion.div
               className="flex space-x-6 px-4"
               animate={{ x: ["0%", "-50%"] }}
               transition={{ 
                  x: {
                     repeat: Infinity,
                     repeatType: "loop",
                     duration: 60,
                     ease: "linear",
                  }
               }}
               whileHover={{ animationPlayState: "paused" }}
            >
               {scrollItems.map((item, index) => {
                  const style = getCategoryStyles(item.category);
                  const Icon = style.icon;

                  return (
                     <div 
                        key={`${item.id}-${index}`}
                        className={`flex-shrink-0 w-[300px] md:w-[400px] p-6 rounded-2xl border ${style.bg} ${style.border} shadow-lg relative group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                     >
                        <div className="mb-4 flex justify-between items-start">
                           <div className={`p-2 rounded-lg bg-white/50 dark:bg-black/20 backdrop-blur-sm ${style.accent}`}>
                              <Icon size={24} />
                           </div>
                           <Quote size={40} className="text-slate-300 dark:text-white/5 absolute top-6 right-6" />
                        </div>
                        
                        <blockquote className={`text-lg font-medium text-slate-800 dark:text-slate-200 mb-6 relative z-10 leading-relaxed ${lang === 'bn' ? 'font-bengali' : 'italic font-serif'}`}>
                           "{item.quote[lang]}"
                        </blockquote>

                        <div className="flex items-center space-x-3 mt-auto pt-4 border-t border-slate-200 dark:border-white/5">
                           <div>
                              <div className={`font-bold text-slate-900 dark:text-white ${lang === 'bn' ? 'font-bengali' : ''}`}>
                                 {item.author[lang]}
                              </div>
                              {item.role && (
                                 <div className={`text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-0.5 ${lang === 'bn' ? 'font-bengali' : ''}`}>
                                    {item.role[lang]}
                                 </div>
                              )}
                           </div>
                        </div>
                     </div>
                  );
               })}
            </motion.div>
         </div>
      </div>
    </section>
  );
};

export default Testimonials;