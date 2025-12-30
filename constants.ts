import { NavItem, DualPersona, VideoContent, TimelineEvent, PressFeature, PsychProfile, Collaboration, Testimonial } from './types';
import { PenTool, Mic2, Guitar, Music, Heart, Scale, Users, Globe } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: { en: 'Home', bn: 'প্রচ্ছদ' } },
  { id: 'duality', label: { en: 'Duality', bn: 'দ্বৈত সত্তা' } },
  { id: 'psychology', label: { en: 'Insight', bn: 'অন্তর্দৃষ্টি' } },
  { id: 'artistic', label: { en: 'Artistry', bn: 'শিল্পকলা' } },
  { id: 'repertoire', label: { en: 'Repertoire', bn: 'সঙ্গীত' } },
  { id: 'collaborations', label: { en: 'Legacy', bn: 'উত্তরাধিকার' } },
  { id: 'testimonials', label: { en: 'Voices', bn: 'প্রশংসা' } },
  { id: 'press', label: { en: 'Impact', bn: 'প্রভাব' } },
];

export const HERO_CONTENT = {
  name: { en: 'Dr. Animesh Sikder', bn: 'ডঃ অনিমেষ সিকদার' },
  tagline: { en: 'The Resonance of Duality', bn: 'দ্বৈতসত্তার অনুরণন' },
  aliases: {
    en: '“Bapi” • The Sandhya-Kanthi',
    bn: '“বাপি” • সন্ধ্যা-কণ্ঠী'
  },
  professionalRoles: {
    en: 'Senior Govt. Official (ARDD) • MVSc Gold Medallist',
    bn: 'বরিষ্ঠ সরকারি আধিকারিক (ARDD) • MVSc স্বর্ণপদক প্রাপ্ত'
  },
  philosophy: {
    en: '"Government service is my duty. Music is my oxygen and sustenance for living."',
    bn: '"সরকারি কাজ আমার কর্তব্য। সঙ্গীত আমার অক্সিজেন এবং বাঁচার রসদ।"'
  },
  subtitle: { 
    en: 'Preserving the Golden Era of Bengali Music through the Timeless Voice of Sandhya Mukherjee.', 
    bn: 'গীতশ্রী সন্ধ্যা মুখোপাধ্যায়ের কালজয়ী সুরের ধারক ও বাহক।' 
  },
  cta: { en: 'Experience the Melody', bn: 'সুরের ভুবনে প্রবেশ করুন' },
  scroll: { en: 'Scroll to Explore', bn: 'আরও দেখুন' }
};

export const ARTISTIC_CONTENT = {
  methodology: {
    title: { en: 'Vocal Methodology: Shruti-Nirbhor Shiksha', bn: 'কণ্ঠ সাধনা: শ্রুতি-নির্ভর শিক্ষা' },
    subtitle: { en: 'The Art of Ear-Based Learning', bn: 'শ্রবণের মাধ্যমে শিক্ষা' },
    description: {
      en: 'For over 45 years, Dr. Sikder has meticulously practiced "Shruti-Nirbhor Shiksha" (ear-based learning). Rejecting standard notation books, he relied entirely on deep listening—matching the pitch, breath, and emotive nuances of Sandhya Mukherjee with forensic precision.',
      bn: '৪৫ বছরেরও বেশি সময় ধরে ডঃ সিকদার "শ্রুতি-নির্ভর শিক্ষা" অনুশীলন করেছেন। স্বরলিপির বই প্রত্যাখ্যান করে, তিনি গভীর শ্রবণের মাধ্যমে গীতশ্রী সন্ধ্যা মুখোপাধ্যায়ের সুর, শ্বাস এবং আবেগের সূক্ষ্মতাকে হুবহু আয়ত্ত করেছেন।'
    }
  },
  milestone: {
    title: { en: 'Live Performance Milestone', bn: 'লাইভ পারফরম্যান্সের মাইলফলক' },
    featName: { en: 'The Gangasagar Feat', bn: 'গঙ্গাসাগরের কীর্তি' },
    stat: '2h 25m',
    description: {
      en: 'A testament to immense vocal stamina, Dr. Sikder performed continuously for 2 hours and 25 minutes in the female register without a break, captivating the audience at Gangasagar.',
      bn: 'অসীম কণ্ঠশক্তির প্রমাণস্বরূপ, ডঃ সিকদার গঙ্গাসাগরে একটানা ২ ঘণ্টা ২৫ মিনিট মহিলা কণ্ঠে বিরতিহীন গান গেয়ে শ্রোতাদের মুগ্ধ করেছিলেন।'
    }
  }
};

