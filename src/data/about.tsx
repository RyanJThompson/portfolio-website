import CodeIcon from '@mui/icons-material/Code';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SpeedIcon from '@mui/icons-material/Speed';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import type { Highlight } from '../types';

export const highlights: Highlight[] = [
  {
    icon: <CodeIcon sx={{ fontSize: { xs: 40, md: 50 } }} />,
    title: 'Cross-Platform Development',
    description: 'Building seamless experiences across web and mobile with React and React Native',
  },
  {
    icon: <LightbulbIcon sx={{ fontSize: { xs: 40, md: 50 } }} />,
    title: 'Performance Optimization',
    description: 'Accelerated release velocity by 50% through decoupling architecture and GCP optimization',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: { xs: 40, md: 50 } }} />,
    title: 'Scalable Solutions',
    description: 'Delivered features driving 20,000+ new subscriptions with real-time traffic management',
  },
  {
    icon: <AutoAwesomeIcon sx={{ fontSize: { xs: 40, md: 50 } }} />,
    title: 'Test Automation',
    description: 'Built end-to-end testing frameworks from scratch, using Playwright and WebDriverIO',
  },
];
