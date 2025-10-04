import React from "react";
import { TextField, Typography } from "@mui/material";

const ContactFormField = ({
  stepConfig,
  value,
  onChange,
  error,
  loading,
  onKeyDown,
}) => (
  <>
    <Typography color="text.primary" fontWeight="bold">
      {stepConfig.label}
    </Typography>
    <TextField
      autoFocus
      fullWidth
      variant="filled"
      type={stepConfig.type || "text"}
      placeholder={stepConfig.placeholder}
      value={value}
      onChange={onChange}
      multiline={stepConfig.multiline}
      rows={stepConfig.rows}
      inputProps={{
        maxLength: stepConfig.maxLength,
      }}
      helperText={error ? error : stepConfig.helperText}
      error={!!error}
      InputProps={{
        sx: {
          bgcolor: "background.default",
          borderRadius: 2,
        },
      }}
      onKeyDown={onKeyDown}
      disabled={loading}
    />
  </>
);

export default ContactFormField;