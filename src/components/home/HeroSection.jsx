import React from 'react';
import { Box, Typography, Grid, Paper, useTheme } from '@mui/material';
import Logo from '../common/Logo';
import StaircaseCTA from './StaircaseCTA';

const HeroSection = () => {
  const theme = useTheme();

  // Função que vai lidar com o scroll suave
  const handleScrollToServices = () => {
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box
      sx={{
        marging: '0 auto',
        minHeight: '100vh',
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        p: { xs: 2, md: 4 },
      }}
    >
      {/* Logo centralizada no topo */}
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: { xs: 4, md: 6 }, mb: { xs: 6, md: 8 } }}>
        <Logo color={theme.palette.text.primary} />
      </Box>

      {/* Conteúdo lado a lado */}
      <Grid
        container
        spacing={6}
        sx={{
          maxWidth: '1200px',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Texto à esquerda */}
        <Grid item xs={12} md={6}>
          <Box sx={{ pr: { md: 6 } }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 3,
                color: theme.palette.text.primary,
                letterSpacing: '-0.03em',
              }}
            >
              Fundação sólida,<br />
              <Box component="span" sx={{ color: theme.palette.primary.main, fontWeight: 900 }}>
                moderna
              </Box>
              <br />
              para experiências digitais.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: theme.palette.text.secondary,
                fontSize: '1.25rem',
                maxWidth: 420,
              }}
            >
              Construímos soluções inovadoras com base forte, visão direta e design marcante. Sua fundação para o futuro digital começa aqui.
            </Typography>
          </Box>
        </Grid>

        {/* Card preto à direita */}
        <Grid item xs={12} md={6}>
          <Paper
            elevation={0}
            sx={{
              backgroundColor: theme.palette.background.dark,
              height: { xs: '260px', md: '400px' },
              width: '100%',
              borderRadius: 3,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
            }}
          >
            {/* Seu componente de destaque */}
            <StaircaseCTA onClick={handleScrollToServices} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;