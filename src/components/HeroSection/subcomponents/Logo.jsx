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
      component="img"
      src={logoImage}
      alt="The Basement Logo"
      sx={{
        height: "120px", // Altura responsiva
        width: 'auto',
      }}
    />
  );
};

export default Logo;