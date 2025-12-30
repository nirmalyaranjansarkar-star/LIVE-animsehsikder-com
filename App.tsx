import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DualitySection from './components/DualitySection';
import PsychologicalProfile from './components/PsychologicalProfile';
import ArtisticPortfolio from './components/ArtisticPortfolio';
import VideoGallery from './components/VideoGallery';
import Collaborations from './components/Collaborations';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Press from './components/Press';
import Contact from './components/Contact';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('bn');
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <main className="bg-slate-50 text-slate-900 dark:bg-navy-900 dark:text-slate-100 min-h-screen selection:bg-gold-500 selection:text-white transition-colors duration-300">
      <Navbar lang={lang} setLang={setLang} theme={theme} toggleTheme={toggleTheme} />
      <Hero lang={lang} />
      <DualitySection lang={lang} />
      <PsychologicalProfile lang={lang} />
      <ArtisticPortfolio lang={lang} />
      <VideoGallery lang={lang} />
      <Collaborations lang={lang} />
      <Timeline lang={lang} />
      <Testimonials lang={lang} />
      <Press lang={lang} />
      <Contact lang={lang} />
    </main>
  );
};

export default App;