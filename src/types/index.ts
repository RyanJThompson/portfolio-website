export type { Project } from './project';
export type { SkillCategory } from './skill';
export type { ContactFormData, FormStatus, SocialLink } from './contact';

export interface Highlight {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface Stat {
  number: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
}
