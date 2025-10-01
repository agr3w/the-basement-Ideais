import React from 'react';
import { Box, Container, Typography, IconButton, Stack, Divider } from '@mui/material';
import Logo from '../common/Logo';

// Importando ícones para as redes sociais
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X'; // O novo ícone para o Twitter

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box 
      component="footer" 
      sx={{ 
        backgroundColor: 'background.default', // Usando a cor de fundo padrão
        py: 6, // Padding vertical (padding-top e padding-bottom)
        borderTop: '1px solid',
        borderColor: 'rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: 'column', sm: 'row' }} // Coluna em telas pequenas, linha em maiores
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
          {/* Lado Esquerdo: Logo e Copyright */}
          <Stack 
            direction="column" 
            alignItems={{ xs: 'center', sm: 'flex-start' }} 
            spacing={1}
          >
            <Logo />
            <Typography variant="body2" color="text.secondary">
              © {currentYear} The Basement. Todos os direitos reservados.
            </Typography>
          </Stack>

          {/* Lado Direito: Social Media Icons */}
          <Stack direction="row" spacing={1}>
            <IconButton 
              aria-label="GitHub" 
              color="secondary" 
              href="https://github.com" // SUBSTITUIR COM SEU LINK
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton 
              aria-label="LinkedIn" 
              color="secondary" 
              href="https://linkedin.com" // SUBSTITUIR COM SEU LINK
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton 
              aria-label="X (Twitter)" 
              color="secondary" 
              href="https://X.com" // SUBSTITUIR COM SEU LINK
              target="_blank"
            >
              <XIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;