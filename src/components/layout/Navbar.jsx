import React from 'react';
import { AppBar, Toolbar, Box, Button, Container } from '@mui/material';
import Logo from '../common/Logo'; // Importando nosso novo componente de Logo

const navItems = ['Projetos', 'Sobre Nós', 'Contato'];

const Navbar = () => {
  return (
    <AppBar
      position="fixed" // Fixa a navbar no topo
      sx={{
        backgroundColor: 'rgba(10, 10, 10, 0.8)', // Fundo preto semi-transparente
        backdropFilter: 'blur(10px)', // Efeito de vidro fosco, super moderno!
        boxShadow: 'none', // Sem sombra, para um look mais clean
        borderBottom: '1px solid',
        borderColor: 'rgba(255, 255, 255, 0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters> {/* disableGutters remove os paddings laterais do Toolbar */}
          
          {/* Logo alinhado à esquerda */}
          <Box sx={{ flexGrow: 1 }}>
            <Logo />
          </Box>

          {/* Itens do menu alinhados à direita */}
          <Box>
            {navItems.map((item) => (
              <Button key={item} color="primary" sx={{ ml: 2 }}>
                {item}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;