export const PSYCH_PROFILE: PsychProfile[] = [
  {
    title: { en: 'Archetypal Analysis', bn: 'মনস্তাত্ত্বিক বিশ্লেষণ' },
    subtitle: { en: 'Birthpath 9: The Humanitarian Artist', bn: 'বার্থপাথ ৯: মানবতাবাদী শিল্পী' },
    description: {
      en: 'Dr. Sikder embodies the traits of Birthpath 9—compassion, generosity, and global consciousness. This archetype bridges his dual lives: the government officer serving the public welfare and the artist healing souls through melody.',
      bn: 'ডঃ সিকদার বার্থপাথ ৯-এর বৈশিষ্ট্যগুলি ধারণ করেন—করুণা, উদারতা এবং বিশ্বজনীন চেতনা। এই মানসিকতাই তাঁর দ্বৈত সত্তার সেতুবন্ধন—একদিকে জনকল্যাণে নিবেদিত সরকারি আধিকারিক, অন্যদিকে সুরের মাধ্যমে আত্মশুদ্ধির পথপ্রদর্শক শিল্পী।'
    },
    icon: Heart
  },
  {
    title: { en: 'Anima Integration', bn: 'অনিমা ইন্টিগ্রেশন' },
    subtitle: { en: 'Beyond Gender Norms', bn: 'লিঙ্গ পরিচয়ের উর্ধ্বে' },
    description: {
      en: 'His art challenges gender norms not through "cheap sensationalism" but through sophisticated tonal reconstruction. It is a psychological integration of the "Anima" (the female aspect of the male psyche), achieved through pure devotion and forensic vocal study.',
      bn: 'তাঁর শিল্প সস্তা চমক নয়, বরং সুরের এক পরিশীলিত পুনর্নির্মাণ। এটি পুরুষ মনস্তত্ত্বের নারীসত্তা বা "অনিমা"-র এক গভীর মনস্তাত্ত্বিক সংমিশ্রণ, যা কেবল ভক্তি এবং নিখুঁত কণ্ঠ সাধনার মাধ্যমেই অর্জন করা সম্ভব।'
    },
    icon: Scale
  }
];

export const COLLABORATIONS: Collaboration[] = [
  {
    name: { en: 'Anisha Sikder', bn: 'অনিশা সিকদার' },
    relation: { en: 'Father-Daughter Duet', bn: 'পিতা-কন্যার দ্বৈত সঙ্গীত' },
    description: {
      en: 'A legacy of melody passed down. Their collaboration on tracks like "Kabootar Ja Ja Ja" showcases a tender musical dialogue across generations.',
      bn: 'সুরের উত্তরাধিকার। "কবুতর জা জা জা"-এর মতো গানে তাঁদের দ্বৈত পরিবেশনা প্রজন্মের ব্যবধান ঘুচিয়ে এক সুরেলা সংলাপ তৈরি করে।'
    },
    track: 'Kabootar Ja Ja Ja',
    imageAlt: 'Father Daughter'
  },
  {
    name: { en: 'The Bapi-Piklu Duo', bn: 'বাপি-পিকলু জুটি' },
    relation: { en: 'Homage to the Legends', bn: 'কিংবদন্তিদের প্রতি শ্রদ্ধাঞ্জলি' },
    description: {
      en: 'Partnering with "Piklu" (who channels Hemanta Mukherjee), this duo has swept netizens with emotion, recreating the golden era\'s most beloved duets with uncanny authenticity.',
      bn: 'হেমন্ত মুখোপাধ্যায়ের কণ্ঠের জাদুকর "পিকলু"-র সাথে জুটি বেঁধে তাঁরা নেটিজেনদের আবেগে ভাসিয়েছেন। স্বর্ণযুগের সেই কালজয়ী দ্বৈত গানগুলো তাঁদের কণ্ঠে ফিরে পেয়েছে এক অদ্ভুত সজীবতা।'
    },
    imageAlt: 'Bapi Piklu'
  }
];

