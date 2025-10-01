import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

// Ícones para cada serviço
import CodeIcon from '@mui/icons-material/Code'; // Para Desenvolvimento
import PaletteIcon from '@mui/icons-material/Palette'; // Para UI/UX
import DnsIcon from '@mui/icons-material/Dns'; // Para Backend/Sistemas

const services = [
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: 'Desenvolvimento Front-end',
    description: 'Criamos interfaces ricas e responsivas com as tecnologias mais modernas do mercado, como React.js, garantindo uma experiência de usuário fluida e performática.'
  },
  {
    icon: <PaletteIcon sx={{ fontSize: 40 }} />,
    title: 'UI/UX Design',
    description: 'Nossa filosofia é que a função e a forma andam juntas. Desenhamos interfaces intuitivas e esteticamente agradáveis que resolvem problemas reais para os usuários.'
  },
  {
    icon: <DnsIcon sx={{ fontSize: 40 }} />,
    title: 'Sistemas Web Completos',
    description: 'Desenvolvemos soluções end-to-end, do banco de dados à interface, construindo sistemas robustos, escaláveis e seguros para o seu negócio.'
  }
];

const ServicesSection = () => {
  return (
    <Box sx={{ py: 12, backgroundColor: 'background.paper' }}> {/* Fundo de cor diferente para contraste */}
      <Container maxWidth="lg">
        <Typography variant="h2" component="h2" textAlign="center" sx={{ mb: 8 }}>
          Nossa Expertise
        </Typography>
        <Grid container spacing={4}>
          {services.map((service) => (
            <Grid item xs={12} md={4} key={service.title}>
              <Paper 
                elevation={0} // Sem sombra, para um look flat
                variant="outlined"
                sx={{ 
                  p: 4, 
                  textAlign: 'center', 
                  borderColor: 'rgba(255, 255, 255, 0.1)',
                  height: '100%' 
                }}
              >
                <Box color="primary.main" sx={{ mb: 2 }}>
                  {service.icon}
                </Box>
                <Typography variant="h5" component="h3" sx={{ mb: 2 }}>
                  {service.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {service.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;