import React from "react";
import { TextField, Typography } from "@mui/material";

const ContactFormField = ({
  stepConfig,
  value,
  onChange,
  error,
  loading,
  onKeyDown,
  inputBg = "#333",
  inputColor = "#fff",
  helperColor = "#bdbdbd"
}) => (
  <>
    <Typography color="#fff" fontWeight="bold">
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
        style: { color: inputColor }
      }}
      helperText={error ? error : stepConfig.helperText}
      FormHelperTextProps={{
        sx: { color: helperColor }
      }}
      error={!!error}
      InputProps={{
        sx: {
          bgcolor: inputBg,
          borderRadius: 2,
          color: inputColor,
        },
      }}
      onKeyDown={onKeyDown}
      disabled={loading}
    />
  </>
);

export default ContactFormField;