export const PERSONAS: DualPersona[] = [
  {
    role: { en: 'The Technocrat', bn: 'প্রশাসনিক আধিকারিক' },
    title: { en: 'Senior Govt. Official, ARDD', bn: 'বরিষ্ঠ সরকারি আধিকারিক (ARDD)' },
    description: {
      en: 'A senior technocrat and Appellate Authority safeguarding West Bengal\'s livestock economy. MVSc Gold Medallist executing duties with administrative rigor.',
      bn: 'পশ্চিমবঙ্গ সরকারের প্রাণী সম্পদ বিকাশ বিভাগের বরিষ্ঠ আধিকারিক ও স্বর্ণপদক প্রাপ্ত পশুচিকিৎসক। প্রশাসনিক দক্ষতায় তিনি অনন্য।'
    },
    icon: PenTool,
    themeColor: 'text-blue-400'
  },
  {
    role: { en: 'The Artist', bn: 'শিল্পী' },
    title: { en: 'The Sandhya-Kanthi', bn: 'সন্ধ্যা-কণ্ঠী' },
    description: {
      en: 'Nurtured through "Shruti-Nirbhor Shiksha". A male vocalist performing in a female register with forensic precision, rejecting cheap sensationalism.',
      bn: 'শ্রুতি-নির্ভর শিক্ষার মাধ্যমে সাধিত এক বিরল প্রতিভা। পুরুষকণ্ঠে গীতশ্রী সন্ধ্যা মুখোপাধ্যায়ের হুবহু সুর ও গায়কী।'
    },
    icon: Mic2,
    themeColor: 'text-gold-400'
  }
];

