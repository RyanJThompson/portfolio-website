import { Box, Container, Typography, Chip, Stack, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { projects } from '../data/projects';
import { COLORS } from '../constants';

const Projects = () => {

  return (
    <Box
      id="projects"
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
              color: COLORS.primary,
              letterSpacing: '0.1em',
              mb: 2,
            }}
          >
            FEATURED WORK
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
            Projects That
            <br />
            Make an Impact
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: COLORS.text.secondary,
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.8,
              fontSize: { xs: '1rem', md: '1.125rem' },
              fontWeight: 400,
            }}
          >
            A selection of recent projects showcasing innovation, technical excellence, and user-centric design
          </Typography>
        </Box>

        {/* Projects Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 3,
          }}
        >
          {projects.map((project, index) => (
            <Box
              key={index}
              sx={{
                gridColumn: 'span 1',
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                background: 'rgba(17, 17, 17, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.4s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  border: '1px solid rgba(0, 255, 136, 0.4)',
                  boxShadow: '0 20px 60px rgba(0, 255, 136, 0.15)',
                  '& .project-image': {
                    transform: 'scale(1.1)',
                  },
                  '& .project-overlay': {
                    opacity: 1,
                  },
                  '& .project-arrow': {
                    transform: 'translate(5px, -5px)',
                  },
                },
              }}
            >
              {/* Image */}
              <Box
                sx={{
                  position: 'relative',
                  height: { xs: '200px', md: '300px' },
                  overflow: 'hidden',
                  background: 'rgba(0, 0, 0, 0.5)',
                }}
              >
                <Box
                  className="project-image"
                  component="img"
                  src={project.image}
                  alt={project.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease',
                    opacity: 0.7,
                  }}
                />
                <Box
                  className="project-overlay"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.3) 0%, rgba(0, 204, 255, 0.3) 100%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                  }}
                />
              </Box>

              {/* Content */}
              <Box
                sx={{
                  p: { xs: 3, md: 4 },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    mb: 2,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 700,
                      color: COLORS.text.primary,
                      fontSize: { xs: '1.5rem', md: '2rem' },
                    }}
                  >
                    {project.title}
                  </Typography>
                  <ArrowOutwardIcon
                    className="project-arrow"
                    sx={{
                      color: COLORS.primary,
                      fontSize: 32,
                      transition: 'transform 0.3s ease',
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    color: COLORS.text.secondary,
                    fontSize: { xs: '0.9rem', md: '1rem' },
                    lineHeight: 1.7,
                    mb: 3,
                  }}
                >
                  {project.description}
                </Typography>

                {/* Technologies */}
                <Stack direction="row" flexWrap="wrap" gap={1} mb={3}>
                  {project.technologies.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      label={tech}
                      sx={{
                        bgcolor: 'rgba(0, 255, 136, 0.1)',
                        color: COLORS.primary,
                        fontWeight: 600,
                        fontSize: '0.75rem',
                        border: '1px solid rgba(0, 255, 136, 0.3)',
                        borderRadius: '6px',
                        height: '28px',
                      }}
                    />
                  ))}
                </Stack>

                {/* Links */}
                <Stack direction="row" spacing={2}>
                  <IconButton
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: COLORS.text.primary,
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      '&:hover': {
                        bgcolor: 'rgba(0, 255, 136, 0.1)',
                        borderColor: '#00ff88',
                        color: COLORS.primary,
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <GitHubIcon />
                  </IconButton>
                </Stack>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
