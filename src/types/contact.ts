import type { ReactNode } from 'react';

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface FormStatus {
  type: 'success' | 'error' | null;
  message: string;
}

export interface SocialLink {
  icon: ReactNode;
  label: string;
  href: string;
}
