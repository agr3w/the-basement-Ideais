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
      py: 3,
      px: 2,
      mt: 8,
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      alignItems: "center",
      justifyContent: "space-between",
      zIndex: 10,
    }}
  >
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{ fontWeight: 500, letterSpacing: 1 }}
    >
      © {new Date().getFullYear()} The Basement Ideais
    </Typography>
    <Stack direction="row" spacing={2} display="flex" alignItems="center" justifyContent="center">
      <Typography variant="body2" color="text.secondary">
        Feito com o ♥ por idealizadores apaixonados por inovação.
      </Typography>
      <Link
        href="mailto:contato@thebasement.com"
        underline="hover"
        color="primary"
        sx={{ fontWeight: 500, ml: 1 }}
      >
        contato@thebasement.com
      </Link>
    </Stack>
  </Box>
);

export default Footer;
