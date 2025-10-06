import React from 'react';
import { Box } from '@mui/material';
import logoImage from '../../../assets/logo-the-basement.png';

/**
 * @returns {JSX.Element}
 * @description Componente que renderiza el logo de The Basement.
 */
const Logo = () => {
  return (
    <Box
      component="span"
      sx={{
        fontWeight: 'bold',
        fontSize: { xs: '2rem', md: '2.5rem' },
        letterSpacing: '0.05em',
        color: 'theme.palette.primary.main',
        fontFamily: 'Montserrat, Arial, sans-serif',
        textTransform: 'uppercase',
        display: 'inline-block',
      }}
    >
      The Wavem
    </Box>
  );
};

export default Logo;