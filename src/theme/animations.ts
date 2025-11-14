import { keyframes } from '@emotion/react';

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

export const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(0, 255, 136, 0.6), 0 0 60px rgba(0, 204, 255, 0.3);
  }
`;

export const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;
