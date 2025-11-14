import { Box, Container, Typography, Chip } from '@mui/material';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      color: '#00ff88',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Shell (Bash)'],
    },
    {
      category: 'Frontend & Mobile',
      color: '#00ccff',
      skills: ['React Native', 'React', 'Redux', 'React Query', 'Expo', 'Next.js', 'Vite', 'SwiftUI', 'Tailwind CSS', 'Storybook', 'Contentstack'],
    },
    {
      category: 'Backend & APIs',
      color: '#ff6b6b',
      skills: ['Node.js', 'GraphQL', 'Redis', 'Supabase'],
    },
    {
      category: 'Cloud & DevOps',
      color: '#ffd166',
      skills: ['Google Cloud Platform (GCP)', 'AWS', 'Concourse CI', 'Octopus Deploy', 'Firebase'],
    },
    {
      category: 'Testing & Automation',
      color: '#06ffa5',
      skills: ['Playwright', 'WebDriverIO', 'Jest', 'CI/CD Integration'],
    },
    {
      category: 'Monitoring & Analytics',
      color: '#ff66c4',
      skills: ['Grafana', 'Kibana', 'Optimizely'],
    },
  ];

  return (
    <Box
      id="skills"
      sx={{
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(10, 10, 10, 0) 0%, rgba(17, 17, 17, 0.5) 50%, rgba(10, 10, 10, 0) 100%)',
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
            SKILLS & EXPERTISE
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
            Tech Stack &
            <br />
            Core Competencies
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
            Mastering the tools and technologies to build exceptional digital experiences
          </Typography>
        </Box>

        {/* Skills Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {skillCategories.map((category, index) => (
            <Box
              key={index}
              sx={{
                background: 'rgba(17, 17, 17, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                p: { xs: 3, md: 4 },
                transition: 'all 0.4s ease',
                position: 'relative',
                overflow: 'hidden',
                '&:hover': {
                  transform: 'translateY(-10px)',
                  border: `1px solid ${category.color}40`,
                  boxShadow: `0 20px 60px ${category.color}20`,
                },
                '&:before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: `linear-gradient(90deg, ${category.color}, transparent)`,
                },
              }}
            >
              {/* Category Header */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  mb: 3,
                  pb: 2,
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: '50%',
                    bgcolor: category.color,
                    boxShadow: `0 0 20px ${category.color}80`,
                  }}
                />
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: '#ffffff',
                  }}
                >
                  {category.category}
                </Typography>
              </Box>

              {/* Skills */}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 1.5,
                }}
              >
                {category.skills.map((skill, skillIndex) => (
                  <Chip
                    key={skillIndex}
                    label={skill}
                    sx={{
                      bgcolor: 'rgba(255, 255, 255, 0.05)',
                      color: '#ffffff',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px',
                      px: 1,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        bgcolor: `${category.color}20`,
                        borderColor: category.color,
                        color: category.color,
                        transform: 'translateY(-2px)',
                        boxShadow: `0 5px 15px ${category.color}30`,
                      },
                    }}
                  />
                ))}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Bottom CTA */}
        <Box
          sx={{
            mt: 10,
            textAlign: 'center',
            p: { xs: 4, md: 6 },
            background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.05) 0%, rgba(0, 204, 255, 0.05) 100%)',
            border: '1px solid rgba(0, 255, 136, 0.2)',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 50%)',
              animation: 'rotate 20s linear infinite',
            },
            '@keyframes rotate': {
              '0%': {
                transform: 'rotate(0deg)',
              },
              '100%': {
                transform: 'rotate(360deg)',
              },
            },
          }}
        >
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: 'linear-gradient(135deg, #ffffff 0%, #a0a0a0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Always Learning, Always Growing
            </Typography>
            <Typography
              sx={{
                color: '#a0a0a0',
                fontSize: '1.125rem',
                maxWidth: '600px',
                mx: 'auto',
              }}
            >
              Technology evolves rapidly, and so do I. I'm constantly expanding my skill set
              to deliver cutting-edge solutions.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Skills;
