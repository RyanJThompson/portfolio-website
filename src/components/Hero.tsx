import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { keyframes } from '@emotion/react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Hero = () => {
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
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        pt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ animation: `${fadeIn} 1s ease-out` }}>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
            }}
          >
            Hello, I'm <span style={{ color: '#FFD700' }}>Your Name</span>
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mb: 4,
              fontWeight: 300,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            }}
          >
            Full Stack Developer & Creative Problem Solver
          </Typography>
          <Typography
            variant="h6"
            sx={{
              mb: 4,
              maxWidth: '600px',
              lineHeight: 1.6,
              opacity: 0.9,
            }}
          >
            I build exceptional digital experiences that make a difference.
            Passionate about creating elegant solutions to complex problems.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Button
              variant="contained"
              size="large"
              onClick={() => scrollToSection('projects')}
              sx={{
                bgcolor: 'white',
                color: '#667eea',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  bgcolor: '#f0f0f0',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s',
                },
              }}
            >
              View My Work
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => scrollToSection('contact')}
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateY(-2px)',
                  transition: 'all 0.3s',
                },
              }}
            >
              Contact Me
            </Button>
          </Stack>
          <Box
            sx={{
              mt: 8,
              display: 'flex',
              justifyContent: 'center',
              animation: 'bounce 2s infinite',
              '@keyframes bounce': {
                '0%, 20%, 50%, 80%, 100%': {
                  transform: 'translateY(0)',
                },
                '40%': {
                  transform: 'translateY(-10px)',
                },
                '60%': {
                  transform: 'translateY(-5px)',
                },
              },
            }}
          >
            <ArrowDownwardIcon sx={{ fontSize: 40, opacity: 0.7, cursor: 'pointer' }} onClick={() => scrollToSection('about')} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
