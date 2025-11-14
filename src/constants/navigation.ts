import type { NavItem } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: 'home' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Contact', href: 'contact' },
];

export const SECTION_IDS = {
  HOME: 'home',
  ABOUT: 'about',
  SKILLS: 'skills',
  PROJECTS: 'projects',
  CONTACT: 'contact',
} as const;
