import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const StaircaseIcon = ({ color = 'currentColor' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 18h4v-4h4v-4h4V6h4" />
  </svg>
);

const Logo = ({ color = 'text.primary' }) => {
  const theme = useTheme(); // Hook deve ser chamado aqui, dentro do componente

  // Resolve a cor real baseada no tema
  const resolvedColor = color === 'text.primary' ? theme.palette.text.primary : color;

  return (
    <Box
      component={RouterLink}
      to="/"
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1,
        textDecoration: 'none',
        color: resolvedColor,
      }}
    >
      <StaircaseIcon color={resolvedColor} />
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          letterSpacing: '0.1rem',
        }}
      >
        The Basement
      </Typography>
    </Box>
  );
};

export default Logo;