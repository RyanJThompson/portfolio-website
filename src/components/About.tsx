import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GroupsIcon from '@mui/icons-material/Groups';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const About = () => {
  const highlights = [
    {
      icon: <CodeIcon sx={{ fontSize: 40 }} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code is my passion.',
    },
    {
      icon: <LightbulbIcon sx={{ fontSize: 40 }} />,
      title: 'Innovation',
      description: 'Always exploring new technologies and creative solutions.',
    },
    {
      icon: <GroupsIcon sx={{ fontSize: 40 }} />,
      title: 'Collaboration',
      description: 'Strong team player with excellent communication skills.',
    },
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 40 }} />,
      title: 'Fast Learner',
      description: 'Quick to adapt and master new frameworks and tools.',
    },
  ];

  return (
    <Box id="about" sx={{ py: 10, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 2,
            fontWeight: 'bold',
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          About Me
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.secondary',
            maxWidth: '800px',
            mx: 'auto',
          }}
        >
          I'm a passionate developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I love
          turning ideas into reality through code.
        </Typography>
        <Grid container spacing={4}>
          {highlights.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={3}
                sx={{
                  p: 3,
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: 6,
                  },
                }}
              >
                <Box sx={{ color: '#667eea', mb: 2 }}>{item.icon}</Box>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
