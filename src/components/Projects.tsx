import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Button, CardActions, Chip, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=500',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates, drag-and-drop functionality, and team features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500',
      technologies: ['TypeScript', 'React', 'Firebase', 'Material UI'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with location-based forecasts, interactive maps, and historical data visualization.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for tracking social media metrics, engagement rates, and audience insights.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500',
      technologies: ['Python', 'Django', 'React', 'PostgreSQL'],
      github: '#',
      demo: '#',
    },
    {
      title: 'Portfolio Generator',
      description: 'SaaS platform that helps developers create stunning portfolio websites with customizable templates.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500',
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'Prisma'],
      github: '#',
      demo: '#',
    },
    {
      title: 'AI Chatbot',
      description: 'Intelligent chatbot with natural language processing, context awareness, and multi-language support.',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=500',
      technologies: ['Python', 'TensorFlow', 'React', 'WebSocket'],
      github: '#',
      demo: '#',
    },
  ];

  return (
    <Box id="projects" sx={{ py: 10, bgcolor: '#f5f5f5' }}>
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
          Featured Projects
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.secondary',
          }}
        >
          Some of my recent work and side projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: 8,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3" fontWeight="bold">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {project.description}
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {project.technologies.map((tech, techIndex) => (
                      <Chip
                        key={techIndex}
                        label={tech}
                        size="small"
                        sx={{
                          bgcolor: '#667eea',
                          color: 'white',
                          fontWeight: 500,
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>
                <CardActions sx={{ p: 2, pt: 0 }}>
                  <Button
                    size="small"
                    startIcon={<GitHubIcon />}
                    href={project.github}
                    sx={{ color: '#667eea' }}
                  >
                    Code
                  </Button>
                  <Button
                    size="small"
                    startIcon={<LaunchIcon />}
                    href={project.demo}
                    sx={{ color: '#667eea' }}
                  >
                    Demo
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects;
