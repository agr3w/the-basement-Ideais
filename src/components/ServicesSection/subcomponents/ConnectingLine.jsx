import React from 'react';
import { Box } from '@mui/material';

/**
 * @returns {JSX.Element}
 * @description Componente de linha que conecta visualmente os cards de serviço.
 */
const ConnectingLine = () => (
  <Box
    sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
    }}
  >
    <svg width="100%" height="100%" viewBox="0 0 1600 600" preserveAspectRatio="none">
      <path
        d="M 150 300 Q 350 150, 550 300 T 950 450 T 1350 300"
        stroke="rgba(0, 0, 0, 0.3)"
        strokeWidth="2"
        fill="none"
        strokeDasharray="5 5"
      />
    </svg>
  </Box>
);

export default ConnectingLine;