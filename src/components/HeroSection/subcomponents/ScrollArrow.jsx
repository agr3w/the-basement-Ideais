import React from 'react';
import { IconButton } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const ScrollArrow = ({ onClick }) => {
  return (
    <IconButton onClick={onClick} aria-label="Rolar para a próxima seção">
      <ArrowDownwardIcon />
    </IconButton>
  );
};

export default ScrollArrow;