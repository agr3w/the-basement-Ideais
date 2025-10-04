// Bibliotecas
import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import WebIcon from "@mui/icons-material/Web";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import GroupIcon from "@mui/icons-material/Group";

// Sub-componentes
import ServiceCard from "./subcomponents/ServiceCard";
import ConnectingLine from "./subcomponents/ConnectingLine";
import ServiceModal from "./subcomponents/ServiceModal";

// Importa os dados completos dos serviços
import { servicesData } from "@/data/servicesData";

/**
 * @param {*} x - valor de deslocamento horizontal para animação
 * @returns {JSX.Element}
 * @description Esta seção apresenta os serviços oferecidos com cards animados e uma linha conectando-os.
 */
const ServicesSection = ({ x }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleClose = () => setModalOpen(false);

  const iconSize = 50; // Tamanho padrão dos ícones
  const iconsMap = {
    design: <DesignServicesIcon sx={{ fontSize: iconSize }} />,
    interface: <WebIcon sx={{ fontSize: iconSize }} />,
    sistemas: <SettingsSuggestIcon sx={{ fontSize: iconSize }} />,
    gestao: <GroupIcon sx={{ fontSize: iconSize }} />,
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#E0E0E0",
      }}
    >
      <Container maxWidth="xl" sx={{ height: "100%", position: "relative" }}>
        <Typography
          variant="h3"
          sx={{ color: "black", pt: 4, fontWeight: "bold" }}
        >
          Nossos Serviços
        </Typography>
        <motion.div
          style={{
            x,
            position: "absolute",
            top: 0,
            left: 0,
            width: "550%",
            height: "100%",
          }}
        >
          <ConnectingLine />
          {servicesData.map((service, index) => (
            <Box
              key={index}
              sx={{
                position: "absolute",
                top: service.top,
                left: service.left,
                transform: "translateY(-50%)",
                zIndex: 2,
                cursor: "pointer",
              }}
              onClick={() => handleCardClick(service)}
            >
              <ServiceCard icon={iconsMap[service.key]} title={service.title} />
            </Box>
          ))}
        </motion.div>
        <ServiceModal
          open={modalOpen}
          onClose={handleClose}
          service={{ ...selectedService, icon: iconsMap[selectedService?.key] }}
        />
      </Container>
    </Box>
  );
};

export default ServicesSection;