export const VIDEOS: VideoContent[] = [
  // --- Golden Era Solo Classics ---
  {
    title: { en: 'Ei Madhurat (Live)', bn: 'এই মধুরাত (লাইভ)' },
    description: { en: 'Live at Shantiniketan. A complex romantic track requiring precision in breath control and soft dynamics.', bn: 'শান্তিনিকেতনে লাইভ। শ্বাস নিয়ন্ত্রণ এবং সুরের সূক্ষ্ম কাজের এক অনন্য নিদর্শন।' },
    youtubeId: '2a21ZiTYapo',
    tags: ['Live', 'Breath Control'],
    category: 'solo'
  },
  {
    title: { en: 'Ghum Ghum Chand', bn: 'ঘুম ঘুম চাঁদ' },
    description: { en: 'Atmospheric and somnolent; utilizes meend (gliding notes) to convey a dreamy quality.', bn: 'মীড় এবং সুরের জাদুকরী বুননে এক স্বপ্নময় পরিবেশনা।' },
    youtubeId: 'MQ7tv1BE5fM',
    tags: ['Atmospheric', 'Meend'],
    category: 'solo'
  },
  {
    title: { en: 'Ki Mishti Dekho Mishti', bn: 'কি মিষ্টি দেখো মিষ্টি' },
    description: { en: 'A playful, upbeat song demanding high vocal agility and brightness.', bn: 'উচ্ছল এবং প্রাণবন্ত একটি গান যা কণ্ঠের ক্ষিপ্রতার পরিচয় দেয়।' },
    youtubeId: 'lRPF7_aF9Mg',
    tags: ['Upbeat', 'Agility'],
    category: 'solo'
  },
  {
    title: { en: 'Ami Lukate Parini', bn: 'আমি লুকাতে পারিনি' },
    description: { en: 'Highlights the huskiness Dr. Sikder emulates to convey deep pathos and sorrow.', bn: 'বেদনা এবং আবেগের গভীরতা প্রকাশে কণ্ঠের বিশেষ "খাদ" বা গাম্ভীর্যের ব্যবহার।' },
    youtubeId: 'Ig97WgO8IZo',
    tags: ['Pathos', 'Huskiness'],
    category: 'solo'
  },
  {
    title: { en: 'Tumi Je Amar', bn: 'তুমি যে আমার' },
    description: { en: 'A soulful cover of the famous Geeta Dutt melody.', bn: 'গীতা দত্তের বিখ্যাত গানের এক অনবদ্য কাভার।' },
    youtubeId: 't5A6S3B_IAs',
    tags: ['Geeta Dutt', 'Classic'],
    category: 'solo'
  },
  {
    title: { en: 'Natun Surja Alo Dao', bn: 'নতুন সূর্য আলো দাও' },
    description: { en: 'A classic interpretation released under Dolphin Digital.', bn: 'ডলফিন ডিজিটাল লেবেলে প্রকাশিত একটি কালজয়ী গানের রূপায়ণ।' },
    youtubeId: '5V4S8X_4_2A',
    tags: ['Studio', 'Label Release'],
    category: 'solo'
  },
  {
    title: { en: 'Jhara Pata Jhorke Dake', bn: 'ঝরা পাতা ঝড়কে ডাকে' },
    description: { en: 'Capturing the melancholic beauty of nature through melody.', bn: 'সুরের মাধ্যমে প্রকৃতির বিষণ্ণ সৌন্দর্যকে তুলে ধরা হয়েছে।' },
    youtubeId: 'TkpL_t6iV80',
    tags: ['Melancholy', 'Nature'],
    category: 'solo'
  },
  {
    title: { en: 'Ujjwal Ak Jhank Payra', bn: 'উজ্জ্বল এক ঝাঁক পায়রা' },
    description: { en: 'A vibrant cover of the upbeat Sandhya Mukherjee classic.', bn: 'সন্ধ্যা মুখোপাধ্যায়ের একটি প্রাণবন্ত ক্লাসিক গানের কাভার।' },
    youtubeId: '7oH7_DTo6pY',
    tags: ['Upbeat', 'Vibrant'],
    category: 'solo'
  },
  {
    title: { en: 'Best of Animesh Sikdar', bn: 'সেরা গানের সংকলন' },
    description: { en: 'Curated archive of popular digital releases shared by fans.', bn: 'ভক্তদের প্রিয় ডিজিটাল রিলিজের একটি সংকলন।' },
    youtubeId: 'Q4zI-ho7ZN8',
    tags: ['Compilation', 'Hits'],
    category: 'solo'
  },

  // --- Bapi-Piklu: The Nostalgic Duets ---
  {
    title: { en: 'Bapi-Piklu Duet Medley', bn: 'বাপি-পিকলু দ্বৈত মেডেল' },
    description: { en: 'Recreating the legendary Sandhya-Hemanta chemistry with uncanny authenticity.', bn: 'সন্ধ্যা-হেমন্ত জুটির রসায়নকে নিখুঁতভাবে পুনরুজ্জীবিত করা।' },
    youtubeId: 'dcWcjzy5D5k',
    tags: ['Duet', 'Hemanta-Sandhya'],
    category: 'duet'
  },
  {
    title: { en: 'Romantic Duet Collection', bn: 'রোমান্টিক দ্বৈত সংকলন' },
    description: { en: 'Partnering with Piklu to sweep netizens with nostalgic emotion.', bn: 'পিকলুর সাথে জুটিতে শ্রোতাদের নস্টালজিয়ায় ভাসানো।' },
    youtubeId: 'aarGEs8zvDA',
    tags: ['Romance', 'Nostalgia'],
    category: 'duet'
  },
  {
    title: { en: 'Emotional Classic Pairings', bn: 'আবেগঘন ক্লাসিক জুটি' },
    description: { en: 'Golden era dialogues recreated through song.', bn: 'গানের মাধ্যমে স্বর্ণযুগের সংলাপের পুনর্নির্মাণ।' },
    youtubeId: 'pBSArbQoT8o',
    tags: ['Emotion', 'Dialogue'],
    category: 'duet'
  },
  {
    title: { en: 'Jete Jete Kichu Kotha', bn: 'যেতে যেতে কিছু কথা' },
    description: { en: 'A signature duet track often requested by fans.', bn: 'ভক্তদের অনুরোধের একটি জনপ্রিয় দ্বৈত গান।' },
    youtubeId: '8yU7r_aOQo',
    tags: ['Signature', 'Popular'],
    category: 'duet'
  },

  // --- The Father-Daughter Legacy ---
  {
    title: { en: 'Kabootar Ja Ja Ja', bn: 'কবুতর জা জা জা' },
    description: { en: 'Demonstrates versatility beyond Bengali music with daughter Anisha.', bn: 'কন্যা অনিশার সাথে হিন্দি গানে বহুমুখী প্রতিভার স্বাক্ষর।' },
    youtubeId: 'NJvNK1q2SWg',
    tags: ['Hindi', 'Father-Daughter'],
    category: 'legacy'
  },
  {
    title: { en: 'Father-Daughter Special', bn: 'পিতা-কন্যা স্পেশাল' },
    description: { en: 'Artistic mentorship and generational harmony on display.', bn: 'প্রজন্মের মেলবন্ধন এবং শৈল্পিক উত্তরাধিকার।' },
    youtubeId: 'rBC33Z7vnOg',
    tags: ['Mentorship', 'Harmony'],
    category: 'legacy'
  },

  // --- Live Gems & Spiritual Offerings ---
  {
    title: { en: 'Eso Ma Lakshmi', bn: 'এসো মা লক্ষ্মী' },
    description: { en: 'Devotional performance often highlighted during cultural celebrations.', bn: 'সাংস্কৃতিক উৎসবে বহুল প্রচারিত একটি ভক্তিমূলক গান।' },
    youtubeId: '7uK0xU8A2r0',
    tags: ['Devotional', 'Spiritual'],
    category: 'live'
  },
  {
    title: { en: 'Emon Ami Ghar Bendhechhi', bn: 'এমন আমি ঘর বেঁধেছি' },
    description: { en: 'High-stamina stage performance covering a Hemanta classic.', bn: 'হেমন্ত মুখোপাধ্যায়ের ক্লাসিক গানের লাইভ মঞ্চ পরিবেশনা।' },
    youtubeId: 'O8M2L2b2u_M',
    tags: ['Stage', 'Stamina'],
    category: 'live'
  },
  {
    title: { en: 'Live Performance Short', bn: 'লাইভ পারফরম্যান্স ক্লিপ' },
    description: { en: 'A glimpse into the raw power of his live vocals.', bn: 'লাইভ গানে তাঁর কণ্ঠশক্তির এক ঝলক।' },
    youtubeId: 'Cjsf4Z-Ac3A',
    tags: ['Shorts', 'Raw'],
    category: 'live'
  },
  {
    title: { en: 'Tribute to Sandhya Mukhopadhyay', bn: 'গীতশ্রীর প্রতি শ্রদ্ধাঞ্জলি' },
    description: { en: 'A viral medley performed following the legend\'s passing.', bn: 'কিংবদন্তি শিল্পীর প্রয়াণের পর ভাইরাল হওয়া গানের সংকলন।' },
    youtubeId: '8wY3rla3gw4',
    tags: ['Viral', 'Tribute'],
    category: 'live'
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    year: '1968 – 1994',
    type: 'academic',
    title: { en: 'Phase 1: Foundations of Excellence', bn: 'পর্ব ১: শ্রেষ্ঠত্বের ভিত্তি' },
    description: { 
      en: 'Born 1968. Commenced "Shruti-Nirbhor Shiksha" (1981). Gold Medallist M.V.Sc (1993). Joined WBAH&VS (1994), laying the foundation for a life of service.', 
      bn: '১৯৬৮ সালে জন্ম। ১৯৮১ সালে "শ্রুতি-নির্ভর শিক্ষা" শুরু। ১৯৯৩ সালে স্বর্ণপদক সহ M.V.Sc। ১৯৯৪ সালে WBAH&VS-এ যোগদান এবং সেবাব্রতী জীবনের সূচনা।' 
    }
  },
  {
    year: '1995 – 2007',
    type: 'career',
    title: { en: 'Phase 2: Grassroots & Tonal Reconstruction', bn: 'পর্ব ২: তৃণমূল স্তর ও সুর সাধনা' },
    description: { 
      en: 'Served in Jalpaiguri, Birbhum (Cultural Heartland) & Paschim Medinipore. Managed rural livestock while perfecting vocal registers and "Shruti-Nirbhor" practice.', 
      bn: 'জলপাইগুড়ি, বীরভূম (সাংস্কৃতিক কেন্দ্র) ও পশ্চিম মেদিনীপুরে গ্রামীণ সেবা। সীমান্ত এলাকায় পশুপালনের পাশাপাশি "শ্রুতি-নির্ভর" সাধনার মাধ্যমে কণ্ঠস্বরের পূর্ণতা লাভ।' 
    }
  },
  {
    year: '2007 – 2016',
    type: 'career',
    title: { en: 'Phase 3: Technical Mastery & Digital Emergence', bn: 'পর্ব ৩: প্রযুক্তিগত দক্ষতা ও ডিজিটাল উত্থান' },
    description: { 
      en: 'Deputy Director (Microbiology) at IAH&VB (2007-13). Returned to district administration in Dakshin Dinajpur (2013-14). Transitioned to Directorate HQ for central policy-making (2014-16).', 
      bn: '২০০৭-১৩: IAH&VB-তে ডেপুটি ডিরেক্টর (মাইক্রোবায়োলজি)। ২০১৩-১৪: দক্ষিণ দিনাজপুরে জেলা প্রশাসন। ২০১৪-১৬: সদর দপ্তরে কেন্দ্রীয় নীতি নির্ধারণের দায়িত্বে।' 
    }
  },
  {
    year: '2016 – Present',
    type: 'artistic',
    title: { en: 'Phase 4: Senior Leadership & Cultural Iconography', bn: 'পর্ব ৪: বরিষ্ঠ নেতৃত্ব ও সাংস্কৃতিক স্বীকৃতি' },
    description: { 
      en: 'Viral fame on "Dadagiri" (2022). Promoted to Senior Govt. Official (ARDD). Currently in "absolute peak form," harmonizing public service trust with vocal mastery.', 
      bn: '২০২২ সালে "দাদাগিরি"-তে ভাইরাল খ্যাতি। বরিষ্ঠ সরকারি আধিকারিক (ARDD) হিসেবে পদোন্নতি। বর্তমানে জনসেবার আস্থার সাথে সঙ্গীত সাধনার এক অপূর্ব মেলবন্ধনে তিনি "পরম অবস্থানে" বিরাজমান।' 
    }
  }
];

