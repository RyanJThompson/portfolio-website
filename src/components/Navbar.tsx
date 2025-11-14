import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const menuItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const drawer = (
    <Box
      sx={{
        height: '100%',
        bgcolor: '#0a0a0a',
        p: 3,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#ffffff' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {menuItems.map((item) => (
          <ListItem
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            sx={{
              cursor: 'pointer',
              borderRadius: '8px',
              transition: 'all 0.3s',
              '&:hover': {
                bgcolor: 'rgba(0, 255, 136, 0.1)',
                transform: 'translateX(10px)',
              },
            }}
          >
            <Typography
              sx={{
                fontSize: '1.5rem',
                fontWeight: 600,
                color: '#ffffff',
              }}
            >
              {item.label}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: scrolled
            ? 'rgba(10, 10, 10, 0.8)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          transition: 'all 0.3s ease',
          py: { xs: 0.5, md: 1 },
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 800,
              cursor: 'pointer',
              fontSize: { xs: '1.25rem', md: '1.5rem' },
              background: 'linear-gradient(135deg, #00ff88 0%, #00ccff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-0.02em',
            }}
            onClick={() => scrollToSection('home')}
          >
            PORTFOLIO
          </Typography>

          {isMobile ? (
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              <IconButton
                href="https://github.com/ryan-thompson0"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  '&:hover': {
                    bgcolor: 'rgba(0, 255, 136, 0.1)',
                    borderColor: '#00ff88',
                  },
                }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  '&:hover': {
                    bgcolor: 'rgba(0, 255, 136, 0.1)',
                    borderColor: '#00ff88',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              {menuItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: '#ffffff',
                    px: 2.5,
                    py: 1,
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    borderRadius: '8px',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      bgcolor: 'rgba(0, 255, 136, 0.1)',
                      color: '#00ff88',
                    },
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      width: 0,
                      height: '2px',
                      bgcolor: '#00ff88',
                      transition: 'all 0.3s',
                      transform: 'translateX(-50%)',
                    },
                    '&:hover:before': {
                      width: '80%',
                    },
                    transition: 'all 0.3s',
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <IconButton
                href="https://github.com/ryan-thompson0"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#ffffff',
                  ml: 1,
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  '&:hover': {
                    bgcolor: 'rgba(0, 255, 136, 0.1)',
                    borderColor: '#00ff88',
                    color: '#00ff88',
                    transform: 'translateY(-2px)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                <GitHubIcon />
              </IconButton>
              <Button
                variant="outlined"
                onClick={() => scrollToSection('contact')}
                sx={{
                  ml: 1,
                  borderColor: '#00ff88',
                  color: '#00ff88',
                  px: 3,
                  py: 1,
                  fontSize: '0.875rem',
                  fontWeight: 700,
                  borderRadius: '8px',
                  borderWidth: '2px',
                  '&:hover': {
                    borderColor: '#00ff88',
                    bgcolor: 'rgba(0, 255, 136, 0.1)',
                    borderWidth: '2px',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 10px 30px rgba(0, 255, 136, 0.2)',
                  },
                  transition: 'all 0.3s',
                }}
              >
                Hire Me
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: '80%',
              maxWidth: '300px',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};

export default Navbar;
