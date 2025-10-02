import React from 'react';
import { Box } from '@mui/material';
import logoImage from '../../../assets/logo-the-basement.png';

const Logo = () => {
  return (
    <Box
      component="img"
      src={logoImage}
      alt="The Basement Logo"
      sx={{
        height: { xs: '32px', md: '40px' }, // Altura responsiva
        width: 'auto',
      }}
    />
  );
};

export default Logo;