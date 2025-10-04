import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Stack,
  TextField,
  Button,
  Divider,
  Fade,
  Modal,
  CircularProgress,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";

const steps = [
  {
    label: "Qual seu nome?",
    field: "name",
    placeholder: "Digite seu nome",
  },
  {
    label: "Qual seu e-mail?",
    field: "email",
    placeholder: "Digite seu e-mail",
    type: "email",
  },
  {
    label: "Conte pra gente sua ideia ou desafio!",
    field: "message",
    placeholder: "Descreva sua ideia, projeto ou desafio...",
    multiline: true,
    rows: 4,
  },
];

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT; // Certifique-se de definir o caminho correto

if (!FORMSPREE_ENDPOINT) {
  // log para dev
  console.error("A variável VITE_FORMSPREE_ENDPOINT não está definida no .env");
}

const ContactChatModal = ({
  open,
  onClose,
  step,
  setStep,
  form,
  setForm,
  sent,
  setSent,
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleNext = async () => {
    setError("");
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      if (!FORMSPREE_ENDPOINT) {
        setError(
          "Erro de configuração: endpoint do formulário não encontrado. Avise o suporte."
        );
        return;
      }
      setLoading(true);
      try {
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        });
        if (response.ok) {
          setSent(true);
        } else if (response.status === 400) {
          setError("Preencha todos os campos corretamente.");
        } else if (response.status === 429) {
          setError(
            "Você já enviou uma mensagem recentemente. Aguarde um pouco e tente novamente."
          );
        } else {
          setError("Erro ao enviar. Tente novamente mais tarde.");
        }
      } catch {
        setError("Erro de conexão. Verifique sua internet e tente novamente.");
      }
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [steps[step].field]: e.target.value });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      sx={{
        zIndex: 1300,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        backdropFilter: "blur(4px)",
        bgcolor: "rgba(0, 0, 0, 0.3)",
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            borderRadius: 4,
            boxShadow: 24,
            p: { xs: 3, md: 4 },
            width: { xs: 320, md: 420 },
            outline: "none",
          }}
        >
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
          {sent ? (
            <Typography color="text.secondary" align="center">
              Obrigado por compartilhar sua ideia! Em breve entraremos em
              contato para descer juntos ao porão das ideias. 🚀
            </Typography>
          ) : (
            <Stack spacing={2}>
              <Typography color="text.primary" fontWeight="bold">
                {steps[step].label}
              </Typography>
              <TextField
                autoFocus
                fullWidth
                variant="filled"
                type={steps[step].type || "text"}
                placeholder={steps[step].placeholder}
                value={form[steps[step].field]}
                onChange={handleChange}
                multiline={steps[step].multiline}
                rows={steps[step].rows}
                InputProps={{
                  sx: {
                    bgcolor: "background.default",
                    borderRadius: 2,
                  },
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !steps[step].multiline && !loading)
                    handleNext();
                }}
                disabled={loading}
              />
              {error && (
                <Typography color="error" fontSize={14}>
                  {error}
                </Typography>
              )}
              <Button
                variant="contained"
                color="primary"
                endIcon={
                  loading ? (
                    <CircularProgress size={20} color="inherit" />
                  ) : step === steps.length - 1 ? (
                    <SendIcon />
                  ) : null
                }
                sx={{
                  fontWeight: "bold",
                  borderRadius: 2,
                  py: 1.2,
                  fontSize: 18,
                  mt: 1,
                  boxShadow: "0 4px 24px 0 rgba(0,0,0,0.10)",
                }}
                onClick={handleNext}
                disabled={!form[steps[step].field] || loading}
              >
                {step === steps.length - 1 ? "Enviar" : "Próximo"}
              </Button>
            </Stack>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default ContactChatModal;
