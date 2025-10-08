import React from "react";
import { Stack, Tooltip, IconButton } from "@mui/material";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

const ContactSocials = () => (
  <Stack direction="row" spacing={2} sx={{ zIndex: 1 }}>
    <Tooltip title="E-mail">
      <IconButton
        href="mailto:contato.thewavem@gmail.com"
        target="_blank"
        size="large"
        sx={{
          bgcolor: "#222",
          color: "#fff",
          border: "1.5px solid #757575",
          "&:hover": {
            bgcolor: "#fff",
            color: "#222",
            border: "1.5px solid #fff",
          },
        }}
      >
        <AlternateEmailIcon />
      </IconButton>
    </Tooltip>
    {/* <Tooltip title="WhatsApp">
      <IconButton
        href="https://wa.me/5599999999999"
        target="_blank"
        size="large"
        sx={{
          bgcolor: "#222",
          color: "#fff",
          border: "1.5px solid #757575",
          "&:hover": {
            bgcolor: "#fff",
            color: "#222",
            border: "1.5px solid #fff",
          },
        }}
      >
        <WhatsAppIcon />
      </IconButton>
    </Tooltip> */}
    {/* <Tooltip title="Instagram">
      <IconButton
        href="https://instagram.com/thebasement"
        target="_blank"
        size="large"
        sx={{
          bgcolor: "#222",
          color: "#fff",
          border: "1.5px solid #757575",
          "&:hover": {
            bgcolor: "#fff",
            color: "#222",
            border: "1.5px solid #fff",
          },
        }}
      >
        <InstagramIcon />
      </IconButton>
    </Tooltip> */}
  </Stack>
);

export default ContactSocials;