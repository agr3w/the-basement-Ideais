import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const ContactCTA = () => {
  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
          Vamos Construir Algo Incrível Juntos?
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
          Se você tem uma ideia, um projeto ou apenas quer dizer oi, adoraríamos ouvir de você.
        </Typography>
        <Button variant="contained" color="primary" size="large" href="/contato">
          Entre em Contato
        </Button>
      </Container>
    </Box>
  );
};

export default ContactCTA;