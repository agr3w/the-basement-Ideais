import React from 'react';
import { IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

/**
 * @param {*} onClick Função a ser chamada ao clicar na seta 
 * @returns {JSX.Element}
 * @description Componente de seta para rolar para a próxima seção
 */
const ScrollArrow = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} aria-label="Rolar para a próxima seção">
      <ArrowDownwardIcon />
    </IconButton>
  );
};

export default ScrollArrow;