export const PRESS_ITEMS: PressFeature[] = [
  {
    source: { en: 'Dadagiri (Zee Bangla)', bn: 'দাদাগিরি (জি বাংলা)' },
    quote: { 
      en: '"Your voice needs to be preserved... this voice needs to be researched."', 
      bn: '"আপনার কণ্ঠ সংরক্ষণ করা প্রয়োজন... এই কণ্ঠ নিয়ে গবেষণা হওয়া উচিত।"' 
    },
    author: { en: 'Sourav Ganguly', bn: 'সৌরভ গঙ্গোপাধ্যায়' },
    highlight: true
  },
  {
    source: { en: 'The Indian Express', bn: 'দ্য ইন্ডিয়ান এক্সপ্রেস' },
    quote: { 
      en: '"Indistinguishable from the original legend... In a female voice, Animesh is exactly like Sandhya!"', 
      bn: '"মূল শিল্পীর সাথে কোনও পার্থক্য নেই... মহিলা কণ্ঠে অনিমেষ যেন অবিকল সন্ধ্যা!"' 
    }
  },
  {
    source: { en: 'News18 Bangla', bn: 'নিউজ১৮ বাংলা' },
    quote: {
      en: '"A miracle of tonal reconstruction that defies belief."',
      bn: '"সুরের পুনর্নির্মাণের এক অবিশ্বাস্য অলৌকিক নিদর্শন।"'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: { en: 'Sourav Ganguly', bn: 'সৌরভ গঙ্গোপাধ্যায়' },
    role: { en: 'Former Indian Captain', bn: 'প্রাক্তন ভারত অধিনায়ক' },
    quote: { 
      en: 'Your voice needs to be preserved, this voice needs to be researched.', 
      bn: 'আপনার কণ্ঠস্বর সংরক্ষণ করা প্রয়োজন, এই কণ্ঠ নিয়ে গবেষণা করা উচিত।' 
    },
    category: 'icon'
  },
  {
    id: '2',
    author: { en: 'Gitasree Sandhya Mukhopadhyay', bn: 'গীতশ্রী সন্ধ্যা মুখোপাধ্যায়' },
    quote: { 
      en: 'Is this possible? How does he sing this!', 
      bn: 'এও সম্ভব!? কী করে এই গান গায়!' 
    },
    category: 'icon'
  },
  {
    id: '3',
    author: { en: 'The Indian Express', bn: 'দ্য ইন্ডিয়ান এক্সপ্রেস' },
    role: { en: 'Headline Feature', bn: 'শিরোনাম' },
    quote: { 
      en: 'In a female voice Animesh is exactly like Sandhya!', 
      bn: 'নারীকন্ঠে অনিমেষ যেন অবিকল সন্ধ্যা!' 
    },
    category: 'media'
  },
  {
    id: '4',
    author: { en: 'News18 Bangla', bn: 'নিউজ১৮ বাংলা' },
    quote: { 
      en: 'When he sings, there’s no way to tell whether he or Sandhya Mukherjee is singing.', 
      bn: 'উনি যখন গান গান, বোঝা অসম্ভব উনি গাইছেন না সন্ধ্যা মুখোপাধ্যায় গাইছেন।' 
    },
    category: 'media'
  },
  {
    id: '5',
    author: { en: 'Shovan Ganguly', bn: 'শোভন গঙ্গোপাধ্যায়' },
    role: { en: 'Singer & Host', bn: 'গায়ক ও সঞ্চালক' },
    quote: { 
      en: 'Animesh Sikder, in whose voice Goddess Saraswati herself resides...', 
      bn: 'অনিমেষ সিকদার, যার কন্ঠে স্বয়ং মা সরস্বতী বিরাজমান...' 
    },
    category: 'peer'
  },
  {
    id: '6',
    author: { en: 'International Admirer (France)', bn: 'আন্তর্জাতিক ভক্ত (ফ্রান্স)' },
    quote: { 
      en: 'Deeply moved by the resonance and authenticity of his voice across borders.', 
      bn: 'সীমানা ছাড়িয়ে তাঁর কণ্ঠের অনুরণন ও অকৃত্রিমতা আমাকে গভীরভাবে স্পর্শ করেছে।' 
    },
    category: 'fan'
  },
  {
    id: '7',
    author: { en: 'Young Admirer (USA)', bn: 'তরুণ ভক্ত (আমেরিকা)' },
    quote: { 
      en: 'A voice that bridges generations and brings the Golden Era to the modern world.', 
      bn: 'এমন এক কণ্ঠ যা প্রজন্মকে সেতুবন্ধনে আবদ্ধ করে এবং স্বর্ণযুগকে আধুনিক বিশ্বে ফিরিয়ে আনে।' 
    },
    category: 'fan'
  },
  {
    id: '8',
    author: { en: 'Cultural Netizens', bn: 'নেটিজেনরা' },
    quote: { 
      en: 'Netizens are again swept with emotion by the Bapi-Piklu pair.', 
      bn: 'বাপি-পিকলু জুটির গানে নেটিজেনরা আবারও আবেগে ভাসলেন।' 
    },
    category: 'fan'
  },
  {
    id: '9',
    author: { en: 'Music Critics', bn: 'সঙ্গীত সমালোচক' },
    quote: { 
      en: 'The "Oustad" (Master) of singing these iconic songs with forensic precision.', 
      bn: 'এই কালজয়ী গানগুলিকে নিখুঁতভাবে গাওয়ার তিনি এক "ওস্তাদ"।' 
    },
    category: 'media'
  },
  {
    id: '10',
    author: { en: 'Professional Peers', bn: 'সহকর্মীবৃন্দ' },
    role: { en: 'Administrative Dept.', bn: 'প্রশাসনিক বিভাগ' },
    quote: { 
      en: 'A rare synthesis—a demanding professional boss who is simultaneously a uniquely gifted artist.', 
      bn: 'এক বিরল সংমিশ্রণ—একজন কড়া পেশাদার বস যিনি একইসাথে এক অনন্য প্রতিভাধর শিল্পী।' 
    },
    category: 'peer'
  },
  {
    id: '11',
    author: { en: 'Listener from Bangladesh', bn: 'বাংলাদেশের শ্রোতা' },
    quote: { 
      en: 'A voice that unites hearts beyond borders, inviting us back to our shared cultural roots.', 
      bn: 'সীমানার ওপারেও হৃদয় জোড়া এক কণ্ঠ, যা আমাদের অভিন্ন সাংস্কৃতিক শিকড়ে ফিরিয়ে নিয়ে যায়।' 
    },
    category: 'fan'
  },
  {
    id: '12',
    author: { en: 'Indian Express', bn: 'ইন্ডিয়ান এক্সপ্রেস' },
    role: { en: 'Review', bn: 'রিভিউ' },
    quote: { 
      en: 'For 43 years, he has sung these iconic songs extremely fluently.', 
      bn: '৪৩ বছর ধরে তিনি এই কালজয়ী গানগুলো অত্যন্ত সাবলীলভাবে গেয়ে চলেছেন।' 
    },
    category: 'media'
  },
  {
    id: '13',
    author: { en: 'News18 Bangla', bn: 'নিউজ১৮ বাংলা' },
    quote: { 
      en: 'Due to social media, his songs became truly viral, capturing millions of admirers.', 
      bn: 'সোশ্যাল মিডিয়ার দৌলতে তাঁর গান ভাইরাল হয়েছে, লক্ষ লক্ষ মানুষের মন জয় করেছে।' 
    },
    category: 'media'
  },
  {
    id: '14',
    author: { en: 'Gangasagar Audience', bn: 'গঙ্গাসাগরের শ্রোতা' },
    quote: { 
      en: 'The stamina to hold an audience for over 2 hours and 25 minutes through vocal quality alone is breathtaking.', 
      bn: 'শুধুমাত্র কণ্ঠের জাদুতে ২ ঘণ্টা ২৫ মিনিট শ্রোতাদের মন্ত্রমুগ্ধ করে রাখার ক্ষমতা সত্যিই বিস্ময়কর।' 
    },
    category: 'fan'
  },
  {
    id: '15',
    author: { en: 'News Profile', bn: 'নিউজ প্রোফাইল' },
    role: { en: 'Technical Assessment', bn: 'প্রযুক্তিগত মূল্যায়ন' },
    quote: { 
      en: 'A doctorate-level manager-rank official who captures the timeless quality of the original legend.', 
      bn: 'ডক্টরেট এবং উচ্চপদস্থ আধিকারিক হয়েও তিনি কিংবদন্তি শিল্পীর কালজয়ী সুরকে ধারণ করেছেন।' 
    },
    category: 'media'
  },
  {
    id: '16',
    author: { en: 'Mental Effects Band', bn: 'মেন্টাল ইফেক্টস ব্যান্ড' },
    role: { en: 'Collaborators', bn: 'সহযোগী' },
    quote: { 
      en: 'His vocal ability is not a gimmick or "cheap sensationalism" but a deeply nurtured spiritual tribute.', 
      bn: 'তাঁর গায়কী কোনো সস্তা চমক নয়, বরং এক গভীর আধ্যাত্মিক সাধনা।' 
    },
    category: 'peer'
  }
];

export const GLOBAL_IMPACT = {
  title: { en: 'Global Human Connection', bn: 'বিশ্বজনীন মানবিক সংযোগ' },
  description: {
    en: 'Success is measured not in awards, but in human connection. From the streets of Kolkata to fans in France, the USA, and Bangladesh, his voice transcends borders.',
    bn: 'সাফল্য পুরস্কারে নয়, মানবিক সংযোগে পরিমাপ করা হয়। কলকাতার রাজপথ থেকে শুরু করে ফ্রান্স, আমেরিকা এবং বাংলাদেশের ভক্তদের হৃদয়ে তাঁর সুর সীমানা ছাড়িয়ে গেছে।'
  },
  locations: ['France', 'USA', 'Bangladesh', 'India']
};

export const CLOSING_QUOTE = {
  en: "Dr. Sikder’s life functions like a finely balanced scale: the heavy brass weights of administrative law on one side are perfectly countered by the ethereal weightlessness of a melody on the other, both required to achieve a state of perfect equilibrium.",
  bn: "ডঃ সিকদারের জীবন যেন এক সূক্ষ্মভাবে ভারসাম্যপূর্ণ পাল্লা: একদিকে প্রশাসনিক আইনের গুরুভার, অন্যদিকে সুরের ইথারীয় লঘুতা—উভয়ের সংমিশ্রণেই অর্জিত হয় এক পূর্ণাঙ্গ সাম্যাবস্থা।"
};

export const CONTACT_INFO = {
  address: { en: 'Bansdroni, Kolkata', bn: 'বাঁশদ্রোণী, কলকাতা' },
  phone: '9830272609',
  website: 'animeshsikder.com',
  email: 'dr.animeshsikder@gmail.com',
  googleForm: 'https://docs.google.com/forms/d/e/1FAIpQLSe9Igy_-hvbHgyU2Xg3sv1QtNKUTql6lqmPetV1YACJ4_tIYQ/viewform?usp=header',
  social: {
    facebook: 'https://www.facebook.com/animesh.sikder',
    instagram: 'https://www.instagram.com/sikder_animesh/?hl=en',
    youtube: 'https://youtube.com/playlist?list=PLQQ3ss2mvv0qBa477sroMJsiWY8MnKUZ3&si=ebwjmbk5pGN_cYEQ'
  },
  tags: ['#AnimeshSikder', '#SandhyaKanthi', '#BapiPiklu']
};