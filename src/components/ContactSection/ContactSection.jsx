import React, { useState } from "react";
import { Box, Typography, Button, Paper } from "@mui/material";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import ContactSocials from "./subcomponents/ContactSocials";
import ContactChatModal from "./subcomponents/ContactChatModal";

const ContactSection = () => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    setStep(0);
    setForm({ name: "", email: "", message: "" });
    setSent(false);
  };

  return (
    <Paper
      variant="sectionContainer"
      sx={{
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 4,
        bgcolor: "background.paper",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "50%",
          width: 400,
          height: 400,
          bgcolor: "primary.main",
          opacity: 0.08,
          borderRadius: "50%",
          filter: "blur(60px)",
          transform: "translate(-50%, -50%)",
          zIndex: 0,
        }}
      />
      <MeetingRoomIcon
        sx={{ fontSize: 64, mb: 2, zIndex: 1 }}
        color="primary"
      />
      <Typography
        variant="h3"
        fontWeight="bold"
        color="text.primary"
        align="center"
        sx={{
          letterSpacing: 1,
          zIndex: 1,
          textShadow: "0 2px 16px rgba(0,0,0,0.18)",
        }}
      >
        Pronto para descer para o porão das ideias?
      </Typography>
      <Typography
        color="text.secondary"
        align="center"
        sx={{
          maxWidth: 500,
          fontSize: { xs: 18, md: 20 },
          zIndex: 1,
        }}
      >
        Vamos bater um papo rápido para entender sua ideia.
        <br />
        <span style={{ color: "#90caf9" }}>
          Clique na porta para começar a conversa!
        </span>
      </Typography>
      <ContactSocials />
      <Button
        variant="contained"
        size="large"
        sx={{
          mt: 2,
          px: 6,
          py: 2,
          fontWeight: "bold",
          fontSize: 20,
          borderRadius: 8,
          zIndex: 1,
          boxShadow: "0 4px 24px 0 rgba(0,0,0,0.18)",
        }}
        onClick={handleOpen}
        endIcon={<MeetingRoomIcon />}
      >
        Abrir a porta
      </Button>
      <ContactChatModal
        open={open}
        onClose={() => setOpen(false)}
        step={step}
        setStep={setStep}
        form={form}
        setForm={setForm}
        sent={sent}
        setSent={setSent}
      />
    </Paper>
  );
};

export default ContactSection;
