import type { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    category: 'Languages',
    color: '#00ff88',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Shell (Bash)'],
  },
  {
    category: 'Frontend & Mobile',
    color: '#00ccff',
    skills: ['React Native', 'React', 'Redux', 'React Query', 'Expo', 'Next.js', 'Vite', 'SwiftUI', 'Tailwind CSS', 'Material UI ', 'Radix UI', 'Storybook', 'Contentstack'],
  },
  {
    category: 'Backend & APIs',
    color: '#ff6b6b',
    skills: ['Node.js', 'GraphQL', 'Redis', 'Supabase'],
  },
  {
    category: 'Cloud & DevOps',
    color: '#ffd166',
    skills: ['Google Cloud Platform (GCP)', 'AWS', 'Concourse CI', 'Octopus Deploy', 'Firebase'],
  },
  {
    category: 'Testing & Automation',
    color: '#06ffa5',
    skills: ['Playwright', 'WebDriverIO', 'Jest', 'CI/CD Integration'],
  },
  {
    category: 'Monitoring & Analytics',
    color: '#ff66c4',
    skills: ['Grafana', 'Kibana', 'Optimizely'],
  },
];
