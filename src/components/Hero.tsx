import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { keyframes } from '@emotion/react';
import { useState, useEffect } from 'react';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 255, 136, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(0, 255, 136, 0.6), 0 0 60px rgba(0, 204, 255, 0.3);
  }
`;

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: 10, md: 8 },
      }}
    >
      {/* Floating orbs */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: { xs: '200px', md: '400px' },
          height: { xs: '200px', md: '400px' },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 255, 136, 0.15), transparent 70%)',
          animation: `${float} 6s ease-in-out infinite`,
          pointerEvents: 'none',
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: { xs: '150px', md: '300px' },
          height: { xs: '150px', md: '300px' },
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 204, 255, 0.15), transparent 70%)',
          animation: `${float} 8s ease-in-out infinite`,
          animationDelay: '1s',
          pointerEvents: 'none',
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />

      <Container maxWidth="lg">
        <Box
          sx={{
            animation: `${fadeInUp} 0.8s ease-out`,
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          {/* Small intro label */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 1,
              mb: 3,
              border: '1px solid rgba(0, 255, 136, 0.3)',
              borderRadius: '50px',
              background: 'rgba(0, 255, 136, 0.05)',
              animation: `${glow} 3s ease-in-out infinite`,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: '#00ff88',
                animation: `${glow} 2s ease-in-out infinite`,
              }}
            />
            <Typography
              sx={{
                fontSize: '0.875rem',
                fontWeight: 500,
                color: '#00ff88',
                letterSpacing: '0.05em',
              }}
            >
              AVAILABLE FOR WORK
            </Typography>
          </Box>

          {/* Main heading */}
          <Typography
            variant="h1"
            sx={{
              fontWeight: 900,
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '4rem', md: '5.5rem', lg: '7rem' },
              lineHeight: 1.1,
              background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Crafting Digital
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Experiences
            </span>
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              fontWeight: 400,
              color: '#a0a0a0',
              maxWidth: '700px',
              fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
              lineHeight: 1.6,
              mx: { xs: 'auto', md: 0 },
            }}
          >
            Full-stack developer specializing in building exceptional digital products.
            Turning complex problems into elegant solutions.
          </Typography>

          {/* CTA Buttons */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              mb: 6,
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => scrollToSection('projects')}
              sx={{
                bgcolor: '#00ff88',
                color: '#0a0a0a',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '12px',
                border: '2px solid transparent',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  bgcolor: '#00ff88',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 10px 40px rgba(0, 255, 136, 0.3)',
                },
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: '-100%',
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
                  transition: 'left 0.5s',
                },
                '&:hover:before': {
                  left: '100%',
                },
                transition: 'all 0.3s',
              }}
            >
              View Projects
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => scrollToSection('contact')}
              sx={{
                borderColor: 'rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 700,
                borderRadius: '12px',
                borderWidth: '2px',
                '&:hover': {
                  borderColor: '#00ff88',
                  bgcolor: 'rgba(0, 255, 136, 0.1)',
                  transform: 'translateY(-2px)',
                  borderWidth: '2px',
                },
                transition: 'all 0.3s',
              }}
            >
              Get in Touch
            </Button>
          </Stack>

          {/* Stats */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={4}
            sx={{
              pt: 4,
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            {[
              { number: '5+', label: 'Years Experience' },
              { number: '50+', label: 'Projects Completed' },
              { number: '30+', label: 'Happy Clients' },
            ].map((stat, index) => (
              <Box key={index} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography
                  sx={{
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    lineHeight: 1.2,
                  }}
                >
                  {stat.number}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '0.875rem',
                    color: '#a0a0a0',
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>

      {/* Scroll indicator */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          cursor: 'pointer',
          opacity: 0.6,
          transition: 'opacity 0.3s',
          '&:hover': {
            opacity: 1,
          },
        }}
        onClick={() => scrollToSection('about')}
      >
        <Typography sx={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em' }}>
          SCROLL
        </Typography>
        <Box
          sx={{
            width: 1,
            height: 40,
            bgcolor: '#00ff88',
            animation: `${fadeInUp} 1.5s ease-in-out infinite`,
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero;
