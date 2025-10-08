import React from "react";
import { Box, Typography, Stack, Link } from "@mui/material";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      width: "100%",
      bgcolor: "background.paper",
      borderTop: "1px solid",
      borderColor: "divider",
      py: { xs: 3, md: 4 },
      px: { xs: 2, md: 8 },
      mt: { xs: 6, md: 8 },
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: { xs: "flex-start", md: "center" },
      justifyContent: "space-between",
      gap: { xs: 2, md: 0 },
      zIndex: 10,
    }}
  >
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{
        fontWeight: 500,
        letterSpacing: 1,
        mb: { xs: 1, md: 0 },
        textAlign: { xs: "center", md: "left" },
        width: { xs: "100%", md: "auto" },
      }}
    >
      © {new Date().getFullYear()} The Wavem
    </Typography>
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={1.5}
      display="flex"
      alignItems={{ xs: "flex-start", sm: "center" }}
      justifyContent="center"
      sx={{ width: { xs: "100%", md: "auto" }, textAlign: { xs: "center", sm: "left" } }}
    >
      <Typography variant="body2" color="text.secondary">
        Feito com o ♥ por idealizadores apaixonados por inovação.
      </Typography>
      <Link
        href="mailto:contato.thewavem@gmail.com"
        underline="hover"
        color="primary"
        sx={{ fontWeight: 500, ml: { xs: 0, sm: 1 } }}
      >
        contato.thewavem@gmail.com
      </Link>
    </Stack>
  </Box>
);

export default Footer;