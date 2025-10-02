import React from 'react';
import { Box, Grid, Paper } from '@mui/material';

import Logo from './subcomponents/Logo';
import Slogan from './subcomponents/Slogan';
import ConceptualSVG from './subcomponents/ConceptualSVG';
import ScrollArrow from './subcomponents/ScrollArrow';

const HeroSection = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById('service-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // Simplesmente aplicamos nossa variante customizada!
    <Paper variant="heroContainer"> 
      <Box>
        <Logo />
      </Box>

      <Grid container spacing={2} alignItems="center" my={2}>
        <Grid item xs={12} md={7}>
          <Slogan />
        </Grid>
        <Grid item xs={12} md={5} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <ConceptualSVG />
        </Grid>
      </Grid>

      <Box>
        <ScrollArrow onClick={handleScroll} />
      </Box>
    </Paper>
  );
};

export default HeroSection;