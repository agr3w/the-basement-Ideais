import React from "react";
import { Box, Grid, Paper } from "@mui/material";

import Logo from "./subcomponents/Logo";
import Slogan from "./subcomponents/Slogan";
import ConceptualSVG from "./subcomponents/ConceptualSVG";
import ScrollArrow from "./subcomponents/ScrollArrow";

const HeroSection = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("service-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Paper
      variant="heroContainer"
      elevation={0}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        textAlign: "start",
      }}
    >
      <Box>
        <Logo />
      </Box>

      <Grid container spacing={2} alignItems="center" my={2}>
        <Grid >
          <Slogan />
        </Grid>
        <Grid sx={{ display: "flex" }}>
          <ConceptualSVG color="#fff" />
        </Grid>
      </Grid>

      <Box>
        <ScrollArrow onClick={handleScroll} />
      </Box>
    </Paper>
  );
};

export default HeroSection;
