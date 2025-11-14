import { Box, CssBaseline, ThemeProvider } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { theme } from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{
        minHeight: '100vh',
        position: 'relative',
        zIndex: 2,
      }}>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Box>
    </ThemeProvider>
  );
}

export default App;
