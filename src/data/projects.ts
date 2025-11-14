import type { Project } from '../types';

export const projects: Project[] = [
  {
    title: 'Language Toolkit',
    description: 'A comprehensive language learning platform featuring real-time translation, vocabulary management, EPUB reader and OCR Scanner. Built with React Native, Typescript and native module integration. Actively being developed as it is a passion of mine.',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80',
    technologies: ['React Native', 'TypeScript', 'Native Modules', 'AWS'],
    github: 'https://github.com/RyanJThompson/LangLang-Expo',
  },
  {
    title: 'Ecommerce Store',
    description: 'Full-featured online shopping platform with demo product catalog, shopping cart, secure checkout, and order management. Designed for optimal performance and user engagement.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    technologies: ['React', 'Next.js', 'Zod', 'Vite', 'Radix UI' ,'TypeScript', 'API Integration'],
    github: 'https://github.com/RyanJThompson/ECommerceStore',
  },
];
