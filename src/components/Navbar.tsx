import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, useTheme, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState, useEffect } from 'react';
import { useScrollToSection } from '../hooks';
import { NAV_ITEMS, COLORS } from '../constants';
import { socialLinks } from '../data/socials';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const scrollToSection = useScrollToSection();

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

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      sx={{
        height: '100%',
        bgcolor: COLORS.background.default,
        p: 3,
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#ffffff' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {NAV_ITEMS.map((item) => (
          <ListItem
            key={item.href}
            onClick={() => handleNavClick(item.href)}
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
                color: COLORS.text.primary,
              }}
            >
              {item.label}
            </Typography>
          </ListItem>
        ))}
      </List>

      {/* Social Links in Mobile Drawer */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          mt: 4,
          pt: 4,
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        {socialLinks.map((link, index) => (
          <IconButton
            key={index}
            component="a"
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: COLORS.text.primary,
              border: '2px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '12px',
              p: 1.5,
              '&:hover': {
                bgcolor: 'rgba(0, 255, 136, 0.1)',
                borderColor: COLORS.primary,
                color: COLORS.primary,
              },
              transition: 'all 0.3s',
            }}
          >
            {link.icon}
          </IconButton>
        ))}
      </Box>
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
              {socialLinks.slice(0, 1).map((link, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: COLORS.text.primary,
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '8px',
                    p: 1,
                    '&:hover': {
                      bgcolor: 'rgba(0, 255, 136, 0.1)',
                      borderColor: COLORS.primary,
                    },
                  }}
                >
                  {link.icon}
                </IconButton>
              ))}
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  color: COLORS.text.primary,
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
              {NAV_ITEMS.map((item) => (
                <Button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  sx={{
                    color: COLORS.text.primary,
                    px: 2.5,
                    py: 1,
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    borderRadius: '8px',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': {
                      bgcolor: 'rgba(0, 255, 136, 0.1)',
                      color: COLORS.primary,
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
              <Box sx={{ display: 'flex', gap: 0.5, ml: 1 }}>
                {socialLinks.map((link, index) => (
                  <IconButton
                    key={index}
                    component="a"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: COLORS.text.primary,
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      borderRadius: '8px',
                      p: 1,
                      '&:hover': {
                        bgcolor: 'rgba(0, 255, 136, 0.1)',
                        borderColor: COLORS.primary,
                        color: COLORS.primary,
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s',
                    }}
                  >
                    {link.icon}
                  </IconButton>
                ))}
              </Box>
              <Button
                variant="outlined"
                onClick={() => scrollToSection('contact')}
                sx={{
                  ml: 1,
                  borderColor: '#00ff88',
                  color: COLORS.primary,
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
