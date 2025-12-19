import { Box, Container, Typography, List, ListItem, ListItemIcon, ListItemText, Paper, Grid } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

// Mock data based on screenshot analysis
const featuresData = [
    {
        title: "Learn which marketing channels to invest in",
        description: "Google Analytics reports show you where your visitors are finding you, compared to other Google Analytics users.",
        points: [
            "Measure advertising ROI and promotion",
            "Give proper credit with attribution",
            "Group valuable customers with audiences",
            "Use Google Analytics together with Google Ads"
        ],
        imageSide: "right"
    },
    {
        title: "Find out which improvements will drive the most revenue & cash flow",
        description: "GA4's Funnel Exploration Report is very good at showing you where particular people leave your site. You can use this info to improve your website or app. You can also create audiences based on where people exit, and then use them to market with Google Ads.",
        points: [
            "Visualize the steps visitors take towards conversion",
            "See where visitors enter & leave your funnel",
            "Segment the report to analyze reasons for drop-off",
            "Add visitors who leave to an audience for remarketing"
        ],
        imageSide: "left"
    },
    {
        title: "Quickly get answers to important business questions",
        description: "GA4's Enhanced Measurement feature automatically collects data on common visitor actions like page views, scroll, clicks, video, etc. So there's no need to wait for developers to write build up.",
        points: [
            "Which channels are my best customers coming from?",
            "How many visitors pages did our most recent buy?",
            "Who are territories hidden filling up my lead form?"
        ],
        imageSide: "right"
    }
];

const Features = () => {
    return (
        <Box sx={{ py: 8, bgcolor: '#fbfcfe' }}>
            <Container maxWidth="lg">
                {featuresData.map((feature, index) => (
                    <Grid
                        container
                        spacing={8}
                        alignItems="center"
                        key={index}
                        direction={feature.imageSide === 'left' ? 'row-reverse' : 'row'}
                        sx={{ mb: 10 }}
                    >
                        {/* Text Side */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
                                {feature.title}
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ color: '#5f6368', mb: 3 }}>
                                {feature.description}
                            </Typography>

                            <List>
                                {feature.points.map((point, idx) => (
                                    <ListItem key={idx} disableGutters>
                                        <ListItemIcon sx={{ minWidth: 40 }}>
                                            <CheckCircleIcon color="primary" fontSize="small" />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={point}
                                            primaryTypographyProps={{ variant: 'body2', sx: { fontWeight: 500 } }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>

                        {/* Image/Mockup Side */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Paper
                                elevation={3}
                                sx={{
                                    height: 350,
                                    bgcolor: 'white',
                                    borderRadius: 4,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: '1px solid #f1f3f4',
                                    overflow: 'hidden'
                                }}
                            >
                                {/* Placeholder for complex UI screenshot */}
                                <Box sx={{ p: 4, width: '100%', height: '100%', bgcolor: '#e8f0fe', display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    {/* Mock UI Elements */}
                                    <Box sx={{ height: 20, width: '40%', bgcolor: 'white', borderRadius: 1 }} />
                                    <Grid container spacing={1}>
                                        <Grid size={{ xs: 8 }}><Box sx={{ height: 150, bgcolor: 'white', borderRadius: 1 }} /></Grid>
                                        <Grid size={{ xs: 4 }}><Box sx={{ height: 150, bgcolor: '#d2e3fc', borderRadius: 1 }} /></Grid>
                                    </Grid>
                                    <Box sx={{ height: 80, width: '100%', bgcolor: 'white', borderRadius: 1 }} />
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                ))}
            </Container>
        </Box>
    );
};

export default Features;
