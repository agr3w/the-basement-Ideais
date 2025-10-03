import React from 'react';
import { Paper, Typography, Stack } from '@mui/material';

/**
 * @param {*} icon - Ícone a ser exibido no card
 * @param {*} title - Título do serviço
 * @returns {JSX.Element}
 * @description Este componente representa um card de serviço com ícone e título.
 */
const ServiceCard = ({ icon, title }) => {
  return (
    <Paper 
      sx={{
        backgroundColor: '#1C1C1C',
        color: 'white',
        width: { xs: 200, md: 250 },
        height: { xs: 180, md: 220 },
        borderRadius: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        p: 2,
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-10px)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        }
      }}
    >
      <Stack spacing={2} alignItems="center">
        {icon}
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          {title}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default ServiceCard;