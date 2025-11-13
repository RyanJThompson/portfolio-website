import { Box, Container, Typography, Grid, TextField, Button, Paper, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Box id="contact" sx={{ py: 10, bgcolor: 'white' }}>
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
          Get In Touch
        </Typography>
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.secondary',
          }}
        >
          Have a project in mind? Let's work together!
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
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
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      py: 1.5,
                      fontSize: '1.1rem',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                      },
                    }}
                  >
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h5" sx={{ mb: 3, fontWeight: 'bold' }}>
                Let's Connect
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, color: 'text.secondary', lineHeight: 1.8 }}>
                I'm always interested in hearing about new projects and opportunities.
                Whether you have a question or just want to say hi, feel free to reach out!
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
                <Button
                  variant="outlined"
                  startIcon={<EmailIcon />}
                  href="mailto:your.email@example.com"
                  sx={{
                    borderColor: '#667eea',
                    color: '#667eea',
                    '&:hover': {
                      borderColor: '#764ba2',
                      bgcolor: 'rgba(102, 126, 234, 0.1)',
                    },
                  }}
                >
                  Email
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  href="https://github.com"
                  target="_blank"
                  sx={{
                    borderColor: '#667eea',
                    color: '#667eea',
                    '&:hover': {
                      borderColor: '#764ba2',
                      bgcolor: 'rgba(102, 126, 234, 0.1)',
                    },
                  }}
                >
                  GitHub
                </Button>
              </Stack>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  startIcon={<LinkedInIcon />}
                  href="https://linkedin.com"
                  target="_blank"
                  sx={{
                    borderColor: '#667eea',
                    color: '#667eea',
                    '&:hover': {
                      borderColor: '#764ba2',
                      bgcolor: 'rgba(102, 126, 234, 0.1)',
                    },
                  }}
                >
                  LinkedIn
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<TwitterIcon />}
                  href="https://twitter.com"
                  target="_blank"
                  sx={{
                    borderColor: '#667eea',
                    color: '#667eea',
                    '&:hover': {
                      borderColor: '#764ba2',
                      bgcolor: 'rgba(102, 126, 234, 0.1)',
                    },
                  }}
                >
                  Twitter
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 6, textAlign: 'center', color: 'text.secondary' }}>
          <Typography variant="body2">
            © 2024 Your Name. Built with React, TypeScript, and Material UI.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
