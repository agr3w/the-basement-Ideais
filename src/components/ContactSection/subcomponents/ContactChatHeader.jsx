import React from "react";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const ContactChatHeader = ({ onClose, sent, step }) => (
  <>
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <IconButton onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </Box>
    <Typography
      variant="h5"
      fontWeight="bold"
      mb={2}
      color="primary"
      sx={{ letterSpacing: 1 }}
    >
      {sent
        ? "Mensagem enviada!"
        : step === 0
        ? "Vamos começar 👋"
        : "Continue contando..."}
    </Typography>
    <Divider sx={{ mb: 2 }} />
  </>
);

export default ContactChatHeader;