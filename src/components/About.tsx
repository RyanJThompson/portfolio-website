import { Box, Container, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import CodeIcon from '@mui/icons-material/Code';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SpeedIcon from '@mui/icons-material/Speed';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const About = () => {
  const highlights = [
    {
      icon: <CodeIcon sx={{ fontSize: { xs: 40, md: 50 } }} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that stands the test of time',
    },
    {
      icon: <LightbulbIcon sx={{ fontSize: { xs: 40, md: 50 } }} />,
      title: 'Innovation',
      description: 'Exploring cutting-edge technologies and creative solutions',
    },
    {
      icon: <SpeedIcon sx={{ fontSize: { xs: 40, md: 50 } }} />,
      title: 'Performance',
      description: 'Optimizing for speed and delivering lightning-fast experiences',
    },
    {
      icon: <AutoAwesomeIcon sx={{ fontSize: { xs: 40, md: 50 } }} />,
      title: 'Attention to Detail',
      description: 'Pixel-perfect designs and seamless user interactions',
    },
  ];

  return (
    <Box
      id="about"
      sx={{
        py: { xs: 10, md: 15 },
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography
            sx={{
              fontSize: { xs: '0.875rem', md: '1rem' },
              fontWeight: 600,
              color: '#00ff88',
              letterSpacing: '0.1em',
              mb: 2,
            }}
          >
            ABOUT ME
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: '2rem', md: '3.5rem' },
              mb: 3,
              background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Building the Future,
            <br />
            One Line at a Time
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#a0a0a0',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.8,
              fontSize: { xs: '1rem', md: '1.125rem' },
              fontWeight: 400,
            }}
          >
            Passionate developer with expertise in modern web technologies. I transform
            complex challenges into elegant, scalable solutions.
          </Typography>
        </Box>

        {/* Bento Box Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gridTemplateRows: { xs: 'auto', md: 'repeat(2, 280px)' },
            gap: 2,
          }}
        >
          {/* Large card - spans 2 columns */}
          <Box
            sx={{
              gridColumn: { xs: 'span 1', md: 'span 2' },
              gridRow: { xs: 'auto', md: 'span 1' },
              background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 204, 255, 0.1) 100%)',
              border: '1px solid rgba(0, 255, 136, 0.2)',
              borderRadius: '24px',
              p: { xs: 3, md: 5 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 20px 60px rgba(0, 255, 136, 0.2)',
                border: '1px solid rgba(0, 255, 136, 0.4)',
              },
              '&:before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: '-100%',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                animation: `${shimmer} 3s infinite`,
              },
            }}
          >
            <Box sx={{ color: '#00ff88', mb: 2 }}>{highlights[0].icon}</Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              {highlights[0].title}
            </Typography>
            <Typography sx={{ color: '#a0a0a0', fontSize: '1.125rem', lineHeight: 1.6 }}>
              {highlights[0].description}
            </Typography>
          </Box>

          {/* Medium card */}
          <Box
            sx={{
              gridColumn: { xs: 'span 1', md: 'span 1' },
              background: 'rgba(17, 17, 17, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              p: { xs: 3, md: 4 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              transition: 'all 0.4s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                border: '1px solid rgba(0, 204, 255, 0.4)',
                boxShadow: '0 20px 60px rgba(0, 204, 255, 0.15)',
              },
            }}
          >
            <Box sx={{ color: '#00ccff', mb: 2 }}>{highlights[1].icon}</Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              {highlights[1].title}
            </Typography>
            <Typography sx={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.6 }}>
              {highlights[1].description}
            </Typography>
          </Box>

          {/* Medium card */}
          <Box
            sx={{
              gridColumn: { xs: 'span 1', md: 'span 1' },
              background: 'rgba(17, 17, 17, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              p: { xs: 3, md: 4 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              transition: 'all 0.4s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                border: '1px solid rgba(0, 255, 136, 0.4)',
                boxShadow: '0 20px 60px rgba(0, 255, 136, 0.15)',
              },
            }}
          >
            <Box sx={{ color: '#00ff88', mb: 2 }}>{highlights[2].icon}</Box>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              {highlights[2].title}
            </Typography>
            <Typography sx={{ color: '#a0a0a0', fontSize: '1rem', lineHeight: 1.6 }}>
              {highlights[2].description}
            </Typography>
          </Box>

          {/* Large card - spans 2 columns */}
          <Box
            sx={{
              gridColumn: { xs: 'span 1', md: 'span 2' },
              gridRow: { xs: 'auto', md: 'span 1' },
              background: 'linear-gradient(135deg, rgba(0, 204, 255, 0.1) 0%, rgba(138, 43, 226, 0.1) 100%)',
              border: '1px solid rgba(0, 204, 255, 0.2)',
              borderRadius: '24px',
              p: { xs: 3, md: 5 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.4s ease',
              '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 20px 60px rgba(0, 204, 255, 0.2)',
                border: '1px solid rgba(0, 204, 255, 0.4)',
              },
            }}
          >
            <Box sx={{ color: '#00ccff', mb: 2 }}>{highlights[3].icon}</Box>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 2 }}>
              {highlights[3].title}
            </Typography>
            <Typography sx={{ color: '#a0a0a0', fontSize: '1.125rem', lineHeight: 1.6 }}>
              {highlights[3].description}
            </Typography>
          </Box>
        </Box>

        {/* Experience Section */}
        <Box
          sx={{
            mt: 8,
            p: { xs: 3, md: 5 },
            background: 'rgba(17, 17, 17, 0.5)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 2,
              background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Let's Build Something Amazing Together
          </Typography>
          <Typography sx={{ color: '#a0a0a0', fontSize: '1.125rem', lineHeight: 1.8 }}>
            I'm always excited to collaborate on innovative projects and bring creative ideas to life.
            Whether it's a startup MVP or enterprise solution, I'm here to help.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
