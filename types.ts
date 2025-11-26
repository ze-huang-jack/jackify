import React from 'react';

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  imageUrl: string;
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Soft Skills';
  level: number; // 1-100
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}