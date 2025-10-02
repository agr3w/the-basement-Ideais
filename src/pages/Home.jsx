import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useScroll, useMotionValueEvent } from 'framer-motion';

import HeroSection from '../components/HeroSection/HeroSection';
// Importe a próxima seção quando ela estiver pronta
// import ServicesSection from '../components/ServicesSection/ServicesSection';

const Home = () => {
  // Estado para o efeito de "zoom-out"
  const [isScrolled, setIsScrolled] = useState(false);

  // Hooks do Framer Motion para detectar scroll
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    // Gatilho da animação com base no seu Milanote
    setIsScrolled(latest > 50);
  });

  return (
    <Box sx={{ backgroundColor: '#333333' }}>
      
      {/* Container da HeroSection com animação de padding */}
      <Box 
        sx={{ 
          height: '100vh',
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          position: 'sticky',
          top: 0,
          padding: isScrolled ? { xs: '16px', md: '32px' } : '0px',
          transition: 'padding 0.5s ease-in-out',
        }}
      >
        <HeroSection />
      </Box>
      
      {/* Container da próxima seção com o ID para o scroll */}
      <Box id="service-section">
        {/* <ServicesSection /> */}
        {/* Placeholder para forçar o scroll */}
        <Box sx={{ height: '100vh', p: 4 }}>
            <h1 style={{color: 'white'}}>Próxima Seção (Serviços)</h1>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;