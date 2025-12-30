import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Language } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleLang = () => {
    setLang(lang === 'bn' ? 'en' : 'bn');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-dark py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo / Name */}
          <div 
            className="flex flex-col cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <span className={`text-xl font-serif font-bold tracking-wider ${lang === 'bn' ? 'font-bengali' : ''} text-slate-900 dark:text-white`}>
              {lang === 'en' ? 'Dr. Animesh Sikder' : 'ডঃ অনিমেষ সিকদার'}
            </span>
            <span className="text-xs text-gold-600 dark:text-gold-400 uppercase tracking-[0.2em] opacity-80">
              {lang === 'en' ? 'The Resonance' : 'দ্বৈত সত্তার সুর'}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm uppercase tracking-widest text-slate-700 dark:text-slate-200 hover:text-gold-600 dark:hover:text-gold-400 transition-colors ${lang === 'bn' ? 'font-bengali font-bold text-base' : 'font-sans'}`}
              >
                {item.label[lang]}
              </button>
            ))}
            
            <div className="flex items-center space-x-3 pl-4 border-l border-slate-300 dark:border-slate-700">
              <button 
                onClick={toggleLang}
                className="flex items-center space-x-1 px-3 py-1 rounded-full border border-slate-400 dark:border-slate-600 hover:border-gold-500 dark:hover:border-gold-400 text-slate-700 dark:text-slate-200 transition-all text-xs uppercase"
              >
                <Globe size={14} />
                <span>{lang === 'en' ? 'BN' : 'EN'}</span>
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              onClick={toggleLang}
              className="flex items-center space-x-1 px-2 py-1 rounded-full border border-slate-400 dark:border-slate-600 text-slate-800 dark:text-slate-200 text-xs"
            >
              <Globe size={14} />
              <span>{lang === 'en' ? 'BN' : 'EN'}</span>
            </button>
            
            <button
              onClick={toggleTheme}
              className="p-2 text-slate-800 dark:text-white"
            >
               {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-900 dark:text-white hover:text-gold-500">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden glass-dark absolute w-full top-full left-0 border-t border-slate-200 dark:border-slate-700">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-3 text-slate-800 dark:text-white hover:text-gold-600 dark:hover:text-gold-400 border-b border-slate-200 dark:border-slate-800 ${lang === 'bn' ? 'font-bengali' : ''}`}
              >
                {item.label[lang]}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;