import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  // 1. PALETA DE CORES
  palette: {
    mode: 'dark', // O tema base é escuro
    background: {
      default: '#333333', // Fundo principal da página (cinza escuro)
      paper: '#1C1C1C',   // Cor padrão para componentes "Paper" (o card do Hero)
    },
    text: {
      primary: '#FFFFFF', // Cor de texto principal
      secondary: 'rgba(255, 255, 255, 0.7)', // Cor para textos secundários
    },
  },

  // 2. TIPOGRAFIA
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h3: {
      fontWeight: 400,
      lineHeight: 1.4,
      fontSize: '3rem',
      '@media (max-width:600px)': {
        fontSize: '2rem', // Responsividade da fonte
      },
    },
  },

  // 3. ESTILOS COMPONENTIZADOS
  components: {
    // Definindo um estilo padrão para todos os componentes Paper
    MuiPaper: {
      defaultProps: {
        elevation: 0, // Removemos todas as sombras por padrão
      },
      styleOverrides: {
        root: {
          // Estilos que todos os Papers terão
        },
      },
      // Criando uma "variante" customizada para o nosso HeroSection
      variants: [
        {
          props: { variant: 'heroContainer' },
          style: {
            width: '100%',
            height: '100%',
            padding: '24px 32px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#1C1C1C',
            borderRadius: '24px',
            '@media (max-width:600px)': {
              padding: '24px',
              borderRadius: '16px',
            },
          },
        },
      ],
    },

    // Definindo um estilo padrão para todos os IconButtons
    MuiIconButton: {
      styleOverrides: {
        root: {
          border: '1px solid rgba(255, 255, 255, 0.5)',
          color: '#FFFFFF',
          transition: 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            transform: 'scale(1.1)',
          },
        },
      },
    },
    
    // Outros componentes podem ser estilizados aqui...
  },
});

export default theme;