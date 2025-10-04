import { Box, Stack } from "@mui/material";

// Nomes das seções (ajuste conforme suas seções reais)
const sectionNames = ["Início", "Serviços", "Equipe", "Contato"];

/**
 * @param {*} param0
 * @returns {JSX.Element}
 * @description Componente de navegação por pontos para indicar a seção ativa.
 */
const NavigationDots = ({ total, activeIndex, onDotClick }) => (
  <Box
    sx={{
      position: "fixed",
      top: "50%",
      right: { xs: "10px", md: "28px" },
      transform: "translateY(-50%)",
      zIndex: 10,
    }}
  >
    <Stack spacing={2}>
      {Array.from({ length: total }).map((_, index) => {
        const isActive = activeIndex === index;
        return (
          <Box
            key={index}
            onClick={() => onDotClick(index)}
            sx={{
              width: 13,
              height: 13,
              borderRadius: "50%",
              background: isActive ? "#fff" : "#bdbdbd",
              border: isActive
                ? "2px solid #757575"
                : "1.5px solid #e0e0e0",
              boxShadow: isActive
                ? "0 0 6px 1px #bdbdbd"
                : "none",
              cursor: "pointer",
              transition: "all 0.18s cubic-bezier(.4,0,.2,1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              "&:hover": {
                background: "#fff",
                border: "2px solid #757575",
                boxShadow: "0 0 10px 2px #e0e0e0",
              },
              "&:hover .dot-label": {
                opacity: 1,
                transform: "translateY(-50%) scale(1)",
              },
            }}
          >
            {/* Label minimalista ao hover */}
            <Box
              className="dot-label"
              sx={{
                position: "absolute",
                right: "130%",
                top: "50%",
                bgcolor: "#222",
                color: "#fff",
                px: 1.5,
                py: 0.2,
                borderRadius: 1,
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: 0.3,
                boxShadow: "0 2px 8px 0 rgba(28,28,28,0.10)",
                opacity: 0,
                pointerEvents: "none",
                transform: "translateY(-50%) scale(0.95)",
                transition: "all 0.18s cubic-bezier(.4,0,.2,1)",
                whiteSpace: "nowrap",
              }}
            >
              {sectionNames[index] || `Seção ${index + 1}`}
            </Box>
          </Box>
        );
      })}
    </Stack>
  </Box>
);

export default NavigationDots;