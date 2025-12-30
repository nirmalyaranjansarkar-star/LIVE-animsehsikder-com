import React from 'react';

export type Language = 'en' | 'bn';

export interface NavItem {
  id: string;
  label: {
    en: string;
    bn: string;
  };
}

export interface DualPersona {
  role: { en: string; bn: string };
  title: { en: string; bn: string };
  description: { en: string; bn: string };
  icon: React.ElementType;
  themeColor: string;
}

export type VideoCategory = 'solo' | 'duet' | 'legacy' | 'live';

export interface VideoContent {
  title: { en: string; bn: string };
  description: { en: string; bn: string };
  youtubeId: string; // Extracting ID from URL
  tags: string[];
  category: VideoCategory;
}

export interface TimelineEvent {
  year: string;
  title: { en: string; bn: string };
  description: { en: string; bn: string };
  type: 'academic' | 'artistic' | 'career';
}

export interface PressFeature {
  source: { en: string; bn: string };
  quote: { en: string; bn: string };
  author?: { en: string; bn: string };
  highlight?: boolean;
}

export interface Testimonial {
  id: string;
  quote: { en: string; bn: string };
  author: { en: string; bn: string };
  role?: { en: string; bn: string };
  category: 'media' | 'icon' | 'peer' | 'fan';
}

export interface PsychProfile {
  title: { en: string; bn: string };
  subtitle: { en: string; bn: string };
  description: { en: string; bn: string };
  icon: React.ElementType;
}

export interface Collaboration {
  name: { en: string; bn: string };
  relation: { en: string; bn: string };
  description: { en: string; bn: string };
  track?: string;
  imageAlt: string;
}