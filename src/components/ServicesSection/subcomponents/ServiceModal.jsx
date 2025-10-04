import React from "react";
import { Box, Typography, Modal, Fade, Backdrop } from "@mui/material";

/**
 * Modal para exibir detalhes do serviço selecionado.
 * @param {boolean} open - Se o modal está aberto
 * @param {function} onClose - Função para fechar o modal
 * @param {object} service - Serviço selecionado
 */
const ServiceModal = ({ open, onClose, service }) => (
  <Modal
    open={open}
    onClose={onClose}
    closeAfterTransition
    BackdropComponent={Backdrop}
    BackdropProps={{ timeout: 300 }}
  >
    <Fade in={open}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "#E0E0E0",
          borderRadius: 4,
          boxShadow: 24,
          p: 4,
          width: { xs: 320, md: 480 },
          minHeight: { xs: 220, md: 280 },
          outline: "none",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Typography
            component="span"
            sx={{
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: 24,
              color: "#333",
            }}
            onClick={onClose}
          >
            &times;
          </Typography>
        </Box>
        <Typography variant="h4" sx={{ color: "#1C1C1C", mb: 2, display: "flex", alignItems: "center", gap: 1 }}>
          {service?.icon}
          {service?.title}
        </Typography>
        <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
          <Typography sx={{ flex: 1, color: "#222" }}>
            {service?.modalText || service?.description}
          </Typography>
          <Box
            sx={{
              bgcolor: "#bdbdbd",
              borderRadius: 3,
              width: 120,
              height: 80,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              color: "#333",
              fontSize: 14,
              overflow: "hidden",
            }}
          >
            {service?.modalImg ? (
              <img
                src={service.modalImg}
                alt={`Contexto de ${service.title}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            ) : (
              "IMG DE CONTEXTO"
            )}
          </Box>
        </Box>
      </Box>
    </Fade>
  </Modal>
);

export default ServiceModal;