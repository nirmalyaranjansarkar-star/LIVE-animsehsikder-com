import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ExternalLink, Youtube, Film } from 'lucide-react';
import { Language, VideoCategory } from '../types';
import { VIDEOS } from '../constants';
import FloatingNotes from './FloatingNotes';

interface VideoGalleryProps {
  lang: Language;
}

const CATEGORIES: { id: VideoCategory; label: { en: string; bn: string } }[] = [
  { id: 'solo', label: { en: 'Golden Era Solo Classics', bn: 'স্বর্ণযুগের একক ক্লাসিক' } },
  { id: 'duet', label: { en: 'Bapi-Piklu: Nostalgic Duets', bn: 'বাপি-পিকলু: নস্টালজিক দ্বৈত' } },
  { id: 'legacy', label: { en: 'Father-Daughter Legacy', bn: 'পিতা-কন্যার উত্তরাধিকার' } },
  { id: 'live', label: { en: 'Live Gems & Spiritual', bn: 'লাইভ রত্ন এবং আধ্যাত্মিক' } },
];

const VideoGallery: React.FC<VideoGalleryProps> = ({ lang }) => {
  const [activeCategory, setActiveCategory] = useState<VideoCategory>('solo');

  // Filter videos based on active category
  const filteredVideos = VIDEOS.filter(v => v.category === activeCategory);

  // Aesthetic helpers
  const getCategoryTheme = () => {
    switch (activeCategory) {
      case 'duet': // Sepia/Vintage
        return {
          bg: 'bg-[#2D1B17]', // Deep warm brown
          border: 'border-[#A1887F]',
          cardBg: 'bg-[#3E2723]',
          imageFilter: 'sepia(0.6) contrast(1.1)',
          text: 'text-orange-50',
          accent: 'text-orange-300',
          button: 'hover:bg-orange-700'
        };
      case 'solo': // Golden/Glitzy
        return {
          bg: 'bg-slate-900',
          border: 'border-gold-500',
          cardBg: 'bg-slate-800',
          imageFilter: 'contrast(1.05)',
          text: 'text-gold-50',
          accent: 'text-gold-400',
          button: 'hover:bg-gold-600'
        };
      case 'legacy': // Warm Rose
        return {
          bg: 'bg-[#4a0404]',
          border: 'border-rose-400',
          cardBg: 'bg-[#2b0505]',
          imageFilter: '',
          text: 'text-rose-50',
          accent: 'text-rose-300',
          button: 'hover:bg-rose-700'
        };
      case 'live': // Electric Blue
        return {
          bg: 'bg-navy-900',
          border: 'border-blue-400',
          cardBg: 'bg-navy-800',
          imageFilter: 'saturate(1.1)',
          text: 'text-blue-50',
          accent: 'text-blue-300',
          button: 'hover:bg-blue-600'
        };
      default:
        return {
          bg: 'bg-slate-900',
          border: 'border-slate-500',
          cardBg: 'bg-slate-800',
          imageFilter: '',
          text: 'text-slate-50',
          accent: 'text-slate-400',
          button: 'hover:bg-slate-600'
        };
    }
  };

  const theme = getCategoryTheme();

  return (
    <section id="repertoire" className={`py-20 transition-colors duration-500 ${theme.bg} relative overflow-hidden`}>
      
      {/* Animated Music Notes */}
      <FloatingNotes count={15} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <div className={`flex items-center space-x-2 mb-2 ${theme.accent}`}>
                <Film size={24} />
                <span className="uppercase tracking-[0.2em] text-sm">Cinema Reel Archive</span>
            </div>
            <h2 className={`text-3xl md:text-5xl font-serif text-white mb-3 ${lang === 'bn' ? 'font-bengali' : ''}`}>
              {lang === 'en' ? 'The Repertoire Gallery' : 'সুরের গ্যালারি'}
            </h2>
            <p className={`text-slate-300 max-w-xl text-sm md:text-base ${lang === 'bn' ? 'font-bengali' : ''}`}>
              {lang === 'en' 
                ? 'A curated digital archive of a Sandhya-Kanthi in peak form.' 
                : 'পরম অবস্থানে বিরাজমান এক সন্ধ্যা-কণ্ঠীর সংকলিত ডিজিটাল আর্কাইভ।'}
            </p>
          </div>
          
          <a 
            href="https://www.youtube.com/@animeshsikder7677?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-red-600/30 transition-all transform hover:-translate-y-0.5 group"
          >
             <Youtube size={20} className="group-hover:animate-pulse" />
             <span className={`font-medium ${lang === 'bn' ? 'font-bengali' : ''}`}>
                {lang === 'en' ? 'Subscribe for Daily Oxygen' : 'সাবস্ক্রাইব করুন'}
             </span>
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat.id
                  ? `${theme.accent} border-current bg-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]`
                  : 'text-slate-400 border-slate-700 hover:border-slate-500 bg-black/20'
              } ${lang === 'bn' ? 'font-bengali' : ''}`}
            >
              {cat.label[lang]}
            </button>
          ))}
        </div>

        {/* Lightweight Grid Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredVideos.map((video) => (
              <motion.a
                key={video.youtubeId}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col rounded-xl overflow-hidden shadow-2xl transition-transform duration-300 hover:-translate-y-2 border ${theme.border} ${theme.cardBg}`}
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video overflow-hidden bg-black">
                  {/* High Quality Thumbnail */}
                  <img 
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title[lang]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    style={{ filter: theme.imageFilter }}
                  />
                  
                  {/* Overlay & Play Button */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className={`w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300 ${theme.accent}`}>
                      <Play fill="currentColor" size={24} className="ml-1" />
                    </div>
                  </div>

                  {/* External Link Indicator */}
                  <div className="absolute top-3 right-3 p-1.5 bg-black/60 rounded-full text-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={14} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {video.tags.slice(0, 2).map(tag => (
                      <span key={tag} className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded border border-white/10 ${theme.accent} bg-white/5`}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className={`text-lg font-bold mb-2 leading-tight ${theme.text} ${lang === 'bn' ? 'font-bengali' : 'font-serif'}`}>
                    {video.title[lang]}
                  </h3>
                  
                  <p className={`text-sm opacity-70 leading-relaxed mb-4 flex-grow ${theme.text} ${lang === 'bn' ? 'font-bengali' : ''}`}>
                    {video.description[lang]}
                  </p>

                  <div className={`text-xs font-bold uppercase tracking-widest flex items-center space-x-2 ${theme.accent} group-hover:underline`}>
                    <span>{lang === 'en' ? 'Watch on YouTube' : 'ইউটিউবে দেখুন'}</span>
                    <ExternalLink size={12} />
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default VideoGallery;