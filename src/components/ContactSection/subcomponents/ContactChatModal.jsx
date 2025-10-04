import React, { useState } from "react";
import { Box, Stack, Fade, Modal } from "@mui/material";
import steps from "./ContactFormSteps";
import ContactFormField from "./ContactFormField";
import ContactChatHeader from "./ContactChatHeader";
import ContactChatSuccess from "./ContactChatSuccess";
import ContactChatFormActions from "./ContactChatFormActions";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

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
  const [fieldError, setFieldError] = useState("");

  const currentStep = steps[step];

  const validateField = (value) => {
    if (currentStep.validate) {
      return currentStep.validate(value);
    }
    return "";
  };

  const handleNext = async () => {
    setError("");
    const validationMsg = validateField(form[currentStep.field]);
    setFieldError(validationMsg);
    if (validationMsg) return;

    if (step < steps.length - 1) {
      setStep(step + 1);
      setFieldError("");
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
    const value = e.target.value;
    if (currentStep.maxLength && value.length > currentStep.maxLength) return;
    setForm({ ...form, [currentStep.field]: value });
    setFieldError(validateField(value));
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
            bgcolor: "#222", // fundo preto/cinza escuro
            borderRadius: 4,
            boxShadow: "0 8px 32px 0 rgba(0,0,0,0.45)",
            p: { xs: 3, md: 4 },
            width: { xs: 320, md: 420 },
            outline: "none",
            color: "#fff", // texto branco
          }}
        >
          <ContactChatHeader onClose={onClose} sent={sent} step={step} />
          {sent ? (
            <ContactChatSuccess />
          ) : (
            <Stack spacing={2}>
              <ContactFormField
                stepConfig={currentStep}
                value={form[currentStep.field]}
                onChange={handleChange}
                error={fieldError}
                loading={loading}
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    !currentStep.multiline &&
                    !loading
                  )
                    handleNext();
                }}
                // Ajuste para campos ficarem escuros
                inputBg="#333"
                inputColor="#fff"
                helperColor="#bdbdbd"
              />
              <ContactChatFormActions
                loading={loading}
                error={error}
                step={step}
                stepsLength={steps.length}
                disabled={
                  !form[currentStep.field] ||
                  !!fieldError ||
                  loading
                }
                onClick={handleNext}
                buttonBg="#fff"
                buttonColor="#222"
                buttonHoverBg="#bdbdbd"
                buttonHoverColor="#222"
              />
            </Stack>
          )}
        </Box>
      </Fade>
    </Modal>
  );
};

export default ContactChatModal;