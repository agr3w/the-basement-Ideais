import React from "react";
import { Button, Typography, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const ContactChatFormActions = ({
  loading,
  error,
  step,
  stepsLength,
  disabled,
  onClick,
}) => (
  <>
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
        ) : step === stepsLength - 1 ? (
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
      onClick={onClick}
      disabled={disabled}
    >
      {step === stepsLength - 1 ? "Enviar" : "Próximo"}
    </Button>
  </>
);

export default ContactChatFormActions;