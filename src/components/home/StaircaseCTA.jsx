import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { motion } from 'framer-motion';

// Ícone da escada que já temos no Logo.jsx, mas agora standalone.
const StaircaseIcon = ({ color }) => (
  <svg 
    width="48" // Tamanho maior
    height="48"
    viewBox="0 0 24 24" 
    fill="none" 
    stroke={color}
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M4 18h4v-4h4v-4h4V6h4" />
  </svg>
);

const StaircaseCTA = ({ onClick }) => {
  const theme = useTheme();

  return (
    <Box
      onClick={onClick}
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        textAlign: 'center',
        gap: 2,
        transition: 'background-color 0.3s ease',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.05)', // Leve brilho no hover
        },
      }}
    >
      {/* Container para a animação */}
      <motion.div
        animate={{ y: [0, 10, 0] }} // Animação: Posição inicial -> desce 10px -> volta
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <StaircaseIcon color="#FFFFFF" />
      </motion.div>

      <Typography variant="h6" component="p" sx={{ color: theme.palette.grey[400] }}>
        Explore a fundação
      </Typography>
    </Box>
  );
};

export default StaircaseCTA;