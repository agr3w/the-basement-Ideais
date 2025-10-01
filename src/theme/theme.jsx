import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#000000', // Mudei para preto como cor primária
    },
    secondary: {
      main: '#B3B3B3',
    },
    background: {
      default: '#000000ff', // Agora o fundo padrão é branco
      paper: '#F0F0F0',   // Um cinza bem claro para "papéis"
      dark: '#0A0A0A',    // Adicionei um "dark" para o preto que usaremos
    },
    text: {
      primary: '#000000', // Texto primário agora é preto
      secondary: '#555555', // Cinza mais escuro para secundário
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      color: '#000000', // Garante que h1 seja preto
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#000000', // Garante que h2 seja preto
    },
    h6: {
      color: '#000000', // Garante que h6 seja preto
    },
    body1: {
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.7,
      color: '#000000', // Garante que body1 seja preto
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Cantos levemente arredondados para botões
          textTransform: 'none',
          padding: '10px 24px',
        },
        containedPrimary: {
          backgroundColor: '#000000', // Botão preto com texto branco
          color: '#FFFFFF',
          '&:hover': {
            backgroundColor: '#333333',
          },
        },
        outlinedPrimary: {
          borderColor: '#000000',
          color: '#000000',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderColor: '#000000',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16, // Cantos arredondados para Paper (cards)
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          borderColor: '#000000',
          color: '#000000',
        },
        outlined: {
          borderColor: '#000000',
          color: '#000000',
        },
      },
    },
    MuiAppBar: { // Ajuste para a Navbar, se mantivermos ela em outras páginas
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fundo branco semi-transparente
          color: '#000000', // Texto preto na navbar
          borderColor: 'rgba(0, 0, 0, 0.1)',
        }
      }
    },
    MuiIconButton: { // Ajuste para os ícones sociais no Footer
      styleOverrides: {
        root: {
          color: '#000000', // Ícones pretos
        }
      }
    }
  },
});

export default theme;