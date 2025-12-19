import { Box, Button, Card, CardContent, CardActions, Container, Typography, Chip, List, ListItem, ListItemIcon, ListItemText, Grid } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const pricingPlans = [
    {
        title: 'Starter',
        price: '15',
        features: ['1 website', 'Core installation (GA4)', 'Key events & reports', 'Top 5 opportunities report', 'Personalized training call', '30 days support'],
        highlighted: false
    },
    {
        title: 'Ecommerce',
        price: '20',
        features: ['1 website', 'Core installation (GA4)', 'Key events & reports', 'Top 5 opportunities report', 'Personalized training call', '30 days support'],
        highlighted: false
    },
    {
        title: 'Business',
        price: '25',
        features: ['1 website', 'Core installation (GA4)', 'Key events & reports', 'Top 5 opportunities report', 'Personalized training call', '90 days support'],
        highlighted: true,
        tag: 'Popular'
    },
    {
        title: 'Enterprise',
        price: '30',
        features: ['1 website', 'Core installation (GA4)', 'Key events & reports', 'Top 5 opportunities report', 'Personalized training call', '90 days support'],
        highlighted: false
    }
];

const Pricing = () => {
    return (
        <Box sx={{ py: 10, bgcolor: 'white' }}>
            <Container maxWidth="lg">
                <Box sx={{ textAlign: 'center', mb: 6 }}>
                    <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold', mb: 1 }}>
                        Select a plan that works for you
                    </Typography>
                </Box>

                <Grid container spacing={3}>
                    {pricingPlans.map((plan) => (
                        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={plan.title}>
                            <Card
                                elevation={plan.highlighted ? 8 : 1}
                                sx={{
                                    borderRadius: 4,
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    border: plan.highlighted ? 'none' : '1px solid #e0e0e0',
                                    backgroundColor: plan.highlighted ? '#4285F4' : 'white',
                                    color: plan.highlighted ? 'white' : 'inherit',
                                    position: 'relative',
                                    transition: 'transform 0.2s',
                                    '&:hover': { transform: 'translateY(-5px)' }
                                }}
                            >
                                {plan.highlighted && plan.tag && (
                                    <Chip
                                        label={plan.tag}
                                        size="small"
                                        sx={{
                                            position: 'absolute', top: 16, right: 16,
                                            bgcolor: '#fbbc04', color: '#202124', fontWeight: 'bold'
                                        }}
                                    />
                                )}

                                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                                        {plan.title}
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3 }}>
                                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                                            ${plan.price}
                                        </Typography>
                                        <Typography variant="body2" sx={{ opacity: 0.8, ml: 1 }}>
                                            / month
                                        </Typography>
                                    </Box>

                                    <Typography variant="body2" sx={{ mb: 2, opacity: 0.8 }}>
                                        For most businesses that want to optimize with data.
                                    </Typography>

                                    <List dense>
                                        {plan.features.map((feature, idx) => (
                                            <ListItem key={idx} disableGutters sx={{ py: 0.5 }}>
                                                <ListItemIcon sx={{ minWidth: 32 }}>
                                                    <CheckIcon fontSize="small" sx={{ color: plan.highlighted ? 'white' : '#4285F4' }} />
                                                </ListItemIcon>
                                                <ListItemText
                                                    primary={feature}
                                                    primaryTypographyProps={{ variant: 'caption', sx: { opacity: plan.highlighted ? 1 : 0.7 } }}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </CardContent>
                                <CardActions sx={{ p: 3, pt: 0 }}>
                                    <Button
                                        fullWidth
                                        variant={plan.highlighted ? "contained" : "outlined"}
                                        sx={{
                                            borderRadius: '50px',
                                            bgcolor: plan.highlighted ? 'white' : 'transparent',
                                            color: plan.highlighted ? '#4285F4' : '#4285F4',
                                            borderColor: '#dadce0',
                                            textTransform: 'none',
                                            '&:hover': {
                                                bgcolor: plan.highlighted ? '#f1f3f4' : '#f8f9fa'
                                            }
                                        }}
                                    >
                                        Purchase
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Pricing;
