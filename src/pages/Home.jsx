// Bibliotecas
import React from "react";
import { Box, Typography } from "@mui/material";

// Componentes
import FullPageScroll from "@/components/layout/FullPageScroll";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import TeamSection from "../components/TeamSection/TeamSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/layout/Footer";

/**
 * @todo: Adicionar mais seções conforme necessário
 * @returns {JSX.Element} Componente da página inicial com rolagem de página cheia
 * @description Esta página inicial utiliza o componente FullPageScroll para criar uma experiência de rolagem de página cheia.
 */
const Home = () => {
  return (
    <>
      <FullPageScroll>
        {/* Cada Box aqui é um "slide" de tela cheia */}
        <Box
          sx={{
            height: "100vh",
            width: "100vw",
            p: { xs: "16px", md: "32px" },
          }}
        >
          <HeroSection />
        </Box>
          
        <ServicesSection
          type="horizontal-scroll"
          trackWidth={400}
          id="service-section"
        />

        <Box sx={{ p: { xs: "16px", md: "32px" } }}>
          <TeamSection />
        </Box>
        
        <Box sx={{ p: { xs: "16px", md: "32px" } }}>
          <ContactSection />
          <Footer />
        </Box>
      </FullPageScroll>
    </>
  );
};

export default Home;
