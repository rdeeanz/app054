import { CssBaseline, ThemeProvider, createTheme, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a73e8', // Google Blue standard
    },
    text: {
      primary: '#202124',
      secondary: '#5f6368',
    }
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    body1: {
      fontSize: '1.125rem', // 18px
    },
    body2: {
      fontSize: '1rem', // 16px
    },
    button: {
      textTransform: 'none',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <Hero />
        <Pricing />
        <Features />
        <FAQ />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
