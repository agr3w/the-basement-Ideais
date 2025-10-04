import React from "react";
import { Box, Typography, Grid, Stack, Paper } from "@mui/material"; // Trocamos Container por Paper

import Logo from "../HeroSection/subcomponents/Logo";
import TeamMemberCard from "./subcomponents/TeamMemberCard";

// Dados da equipe (no futuro, isso pode vir de uma API)
const teamData = [
  {
    name: "Pessoa 1",
    role: "Desenvolvedor Front-end",
    avatarUrl: "/path/to/avatar1.jpg",
  },
  {
    name: "Pessoa 2",
    role: "UI/UX Designer",
    avatarUrl: "/path/to/avatar2.jpg",
  },
  {
    name: "Pessoa 3",
    role: "Desenvolvedor Back-end",
    avatarUrl: "/path/to/avatar3.jpg",
  },
  {
    name: "Pessoa 4",
    role: "Gerente de Projetos",
    avatarUrl: "/path/to/avatar4.jpg",
  },
  {
    name: "Pessoa 5",
    role: "Engenheiro de DevOps",
    avatarUrl: "/path/to/avatar5.jpg",
  },
  {
    name: "Pessoa 6",
    role: "Analista de QA",
    avatarUrl: "/path/to/avatar6.jpg",
  },
];

const TeamSection = () => {
  return (
    // Trocamos o Box por Paper e aplicamos nossa variante 'sectionContainer'
    <Paper variant="sectionContainer">
      <Stack spacing={10}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Logo />
        </Box>
        {/* Este Typography usa o h3 do tema e a cor primária */}
        <Typography
          variant="h3"
          color="text.primary"
          align="center"
          fontWeight={"bold"}
          //   sx={{ textDecoration: "underline" }}
        >
          Conheça a equipe
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {teamData.map((member, index) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              key={index}
              sx={{
                display: "flex",
                alignItems: "stretch",
                justifyContent: "center",
              }}
            >
              <TeamMemberCard
                name={member.name}
                role={member.role}
                avatarUrl={member.avatarUrl}
                style={{
                  height: "140px", // altura fixa
                  width: "320px", // largura fixa
                  minWidth: "220px",
                  maxWidth: "100%",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Paper>
  );
};

export default TeamSection;
