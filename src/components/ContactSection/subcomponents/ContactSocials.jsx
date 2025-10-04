import React from "react";
import { Stack, Tooltip, IconButton } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactSocials = () => (
  <Stack direction="row" spacing={2} sx={{ zIndex: 1 }}>
    <Tooltip title="E-mail">
      <IconButton
        color="primary"
        href="mailto:contato@thebasement.com"
        target="_blank"
        size="large"
        sx={{
          bgcolor: "background.default",
          border: "1.5px solid",
          borderColor: "primary.main",
          "&:hover": { bgcolor: "primary.main", color: "#fff" },
        }}
      >
        <AlternateEmailIcon />
      </IconButton>
    </Tooltip>
    <Tooltip title="WhatsApp">
      <IconButton
        color="success"
        href="https://wa.me/5599999999999"
        target="_blank"
        size="large"
        sx={{
          bgcolor: "background.default",
          border: "1.5px solid",
          borderColor: "success.main",
          "&:hover": { bgcolor: "success.main", color: "#fff" },
        }}
      >
        <WhatsAppIcon />
      </IconButton>
    </Tooltip>
    <Tooltip title="Instagram">
      <IconButton
        color="secondary"
        href="https://instagram.com/thebasement"
        target="_blank"
        size="large"
        sx={{
          bgcolor: "background.default",
          border: "1.5px solid",
          borderColor: "secondary.main",
          "&:hover": { bgcolor: "secondary.main", color: "#fff" },
        }}
      >
        <InstagramIcon />
      </IconButton>
    </Tooltip>
  </Stack>
);

export default ContactSocials;
