import React, { useState } from "react";
import { Box, Typography, Container, useMediaQuery } from "@mui/material";
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

  const iconSize = 50;
  const iconsMap = {
    design: <DesignServicesIcon sx={{ fontSize: iconSize }} />,
    interface: <WebIcon sx={{ fontSize: iconSize }} />,
    sistemas: <SettingsSuggestIcon sx={{ fontSize: iconSize }} />,
    gestao: <GroupIcon sx={{ fontSize: iconSize }} />,
  };

  // Detecta telas pequenas: no mobile usamos layout vertical
  const isMobile = useMediaQuery("(max-width:768px)");

  if (isMobile) {
    return (
      <Box
        sx={{
          minHeight: "100%",
          width: "95%",
          position: "relative",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: 2,
          mx: "auto",
          backgroundColor: "#F5F5F7",
          borderRadius: 2,
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            px: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#111827",
              fontWeight: 700,
              mb: 1.5,
              textAlign: "center",
            }}
          >
            Nossos Serviços
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#4B5563",
              mb: 4,
              textAlign: "center",
              maxWidth: 680,
            }}
          >
            Soluções pensadas para o seu negócio — clique em um card para ver mais
            detalhes.
          </Typography>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: 3,
              alignItems: "center",
              pb: 6,
            }}
          >
            {servicesData.map((service, index) => (
              <Box
                key={index}
                sx={{
                  width: "100%",
                  maxWidth: 640,
                  px: { xs: 1, sm: 2 },
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={() => handleCardClick(service)}
              >
                <ServiceCard
                  icon={iconsMap[service.key]}
                  title={service.title}
                  sx={{ width: "100%" }}
                />
              </Box>
            ))}
          </Box>

          <ServiceModal
            open={modalOpen}
            onClose={handleClose}
            service={{ ...selectedService, icon: iconsMap[selectedService?.key] }}
          />
        </Container>
      </Box>
    );
  }

  // Desktop / layout horizontal original (mantido) com espaçamento extra e título centralizado
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#E0E0E0",
        py: { xs: 4, md: 8 },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          height: "100%",
          position: "relative",
          py: { xs: 4, md: 6 },
          px: { xs: 2, md: 8 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "black",
            pt: 2,
            fontWeight: "bold",
            textAlign: "center",
            mb: 3,
            position: "relative",
            zIndex: 3,
          }}
        >
          Nossos Serviços
        </Typography>

        <motion.div
          style={{
            x,
            position: "absolute",
            top: 120,
            left: 0,
            width: "550%",
            height: "calc(100% - 120px)",
            zIndex: 1,
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
