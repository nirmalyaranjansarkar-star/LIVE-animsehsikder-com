import React from 'react';
import { Mail, Globe, Phone, MapPin, Facebook, Instagram, Youtube, FileText, ArrowRight, Scale } from 'lucide-react';
import { Language } from '../types';
import { CONTACT_INFO, CLOSING_QUOTE } from '../constants';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  return (
    <footer id="contact" className="bg-slate-50 dark:bg-navy-900 border-t border-slate-200 dark:border-white/5 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Closing Philosophy - The Scale */}
        <div className="mb-24 text-center max-w-4xl mx-auto">
           <Scale className="mx-auto text-gold-500 mb-6 opacity-80" size={48} strokeWidth={1} />
           <blockquote className={`text-xl md:text-3xl font-serif text-slate-800 dark:text-slate-200 leading-relaxed italic ${lang === 'bn' ? 'font-bengali' : ''}`}>
             {CLOSING_QUOTE[lang]}
           </blockquote>
           <div className="w-16 h-px bg-gold-500 mx-auto mt-8 opacity-50"></div>
        </div>

        {/* Contact Form CTA Section */}
        <div className="mb-20">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-200 to-slate-300 dark:from-navy-800 dark:to-navy-900 border border-gold-500/20 dark:border-gold-400/20 p-8 md:p-12 shadow-2xl">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-gold-400/20 dark:bg-gold-400/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div>
                <h3 className={`text-2xl md:text-3xl font-serif font-bold text-slate-900 dark:text-white mb-3 ${lang === 'bn' ? 'font-bengali' : ''}`}>
                  {lang === 'en' ? 'Bookings & Inquiries' : 'বুকিং এবং অনুসন্ধান'}
                </h3>
                <p className={`text-slate-700 dark:text-slate-300 max-w-xl text-lg ${lang === 'bn' ? 'font-bengali' : ''}`}>
                  {lang === 'en' 
                    ? 'For performances, events, or collaborations, please fill out our detailed inquiry form.' 
                    : 'পারফরম্যান্স, ইভেন্ট বা সহযোগিতার জন্য, অনুগ্রহ করে আমাদের বিস্তারিত অনুসন্ধান ফর্মটি পূরণ করুন।'}
                </p>
              </div>
              
              <a 
                href={CONTACT_INFO.googleForm}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-3 px-8 py-4 bg-gold-500 hover:bg-gold-400 text-navy-900 rounded-full font-bold transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-gold-500/20 whitespace-nowrap"
              >
                <FileText size={20} />
                <span className={lang === 'bn' ? 'font-bengali' : ''}>
                  {lang === 'en' ? 'Open Inquiry Form' : 'অনুসন্ধান ফর্ম খুলুন'}
                </span>
                <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className={`text-2xl font-serif font-bold text-slate-900 dark:text-white mb-2 ${lang === 'bn' ? 'font-bengali' : ''}`}>
              {lang === 'en' ? 'Dr. Animesh Sikder' : 'ডঃ অনিমেষ সিকদার'}
            </h2>
            <p className={`text-slate-500 mb-6 ${lang === 'bn' ? 'font-bengali' : ''}`}>
              {lang === 'en' ? 'Artist & Technocrat' : 'শিল্পী ও প্রশাসক'}
            </p>
            <p className={`text-lg text-slate-600 dark:text-slate-300 italic mb-8 max-w-md ${lang === 'bn' ? 'font-bengali' : 'font-serif'}`}>
              {lang === 'en' 
                ? '"My success is measured not in accolades, but in the hearts I have touched."' 
                : '"আমার সাফল্য পুরস্কারে নয়, মানুষের হৃদয়ে আমি কতটা জায়গা করে নিতে পেরেছি তাতেই নিহিত।"'}
            </p>
          </div>

          <div className="space-y-4 md:justify-self-end w-full md:w-auto">
             {/* Address with Studio Label */}
             <div className="flex items-center space-x-4 text-slate-600 dark:text-slate-300">
              <div className="p-3 bg-slate-200 dark:bg-white/5 rounded-full text-gold-600 dark:text-gold-400">
                <MapPin size={20} />
              </div>
              <div className="flex flex-col">
                <span className={`text-[10px] uppercase tracking-widest text-slate-500 mb-0.5 ${lang === 'bn' ? 'font-bengali' : ''}`}>
                  {lang === 'en' ? 'Studio Address' : 'স্টুডিওর ঠিকানা'}
                </span>
                <span className={lang === 'bn' ? 'font-bengali' : ''}>
                  {CONTACT_INFO.address[lang]}
                </span>
              </div>
            </div>

            {/* Phone */}
             <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center space-x-4 text-slate-600 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors group">
              <div className="p-3 bg-slate-200 dark:bg-white/5 rounded-full group-hover:bg-gold-400/20 dark:group-hover:bg-gold-400/10 transition-colors">
                <Phone size={20} />
              </div>
              <span className="font-mono">{CONTACT_INFO.phone}</span>
            </a>

            {/* Email */}
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center space-x-4 text-slate-600 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors group">
              <div className="p-3 bg-slate-200 dark:bg-white/5 rounded-full group-hover:bg-gold-400/20 dark:group-hover:bg-gold-400/10 transition-colors">
                <Mail size={20} />
              </div>
              <span>{CONTACT_INFO.email}</span>
            </a>
            
            {/* Website */}
            <a href={`https://${CONTACT_INFO.website}`} className="flex items-center space-x-4 text-slate-600 dark:text-slate-300 hover:text-gold-600 dark:hover:text-gold-400 transition-colors group">
              <div className="p-3 bg-slate-200 dark:bg-white/5 rounded-full group-hover:bg-gold-400/20 dark:group-hover:bg-gold-400/10 transition-colors">
                <Globe size={20} />
              </div>
              <span>{CONTACT_INFO.website}</span>
            </a>

            {/* Socials */}
            <div className="flex space-x-4 pt-4 border-t border-slate-200 dark:border-white/5 mt-4">
              <a href={CONTACT_INFO.social.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-200 dark:bg-white/5 rounded-full hover:bg-[#1877F2]/20 hover:text-[#1877F2] transition-colors" title="Facebook">
                <Facebook size={20} />
              </a>
               <a href={CONTACT_INFO.social.instagram} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-200 dark:bg-white/5 rounded-full hover:bg-[#E4405F]/20 hover:text-[#E4405F] transition-colors" title="Instagram">
                <Instagram size={20} />
              </a>
               <a href={CONTACT_INFO.social.youtube} target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-200 dark:bg-white/5 rounded-full hover:bg-[#FF0000]/20 hover:text-[#FF0000] transition-colors" title="YouTube">
                <Youtube size={20} />
              </a>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {CONTACT_INFO.tags.map(tag => (
                <span key={tag} className="text-xs text-slate-500 hover:text-slate-700 dark:hover:text-slate-400 cursor-default transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/5 text-center">
          <p className="text-slate-500 dark:text-slate-600 text-xs">
            © {new Date().getFullYear()} Dr. Animesh Sikder. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;