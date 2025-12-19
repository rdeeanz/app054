import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqs = [
    "What is Google Analytics 4 (GA4)?",
    "Who should use Google Analytics 4 (GA4)?",
    "How does Google Analytics 4 (GA4) work?",
    "I'm already using Google Analytics, so why should I switch to GA4?",
    "Can't I upgrade to GA4 by simply updating the code?",
    "Who should I work with (Our Partner or Me)?",
    "When can I expect my GA4 to be up & running?",
    "How much does this service cost?",
    "How can I get support from your team?",
    "Do you offer any discounts?",
    "Can I request a refund?"
];

const FAQ = () => {
    return (
        <Box sx={{ py: 8, bgcolor: 'white' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
                    Frequently Asked Questions
                </Typography>

                <Box sx={{ maxWidth: 800, mx: 'auto' }}>
                    {faqs.map((question, index) => (
                        <Accordion key={index} elevation={0} disableGutters sx={{ '&:before': { display: 'none' }, borderBottom: '1px solid #e0e0e0' }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon sx={{ color: '#5f6368' }} />}
                                aria-controls={`panel${index}-content`}
                                id={`panel${index}-header`}
                                sx={{ px: 0 }}
                            >
                                <Typography sx={{ fontWeight: 500, fontSize: '0.95rem' }}>{question}</Typography>
                            </AccordionSummary>
                            <AccordionDetails sx={{ px: 0, color: '#5f6368' }}>
                                <Typography variant="body2">
                                    {/* Placeholder answer content */}
                                    Google Analytics 4 is an analytics service that enables you to measure traffic and engagement across your websites and apps. It uses machine learning to provide insights and predictive capabilities.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default FAQ;
