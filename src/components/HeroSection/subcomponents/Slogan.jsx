import React from 'react';
import { Typography } from '@mui/material';


/**
 * @returns {JSX.Element}
 * @description Componente que exibe o slogan principal da seção Hero.
 */
const Slogan = () => {
  return (
    <Typography variant="h3" component="h1" color="text.primary">
      Fundação sólida
      <br />
      para soluções
      <br />
      inteligentes
    </Typography>
  );
};

export default Slogan;