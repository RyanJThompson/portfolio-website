import { Box, Container, Typography, TextField, Button, Stack, IconButton, Alert, CircularProgress } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useContactForm } from '../hooks';
import { socialLinks } from '../data/socials';
import { COLORS } from '../constants';

const Contact = () => {
  const { formData, loading, status, handleChange, handleSubmit } = useContactForm();

  return (
    <Box
      id="contact"
      sx={{
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(10, 10, 10, 0) 0%, rgba(17, 17, 17, 0.5) 100%)',
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
            GET IN TOUCH
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
            Let's Create Something
            <br />
            Amazing Together
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
            Have a project in mind or just want to chat? I'm always open to discussing new opportunities and ideas.
          </Typography>
        </Box>

        {/* Contact Form and Info */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' },
            gap: 4,
          }}
        >
          {/* Form */}
          <Box
            sx={{
              background: 'rgba(17, 17, 17, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '24px',
              p: { xs: 3, md: 5 },
            }}
          >
            <form onSubmit={handleSubmit}>
              <Stack spacing={3}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#ffffff',
                      borderRadius: '12px',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(0, 255, 136, 0.4)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#00ff88',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: COLORS.text.secondary,
                      '&.Mui-focused': {
                        color: COLORS.primary,
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#ffffff',
                      borderRadius: '12px',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(0, 255, 136, 0.4)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#00ff88',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: COLORS.text.secondary,
                      '&.Mui-focused': {
                        color: COLORS.primary,
                      },
                    },
                  }}
                />
                <TextField
                  fullWidth
                  label="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  multiline
                  rows={6}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#ffffff',
                      borderRadius: '12px',
                      '& fieldset': {
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(0, 255, 136, 0.4)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#00ff88',
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: COLORS.text.secondary,
                      '&.Mui-focused': {
                        color: COLORS.primary,
                      },
                    },
                  }}
                />

                {status.type && (
                  <Alert
                    severity={status.type}
                    sx={{
                      borderRadius: '12px',
                      '& .MuiAlert-message': {
                        color: '#ffffff'
                      }
                    }}
                  >
                    {status.message}
                  </Alert>
                )}

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={loading}
                  endIcon={loading ? <CircularProgress size={20} sx={{ color: '#0a0a0a' }} /> : <SendIcon />}
                  sx={{
                    bgcolor: '#00ff88',
                    color: '#0a0a0a',
                    py: 1.8,
                    fontSize: '1rem',
                    fontWeight: 700,
                    borderRadius: '12px',
                    '&:hover': {
                      bgcolor: '#00ff88',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 10px 40px rgba(0, 255, 136, 0.3)',
                    },
                    '&:disabled': {
                      bgcolor: '#a0a0a0',
                      color: '#0a0a0a',
                    },
                    transition: 'all 0.3s',
                  }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </Stack>
            </form>
          </Box>

          {/* Contact Info */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
            }}
          >
            {/* Social Links */}
            <Box
              sx={{
                background: 'rgba(17, 17, 17, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                p: { xs: 3, md: 4 },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: '#ffffff',
                }}
              >
                Connect With Me
              </Typography>
              <Stack spacing={2}>
                {socialLinks.map((link, index) => (
                  <Box
                    key={index}
                    component="a"
                    href={link.href}
                    target={link.label !== 'Email' ? '_blank' : undefined}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 2,
                      borderRadius: '12px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#ffffff',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        border: '1px solid rgba(0, 255, 136, 0.4)',
                        bgcolor: 'rgba(0, 255, 136, 0.05)',
                        transform: 'translateX(10px)',
                        '& .social-icon': {
                          color: COLORS.primary,
                        },
                      },
                    }}
                  >
                    <IconButton
                      className="social-icon"
                      sx={{
                        color: COLORS.text.secondary,
                        bgcolor: 'rgba(255, 255, 255, 0.05)',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {link.icon}
                    </IconButton>
                    <Typography sx={{ fontWeight: 600 }}>{link.label}</Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* Quick Info */}
            <Box
              sx={{
                background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.1) 0%, rgba(0, 204, 255, 0.1) 100%)',
                border: '1px solid rgba(0, 255, 136, 0.2)',
                borderRadius: '24px',
                p: { xs: 3, md: 4 },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 2,
                  color: '#ffffff',
                }}
              >
                Let's Connect
              </Typography>
              <Typography
                sx={{
                  color: COLORS.text.secondary,
                  lineHeight: 1.8,
                }}
              >
                Currently working at Sky as a Front-End Engineer. Open to discussing new opportunities,
                collaboration, and innovative projects.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Footer */}
        <Box
          sx={{
            mt: 10,
            pt: 6,
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              color: COLORS.text.secondary,
              fontSize: '0.875rem',
            }}
          >
            © 2024 Ryan Thompson. Built with React, TypeScript, and Material UI.
          </Typography>
          <Typography
            sx={{
              color: COLORS.text.secondary,
              fontSize: '0.875rem',
              mt: 1,
            }}
          >
            Front-End Engineer at Sky | University of Leeds Graduate
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
