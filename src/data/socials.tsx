import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import type { SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  {
    icon: <EmailIcon />,
    label: 'Ryan_JThompson@outlook.com',
    href: 'mailto:Ryan_JThompson@outlook.com'
  },
  {
    icon: <LinkedInIcon />,
    label: 'linkedin.com/in/ryanthom100',
    href: 'https://linkedin.com/in/ryanthom100'
  },
  {
    icon: <GitHubIcon />,
    label: 'GitHub',
    href: 'https://github.com'
  },
];
