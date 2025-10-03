import React from 'react';
import { Box } from '@mui/material';
// import staircaseImage from '../../../assets/staircase-illustration.svg';

/**
 * @todo Substituir a URL da imagem por um arquivo SVG local quando disponível.
 * @returns {JSX.Element}
 * @description Componente que exibe uma ilustração conceitual de uma escada.
 */
const ConceptualSVG = () => {
  return (
    <Box
      component="img"
      src="https://static.vecteezy.com/system/resources/previews/016/916/479/non_2x/placeholder-icon-design-free-vector.jpg"
      alt="Ilustração de uma escada"
      sx={{
        width: '100%',
        maxWidth: { xs: '180px', md: '250px' }, // Tamanho responsivo
        height: 'auto',
      }}
    />
  );
};

export default ConceptualSVG;