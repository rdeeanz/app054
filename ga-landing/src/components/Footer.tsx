import { Box, Button, Container, InputBase, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
    return (
        <Box>
            {/* Newsletter Section */}
            <Box sx={{ bgcolor: '#4285F4', py: 8, color: 'white' }}>
                <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                        Subscribe to our emails
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4, opacity: 0.9 }}>
                        Join 1M+ people who get our best content and vital updates.
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            maxWidth: 500,
                            mx: 'auto',
                            bgcolor: 'white',
                            borderRadius: '50px',
                            p: 0.5,
                            pl: 3
                        }}
                    >
                        <InputBase
                            placeholder="Enter your email"
                            fullWidth
                            sx={{ color: '#202124' }}
                        />
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: '50px',
                                bgcolor: '#fbbc04',
                                color: '#202124',
                                fontWeight: 'bold',
                                px: 4,
                                textTransform: 'none',
                                '&:hover': { bgcolor: '#f9ab00' }
                            }}
                        >
                            Send
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* Bottom Links */}
            <Box sx={{ bgcolor: '#white', py: 4, borderTop: '1px solid #e0e0e0' }}>
                <Container maxWidth="lg">
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid>
                            <Typography variant="h6" component="span" sx={{ color: '#5f6368', fontWeight: 'bold', mr: 4 }}>
                                Google
                            </Typography>
                        </Grid>
                        <Grid>
                            <Box sx={{ display: 'flex', gap: 3 }}>
                                {['Search', 'Terms', 'Privacy', 'Contacts'].map((link) => (
                                    <Link key={link} href="#" underline="hover" sx={{ color: '#5f6368', fontSize: '0.875rem' }}>
                                        {link}
                                    </Link>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>

                    <Box sx={{ mt: 4, pt: 4, borderTop: '1px solid #f1f3f4', textAlign: 'center' }}>
                        <Typography variant="caption" sx={{ color: '#9aa0a6' }}>
                            © 2023 Google Project · +1 555 555 5555 · Registered No. 12345678 · Suite 03, Santa Monica, CA, 90291, USA
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Footer;
