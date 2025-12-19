import { Box, Button, Container, Typography, Grid } from '@mui/material';
import AnalyticsIcon from '@mui/icons-material/Analytics';

const Hero = () => {
    return (
        <Box sx={{ backgroundColor: '#f8f9fa', py: 8 }}>
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    {/* Left Content */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
                            Set up <span style={{ color: '#4285F4' }}>Google</span> <br />
                            Analytics 4 (GA4)
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ color: '#5f6368', mb: 4, lineHeight: 1.8 }}>
                            With GA4, you can see how people are finding your website, where they arrive, and what they do. We help set that up so you can make the right improvements.
                            Get the help of Google-certified professionals to set up GA4 the right way.
                        </Typography>

                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button variant="contained" size="large" sx={{ backgroundColor: '#4285F4', borderRadius: '50px', textTransform: 'none', px: 4 }}>
                                Schedule a quote
                            </Button>
                            <Button variant="outlined" size="large" sx={{ borderRadius: '50px', textTransform: 'none', px: 4, borderColor: '#dadce0', color: '#4285F4' }}>
                                My Plans
                            </Button>
                        </Box>
                    </Grid>

                    {/* Right Illustration Placeholder */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Box
                            sx={{
                                backgroundColor: '#e8f0fe',
                                borderRadius: 4,
                                height: 400,
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px dashed #4285F4'
                            }}
                        >
                            {/* Abstract elements representing dashboard */}
                            <Box sx={{ textAlign: 'center' }}>
                                <AnalyticsIcon sx={{ fontSize: 80, color: '#4285F4', mb: 2 }} />
                                <Typography variant="h6" color="primary">Analytics Dashboard</Typography>
                            </Box>

                            {/* Floating decorative cards */}
                            <Box sx={{
                                position: 'absolute', top: 40, left: -20,
                                bgcolor: 'white', p: 2, borderRadius: 2, boxShadow: 2
                            }}>
                                <Typography variant="caption" sx={{ fontWeight: 'bold' }}>Users</Typography>
                                <Typography variant="h6" color="primary">12.5k</Typography>
                            </Box>
                            <Box sx={{
                                position: 'absolute', bottom: 60, right: -20,
                                bgcolor: 'white', p: 2, borderRadius: 2, boxShadow: 2
                            }}>
                                <Typography variant="caption" sx={{ fontWeight: 'bold' }}>Events</Typography>
                                <Typography variant="h6" color="secondary">85%</Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
