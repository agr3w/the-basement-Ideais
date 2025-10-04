import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  // PALETA DE CORES
  palette: {
    mode: "dark", // O tema base é escuro
    background: {
      default: "#333333", // Fundo principal da página (cinza escuro)
      paper: "#1C1C1C", // Cor padrão para componentes "Paper" (o card do Hero)
    },
    text: {
      primary: "#FFFFFF", // Cor de texto principal
      secondary: "rgba(255, 255, 255, 0.7)", // Cor para textos secundários
    },
  },

  // TIPOGRAFIA
  typography: {
    fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif', 
    h3: {
      fontWeight: 400,
      lineHeight: 1.4,
      fontSize: "3rem",
      "@media (max-width:600px)": {
        fontSize: "2rem", // Responsividade da fonte
      },
    },
  },

  // ESTILOS COMPONENTIZADOS
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
          props: { variant: "heroContainer" },
          style: {
            width: "100%",
            height: "100%",
            padding: "24px 32px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "#1C1C1C",
            borderRadius: "24px",
            "@media (max-width:600px)": {
              padding: "24px",
              borderRadius: "16px",
            },
          },
        },
        // NOVO: Variante para os containers de seção (como TeamSection)
        {
          props: { variant: "sectionContainer" },
          style: {
            minHeight: "80vh",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(28,28,28,0.95)",
            borderRadius: "32px",
            padding: "48px 32px",
            boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)",
            "@media (max-width:900px)": {
              padding: "32px 8px",
              borderRadius: "20px",
            },
            "@media (max-width:600px)": {
              padding: "16px 0",
              borderRadius: "12px",
            },
          },
        },
        // NOVO: Variante para o card de cada membro da equipe
        {
          props: { variant: "memberCard" },
          style: {
            backgroundColor: "rgba(255,255,255,0.08)",
            padding: "28px 20px",
            borderRadius: "18px",
            width: "100%",
            boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)",
            transition: "transform 0.2s, box-shadow 0.2s, background 0.2s",
            display: "flex",
            alignItems: "center",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.16)",
              transform: "translateY(-4px) scale(1.03)",
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.28)",
            },
          },
        },
      ],
    },

    // Definindo um estilo padrão para todos os IconButtons
    MuiIconButton: {
      styleOverrides: {
        root: {
          border: "1px solid rgba(255, 255, 255, 0.5)",
          color: "#FFFFFF",
          transition:
            "transform 0.2s ease-in-out, background-color 0.2s ease-in-out",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            transform: "scale(1.1)",
          },
        },
      },
    },

    // Outros componentes podem ser estilizados aqui...
  },
});

export default theme;
